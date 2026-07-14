import { createDecipheriv } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDataPath = path.join(root, 'data', 'community-media.json');
const configuredOutputDirectory = String(process.env.PUBLICATION_OUTPUT_DIR || '.').trim();
const outputRoot = path.resolve(root, configuredOutputDirectory);
const outputDataPath = path.join(outputRoot, 'data', 'community-media-entry.json');
const mediaDirectory = path.join(outputRoot, 'assets', 'community');
const maximumAttachments = 4;
const maximumAttachmentBytes = 10 * 1024 * 1024;
const maximumTotalBytes = 25 * 1024 * 1024;
const maximumInputPixels = 40_000_000;
const allowedDiscordHosts = new Set(['cdn.discordapp.com', 'media.discordapp.net']);
const allowedContentTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);

if (outputRoot !== root && !outputRoot.startsWith(`${root}${path.sep}`)) {
  throw new Error('PUBLICATION_OUTPUT_DIR must remain inside the checked-out repository.');
}

function fail(message) {
  throw new Error(message);
}

function decodeSecret(value) {
  const text = String(value || '').trim();
  const key = /^[a-f0-9]{64}$/i.test(text)
    ? Buffer.from(text, 'hex')
    : Buffer.from(text, 'base64');

  if (key.length !== 32) {
    fail('WEBSITE_PUBLISH_PAYLOAD_SECRET must decode to exactly 32 bytes.');
  }

  return key;
}

function decryptPayload(value, secret) {
  const [version, encodedIv, encodedTag, encodedCiphertext, ...extra] = String(value || '').split('.');

  if (version !== 'v1' || !encodedIv || !encodedTag || !encodedCiphertext || extra.length > 0) {
    fail('Encrypted publication payload has an invalid envelope.');
  }

  const iv = Buffer.from(encodedIv, 'base64url');
  const tag = Buffer.from(encodedTag, 'base64url');
  const ciphertext = Buffer.from(encodedCiphertext, 'base64url');

  if (iv.length !== 12 || tag.length !== 16 || ciphertext.length === 0 || ciphertext.length > 32_000) {
    fail('Encrypted publication payload has invalid bounds.');
  }

  const decipher = createDecipheriv('aes-256-gcm', decodeSecret(secret), iv);
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);

  if (plaintext.length > 24_000) {
    fail('Decrypted publication payload is too large.');
  }

  return JSON.parse(plaintext.toString('utf8'));
}

function cleanSingleLine(value, maximumLength, label) {
  const text = String(value || '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text || text.length > maximumLength) {
    fail(`${label} is missing or exceeds ${maximumLength} characters.`);
  }

  return text;
}

function cleanMultiline(value, maximumLength, label) {
  const text = String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .trim();

  if (!text || text.length > maximumLength) {
    fail(`${label} is missing or exceeds ${maximumLength} characters.`);
  }

  return text;
}

function validateDiscordAttachment(attachment) {
  if (!attachment || typeof attachment !== 'object') {
    fail('Attachment metadata is invalid.');
  }

  const url = new URL(String(attachment.url || ''));
  const contentType = String(attachment.contentType || '').toLowerCase();
  const size = Number(attachment.size);

  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.hash ||
    !allowedDiscordHosts.has(url.hostname.toLowerCase()) ||
    !/^\/attachments\/\d+\/\d+\//.test(url.pathname)
  ) {
    fail('Attachment URL is not an approved Discord CDN attachment.');
  }

  if (!allowedContentTypes.has(contentType)) {
    fail('Attachment metadata contains a blocked media type.');
  }

  if (!Number.isSafeInteger(size) || size <= 0 || size > maximumAttachmentBytes) {
    fail('Attachment metadata contains an invalid file size.');
  }

  return {
    url: url.toString(),
    contentType,
    size
  };
}

function detectImageType(buffer) {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return 'image/jpeg';
  }

  if (
    buffer.length >= 8 &&
    buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) {
    return 'image/png';
  }

  if (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
    buffer.subarray(8, 12).toString('ascii') === 'WEBP'
  ) {
    return 'image/webp';
  }

  return null;
}

async function readBoundedBody(response, maximumBytes) {
  if (!response.body) {
    fail('Discord returned an empty attachment response.');
  }

  const reader = response.body.getReader();
  const chunks = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    totalBytes += value.byteLength;

    if (totalBytes > maximumBytes) {
      await reader.cancel();
      fail('Discord attachment exceeded the hard download limit.');
    }

    chunks.push(Buffer.from(value));
  }

  return Buffer.concat(chunks, totalBytes);
}

async function downloadAttachment(attachment) {
  const response = await fetch(attachment.url, {
    redirect: 'error',
    signal: AbortSignal.timeout(20_000),
    headers: {
      Accept: attachment.contentType,
      'User-Agent': 'Luminox-GitHub-Media-Sanitizer/1.0'
    }
  });

  if (!response.ok) {
    await response.body?.cancel();
    fail(`Discord attachment download failed with HTTP ${response.status}.`);
  }

  const responseType = String(response.headers.get('content-type') || '').split(';')[0].toLowerCase();
  const declaredLength = Number(response.headers.get('content-length'));

  if (!allowedContentTypes.has(responseType)) {
    await response.body?.cancel();
    fail('Discord returned a blocked attachment content type.');
  }

  if (Number.isFinite(declaredLength) && declaredLength > maximumAttachmentBytes) {
    await response.body?.cancel();
    fail('Discord attachment exceeds the maximum allowed size.');
  }

  const input = await readBoundedBody(response, maximumAttachmentBytes);
  const detectedType = detectImageType(input);

  if (!detectedType || detectedType !== responseType || detectedType !== attachment.contentType) {
    fail('Attachment signature does not match its declared image type.');
  }

  return input;
}

async function loadGalleryData() {
  try {
    const parsed = JSON.parse(await fs.readFile(sourceDataPath, 'utf8'));

    if (parsed?.version !== 1 || !Array.isArray(parsed.entries)) {
      fail('Community media data file has an invalid schema.');
    }

    return parsed;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { version: 1, entries: [] };
    }

    throw error;
  }
}

const expectedSubmissionId = cleanSingleLine(process.env.SUBMISSION_ID, 32, 'Submission ID');

if (!/^WS-[A-Z2-9]{8}$/.test(expectedSubmissionId)) {
  fail('Submission ID has an invalid format.');
}

const payload = decryptPayload(process.env.ENCRYPTED_PAYLOAD, process.env.PUBLISH_PAYLOAD_SECRET);

if (payload?.version !== 1 || payload.submissionId !== expectedSubmissionId) {
  fail('Encrypted payload does not match the requested submission.');
}

const title = cleanSingleLine(payload.title, 100, 'Title');
const description = cleanMultiline(payload.description, 1200, 'Description');
const altText = cleanSingleLine(payload.altText, 300, 'Alternative text');
const credit = cleanSingleLine(payload.credit, 100, 'Credit');
const submittedAt = new Date(payload.submittedAt);

if (Number.isNaN(submittedAt.getTime()) || submittedAt.getTime() > Date.now() + 60_000) {
  fail('Submission date is invalid.');
}

if (!Array.isArray(payload.attachments) || payload.attachments.length < 1 || payload.attachments.length > maximumAttachments) {
  fail(`Payload must contain between 1 and ${maximumAttachments} attachments.`);
}

const attachments = payload.attachments.map(validateDiscordAttachment);
const declaredTotalBytes = attachments.reduce((sum, attachment) => sum + attachment.size, 0);

if (declaredTotalBytes > maximumTotalBytes) {
  fail('Submission exceeds the maximum combined attachment size.');
}

const galleryData = await loadGalleryData();

if (galleryData.entries.some((entry) => entry.id === expectedSubmissionId)) {
  fail('This submission is already published.');
}

await fs.mkdir(mediaDirectory, { recursive: true });
await fs.mkdir(path.dirname(outputDataPath), { recursive: true });

const publishedImages = [];

for (const [index, attachment] of attachments.entries()) {
  const input = await downloadAttachment(attachment);
  const outputName = `${expectedSubmissionId.toLowerCase()}-${index + 1}.webp`;
  const outputPath = path.join(mediaDirectory, outputName);
  const { data, info } = await sharp(input, {
    failOn: 'warning',
    limitInputPixels: maximumInputPixels,
    sequentialRead: true
  })
    .rotate()
    .resize({
      width: 2400,
      height: 2400,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({
      quality: 86,
      effort: 4,
      smartSubsample: true
    })
    .toBuffer({ resolveWithObject: true });

  if (info.width < 1 || info.height < 1 || info.width * info.height > maximumInputPixels) {
    fail('Sanitized image dimensions are invalid.');
  }

  await fs.writeFile(outputPath, data, { flag: 'wx' });
  publishedImages.push({
    src: `assets/community/${outputName}`,
    alt: attachments.length > 1 ? `${altText} (${index + 1}/${attachments.length})` : altText,
    width: info.width,
    height: info.height
  });
}

const galleryEntry = {
  id: expectedSubmissionId,
  title,
  description,
  credit,
  submittedAt: submittedAt.toISOString(),
  publishedAt: new Date().toISOString(),
  images: publishedImages
};

await fs.writeFile(outputDataPath, `${JSON.stringify({ version: 1, entry: galleryEntry }, null, 2)}\n`, 'utf8');
console.log(`Sanitized ${publishedImages.length} approved image(s) for ${expectedSubmissionId}.`);
