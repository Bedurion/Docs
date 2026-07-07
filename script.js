const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}


const closeOtherMenus = (currentMenu = null) => {
  document.querySelectorAll('.nav-menu.open').forEach((item) => {
    if (item !== currentMenu) {
      item.classList.remove('open');
      item.querySelector('.nav-menu-button')?.setAttribute('aria-expanded', 'false');
    }
  });
};

const setMenuOpen = (menu, isOpen) => {
  if (!menu) return;
  menu.classList.toggle('open', isOpen);
  menu.querySelector('.nav-menu-button')?.setAttribute('aria-expanded', String(isOpen));
};

document.querySelectorAll('.nav-menu').forEach((menu) => {
  const button = menu.querySelector('.nav-menu-button');

  menu.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 901px)').matches) {
      closeOtherMenus(menu);
      setMenuOpen(menu, true);
    }
  });

  menu.addEventListener('mouseleave', () => {
    if (window.matchMedia('(min-width: 901px)').matches) {
      setMenuOpen(menu, false);
    }
  });

  button?.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !menu.classList.contains('open');
    closeOtherMenus(menu);
    setMenuOpen(menu, willOpen);
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-menu')) {
    closeOtherMenus();
  }
});

document.querySelectorAll('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    document.querySelectorAll('[data-tab]').forEach((item) => item.classList.toggle('active', item.dataset.tab === tab));
    document.querySelectorAll('[data-tab-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.tabPanel === tab));
  });
});

const commandSearch = document.querySelector('[data-command-search]');
if (commandSearch) {
  commandSearch.addEventListener('input', () => {
    const query = commandSearch.value.trim().toLowerCase();
    document.querySelectorAll('[data-command-item]').forEach((item) => {
      item.hidden = query && !item.textContent.toLowerCase().includes(query);
    });
  });
}
