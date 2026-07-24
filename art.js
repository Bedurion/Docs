const artCards = [...document.querySelectorAll('.art-card')];
const filterButtons = [...document.querySelectorAll('[data-art-filter]')];
const resultCount = document.querySelector('[data-art-result-count]');
const featuredImage = document.querySelector('[data-art-featured-image]');
const featuredTitle = document.querySelector('[data-art-featured-title]');
const featuredDescription = document.querySelector('[data-art-featured-description]');
const featuredCategory = document.querySelector('[data-art-featured-category]');
const featuredTags = document.querySelector('[data-art-featured-tags]');
const featuredCurrent = document.querySelector('[data-art-featured-current]');
const thumbnailRail = document.querySelector('[data-art-thumbnail-rail]');
const previousButton = document.querySelector('.art-featured-prev');
const nextButton = document.querySelector('.art-featured-next');
const openFeaturedButton = document.querySelector('[data-art-open-featured]');
const dialog = document.querySelector('[data-art-dialog]');
const dialogImage = document.querySelector('[data-art-dialog-image]');
const dialogTitle = document.querySelector('[data-art-dialog-title]');
const dialogDescription = document.querySelector('[data-art-dialog-description]');
const dialogCategory = document.querySelector('[data-art-dialog-category]');
const dialogTags = document.querySelector('[data-art-dialog-tags]');
const dialogClose = document.querySelector('[data-art-dialog-close]');

let visibleCards = [...artCards];
let activeCard = artCards[0] || null;

const cardData = (card) => ({
  src: card.dataset.artSrc,
  title: card.dataset.artTitle,
  description: card.dataset.artDescription,
  tags: (card.dataset.artTags || '').split(',').filter(Boolean),
  category: card.querySelector('small')?.textContent || 'Illustration',
  alt: card.querySelector('img')?.alt || card.dataset.artTitle
});

const renderTags = (container, tags) => {
  if (!container) return;
  container.replaceChildren(...tags.map((tag) => {
    const span = document.createElement('span');
    span.textContent = tag;
    return span;
  }));
};

const setFeatured = (card, options = {}) => {
  if (!card) return;
  const data = cardData(card);
  activeCard = card;
  featuredImage.src = data.src;
  featuredImage.alt = data.alt;
  featuredTitle.textContent = data.title;
  featuredDescription.textContent = data.description;
  featuredCategory.textContent = data.category;
  renderTags(featuredTags, data.tags);
  const globalIndex = artCards.indexOf(card);
  featuredCurrent.textContent = String(globalIndex + 1).padStart(2, '0');
  document.querySelectorAll('[data-art-thumbnail]').forEach((thumbnail) => {
    const selected = Number(thumbnail.dataset.artThumbnail) === globalIndex;
    thumbnail.classList.toggle('is-active', selected);
    thumbnail.setAttribute('aria-current', selected ? 'true' : 'false');
  });
  if (options.scrollThumbnail) {
    document.querySelector(`[data-art-thumbnail="${globalIndex}"]`)?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
  }
};

const moveFeatured = (direction) => {
  if (!visibleCards.length) return;
  const currentIndex = Math.max(0, visibleCards.indexOf(activeCard));
  const nextIndex = (currentIndex + direction + visibleCards.length) % visibleCards.length;
  setFeatured(visibleCards[nextIndex], {scrollThumbnail: true});
};

const openDialog = (card) => {
  if (!card || !dialog) return;
  const data = cardData(card);
  dialogImage.src = data.src;
  dialogImage.alt = data.alt;
  dialogTitle.textContent = data.title;
  dialogDescription.textContent = data.description;
  dialogCategory.textContent = data.category;
  renderTags(dialogTags, data.tags);
  if (typeof dialog.showModal === 'function') dialog.showModal();
};

artCards.forEach((card) => {
  card.addEventListener('click', () => {
    setFeatured(card);
    openDialog(card);
  });
});

if (thumbnailRail) {
  artCards.forEach((card, index) => {
    const data = cardData(card);
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.artThumbnail = String(index);
    button.setAttribute('aria-label', `Show ${data.title}`);
    button.innerHTML = `<img src="${data.src}" alt="" width="120" height="80" loading="lazy">`;
    button.addEventListener('click', () => setFeatured(card));
    thumbnailRail.append(button);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.artFilter;
    filterButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle('is-active', selected);
      candidate.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    visibleCards = artCards.filter((card) => filter === 'all' || card.dataset.artCategories.split(/\s+/).includes(filter));
    artCards.forEach((card) => {
      const visible = visibleCards.includes(card);
      card.hidden = !visible;
    });
    if (resultCount) resultCount.textContent = String(visibleCards.length);
    if (!visibleCards.includes(activeCard)) setFeatured(visibleCards[0]);
  });
});

previousButton?.addEventListener('click', () => moveFeatured(-1));
nextButton?.addEventListener('click', () => moveFeatured(1));
openFeaturedButton?.addEventListener('click', () => openDialog(activeCard));
dialogClose?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', (event) => {
  if (dialog?.open) return;
  if (event.key === 'ArrowLeft') moveFeatured(-1);
  if (event.key === 'ArrowRight') moveFeatured(1);
});

setFeatured(activeCard);
