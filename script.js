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
      ['use-cases.html', 'Use cases'],
      ['features-identity.html', 'Identity'],
      ['features-economy.html', 'Economy'],
      ['features-events.html', 'Events'],
      ['features-intelligence.html', 'Intel'],
      ['features-finder.html', 'Finder'],
      ['features-support.html', 'Support'],
      ['security.html', 'Trust & safety']
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
      ['docs-guildhall.html', 'Guildhall', 'Guild operations'],
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
  ['docs-finder.html', 'Finder', 'Current online matches, looking for team and recent match history.', 'finder team match online'],
  ['docs-timezones.html', 'Timezones & Friend Time', 'Personal timezones, Discord timestamps and message conversion.', 'timezone time convert clock'],
  ['docs-guildbank.html', 'GuildBank', 'Deposits, withdrawals, review roles, pending accumulation and logs.', 'guildbank deposit withdraw treasurer'],
  ['docs-leaderboards.html', 'Leaderboards', 'Level, death, loyalty, contribution and playtime rankings.', 'leaderboard levels deaths loyalty playtime'],
  ['docs-watchlists.html', 'Watchlists', 'Guild members online, enemies online and current session statistics.', 'watchlist online enemies guild'],
  ['docs-progression.html', 'Progress & Guild List', 'Level and death announcements, rolling summaries and the ranked guild roster.', 'levels deaths guild list progression'],
  ['docs-tracker.html', 'Identity Tracker', 'Name changes, trades, transfers, returns, deletions and retry-safe alerts.', 'tracker traded transferred returned deleted'],
  ['docs-guards.html', 'Guards', 'Alert role, blacklisted enemy reports, threads and expiration.', 'guards alert report blacklist'],
  ['docs-recruitment.html', 'Recruitment Rewards', 'Claims, reviews, disputes, exponential rewards and retention.', 'recruitment recruit rewards disputes'],
  ['docs-guildhall.html', 'Guildhall', 'Ordered rooms, registered occupants, sale reports, claims and specialist review.', 'guildhall rooms sqm occupant claim reports'],
  ['docs-support.html', 'Support Tickets', 'Private categories, claims, participants, satisfaction and archives.', 'support tickets claims staff archive'],
  ['docs-moderation.html', 'Moderation Lists', 'Blacklist, Ban List, moderation log and Guild Chat alerts.', 'blacklist banlist moderation log'],
  ['docs-staff.html', 'Staff Systems', 'Moderator roles, private voting and public applications.', 'staff moderator voting applications'],
  ['docs-admin.html', 'Administrator Guide', 'Role hierarchy, refresh strategy, backups and safe maintenance.', 'admin roles refresh backup'],
  ['docs-automation.html', 'Automation & Retention', 'Autodelete, panel refresh, private response lifecycle and local backups.', 'automation autodelete retention backups ephemeral'],
  ['docs-website.html', 'Website Publishing', 'Private Discord proposals, staff review and safe publication of approved media.', 'website gallery media publish review security'],
  ['docs-troubleshooting.html', 'Troubleshooting', 'Permissions, missing panels, failed interactions and sync issues.', 'errors permissions missing interaction'],
  ['docs-faq.html', 'FAQ', 'Short answers to common member and staff questions.', 'faq questions help'],
  ['use-cases.html', 'Use Cases', 'Choose a Luminox rollout from the operational problem your guild needs to solve.', 'use cases buying evaluation rollout guild problems'],
  ['security.html', 'Trust & Safety', 'Permissions, data boundaries, retention and honest platform limits.', 'security trust privacy permissions retention']
];

const pagePresentations = {
  '404.html': { family: 'utility', variant: 'signal', accent: 'red', code: '404', icon: 'troubleshooting.svg', label: 'Lost route', summary: 'The requested destination is outside the current site map.', tags: ['Return', 'Search', 'Recover'] },
  'changelog.html': { family: 'editorial', variant: 'ledger', accent: 'green', code: 'Build log', icon: 'commands.svg', label: 'Product history', summary: 'A curated record of meaningful releases rather than a raw stream of file changes.', tags: ['Released', 'Verified', 'Documented'] },
  'commands.html': { family: 'reference', variant: 'terminal', accent: 'blue', code: '33 commands', icon: 'commands.svg', label: 'Command index', summary: 'Exact syntax, access level and purpose for every registered command.', tags: ['Everyone', 'Staff', 'Admin'] },
  'contact.html': { family: 'contact', variant: 'portal', accent: 'blue', code: 'Discord first', icon: 'support.svg', label: 'Direct contact', summary: 'Guild questions, product support and private evidence all begin in the right Discord space.', tags: ['Support', 'Guild', 'Product'] },
  'docs.html': { family: 'reference', variant: 'library', accent: 'violet', code: 'Documentation', icon: 'docs.svg', label: 'Search the manual', summary: 'Move from installation to daily operation through role-aware, current guides.', tags: ['Members', 'Staff', 'Admins'] },
  'docs-getting-started.html': { family: 'reference', variant: 'steps', accent: 'green', code: 'Guide 01', icon: 'setup.svg', label: 'Start here', summary: 'Three paths explain what members, staff and administrators should do first.', tags: ['Choose role', 'Follow path', 'Verify'] },
  'setup.html': { family: 'reference', variant: 'blueprint', accent: 'gold', code: 'Guide 02', icon: 'setup.svg', label: 'Installation', summary: 'A non-destructive route from an empty server to correctly published panels.', tags: ['Audit', 'Configure', 'Publish'] },
  'docs-panels.html': { family: 'reference', variant: 'directory', accent: 'violet', code: 'Guide 03', icon: 'docs.svg', label: 'Panel directory', summary: 'Every public control surface, its channel and its prerequisite configuration.', tags: ['Channel', 'Command', 'Audience'] },
  'docs-registration.html': { family: 'reference', variant: 'identity', accent: 'blue', code: 'Guide 04', icon: 'identity.svg', label: 'Registration', summary: 'The verified link between a Discord account, its Tibia characters and guild access.', tags: ['Verify', 'Main', 'Synchronize'] },
  'docs-loyalty.html': { family: 'reference', variant: 'progress', accent: 'gold', code: 'Guide 05', icon: 'leaderboards.svg', label: 'Loyalty', summary: 'Account-wide rewards, levels, eligibility and transparent reward history.', tags: ['Earn', 'Level', 'Review'] },
  'docs-streaming.html': { family: 'reference', variant: 'broadcast', accent: 'red', code: 'Guide 06', icon: 'leaderboards.svg', label: 'Stream Loyalty', summary: 'Event-driven screen-share tracking with proportional rewards and healthy limits.', tags: ['10 min', 'Per minute', '6h cap'] },
  'docs-events.html': { family: 'reference', variant: 'schedule', accent: 'green', code: 'Guide 07', icon: 'events.svg', label: 'Events', summary: 'Four activity types, participant scheduling, leadership and automatic completion.', tags: ['Create', 'Join', 'Complete'] },
  'docs-loot.html': { family: 'reference', variant: 'calculator', accent: 'gold', code: 'Guide 08', icon: 'loot.svg', label: 'Loot Split', summary: 'A guided analyzer flow from pasted session data to fair transfers and contributions.', tags: ['Paste', 'Calculate', 'Confirm'] },
  'docs-finder.html': { family: 'reference', variant: 'radar', accent: 'blue', code: 'Guide 09', icon: 'finder.svg', label: 'Finder', summary: 'Current online information becomes compatible teams and voluntary Looking for team messages.', tags: ['Online', 'Match', 'Connect'] },
  'docs-timezones.html': { family: 'reference', variant: 'clock', accent: 'violet', code: 'Guide 10', icon: 'timezones.svg', label: 'Timezones', summary: 'Local input becomes a Discord timestamp every participant can read correctly.', tags: ['Local', 'Convert', 'Display'] },
  'docs-guildbank.html': { family: 'reference', variant: 'ledger', accent: 'gold', code: 'Guide 11', icon: 'economy.svg', label: 'GuildBank', summary: 'Pending accumulation, specialist review and an auditable confirmed balance.', tags: ['Deposit', 'Review', 'Ledger'] },
  'docs-leaderboards.html': { family: 'reference', variant: 'ranking', accent: 'green', code: 'Guide 12', icon: 'leaderboards.svg', label: 'Leaderboards', summary: 'Compact rankings for progress, contribution, activity and account Loyalty.', tags: ['Rank', 'Compare', 'Navigate'] },
  'docs-watchlists.html': { family: 'reference', variant: 'pulse', accent: 'red', code: 'Guide 13', icon: 'watchlists.svg', label: 'Watchlists', summary: 'Live guild and enemy awareness from the latest online information Luminox already collected.', tags: ['Online', 'Session', 'Risk'] },
  'docs-progression.html': { family: 'reference', variant: 'timeline', accent: 'green', code: 'Guide 14', icon: 'leaderboards.svg', label: 'Progress', summary: 'Rolling level and death records alongside a living, ranked guild roster.', tags: ['Daily', 'Monthly', 'Yearly'] },
  'docs-tracker.html': { family: 'reference', variant: 'trace', accent: 'red', code: 'Guide 15', icon: 'intelligence.svg', label: 'Identity Tracker', summary: 'Names remain connected through trades, transfers, returns and deletion.', tags: ['Detect', 'Update', 'Record'] },
  'docs-guards.html': { family: 'reference', variant: 'alert', accent: 'red', code: 'Guide 16', icon: 'guards.svg', label: 'Guards', summary: 'Temporary duty and coordinated blacklisted-enemy reports that clean themselves after inactivity.', tags: ['Enable', 'Report', 'Coordinate'] },
  'docs-recruitment.html': { family: 'reference', variant: 'growth', accent: 'green', code: 'Guide 17', icon: 'guild.svg', label: 'Recruitment', summary: 'Reviewed claims, disputes and retention-aware rewards for real new members.', tags: ['Claim', 'Review', 'Protect'] },
  'docs-guildhall.html': { family: 'reference', variant: 'ledger', accent: 'violet', code: 'Guild ops', icon: 'guild.svg', label: 'Guildhall', summary: 'Ordered rooms, registered occupants and reviewed member requests with permanent Discord logs.', tags: ['Configure', 'Assign', 'Audit'] },
  'docs-support.html': { family: 'reference', variant: 'inbox', accent: 'blue', code: 'Guide 18', icon: 'support.svg', label: 'Support', summary: 'Private role-aware tickets that keep their full conversation inside Discord.', tags: ['Open', 'Claim', 'Archive'] },
  'docs-moderation.html': { family: 'reference', variant: 'shield', accent: 'red', code: 'Guide 19', icon: 'intelligence.svg', label: 'Moderation', summary: 'Blacklist, Ban List and permanent logs tied to game identities.', tags: ['Restrict', 'Track', 'Audit'] },
  'docs-staff.html': { family: 'reference', variant: 'roles', accent: 'violet', code: 'Guide 20', icon: 'guild.svg', label: 'Staff systems', summary: 'Global moderators, specialist roles, private voting and public applications.', tags: ['Roles', 'Access', 'Decisions'] },
  'docs-admin.html': { family: 'reference', variant: 'control', accent: 'gold', code: 'Guide 21', icon: 'setup.svg', label: 'Administration', summary: 'Configuration boundaries, maintenance tools and safe operational decisions.', tags: ['Configure', 'Inspect', 'Maintain'] },
  'docs-automation.html': { family: 'reference', variant: 'cycle', accent: 'green', code: 'Guide 22', icon: 'setup.svg', label: 'Automation', summary: 'Refresh panels, clean temporary messages, expire private responses and keep backups.', tags: ['Refresh', 'Clean', 'Back up'] },
  'docs-website.html': { family: 'reference', variant: 'publish', accent: 'blue', code: 'Guide 23', icon: 'docs.svg', label: 'Website publishing', summary: 'A reviewed path from a private Discord proposal to approved public media.', tags: ['Submit', 'Review', 'Publish'] },
  'docs-troubleshooting.html': { family: 'reference', variant: 'diagnostic', accent: 'red', code: 'Guide 24', icon: 'troubleshooting.svg', label: 'Troubleshooting', summary: 'Diagnose permissions and configuration before forcing expensive synchronization.', tags: ['Observe', 'Isolate', 'Recover'] },
  'systems.html': { family: 'reference', variant: 'architecture', accent: 'violet', code: 'Guide 25', icon: 'docs.svg', label: 'How it works', summary: 'Luminox reuses current information, refreshes panels by need and cleans temporary detail.', tags: ['Collect once', 'Reuse', 'Clean'] },
  'docs-faq.html': { family: 'reference', variant: 'questions', accent: 'blue', code: 'Guide 26', icon: 'support.svg', label: 'FAQ', summary: 'Fast answers with direct routes to the complete operational guides.', tags: ['Ask', 'Answer', 'Continue'] },
  'features.html': { family: 'product', variant: 'constellation', accent: 'violet', code: 'Product map', icon: 'finder.svg', label: 'Connected systems', summary: 'One verified identity connects every panel, workflow and permanent audit trail.', tags: ['Identity', 'Operations', 'Intelligence'] },
  'use-cases.html': { family: 'product', variant: 'usecases', accent: 'gold', code: 'Problem → outcome', icon: 'finder.svg', label: 'Use cases', summary: 'Start with one operational pressure point and deploy only the modules that remove it.', tags: ['Identify', 'Implement', 'Measure'] },
  'features-identity.html': { family: 'product', variant: 'identity', accent: 'blue', code: '01', icon: 'identity.svg', label: 'Verified identity', summary: 'Make the person, Discord account, characters, main and guild rank agree.', tags: ['Account', 'Character', 'Role'] },
  'features-economy.html': { family: 'product', variant: 'economy', accent: 'gold', code: '02', icon: 'economy.svg', label: 'Guild economy', summary: 'Turn loot and contributions into reviewed records instead of private assumptions.', tags: ['Split', 'Accumulate', 'Approve'] },
  'features-events.html': { family: 'product', variant: 'events', accent: 'green', code: '03', icon: 'events.svg', label: 'Event engine', summary: 'Specialized team rules and one reliable lifecycle from recruitment to archive.', tags: ['Schedule', 'Team', 'Reward'] },
  'features-intelligence.html': { family: 'product', variant: 'intelligence', accent: 'red', code: '04', icon: 'intelligence.svg', label: 'Live intelligence', summary: 'Connect online state, enemy risk and identity changes without duplicate scans.', tags: ['Observe', 'Track', 'Alert'] },
  'features-finder.html': { family: 'product', variant: 'finder', accent: 'blue', code: '05', icon: 'finder.svg', label: 'Team discovery', summary: 'Use current activity and compatible vocations to surface playable groups.', tags: ['Signal', 'Score', 'Match'] },
  'features-support.html': { family: 'product', variant: 'support', accent: 'violet', code: '06', icon: 'support.svg', label: 'Private support', summary: 'Route every request to the correct people without exposing it publicly.', tags: ['Route', 'Resolve', 'Archive'] },
  'security.html': { family: 'product', variant: 'trust', accent: 'blue', code: 'Trust model', icon: 'guards.svg', label: 'Trust & safety', summary: 'Understand permissions, staff review, automatic cleanup and what remains in Discord.', tags: ['Controlled', 'Auditable', 'Clear'] },
  'guild.html': { family: 'guild', variant: 'manifesto', accent: 'gold', code: 'Secura', icon: 'guild.svg', label: 'The guild', summary: 'An international Tibia community where structure protects the social experience.', tags: ['Trust', 'Respect', 'Together'] },
  'guild-community.html': { family: 'guild', variant: 'community', accent: 'green', code: 'Chapter 02', icon: 'guild.svg', label: 'Community', summary: 'Organization creates more room for helping, playing and staying connected.', tags: ['Hunts', 'Voice', 'Support'] },
  'gallery.html': { family: 'guild', variant: 'gallery', accent: 'violet', code: 'Field notes', icon: 'guild.svg', label: 'Community gallery', summary: 'Staff-reviewed moments from the people and activities behind Lumina.', tags: ['Captured', 'Reviewed', 'Published'] },
  'guild-join.html': { family: 'guild', variant: 'journey', accent: 'blue', code: 'Chapter 03', icon: 'identity.svg', label: 'Join Lumina', summary: 'A clear journey from interested visitor to verified guild member.', tags: ['Apply', 'Verify', 'Enter'] },
  'guild-rules.html': { family: 'guild', variant: 'charter', accent: 'red', code: 'Chapter 04', icon: 'guards.svg', label: 'Guild charter', summary: 'The principles that protect claims, communication and long-term trust.', tags: ['Respect', 'Evidence', 'Accountability'] },
  'pricing.html': { family: 'commercial', variant: 'editions', accent: 'gold', code: 'Free + Premium', icon: 'pricing.svg', label: 'Plans and editions', summary: 'Start with Free; choose Premium when higher limits, longer history or closer support matter.', tags: ['Free', 'Premium', 'Founder'] },
  'roadmap.html': { family: 'editorial', variant: 'route', accent: 'violet', code: 'Now → later', icon: 'pricing.svg', label: 'Development route', summary: 'Depth, reliability and packaging happen in that order — never the reverse.', tags: ['Harden', 'Package', 'Scale'] }
};

const openingLayoutGroups = {
  minimal: [
    '404.html',
    'changelog.html',
    'docs.html',
    'docs-getting-started.html',
    'docs-troubleshooting.html',
    'docs-faq.html',
    'use-cases.html',
    'guild.html',
    'guild-rules.html',
    'roadmap.html'
  ],
  band: [
    'setup.html',
    'docs-events.html',
    'docs-timezones.html',
    'docs-automation.html',
    'features-intelligence.html',
    'guild-community.html',
    'guild-join.html',
    'pricing.html'
  ],
  chapter: [
    'docs-registration.html',
    'docs-loyalty.html',
    'docs-loot.html',
    'docs-guildbank.html',
    'docs-tracker.html',
    'docs-guildhall.html',
    'docs-moderation.html',
    'docs-staff.html',
    'docs-admin.html'
  ],
  centered: [
    'docs-panels.html',
    'docs-streaming.html',
    'docs-finder.html',
    'docs-leaderboards.html',
    'docs-guards.html',
    'docs-website.html'
  ],
  brief: [
    'docs-watchlists.html',
    'docs-progression.html',
    'docs-recruitment.html',
    'docs-support.html',
    'systems.html'
  ],
  rail: [
    'contact.html',
    'features-economy.html',
    'features-support.html'
  ],
  spotlight: [
    'features-identity.html',
    'features-finder.html',
    'gallery.html'
  ],
  split: [
    'commands.html',
    'features.html',
    'features-events.html',
    'security.html'
  ]
};

const openingLayoutByPage = new Map(
  Object.entries(openingLayoutGroups).flatMap(([layout, pages]) =>
    pages.map((page) => [page, layout])
  )
);

const renderOpeningAside = (presentation, layout) => {
  const aside = document.createElement('aside');
  aside.className = `opening-aside opening-aside-${layout}`;
  aside.setAttribute('aria-label', `${presentation.label} page summary`);

  const tags = presentation.tags.map((tag) => `<span>${tag}</span>`).join('');
  const summary = layout === 'spotlight'
    ? ''
    : `<p class="opening-summary">${presentation.summary}</p>`;
  aside.innerHTML = `
    <div class="opening-aside-top">
      <span class="opening-code">${presentation.code}</span>
      <span class="opening-icon"><img src="assets/icons/${presentation.icon}" alt="" aria-hidden="true"></span>
    </div>
    <div class="opening-aside-body">
      <p class="opening-label">${presentation.label}</p>
      ${summary}
      <div class="opening-tags">${tags}</div>
    </div>`;
  return aside;
};

const renderOpeningBand = (presentation) => {
  const band = document.createElement('div');
  band.className = 'opening-band';
  band.innerHTML = `
    <span class="opening-band-icon"><img src="assets/icons/${presentation.icon}" alt="" aria-hidden="true"></span>
    <span class="opening-band-code">${presentation.code}</span>
    <span class="opening-band-label">${presentation.label}</span>
    <span class="opening-band-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return band;
};

const renderOpeningMark = (presentation, layout) => {
  const mark = document.createElement('div');
  mark.className = `opening-mark opening-mark-${layout}`;
  mark.innerHTML = `
    <span class="opening-mark-icon"><img src="assets/icons/${presentation.icon}" alt="" aria-hidden="true"></span>
    <span class="opening-mark-code">${presentation.code}</span>
    <span class="opening-mark-label">${presentation.label}</span>
    <span class="opening-mark-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return mark;
};

const renderOpeningBrief = (presentation) => {
  const brief = document.createElement('div');
  brief.className = 'opening-brief';
  brief.innerHTML = `
    <span class="opening-brief-code">${presentation.code}</span>
    <p>${presentation.summary}</p>
    <span class="opening-brief-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return brief;
};

const applyPagePresentation = () => {
  document.body.dataset.page = currentPage.replace(/\.html$/i, '') || 'home';

  if (currentPage === 'index.html') {
    document.body.classList.add('page-home');
    return;
  }

  const presentation = pagePresentations[currentPage];
  const opening = document.querySelector('.page-hero');
  if (!presentation || !opening) return;
  const layout = openingLayoutByPage.get(currentPage) || 'minimal';

  document.body.classList.add(
    'page-interior',
    `page-family-${presentation.family}`,
    `page-accent-${presentation.accent}`,
    `page-variant-${presentation.variant}`,
    `page-layout-${layout}`
  );
  opening.classList.add('page-opening');

  const copy = document.createElement('div');
  copy.className = 'opening-copy';
  while (opening.firstChild) copy.append(opening.firstChild);

  if (layout === 'band') {
    copy.append(renderOpeningBand(presentation));
    opening.append(copy);
    return;
  }

  if (layout === 'minimal') {
    opening.append(copy);
    return;
  }

  if (layout === 'chapter') {
    opening.append(renderOpeningMark(presentation, layout), copy);
    return;
  }

  if (layout === 'centered') {
    copy.prepend(renderOpeningMark(presentation, layout));
    opening.append(copy);
    return;
  }

  if (layout === 'brief') {
    opening.append(copy, renderOpeningBrief(presentation));
    return;
  }

  opening.append(copy, renderOpeningAside(presentation, layout));
};

applyPagePresentation();

const mainContent = document.querySelector('main');
if (mainContent) {
  mainContent.id ||= 'main-content';
  const skipLink = document.createElement('a');
  skipLink.className = 'skip-link';
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to content';
  document.body.prepend(skipLink);
}

const conversionCopy = {
  reference: {
    eyebrow: 'Put this guide into practice',
    title: 'Configure one module, verify it, then expand.',
    text: 'Use the panel directory for the exact setup command. Start with Free, then consider Premium only when your guild needs more capacity or support.',
    primary: ['docs-panels.html', 'Open panel directory'],
    secondary: ['contact.html', 'Ask a question']
  },
  product: {
    eyebrow: 'See the workflow in your server',
    title: 'Start with the smallest useful Luminox rollout.',
    text: 'Begin with Free and one clear use case. Premium is available when your guild needs higher limits, longer history or closer support.',
    primary: ['pricing.html', 'Compare Free and Premium'],
    secondary: ['contact.html', 'Discuss your guild']
  },
  guild: {
    eyebrow: 'Meet the community',
    title: 'Join Lumina or explore the system built around it.',
    text: 'Our Discord is the direct route for guild questions, registration help and Luminox feedback.',
    primary: ['guild-join.html', 'How to join Lumina'],
    secondary: ['contact.html', 'Open Discord contact']
  },
  commercial: {
    eyebrow: 'Choose the right service level',
    title: 'Start Free or discuss a Premium rollout.',
    text: 'Tell us what your staff handles today and we will recommend the smallest plan that solves it.',
    primary: ['contact.html', 'Ask about Premium'],
    secondary: ['use-cases.html', 'Explore use cases']
  },
  editorial: {
    eyebrow: 'Follow the product direction',
    title: 'See what is ready, what is being hardened and what comes later.',
    text: 'Meaningful releases are documented manually so roadmap and changelog claims remain understandable.',
    primary: ['roadmap.html', 'View roadmap'],
    secondary: ['contact.html', 'Share feedback']
  }
};

const appendContextualConversion = () => {
  if (!mainContent || mainContent.querySelector('.conversion-cta') || ['index.html', '404.html', 'contact.html'].includes(currentPage)) return;
  const presentation = pagePresentations[currentPage];
  const copy = presentation ? conversionCopy[presentation.family] : null;
  if (!copy) return;

  const section = document.createElement('section');
  section.className = 'section contextual-conversion';
  section.innerHTML = `
    <div class="conversion-cta">
      <div><p class="eyebrow">${copy.eyebrow}</p><h2>${copy.title}</h2><p>${copy.text}</p></div>
      <div class="hero-actions"><a class="button primary" href="${copy.primary[0]}">${copy.primary[1]}</a><a class="button secondary" href="${copy.secondary[0]}">${copy.secondary[1]}</a></div>
    </div>`;
  mainContent.append(section);
};

appendContextualConversion();

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
