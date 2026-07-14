const gallery = document.querySelector('[data-community-gallery]');
const statusMessage = document.querySelector('[data-gallery-status]');

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function formatPublishedDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? 'Published by Lumina staff'
    : new Intl.DateTimeFormat(undefined, {
        dateStyle: 'long'
      }).format(date);
}

function buildGalleryEntry(entry) {
  const article = document.createElement('article');
  article.className = 'community-gallery-entry';
  article.id = String(entry.id || '').toLowerCase();

  const media = document.createElement('div');
  media.className = `community-gallery-media images-${Math.min(entry.images.length, 4)}`;

  entry.images.forEach((imageData) => {
    const image = document.createElement('img');
    image.src = imageData.src;
    image.alt = imageData.alt;
    image.width = imageData.width;
    image.height = imageData.height;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.append(image);
  });

  const content = document.createElement('div');
  content.className = 'community-gallery-content';
  content.append(
    createTextElement('p', 'eyebrow', formatPublishedDate(entry.publishedAt)),
    createTextElement('h2', '', entry.title),
    createTextElement('p', '', entry.description),
    createTextElement('p', 'community-gallery-credit', `Credit · ${entry.credit}`)
  );

  article.append(media, content);
  return article;
}

async function loadGallery() {
  try {
    const response = await fetch('data/community-media.json', {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const entries = Array.isArray(data.entries) ? data.entries : [];

    if (entries.length === 0) {
      statusMessage.textContent = 'No approved community media has been published yet.';
      return;
    }

    const fragment = document.createDocumentFragment();
    entries.forEach((entry) => fragment.append(buildGalleryEntry(entry)));
    gallery.replaceChildren(fragment);
    statusMessage.remove();

    if (window.location.hash) {
      const encodedEntryId = window.location.hash.slice(1);
      let entryId = encodedEntryId;

      try {
        entryId = decodeURIComponent(encodedEntryId);
      } catch {
        entryId = encodedEntryId;
      }

      document.getElementById(entryId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch {
    statusMessage.textContent = 'The community gallery could not be loaded right now. Please try again later.';
  }
}

loadGallery();
