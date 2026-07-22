(() => {
  const documents = [...document.querySelectorAll('.legal-document')];
  const documentIds = new Set(documents.map((documentPanel) => documentPanel.id));
  const documentLinks = [...document.querySelectorAll('a[href^="#"]')].filter((link) => {
    const id = link.getAttribute('href')?.slice(1);
    return id && documentIds.has(id);
  });
  const openAll = document.querySelector('[data-legal-open-all]');
  const closeAll = document.querySelector('[data-legal-close-all]');

  const openDocument = (id, shouldScroll = true) => {
    const documentPanel = document.getElementById(id);
    if (!(documentPanel instanceof HTMLDetailsElement)) return;
    documents.forEach((panel) => { panel.open = panel === documentPanel; });
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        documentPanel.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start'
        });
      });
    }
  };

  documentLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href')?.slice(1);
      if (!id) return;
      event.preventDefault();
      window.history.replaceState(null, '', `#${id}`);
      openDocument(id);
    });
  });

  openAll?.addEventListener('click', () => {
    documents.forEach((documentPanel) => { documentPanel.open = true; });
  });

  closeAll?.addEventListener('click', () => {
    documents.forEach((documentPanel) => { documentPanel.open = false; });
    document.querySelector('.legal-shell')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  });

  const initialId = window.location.hash.slice(1);
  if (initialId) openDocument(initialId, false);

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    if (documentIds.has(id)) openDocument(id);
  });
})();
