const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navigationSections = {
  guild: {
    label: 'Guild',
    icon: 'nav-guild.svg',
    pages: [
      ['guild.html', 'Overview', 'Discover Lumina'],
      ['guild-history.html', 'Our Story', 'Discover Lumina'],
      ['guild-secura.html', 'Life on Secura', 'Discover Lumina'],
      ['guild-members.html', 'Members', 'Discover Lumina'],
      ['guild-leadership.html', 'Leadership', 'Discover Lumina'],
      ['guild-community.html', 'Community', 'Guild Life'],
      ['guild-activities.html', 'Activities', 'Guild Life'],
      ['gallery.html', 'Gallery', 'Guild Life'],
      ['guild-roleplay.html', 'Roleplay', 'Guild Life'],
      ['blog.html', 'Blog', 'Guild Life'],
      ['guild-join.html', 'Join Lumina', 'Become a Member'],
      ['guild-faq.html', 'Candidate FAQ', 'Become a Member'],
      ['guild-rules.html', 'Rules', 'Become a Member']
    ]
  },
  features: {
    label: 'Bot',
    icon: 'nav-bot.svg',
    pages: [
      ['features.html', 'Bot Overview', 'Start'],
      ['systems.html', 'How It Works', 'Start'],
      ['use-cases.html', 'Use Cases', 'Start'],
      ['security.html', 'Trust & Safety', 'Start'],
      ['bot-registration.html', 'Registration', 'Members'],
      ['bot-loyalty.html', 'Loyalty', 'Members'],
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
      ['bot-moderation.html', 'Moderation', 'Staff & admin'],
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
      ['systems.html', 'How Luminox Works', 'Administration'],
      ['docs-faq.html', 'FAQ', 'Administration'],
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
const renderNavIcon = (icon) => `<span class="nav-icon-shell"><img class="nav-icon" src="assets/icons/${icon}" alt="" aria-hidden="true"></span>`;
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
      <img src="assets/brand/seal-dark-web.png" alt="" aria-hidden="true">
      <span><strong>Lumina Guild</strong><small>A Tibia Guild on Secura</small></span>
    </a>
    <nav class="footer-links" aria-label="Footer navigation">
      <a href="guild.html">Guild</a><a href="features.html">Bot</a><a href="docs.html">Docs</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a>
    </nav>
    <span class="footer-copyright">© ${copyrightYears} Lumina</span>
    <a class="footer-top" href="#top"><span aria-hidden="true">↑</span> Top</a>`;
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
  ['docs-automation.html', 'Automation & Retention', 'Autodelete, panel refresh, private response expiry and local backups.', 'automation autodelete retention backups ephemeral'],
  ['docs-website.html', 'Website Publishing', 'Private Discord proposals, staff review and safe publication of approved media.', 'website gallery media publish review security'],
  ['docs-troubleshooting.html', 'Troubleshooting', 'Permissions, missing panels, failed interactions and sync issues.', 'errors permissions missing interaction'],
  ['docs-faq.html', 'FAQ', 'Short answers to common member and staff questions.', 'faq questions help'],
  ['roadmap.html', 'Product Roadmap', 'The public delivery path, release principles and priorities shaping future Luminox work.', 'roadmap development future releases'],
  ['changelog.html', 'Changelog', 'A curated history of meaningful Luminox releases and documentation milestones.', 'changelog updates releases history'],
  ['use-cases.html', 'Use Cases', 'Choose the smallest Luminox setup for the problem your guild needs to solve.', 'use cases buying evaluation setup guild problems'],
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
  'docs-registration.html': { family: 'reference', variant: 'identity', accent: 'blue', code: 'Guide 04', icon: 'content-identity.svg', label: 'Registration', summary: 'The verified link between a Discord account, its Tibia characters and guild access.', tags: ['Verify', 'Main', 'Synchronize'] },
  'docs-loyalty.html': { family: 'reference', variant: 'progress', accent: 'gold', code: 'Guide 05', icon: 'content-loyalty.svg', label: 'Loyalty', summary: 'Account-wide rewards, levels, eligibility and transparent reward history.', tags: ['Earn', 'Level', 'Review'] },
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
  'docs-moderation.html': { family: 'reference', variant: 'shield', accent: 'red', code: 'Guide 19', icon: 'content-moderation.svg', label: 'Moderation', summary: 'Automod and permanent logs for both editions, with Tibia-linked sanctions in Community.', tags: ['Restrict', 'Protect', 'Audit'] },
  'docs-staff.html': { family: 'reference', variant: 'roles', accent: 'violet', code: 'Guide 20', icon: 'content-guild.svg', label: 'Staff systems', summary: 'Global moderators, specialist roles, private voting and public applications.', tags: ['Roles', 'Access', 'Decisions'] },
  'docs-admin.html': { family: 'reference', variant: 'control', accent: 'gold', code: 'Guide 21', icon: 'content-setup.svg', label: 'Administration', summary: 'Configuration boundaries, maintenance tools and safe administrator decisions.', tags: ['Configure', 'Inspect', 'Maintain'] },
  'docs-automation.html': { family: 'reference', variant: 'cycle', accent: 'green', code: 'Guide 22', icon: 'content-automation.svg', label: 'Automation', summary: 'Refresh panels, clean temporary messages, expire private responses and keep backups.', tags: ['Refresh', 'Clean', 'Back up'] },
  'docs-website.html': { family: 'reference', variant: 'publish', accent: 'blue', code: 'Guide 23', icon: 'content-website.svg', label: 'Website publishing', summary: 'A reviewed path from a private Discord proposal to approved public media.', tags: ['Submit', 'Review', 'Publish'] },
  'docs-troubleshooting.html': { family: 'reference', variant: 'diagnostic', accent: 'red', code: 'Guide 24', icon: 'content-troubleshooting.svg', label: 'Troubleshooting', summary: 'Diagnose permissions and configuration before forcing expensive synchronization.', tags: ['Observe', 'Isolate', 'Recover'] },
  'systems.html': { family: 'reference', variant: 'architecture', accent: 'violet', code: 'Guide 25', icon: 'content-systems.svg', label: 'How it works', summary: 'Luminox reuses current information, refreshes panels by need and cleans temporary detail.', tags: ['Collect once', 'Reuse', 'Clean'] },
  'docs-faq.html': { family: 'reference', variant: 'questions', accent: 'blue', code: 'Guide 26', icon: 'content-support.svg', label: 'FAQ', summary: 'Fast answers with direct routes to the complete setup guides.', tags: ['Ask', 'Answer', 'Continue'] },
  'features.html': { family: 'product', variant: 'constellation', accent: 'violet', code: 'Discord guild bot', icon: 'content-systems.svg', label: 'Choose a function', summary: 'Administrators configure and publish each function; members use guided controls while Luminox keeps current information and history organized.', tags: ['Configure', 'Publish', 'Operate'] },
  'use-cases.html': { family: 'product', variant: 'usecases', accent: 'gold', code: 'Problem → outcome', icon: 'content-usecases.svg', label: 'Use cases', summary: 'Start with one repeated guild problem and enable only the features that remove it.', tags: ['Identify', 'Implement', 'Measure'] },
  'features-identity.html': { family: 'product', variant: 'identity', accent: 'blue', code: '01', icon: 'content-identity.svg', label: 'Verified identity', summary: 'Make the person, Discord account, characters, main and guild rank agree.', tags: ['Account', 'Character', 'Role'] },
  'features-economy.html': { family: 'product', variant: 'economy', accent: 'gold', code: '02', icon: 'content-economy.svg', label: 'Guild economy', summary: 'Turn loot and contributions into reviewed records instead of private assumptions.', tags: ['Split', 'Accumulate', 'Approve'] },
  'features-events.html': { family: 'product', variant: 'events', accent: 'green', code: '03', icon: 'content-events.svg', label: 'Event engine', summary: 'General Discord events in both editions, with specialized Tibia team rules in Community.', tags: ['Schedule', 'Team', 'Reward'] },
  'features-intelligence.html': { family: 'product', variant: 'intelligence', accent: 'red', code: '04', icon: 'content-intelligence.svg', label: 'Live monitoring', summary: 'Connect online members, enemy risk and character changes without duplicate scans.', tags: ['Observe', 'Track', 'Alert'] },
  'features-finder.html': { family: 'product', variant: 'finder', accent: 'blue', code: '05', icon: 'content-finder.svg', label: 'Team discovery', summary: 'Use current activity and compatible vocations to surface playable groups.', tags: ['Signal', 'Score', 'Match'] },
  'features-support.html': { family: 'product', variant: 'support', accent: 'violet', code: '06', icon: 'content-support.svg', label: 'Private support', summary: 'Route every request to the correct people without exposing it publicly.', tags: ['Route', 'Resolve', 'Archive'] },
  'bot-registration.html': { family: 'product', variant: 'identity', accent: 'blue', code: 'Member 01', icon: 'content-identity.svg', label: 'Character registration', summary: 'Verify who owns each character and use one trusted identity across the server.', tags: ['Verify', 'Main', 'Roles'] },
  'bot-loyalty.html': { family: 'product', variant: 'progress', accent: 'gold', code: 'Member 02', icon: 'content-loyalty.svg', label: 'Loyalty progression', summary: 'Turn useful guild activity into transparent account-wide progress and rewards.', tags: ['Earn', 'Level', 'Explain'] },
  'bot-streaming.html': { family: 'product', variant: 'broadcast', accent: 'red', code: 'Member 03', icon: 'content-streaming.svg', label: 'Stream rewards', summary: 'Reward eligible Discord screen-share time without asking staff to count sessions.', tags: ['Detect', 'Qualify', 'Reward'] },
  'bot-timezones.html': { family: 'product', variant: 'clock', accent: 'violet', code: 'Member 04', icon: 'content-timezones.svg', label: 'Timezone conversion', summary: 'Let every member read shared times correctly in their own local timezone.', tags: ['Save', 'Convert', 'Display'] },
  'bot-finder.html': { family: 'product', variant: 'finder', accent: 'blue', code: 'Member 05', icon: 'content-finder.svg', label: 'Team finder', summary: 'Turn current online data into playable team suggestions and voluntary group posts.', tags: ['Online', 'Match', 'Team'] },
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
  'bot-moderation.html': { family: 'product', variant: 'trust', accent: 'red', code: 'Staff 02', icon: 'content-moderation.svg', label: 'Moderation tools', summary: 'Protect configured channels and keep restrictions and staff actions clearly recorded.', tags: ['Prevent', 'Restrict', 'Audit'] },
  'bot-staff.html': { family: 'product', variant: 'support', accent: 'violet', code: 'Staff 03', icon: 'content-guild.svg', label: 'Staff tools', summary: 'Separate general authority from specialist responsibilities and structured decisions.', tags: ['Roles', 'Vote', 'Apply'] },
  'bot-automation.html': { family: 'product', variant: 'constellation', accent: 'green', code: 'Staff 04', icon: 'content-automation.svg', label: 'Server automation', summary: 'Refresh public information and clean temporary content without constant staff work.', tags: ['Refresh', 'Expire', 'Clean'] },
  'bot-website.html': { family: 'product', variant: 'support', accent: 'blue', code: 'Staff 05', icon: 'content-website.svg', label: 'Website publishing', summary: 'Collect media and articles in Discord, review them privately and publish safely.', tags: ['Submit', 'Review', 'Publish'] },
  'security.html': { family: 'product', variant: 'trust', accent: 'blue', code: 'Trust model', icon: 'content-security.svg', label: 'Trust & safety', summary: 'Understand permissions, staff review, automatic cleanup and what remains in Discord.', tags: ['Controlled', 'Reviewable', 'Clear'] },
  'guild.html': { family: 'guild', variant: 'manifesto', accent: 'gold', code: 'Secura', icon: 'content-guild.svg', label: 'The guild', summary: 'An international Tibia community where structure protects the social experience.', tags: ['Trust', 'Respect', 'Together'] },
  'guild-history.html': { family: 'guild', variant: 'legacy', accent: 'gold', code: 'Our story', icon: 'content-blog.svg', label: 'Built together', summary: 'The needs, principles and people that shaped Lumina from a guild roster into a lasting community.', tags: ['Belong', 'Build', 'Preserve'] },
  'guild-secura.html': { family: 'guild', variant: 'world', accent: 'blue', code: 'Our world', icon: 'content-journey.svg', label: 'Life on Secura', summary: 'One shared Tibia world gives an international community a clear in-game identity and reputation.', tags: ['Tibia', 'Secura', 'Respect'] },
  'guild-community.html': { family: 'guild', variant: 'community', accent: 'green', code: 'Chapter 02', icon: 'content-guild.svg', label: 'Community', summary: 'Organization creates more room for helping, playing and staying connected.', tags: ['Hunts', 'Voice', 'Support'] },
  'guild-members.html': { family: 'guild', variant: 'members', accent: 'gold', code: 'Member life', icon: 'content-members.svg', label: 'Membership', summary: 'Verified access, shared activities and the responsibilities that turn a roster entry into real guild membership.', tags: ['Tibia', 'Secura', 'Together'] },
  'guild-leadership.html': { family: 'guild', variant: 'leadership', accent: 'violet', code: 'Responsibility', icon: 'content-guild.svg', label: 'Clear leadership', summary: 'Broad leadership and specialist responsibilities give members a clear route to the right person.', tags: ['Listen', 'Decide', 'Support'] },
  'guild-activities.html': { family: 'guild', variant: 'activities', accent: 'green', code: 'Guild life', icon: 'content-events.svg', label: 'Play together', summary: 'Hunts, bosses, quests, social sessions and roleplay give different members a place to participate.', tags: ['Organize', 'Join', 'Remember'] },
  'blog.html': { family: 'guild', variant: 'blog', accent: 'gold', code: 'Guild journal', icon: 'content-blog.svg', label: 'Lumina blog', summary: 'Guild news, chronicles and thoughtful updates written and reviewed through Discord.', tags: ['News', 'Stories', 'Community'] },
  'gallery.html': { family: 'guild', variant: 'gallery', accent: 'violet', code: 'Visual archive', icon: 'content-gallery.svg', label: 'Lumina gallery', summary: 'Staff-reviewed adventures, community life, roleplay and milestones preserved with their story.', tags: ['Stories', 'Collections', 'Memories'] },
  'guild-roleplay.html': { family: 'guild', variant: 'roleplay', accent: 'violet', code: 'Chapter 03', icon: 'roleplay.svg', label: 'Roleplay sessions', summary: 'Original characters, narrated adventures and shared stories created by Lumina members.', tags: ['Characters', 'Stories', 'Sessions'] },
  'guild-join.html': { family: 'guild', variant: 'journey', accent: 'blue', code: 'Chapter 04', icon: 'content-journey.svg', label: 'Join Lumina', summary: 'A clear journey from interested visitor to verified guild member.', tags: ['Apply', 'Verify', 'Enter'] },
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
  'docs-registration.html': 'identity-orbit.svg',
  'docs-loyalty.html': 'progression-path.svg',
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
  'bot-registration.html': 'identity-orbit.svg',
  'bot-loyalty.html': 'loyalty-orbit.svg',
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
  'bot-staff.html': 'support-threads.svg',
  'bot-automation.html': 'product-network.svg',
  'bot-website.html': 'blog-journal.svg',
  'security.html': 'trust-vault.svg',
  'guild-community.html': 'guild-fellowship.svg',
  'guild-members.html': 'guild-fellowship.svg',
  'guild-history.html': 'guild-legacy.svg',
  'guild-secura.html': 'secura-compass.svg',
  'guild-leadership.html': 'guild-leadership.svg',
  'guild-activities.html': 'guild-adventures.svg',
  'guild-faq.html': 'guild-candidacy.svg',
  'blog.html': 'blog-journal.svg',
  'guild-join.html': 'guild-fellowship.svg',
  'guild-rules.html': 'guild-charter.svg',
  'pricing-faq.html': 'docs-library.svg',
  'guarantee.html': 'trust-vault.svg',
  'roadmap.html': 'progression-path.svg'
});

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
  'docs-moderation.html': 'Moderation Lists',
  'docs-panels.html': 'Panel Directory',
  'docs-progression.html': 'Guild Progression',
  'docs-recruitment.html': 'Recruitment Rewards',
  'docs-registration.html': 'Verified Identity',
  'docs-staff.html': 'Staff Access',
  'docs-streaming.html': 'Stream Loyalty',
  'docs-support.html': 'Private Support',
  'docs-timezones.html': 'Local Time',
  'docs-tracker.html': 'Identity Tracker',
  'docs-troubleshooting.html': 'Fix It Fast',
  'docs-watchlists.html': 'Live Watchlists',
  'docs-website.html': 'Website Publishing',
  'features.html': 'Meet Luminox',
  'features-economy.html': 'Guild Economy',
  'features-events.html': 'Better Events',
  'features-finder.html': 'Find Your Team',
  'features-identity.html': 'Verified Members',
  'features-intelligence.html': 'Live Monitoring',
  'features-support.html': 'Private Support',
  'bot-registration.html': 'Character Registration',
  'bot-loyalty.html': 'Loyalty Progression',
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
  'bot-staff.html': 'Staff Tools',
  'bot-automation.html': 'Automatic Upkeep',
  'bot-website.html': 'Website Publishing',
  'blog.html': 'Lumina Journal',
  'gallery.html': 'Lumina Gallery',
  'guild-roleplay.html': 'Guild Roleplay',
  'guild.html': 'Meet Lumina',
  'guild-history.html': 'Our Story',
  'guild-secura.html': 'Life on Secura',
  'guild-community.html': 'Better Together',
  'guild-members.html': 'Lumina Members',
  'guild-leadership.html': 'Clear Leadership',
  'guild-activities.html': 'Guild Activities',
  'guild-join.html': 'Join Lumina',
  'guild-faq.html': 'Candidate FAQ',
  'guild-rules.html': 'Lumina Standards',
  'pricing.html': 'Plans That Scale',
  'pricing-faq.html': 'Premium Answers',
  'guarantee.html': 'Purchase Clarity',
  'roadmap.html': 'Product Roadmap',
  'security.html': 'Built for Trust',
  'setup.html': 'Safe Installation',
  'systems.html': 'Efficient by Design',
  'use-cases.html': 'Solve Real Friction'
};

const editionBadgeDefinitions = Object.freeze({
  universal: {
    label: 'Universal',
    icon: 'edition-universal.svg',
    href: 'pricing.html?edition=universal#premium-tiers'
  },
  community: {
    label: 'Community',
    icon: 'edition-community.svg',
    href: 'pricing.html?edition=community#premium-tiers'
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
  'docs-panels.html',
  'docs-staff.html',
  'docs-streaming.html',
  'docs-support.html',
  'docs-timezones.html',
  'docs-troubleshooting.html',
  'docs-website.html',
  'features.html',
  'features-events.html',
  'features-support.html',
  'bot-loyalty.html',
  'bot-streaming.html',
  'bot-timezones.html',
  'bot-events.html',
  'bot-leaderboards.html',
  'bot-support.html',
  'bot-moderation.html',
  'bot-staff.html',
  'bot-automation.html',
  'bot-website.html',
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
  'docs-moderation.html',
  'docs-progression.html',
  'docs-recruitment.html',
  'docs-registration.html',
  'docs-tracker.html',
  'docs-watchlists.html',
  'features-economy.html',
  'features-finder.html',
  'features-identity.html',
  'features-intelligence.html',
  'bot-registration.html',
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

const editionAvailabilityByPage = new Map([
  ...bothEditionPages.map((page) => [page, ['universal', 'community']]),
  ...communityEditionPages.map((page) => [page, ['community']])
]);

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
    'docs-website.html',
    'bot-streaming.html',
    'bot-leaderboards.html',
    'bot-guards.html',
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
    'bot-registration.html',
    'bot-loot.html',
    'bot-guildhall.html'
  ],
  split: [
    'commands.html',
    'features-events.html',
    'security.html',
    'guild-community.html',
    'guild-members.html',
    'guild-history.html',
    'guild-leadership.html',
    'blog.html',
    'bot-finder.html',
    'bot-tracker.html'
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
    'docs-admin.html',
    'guild-rules.html'
  ],
  'guild-cover': ['guild.html'],
  'gallery-wall': ['gallery.html'],
  'roleplay-cover': ['guild-roleplay.html'],
  'feature-map': ['features.html'],
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
  figure.className = `opening-artwork ${className}`.trim();
  figure.setAttribute('aria-hidden', 'true');
  figure.innerHTML = `<img src="assets/illustrations/${artwork}" alt="" loading="eager" decoding="async">`;
  return figure;
};

const renderOpeningAside = (presentation, layout) => {
  const aside = document.createElement('aside');
  aside.className = `opening-aside opening-aside-${layout}`;
  aside.setAttribute('aria-label', `${presentation.label} page summary`);

  const tags = presentation.tags.map((tag) => `<span>${tag}</span>`).join('');
  const summary = layout === 'spotlight'
    ? ''
    : `<p class="opening-summary">${presentation.summary}</p>`;
  const artwork = pageArtworkByPage[currentPage]
    ? `<figure class="opening-artwork opening-aside-art" aria-hidden="true"><img src="assets/illustrations/${pageArtworkByPage[currentPage]}" alt="" loading="eager" decoding="async"></figure>`
    : '';
  aside.innerHTML = `
    <div class="opening-aside-top">
      <span class="opening-code">${presentation.code}</span>
      <span class="opening-icon"><img src="assets/icons/${presentation.icon}" alt="" aria-hidden="true"></span>
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
  const artwork = pageArtworkByPage[currentPage]
    ? `<figure class="opening-artwork opening-brief-art" aria-hidden="true"><img src="assets/illustrations/${pageArtworkByPage[currentPage]}" alt="" loading="eager" decoding="async"></figure>`
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
    <div class="guild-cover-stage" aria-hidden="true"><img src="assets/illustrations/guild-emblem-stage.svg" alt=""></div>
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
    <div class="opening-gallery-art"><img src="assets/illustrations/gallery-frames.svg" alt="Decorative collection of Lumina gallery frames"></div>
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
    <div class="opening-roleplay-art"><img src="assets/illustrations/roleplay-chronicle.svg" alt="Open chronicle with roleplay symbols"></div>
    <p><span>Characters</span><span>Choices</span><span>Chronicles</span></p>`;
  return visual;
};

const renderFeatureMap = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-feature-map';
  visual.setAttribute('aria-label', 'Connected Luminox systems');
  visual.innerHTML = `
    <span class="feature-map-core">Luminox</span>
    <a href="bot-registration.html"><img src="assets/icons/content-identity.svg" alt=""><span>Registration</span></a>
    <a href="bot-events.html"><img src="assets/icons/content-events.svg" alt=""><span>Events</span></a>
    <a href="bot-guildbank.html"><img src="assets/icons/content-economy.svg" alt=""><span>GuildBank</span></a>
    <a href="bot-watchlists.html"><img src="assets/icons/content-intelligence.svg" alt=""><span>Online lists</span></a>
    <a href="bot-finder.html"><img src="assets/icons/content-finder.svg" alt=""><span>Finder</span></a>
    <a href="bot-support.html"><img src="assets/icons/content-support.svg" alt=""><span>Support</span></a>`;
  return visual;
};

const renderPricingTiers = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-pricing-tiers';
  visual.setAttribute('aria-label', 'Luminox plan paths');
  visual.innerHTML = `
    <div class="opening-tier-stack">
      <a class="opening-tier opening-tier-free" href="#free-plan"><span><img src="assets/icons/plan-free.svg" alt=""><b>Start</b></span><strong>Free</strong><em>€0</em><small>Build the first reliable setup.</small></a>
      <a class="opening-tier opening-tier-premium" href="#premium-tiers"><span><img src="assets/icons/plan-premium.svg" alt=""><b>Scale</b></span><strong>Premium</strong><em>From €4,99</em><small>Core, Growth and Scale.</small></a>
      <a class="opening-tier opening-tier-exclusive" href="#founder-edition"><span><img src="assets/icons/plan-exclusive.svg" alt=""><b>Private</b></span><strong>Exclusive</strong><em>Lumina only</em><small>Discover access to Founder Edition.</small></a>
    </div>
    <p><img src="assets/icons/discord.svg" alt="" aria-hidden="true"><span>Monthly subscriptions handled inside <strong>Discord</strong>.</span></p>`;
  return visual;
};

const renderContactPaths = () => {
  const visual = document.createElement('aside');
  visual.className = 'opening-contact-paths';
  visual.setAttribute('aria-label', 'Contact paths');
  visual.innerHTML = `
    <div class="opening-contact-heading"><p>Choose a conversation</p><span>Three routes. One Discord-first experience.</span></div>
    <a class="opening-contact-route opening-contact-support" href="https://discord.com/channels/1444873714213720318/1513054668748754976" target="_blank" rel="noopener noreferrer"><img src="assets/icons/content-support.svg" alt=""><span><small>Already using Luminox</small><strong>Product support</strong><em>Panels, permissions and errors</em></span><b>↗</b></a>
    <a class="opening-contact-route opening-contact-product" href="#contact-paths"><img src="assets/icons/content-pricing.svg" alt=""><span><small>Exploring Luminox</small><strong>Product guidance</strong><em>Editions, plans and best fit</em></span><b>↓</b></a>
    <a class="opening-contact-route opening-contact-guild" href="guild-join.html"><img src="assets/icons/content-guild.svg" alt=""><span><small>Playing on Secura</small><strong>Join Lumina</strong><em>Culture, rules and membership</em></span><b>→</b></a>`;
  return visual;
};

const customOpeningRenderers = {
  'guild-cover': renderGuildCover,
  'gallery-wall': renderGalleryWall,
  'roleplay-cover': renderRoleplayCover,
  'feature-map': renderFeatureMap,
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
  badges.setAttribute('aria-label', 'Available Luminox editions');

  editions.forEach((edition) => {
    const definition = editionBadgeDefinitions[edition];
    const badge = document.createElement('a');
    badge.className = `edition-availability-badge edition-availability-${edition}`;
    badge.href = definition.href;
    badge.title = `Available in ${definition.label} Edition`;
    badge.setAttribute('aria-label', `View ${definition.label} Edition plans`);
    badge.innerHTML = `<img src="assets/icons/${definition.icon}" alt="" aria-hidden="true"><span>${definition.label}</span>`;
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
    text: 'A verified Registration panel gives every later Luminox feature a reliable member identity.',
    primary: ['setup.html', 'Configure registration'],
    secondary: ['features-identity.html', 'See verified identity']
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
    eyebrow: 'Keep restrictions recorded',
    title: 'Connect moderation lists with identity history and live awareness.',
    text: 'Automod protects selected channels in both editions. Community adds Blacklist, Ban List and Tracker so Tibia-linked restrictions and identity changes remain attributable.',
    primary: ['features-intelligence.html', 'Explore live monitoring'],
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
    eyebrow: 'Publish with a review boundary',
    title: 'Keep community media in Discord until staff approves it.',
    text: 'The Website panel separates proposals, moderation and final publication without exposing local secrets.',
    primary: ['security.html', 'Review the security model'],
    secondary: ['contact.html', 'Ask about publishing']
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
  'guild-community.html': 'content-guild.svg',
  'guild-faq.html': 'action-support.svg',
  'guild-history.html': 'action-history.svg',
  'guild-join.html': 'content-journey.svg',
  'guild-leadership.html': 'content-members.svg',
  'guild-members.html': 'content-members.svg',
  'guild-roleplay.html': 'roleplay.svg',
  'guild-rules.html': 'action-security.svg',
  'guild-secura.html': 'content-guild.svg',
  'guild.html': 'content-guild.svg',
  'index.html': 'action-home.svg',
  'pricing-faq.html': 'action-docs.svg',
  'pricing.html': 'action-pricing.svg',
  'roadmap.html': 'content-roadmap.svg',
  'security.html': 'content-security.svg',
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
  icon.src = `assets/icons/${resolveButtonActionIcon(button)}`;
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');
  button.prepend(icon);
  button.classList.add('button-with-action-icon');
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const isMobile = window.matchMedia('(max-width: 1040px)').matches;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('nav-open', isOpen && isMobile);

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
    document.body.classList.remove('nav-open');
    resetMobileNavigation();
  }

  if (window.matchMedia('(max-width: 1040px)').matches && event.target.closest('.nav-links a')) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
    resetMobileNavigation();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeOtherMenus();
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('nav-open');
  resetMobileNavigation();
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1041px)').matches) {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
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
    prices: ['€0', '€7,99', '€14,99', '€29,99'],
    plans: {
      free: {
        fit: 'For smaller Tibia guilds starting with verified identity, core guild visibility and guided operations.',
        features: [
          'Verified Tibia guild, world, characters, ranks and Guild List.',
          'Levels, deaths, Hunt Board, general Events, Support and moderation tools.',
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
          'Website publishing panel plus every public Community feature.',
          'Up to 100 active events, 25 Support categories and 100 Automod channels.',
          '2-minute eligible external policy and 1-minute cached panels.',
          '10-year useful history and priority setup support.'
        ]
      }
    },
    comparison: {
      bestFit: ['First Tibia setup', 'Small Tibia guild', 'Growing Tibia guild', 'Established Tibia guild'],
      access: ['Identity + guild basics', 'Loyalty + specialized events + live risk', 'Economy + recruitment + live monitoring', 'Website publishing + all Community features']
    }
  },
  universal: {
    heading: 'Universal Edition Plans',
    summary: 'Game-independent operations for gaming guilds and communities that do not need Tibia-specific systems.',
    prices: ['€0', '€4,99', '€9,99', '€19,99'],
    plans: {
      free: {
        fit: 'For gaming communities starting with private Support, general Events or channel automation.',
        features: [
          'Private Support, general Events, Timezones and moderation log.',
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
          'Website publishing panel plus every Universal Core module.',
          'Up to 100 active events, 25 Support categories and 100 Automod channels.',
          '2-minute eligible external policy and 1-minute cached panels.',
          '10-year useful history and priority setup support.'
        ]
      }
    },
    comparison: {
      bestFit: ['First Discord setup', 'Small gaming community', 'Growing community', 'Established gaming community'],
      access: ['Support + Events + automation', 'Progression + staff systems', 'Core access at higher capacity', 'Website publishing + highest Universal capacity']
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
      if (badgeIcon) badgeIcon.src = `assets/icons/edition-${selectedEdition}.svg`;
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
      if (amount && planIndex >= 0) amount.textContent = content.prices[planIndex].replace(/^€/, '');
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
