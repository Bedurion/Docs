const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navigationSections = {
  guild: {
    label: 'Guild',
    icon: 'guild.svg',
    pages: [
      ['guild.html', 'Overview'],
      ['guild-community.html', 'Community'],
      ['gallery.html', 'Gallery'],
      ['guild-join.html', 'Join Lumina'],
      ['guild-rules.html', 'Rules']
    ]
  },
  features: {
    label: 'Features',
    icon: 'finder.svg',
    pages: [
      ['features.html', 'Overview'],
      ['features-identity.html', 'Identity'],
      ['features-economy.html', 'Economy'],
      ['features-events.html', 'Events'],
      ['features-intelligence.html', 'Intel'],
      ['features-finder.html', 'Finder'],
      ['features-support.html', 'Support']
    ]
  },
  docs: {
    label: 'Docs',
    icon: 'docs.svg',
    pages: [
      ['docs.html', 'Documentation Home', 'Start'],
      ['docs-getting-started.html', 'Getting Started', 'Start'],
      ['setup.html', 'Installation', 'Start'],
      ['commands.html', 'Command Reference', 'Start'],
      ['docs-panels.html', 'Panel Setup', 'Start'],
      ['docs-registration.html', 'Registration', 'Member systems'],
      ['docs-loyalty.html', 'Loyalty', 'Member systems'],
      ['docs-streaming.html', 'Stream Loyalty', 'Member systems'],
      ['docs-events.html', 'Events', 'Member systems'],
      ['docs-loot.html', 'Loot Split', 'Member systems'],
      ['docs-finder.html', 'Finder', 'Member systems'],
      ['docs-timezones.html', 'Timezones', 'Member systems'],
      ['docs-guildbank.html', 'GuildBank', 'Guild operations'],
      ['docs-leaderboards.html', 'Leaderboards', 'Guild operations'],
      ['docs-watchlists.html', 'Watchlists', 'Guild operations'],
      ['docs-progression.html', 'Progress & Guild List', 'Guild operations'],
      ['docs-tracker.html', 'Identity Tracker', 'Guild operations'],
      ['docs-guards.html', 'Guards', 'Guild operations'],
      ['docs-recruitment.html', 'Recruitment', 'Guild operations'],
      ['docs-support.html', 'Support Tickets', 'Staff & moderation'],
      ['docs-moderation.html', 'Moderation Lists', 'Staff & moderation'],
      ['docs-staff.html', 'Staff Systems', 'Staff & moderation'],
      ['docs-admin.html', 'Admin Guide', 'Administration'],
      ['docs-automation.html', 'Automation & Retention', 'Administration'],
      ['docs-website.html', 'Website Publishing', 'Administration'],
      ['docs-troubleshooting.html', 'Troubleshooting', 'Administration'],
      ['systems.html', 'Architecture', 'Administration'],
      ['docs-faq.html', 'FAQ', 'Administration']
    ]
  },
  pricing: {
    label: 'Pricing',
    icon: 'pricing.svg',
    pages: [
      ['pricing.html', 'Plans'],
      ['roadmap.html', 'Roadmap'],
      ['changelog.html', 'Changelog']
    ]
  }
};

const sectionContainsPage = (section) => section.pages.some(([href]) => href === currentPage);
const renderDropdownLinks = (section) => {
  const hasGroups = section.pages.some(([, , group]) => group);
  if (!hasGroups) {
    return section.pages.map(([href, label]) =>
      `<a class="${href === currentPage ? 'active' : ''}" href="${href}">${label}</a>`
    ).join('');
  }

  const groups = [];
  section.pages.forEach(([href, label, group = 'More']) => {
    let targetGroup = groups.find((item) => item.label === group);
    if (!targetGroup) {
      targetGroup = { label: group, pages: [] };
      groups.push(targetGroup);
    }
    targetGroup.pages.push([href, label]);
  });

  return groups.map((group) => `
    <section class="nav-dropdown-group">
      <button class="nav-dropdown-label nav-group-button" type="button" aria-expanded="false">${group.label}</button>
      <div class="nav-dropdown-group-links">
        ${group.pages.map(([href, label]) =>
          `<a class="${href === currentPage ? 'active' : ''}" href="${href}">${label}</a>`
        ).join('')}
      </div>
    </section>`).join('');
};
const renderNavMenu = (section, wide = false) => `
  <div class="nav-menu">
    <button class="nav-link nav-menu-button ${sectionContainsPage(section) ? 'active' : ''}" type="button" aria-expanded="false">
      <img class="nav-icon" src="assets/icons/${section.icon}" alt="" aria-hidden="true"><span>${section.label}</span>
    </button>
    <div class="nav-dropdown ${wide ? 'nav-dropdown-wide' : ''}">${renderDropdownLinks(section)}</div>
  </div>`;

if (navLinks) {
  navLinks.innerHTML = `
    <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html"><img class="nav-icon" src="assets/icons/home.svg" alt="" aria-hidden="true"><span>Home</span></a>
    ${renderNavMenu(navigationSections.guild)}
    ${renderNavMenu(navigationSections.features)}
    ${renderNavMenu(navigationSections.docs, true)}
    ${renderNavMenu(navigationSections.pricing)}
    <a class="nav-cta ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html"><img class="nav-icon" src="assets/icons/support.svg" alt="" aria-hidden="true"><span>Questions?</span></a>`;
}

if (navToggle) {
  navToggle.innerHTML = '<span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>';
}

const documentationCatalog = [
  ['docs-getting-started.html', 'Getting Started', 'First member and administrator steps, setup order and daily use.', 'start install member admin'],
  ['setup.html', 'Installation & Wizard', 'Safe installation, edition selection and configuration overview.', 'install wizard overview setup'],
  ['commands.html', 'Command Reference', 'Every active slash command, context command and access level.', 'commands admin everyone moderator'],
  ['docs-panels.html', 'Panel Setup', 'Every public control panel and the command that publishes it.', 'panels channels setup configuration'],
  ['docs-registration.html', 'Character Registration', 'Verification codes, timezone, mains, roles and world restrictions.', 'register character main nickname roles'],
  ['docs-loyalty.html', 'Loyalty System', 'Rewards, levels, profiles, boosts and account eligibility.', 'loyalty points levels boosts rewards'],
  ['docs-streaming.html', 'Stream Loyalty', 'Eligible screen-share sessions, per-minute rewards, limits and total streamed time.', 'stream streaming screenshare voice loyalty hours'],
  ['docs-events.html', 'Events', 'Hunts, bosses, quests and general events with automatic completion.', 'hunt boss quest event thread'],
  ['docs-loot.html', 'Loot Split', 'Panel flow, transfer confirmer, GuildBank contribution and minimums.', 'loot split transfer looter'],
  ['docs-finder.html', 'Finder', 'Cached online matches, looking for team and match history.', 'finder team match online'],
  ['docs-timezones.html', 'Timezones & Friend Time', 'Personal timezones, Discord timestamps and message conversion.', 'timezone time convert clock'],
  ['docs-guildbank.html', 'GuildBank', 'Deposits, withdrawals, review roles, pending accumulation and logs.', 'guildbank deposit withdraw treasurer'],
  ['docs-leaderboards.html', 'Leaderboards', 'Level, death, loyalty, contribution and playtime rankings.', 'leaderboard levels deaths loyalty playtime'],
  ['docs-watchlists.html', 'Watchlists', 'Guild members online, enemies online and cached session statistics.', 'watchlist online enemies guild'],
  ['docs-progression.html', 'Progress & Guild List', 'Level and death announcements, rolling summaries and the ranked guild roster.', 'levels deaths guild list progression'],
  ['docs-tracker.html', 'Identity Tracker', 'Name changes, trades, transfers, returns, deletions and retry-safe alerts.', 'tracker traded transferred returned deleted'],
  ['docs-guards.html', 'Guards', 'Alert role, blacklisted enemy reports, threads and expiration.', 'guards alert report blacklist'],
  ['docs-recruitment.html', 'Recruitment Rewards', 'Claims, reviews, disputes, exponential rewards and retention.', 'recruitment recruit rewards disputes'],
  ['docs-support.html', 'Support Tickets', 'Private categories, claims, participants, satisfaction and archives.', 'support tickets claims staff archive'],
  ['docs-moderation.html', 'Moderation Lists', 'Blacklist, Ban List, moderation log and Guild Chat alerts.', 'blacklist banlist moderation log'],
  ['docs-staff.html', 'Staff Systems', 'Moderator roles, private voting and public applications.', 'staff moderator voting applications'],
  ['docs-admin.html', 'Administrator Guide', 'Role hierarchy, refresh strategy, backups and safe maintenance.', 'admin roles refresh backup'],
  ['docs-automation.html', 'Automation & Retention', 'Autodelete, panel refresh, private response lifecycle and local backups.', 'automation autodelete retention backups ephemeral'],
  ['docs-website.html', 'Website Publishing', 'Private Discord proposals, staff review and isolated GitHub image publication.', 'website gallery github media publish security'],
  ['docs-troubleshooting.html', 'Troubleshooting', 'Permissions, missing panels, failed interactions and sync issues.', 'errors permissions missing interaction'],
  ['docs-faq.html', 'FAQ', 'Short answers to common member and staff questions.', 'faq questions help']
];

const mainContent = document.querySelector('main');
if (mainContent) {
  mainContent.id ||= 'main-content';
  const skipLink = document.createElement('a');
  skipLink.className = 'skip-link';
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to content';
  document.body.prepend(skipLink);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('nav-open', isOpen && window.matchMedia('(max-width: 1040px)').matches);
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

  if (isOpen && window.matchMedia('(max-width: 1040px)').matches) {
    const firstGroup = menu.querySelector('.nav-dropdown-group');
    if (firstGroup && !menu.querySelector('.nav-dropdown-group.open')) {
      firstGroup.classList.add('open');
      firstGroup.querySelector('.nav-group-button')?.setAttribute('aria-expanded', 'true');
    }
  }
};

document.querySelectorAll('.nav-group-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 1040px)').matches) return;
    event.stopPropagation();
    const group = button.closest('.nav-dropdown-group');
    const menu = button.closest('.nav-menu');
    const willOpen = !group?.classList.contains('open');

    menu?.querySelectorAll('.nav-dropdown-group.open').forEach((item) => {
      if (item !== group) {
        item.classList.remove('open');
        item.querySelector('.nav-group-button')?.setAttribute('aria-expanded', 'false');
      }
    });

    group?.classList.toggle('open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
  });
});

document.querySelectorAll('.nav-menu').forEach((menu) => {
  const button = menu.querySelector('.nav-menu-button');

  menu.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 1041px)').matches) {
      closeOtherMenus(menu);
      setMenuOpen(menu, true);
    }
  });

  menu.addEventListener('mouseleave', () => {
    if (window.matchMedia('(min-width: 1041px)').matches) {
      setMenuOpen(menu, false);
    }
  });

  button?.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !menu.classList.contains('open');
    closeOtherMenus(menu);
    setMenuOpen(menu, willOpen);
  });

  button?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      closeOtherMenus(menu);
      setMenuOpen(menu, true);
      menu.querySelector('.nav-dropdown a')?.focus();
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-menu')) {
    closeOtherMenus();
  }

  if (window.matchMedia('(max-width: 1040px)').matches && event.target.closest('.nav-links a')) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeOtherMenus();
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('nav-open');
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1041px)').matches) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
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

    document.querySelectorAll('.command-panel').forEach((panel) => {
      const items = [...panel.querySelectorAll('[data-command-item]')];
      panel.hidden = query.length > 0 && items.length > 0 && items.every((item) => item.hidden);
    });
  });
}

const docsSearch = document.querySelector('[data-docs-search]');
const docsSearchResults = document.querySelector('[data-docs-search-results]');
if (docsSearch && docsSearchResults) {
  const renderDocumentationResults = () => {
    const query = docsSearch.value.trim().toLowerCase();
    const matches = documentationCatalog.filter(([, title, description, keywords]) =>
      !query || `${title} ${description} ${keywords}`.toLowerCase().includes(query)
    );

    docsSearchResults.innerHTML = matches.length > 0
      ? matches.map(([href, title, description]) => `
        <a class="docs-search-result" href="${href}">
          <strong>${title}</strong><span>${description}</span>
        </a>`).join('')
      : '<p class="empty-state">No documentation pages match that search.</p>';
  };

  docsSearch.addEventListener('input', renderDocumentationResults);
  renderDocumentationResults();
}

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  const relValues = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
  relValues.add('noopener');
  relValues.add('noreferrer');
  link.setAttribute('rel', [...relValues].join(' '));
});

const tocLinks = [...document.querySelectorAll('.toc-card a[href^="#"]')];
if (tocLinks.length > 0 && 'IntersectionObserver' in window) {
  const sectionById = new Map(tocLinks.map((link) => [link.hash.slice(1), link]));
  const observer = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;
    tocLinks.forEach((link) => link.classList.toggle('active', link === sectionById.get(visibleEntry.target.id)));
  }, {
    rootMargin: '-18% 0px -68% 0px',
    threshold: [0, 0.15, 0.4]
  });

  sectionById.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
