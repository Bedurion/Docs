const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const vectorAssetVersion = '20260724-4';
const vectorAssetUrl = (path) => `${String(path).split('?')[0]}?v=${vectorAssetVersion}`;

const navigationSections = {
  guild: {
    label: 'Guild',
    icon: 'nav-guild.svg',
    pages: [
      ['guild.html', 'Overview', 'Discover Lumina'],
      ['guild-history.html', 'Our Story', 'Discover Lumina'],
      ['guild-secura.html', 'Life on Secura', 'Discover Lumina'],
      ['guild-other-games.html', 'Other Games', 'Discover Lumina'],
      ['guild-members.html', 'Members', 'Discover Lumina'],
      ['guild-leadership.html', 'Leadership', 'Discover Lumina'],
      ['guild-journal.html', 'Journal', 'Guild Life'],
      ['blog.html', 'Blog', 'Guild Life'],
      ['guild-activities.html', 'Activities', 'Guild Life'],
      ['guild-community.html', 'Community', 'Guild Life'],
      ['gallery.html', 'Gallery', 'Guild Life'],
      ['guild-art.html', 'Art', 'Guild Life'],
      ['guild-roleplay.html', 'Roleplay', 'Guild Life'],
      ['guild-join.html', 'Join Lumina', 'Become a Member'],
      ['guild-loyalty.html', 'Loyalty', 'Become a Member'],
      ['guild-faq.html', 'Candidate FAQ', 'Become a Member'],
      ['guild-rules.html', 'Rules', 'Become a Member']
    ]
  },
  features: {
    label: 'Bot',
    icon: 'nav-bot.svg',
    pages: [
      ['features.html', 'Bot Overview', 'Start'],
      ['bot-installation.html', 'Installation', 'Start'],
      ['editions.html', 'Editions', 'Start'],
      ['founder.html', 'Founder Edition', 'Start'],
      ['systems.html', 'How It Works', 'Start'],
      ['use-cases.html', 'Use Cases', 'Start'],
      ['security.html', 'Trust & Safety', 'Start'],
      ['bot-nicknames.html', 'Nicknames', 'Members'],
      ['bot-registration.html', 'Character Registration', 'Members'],
      ['bot-inactive-characters.html', 'Inactive Characters', 'Members'],
      ['bot-ranks.html', 'Guild Rank Sync', 'Members'],
      ['bot-loyalty.html', 'Loyalty', 'Members'],
      ['bot-boosts.html', 'Server Boosts', 'Members'],
      ['bot-streaming.html', 'Stream Rewards', 'Members'],
      ['bot-timezones.html', 'Timezones', 'Members'],
      ['bot-finder.html', 'Finder', 'Members'],
      ['bot-events.html', 'Event Boards', 'Activities'],
      ['bot-loot.html', 'Loot Split', 'Activities'],
      ['bot-progression.html', 'Progression', 'Activities'],
      ['bot-leaderboards.html', 'Leaderboards', 'Activities'],
      ['bot-guildbank.html', 'GuildBank', 'Guild operations'],
      ['bot-watchlists.html', 'Online Lists', 'Guild operations'],
      ['bot-tracker.html', 'Identity Tracker', 'Guild operations'],
      ['bot-guards.html', 'Guards', 'Guild operations'],
      ['bot-recruitment.html', 'Recruitment', 'Guild operations'],
      ['bot-guildhall.html', 'Guildhall', 'Guild operations'],
      ['bot-support.html', 'Support Tickets', 'Staff & admin'],
      ['bot-moderation.html', 'Automod & Logs', 'Staff & admin'],
      ['bot-banlist.html', 'Ban List', 'Staff & admin'],
      ['bot-blacklist.html', 'Blacklist', 'Staff & admin'],
      ['bot-staff.html', 'Staff Tools', 'Staff & admin'],
      ['bot-automation.html', 'Automation', 'Staff & admin'],
      ['bot-website.html', 'Website Publishing', 'Staff & admin']
    ]
  },
  docs: {
    label: 'Docs',
    icon: 'nav-docs.svg',
    pages: [
      ['docs.html', 'Documentation Home', 'Start'],
      ['docs-getting-started.html', 'Getting Started', 'Start'],
      ['systems.html', 'How Luminox Works', 'Start'],
      ['setup.html', 'Installation', 'Start'],
      ['commands.html', 'Command Reference', 'Start'],
      ['docs-panels.html', 'Panel Setup', 'Start'],
      ['docs-registration.html', 'Character Registration', 'Member systems'],
      ['docs-inactive-characters.html', 'Inactive Characters', 'Member systems'],
      ['docs-nicknames.html', 'Nicknames', 'Member systems'],
      ['docs-ranks.html', 'Guild Rank Sync', 'Member systems'],
      ['docs-loyalty.html', 'Loyalty', 'Member systems'],
      ['docs-boosts.html', 'Server Boost Loyalty', 'Member systems'],
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
      ['docs-moderation.html', 'Automod & Logs', 'Staff & moderation'],
      ['docs-banlist.html', 'Ban List', 'Staff & moderation'],
      ['docs-blacklist.html', 'Blacklist', 'Staff & moderation'],
      ['docs-staff.html', 'Staff Systems', 'Staff & moderation'],
      ['docs-admin.html', 'Admin Guide', 'Administration'],
      ['docs-automation.html', 'Automation & Retention', 'Administration'],
      ['docs-website.html', 'Website Publishing', 'Administration'],
      ['docs-troubleshooting.html', 'Troubleshooting', 'Administration'],
      ['docs-faq.html', 'FAQ', 'Administration'],
      ['legal.html', 'Legal Centre', 'Administration'],
      ['roadmap.html', 'Roadmap', 'Administration'],
      ['changelog.html', 'Changelog', 'Administration']
    ]
  },
  pricing: {
    label: 'Pricing',
    icon: 'nav-pricing.svg',
    pages: [
      ['pricing.html', 'Plans'],
      ['pricing-faq.html', 'FAQ'],
      ['guarantee.html', 'Guarantee']
    ]
  }
};

const sectionContainsPage = (section) => section.pages.some(([href]) => href === currentPage);
const renderNavIcon = (icon) => `<span class="nav-icon-shell"><img class="nav-icon" src="${vectorAssetUrl(`assets/icons/${icon}`)}" alt="" aria-hidden="true"></span>`;
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
const renderNavMenu = (section, wide = false) => {
  const groupCount = new Set(section.pages.map(([, , group]) => group).filter(Boolean)).size;
  const groupClass = groupCount > 0 ? ` nav-groups-${groupCount}` : '';
  return `
  <div class="nav-menu" data-nav-section="${section.label.toLowerCase()}">
    <button class="nav-link nav-menu-button ${sectionContainsPage(section) ? 'active' : ''}" type="button" aria-expanded="false">
      ${renderNavIcon(section.icon)}<span>${section.label}</span><span class="nav-chevron" aria-hidden="true"></span>
    </button>
    <div class="nav-dropdown ${wide ? 'nav-dropdown-wide' : ''}${groupClass}">${renderDropdownLinks(section)}</div>
  </div>`;
};

if (navLinks) {
  navLinks.innerHTML = `
    <div class="mobile-nav-heading">
      <button class="mobile-nav-back" type="button" aria-label="Back to main navigation">
        <span class="mobile-nav-back-icon" aria-hidden="true">←</span>
        <span><small>Back to menu</small><strong data-mobile-nav-title>Navigation</strong></span>
      </button>
    </div>
    <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">${renderNavIcon('home.svg')}<span>Home</span></a>
    ${renderNavMenu(navigationSections.guild, true)}
    ${renderNavMenu(navigationSections.features, true)}
    ${renderNavMenu(navigationSections.docs, true)}
    ${renderNavMenu(navigationSections.pricing)}
    <a class="nav-cta ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html"><span class="nav-cta-icon">${renderNavIcon('nav-support.svg')}</span><span>Questions?</span><span class="nav-cta-arrow" aria-hidden="true">↗</span></a>`;
}

if (navToggle) {
  navToggle.innerHTML = '<span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>';
}

const siteFooter = document.querySelector('.footer');
if (siteFooter) {
  const currentYear = new Date().getFullYear();
  const copyrightYears = currentYear > 2025 ? `2025–${currentYear}` : '2025';
  siteFooter.innerHTML = `
    <a class="footer-brand" href="index.html" aria-label="Lumina home">
      <img src="assets/brand/seal-dark-nav.svg?v=20260723-4" alt="" aria-hidden="true">
      <span><strong>Lumina Guild</strong><small>A Tibia Guild on Secura</small></span>
    </a>
    <nav class="footer-links" aria-label="Footer navigation">
      <a href="guild.html">Guild</a><a href="features.html">Bot</a><a href="docs.html">Docs</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a>
    </nav>
    <div class="footer-meta"><span class="footer-copyright">© ${copyrightYears} Lumina</span><span class="footer-meta-separator" aria-hidden="true">·</span><a class="footer-legal" href="legal.html">Legal</a></div>
    <a class="footer-top" href="#top"><span aria-hidden="true">↑</span> Top</a>`;
}

const documentationCatalog = [
  ['docs-getting-started.html', 'Getting Started', 'First member and administrator steps, setup order and daily use.', 'start install member admin'],
  ['setup.html', 'Installation & Wizard', 'Safe installation, edition selection and configuration overview.', 'install wizard overview setup'],
  ['commands.html', 'Command Reference', 'Every active slash command, context command and access level.', 'commands admin everyone moderator'],
  ['docs-panels.html', 'Panel Setup', 'Every public control panel and the command that publishes it.', 'panels channels setup configuration'],
  ['docs-registration.html', 'Character Registration', 'Verification codes, account ownership, mains and world restrictions.', 'register character verification ownership main world'],
  ['docs-inactive-characters.html', 'Inactive Characters', 'Verified guild departures, account eligibility, managed roles, Loyalty, recruitment settlement and retained identity history.', 'inactive departed leave guild character roles loyalty recruitment history reconciliation'],
  ['docs-nicknames.html', 'Automatic Nicknames', 'Universal game-name profiles, verified Community Tibia mains, Loyalty notation, refresh triggers and Discord permissions.', 'nickname universal game name community tibia vocation level loyalty main discord sync'],
  ['docs-ranks.html', 'Guild Rank & Promotion Sync', 'Tibia rank mappings, automatic Discord roles, Guest access and hierarchy safeguards.', 'ranks promotions demotions discord roles guest mapping'],
  ['docs-loyalty.html', 'Loyalty System', 'Rewards, levels, profiles, boosts and account eligibility.', 'loyalty points levels boosts rewards'],
  ['docs-boosts.html', 'Server Boost Loyalty', 'Continuous 30-day boost periods, multiple units, pending registration and lifecycle logs.', 'boost server boost loyalty 30 days pending attributed'],
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
  ['docs-moderation.html', 'Automod & Moderation Logs', 'Channel-scoped link and word protection, isolation, permissions and permanent audit history.', 'automod blocked words links isolation moderation log'],
  ['docs-banlist.html', 'Ban List', 'Timed or unlimited Discord sanctions with guided targets, responsible staff and reversible controls.', 'banlist ban sanctions duration lift discord member'],
  ['docs-blacklist.html', 'Tibia Blacklist', 'Community Edition characters, guilds, bounties, Tracker outcomes and connected enemy intelligence.', 'blacklist tibia characters guilds bounty tracker enemies'],
  ['docs-staff.html', 'Staff Systems', 'Moderator roles, private voting and public applications.', 'staff moderator voting applications'],
  ['docs-admin.html', 'Administrator Guide', 'Role hierarchy, refresh strategy, backups and safe maintenance.', 'admin roles refresh backup'],
  ['docs-automation.html', 'Automation & Retention', 'Autodelete, panel refresh, private response expiry and local backups.', 'automation autodelete retention backups ephemeral'],
  ['docs-website.html', 'Website Publishing', 'Founder-only Discord proposals, staff review and safe publication of approved media.', 'founder website gallery media publish review security'],
  ['docs-troubleshooting.html', 'Troubleshooting', 'Permissions, missing panels, failed interactions and sync issues.', 'errors permissions missing interaction'],
  ['docs-faq.html', 'FAQ', 'Short answers to common member and staff questions.', 'faq questions help'],
  ['legal.html', 'Legal Centre', 'Terms, privacy, cookies, publishing and Discord-managed billing conditions.', 'legal terms privacy cookies publishing billing'],
  ['roadmap.html', 'Product Roadmap', 'The public delivery path, release principles and priorities shaping future Luminox work.', 'roadmap development future releases'],
  ['changelog.html', 'Changelog', 'A curated history of meaningful Luminox releases and documentation milestones.', 'changelog updates releases history'],
  ['bot-installation.html', 'Install Luminox', 'Compare the template-first, guided existing-server and modular installation routes before adding Luminox through Discord.', 'install bot Discord template wizard existing server modular setup panels'],
  ['use-cases.html', 'Use Cases', 'Choose the smallest Luminox setup for the problem your guild needs to solve.', 'use cases buying evaluation setup guild problems'],
  ['editions.html', 'Luminox Editions', 'Compare the public Universal and Community editions and understand Lumina’s private Founder Edition.', 'editions universal community founder Tibia game guild compare private'],
  ['founder.html', 'Founder Edition', 'Explore the complete private Luminox environment reserved for accepted Lumina members.', 'founder private edition Lumina members complete Luminox Secura'],
  ['security.html', 'Trust & Safety', 'Permissions, data boundaries, retention and honest platform limits.', 'security trust privacy permissions retention']
];

const pagePresentations = {
  '404.html': { family: 'utility', variant: 'signal', accent: 'red', code: '404', icon: 'content-troubleshooting.svg', label: 'Lost route', summary: 'The requested destination is outside the current site map.', tags: ['Return', 'Search', 'Recover'] },
  'changelog.html': { family: 'editorial', variant: 'ledger', accent: 'green', code: 'Build log', icon: 'content-roadmap.svg', label: 'Product history', summary: 'A curated record of meaningful releases rather than a raw stream of file changes.', tags: ['Released', 'Verified', 'Documented'] },
  'commands.html': { family: 'reference', variant: 'terminal', accent: 'blue', code: '34 actions', icon: 'content-commands.svg', label: 'Command index', summary: 'Exact syntax, access level and purpose for 33 slash-command roots and one message context action.', tags: ['Everyone', 'Staff', 'Admin'] },
  'contact.html': { family: 'contact', variant: 'portal', accent: 'blue', code: 'Discord first', icon: 'content-support.svg', label: 'Direct contact', summary: 'Choose the right conversation for product guidance, private support or Lumina membership.', tags: ['Product', 'Support', 'Guild'] },
  'docs.html': { family: 'reference', variant: 'library', accent: 'violet', code: 'Documentation', icon: 'content-docs.svg', label: 'Search the manual', summary: 'Move from installation to daily operation through role-aware, current guides.', tags: ['Members', 'Staff', 'Admins'] },
  'docs-getting-started.html': { family: 'reference', variant: 'steps', accent: 'green', code: 'Guide 01', icon: 'content-journey.svg', label: 'Start here', summary: 'Edition-aware paths explain what members, staff and administrators should do first.', tags: ['Choose role', 'Follow path', 'Verify'] },
  'setup.html': { family: 'reference', variant: 'blueprint', accent: 'gold', code: 'Guide 02', icon: 'content-setup.svg', label: 'Installation', summary: 'A non-destructive route from an empty server to correctly published panels.', tags: ['Audit', 'Configure', 'Publish'] },
  'docs-panels.html': { family: 'reference', variant: 'directory', accent: 'violet', code: 'Guide 03', icon: 'content-docs.svg', label: 'Panel directory', summary: 'Every public control surface, its channel and its prerequisite configuration.', tags: ['Channel', 'Command', 'Audience'] },
  'docs-registration.html': { family: 'reference', variant: 'identity', accent: 'blue', code: 'Guide 04', icon: 'content-registration.svg', label: 'Registration', summary: 'The verified ownership link between a Discord account, its Tibia characters and guild access.', tags: ['Verify', 'Main', 'Trust'] },
  'docs-inactive-characters.html': { family: 'reference', variant: 'cycle', accent: 'red', code: 'Guide 04C', icon: 'content-inactive-characters.svg', label: 'Inactive characters', summary: 'Verify official guild departures before reconciling account access, rewards and active member views.', tags: ['Verify', 'Reconcile', 'Preserve'] },
  'docs-nicknames.html': { family: 'reference', variant: 'identity', accent: 'violet', code: 'Guide 04A', icon: 'content-nickname.svg', label: 'Automatic nicknames', summary: 'Use a simple game-name profile in Universal or a verified Tibia main in Community, always with account Loyalty.', tags: ['Game name', 'Format', 'Refresh'] },
  'docs-ranks.html': { family: 'reference', variant: 'roles', accent: 'green', code: 'Guide 04B', icon: 'content-ranks.svg', label: 'Guild rank sync', summary: 'Map verified Tibia guild ranks to managed Discord roles and Guest access.', tags: ['Map', 'Promote', 'Protect'] },
  'docs-loyalty.html': { family: 'reference', variant: 'progress', accent: 'gold', code: 'Guide 05', icon: 'content-loyalty.svg', label: 'Loyalty', summary: 'Account-wide rewards, levels, eligibility and transparent reward history.', tags: ['Earn', 'Level', 'Review'] },
  'docs-boosts.html': { family: 'reference', variant: 'cycle', accent: 'violet', code: 'Guide 05A', icon: 'content-boosts.svg', label: 'Server Boost Loyalty', summary: 'Independent 30-day boost cycles, attribution, pending rewards and permanent logs.', tags: ['Track', 'Complete', 'Reward'] },
  'docs-streaming.html': { family: 'reference', variant: 'broadcast', accent: 'red', code: 'Guide 06', icon: 'content-streaming.svg', label: 'Stream Loyalty', summary: 'Event-driven screen-share tracking with proportional rewards and healthy limits.', tags: ['10 min', 'Per minute', '6h cap'] },
  'docs-events.html': { family: 'reference', variant: 'schedule', accent: 'green', code: 'Guide 07', icon: 'content-events.svg', label: 'Events', summary: 'General Discord events in both editions, with specialized Tibia boards in Community.', tags: ['Create', 'Join', 'Complete'] },
  'docs-loot.html': { family: 'reference', variant: 'calculator', accent: 'gold', code: 'Guide 08', icon: 'content-loot.svg', label: 'Loot Split', summary: 'A guided analyzer flow from pasted session data to fair transfers and contributions.', tags: ['Paste', 'Calculate', 'Confirm'] },
  'docs-finder.html': { family: 'reference', variant: 'radar', accent: 'blue', code: 'Guide 09', icon: 'content-finder.svg', label: 'Finder', summary: 'Current online information becomes compatible teams and voluntary Looking for team messages.', tags: ['Online', 'Match', 'Connect'] },
  'docs-timezones.html': { family: 'reference', variant: 'clock', accent: 'violet', code: 'Guide 10', icon: 'content-timezones.svg', label: 'Timezones', summary: 'Local input becomes a Discord timestamp every participant can read correctly.', tags: ['Local', 'Convert', 'Display'] },
  'docs-guildbank.html': { family: 'reference', variant: 'ledger', accent: 'gold', code: 'Guide 11', icon: 'content-economy.svg', label: 'GuildBank', summary: 'Pending accumulation, specialist review and a confirmed balance built only from approved entries.', tags: ['Deposit', 'Review', 'Ledger'] },
  'docs-leaderboards.html': { family: 'reference', variant: 'ranking', accent: 'green', code: 'Guide 12', icon: 'content-leaderboards.svg', label: 'Leaderboards', summary: 'Compact rankings for progress, contribution, activity and account Loyalty.', tags: ['Rank', 'Compare', 'Navigate'] },
  'docs-watchlists.html': { family: 'reference', variant: 'pulse', accent: 'red', code: 'Guide 13', icon: 'content-watchlists.svg', label: 'Watchlists', summary: 'Live guild and enemy awareness from the latest online information Luminox already collected.', tags: ['Online', 'Session', 'Risk'] },
  'docs-progression.html': { family: 'reference', variant: 'timeline', accent: 'green', code: 'Guide 14', icon: 'content-progression.svg', label: 'Progress', summary: 'Rolling level and death records alongside a living, ranked guild roster.', tags: ['Daily', 'Monthly', 'Yearly'] },
  'docs-tracker.html': { family: 'reference', variant: 'trace', accent: 'red', code: 'Guide 15', icon: 'content-intelligence.svg', label: 'Identity Tracker', summary: 'Names remain connected through trades, transfers, returns and deletion.', tags: ['Detect', 'Update', 'Record'] },
  'docs-guards.html': { family: 'reference', variant: 'alert', accent: 'red', code: 'Guide 16', icon: 'content-guards.svg', label: 'Guards', summary: 'Temporary duty and coordinated blacklisted-enemy reports that clean themselves after inactivity.', tags: ['Enable', 'Report', 'Coordinate'] },
  'docs-recruitment.html': { family: 'reference', variant: 'growth', accent: 'green', code: 'Guide 17', icon: 'content-recruitment.svg', label: 'Recruitment', summary: 'Pre-registration claims, specialist review, disputes and retention-aware rewards for real new members.', tags: ['Claim', 'Review', 'Protect'] },
  'docs-guildhall.html': { family: 'reference', variant: 'ledger', accent: 'violet', code: 'Guild ops', icon: 'content-guildhall.svg', label: 'Guildhall', summary: 'Ordered rooms, registered occupants and reviewed member requests with permanent Discord logs.', tags: ['Configure', 'Assign', 'Audit'] },
  'docs-support.html': { family: 'reference', variant: 'inbox', accent: 'blue', code: 'Guide 18', icon: 'content-support.svg', label: 'Support', summary: 'Private role-aware tickets with required questions, optional media intake and archived Discord history.', tags: ['Open', 'Claim', 'Archive'] },
  'docs-moderation.html': { family: 'reference', variant: 'shield', accent: 'red', code: 'Guide 19', icon: 'content-moderation.svg', label: 'Automod & logs', summary: 'Channel-scoped content protection and permanent audit history in both public editions.', tags: ['Detect', 'Isolate', 'Audit'] },
  'docs-banlist.html': { family: 'reference', variant: 'ledger', accent: 'gold', code: 'Sanctions Guide', icon: 'content-banlist.svg', label: 'Ban List', summary: 'Timed or unlimited Discord sanctions with guided targets, clear ownership and reversible controls.', tags: ['Add', 'Review', 'Lift'] },
  'docs-blacklist.html': { family: 'reference', variant: 'trace', accent: 'red', code: 'Community Guide', icon: 'content-blacklist.svg', label: 'Tibia Blacklist', summary: 'Characters, guilds, bounties and resolved identity history connected to live intelligence.', tags: ['Record', 'Track', 'Resolve'] },
  'docs-staff.html': { family: 'reference', variant: 'roles', accent: 'violet', code: 'Guide 20', icon: 'content-guild.svg', label: 'Staff systems', summary: 'Global moderators, specialist roles, private voting and public applications.', tags: ['Roles', 'Access', 'Decisions'] },
  'docs-admin.html': { family: 'reference', variant: 'control', accent: 'gold', code: 'Guide 21', icon: 'content-setup.svg', label: 'Administration', summary: 'Configuration boundaries, maintenance tools and safe administrator decisions.', tags: ['Configure', 'Inspect', 'Maintain'] },
  'docs-automation.html': { family: 'reference', variant: 'cycle', accent: 'green', code: 'Guide 22', icon: 'content-automation.svg', label: 'Automation', summary: 'Refresh panels, clean temporary messages, expire private responses and keep backups.', tags: ['Refresh', 'Clean', 'Back up'] },
  'docs-website.html': { family: 'reference', variant: 'publish', accent: 'blue', code: 'Founder Guide', icon: 'content-website.svg', label: 'Website publishing', summary: 'The Founder-only path from a private Discord proposal to approved public media.', tags: ['Configure', 'Review', 'Publish'] },
  'docs-troubleshooting.html': { family: 'reference', variant: 'diagnostic', accent: 'red', code: 'Guide 24', icon: 'content-troubleshooting.svg', label: 'Troubleshooting', summary: 'Diagnose permissions and configuration before forcing expensive synchronization.', tags: ['Observe', 'Isolate', 'Recover'] },
  'systems.html': { family: 'reference', variant: 'architecture', accent: 'violet', code: 'Guide 25', icon: 'content-systems.svg', label: 'How it works', summary: 'Luminox reuses current information, refreshes panels by need and cleans temporary detail.', tags: ['Collect once', 'Reuse', 'Clean'] },
  'docs-faq.html': { family: 'reference', variant: 'questions', accent: 'blue', code: 'Guide 26', icon: 'content-support.svg', label: 'FAQ', summary: 'Fast answers with direct routes to the complete setup guides.', tags: ['Ask', 'Answer', 'Continue'] },
  'features.html': { family: 'product', variant: 'constellation', accent: 'violet', code: 'Discord guild bot', icon: 'content-systems.svg', label: 'Choose a function', summary: 'Administrators configure and publish each function; members use guided controls while Luminox keeps current information and history organized.', tags: ['Configure', 'Publish', 'Operate'] },
  'bot-installation.html': { family: 'product', variant: 'installation', accent: 'violet', code: 'Start in Discord', icon: 'content-setup.svg', label: 'Install Luminox', summary: 'Choose a template-first, guided existing-server or modular route and publish the first useful panel without rebuilding your community.', tags: ['Template', 'Wizard', 'Panels'] },
  'editions.html': { family: 'product', variant: 'editions', accent: 'violet', code: 'Two public · one private', icon: 'edition-universal.svg', label: 'Choose your context', summary: 'Universal and Community are public choices. Founder is Lumina’s complete private edition for accepted members.', tags: ['Universal', 'Community', 'Founder'] },
  'founder.html': { family: 'product', variant: 'founder', accent: 'gold', code: 'Lumina exclusive', icon: 'edition-founder.svg', label: 'Founder Edition', summary: 'The complete private Luminox environment built, used and refined inside Lumina.', tags: ['Complete', 'Private', 'Lumina'] },
  'use-cases.html': { family: 'product', variant: 'usecases', accent: 'gold', code: 'Problem → outcome', icon: 'content-usecases.svg', label: 'Use cases', summary: 'Start with one repeated guild problem and enable only the features that remove it.', tags: ['Identify', 'Implement', 'Measure'] },
  'features-identity.html': { family: 'product', variant: 'identity', accent: 'blue', code: '01', icon: 'content-identity.svg', label: 'Verified identity', summary: 'Make the person, Discord account, characters, main and guild rank agree.', tags: ['Account', 'Character', 'Role'] },
  'features-economy.html': { family: 'product', variant: 'economy', accent: 'gold', code: '02', icon: 'content-economy.svg', label: 'Guild economy', summary: 'Turn loot and contributions into reviewed records instead of private assumptions.', tags: ['Split', 'Accumulate', 'Approve'] },
  'features-events.html': { family: 'product', variant: 'events', accent: 'green', code: '03', icon: 'content-events.svg', label: 'Event engine', summary: 'General Discord events in both editions, with specialized Tibia team rules in Community.', tags: ['Schedule', 'Team', 'Reward'] },
  'features-intelligence.html': { family: 'product', variant: 'intelligence', accent: 'red', code: '04', icon: 'content-intelligence.svg', label: 'Live monitoring', summary: 'Connect online members, enemy risk and character changes without duplicate scans.', tags: ['Observe', 'Track', 'Alert'] },
  'features-finder.html': { family: 'product', variant: 'finder', accent: 'blue', code: '05', icon: 'content-finder.svg', label: 'Team discovery', summary: 'Use current activity and compatible vocations to surface playable groups.', tags: ['Signal', 'Score', 'Match'] },
  'features-support.html': { family: 'product', variant: 'support', accent: 'violet', code: '06', icon: 'content-support.svg', label: 'Private support', summary: 'Route every request to the correct people without exposing it publicly.', tags: ['Route', 'Resolve', 'Archive'] },
  'bot-nicknames.html': { family: 'product', variant: 'identity', accent: 'violet', code: 'Member 01', icon: 'content-nickname.svg', label: 'Automatic nicknames', summary: 'Give every member a recognizable game identity, from Universal game names to verified Community Tibia mains.', tags: ['Identity', 'Loyalty', 'Readable'] },
  'bot-registration.html': { family: 'product', variant: 'identity', accent: 'blue', code: 'Member 02', icon: 'content-registration.svg', label: 'Character registration', summary: 'Verify who owns each character and use one trusted identity across the server.', tags: ['Verify', 'Main', 'Trust'] },
  'bot-inactive-characters.html': { family: 'product', variant: 'cycle', accent: 'red', code: 'Member 02A', icon: 'content-inactive-characters.svg', label: 'Inactive characters', summary: 'Confirmed guild departures update access and rewards without deleting verified identity history.', tags: ['Detect', 'Reconcile', 'Retain'] },
  'bot-ranks.html': { family: 'product', variant: 'roles', accent: 'green', code: 'Member 02B', icon: 'content-ranks.svg', label: 'Guild rank sync', summary: 'Keep Discord guild access aligned with verified Tibia promotions and demotions.', tags: ['Map', 'Sync', 'Guest'] },
  'bot-loyalty.html': { family: 'product', variant: 'progress', accent: 'gold', code: 'Member 03', icon: 'content-loyalty.svg', label: 'Loyalty progression', summary: 'Turn useful guild activity into transparent account-wide progress and rewards.', tags: ['Earn', 'Level', 'Explain'] },
  'bot-boosts.html': { family: 'product', variant: 'cycle', accent: 'violet', code: 'Member 03A', icon: 'content-boosts.svg', label: 'Server Boost Loyalty', summary: 'Reward every continuously maintained Discord boost with transparent account progress.', tags: ['30 days', 'Per boost', 'Logged'] },
  'bot-streaming.html': { family: 'product', variant: 'broadcast', accent: 'red', code: 'Member 04', icon: 'content-streaming.svg', label: 'Stream rewards', summary: 'Reward eligible Discord screen-share time without asking staff to count sessions.', tags: ['Detect', 'Qualify', 'Reward'] },
  'bot-timezones.html': { family: 'product', variant: 'clock', accent: 'violet', code: 'Member 05', icon: 'content-timezones.svg', label: 'Timezone conversion', summary: 'Let every member read shared times correctly in their own local timezone.', tags: ['Save', 'Convert', 'Display'] },
  'bot-finder.html': { family: 'product', variant: 'finder', accent: 'blue', code: 'Member 06', icon: 'content-finder.svg', label: 'Team finder', summary: 'Turn current online data into playable team suggestions and voluntary group posts.', tags: ['Online', 'Match', 'Team'] },
  'bot-events.html': { family: 'product', variant: 'events', accent: 'green', code: 'Activity 01', icon: 'content-events.svg', label: 'Event boards', summary: 'Create, fill, schedule and archive guild activities from guided Discord panels.', tags: ['Create', 'Join', 'Complete'] },
  'bot-loot.html': { family: 'product', variant: 'economy', accent: 'gold', code: 'Activity 02', icon: 'content-loot.svg', label: 'Loot split', summary: 'Transform pasted hunt analyzer data into clear transfers and optional contributions.', tags: ['Paste', 'Calculate', 'Share'] },
  'bot-progression.html': { family: 'product', variant: 'events', accent: 'green', code: 'Activity 03', icon: 'content-progression.svg', label: 'Guild progression', summary: 'Publish level and death activity while keeping rolling guild summaries current.', tags: ['Detect', 'Announce', 'Summarize'] },
  'bot-leaderboards.html': { family: 'product', variant: 'constellation', accent: 'green', code: 'Activity 04', icon: 'content-leaderboards.svg', label: 'Leaderboards', summary: 'Make contribution and progression visible through readable rolling rankings.', tags: ['Rank', 'Compare', 'Navigate'] },
  'bot-guildbank.html': { family: 'product', variant: 'economy', accent: 'gold', code: 'Guild ops 01', icon: 'content-economy.svg', label: 'GuildBank control', summary: 'Collect requests, require the right review and preserve a readable confirmed ledger.', tags: ['Request', 'Review', 'Record'] },
  'bot-watchlists.html': { family: 'product', variant: 'intelligence', accent: 'red', code: 'Guild ops 02', icon: 'content-watchlists.svg', label: 'Live online lists', summary: 'Show current members and enemies online using information already collected by Luminox.', tags: ['Members', 'Enemies', 'Current'] },
  'bot-tracker.html': { family: 'product', variant: 'intelligence', accent: 'red', code: 'Guild ops 03', icon: 'content-intelligence.svg', label: 'Identity tracker', summary: 'Keep important characters connected through renames, trades and world transfers.', tags: ['Detect', 'Connect', 'Alert'] },
  'bot-guards.html': { family: 'product', variant: 'intelligence', accent: 'red', code: 'Guild ops 04', icon: 'content-guards.svg', label: 'Guard coordination', summary: 'Notify eligible defenders, coordinate enemy reports and record battle participation.', tags: ['Alert', 'Thread', 'History'] },
  'bot-recruitment.html': { family: 'product', variant: 'finder', accent: 'green', code: 'Guild ops 05', icon: 'content-recruitment.svg', label: 'Recruitment records', summary: 'Record real recruitment, review ownership disputes and protect rewards from abuse.', tags: ['Report', 'Review', 'Retain'] },
  'bot-guildhall.html': { family: 'product', variant: 'economy', accent: 'violet', code: 'Guild ops 06', icon: 'content-guildhall.svg', label: 'Guildhall rooms', summary: 'Publish available rooms and review member claims through one permanent panel.', tags: ['Rooms', 'Claims', 'Occupants'] },
  'bot-support.html': { family: 'product', variant: 'support', accent: 'blue', code: 'Staff 01', icon: 'content-support.svg', label: 'Private support', summary: 'Route each request into a private Discord thread with the responsible staff.', tags: ['Open', 'Claim', 'Archive'] },
  'bot-moderation.html': { family: 'product', variant: 'trust', accent: 'red', code: 'Staff 02', icon: 'content-moderation.svg', label: 'Automod & audit', summary: 'Protect configured channels and preserve important identity, role and staff actions.', tags: ['Prevent', 'Isolate', 'Audit'] },
  'bot-banlist.html': { family: 'product', variant: 'ledger', accent: 'gold', code: 'Staff 03', icon: 'content-banlist.svg', label: 'Ban control', summary: 'Keep timed and unlimited Discord sanctions readable, attributable and reversible.', tags: ['Reason', 'Duration', 'Owner'] },
  'bot-blacklist.html': { family: 'product', variant: 'intelligence', accent: 'red', code: 'Community Intelligence', icon: 'content-blacklist.svg', label: 'Risk intelligence', summary: 'Turn Tibia characters, guilds and bounties into connected live enemy awareness.', tags: ['Blacklist', 'Track', 'Respond'] },
  'bot-staff.html': { family: 'product', variant: 'support', accent: 'violet', code: 'Staff 04', icon: 'content-guild.svg', label: 'Staff tools', summary: 'Separate general authority from specialist responsibilities and structured decisions.', tags: ['Roles', 'Vote', 'Apply'] },
  'bot-automation.html': { family: 'product', variant: 'constellation', accent: 'green', code: 'Staff 05', icon: 'content-automation.svg', label: 'Server automation', summary: 'Refresh public information and clean temporary content without constant staff work.', tags: ['Refresh', 'Expire', 'Clean'] },
  'bot-website.html': { family: 'product', variant: 'support', accent: 'blue', code: 'Founder Exclusive', icon: 'content-website.svg', label: 'Website publishing', summary: 'Lumina turns Discord drafts into reviewed website content through its private Founder workflow.', tags: ['Founder', 'Review', 'Publish'] },
  'security.html': { family: 'product', variant: 'trust', accent: 'blue', code: 'Trust model', icon: 'content-security.svg', label: 'Trust & safety', summary: 'Understand permissions, staff review, automatic cleanup and what remains in Discord.', tags: ['Controlled', 'Reviewable', 'Clear'] },
  'legal.html': { family: 'legal', variant: 'legal', accent: 'blue', code: 'Legal centre', icon: 'content-legal.svg', label: 'Clear terms', summary: 'Terms, privacy, cookies, publishing and billing rules in one accessible place.', tags: ['Terms', 'Privacy', 'Control'] },
  'guild.html': { family: 'guild', variant: 'manifesto', accent: 'gold', code: 'Secura', icon: 'content-guild.svg', label: 'The guild', summary: 'An international Tibia community where structure protects the social experience.', tags: ['Trust', 'Respect', 'Together'] },
  'guild-history.html': { family: 'guild', variant: 'legacy', accent: 'gold', code: 'Our story', icon: 'content-blog.svg', label: 'Built together', summary: 'The needs, principles and people that shaped Lumina from a guild roster into a lasting community.', tags: ['Belong', 'Build', 'Preserve'] },
  'guild-secura.html': { family: 'guild', variant: 'world', accent: 'blue', code: 'Our world', icon: 'content-journey.svg', label: 'Life on Secura', summary: 'One shared Tibia world gives an international community a clear in-game identity and reputation.', tags: ['Tibia', 'Secura', 'Respect'] },
  'guild-other-games.html': { family: 'guild', variant: 'world', accent: 'violet', code: 'Beyond Tibia', icon: 'content-events.svg', label: 'Other games', summary: 'Lumina remains one organized Tibia guild while its members enjoy many other games together without creating parallel guild structures.', tags: ['Explore', 'Play', 'Return'] },
  'guild-community.html': { family: 'guild', variant: 'community', accent: 'green', code: 'Chapter 02', icon: 'content-guild.svg', label: 'Community', summary: 'Organization creates more room for helping, playing and staying connected.', tags: ['Hunts', 'Voice', 'Support'] },
  'guild-members.html': { family: 'guild', variant: 'members', accent: 'gold', code: 'Member life', icon: 'content-members.svg', label: 'Membership', summary: 'Verified access, shared activities and the responsibilities that turn a roster entry into real guild membership.', tags: ['Tibia', 'Secura', 'Together'] },
  'guild-leadership.html': { family: 'guild', variant: 'leadership', accent: 'violet', code: 'Responsibility', icon: 'content-guild.svg', label: 'Clear leadership', summary: 'Broad leadership and specialist responsibilities give members a clear route to the right person.', tags: ['Listen', 'Decide', 'Support'] },
  'guild-activities.html': { family: 'guild', variant: 'activities', accent: 'green', code: 'Guild life', icon: 'content-events.svg', label: 'Play together', summary: 'Hunts, bosses, quests, social sessions and roleplay give different members a place to participate.', tags: ['Organize', 'Join', 'Remember'] },
  'guild-journal.html': { family: 'guild', variant: 'blog', accent: 'gold', code: 'Daily guild life', icon: 'content-blog.svg', label: 'Guild journal', summary: 'A living view of the routines, milestones and small moments that make Lumina more than a roster.', tags: ['Today', 'Together', 'Remember'] },
  'blog.html': { family: 'guild', variant: 'blog', accent: 'gold', code: 'Guild journal', icon: 'content-blog.svg', label: 'Lumina blog', summary: 'Guild news, chronicles and thoughtful updates written and reviewed through Discord.', tags: ['News', 'Stories', 'Community'] },
  'gallery.html': { family: 'guild', variant: 'gallery', accent: 'violet', code: 'Visual archive', icon: 'content-gallery.svg', label: 'Lumina gallery', summary: 'Staff-reviewed adventures, community life, roleplay and milestones preserved with their story.', tags: ['Stories', 'Collections', 'Memories'] },
  'guild-art.html': { family: 'guild', variant: 'gallery', accent: 'violet', code: 'Illustration archive', icon: 'content-gallery.svg', label: 'Lumina art', summary: 'Original high-fantasy illustrations exploring the places, people, creatures and shared imagination around Lumina.', tags: ['Browse', 'Filter', 'Open'] },
  'guild-roleplay.html': { family: 'guild', variant: 'roleplay', accent: 'violet', code: 'Story archive', icon: 'roleplay.svg', label: 'Lumina chronicles', summary: 'Browse future sagas, chapters, character journals, world lore and illustrated stories created by Lumina members.', tags: ['Stories', 'Chapters', 'Lore'] },
  'guild-join.html': { family: 'guild', variant: 'journey', accent: 'blue', code: 'Tibia · Secura', icon: 'content-journey.svg', label: 'Join Lumina', summary: 'Apply to our international Tibia guild on the Secura game world and connect your character to Discord.', tags: ['Tibia', 'Secura', 'Apply'] },
  'guild-loyalty.html': { family: 'guild', variant: 'progress', accent: 'gold', code: 'Member recognition', icon: 'content-loyalty.svg', label: 'Guild Loyalty', summary: 'Participation becomes lasting account-wide recognition through transparent Loyalty Levels and reward history.', tags: ['Contribute', 'Progress', 'Belong'] },
  'guild-faq.html': { family: 'guild', variant: 'candidate', accent: 'green', code: 'Before applying', icon: 'content-support.svg', label: 'Candidate FAQ', summary: 'Plain answers about Secura eligibility, registration, guild life and the application path.', tags: ['Understand', 'Prepare', 'Apply'] },
  'guild-rules.html': { family: 'guild', variant: 'charter', accent: 'red', code: 'Chapter 05', icon: 'content-security.svg', label: 'Guild charter', summary: 'The principles that protect claims, communication and long-term trust.', tags: ['Respect', 'Evidence', 'Accountability'] },
  'pricing.html': { family: 'commercial', variant: 'editions', accent: 'gold', code: 'Free + 3 Premium', icon: 'content-pricing.svg', label: 'Plans and editions', summary: 'Start free, then choose Core, Growth or Scale when your guild needs more capacity.', tags: ['Free', 'Core', 'Growth', 'Scale'] },
  'pricing-faq.html': { family: 'commercial', variant: 'questions', accent: 'violet', code: 'Buyer FAQ', icon: 'content-pricing.svg', label: 'Premium questions', summary: 'Plain answers about editions, plans, Discord billing and changing a subscription.', tags: ['Choose', 'Understand', 'Control'] },
  'guarantee.html': { family: 'commercial', variant: 'assurance', accent: 'green', code: '5-day request', icon: 'content-security.svg', label: 'Purchase clarity', summary: 'Discord-managed refund guidance without hiding conditions or promising automatic approval.', tags: ['Discord', 'Review', 'Cancel'] },
  'roadmap.html': { family: 'editorial', variant: 'route', accent: 'violet', code: 'Now → later', icon: 'content-roadmap.svg', label: 'Development route', summary: 'Depth, reliability and packaging happen in that order — never the reverse.', tags: ['Harden', 'Package', 'Scale'] }
};

const pageArtworkByPage = Object.freeze({
  '404.html': 'trust-vault.svg',
  'changelog.html': 'progression-path.svg',
  'commands.html': 'docs-library.svg',
  'docs.html': 'docs-library.svg',
  'docs-getting-started.html': 'docs-library.svg',
  'setup.html': 'docs-library.svg',
  'docs-panels.html': 'product-network.svg',
  'docs-registration.html': 'registration-proof.svg',
  'docs-inactive-characters.html': 'inactive-character-lifecycle.svg',
  'docs-nicknames.html': 'nickname-sync.svg',
  'docs-ranks.html': 'rank-sync.svg',
  'docs-loyalty.html': 'progression-path.svg',
  'docs-boosts.html': 'boost-cycle.svg',
  'docs-streaming.html': 'progression-path.svg',
  'docs-events.html': 'events-calendar.svg',
  'docs-loot.html': 'economy-ledger.svg',
  'docs-finder.html': 'finder-party.svg',
  'docs-timezones.html': 'events-calendar.svg',
  'docs-guildbank.html': 'economy-ledger.svg',
  'docs-leaderboards.html': 'progression-path.svg',
  'docs-watchlists.html': 'intelligence-radar.svg',
  'docs-progression.html': 'progression-path.svg',
  'docs-tracker.html': 'intelligence-radar.svg',
  'docs-guards.html': 'intelligence-radar.svg',
  'docs-recruitment.html': 'guild-fellowship.svg',
  'docs-guildhall.html': 'guild-citadel.svg',
  'docs-support.html': 'support-threads.svg',
  'docs-moderation.html': 'intelligence-radar.svg',
  'docs-banlist.html': 'banlist-ledger.svg',
  'docs-blacklist.html': 'blacklist-command.svg',
  'docs-staff.html': 'support-threads.svg',
  'docs-admin.html': 'trust-vault.svg',
  'docs-automation.html': 'product-network.svg',
  'docs-website.html': 'blog-journal.svg',
  'docs-troubleshooting.html': 'trust-vault.svg',
  'systems.html': 'product-network.svg',
  'docs-faq.html': 'support-threads.svg',
  'use-cases.html': 'product-network.svg',
  'features-identity.html': 'identity-orbit.svg',
  'features-economy.html': 'economy-ledger.svg',
  'features-events.html': 'events-calendar.svg',
  'features-intelligence.html': 'intelligence-radar.svg',
  'features-finder.html': 'finder-party.svg',
  'features-support.html': 'support-threads.svg',
  'bot-nicknames.html': 'nickname-sync.svg',
  'bot-registration.html': 'registration-proof.svg',
  'bot-inactive-characters.html': 'inactive-character-lifecycle.svg',
  'bot-ranks.html': 'rank-sync.svg',
  'bot-loyalty.html': 'loyalty-orbit.svg',
  'bot-boosts.html': 'boost-cycle.svg',
  'bot-streaming.html': 'stream-signal.svg',
  'bot-timezones.html': 'timezone-dial.svg',
  'bot-finder.html': 'finder-party.svg',
  'bot-events.html': 'events-calendar.svg',
  'bot-loot.html': 'economy-ledger.svg',
  'bot-progression.html': 'progression-path.svg',
  'bot-leaderboards.html': 'progression-path.svg',
  'bot-guildbank.html': 'economy-ledger.svg',
  'bot-watchlists.html': 'intelligence-radar.svg',
  'bot-tracker.html': 'intelligence-radar.svg',
  'bot-guards.html': 'intelligence-radar.svg',
  'bot-recruitment.html': 'recruitment-path.svg',
  'bot-guildhall.html': 'guildhall-rooms.svg',
  'bot-support.html': 'support-threads.svg',
  'bot-moderation.html': 'moderation-shield.svg',
  'bot-banlist.html': 'banlist-ledger.svg',
  'bot-blacklist.html': 'blacklist-command.svg',
  'bot-staff.html': 'support-threads.svg',
  'bot-automation.html': 'product-network.svg',
  'bot-website.html': 'blog-journal.svg',
  'security.html': 'trust-vault.svg',
  'legal.html': 'legal-balance.svg',
  'guild-community.html': 'guild-community-characters.png',
  'guild-members.html': 'guild-fellowship.svg',
  'guild-history.html': 'guild-story-characters.png',
  'guild-secura.html': 'guild-secura-character.png',
  'guild-other-games.html': '../art/ancient-bridge.webp',
  'guild-leadership.html': 'guild-leadership.svg',
  'guild-activities.html': 'guild-adventures.svg',
  'guild-journal.html': '../art/guild-campfire.webp',
  'guild-faq.html': 'guild-candidacy.svg',
  'blog.html': 'blog-journal.svg',
  'guild-art.html': '../art/moonlit-citadel.webp',
  'guild-join.html': 'guild-join-characters.png',
  'guild-loyalty.html': '../art/map-council.webp',
  'guild-rules.html': 'guild-charter.svg',
  'pricing-faq.html': 'docs-library.svg',
  'guarantee.html': 'trust-vault.svg',
  'roadmap.html': 'progression-path.svg'
});

const characterOpeningArtworkPages = new Set([
  'guild-community.html',
  'guild-history.html',
  'guild-join.html',
  'guild-secura.html'
]);

const openingArtworkClassName = (className = '') => [
  'opening-artwork',
  className,
  characterOpeningArtworkPages.has(currentPage) ? 'opening-character-art' : ''
].filter(Boolean).join(' ');

const pageOpeningTitles = {
  'index.html': 'Run Guilds Better',
  '404.html': 'Route Not Found',
  'changelog.html': 'Product Milestones',
  'commands.html': 'Command Reference',
  'contact.html': 'Talk With Us',
  'docs.html': 'Luminox Docs',
  'docs-admin.html': 'Safe Administration',
  'docs-automation.html': 'Smart Automation',
  'docs-events.html': 'Event System',
  'docs-faq.html': 'Common Questions',
  'docs-finder.html': 'Better Teaming',
  'docs-getting-started.html': 'Choose Your Path',
  'docs-guards.html': 'Guard Operations',
  'docs-guildbank.html': 'GuildBank Guide',
  'docs-guildhall.html': 'Guildhall Management',
  'docs-leaderboards.html': 'Leaderboard Guide',
  'docs-loot.html': 'Loot Splitting',
  'docs-loyalty.html': 'Loyalty System',
  'docs-boosts.html': 'Server Boost Loyalty',
  'docs-moderation.html': 'Automod & Logs',
  'docs-banlist.html': 'Ban List Guide',
  'docs-blacklist.html': 'Blacklist Guide',
  'docs-panels.html': 'Panel Directory',
  'docs-progression.html': 'Guild Progression',
  'docs-recruitment.html': 'Recruitment Rewards',
  'docs-registration.html': 'Character Registration',
  'docs-inactive-characters.html': 'Inactive Characters',
  'docs-nicknames.html': 'Automatic Nicknames',
  'docs-ranks.html': 'Guild Rank Sync',
  'docs-staff.html': 'Staff Access',
  'docs-streaming.html': 'Stream Loyalty',
  'docs-support.html': 'Private Support',
  'docs-timezones.html': 'Local Time',
  'docs-tracker.html': 'Identity Tracker',
  'docs-troubleshooting.html': 'Fix It Fast',
  'docs-watchlists.html': 'Live Watchlists',
  'docs-website.html': 'Website Publishing',
  'features.html': 'Meet Luminox',
  'bot-installation.html': 'Install Luminox',
  'editions.html': 'Choose Your Edition',
  'founder.html': 'Founder Edition',
  'features-economy.html': 'Guild Economy',
  'features-events.html': 'Better Events',
  'features-finder.html': 'Find Your Team',
  'features-identity.html': 'Verified Members',
  'features-intelligence.html': 'Live Monitoring',
  'features-support.html': 'Private Support',
  'bot-nicknames.html': 'Automatic Nicknames',
  'bot-registration.html': 'Character Registration',
  'bot-inactive-characters.html': 'Inactive Characters',
  'bot-ranks.html': 'Guild Rank Sync',
  'bot-loyalty.html': 'Loyalty Progression',
  'bot-boosts.html': 'Server Boost Loyalty',
  'bot-streaming.html': 'Stream Rewards',
  'bot-timezones.html': 'Shared Time',
  'bot-finder.html': 'Team Finder',
  'bot-events.html': 'Event Boards',
  'bot-loot.html': 'Loot Split',
  'bot-progression.html': 'Guild Progress',
  'bot-leaderboards.html': 'Guild Rankings',
  'bot-guildbank.html': 'GuildBank Control',
  'bot-watchlists.html': 'Online Lists',
  'bot-tracker.html': 'Identity Tracker',
  'bot-guards.html': 'Guard Alerts',
  'bot-recruitment.html': 'Recruitment Flow',
  'bot-guildhall.html': 'Guildhall Rooms',
  'bot-support.html': 'Support Tickets',
  'bot-moderation.html': 'Safer Channels',
  'bot-banlist.html': 'Ban Control',
  'bot-blacklist.html': 'Risk Intelligence',
  'bot-staff.html': 'Staff Tools',
  'bot-automation.html': 'Automatic Upkeep',
  'bot-website.html': 'Website Publishing',
  'blog.html': 'Lumina Journal',
  'gallery.html': 'Lumina Gallery',
  'guild-roleplay.html': 'Lumina Chronicles',
  'guild.html': 'Meet Lumina',
  'guild-history.html': 'Our Story',
  'guild-secura.html': 'Life on Secura',
  'guild-other-games.html': 'Other Games',
  'guild-community.html': 'Better Together',
  'guild-members.html': 'Lumina Members',
  'guild-leadership.html': 'Clear Leadership',
  'guild-activities.html': 'Guild Activities',
  'guild-journal.html': 'Guild Journal',
  'guild-art.html': 'Lumina Art',
  'guild-join.html': 'Join Lumina',
  'guild-loyalty.html': 'Guild Loyalty',
  'guild-faq.html': 'Candidate FAQ',
  'guild-rules.html': 'Lumina Standards',
  'pricing.html': 'Plans That Scale',
  'pricing-faq.html': 'Premium Answers',
  'guarantee.html': 'Purchase Clarity',
  'roadmap.html': 'Product Roadmap',
  'security.html': 'Built for Trust',
  'legal.html': 'Legal Centre',
  'setup.html': 'Safe Installation',
  'systems.html': 'Efficient by Design',
  'use-cases.html': 'Solve Real Friction'
};

const editionBadgeDefinitions = Object.freeze({
  universal: {
    label: 'Universal',
    icon: 'edition-universal.svg',
    href: 'editions.html#universal-edition'
  },
  community: {
    label: 'Community',
    icon: 'edition-community.svg',
    href: 'editions.html#community-edition'
  },
  founder: {
    label: 'Founder',
    icon: 'edition-founder.svg',
    href: 'founder.html',
    exclusive: true
  }
});

const bothEditionPages = [
  'commands.html',
  'docs.html',
  'docs-admin.html',
  'docs-automation.html',
  'docs-events.html',
  'docs-faq.html',
  'docs-getting-started.html',
  'docs-leaderboards.html',
  'docs-loyalty.html',
  'docs-boosts.html',
  'docs-panels.html',
  'docs-staff.html',
  'docs-streaming.html',
  'docs-support.html',
  'docs-moderation.html',
  'docs-banlist.html',
  'docs-nicknames.html',
  'docs-timezones.html',
  'docs-troubleshooting.html',
  'features.html',
  'bot-installation.html',
  'editions.html',
  'features-events.html',
  'features-support.html',
  'bot-loyalty.html',
  'bot-boosts.html',
  'bot-streaming.html',
  'bot-timezones.html',
  'bot-events.html',
  'bot-leaderboards.html',
  'bot-support.html',
  'bot-moderation.html',
  'bot-banlist.html',
  'bot-nicknames.html',
  'bot-staff.html',
  'bot-automation.html',
  'security.html',
  'setup.html',
  'systems.html',
  'use-cases.html',
  'pricing-faq.html',
  'guarantee.html'
];

const communityEditionPages = [
  'docs-finder.html',
  'docs-guards.html',
  'docs-guildbank.html',
  'docs-guildhall.html',
  'docs-loot.html',
  'docs-blacklist.html',
  'docs-progression.html',
  'docs-recruitment.html',
  'docs-registration.html',
  'docs-inactive-characters.html',
  'docs-ranks.html',
  'docs-tracker.html',
  'docs-watchlists.html',
  'features-economy.html',
  'features-finder.html',
  'features-identity.html',
  'features-intelligence.html',
  'bot-registration.html',
  'bot-inactive-characters.html',
  'bot-ranks.html',
  'bot-blacklist.html',
  'bot-finder.html',
  'bot-loot.html',
  'bot-progression.html',
  'bot-guildbank.html',
  'bot-watchlists.html',
  'bot-tracker.html',
  'bot-guards.html',
  'bot-recruitment.html',
  'bot-guildhall.html'
];

const founderEditionPages = [
  'founder.html',
  'docs-website.html',
  'bot-website.html'
];

const editionAvailabilityByPage = new Map([
  ...bothEditionPages.map((page) => [page, ['universal', 'community']]),
  ...communityEditionPages.map((page) => [page, ['community']]),
  ...founderEditionPages.map((page) => [page, ['founder']])
]);
editionAvailabilityByPage.set('editions.html', ['universal', 'community', 'founder']);

const openingLayoutGroups = {
  minimal: [
    '404.html',
    'docs.html',
    'docs-getting-started.html',
    'docs-troubleshooting.html',
    'docs-faq.html',
    'use-cases.html',
    'roadmap.html',
    'bot-loyalty.html',
    'bot-boosts.html',
    'pricing-faq.html'
  ],
  band: [
    'setup.html',
    'docs-events.html',
    'docs-timezones.html',
    'docs-automation.html',
    'features-intelligence.html',
    'bot-events.html',
    'bot-timezones.html',
    'bot-automation.html',
    'guild-activities.html',
    'guild-secura.html'
  ],
  centered: [
    'docs-panels.html',
    'docs-streaming.html',
    'docs-finder.html',
    'docs-leaderboards.html',
    'docs-guards.html',
    'docs-blacklist.html',
    'docs-website.html',
    'bot-streaming.html',
    'bot-leaderboards.html',
    'bot-guards.html',
    'bot-banlist.html',
    'bot-website.html'
  ],
  brief: [
    'docs-watchlists.html',
    'docs-progression.html',
    'docs-recruitment.html',
    'docs-support.html',
    'systems.html',
    'bot-progression.html',
    'bot-recruitment.html',
    'bot-support.html',
    'bot-staff.html'
  ],
  rail: [
    'features-economy.html',
    'features-support.html',
    'changelog.html',
    'bot-guildbank.html',
    'bot-moderation.html'
  ],
  spotlight: [
    'features-identity.html',
    'features-finder.html',
    'guild-join.html',
    'guild-faq.html',
    'guarantee.html',
    'bot-nicknames.html',
    'bot-registration.html',
    'bot-inactive-characters.html',
    'bot-ranks.html',
    'bot-loot.html',
    'bot-guildhall.html'
  ],
  split: [
    'commands.html',
    'features-events.html',
    'security.html',
    'legal.html',
    'guild-community.html',
    'guild-members.html',
    'guild-history.html',
    'guild-leadership.html',
    'guild-journal.html',
    'guild-art.html',
    'guild-loyalty.html',
    'guild-other-games.html',
    'blog.html',
    'bot-finder.html',
    'bot-tracker.html',
    'bot-blacklist.html'
  ],
  chapter: [
    'docs-registration.html',
    'docs-inactive-characters.html',
    'docs-nicknames.html',
    'docs-ranks.html',
    'docs-loyalty.html',
    'docs-boosts.html',
    'docs-loot.html',
    'docs-guildbank.html',
    'docs-tracker.html',
    'docs-guildhall.html',
    'docs-moderation.html',
    'docs-banlist.html',
    'docs-staff.html',
    'docs-admin.html',
    'guild-rules.html'
  ],
  'guild-cover': ['guild.html'],
  'gallery-wall': ['gallery.html'],
  'roleplay-cover': ['guild-roleplay.html'],
  'feature-map': ['features.html'],
  'edition-choice': ['editions.html'],
  'founder-cover': ['founder.html'],
  'pricing-tiers': ['pricing.html'],
  'contact-paths': ['contact.html']
};

const openingLayoutByPage = new Map(
  Object.entries(openingLayoutGroups).flatMap(([layout, pages]) =>
    pages.map((page) => [page, layout])
  )
);

const renderOpeningArtwork = (className = '') => {
  const artwork = pageArtworkByPage[currentPage];
  if (!artwork) return null;

  const figure = document.createElement('figure');
  figure.className = openingArtworkClassName(className);
  figure.setAttribute('aria-hidden', 'true');
  figure.innerHTML = `<img src="${vectorAssetUrl(`assets/illustrations/${artwork}`)}" alt="" loading="eager" decoding="async">`;
  return figure;
};

const renderOpeningAside = (presentation, layout) => {
  const aside = document.createElement('aside');
  const hasCharacterArtwork = characterOpeningArtworkPages.has(currentPage);
  aside.className = `opening-aside opening-aside-${layout}${hasCharacterArtwork ? ' opening-aside-character' : ''}`;
  aside.setAttribute('aria-label', `${presentation.label} page summary`);

  const tags = presentation.tags.map((tag) => `<span>${tag}</span>`).join('');
  const summary = layout === 'spotlight'
    ? ''
    : `<p class="opening-summary">${presentation.summary}</p>`;
  const artwork = pageArtworkByPage[currentPage]
    ? `<figure class="${openingArtworkClassName('opening-aside-art')}" aria-hidden="true"><img src="${vectorAssetUrl(`assets/illustrations/${pageArtworkByPage[currentPage]}`)}" alt="" loading="eager" decoding="async"></figure>`
    : '';
  aside.innerHTML = `
    <div class="opening-aside-top">
      <span class="opening-code">${presentation.code}</span>
      <span class="opening-icon"><img src="${vectorAssetUrl(`assets/icons/${presentation.icon}`)}" alt="" aria-hidden="true"></span>
    </div>
    ${artwork}
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
    <span class="opening-band-icon"><img src="${vectorAssetUrl(`assets/icons/${presentation.icon}`)}" alt="" aria-hidden="true"></span>
    <span class="opening-band-code">${presentation.code}</span>
    <span class="opening-band-label">${presentation.label}</span>
    <span class="opening-band-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return band;
};

const renderOpeningMark = (presentation, layout) => {
  const mark = document.createElement('div');
  mark.className = `opening-mark opening-mark-${layout}`;
  mark.innerHTML = `
    <span class="opening-mark-icon"><img src="${vectorAssetUrl(`assets/icons/${presentation.icon}`)}" alt="" aria-hidden="true"></span>
    <span class="opening-mark-code">${presentation.code}</span>
    <span class="opening-mark-label">${presentation.label}</span>
    <span class="opening-mark-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return mark;
};

const renderOpeningBrief = (presentation) => {
  const brief = document.createElement('div');
  brief.className = 'opening-brief';
  const artwork = pageArtworkByPage[currentPage]
    ? `<figure class="${openingArtworkClassName('opening-brief-art')}" aria-hidden="true"><img src="${vectorAssetUrl(`assets/illustrations/${pageArtworkByPage[currentPage]}`)}" alt="" loading="eager" decoding="async"></figure>`
    : '';
  brief.innerHTML = `
    ${artwork}
    <span class="opening-brief-code">${presentation.code}</span>
    <p>${presentation.summary}</p>
    <span class="opening-brief-tags">${presentation.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>`;
  return brief;
};

const renderGuildCover = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-guild-cover';
  visual.setAttribute('aria-label', 'Lumina guild profile');
  visual.innerHTML = `
    <div class="guild-cover-stage" aria-hidden="true"><img src="assets/illustrations/guild-emblem-stage.svg?v=20260723-4" alt=""></div>
    <div class="guild-cover-kicker"><span>Official guild seal</span><i aria-hidden="true"></i><small>Secura</small></div>
    <div class="guild-cover-seal"><span aria-hidden="true"></span><img src="assets/brand/seal-dark-web.png" alt="Lumina guild seal" loading="eager" decoding="async"></div>
    <div class="guild-cover-identity"><strong>Lumina</strong><span>Tibia guild · Secura</span></div>
    <p class="guild-cover-motto">Structure protects the community.</p>
    <div class="guild-cover-facts">
      <span><small>World</small><strong>Secura</strong></span>
      <span><small>Community</small><strong>International</strong></span>
      <span><small>System</small><strong>Luminox</strong></span>
    </div>`;
  return visual;
};

const renderGalleryWall = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-gallery-wall';
  visual.setAttribute('aria-label', 'Lumina gallery collections');
  visual.innerHTML = `
    <div class="opening-gallery-art"><img src="assets/illustrations/gallery-frames.svg?v=20260723-4" alt="Decorative collection of Lumina gallery frames"></div>
    <div class="opening-gallery-key">
      <span><i></i>Adventures</span>
      <span><i></i>Guild life</span>
      <span><i></i>Roleplay</span>
    </div>`;
  return visual;
};

const renderRoleplayCover = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-roleplay-cover';
  visual.setAttribute('aria-label', 'Lumina roleplay chronicle');
  visual.innerHTML = `
    <div class="opening-roleplay-art"><img src="assets/illustrations/roleplay-chronicle.svg?v=20260723-4" alt="Open chronicle with roleplay symbols"></div>
    <p><span>Characters</span><span>Choices</span><span>Chronicles</span></p>`;
  return visual;
};

const renderBotOverviewCharacter = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-bot-character';
  visual.setAttribute('aria-label', 'Luminox, the Lumina guild management robot');
  visual.innerHTML = `
    <figure aria-hidden="true"><img src="${vectorAssetUrl('assets/illustrations/luminox-robot-character.png')}" alt="" loading="eager" decoding="async"></figure>
    <div class="opening-bot-character-key">
      <span>Panels</span>
      <span>Threads</span>
      <span>Automation</span>
    </div>`;
  return visual;
};

const renderEditionChoice = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-edition-choice';
  visual.setAttribute('aria-label', 'Universal, Community and Founder edition paths');
  visual.innerHTML = `
    <figure class="opening-edition-art" aria-hidden="true"><img src="assets/illustrations/editions-gateway.svg?v=20260724-4" alt=""></figure>
    <div class="opening-edition-options">
      <a class="opening-edition-universal" href="#universal-edition"><img src="assets/icons/edition-universal.svg?v=20260723-4" alt="" aria-hidden="true"><span><small>Any game or community</small><strong>Universal Edition</strong></span><b aria-hidden="true">↘</b></a>
      <a class="opening-edition-community" href="#community-edition"><img src="assets/icons/edition-community.svg?v=20260723-4" alt="" aria-hidden="true"><span><small>Purpose-built for Tibia</small><strong>Community Edition</strong></span><b aria-hidden="true">↙</b></a>
      <a class="opening-edition-founder" href="founder.html"><img src="assets/icons/edition-founder.svg?v=20260723-4" alt="" aria-hidden="true"><span><small>Private to accepted Lumina members</small><strong>Founder Edition</strong></span><b aria-hidden="true">→</b></a>
    </div>`;
  return visual;
};

const renderFounderCover = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-founder-cover';
  visual.setAttribute('aria-label', 'Founder Edition inside Lumina');
  visual.innerHTML = `
    <figure><img src="assets/founder/founder-command-hall.webp" alt="Lumina members and Luminox operating Founder Edition from the guild command hall" loading="eager" decoding="async"></figure>
    <span class="opening-founder-seal"><img src="assets/icons/edition-founder.svg?v=20260723-4" alt="" aria-hidden="true">Lumina exclusive</span>
    <div class="opening-founder-facts">
      <span><small>Access</small><strong>Accepted members</strong></span>
      <span><small>Environment</small><strong>Complete Luminox</strong></span>
      <span><small>Home</small><strong>Lumina Discord</strong></span>
    </div>`;
  return visual;
};

const renderPricingTiers = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-pricing-tiers';
  visual.setAttribute('aria-label', 'Luminox plan paths');
  visual.innerHTML = `
    <div class="opening-tier-stack">
      <a class="opening-tier opening-tier-free" href="#free-plan"><span><img src="assets/icons/plan-free.svg?v=20260723-4" alt=""><b>Start</b></span><strong>Free</strong><em>$0</em><small>Build the first reliable setup.</small></a>
      <a class="opening-tier opening-tier-premium" href="#premium-tiers"><span><img src="assets/icons/plan-premium.svg?v=20260723-4" alt=""><b>Scale</b></span><strong>Premium</strong><em>From $4,99</em><small>Core, Growth and Scale.</small></a>
      <a class="opening-tier opening-tier-exclusive" href="founder.html"><span><img src="assets/icons/plan-exclusive.svg?v=20260723-4" alt=""><b>Private</b></span><strong>Exclusive</strong><em>Lumina only</em><small>Discover access to Founder Edition.</small></a>
    </div>
    <p><img src="assets/icons/discord.svg?v=20260723-4" alt="" aria-hidden="true"><span>Monthly subscriptions handled inside <strong>Discord</strong>.</span></p>`;
  return visual;
};

const renderContactPaths = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-contact-paths';
  visual.setAttribute('aria-label', 'Contact paths');
  visual.innerHTML = `
    <div class="opening-contact-heading"><p>Choose a conversation</p><span>Three routes. One Discord-first experience.</span></div>
    <a class="opening-contact-route opening-contact-support" href="https://discord.com/channels/1444873714213720318/1513054668748754976" target="_blank" rel="noopener noreferrer"><img src="assets/icons/content-support.svg?v=20260723-4" alt=""><span><small>Already using Luminox</small><strong>Product support</strong><em>Panels, permissions and errors</em></span><b>↗</b></a>
    <a class="opening-contact-route opening-contact-product" href="#contact-paths"><img src="assets/icons/content-pricing.svg?v=20260723-4" alt=""><span><small>Exploring Luminox</small><strong>Product guidance</strong><em>Editions, plans and best fit</em></span><b>↓</b></a>
    <a class="opening-contact-route opening-contact-guild" href="guild-join.html"><img src="assets/icons/content-guild.svg?v=20260723-4" alt=""><span><small>Playing on Secura</small><strong>Join Lumina</strong><em>Culture, rules and membership</em></span><b>→</b></a>`;
  return visual;
};

const customOpeningRenderers = {
  'guild-cover': renderGuildCover,
  'gallery-wall': renderGalleryWall,
  'roleplay-cover': renderRoleplayCover,
  'feature-map': renderBotOverviewCharacter,
  'edition-choice': renderEditionChoice,
  'founder-cover': renderFounderCover,
  'pricing-tiers': renderPricingTiers,
  'contact-paths': renderContactPaths
};

const addEditionAvailability = (copy) => {
  const editions = editionAvailabilityByPage.get(currentPage);
  const title = copy.querySelector('h1');
  const eyebrow = copy.querySelector(':scope > .eyebrow');
  if (!editions?.length || !title) return;

  const metaRow = document.createElement('div');
  metaRow.className = 'opening-meta-row';

  const titleRow = document.createElement('div');
  titleRow.className = 'opening-title-row';

  const badges = document.createElement('nav');
  badges.className = 'edition-availability';
  badges.setAttribute('aria-label', 'Luminox edition availability');

  editions.forEach((edition) => {
    const definition = editionBadgeDefinitions[edition];
    const badge = document.createElement('a');
    badge.className = `edition-availability-badge edition-availability-${edition}`;
    badge.href = definition.href;
    badge.title = definition.exclusive
      ? `Exclusive to ${definition.label} Edition`
      : `Available in ${definition.label} Edition`;
    badge.setAttribute('aria-label', `Learn about ${definition.label} Edition`);
    badge.innerHTML = `<img src="${vectorAssetUrl(`assets/icons/${definition.icon}`)}" alt="" aria-hidden="true"><span>${definition.label}</span>`;
    badges.append(badge);
  });

  if (eyebrow) {
    eyebrow.before(metaRow);
    metaRow.append(eyebrow, badges);
  } else {
    title.before(metaRow);
    metaRow.append(badges);
  }

  title.before(titleRow);
  titleRow.append(title);
};

const applyPagePresentation = () => {
  document.body.dataset.page = currentPage.replace(/\.html$/i, '') || 'home';

  if (currentPage === 'index.html') {
    document.body.classList.add('page-home');
    return;
  }

  const visibleTitle = document.querySelector('main h1');
  if (visibleTitle && pageOpeningTitles[currentPage]) {
    visibleTitle.textContent = pageOpeningTitles[currentPage];
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
  if (characterOpeningArtworkPages.has(currentPage)) {
    opening.classList.add('page-opening-character');
  }
  opening.classList.add('page-opening');

  const copy = document.createElement('div');
  copy.className = 'opening-copy';
  while (opening.firstChild) copy.append(opening.firstChild);
  addEditionAvailability(copy);

  const customRenderer = customOpeningRenderers[layout];
  if (customRenderer) {
    opening.append(copy, customRenderer());
    return;
  }

  if (layout === 'band') {
    copy.append(renderOpeningBand(presentation));
    const artwork = renderOpeningArtwork('opening-standalone-art');
    if (artwork) opening.classList.add('page-opening-with-art');
    opening.append(copy, ...(artwork ? [artwork] : []));
    return;
  }

  if (layout === 'minimal') {
    const artwork = renderOpeningArtwork('opening-standalone-art');
    if (artwork) opening.classList.add('page-opening-with-art');
    opening.append(copy, ...(artwork ? [artwork] : []));
    return;
  }

  if (layout === 'chapter') {
    const artwork = renderOpeningArtwork('opening-chapter-art');
    if (artwork) opening.classList.add('page-opening-with-art');
    opening.append(renderOpeningMark(presentation, layout), copy, ...(artwork ? [artwork] : []));
    return;
  }

  if (layout === 'centered') {
    copy.prepend(renderOpeningMark(presentation, layout));
    const artwork = renderOpeningArtwork('opening-centered-art');
    if (artwork) copy.append(artwork);
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

const alignCurrentHashTarget = () => {
  if (!window.location.hash) return;

  let targetId;
  try {
    targetId = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  });
};

alignCurrentHashTarget();
window.addEventListener('load', alignCurrentHashTarget, { once: true });
window.addEventListener('hashchange', alignCurrentHashTarget);
document.fonts?.ready.then(alignCurrentHashTarget);

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
    eyebrow: 'See Luminox in your server',
    title: 'Start with the smallest useful Luminox setup.',
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
    title: 'Start Free or discuss the right Premium plan.',
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

const conversionCopyByPage = {
  'docs-panels.html': {
    eyebrow: 'Choose your first panel',
    title: 'Publish one useful panel before expanding the server.',
    text: 'Use the directory to match each panel with its channel, setup command and intended audience.',
    primary: ['docs-getting-started.html', 'Follow the setup path'],
    secondary: ['pricing.html', 'Compare editions']
  },
  'docs-registration.html': {
    eyebrow: 'Build trusted identity first',
    title: 'Connect characters, accounts and roles before adding automation.',
    text: 'A verified Registration panel gives every later Community feature a reliable member identity.',
    primary: ['setup.html', 'Configure registration'],
    secondary: ['docs-nicknames.html', 'Configure nicknames']
  },
  'docs-inactive-characters.html': {
    eyebrow: 'Keep identity lifecycle trustworthy',
    title: 'Let verified membership changes update every connected system.',
    text: 'Official roster checks preserve registration history while roles, Loyalty, recruitment and active views follow the account’s current guild eligibility.',
    primary: ['bot-inactive-characters.html', 'See the member lifecycle'],
    secondary: ['docs-ranks.html', 'Review role sync']
  },
  'docs-nicknames.html': {
    eyebrow: 'Make identity readable',
    title: 'Give every member one recognizable game identity.',
    text: 'Universal uses a member-provided game name and Loyalty Level; Community adds the verified Tibia main, vocation and current level.',
    primary: ['bot-nicknames.html', 'See the member experience'],
    secondary: ['editions.html', 'Compare editions']
  },
  'docs-ranks.html': {
    eyebrow: 'Keep access aligned',
    title: 'Map verified Tibia ranks before relying on guild channels.',
    text: 'Explicit mappings and a deliberate Guest role let promotions, demotions and guild departures update only the Discord roles Luminox is responsible for.',
    primary: ['bot-ranks.html', 'See Guild Rank Sync'],
    secondary: ['docs-registration.html', 'Review registration']
  },
  'docs-boosts.html': {
    eyebrow: 'Reward continuous support',
    title: 'Publish one honest view of active and completed boosts.',
    text: 'Independent 30-day cycles, registration-aware rewards and lifecycle logs let members understand exactly what their ongoing Server Boosts have earned.',
    primary: ['bot-boosts.html', 'See Server Boosts'],
    secondary: ['docs-loyalty.html', 'Review Loyalty']
  },
  'docs-events.html': {
    eyebrow: 'Launch one event board',
    title: 'Give members a guided place to organize the next activity.',
    text: 'Start with the event type your guild uses most, verify its roles and only then publish the remaining boards.',
    primary: ['features-events.html', 'Explore event boards'],
    secondary: ['docs-timezones.html', 'Review scheduling']
  },
  'docs-guildbank.html': {
    eyebrow: 'Make every movement reviewable',
    title: 'Define thresholds and specialist access before accepting deposits.',
    text: 'The GuildBank panel separates requests from confirmed balance and preserves a clear final audit trail.',
    primary: ['features-economy.html', 'See guild economy'],
    secondary: ['docs-loot.html', 'Connect Loot Split']
  },
  'docs-finder.html': {
    eyebrow: 'Turn online data into teams',
    title: 'Publish Finder where members already check who is online.',
    text: 'Finder reuses current guild data, adds voluntary Looking for team intent and keeps long results navigable.',
    primary: ['features-finder.html', 'See Finder in action'],
    secondary: ['docs-watchlists.html', 'Review online data']
  },
  'docs-support.html': {
    eyebrow: 'Replace scattered direct messages',
    title: 'Route each request into the right private Discord thread.',
    text: 'Configure categories, required context and specialist staff roles before opening Support to members.',
    primary: ['features-support.html', 'Explore private support'],
    secondary: ['docs-staff.html', 'Review staff access']
  },
  'docs-moderation.html': {
    eyebrow: 'Protect only where intended',
    title: 'Configure Automod and permanent audit as separate responsibilities.',
    text: 'Enable channel-scoped content rules, verify permission-aware enforcement and keep important staff and member changes in a readable Discord log.',
    primary: ['bot-moderation.html', 'Explore Automod & logs'],
    secondary: ['security.html', 'Review safety']
  },
  'docs-banlist.html': {
    eyebrow: 'Publish accountable sanctions',
    title: 'Give staff one guided place to add, revise and lift bans.',
    text: 'Ban List works in both public editions, using Discord identity everywhere and optional Tibia character context in Community.',
    primary: ['bot-banlist.html', 'Explore Ban List'],
    secondary: ['docs-moderation.html', 'Configure the audit log']
  },
  'docs-blacklist.html': {
    eyebrow: 'Build connected Tibia intelligence',
    title: 'Record each target once, then reuse that decision safely.',
    text: 'Community Blacklist connects reviewed characters, guilds, reasons and bounties to Enemies Online, Tracker, Guards and historical outcomes.',
    primary: ['bot-blacklist.html', 'Explore Blacklist'],
    secondary: ['docs-tracker.html', 'Review Tracker']
  },
  'docs-recruitment.html': {
    eyebrow: 'Reward verified growth',
    title: 'Make recruitment claims reviewable before Loyalty is protected.',
    text: 'Report a recent guild arrival before Discord registration, then keep identity validation, ownership disputes and retention-aware rewards in one understandable process.',
    primary: ['docs-panels.html', 'Publish Recruitment'],
    secondary: ['docs-loyalty.html', 'Review Loyalty rules']
  },
  'docs-website.html': {
    eyebrow: 'Configure Founder publishing',
    title: 'Operate Lumina’s reviewed publishing workflow safely.',
    text: 'This technical guide documents the Founder-only Website panel, its permissions, review states and isolated publication boundary.',
    primary: ['security.html', 'Review the security model'],
    secondary: ['founder.html', 'Understand Founder access']
  }
};

const appendContextualConversion = () => {
  if (
    !mainContent ||
    mainContent.hasAttribute('data-no-contextual-conversion') ||
    mainContent.querySelector('[data-page-conversion]') ||
    mainContent.querySelector('.conversion-cta') ||
    ['index.html', '404.html', 'contact.html'].includes(currentPage)
  ) return;
  const presentation = pagePresentations[currentPage];
  const copy = conversionCopyByPage[currentPage] || (presentation ? conversionCopy[presentation.family] : null);
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

const illustratedConversionByPage = Object.freeze({
  'features.html': {
    asset: 'lumina-guild-table.webp',
    layout: 'panorama',
    position: 'center 48%'
  },
  'editions.html': {
    asset: 'lumina-adventure-party.webp',
    layout: 'split',
    position: '46% center'
  },
  'use-cases.html': {
    asset: 'lumina-guild-overview.webp',
    layout: 'reverse',
    position: '52% center'
  },
  'pricing.html': {
    asset: 'lumina-welcome-gate.webp',
    layout: 'panorama-reverse',
    position: 'center 44%'
  },
  'security.html': {
    asset: 'lumina-leadership-council.webp',
    layout: 'split',
    position: '44% center'
  },
  'guild.html': {
    asset: 'lumina-community-campfire.webp',
    layout: 'panorama',
    position: 'center 47%'
  },
  'guild-members.html': {
    asset: 'lumina-adventure-party.webp',
    layout: 'reverse',
    position: '50% center'
  },
  'guild-join.html': {
    asset: 'lumina-membership.webp',
    layout: 'split',
    position: '48% center'
  },
  'bot-events.html': {
    asset: 'lumina-guild-table.webp',
    layout: 'panorama-reverse',
    position: 'center 52%'
  },
  'bot-support.html': {
    asset: 'lumina-candidate-guidance.webp',
    layout: 'reverse',
    position: '52% center'
  },
  'bot-website.html': {
    asset: 'lumina-legacy-chronicle.webp',
    layout: 'split',
    position: '47% center'
  }
});

const enhanceIllustratedConversion = () => {
  const config = illustratedConversionByPage[currentPage];
  const cta = mainContent?.querySelector('.conversion-cta');
  if (!config || !cta || cta.classList.contains('conversion-cta--illustrated')) return;

  const copyBody = [...cta.children].find((child) => !child.classList.contains('hero-actions'));
  const actions = cta.querySelector('.hero-actions');
  if (!copyBody || !actions) return;

  const content = document.createElement('div');
  content.className = 'illustrated-conversion-copy';
  copyBody.classList.add('illustrated-conversion-body');
  content.append(copyBody, actions);

  const figure = document.createElement('figure');
  figure.className = 'illustrated-conversion-art';
  figure.setAttribute('aria-hidden', 'true');
  figure.style.setProperty('--conversion-art-position', config.position || 'center');
  figure.innerHTML = `<img src="${vectorAssetUrl(`assets/illustrations/${config.asset}`)}" alt="" loading="lazy" decoding="async">`;

  cta.classList.add('conversion-cta--illustrated', `conversion-cta--${config.layout}`);
  cta.closest('.section')?.classList.add('illustrated-conversion-section');
  cta.replaceChildren(figure, content);
};

enhanceIllustratedConversion();

const enhanceContentRhythm = () => {
  document.querySelectorAll('.doc-article > .doc-section').forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? 'doc-section-panel' : 'doc-section-open');
  });

  document.querySelectorAll('.page-family-product .outcome-grid').forEach((grid) => {
    grid.classList.add('outcome-list');
  });

  document.querySelectorAll('.product-preview').forEach((preview) => {
    preview.classList.add('product-proof');
    const toolbar = preview.querySelector('.preview-toolbar');
    if (toolbar && !toolbar.querySelector('.preview-proof-label')) {
      const label = document.createElement('span');
      label.className = 'preview-proof-label';
      label.textContent = 'Panel preview';
      toolbar.prepend(label);
    }
  });
};

enhanceContentRhythm();

const narrativeStory = (asset, title, text, href, linkLabel, options = {}) => ({
  asset,
  title,
  text,
  href,
  linkLabel,
  ...options
});

const narrativeStoriesByPage = Object.freeze({
  'guild.html': [
    narrativeStory(
      'lumina-guild-overview.webp',
      'A guild is a world people choose to return to.',
      'Lumina brings international Tibia players into one trusted home on Secura: a place to progress, organize difficult content, ask for help and build a shared reputation over time.',
      'guild-community.html',
      'Discover the community behind Lumina',
      { eyebrow: 'One guild, one shared home', meta: ['Tibia · Secura', 'International'], tone: 'home', after: 0, alt: 'Lumina adventurers gathering inside a gothic guild hall overlooking a living fantasy city' }
    )
  ],
  'guild-secura.html': [
    narrativeStory(
      'lumina-secura-world.webp',
      'Our name travels farther than our Discord.',
      'Every hunt, claim and conversation happens inside a world shared with many other players. Lumina treats reputation on Secura as part of membership, not as an external concern.',
      'guild-rules.html',
      'See the standards we carry into Secura',
      { eyebrow: 'A living shared world', meta: ['Secura', 'Reputation'], tone: 'bot', after: 0, layout: 'reverse', alt: 'Lumina adventurers overlooking a vast inhabited fantasy world at sunrise' }
    )
  ],
  'guild-members.html': [
    narrativeStory(
      'lumina-membership.webp',
      'Membership should make participation easier.',
      'A member gains more than a role: verified identity, organized activities, visible contribution, private support and a community that remembers the person behind every character.',
      'guild-join.html',
      'Follow the path to membership',
      { eyebrow: 'Belonging with practical value', meta: ['Members', 'Shared progress'], tone: 'community', after: 0, alt: 'Lumina members helping one another and planning adventures inside their guild hall' }
    )
  ],
  'guild-leadership.html': [
    narrativeStory(
      'lumina-leadership-council.webp',
      'Authority works best when responsibility is visible.',
      'Lumina separates long-term direction, moderation and specialist duties so members know who can help, staff know what they own and important decisions can be reviewed with context.',
      'guild-rules.html',
      'Read the standards leadership protects',
      { eyebrow: 'Leadership through responsibility', meta: ['Listen', 'Explain'], tone: 'history', after: 0, layout: 'reverse', alt: 'A diverse Lumina leadership council reviewing evidence around an illuminated table' }
    )
  ],
  'guild-faq.html': [
    narrativeStory(
      'lumina-candidate-guidance.webp',
      'Good applications begin before the form.',
      'The strongest candidates understand the game world, the guild standards and what membership actually means. Questions are welcome before anyone commits to the process.',
      'guild-join.html',
      'Review the complete joining path',
      { eyebrow: 'Clarity before commitment', meta: ['Candidates', 'Questions welcome'], tone: 'join', after: 0, alt: 'A prospective adventurer speaking with welcoming Lumina members beside an open guide and map' }
    )
  ],
  'guild-rules.html': [
    narrativeStory(
      'lumina-shared-charter.webp',
      'Standards protect the people who follow them.',
      'Lumina rules are a shared promise: respect other players, preserve context when something goes wrong and resolve serious problems through evidence and the correct private route.',
      '#official-rulebook',
      'Open the official rulebook',
      { eyebrow: 'A shared community promise', meta: ['Respect', 'Fair resolution'], tone: 'history', after: 1, layout: 'reverse', alt: 'Lumina members placing personal tokens beside a shared guild charter while a disagreement is calmly mediated' }
    )
  ],
  'editions.html': [
    narrativeStory(
      'editions-decision-path.svg',
      'One foundation. Two different kinds of context.',
      'Universal keeps the workflows game-independent. Community understands Tibia characters, worlds and guild operations. The interface remains familiar while the available context changes.',
      '#edition-paths',
      'Compare Universal and Community',
      { eyebrow: 'Choose by context', meta: ['Universal', 'Community'], tone: 'bot', after: 0, visual: 'gateway' }
    )
  ],
  'use-cases.html': [
    narrativeStory(
      'editions-shared-core.svg',
      'The best setup begins with friction everyone already feels.',
      'Start with one repeated problem—identity, support, events, economy or live awareness—then enable the smallest group of Luminox systems that removes it.',
      'features.html',
      'Explore every Luminox function',
      { eyebrow: 'Problem first, feature second', meta: ['Identify', 'Solve'], tone: 'history', after: 0, layout: 'reverse', visual: 'network' }
    )
  ],
  'features-identity.html': [
    narrativeStory(
      'registration-proof.svg',
      'Identity turns every later action into something trustworthy.',
      'When the account, character, main and role agree, nicknames stay readable, permissions remain current and every connected record has a reliable owner.',
      'bot-registration.html',
      'Explore Character Registration',
      { eyebrow: 'One verified foundation', meta: ['Account', 'Identity'], tone: 'bot', after: 0, visual: 'identity' }
    )
  ],
  'features-economy.html': [
    narrativeStory(
      'guildhall-rooms.svg',
      'Shared value needs records everyone can understand.',
      'Loot, deposits and reviewed balances become useful only when participants can see the result, staff can verify it and the final history remains accountable.',
      'bot-guildbank.html',
      'Explore GuildBank',
      { eyebrow: 'Transparent guild economy', meta: ['Calculate', 'Review'], tone: 'home', after: 0, layout: 'reverse', visual: 'ledger' }
    )
  ],
  'features-events.html': [
    narrativeStory(
      'guild-adventures.svg',
      'An event succeeds when coordination stops being the hard part.',
      'Luminox keeps participants, roles, scheduling, invitations, discussion threads and completion in one guided journey instead of scattered messages.',
      'bot-events.html',
      'Explore Event Boards',
      { eyebrow: 'From idea to shared activity', meta: ['Schedule', 'Participate'], tone: 'community', after: 0, visual: 'schedule' }
    )
  ],
  'features-intelligence.html': [
    narrativeStory(
      'blacklist-command.svg',
      'Current information matters only when it arrives with context.',
      'Online activity, risk records and identity changes stay connected so staff and members can understand what changed without comparing separate lists.',
      'bot-watchlists.html',
      'Explore Live Online Lists',
      { eyebrow: 'Awareness without noise', meta: ['Observe', 'Connect'], tone: 'activities', after: 0, layout: 'reverse', visual: 'signal' }
    )
  ],
  'features-finder.html': [
    narrativeStory(
      'recruitment-path.svg',
      'Activity becomes a team when availability is readable.',
      'Finder turns current online information and voluntary intent into compatible group suggestions without forcing members into an external matching service.',
      'bot-finder.html',
      'Explore Finder',
      { eyebrow: 'From online to organized', meta: ['Available', 'Compatible'], tone: 'bot', after: 0, visual: 'network' }
    )
  ],
  'features-support.html': [
    narrativeStory(
      'trust-vault.svg',
      'Private help should feel simple to request and safe to continue.',
      'One public entry point can route the member, required context and responsible staff into a protected Discord thread that remains useful after closure.',
      'bot-support.html',
      'Explore Support Tickets',
      { eyebrow: 'A protected route to help', meta: ['Private', 'Role-aware'], tone: 'join', after: 0, layout: 'reverse', visual: 'shield' }
    )
  ],
  'systems.html': [
    narrativeStory(
      'editions-shared-core.svg',
      'One action can update many views without repeating the work.',
      'Luminox separates collection, rules, presentation and history. Shared information is reused where safe, while Discord keeps the complete conversations it already hosts.',
      'docs-panels.html',
      'See how panels use the shared foundation',
      { eyebrow: 'A small operational core', meta: ['Reuse', 'Refresh'], tone: 'bot', after: 0, visual: 'network' }
    )
  ],
  'bot-nicknames.html': [
    narrativeStory(
      'identity-orbit.svg',
      'A readable name removes friction from every channel.',
      'Universal shows a chosen game name with Loyalty. Community adds the verified Tibia main, vocation and level—kept current without asking staff to rewrite nicknames.',
      'docs-nicknames.html',
      'Read the Nickname guide',
      { eyebrow: 'Identity at a glance', meta: ['Readable', 'Automatic'], tone: 'bot', after: 1, visual: 'identity' }
    )
  ],
  'bot-registration.html': [
    narrativeStory(
      'nickname-sync.svg',
      'One proof creates a trusted identity for the whole server.',
      'Community verifies character ownership once, connects every registered character to one Discord account and lets the selected main drive the systems that need public identity.',
      'docs-registration.html',
      'Read the Registration guide',
      { eyebrow: 'Verify once, reuse safely', meta: ['Ownership', 'Main'], tone: 'bot', after: 1, layout: 'reverse', visual: 'identity' }
    )
  ],
  'bot-inactive-characters.html': [
    narrativeStory(
      'rank-sync.svg',
      'Leaving the guild changes access, not history.',
      'Confirmed departures reconcile managed roles, active views and reward eligibility while preserving verified identity and the records needed to explain what changed.',
      'docs-inactive-characters.html',
      'Read the lifecycle guide',
      { eyebrow: 'A complete member lifecycle', meta: ['Reconcile', 'Preserve'], tone: 'activities', after: 1, visual: 'cycle' }
    )
  ],
  'bot-ranks.html': [
    narrativeStory(
      'guild-fellowship.svg',
      'Roles should follow verified membership—not staff memory.',
      'Promotions, demotions and guild departures update only the roles Luminox is configured to manage, while unrelated Discord roles remain untouched.',
      'docs-ranks.html',
      'Read the Guild Rank guide',
      { eyebrow: 'Access that follows reality', meta: ['Map', 'Synchronize'], tone: 'community', after: 1, layout: 'reverse', visual: 'roles' }
    )
  ],
  'bot-loyalty.html': [
    narrativeStory(
      'progression-path.svg',
      'Contribution feels meaningful when every point has a reason.',
      'Loyalty keeps account-wide progress, levels, ranking and recent activity together so members can understand what they earned and what changed.',
      'docs-loyalty.html',
      'Read the Loyalty guide',
      { eyebrow: 'Progress with an explanation', meta: ['Earn', 'Understand'], tone: 'home', after: 1, visual: 'progress' }
    )
  ],
  'bot-boosts.html': [
    narrativeStory(
      'loyalty-orbit.svg',
      'Continuous support deserves a transparent reward cycle.',
      'Each active Server Boost follows its own qualifying period, expected reward and attribution state instead of collapsing every supporter into one monthly guess.',
      'docs-boosts.html',
      'Read the Server Boost guide',
      { eyebrow: 'Every boost has its own cycle', meta: ['Track', 'Reward'], tone: 'bot', after: 1, layout: 'reverse', visual: 'cycle' }
    )
  ],
  'bot-streaming.html': [
    narrativeStory(
      'product-network.svg',
      'Reward shared activity without counting it by hand.',
      'Eligible Discord screen-share sessions qualify after the minimum duration, accumulate by minute and respect clear rolling limits before Loyalty is awarded.',
      'docs-streaming.html',
      'Read the Stream Loyalty guide',
      { eyebrow: 'Participation measured fairly', meta: ['Qualify', 'Reward'], tone: 'activities', after: 1, visual: 'signal' }
    )
  ],
  'bot-timezones.html': [
    narrativeStory(
      'events-calendar.svg',
      'One proposed hour. Everyone sees their own local time.',
      'Members save a timezone once, then Luminox turns shared planning into Discord timestamps that display correctly for every participant.',
      'docs-timezones.html',
      'Read the Timezone guide',
      { eyebrow: 'Local time without confusion', meta: ['Save once', 'Convert'], tone: 'bot', after: 1, layout: 'reverse', visual: 'schedule' }
    )
  ],
  'bot-finder.html': [
    narrativeStory(
      'editions-universal-network.svg',
      'Turn the current online list into a playable group.',
      'Finder reuses activity already known to Luminox, adds voluntary Looking for Team intent and highlights compatible members without another scan or external service.',
      'docs-finder.html',
      'Read the Finder guide',
      { eyebrow: 'Useful matches from current data', meta: ['Online', 'Compatible'], tone: 'bot', after: 1, visual: 'network' }
    )
  ],
  'bot-events.html': [
    narrativeStory(
      'guild-adventures.svg',
      'From idea to archived event, the whole journey stays in Discord.',
      'Creators can define teams, invite registered members, vote on schedules and coordinate in a dedicated thread before Luminox records the final outcome.',
      'docs-events.html',
      'Read the complete Event guide',
      { eyebrow: 'A complete activity journey', meta: ['Invite', 'Coordinate'], tone: 'community', after: 2, layout: 'reverse', visual: 'schedule' }
    )
  ],
  'bot-loot.html': [
    narrativeStory(
      'guildhall-rooms.svg',
      'A complex split becomes one understandable result.',
      'Members paste the analyzer output once. Luminox calculates balances, presents transfers, keeps the confirmer visible and can connect the result to GuildBank.',
      'docs-loot.html',
      'Read the Loot Split guide',
      { eyebrow: 'From analyzer to clear transfers', meta: ['Calculate', 'Confirm'], tone: 'home', after: 1, visual: 'ledger' }
    )
  ],
  'bot-progression.html': [
    narrativeStory(
      'loyalty-orbit.svg',
      'Progress stays visible without rebuilding yesterday’s history.',
      'Current level, deaths and rolling daily, monthly and yearly totals remain ordered while permanent announcements preserve the moments behind the numbers.',
      'docs-progression.html',
      'Read the Progression guide',
      { eyebrow: 'A living guild timeline', meta: ['Track', 'Remember'], tone: 'community', after: 1, layout: 'reverse', visual: 'progress' }
    )
  ],
  'bot-leaderboards.html': [
    narrativeStory(
      'rank-sync.svg',
      'Rankings motivate when movement and context stay readable.',
      'Multiple categories, position changes, compact pages and clear navigation keep long leaderboards useful without turning the channel into a spreadsheet.',
      'docs-leaderboards.html',
      'Read the Leaderboard guide',
      { eyebrow: 'Competition without clutter', meta: ['Rank', 'Navigate'], tone: 'bot', after: 1, visual: 'progress' }
    )
  ],
  'bot-guildbank.html': [
    narrativeStory(
      'economy-ledger.svg',
      'Every contribution passes through the same accountable ledger.',
      'Members submit deposits, authorized staff review protected actions and the confirmed balance remains separate from requests that are still pending.',
      'docs-guildbank.html',
      'Read the GuildBank guide',
      { eyebrow: 'One transparent guild balance', meta: ['Deposit', 'Review'], tone: 'home', after: 1, layout: 'reverse', visual: 'ledger' }
    )
  ],
  'bot-watchlists.html': [
    narrativeStory(
      'finder-party.svg',
      'Live lists answer the first question: who is active now?',
      'Guild members and connected risk targets use the same latest valid snapshot, keeping channel counters, sessions and visible context aligned.',
      'docs-watchlists.html',
      'Read the Watchlist guide',
      { eyebrow: 'Current activity, one source', meta: ['Online', 'Consistent'], tone: 'activities', after: 1, visual: 'signal' }
    )
  ],
  'bot-tracker.html': [
    narrativeStory(
      'blacklist-command.svg',
      'Names change. Identity history should not disappear.',
      'Tracker connects renames, trades, transfers, returns and deletions to the same reviewed record, then separates permanent events from the refreshed summary panel.',
      'docs-tracker.html',
      'Read the Identity Tracker guide',
      { eyebrow: 'Continuity through every change', meta: ['Detect', 'Record'], tone: 'activities', after: 1, layout: 'reverse', visual: 'trace' }
    )
  ],
  'bot-guards.html': [
    narrativeStory(
      'moderation-shield.svg',
      'Fast coordination needs clear starts, shared context and automatic endings.',
      'Guard duty, enemy sightings and active battles use distinct actions, dedicated threads and inactivity rules that prevent yesterday’s alert from looking current.',
      'docs-guards.html',
      'Read the Guards guide',
      { eyebrow: 'Urgency without stale alerts', meta: ['Report', 'Coordinate'], tone: 'activities', after: 1, visual: 'shield' }
    )
  ],
  'bot-recruitment.html': [
    narrativeStory(
      'guild-fellowship.svg',
      'Growth becomes fair when every claim can be reviewed.',
      'Recruitment preserves who reported the arrival, who owns the claim, what staff approved and how long the reward remains exposed to a real early departure.',
      'docs-recruitment.html',
      'Read the Recruitment guide',
      { eyebrow: 'Verified growth, visible decisions', meta: ['Claim', 'Protect'], tone: 'community', after: 1, layout: 'reverse', visual: 'growth' }
    )
  ],
  'bot-guildhall.html': [
    narrativeStory(
      'guild-citadel.svg',
      'Shared rooms stay manageable when availability has one source.',
      'Room order, size, description, occupant and pending request remain connected to the same panel while staff decisions stay visible in permanent Discord logs.',
      'docs-guildhall.html',
      'Read the Guildhall guide',
      { eyebrow: 'A living shared property', meta: ['Rooms', 'Requests'], tone: 'bot', after: 1, visual: 'ledger' }
    )
  ],
  'bot-support.html': [
    narrativeStory(
      'trust-vault.svg',
      'A public button can open a genuinely private conversation.',
      'Required questions collect useful context first, then the member, invited participants and responsible staff continue inside one protected and archivable thread.',
      'docs-support.html',
      'Read the Support Ticket guide',
      { eyebrow: 'Private by design', meta: ['Route', 'Archive'], tone: 'bot', after: 2, layout: 'reverse', visual: 'shield' }
    )
  ],
  'bot-moderation.html': [
    narrativeStory(
      'banlist-ledger.svg',
      'Protection works best when enforcement and audit are visible.',
      'Channel-scoped Automod handles prohibited content while the permanent log explains role, membership and staff changes that deserve a durable record.',
      'docs-moderation.html',
      'Read the Automod and Logs guide',
      { eyebrow: 'Controlled enforcement', meta: ['Protect', 'Explain'], tone: 'activities', after: 1, visual: 'shield' }
    )
  ],
  'bot-banlist.html': [
    narrativeStory(
      'moderation-shield.svg',
      'A sanction should always show who, why and for how long.',
      'Ban List gives authorized staff guided add, edit and lift controls while the visible record keeps duration, reason and responsible identity immediately readable.',
      'docs-banlist.html',
      'Read the Ban List guide',
      { eyebrow: 'Reversible, accountable sanctions', meta: ['Record', 'Review'], tone: 'activities', after: 1, layout: 'reverse', visual: 'ledger' }
    )
  ],
  'bot-blacklist.html': [
    narrativeStory(
      'intelligence-radar.svg',
      'One reviewed decision can power every connected risk view.',
      'Community Blacklist links characters, guilds, reasons and bounties to online awareness, Tracker outcomes, Guards and resolved history without duplicating the target.',
      'docs-blacklist.html',
      'Read the Blacklist guide',
      { eyebrow: 'Connected Tibia intelligence', meta: ['Review', 'Reuse'], tone: 'activities', after: 1, visual: 'signal' }
    )
  ],
  'bot-staff.html': [
    narrativeStory(
      'guild-leadership.svg',
      'Sensitive decisions need the right people—not the loudest channel.',
      'Global moderators, specialist roles, private voting and member applications keep responsibility focused while preserving understandable outcomes.',
      'docs-staff.html',
      'Read the Staff Systems guide',
      { eyebrow: 'Authority matched to purpose', meta: ['Roles', 'Decisions'], tone: 'bot', after: 1, layout: 'reverse', visual: 'roles' }
    )
  ],
  'bot-automation.html': [
    narrativeStory(
      'boost-cycle.svg',
      'The best maintenance is visible only when something changes.',
      'Panel refreshes, temporary cleanup, membership reconciliation and retention rules keep Discord current without making staff manually rebuild the same information.',
      'docs-automation.html',
      'Read the Automation guide',
      { eyebrow: 'Quiet operational upkeep', meta: ['Refresh', 'Reconcile'], tone: 'community', after: 1, visual: 'cycle' }
    )
  ],
  'bot-website.html': [
    narrativeStory(
      'blog-journal.svg',
      'Publishing starts in Discord and reaches the web only after review.',
      'Founder authors draft screenshots and articles in private threads, while authorized staff can request revisions, approve, hide or remove public content from the same workflow.',
      'docs-website.html',
      'Read the Website Publishing guide',
      { eyebrow: 'A reviewed publishing bridge', meta: ['Founder', 'Controlled'], tone: 'bot', after: 1, layout: 'reverse', visual: 'publish' }
    )
  ],
  'security.html': [
    narrativeStory(
      'moderation-shield.svg',
      'Trust begins with knowing exactly who can act.',
      'Discord permissions, configured moderator roles and specialist responsibilities define authority openly instead of relying on a hidden administrator list.',
      '#permissions',
      'Review the permission model',
      { eyebrow: 'Visible authority boundaries', meta: ['Roles', 'Control'], tone: 'activities', after: 0, visual: 'shield' }
    ),
    narrativeStory(
      'trust-vault.svg',
      'Keep complete conversations where they already belong.',
      'Support and event discussions remain in Discord threads. Luminox stores only the compact operational information needed to find, update and explain those workflows.',
      '#data',
      'Review the data boundaries',
      { eyebrow: 'Minimal operational storage', meta: ['Discord', 'Retention'], tone: 'bot', after: 2, layout: 'reverse', visual: 'vault' }
    )
  ],
  'pricing.html': [
    narrativeStory(
      'editions-shared-core.svg',
      'Choose the smallest plan that removes a real constraint.',
      'Edition decides the context Luminox understands. Plan decides capacity, eligible access, refresh policy and service depth. Keeping those choices separate prevents overbuying.',
      '#premium-tiers',
      'Compare the four service levels',
      { eyebrow: 'Scale only when value is clear', meta: ['Edition', 'Plan'], tone: 'home', after: 1, visual: 'network' }
    ),
    narrativeStory(
      'trust-vault.svg',
      'Billing stays inside Discord, where the subscription is managed.',
      'Core, Growth and Scale use Discord’s official Premium App subscription flow so purchase, renewal, cancellation and billing support remain in one familiar account.',
      'guarantee.html',
      'Review purchase and refund guidance',
      { eyebrow: 'Discord-managed subscription', meta: ['Official billing', 'Control'], tone: 'bot', after: 4, layout: 'reverse', visual: 'vault' }
    )
  ],
  'pricing-faq.html': [
    narrativeStory(
      'docs-library.svg',
      'A clear purchase decision separates edition, plan and billing.',
      'The FAQ answers each layer independently so a first-time buyer can understand product fit before comparing capacity or opening Discord’s payment flow.',
      '#choosing',
      'Start with edition and plan questions',
      { eyebrow: 'Answers before checkout', meta: ['Choose', 'Understand'], tone: 'bot', after: 0, visual: 'library' }
    )
  ],
  'guarantee.html': [
    narrativeStory(
      'legal-balance.svg',
      'Know the difference between cancelling and requesting a refund.',
      'Cancellation stops future renewal. A refund request asks Discord to review an eligible completed purchase under its current policy. They are related, but not the same action.',
      '#top',
      'Review the complete purchase guidance',
      { eyebrow: 'Clear options after purchase', meta: ['Cancel', 'Request'], tone: 'community', after: 1, layout: 'reverse', visual: 'balance' }
    )
  ],
  'docs.html': [
    narrativeStory(
      'docs-library.svg',
      'The manual should tell every role where to begin.',
      'Members, staff and administrators can choose a task, understand the required configuration and continue through the exact guide without reading the entire documentation first.',
      'docs-getting-started.html',
      'Choose your guided starting path',
      { eyebrow: 'Documentation built for action', meta: ['Search', 'Follow'], tone: 'bot', after: 0, visual: 'library' }
    )
  ],
  'contact.html': [
    narrativeStory(
      'support-threads.svg',
      'The right route gets the right context to the right people.',
      'Product questions, existing-server support and Lumina membership each need different information. One Discord-first contact path keeps the conversation focused and private where necessary.',
      '#contact-paths',
      'Choose the correct conversation',
      { eyebrow: 'Start with the real goal', meta: ['Product', 'Guild'], tone: 'bot', after: 0, layout: 'reverse', visual: 'portal' }
    )
  ]
});

const narrativeToneClasses = Object.freeze({
  home: 'narrative-showcase--home',
  bot: 'narrative-showcase--bot',
  history: 'narrative-showcase--history',
  community: 'narrative-showcase--community',
  activities: 'narrative-showcase--activities',
  join: 'narrative-showcase--join'
});

const narrativeVisualFamilies = Object.freeze({
  identity: 'identity',
  cycle: 'cycle',
  roles: 'roles',
  progress: 'progress',
  schedule: 'schedule',
  ledger: 'ledger',
  signal: 'signal',
  trace: 'signal',
  shield: 'shield',
  vault: 'shield',
  growth: 'network',
  network: 'network',
  gateway: 'gateway',
  publish: 'publish',
  library: 'library',
  balance: 'balance',
  portal: 'portal'
});

const isNarrativeMediaSection = (section) => Boolean(
  section?.matches?.('.product-screenshot-showcase, .narrative-showcase, .bot-visual-intro, .bot-visual-proof') ||
  section?.querySelector?.('[data-screenshot-gallery], .discord-screenshot-card, .product-preview, .nickname-comparison, .home-story-card')
);

const isNarrativeClosingSection = (section) => Boolean(
  section?.matches?.('.contextual-conversion, [data-page-conversion]') ||
  section?.querySelector?.(
    '.conversion-cta, .pricing-conversion, .guarantee-conversion, .edition-final-cta, .contact-final-cta, .home-final-cta, .legal-closing, .rules-final-cta, .roleplay-final-cta'
  )
);

const findNarrativeAnchor = (main, preferredAfter = 1, usedAnchors = new Set()) => {
  const sections = [...main.children].filter((element) =>
    element.matches?.('section.section') &&
    !element.matches('.narrative-showcase, .contextual-conversion, [data-page-conversion]')
  );
  if (sections.length === 0) return null;

  const boundedIndex = Math.max(0, Math.min(Number(preferredAfter) || 0, sections.length - 1));
  const indexes = sections
    .map((_, index) => index)
    .sort((left, right) => Math.abs(left - boundedIndex) - Math.abs(right - boundedIndex));

  const suitable = indexes.find((index) => {
    const current = sections[index];
    const next = sections[index + 1];
    return (
      !usedAnchors.has(current) &&
      !isNarrativeMediaSection(current) &&
      !isNarrativeMediaSection(next) &&
      !isNarrativeClosingSection(current)
    );
  });
  const textFallback = indexes.find((index) => {
    const current = sections[index];
    return !usedAnchors.has(current) && !isNarrativeMediaSection(current) && !isNarrativeClosingSection(current);
  });
  const fallback = indexes.find((index) =>
    !usedAnchors.has(sections[index]) && !isNarrativeClosingSection(sections[index])
  ) ?? boundedIndex;
  return sections[suitable ?? textFallback ?? fallback] || null;
};

const renderNarrativeStory = (story, storyIndex) => {
  const presentation = pagePresentations[currentPage] || {};
  const vector = /\.svg$/i.test(story.asset);
  const toneClass = narrativeToneClasses[story.tone || presentation.accent] || 'narrative-showcase--bot';
  const layoutClass = story.layout === 'reverse' ? ' narrative-card--reverse' : '';
  const visual = story.visual || narrativeVisualFamilies[presentation.variant] || 'network';
  const meta = story.meta || (presentation.tags || []).slice(0, 2);
  const section = document.createElement('section');
  const headingId = `narrative-${currentPage.replace(/\.html$/i, '')}-${storyIndex + 1}`;

  section.className = `section narrative-showcase ${toneClass} narrative-showcase--generated`;
  section.dataset.narrativeStory = currentPage;
  section.setAttribute('aria-labelledby', headingId);
  section.innerHTML = `
    <article class="narrative-card narrative-card--generated${vector ? ' narrative-card--vector' : ''}${layoutClass}" data-narrative-visual="${visual}">
      <div class="narrative-media">
        ${vector
          ? `<div class="narrative-vector-stage" aria-hidden="true"><span class="narrative-vector-orbit"></span><span class="narrative-vector-node narrative-vector-node--one"></span><span class="narrative-vector-node narrative-vector-node--two"></span><img src="${vectorAssetUrl(`assets/illustrations/${story.asset}`)}" alt="" loading="eager" decoding="async"></div>`
          : `<img src="assets/illustrations/${story.asset}" width="1536" height="1024" loading="lazy" decoding="async" alt="${story.alt || ''}">`}
      </div>
      <div class="narrative-copy">
        ${meta.length ? `<div class="narrative-meta">${meta.map((item) => `<span>${item}</span>`).join('')}</div>` : ''}
        <p class="eyebrow">${story.eyebrow || `${presentation.label || 'Luminox'} in practice`}</p>
        <h2 id="${headingId}">${story.title}</h2>
        <p>${story.text}</p>
        <a class="text-link" href="${story.href}">${story.linkLabel} →</a>
      </div>
    </article>`;
  return section;
};

const injectNarrativeStories = () => {
  const stories = narrativeStoriesByPage[currentPage];
  const main = document.querySelector('main');
  if (!stories?.length || !main) return;

  const usedAnchors = new Set();
  stories.forEach((story, storyIndex) => {
    const anchor = findNarrativeAnchor(main, story.after ?? (storyIndex + 1), usedAnchors);
    const section = renderNarrativeStory(story, storyIndex);
    if (anchor) {
      anchor.after(section);
      usedAnchors.add(anchor);
    } else {
      main.append(section);
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectNarrativeStories, { once: true });
} else {
  injectNarrativeStories();
}

const buttonActionIconByPage = Object.freeze({
  '404.html': 'action-home.svg',
  'blog.html': 'content-blog.svg',
  'changelog.html': 'action-history.svg',
  'commands.html': 'content-commands.svg',
  'contact.html': 'action-support.svg',
  'docs.html': 'content-docs.svg',
  'features.html': 'content-systems.svg',
  'features-intelligence.html': 'content-watchlists.svg',
  'gallery.html': 'content-gallery.svg',
  'guarantee.html': 'action-security.svg',
  'guild-activities.html': 'content-events.svg',
  'guild-art.html': 'content-gallery.svg',
  'guild-community.html': 'content-guild.svg',
  'guild-faq.html': 'action-support.svg',
  'guild-history.html': 'action-history.svg',
  'guild-join.html': 'content-journey.svg',
  'guild-journal.html': 'content-blog.svg',
  'guild-leadership.html': 'content-members.svg',
  'guild-loyalty.html': 'content-loyalty.svg',
  'guild-members.html': 'content-members.svg',
  'guild-other-games.html': 'content-events.svg',
  'guild-roleplay.html': 'roleplay.svg',
  'guild-rules.html': 'action-security.svg',
  'guild-secura.html': 'content-guild.svg',
  'guild.html': 'content-guild.svg',
  'index.html': 'action-home.svg',
  'pricing-faq.html': 'action-docs.svg',
  'pricing.html': 'action-pricing.svg',
  'roadmap.html': 'content-roadmap.svg',
  'security.html': 'content-security.svg',
  'legal.html': 'content-legal.svg',
  'setup.html': 'content-setup.svg',
  'systems.html': 'content-systems.svg',
  'use-cases.html': 'content-usecases.svg'
});

const buttonActionIconByTopic = Object.freeze({
  automation: 'content-automation.svg',
  economy: 'content-economy.svg',
  events: 'content-events.svg',
  finder: 'content-finder.svg',
  guards: 'content-guards.svg',
  guildbank: 'content-economy.svg',
  guildhall: 'content-guildhall.svg',
  identity: 'content-identity.svg',
  intelligence: 'content-intelligence.svg',
  leaderboards: 'content-leaderboards.svg',
  loot: 'content-loot.svg',
  loyalty: 'content-loyalty.svg',
  moderation: 'content-moderation.svg',
  progression: 'content-progression.svg',
  recruitment: 'content-recruitment.svg',
  registration: 'content-identity.svg',
  staff: 'content-members.svg',
  streaming: 'content-streaming.svg',
  support: 'content-support.svg',
  timezones: 'content-timezones.svg',
  tracker: 'content-intelligence.svg',
  watchlists: 'content-watchlists.svg',
  website: 'content-website.svg'
});

const resolveButtonTargetPage = (href) => {
  const localTarget = String(href || '').split(/[?#]/)[0];
  return localTarget.split('/').pop() || '';
};

const resolveButtonActionIcon = (button) => {
  const explicitIcon = button.dataset.actionIcon;
  if (explicitIcon) return explicitIcon;

  const href = (button.getAttribute('href') || '').toLowerCase();
  const label = (button.textContent || '').trim().toLowerCase();
  const intent = `${href} ${label}`;
  const targetPage = resolveButtonTargetPage(href);
  const topicMatch = targetPage.match(/^(?:bot|docs|features)-([a-z-]+)\.html$/);

  if (/oauth2\/authorize|add luminox|add the bot/.test(intent)) return 'add-bot.svg';
  if (/refund policy/.test(label)) return 'action-security.svg';
  if (/discord(?:\.com|\.gg)|join our discord|open discord billing/.test(intent)) return 'action-discord.svg';
  if (/tibia\.com/.test(href)) return 'action-explore.svg';
  if (/command reference/.test(label)) return 'content-commands.svg';
  if (/panel directory/.test(label)) return 'content-systems.svg';
  if (/troubleshoot/.test(intent)) return 'content-troubleshooting.svg';
  if (/administrator guide/.test(label)) return 'action-settings.svg';
  if (/documentation|\bguide\b|technical setup/.test(label)) return 'action-docs.svg';
  if (/configure|installation|\bsetup\b|administrator/.test(label)) return 'action-settings.svg';
  if (buttonActionIconByPage[targetPage]) return buttonActionIconByPage[targetPage];
  if (topicMatch && buttonActionIconByTopic[topicMatch[1]]) return buttonActionIconByTopic[topicMatch[1]];
  if (/\boverview\b|\bbenefits\b|see how|understand|what .* detects/.test(label)) return 'action-explore.svg';
  if (/rule|trust|safety|security|guarantee|refund/.test(intent)) return 'action-security.svg';
  if (/help|support|question|contact|talk with/.test(intent)) return 'action-support.svg';
  if (/pricing|premium|free|choose core|choose growth|choose scale|compare plan/.test(intent)) return 'action-pricing.svg';
  if (/changelog|roadmap|development history/.test(intent)) return 'action-history.svg';
  if (/docs|command|faq/.test(intent)) return 'action-docs.svg';
  if (/guild|lumina|community|gallery|joining process|how to join/.test(intent)) return 'action-guild.svg';
  return 'action-explore.svg';
};

document.querySelectorAll('.button').forEach((button) => {
  if (button.querySelector('img') || button.hasAttribute('data-no-action-icon')) return;
  const icon = document.createElement('img');
  icon.className = 'button-action-icon';
  icon.src = vectorAssetUrl(`assets/icons/${resolveButtonActionIcon(button)}`);
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');
  button.prepend(icon);
  button.classList.add('button-with-action-icon');
});

let mobileNavigationScrollY = 0;

const setMobileNavigationScrollLock = (isLocked) => {
  const body = document.body;
  if (!body) return;

  if (isLocked) {
    if (body.classList.contains('nav-open')) return;
    mobileNavigationScrollY = window.scrollY;
    body.style.top = `-${mobileNavigationScrollY}px`;
    body.classList.add('nav-open');
    return;
  }

  if (!body.classList.contains('nav-open')) return;
  body.classList.remove('nav-open');
  body.style.removeProperty('top');
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, mobileNavigationScrollY);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const isMobile = window.matchMedia('(max-width: 1040px)').matches;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    setMobileNavigationScrollLock(isOpen && isMobile);

    if (isOpen && isMobile) {
      resetMobileNavigation();
      navLinks.scrollTop = 0;
    }
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

const resetMobileNavigation = () => {
  if (!navLinks) return;
  navLinks.classList.remove('mobile-submenu');
  navLinks.querySelectorAll('.nav-menu').forEach((menu) => {
    menu.classList.remove('mobile-active', 'open');
    menu.querySelector('.nav-menu-button')?.setAttribute('aria-expanded', 'false');
  });
  navLinks.querySelectorAll('.nav-dropdown-group.open').forEach((group) => {
    group.classList.remove('open');
    group.querySelector('.nav-group-button')?.setAttribute('aria-expanded', 'false');
  });
  const title = navLinks.querySelector('[data-mobile-nav-title]');
  if (title) title.textContent = 'Navigation';
};

const enterMobileNavigation = (menu) => {
  if (!navLinks || !menu) return;
  resetMobileNavigation();
  navLinks.classList.add('mobile-submenu');
  menu.classList.add('mobile-active');
  setMenuOpen(menu, true);
  const title = navLinks.querySelector('[data-mobile-nav-title]');
  const label = menu.querySelector('.nav-menu-button span:nth-of-type(2)')?.textContent?.trim();
  if (title) title.textContent = label || 'Navigation';
  navLinks.scrollTop = 0;
};

navLinks?.querySelector('.mobile-nav-back')?.addEventListener('click', (event) => {
  event.stopPropagation();
  resetMobileNavigation();
  navLinks.scrollTop = 0;
});

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
    if (window.matchMedia('(max-width: 1040px)').matches) {
      enterMobileNavigation(menu);
      return;
    }

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
  if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
    closeOtherMenus();
  }

  if (
    window.matchMedia('(max-width: 1040px)').matches
    && navLinks?.classList.contains('open')
    && !event.target.closest('.nav-links')
    && !event.target.closest('.nav-toggle')
  ) {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    setMobileNavigationScrollLock(false);
    resetMobileNavigation();
  }

  if (window.matchMedia('(max-width: 1040px)').matches && event.target.closest('.nav-links a')) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    setMobileNavigationScrollLock(false);
    resetMobileNavigation();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeOtherMenus();
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
  setMobileNavigationScrollLock(false);
  resetMobileNavigation();
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1041px)').matches) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    setMobileNavigationScrollLock(false);
    resetMobileNavigation();
  }
});

document.querySelectorAll('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    document.querySelectorAll('[data-tab]').forEach((item) => item.classList.toggle('active', item.dataset.tab === tab));
    document.querySelectorAll('[data-tab-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.tabPanel === tab));
  });
});

const pricingEditionContent = {
  community: {
    heading: 'Community Edition Plans',
    summary: 'Purpose-built for Tibia guilds using characters, vocations, worlds, guild ranks and live game monitoring.',
    prices: ['$0', '$7,99', '$14,99', '$29,99'],
    plans: {
      free: {
        fit: 'For smaller Tibia guilds starting with verified identity, core guild visibility and guided operations.',
        features: [
          'Verified Tibia guild, world, characters, ranks and Guild List.',
          'Levels, deaths, Hunt Board, general Events, Support, Automod, Ban List and moderation logs.',
          'Up to 3 active events, 3 Support categories and 3 Automod channels.',
          '15-minute eligible external policy, 5-minute cached panels and 1-year history.'
        ]
      },
      core: {
        fit: 'For active Tibia guilds adding progression, specialized events and live risk awareness.',
        features: [
          'Leaderboards, Loyalty, Boost and Stream rewards plus staff applications and voting.',
          'Boss and Quest boards, Watchlists, Blacklist and Enemies Online.',
          'Up to 10 active events, 6 Support categories and 10 Automod channels.',
          '10-minute eligible external policy, 3-minute cached panels and 2-year history.'
        ]
      },
      growth: {
        fit: 'For growing Tibia guilds running several connected systems every day.',
        features: [
          'Recruitment, Identity Tracker, Guards, Finder, GuildBank, Loot Split and Guildhall.',
          'Up to 30 active events, 15 Support categories and 30 Automod channels.',
          '5-minute eligible external policy and 2-minute cached panels.',
          '5-year useful history and priority configuration guidance.'
        ]
      },
      scale: {
        fit: 'For established Tibia communities operating Luminox as a core guild platform.',
        features: [
          'Every public Community feature operating at Scale capacity.',
          'Up to 100 active events, 25 Support categories and 100 Automod channels.',
          '2-minute eligible external policy and 1-minute cached panels.',
          '10-year useful history and priority setup support.'
        ]
      }
    },
    comparison: {
      bestFit: ['First Tibia setup', 'Small Tibia guild', 'Growing Tibia guild', 'Established Tibia guild'],
      access: ['Identity + guild basics', 'Loyalty + specialized events + live risk', 'Economy + recruitment + live monitoring', 'All public Community features at maximum capacity']
    }
  },
  universal: {
    heading: 'Universal Edition Plans',
    summary: 'Game-independent operations for gaming guilds and communities that do not need Tibia-specific systems.',
    prices: ['$0', '$4,99', '$9,99', '$19,99'],
    plans: {
      free: {
        fit: 'For gaming communities starting with private Support, general Events or channel automation.',
        features: [
          'Private Support, general Events, Timezones, Ban List and moderation logs.',
          'Automod and Autodelete for selected channels.',
          'Up to 3 active events, 3 Support categories and 3 Automod channels.',
          '15-minute eligible external policy, 5-minute cached panels and 1-year history.'
        ]
      },
      core: {
        fit: 'For active gaming communities adding progression and structured staff participation.',
        features: [
          'Leaderboards, Loyalty, Boost and Stream rewards.',
          'Public staff applications and private staff voting.',
          'Up to 10 active events, 6 Support categories and 10 Automod channels.',
          '10-minute eligible external policy, 3-minute cached panels and 2-year history.'
        ]
      },
      growth: {
        fit: 'For growing communities that need Core features at significantly higher limits.',
        features: [
          'Every Universal Core module at Growth capacity.',
          'Up to 30 active events, 15 Support categories and 30 Automod channels.',
          '5-minute eligible external policy and 2-minute cached panels.',
          '5-year useful history and priority configuration guidance.'
        ]
      },
      scale: {
        fit: 'For established gaming communities relying on Luminox as a daily platform.',
        features: [
          'Every public Universal module operating at Scale capacity.',
          'Up to 100 active events, 25 Support categories and 100 Automod channels.',
          '2-minute eligible external policy and 1-minute cached panels.',
          '10-year useful history and priority setup support.'
        ]
      }
    },
    comparison: {
      bestFit: ['First Discord setup', 'Small gaming community', 'Growing community', 'Established gaming community'],
      access: ['Support + Events + automation', 'Progression + staff systems', 'Core access at higher capacity', 'All public Universal features at maximum capacity']
    }
  }
};

const pricingEditionSelector = document.querySelector('[data-pricing-edition-selector]');
if (pricingEditionSelector) {
  const editionButtons = [...pricingEditionSelector.querySelectorAll('[data-pricing-edition]')];
  const editionHeading = document.querySelector('[data-pricing-edition-heading]');
  const editionSummary = document.querySelector('[data-pricing-edition-summary]');
  const comparisonEdition = document.querySelector('[data-pricing-comparison-edition]');
  const planGrid = document.querySelector('.plan-tier-grid');
  const validEditions = new Set(Object.keys(pricingEditionContent));

  const selectPricingEdition = (edition, updateUrl = true) => {
    const selectedEdition = validEditions.has(edition) ? edition : 'universal';
    const content = pricingEditionContent[selectedEdition];

    pricingEditionSelector.dataset.selectedEdition = selectedEdition;
    editionButtons.forEach((button) => {
      const isSelected = button.dataset.pricingEdition === selectedEdition;
      button.setAttribute('aria-pressed', String(isSelected));
    });

    if (editionHeading) editionHeading.textContent = content.heading;
    if (editionSummary) editionSummary.textContent = content.summary;
    if (comparisonEdition) {
      const badge = comparisonEdition.querySelector('.edition-availability-badge');
      const badgeIcon = badge?.querySelector('img');
      const badgeLabel = badge?.querySelector('span');
      badge?.classList.toggle('edition-availability-universal', selectedEdition === 'universal');
      badge?.classList.toggle('edition-availability-community', selectedEdition === 'community');
      if (badgeIcon) badgeIcon.src = vectorAssetUrl(`assets/icons/edition-${selectedEdition}.svg`);
      if (badgeLabel) badgeLabel.textContent = selectedEdition === 'universal' ? 'Universal' : 'Community';
    }

    Object.entries(content.plans).forEach(([planName, planContent]) => {
      const card = document.querySelector(`[data-plan-tier="${planName}"]`);
      if (!card) return;
      const fit = card.querySelector('.plan-tier-fit');
      const list = card.querySelector('.plan-list');
      const amount = card.querySelector('.plan-amount');
      const planIndex = ['free', 'core', 'growth', 'scale'].indexOf(planName);
      if (fit) fit.textContent = planContent.fit;
      if (list) list.innerHTML = planContent.features.map((feature) => `<li>${feature}</li>`).join('');
      if (amount && planIndex >= 0) amount.textContent = content.prices[planIndex].replace(/^\$/, '');
    });

    document.querySelectorAll('[data-pricing-comparison="price"]').forEach((cell, index) => {
      cell.textContent = content.prices[index] || '';
    });
    document.querySelectorAll('[data-pricing-comparison="best-fit"]').forEach((cell, index) => {
      cell.textContent = content.comparison.bestFit[index] || '';
    });
    document.querySelectorAll('[data-pricing-comparison="access"]').forEach((cell, index) => {
      cell.textContent = content.comparison.access[index] || '';
    });

    planGrid?.classList.remove('edition-updated');
    window.requestAnimationFrame(() => planGrid?.classList.add('edition-updated'));

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('edition', selectedEdition);
      window.history.replaceState({}, '', url);
    }
  };

  editionButtons.forEach((button) => {
    button.addEventListener('click', () => selectPricingEdition(button.dataset.pricingEdition));
  });

  const initialEdition = new URL(window.location.href).searchParams.get('edition');
  selectPricingEdition(initialEdition, false);
}

document.querySelectorAll('[data-nickname-comparison]').forEach((comparison, comparisonIndex) => {
  const tabs = [...comparison.querySelectorAll('[data-nickname-mode]')];
  const panels = [...comparison.querySelectorAll('[data-nickname-panel]')];

  if (tabs.length === 0 || panels.length === 0) return;

  const selectNicknameMode = (requestedMode, moveFocus = false) => {
    const selectedTab = tabs.find((tab) => tab.dataset.nicknameMode === requestedMode) || tabs[0];
    const selectedMode = selectedTab.dataset.nicknameMode;

    tabs.forEach((tab, tabIndex) => {
      const panel = panels.find((entry) => entry.dataset.nicknamePanel === tab.dataset.nicknameMode);
      const selected = tab === selectedTab;
      const tabId = `nickname-tab-${comparisonIndex + 1}-${tabIndex + 1}`;
      const panelId = `nickname-panel-${comparisonIndex + 1}-${tabIndex + 1}`;

      tab.id = tabId;
      tab.setAttribute('aria-controls', panelId);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.classList.toggle('is-active', selected);

      if (panel) {
        panel.id = panelId;
        panel.setAttribute('aria-labelledby', tabId);
        panel.hidden = !selected;
      }
    });

    comparison.dataset.selectedNicknameMode = selectedMode;
    if (moveFocus) selectedTab.focus();
  };

  tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => selectNicknameMode(tab.dataset.nicknameMode));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();

      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (tabIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;

      selectNicknameMode(tabs[nextIndex].dataset.nicknameMode, true);
    });
  });

  const initialTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  selectNicknameMode(initialTab.dataset.nicknameMode);
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
  const compactDocsSearch = window.matchMedia('(max-width: 760px)');
  const compactFeaturedGuides = new Set([
    'docs-registration.html',
    'docs-nicknames.html',
    'docs-events.html',
    'docs-guildbank.html',
    'docs-support.html'
  ]);

  const renderDocumentationResults = () => {
    const query = docsSearch.value.trim().toLowerCase();
    const matches = documentationCatalog.filter(([, title, description, keywords]) =>
      !query || `${title} ${description} ${keywords}`.toLowerCase().includes(query)
    );
    const showCompactSelection = !query && compactDocsSearch.matches;
    const visibleMatches = showCompactSelection
      ? matches.filter(([href]) => compactFeaturedGuides.has(href))
      : matches;
    const searchSummary = showCompactSelection
      ? `<p class="docs-search-summary">Popular guides are shown below. Type a topic to search all ${documentationCatalog.length} documentation pages.</p>`
      : '';

    docsSearchResults.innerHTML = visibleMatches.length > 0
      ? `${searchSummary}${visibleMatches.map(([href, title, description]) => `
        <a class="docs-search-result" href="${href}">
          <strong>${title}</strong><span>${description}</span>
        </a>`).join('')}`
      : '<p class="empty-state">No documentation pages match that search.</p>';
  };

  docsSearch.addEventListener('input', renderDocumentationResults);
  compactDocsSearch.addEventListener('change', renderDocumentationResults);
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
