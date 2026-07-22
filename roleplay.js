const roleplayFeatured = document.querySelector('[data-roleplay-featured]');
const roleplayFeaturedStatus = document.querySelector('[data-roleplay-featured-status]');
const roleplayLibraryStatus = document.querySelector('[data-roleplay-library-status]');
const roleplayStoryGrid = document.querySelector('[data-roleplay-story-grid]');
const roleplayReader = document.querySelector('[data-roleplay-reader]');
const roleplayFilters = [...document.querySelectorAll('[data-roleplay-filter]')];
const roleplayAtlasLinks = [...document.querySelectorAll('[data-roleplay-jump]')];

const roleplayCategoryLabels = Object.freeze({
  campaign: 'Saga',
  'one-shot': 'One-shot',
  character: 'Character journal',
  lore: 'Lorebook'
});

let roleplayStories = [];
let activeRoleplayFilter = 'all';
let activeRoleplayStory = null;
let activeRoleplayChapterIndex = 0;

function createRoleplayElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function formatRoleplayDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? 'Publication date pending'
    : new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(date);
}

function normalizeRoleplayCategory(story) {
  const category = String(story?.category || '').toLowerCase();
  return Object.hasOwn(roleplayCategoryLabels, category) ? category : 'one-shot';
}

function visibleRoleplayChapters(story) {
  return Array.isArray(story?.chapters)
    ? story.chapters.filter((chapter) => chapter?.visible !== false)
    : [];
}

function roleplayImageCount(story) {
  return visibleRoleplayChapters(story).reduce((total, chapter) => (
    total + (Array.isArray(chapter.content)
      ? chapter.content.filter((block) => block?.type === 'image').length
      : 0)
  ), story?.cover?.src ? 1 : 0);
}

function updateRoleplayStatus(element, message, state = '') {
  if (!element) return;
  element.classList.remove('is-empty', 'is-error', 'is-summary');
  element.textContent = message;
  if (state) element.classList.add(`is-${state}`);
}

function buildRoleplayMedia(story, className) {
  const media = document.createElement('div');
  media.className = className;

  if (story?.cover?.src) {
    const image = document.createElement('img');
    image.src = story.cover.src;
    image.alt = story.cover.alt || `${story.title || 'Lumina roleplay story'} cover`;
    if (Number.isSafeInteger(story.cover.width)) image.width = story.cover.width;
    if (Number.isSafeInteger(story.cover.height)) image.height = story.cover.height;
    image.loading = className.includes('featured') ? 'eager' : 'lazy';
    image.decoding = 'async';
    media.append(image);
    return media;
  }

  const image = document.createElement('img');
  image.src = 'assets/illustrations/roleplay-archive-empty.svg';
  image.alt = '';
  image.setAttribute('aria-hidden', 'true');
  media.classList.add('is-placeholder');
  media.append(image);
  return media;
}

function buildRoleplayMeta(story) {
  const meta = document.createElement('div');
  meta.className = 'roleplay-story-meta';
  const chapterCount = visibleRoleplayChapters(story).length;
  meta.append(
    createRoleplayElement('span', 'roleplay-story-category', roleplayCategoryLabels[normalizeRoleplayCategory(story)]),
    createRoleplayElement('span', '', story.status === 'complete' ? 'Complete' : 'Ongoing'),
    createRoleplayElement('span', '', `${chapterCount} ${chapterCount === 1 ? 'chapter' : 'chapters'}`),
    createRoleplayElement('span', '', `${Math.max(1, Number(story.readingMinutes) || 1)} min read`)
  );
  return meta;
}

function storyHash(story, chapter) {
  const storySlug = encodeURIComponent(String(story.slug || story.id || 'chronicle'));
  const chapterSlug = chapter ? `--${encodeURIComponent(String(chapter.id || 'chapter-1'))}` : '';
  return `#story-${storySlug}${chapterSlug}`;
}

function buildOpenStoryLink(story, label = 'Begin reading') {
  const link = document.createElement('a');
  link.className = 'roleplay-open-story';
  link.href = storyHash(story);
  link.innerHTML = `<span>${label}</span><span aria-hidden="true">→</span>`;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openRoleplayStory(story, 0, true);
  });
  return link;
}

function buildFeaturedRoleplayStory(story) {
  const article = document.createElement('article');
  article.className = 'roleplay-featured-story';

  const content = document.createElement('div');
  content.className = 'roleplay-featured-content';
  content.append(
    buildRoleplayMeta(story),
    createRoleplayElement('h3', '', story.title || 'Lumina chronicle'),
    createRoleplayElement('p', 'roleplay-story-subtitle', story.subtitle || ''),
    createRoleplayElement('p', 'roleplay-story-summary', story.summary || ''),
    createRoleplayElement('p', 'roleplay-story-byline', `Written by ${story.author || 'Lumina roleplay team'}`),
    buildOpenStoryLink(story, 'Start with Chapter One')
  );

  article.append(buildRoleplayMedia(story, 'roleplay-featured-media'), content);
  return article;
}

function buildRoleplayStoryCard(story) {
  const article = document.createElement('article');
  article.className = 'roleplay-story-card';
  article.dataset.roleplayCategory = normalizeRoleplayCategory(story);

  const content = document.createElement('div');
  content.className = 'roleplay-story-card-copy';
  content.append(
    buildRoleplayMeta(story),
    createRoleplayElement('h3', '', story.title || 'Lumina chronicle'),
    createRoleplayElement('p', 'roleplay-story-summary', story.summary || ''),
    createRoleplayElement('p', 'roleplay-story-updated', `Updated ${formatRoleplayDate(story.updatedAt || story.publishedAt)}`),
    buildOpenStoryLink(story, 'Open chronicle')
  );

  article.append(buildRoleplayMedia(story, 'roleplay-story-card-media'), content);
  return article;
}

function buildRoleplayLibraryEmpty() {
  const empty = document.createElement('article');
  empty.className = 'roleplay-library-empty';
  const image = document.createElement('img');
  image.src = 'assets/illustrations/roleplay-archive-empty.svg';
  image.alt = '';
  image.setAttribute('aria-hidden', 'true');
  const copy = document.createElement('div');
  copy.append(
    createRoleplayElement('p', 'eyebrow', 'Archive prepared'),
    createRoleplayElement('h3', '', 'No public stories yet — every shelf is ready.'),
    createRoleplayElement('p', '', 'Future chronicles will appear here automatically with their cover, format, status and ordered chapter count.')
  );
  empty.append(image, copy);
  return empty;
}

function updateRoleplayCounts() {
  const chapters = roleplayStories.reduce((total, story) => total + visibleRoleplayChapters(story).length, 0);
  const images = roleplayStories.reduce((total, story) => total + roleplayImageCount(story), 0);
  const storyCount = document.querySelector('[data-roleplay-story-count]');
  const chapterCount = document.querySelector('[data-roleplay-chapter-count]');
  const imageCount = document.querySelector('[data-roleplay-image-count]');
  if (storyCount) storyCount.textContent = String(roleplayStories.length);
  if (chapterCount) chapterCount.textContent = String(chapters);
  if (imageCount) imageCount.textContent = String(images);

  document.querySelectorAll('[data-roleplay-category-count]').forEach((element) => {
    const category = element.dataset.roleplayCategoryCount;
    element.textContent = String(roleplayStories.filter((story) => normalizeRoleplayCategory(story) === category).length);
  });
}

function applyRoleplayFilter(filter) {
  activeRoleplayFilter = Object.hasOwn(roleplayCategoryLabels, filter) ? filter : 'all';
  let visibleCount = 0;

  roleplayStoryGrid.querySelectorAll('.roleplay-story-card').forEach((card) => {
    const visible = activeRoleplayFilter === 'all' || card.dataset.roleplayCategory === activeRoleplayFilter;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  roleplayFilters.forEach((button) => {
    const selected = button.dataset.roleplayFilter === activeRoleplayFilter;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  if (roleplayStories.length > 0) {
    const label = activeRoleplayFilter === 'all' ? 'published stories' : `${roleplayCategoryLabels[activeRoleplayFilter].toLowerCase()} stories`;
    updateRoleplayStatus(
      roleplayLibraryStatus,
      visibleCount === 0 ? `No ${label} have been published yet.` : `${visibleCount} ${label}.`,
      visibleCount === 0 ? 'empty' : 'summary'
    );
  }
}

function appendRoleplayChapterContent(container, chapter) {
  const blocks = Array.isArray(chapter?.content) ? chapter.content : [];
  if (blocks.length === 0) {
    container.append(createRoleplayElement('p', 'roleplay-reader-empty-copy', 'This chapter is prepared but does not contain public text yet.'));
    return;
  }

  blocks.forEach((block) => {
    if (block?.type === 'paragraph') {
      container.append(createRoleplayElement('p', '', block.text || ''));
      return;
    }

    if (block?.type === 'heading') {
      container.append(createRoleplayElement('h4', '', block.text || ''));
      return;
    }

    if (block?.type === 'quote') {
      const quote = document.createElement('blockquote');
      quote.append(createRoleplayElement('p', '', block.text || ''));
      if (block.attribution) quote.append(createRoleplayElement('cite', '', block.attribution));
      container.append(quote);
      return;
    }

    if (block?.type === 'image' && block.src) {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = block.src;
      image.alt = block.alt || '';
      if (Number.isSafeInteger(block.width)) image.width = block.width;
      if (Number.isSafeInteger(block.height)) image.height = block.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      figure.append(image);
      if (block.caption) figure.append(createRoleplayElement('figcaption', '', block.caption));
      container.append(figure);
    }
  });
}

function renderRoleplayReader(story, chapterIndex) {
  const chapters = visibleRoleplayChapters(story);
  const safeIndex = Math.min(Math.max(0, chapterIndex), Math.max(0, chapters.length - 1));
  const chapter = chapters[safeIndex];

  const index = document.createElement('aside');
  index.className = 'roleplay-reader-index';
  const indexHeading = document.createElement('div');
  indexHeading.append(
    createRoleplayElement('p', 'eyebrow', roleplayCategoryLabels[normalizeRoleplayCategory(story)]),
    createRoleplayElement('h3', '', story.title || 'Lumina chronicle'),
    createRoleplayElement('p', '', story.subtitle || story.summary || '')
  );
  const list = document.createElement('ol');
  chapters.forEach((item, itemIndex) => {
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = itemIndex === safeIndex ? 'is-active' : '';
    button.setAttribute('aria-current', itemIndex === safeIndex ? 'step' : 'false');
    button.append(
      createRoleplayElement('span', '', String(itemIndex + 1).padStart(2, '0')),
      (() => {
        const copy = document.createElement('div');
        copy.append(
          createRoleplayElement('strong', '', item.title || `Chapter ${itemIndex + 1}`),
          createRoleplayElement('small', '', item.summary || formatRoleplayDate(item.publishedAt))
        );
        return copy;
      })()
    );
    button.addEventListener('click', () => openRoleplayStory(story, itemIndex, true));
    listItem.append(button);
    list.append(listItem);
  });
  index.append(indexHeading, list);

  const page = document.createElement('article');
  page.className = 'roleplay-reader-page roleplay-reader-page-active';
  const chapterLabel = chapter ? `Chapter ${String(safeIndex + 1).padStart(2, '0')}` : 'Chronicle prepared';
  page.append(
    createRoleplayElement('p', 'eyebrow', chapterLabel),
    createRoleplayElement('h3', '', chapter?.title || 'The first chapter is waiting'),
    createRoleplayElement('p', 'roleplay-reader-chapter-summary', chapter?.summary || 'This chronicle does not contain a public chapter yet.')
  );

  const body = document.createElement('div');
  body.className = 'roleplay-reader-body';
  appendRoleplayChapterContent(body, chapter);
  page.append(body);

  if (chapters.length > 0) {
    const controls = document.createElement('nav');
    controls.className = 'roleplay-reader-controls';
    controls.setAttribute('aria-label', 'Chapter navigation');
    const previous = document.createElement('button');
    previous.type = 'button';
    previous.disabled = safeIndex === 0;
    previous.textContent = '← Previous chapter';
    previous.addEventListener('click', () => openRoleplayStory(story, safeIndex - 1, true));
    const next = document.createElement('button');
    next.type = 'button';
    next.disabled = safeIndex === chapters.length - 1;
    next.textContent = 'Next chapter →';
    next.addEventListener('click', () => openRoleplayStory(story, safeIndex + 1, true));
    controls.append(previous, next);
    page.append(controls);
  }

  roleplayReader.replaceChildren(index, page);
}

function openRoleplayStory(story, chapterIndex = 0, scroll = false) {
  activeRoleplayStory = story;
  activeRoleplayChapterIndex = chapterIndex;
  renderRoleplayReader(story, chapterIndex);
  const chapter = visibleRoleplayChapters(story)[chapterIndex];
  window.history.replaceState(null, '', storyHash(story, chapter));
  if (scroll) document.getElementById('story-reader')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openRoleplayStoryFromHash() {
  if (!window.location.hash.startsWith('#story-')) return;
  let route = window.location.hash.slice('#story-'.length);
  try {
    route = decodeURIComponent(route);
  } catch {
    route = window.location.hash.slice('#story-'.length);
  }
  const [storySlug, chapterId] = route.split('--');
  const story = roleplayStories.find((item) => String(item.slug || item.id) === storySlug);
  if (!story) return;
  const chapters = visibleRoleplayChapters(story);
  const chapterIndex = chapterId ? Math.max(0, chapters.findIndex((chapter) => String(chapter.id) === chapterId)) : 0;
  openRoleplayStory(story, chapterIndex, false);
  window.setTimeout(() => document.getElementById('story-reader')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
}

function renderRoleplayArchive(stories) {
  roleplayStories = stories
    .filter((story) => story?.visible !== false)
    .sort((left, right) => Date.parse(right.updatedAt || right.publishedAt || 0) - Date.parse(left.updatedAt || left.publishedAt || 0));

  updateRoleplayCounts();

  if (roleplayStories.length === 0) {
    updateRoleplayStatus(roleplayFeaturedStatus, 'The featured position is ready for the first approved Lumina chronicle.', 'empty');
    updateRoleplayStatus(roleplayLibraryStatus, 'The library is ready for its first published story.', 'empty');
    roleplayStoryGrid.replaceChildren(buildRoleplayLibraryEmpty());
    return;
  }

  const featured = roleplayStories.find((story) => story.featured === true) || roleplayStories[0];
  roleplayFeatured.replaceChildren(buildFeaturedRoleplayStory(featured));
  updateRoleplayStatus(roleplayFeaturedStatus, `Featured · ${featured.title}`, 'summary');

  const fragment = document.createDocumentFragment();
  roleplayStories.forEach((story) => fragment.append(buildRoleplayStoryCard(story)));
  roleplayStoryGrid.replaceChildren(fragment);
  applyRoleplayFilter(activeRoleplayFilter);
  openRoleplayStoryFromHash();
}

async function loadRoleplayArchive() {
  try {
    const response = await fetch('data/roleplay-stories.json', {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderRoleplayArchive(Array.isArray(data.stories) ? data.stories : []);
  } catch {
    updateRoleplayStatus(roleplayFeaturedStatus, 'The featured chronicle could not be loaded right now.', 'error');
    updateRoleplayStatus(roleplayLibraryStatus, 'The Story Library could not be loaded. Please try again later.', 'error');
    roleplayStoryGrid.replaceChildren(buildRoleplayLibraryEmpty());
  }
}

roleplayFilters.forEach((button) => {
  button.addEventListener('click', () => applyRoleplayFilter(button.dataset.roleplayFilter));
});

roleplayAtlasLinks.forEach((link) => {
  link.addEventListener('click', () => {
    window.setTimeout(() => applyRoleplayFilter(link.dataset.roleplayJump), 0);
  });
});

window.addEventListener('hashchange', openRoleplayStoryFromHash);
loadRoleplayArchive();
