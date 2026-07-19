(() => {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const pageGuides = {
    'docs.html': {
      label: 'Documentation overview',
      title: 'Understand the system before configuring it.',
      introduction: 'Luminox is a collection of connected Discord features rather than a list of isolated commands. Identity, guild membership, panels, permissions, activity and permanent Discord records work together. The documentation therefore explains the purpose of each feature before showing its controls.',
      solves: 'It gives members, staff and administrators one place to understand what Luminox manages and which guide answers their current question.',
      audience: 'New members, guild leaders evaluating Luminox, moderators learning their tools and administrators configuring a server.',
      outcome: 'Choose the correct guide, understand its prerequisites and avoid running a command without knowing what it changes.'
    },
    'docs-getting-started.html': {
      label: 'Getting started explained',
      title: 'Build the foundation before publishing panels.',
      introduction: 'The first setup establishes which guild, world, Discord roles and staff roles Luminox is allowed to trust. Every public panel depends on that foundation. This guide explains the safe order and separates member actions from administrator configuration.',
      solves: 'It prevents partially configured panels, incorrect role assignments and repeated setup attempts that are harder to diagnose later.',
      audience: 'Administrators installing Luminox and staff members who need to understand the server structure.',
      outcome: 'Finish with a verified guild profile, a safe role hierarchy and a clear sequence for publishing the first member-facing systems.'
    },
    'docs-panels.html': {
      label: 'Panel directory explained',
      title: 'Know what every panel is for before publishing it.',
      introduction: 'Panels are the normal member interface for Luminox. They replace memorized slash commands with buttons, selectors and guided forms while keeping live controls at the bottom and permanent history above. This directory explains the purpose, audience and prerequisite of every panel.',
      solves: 'It helps administrators choose the correct channel and prevents members from seeing duplicated commands and controls for the same process.',
      audience: 'Administrators planning the server layout and staff deciding which systems their guild actually needs.',
      outcome: 'Identify each panel, its setup command, who can use it and the safest refresh action when its presentation needs repair.'
    },
    'docs-registration.html': {
      label: 'Registration explained',
      title: 'Connect one Discord account to verified game identities.',
      introduction: 'Registration proves that a Discord member controls a Tibia character. That verified link becomes the identity layer used by main-character selection, world restrictions, guild roles, nicknames, Loyalty, events, recruitment and account ownership checks.',
      solves: 'It replaces unverified nicknames and manual role requests with a repeatable ownership check against the configured Tibia world.',
      audience: 'Every member registering characters and administrators publishing or repairing the Registration panel.',
      outcome: 'Understand the verification-code flow, the world boundary, main-character behaviour and what Luminox synchronizes after registration.'
    },
    'docs-loyalty.html': {
      label: 'Loyalty explained',
      title: 'Reward contribution at Discord-account level.',
      introduction: 'Loyalty combines useful guild activity into one account-wide progression balance. Rewards can come from events, GuildBank, recruitment, boosts, streaming, support and configured message channels while eligibility remains tied to verified guild membership.',
      solves: 'It creates a transparent contribution history without splitting progress across every character owned by the same Discord member.',
      audience: 'Members reviewing progression and administrators configuring reward sources or applying a justified manual adjustment.',
      outcome: 'Understand who can earn points, how levels are calculated, where rewards appear and which historical details are eventually cleaned.'
    },
    'docs-streaming.html': {
      label: 'Stream Loyalty explained',
      title: 'Reward genuine Discord screen sharing safely.',
      introduction: 'Stream Loyalty listens to Discord voice-state events in specifically enabled channels. Valid screen-share time is accumulated by minute after a minimum session and converted into account Loyalty without polling every user continuously.',
      solves: 'It rewards useful live activity while avoiding manual hour reports, forgotten minutes and an unnecessarily heavy recurring scan.',
      audience: 'Verified guild members who stream and administrators choosing which voice channels are eligible.',
      outcome: 'Know the minimum session, proportional reward, rolling safety limit and where personal and leaderboard totals appear.'
    },
    'docs-events.html': {
      label: 'Events explained',
      title: 'Create, organize and archive guild activities.',
      introduction: 'Universal Edition provides a general Event Board for game-independent communities. Community Edition keeps that board and adds Hunts on Free, then Bosses and Quests from Core. Every enabled board guides creation, signups, scheduling, thread coordination and automatic completion from its own rules.',
      solves: 'It replaces scattered messages and reaction-only signups with one current event panel and one archived Discord thread per activity.',
      audience: 'Members creating or joining activities and administrators publishing only the Event Boards available in their edition and plan.',
      outcome: 'Understand edition availability, scheduling choices, participant rules, leadership controls, automatic success and archival behaviour.'
    },
    'docs-loot.html': {
      label: 'Loot Split explained',
      title: 'Turn Tibia analyzer text into clear transfers.',
      introduction: 'Loot Split reads the hunt analyzer copied from Tibia and guides the responsible member through pricing, looter selection, compensation and GuildBank contribution decisions. The panel performs the calculation while the user confirms every important choice.',
      solves: 'It reduces arithmetic mistakes and gives every participant a clear final share and transfer direction.',
      audience: 'Members splitting a hunt and administrators publishing the Loot panel.',
      outcome: 'Know what data to paste, how the split is calculated, when a contribution is created and why the retired member command is no longer needed.'
    },
    'docs-finder.html': {
      label: 'Finder explained',
      title: 'Transform current online data into useful teams.',
      introduction: 'Finder reuses character and online information Luminox already collected to suggest compatible parties. It also provides a voluntary Looking for team list that can include offline characters because the member may still want Discord contact.',
      solves: 'It helps members discover sensible teammates without another Tibia scan or a manually maintained recruitment message.',
      audience: 'Members looking for a team and administrators publishing the Finder channel.',
      outcome: 'Understand match rules, flexible duos, viable larger parties, Looking for team expiry and private match history.'
    },
    'docs-timezones.html': {
      label: 'Timezones explained',
      title: 'Let every member read the same moment locally.',
      introduction: 'Timezone configuration stores one preferred zone per Discord account. Luminox uses it when a member creates schedules or requests a conversion, while Discord timestamps display the resulting moment in each viewer’s local interface.',
      solves: 'It prevents staff and members in different countries from manually converting event times or assuming the wrong timezone.',
      audience: 'Every member and any event organizer working across multiple regions.',
      outcome: 'Set a timezone once, understand supported message conversion and know why deliberately ambiguous date expressions remain restricted.'
    },
    'docs-guildbank.html': {
      label: 'GuildBank explained',
      title: 'Maintain a reviewed guild economy ledger.',
      introduction: 'GuildBank records deposits, withdrawals and loot-derived contributions against registered Discord accounts. Small contributions can accumulate until a configured review threshold, while authorized staff confirm or deny operations before they affect the confirmed balance.',
      solves: 'It replaces unstructured screenshots and manual totals with attributable entries, specialist review and a sustainable confirmed balance.',
      audience: 'Contributing members, administrators and moderators who also hold the configured Treasurer role.',
      outcome: 'Understand thresholds, pending accumulation, review permissions, Loyalty rewards, permanent log entries and retention.'
    },
    'docs-leaderboards.html': {
      label: 'Leaderboards explained',
      title: 'Compare progress without confusing different identities.',
      introduction: 'Leaderboards assemble progression, activity and contribution metrics into one navigable Discord index. Character metrics use characters; account metrics such as Loyalty, boosts or streaming use the linked Discord account.',
      solves: 'It makes large rankings readable while preserving correct ownership, rolling periods and clickable navigation between messages.',
      audience: 'Members reviewing guild progress and administrators assigning or refreshing the leaderboard channel.',
      outcome: 'Know what each board measures, how rolling periods work, why positions move and which identity is ranked.'
    },
    'docs-watchlists.html': {
      label: 'Watchlists explained',
      title: 'See current guild and enemy activity at a glance.',
      introduction: 'Watchlists turn the latest online information into continuously updated Discord panels. Members Online represents the configured guild; Enemies Online includes only relevant current-world characters linked to the Blacklist.',
      solves: 'It provides a current guild and enemy view without maintaining a second independent online scan for every panel.',
      audience: 'Guild members monitoring activity and administrators assigning each automatic list to a channel.',
      outcome: 'Understand online counts, power totals, session information, channel counters and why transferred enemies disappear from the active list.'
    },
    'docs-progression.html': {
      label: 'Progression explained',
      title: 'Record real level, death and roster changes.',
      introduction: 'Progression combines individual announcements with rolling summaries and a living guild roster. Luminox filters duplicate deaths, reuses fresher character snapshots and keeps the summary panels below new log messages.',
      solves: 'It prevents stale guild levels, duplicate death announcements and disconnected rank or registration information.',
      audience: 'Members following guild progress and administrators configuring Levels, Deaths and Guild List destinations.',
      outcome: 'Understand the three channels, rolling windows, duplicate protection, roster grouping and guild power calculation.'
    },
    'docs-recruitment.html': {
      label: 'Recruitment explained',
      title: 'Reward genuine recruitment while preserving review.',
      introduction: 'Recruitment lets a member report a character within thirty days of its guild arrival, even before that character has registered in Discord. The claim waits without a registration deadline, then first-account validation, specialist approval, ownership disputes and gradual protection determine whether the reward becomes permanent history.',
      solves: 'It rewards recruiters without allowing alters, duplicate accounts or unreviewed claims to create easy Loyalty abuse.',
      audience: 'Guild members reporting recruits, specialist recruitment moderators and administrators resolving disputes.',
      outcome: 'Understand eligibility, awaiting registration, review, provisional approval, exponential rewards and proportional revocation.'
    },
    'docs-guildhall.html': {
      label: 'Guildhall explained',
      title: 'Manage a shared property and its rooms transparently.',
      introduction: 'The Guildhall panel records the current property, room inventory, ordered room quality, registered occupants, sale reports and member claims. Staff decisions become fixed Discord log entries above the current controls.',
      solves: 'It replaces private spreadsheets and informal room promises with visible availability and recorded staff review.',
      audience: 'Registered members requesting rooms, administrators and moderators with the configured Guildhall specialist role.',
      outcome: 'Know how to declare a property, configure up to one hundred rooms, approve claims, change occupants and preserve the audit trail.'
    },
    'docs-moderation.html': {
      label: 'Moderation explained',
      title: 'Keep sanctions, risk records and access changes connected.',
      introduction: 'Both public editions can use Automod and the moderation log. Community Edition adds the Tibia-linked Blacklist and Ban List, where account restrictions remove managed guild access and every character, guild and staff action remains attributable.',
      solves: 'It prevents sanctions from becoming anonymous text lists and stops restricted members from regaining managed guild roles through normal synchronization.',
      audience: 'Administrators and configured moderators managing safety, access and historical accountability.',
      outcome: 'Understand the difference between Blacklist and Ban List, how panels replace CRUD commands, how Automod protects channels and where actions are logged.'
    },
    'docs-tracker.html': {
      label: 'Tracker explained',
      title: 'Follow the identity behind a changing Tibia character.',
      introduction: 'Tracker monitors stored Blacklist and Ban List identities for renames, trades, transfers, returns and deletion outcomes. Historical Discord embeds remain fixed while the latest summary panel is refreshed separately.',
      solves: 'It keeps moderation history useful when a target changes name, moves world or changes ownership instead of silently disappearing.',
      audience: 'Moderators reviewing identity risk and administrators configuring the permanent tracker and important-alert channel.',
      outcome: 'Understand each outcome label, the difference between partial and complete defeat, return detection and safe alert retries.'
    },
    'docs-guards.html': {
      label: 'Guards explained',
      title: 'Coordinate temporary enemy reports and battle time.',
      introduction: 'Guards lets verified guild members opt into an alert role, report a Blacklist target and coordinate inside a temporary thread. Battle reports additionally accumulate character-specific combat time for history, leaderboards and bounty distribution.',
      solves: 'It turns urgent enemy sightings into time-limited, attributable coordination without mixing them into permanent chat.',
      audience: 'Verified guild members acting as guards and administrators configuring the alert role and channel.',
      outcome: 'Know guard eligibility, report types, target rules, cooldowns, thread extension, automatic closure and accumulated battle history.'
    },
    'docs-support.html': {
      label: 'Support explained',
      title: 'Route each private request to responsible staff.',
      introduction: 'Support uses one clean public panel to create private Discord threads. Categories determine who can open a ticket, which questions are required, whether one to four initial JPG, PNG or MP4 files are required and which specialist staff roles can participate alongside global moderators or administrators.',
      solves: 'It keeps sensitive help away from public channels while avoiding a second transcript database for messages and attachments.',
      audience: 'Members opening tickets, staff claiming or collaborating on them and administrators designing categories and access.',
      outcome: 'Understand category setup, required fields, privacy, claims, invited participants, closure, satisfaction rewards and archived access.'
    },
    'docs-staff.html': {
      label: 'Staff systems explained',
      title: 'Separate global authority from specialist responsibility.',
      introduction: 'Luminox recognizes administrators through Discord permissions and moderators through one or more configured global roles. Sensitive systems can then require an additional specialist role so staff access matches real responsibility.',
      solves: 'It avoids giving every moderator access to finance, recruitment, support or guildhall decisions they do not manage.',
      audience: 'Administrators designing staff access and moderators learning which additional role each sensitive feature requires.',
      outcome: 'Understand multiple moderator roles, specialist combinations, internal voting, public applications and administrator oversight.'
    },
    'docs-admin.html': {
      label: 'Administration explained',
      title: 'Operate Luminox safely after installation.',
      introduction: 'Administration is the maintenance layer for verified guild identity, Discord role hierarchy, panel publication, synchronization, retention and recovery. The safest operation is always the lightest command that solves the actual problem.',
      solves: 'It prevents destructive setup reruns, unnecessary full scans and permission failures caused by Discord role hierarchy.',
      audience: 'Discord administrators responsible for configuration, diagnostics, refreshes and long-term maintenance.',
      outcome: 'Know how to audit configuration, assign authority, choose a refresh level, test permissions and stop or back up safely.'
    },
    'docs-automation.html': {
      label: 'Automation explained',
      title: 'Separate cleanup, refresh, retention and backup work.',
      introduction: 'Luminox automates several different kinds of maintenance. Message cleanup, panel redraws, character synchronization, private-response expiry, record retention and local backups have different costs and should not be treated as the same refresh.',
      solves: 'It keeps Discord tidy and data sustainable without repeatedly running the heaviest synchronization path.',
      audience: 'Administrators configuring cleanup or diagnosing stale panels and owners maintaining the Luminox installation.',
      outcome: 'Choose Autodelete modes, understand stable panel behaviour, select the correct refresh and know what data is retained.'
    },
    'docs-website.html': {
      label: 'Website publishing explained',
      title: 'Review community content in Discord before publication.',
      introduction: 'The Website panel handles finished Gallery proposals and long-form Blog drafts inside private Discord threads. Authors write and revise in Discord. Administrators or moderators with both the global Moderator role and specialist Website role review submissions and manage Blog publication; an administrator performs the final publish action for approved Gallery media.',
      solves: 'It creates a moderated contribution route without giving members repository access or downloading arbitrary files onto the bot host.',
      audience: 'Members proposing gallery content, moderators reviewing media and administrators publishing approved website content.',
      outcome: 'Understand supported media, private review, panel health, safe credentials and the exact boundary between approval and publication.'
    },
    'docs-troubleshooting.html': {
      label: 'Troubleshooting explained',
      title: 'Diagnose the layer that failed before forcing recovery.',
      introduction: 'Most visible failures come from one of four layers: Discord permissions, stale panel presentation, interaction timing or external Tibia availability. Troubleshooting begins by identifying that layer instead of immediately running a full synchronization.',
      solves: 'It reduces unnecessary API work and makes permission, cache and archived-thread behaviour easier to distinguish.',
      audience: 'Members reporting a problem, moderators collecting useful context and administrators applying the correct recovery action.',
      outcome: 'Recognize common symptoms, gather the right evidence and use the lightest overview, refresh or synchronization command.'
    },
    'docs-faq.html': {
      label: 'FAQ explained',
      title: 'Resolve common questions without reading every guide.',
      introduction: 'The FAQ gives short practical answers about registration, panels, Loyalty, permissions, archived threads and refreshes. It is an orientation layer: detailed setup and edge cases remain in the linked system guide.',
      solves: 'It answers the first practical question quickly and points the reader to the correct deeper documentation.',
      audience: 'Members, staff and administrators who need a concise answer before opening Support.',
      outcome: 'Understand the most common boundaries and know which command or guide to use next.'
    }
  };

  const command = (what, does, how, access = 'Administrator') => ({ what, does, how, access });
  const panel = (name, does, detail = '') => command(
    `${name} panel setup command.`,
    does,
    `An administrator selects the destination and required options. Luminox validates access, stores the server-specific configuration and publishes or updates the existing ${name} panel instead of changing unrelated systems.${detail ? ` ${detail}` : ''}`
  );
  const overview = (name, does) => command(
    `${name} configuration inspection command.`,
    does,
    'Luminox reads the current server configuration and returns it privately without changing channels, roles, stored records or public panels.'
  );
  const refresh = (name, does) => command(
    `${name} presentation recovery command.`,
    does,
    `Luminox reuses the saved ${name} configuration and redraws or repositions its live panel. Historical records and account data remain unchanged.`
  );

  const commandGuides = {
    '/info': command('Private member account command.', 'Shows the caller’s registered characters, main identity, Loyalty, GuildBank contribution and linked account information.', 'The member runs the command and Luminox builds a private account snapshot from stored data; it does not perform a public lookup or alter the account.', 'Everyone'),
    '/update-all': command('Full server synchronization command.', 'Refreshes every registered character for the current Discord server and reapplies derived identity information.', 'An administrator deliberately starts the heavier synchronization path. Luminox checks registered characters, updates stored snapshots and then reconciles eligible nicknames and managed roles.'),
    '/update': command('Personal identity refresh command.', 'Refreshes the caller’s current main character, nickname and managed guild role.', 'The member runs it when their level, rank or main data changed. Luminox checks only that account’s main identity and applies the result without scanning every registered character.', 'Everyone'),
    '/timezone set': command('Personal timezone configuration command.', 'Stores the caller’s preferred timezone for scheduling and message-time conversion.', 'The member selects a timezone from Discord’s guided options. Luminox saves it on the Discord account and reuses it across events and conversion tools.', 'Everyone'),
    '/whois': command('Verified character lookup command.', 'Shows the registered Discord owner, linked characters and available Tibia, Loyalty and GuildBank information.', 'Enter an exact character name. Luminox checks verified local registration first; unregistered characters receive a limited result and a Tibia.com link.', 'Everyone'),
    'Apps → Convert time': command('Discord message-context action.', 'Converts a time written in another member’s message from the author’s configured timezone into the viewer’s timezone.', 'Open Apps on a message containing a supported time and choose Convert time. Luminox compares both saved zones and returns a short temporary conversion.', 'Everyone'),
    '/install wizard': command('Non-destructive installation assistant.', 'Finds missing foundation settings and directs the administrator to the next required configuration action.', 'The wizard inspects existing settings, preserves completed work and reports missing guild, world, role or panel prerequisites instead of resetting the server.'),
    '/install overview': overview('Installation', 'Shows the selected edition, verified guild, configured roles, channels, panels and remaining setup work.'),
    '/install refresh': refresh('configured public panels', 'Redraws configured panels without starting the heavier registered-character synchronization.'),
    '/guild set': command('Verified guild and world configuration command.', 'Adds, verifies, edits or removes the Tibia guild that defines this Discord server’s membership and allowed world.', 'An administrator enters the guild and completes the Tibia.com verification flow. Luminox stores the verified guild and derives the world used by registration, ranks and membership checks.'),
    '/guild chat': command('Important guild-alert channel command.', 'Assigns the channel used for major guild alerts such as significant Blacklist or enemy outcomes.', 'Select one text channel. Luminox stores it as the high-priority guild destination while dedicated Tracker and moderation logs continue to operate separately.'),
    '/ranks map': command('Guild-rank mapping command.', 'Connects one Tibia guild rank to one Discord role.', 'Select the Tibia rank and Discord role. During synchronization, Luminox compares the verified main character’s guild rank and applies the corresponding managed role.'),
    '/ranks guest': command('Guest-role configuration command.', 'Defines the Discord role for registered characters on the configured world who are not members of the configured guild.', 'Select the Guest role once. Luminox applies it only when an account has a valid registration but no eligible guild character, while preserving unrelated Discord roles.'),
    '/ranks overview': overview('Rank mapping', 'Lists every Tibia-rank mapping and the current Guest-role configuration.'),
    '/moderators roles add': command('Global moderator-role configuration command.', 'Adds one Discord role to the set recognized by Luminox as moderators.', 'Select a role. Members holding any configured moderator role receive shared moderator eligibility, while specialist systems may still require an additional role.'),
    '/moderators roles remove': command('Global moderator-role removal command.', 'Stops one Discord role from granting Luminox moderator eligibility.', 'Select an existing configured role. Luminox removes only the mapping; it does not delete the Discord role or rewrite unrelated specialist roles.'),
    '/moderators roles overview': overview('Moderator roles', 'Shows every Discord role currently recognized as a global Luminox moderator role.'),
    '/transfer account': command('Administrative account-migration command.', 'Moves registered characters and linked Luminox progress from one Discord account to another.', 'An administrator selects the source and destination accounts. Luminox validates the transfer and moves linked records as one operation so progress is not recreated manually.'),
    '/registration set': panel('Registration', 'Assigns the Registration channel and publishes buttons for registration, character management, main selection and timezone.'),
    '/registration refresh': refresh('Registration', 'Restores the existing Registration panel when it was removed, displaced or needs to be redrawn.'),
    '/guildlist set': panel('Guild List', 'Assigns the automatic rank-grouped guild roster with registration state, levels, Loyalty notation and Guild Power.'),
    '/leaderboards set': panel('Leaderboards', 'Assigns the ranking channel and publishes the navigable index used to reach every leaderboard.'),
    '/levels set': panel('Levels', 'Assigns level-up announcements and the rolling Daily Level Gains summary.'),
    '/deaths set': panel('Deaths', 'Assigns verified death announcements and rolling death totals with duplicate protection.'),
    '/watchlist set': panel('Watchlist', 'Assigns either Guild Members Online or Enemies Online to a selected channel.', 'Choose the list type during setup; each type keeps independent channel configuration.'),
    '/watchlist overview': overview('Watchlists', 'Shows the configured Members Online and Enemies Online channels and their current stored settings.'),
    '/finder set': panel('Finder', 'Publishes online team suggestions, Looking for team controls and private match history.'),
    '/guards set': panel('Guards', 'Publishes guard controls and assigns the alert role used by eligible reports and coordination.', 'The selected alert role is stored alongside the channel and is never inferred from its name.'),
    '/guildhall set': panel('Guildhall', 'Publishes property, room, sale-report and room-claim controls and stores the specialist staff role.'),
    '/guildhall overview': overview('Guildhall', 'Shows the configured channel, specialist role, current property, room capacity, occupants and pending requests.'),
    '/guildhall refresh': refresh('Guildhall', 'Restores the final live Guildhall controls while preserving fixed audit embeds above them.'),
    '/events set hunts': panel('Hunt Board', 'Assigns the Hunt channel with vocation composition, shared-experience, signup and scheduling controls.'),
    '/events set bosses': panel('Boss Board', 'Assigns the Boss channel with role-aware party composition and minimum attendance controls.'),
    '/events set quests': panel('Quest Board', 'Assigns the Quest channel where every vocation may join and scheduling may begin after recruitment.'),
    '/events set general': panel('Event Board', 'Assigns the general activity channel for unrestricted guild events and attendance rules.'),
    '/events set': panel('Event Board', 'Assigns one selected Hunt, Boss, Quest or general Event Board to its own channel.'),
    '/loot set': panel('Loot Split', 'Publishes the guided hunt-analyzer and loot-distribution process.'),
    '/loot': command('Retired member-facing loot command.', 'No longer serves as the normal entry point because the Loot Split panel replaces it.', 'Members use the Split loot button in the configured channel. Keeping one panel entry point avoids duplicated command and button workflows.', 'Retired'),
    '/autodelete set': command('Per-channel message-retention command.', 'Creates or edits an Always or Timed cleanup rule for one text channel.', 'Select the channel and mode. Always removes new unpinned messages immediately and cleans older history gradually; Timed removes eligible messages after the chosen age.'),
    '/autodelete disable': command('Autodelete removal command.', 'Disables whichever cleanup rule is active in the selected channel.', 'Select the channel only; Luminox removes its stored rule without requiring the old mode or duration and safely reports when no rule exists.'),
    '/moderation set': panel('Moderation Log', 'Assigns the fixed Discord log for registrations, managed role changes, departures and moderation actions.'),
    '/moderators set voting': panel('Staff Voting', 'Publishes the private staff-only candidate voting panel.'),
    '/moderators set applications': panel('Staff Applications', 'Publishes the public guild-member application and voting panel.'),
    '/guildbank set log': panel('GuildBank', 'Assigns the permanent transaction log and final review control panel.'),
    '/guildbank set treasurer': command('GuildBank specialist-role command.', 'Defines the additional role moderators need to review pending GuildBank operations.', 'Select the Discord role. Administrators retain access automatically; moderators must hold a global moderator role and this configured Treasurer role.'),
    '/guildbank set minimum': command('GuildBank threshold command.', 'Configures the smallest accepted deposit and the accumulated amount required before review.', 'Enter both amounts. Smaller eligible contributions remain attached to the account until their total reaches the review threshold.'),
    '/guildbank overview': overview('GuildBank', 'Shows channel, Treasurer role, thresholds, pending review state and current operating configuration.'),
    '/guildbank refresh': refresh('GuildBank', 'Returns the final review panel to the bottom while preserving permanent transaction embeds.'),
    '/loyalty set': panel('Loyalty', 'Assigns either the public Loyalty activity panel or the Server Boost log according to the selected system type.'),
    '/loyalty messages': command('Message-reward channel command.', 'Enables or disables Loyalty rewards for eligible messages in one text channel.', 'Select the channel and state. Luminox stores the rule and applies the message cooldown only to eligible registered guild accounts; commands and bot interactions do not count.'),
    '/loyalty streams': command('Stream Loyalty channel command.', 'Enables or disables screen-share rewards in one voice channel.', 'Select the voice channel and state. Discord voice events start and stop valid sessions; Luminox applies the minimum duration, proportional minutes and rolling reward limit.'),
    '/loyalty-adjust': command('Manual Loyalty adjustment command.', 'Adds or subtracts points from one eligible account with a mandatory reason.', 'An administrator selects the account, signed point amount and reason. The adjustment becomes a visible history entry instead of silently changing the balance.'),
    '/recruitment set': panel('Recruitment', 'Publishes recruitment reports, reviews, disputes and potential-recruit controls and assigns the specialist role.'),
    '/automod enable': command('Per-channel Automod activation command.', 'Enables Luminox link and restricted-word protection in one selected text channel.', 'Select a channel. Luminox stores it as protected and evaluates future member messages without rewriting Discord permission overwrites.'),
    '/automod disable': command('Per-channel Automod removal command.', 'Stops Luminox Automod processing in one selected channel.', 'Select a protected channel. Other channels, prohibited words and isolation settings remain unchanged.'),
    '/automod overview': overview('Automod', 'Shows protected channels, restricted-word rules and the current temporary isolation duration.'),
    '/automod add-word': command('Automod restricted-language command.', 'Adds one prohibited word or short phrase to the shared message policy.', 'Enter the term. Luminox normalizes spacing and punctuation when checking future messages in protected channels to reduce simple evasion.'),
    '/automod remove-word': command('Automod restricted-language removal command.', 'Removes one existing prohibited term without disabling other protection.', 'Select the configured term. Link protection, remaining words and protected channels continue unchanged.'),
    '/automod isolation': command('Automod sanction-duration command.', 'Sets the temporary Discord isolation applied after a restricted-word violation.', 'Choose the duration and verify it with the overview. Luminox uses the stored duration for future eligible violations.'),
    '/blacklist set': panel('Blacklist', 'Assigns the Blacklist channel and publishes current-world, out-of-world, resolved and staff-management sections.'),
    '/blacklist overview': overview('Blacklist', 'Shows the configured channel and stored character or guild records without refreshing Tibia.'),
    '/banlist set': panel('Ban List', 'Assigns the Ban List channel and publishes timed or unlimited account and character sanctions.'),
    '/banlist overview': overview('Ban List', 'Shows channel configuration and current timed or unlimited sanction records.'),
    '/tracker set': panel('Identity Tracker', 'Assigns permanent identity-change logs and the refreshed recent-event summary.'),
    '/support set': panel('Support', 'Publishes the clean ticket-opening panel and private-thread navigation controls.'),
    '/support category': command('Support category creation command.', 'Creates one ticket category with description, questions, user access and specialist staff roles.', 'An administrator completes the guided fields. Luminox validates role combinations and adds the category to the public selector without changing archived tickets.'),
    '/support edit-category': command('Support category editing command.', 'Changes any detail of an existing category, including questions, visibility and multiple staff roles.', 'Select the category through autocomplete, edit the required fields and save. Existing ticket threads keep their history.'),
    '/support remove-category': command('Support category removal command.', 'Removes one category from future ticket creation.', 'Select the category and confirm. Luminox updates the public panel but does not delete existing archived Discord threads.'),
    '/support overview': overview('Support', 'Shows the panel channel, categories, minimum user access and every specialist staff role.'),
    '/support refresh': refresh('Support', 'Redraws the ticket-opening panel without changing active or archived tickets.'),
    '/website set': panel('Website', 'Publishes the website-status and content-submission panel and stores the public HTTPS address.'),
    '/website staff-role': command('Website specialist-role configuration.', 'Selects the additional role required by non-administrator Website reviewers and publishers.', 'Configure global Moderator roles first. A reviewer must hold one of those roles plus this specialist role; administrators always retain access.'),
    '/website overview': overview('Website', 'Shows website health, panel location, proposal counts and private publishing readiness without exposing credentials.'),
    '/website refresh': refresh('Website', 'Rechecks the public site and edits the existing Website panel in place.'),
    '/website publish': command('Approved Website proposal publishing command.', 'Sends one approved private media or Blog proposal through the configured publishing process.', 'Run it only inside the matching approved proposal thread. Luminox validates administrator access, proposal state and publishing readiness before sending the approved content.'),
    '/register': command('Retired member-facing registration command.', 'No longer serves as the normal registration entry point because the Registration panel contains the full guided flow.', 'Members click Register character, complete timezone when needed and return to the same button after adding the Tibia verification code.', 'Retired')
  };

  const escapeHTML = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const sortedCommandKeys = Object.keys(commandGuides).sort((left, right) => right.length - left.length);

  const resolveCommand = (signature) => {
    const normalized = signature.replace(/\s+/g, ' ').trim();
    const key = sortedCommandKeys.find((candidate) =>
      normalized === candidate || normalized.startsWith(`${candidate} `)
    );
    return key ? { key, signature: normalized, ...commandGuides[key] } : null;
  };

  const renderOrientation = (guide) => {
    const section = document.createElement('section');
    section.className = 'section doc-orientation';
    section.innerHTML = `
      <div class="doc-orientation-copy">
        <p class="eyebrow">${escapeHTML(guide.label)}</p>
        <h2>${escapeHTML(guide.title)}</h2>
        <p>${escapeHTML(guide.introduction)}</p>
      </div>
      <div class="doc-orientation-details">
        <article><span>Why it exists</span><p>${escapeHTML(guide.solves)}</p></article>
        <article><span>Who uses it</span><p>${escapeHTML(guide.audience)}</p></article>
        <article><span>After this guide</span><p>${escapeHTML(guide.outcome)}</p></article>
      </div>`;
    return section;
  };

  const renderCommandCard = (entry) => `
    <article class="doc-command-card">
      <div class="doc-command-card-heading"><code>${escapeHTML(entry.signature)}</code><span>${escapeHTML(entry.access)}</span></div>
      <div><strong>What it is</strong><p>${escapeHTML(entry.what)}</p></div>
      <div><strong>What it does</strong><p>${escapeHTML(entry.does)}</p></div>
      <div><strong>How it works</strong><p>${escapeHTML(entry.how)}</p></div>
    </article>`;

  const addPageOrientation = () => {
    const guide = pageGuides[currentFile];
    const hero = document.querySelector('.page-hero');
    if (!guide || !hero || document.querySelector('.doc-orientation')) return;
    hero.after(renderOrientation(guide));
  };

  const collectPageCommands = () => {
    const entries = [];
    const seen = new Set();
    document.querySelectorAll('main code').forEach((element) => {
      const text = element.textContent.trim();
      if (!text.startsWith('/') && !text.startsWith('Apps →')) return;
      const entry = resolveCommand(text);
      if (!entry || seen.has(entry.key)) return;
      seen.add(entry.key);
      entries.push(entry);
    });
    return entries;
  };

  const addPageCommandGuide = () => {
    if (!currentFile.startsWith('docs')) return;
    const entries = collectPageCommands();
    if (entries.length === 0) return;

    const section = document.createElement('section');
    section.id = 'command-guide';
    section.className = 'doc-section doc-command-guide';
    section.innerHTML = `
      <p class="eyebrow">Command guide</p>
      <h2>Understand each command before using it</h2>
      <p class="doc-command-guide-intro">These commands configure or inspect the system described on this page. Read what each one changes and how Luminox processes it before running it in Discord.</p>
      <div class="doc-command-grid">${entries.map(renderCommandCard).join('')}</div>`;

    const article = document.querySelector('.doc-article');
    if (article) {
      article.prepend(section);
      const toc = document.querySelector('.toc-card');
      const firstLink = toc?.querySelector('a');
      const link = document.createElement('a');
      link.href = '#command-guide';
      link.textContent = 'Command guide';
      if (toc) firstLink ? toc.insertBefore(link, firstLink) : toc.append(link);
      return;
    }

    const orientation = document.querySelector('.doc-orientation');
    orientation?.after(section);
  };

  const enhanceCommandReference = () => {
    if (currentFile !== 'commands.html') return;

    document.querySelectorAll('[data-command-item]').forEach((item) => {
      const signature = item.querySelector('h3 code')?.textContent.trim();
      const description = item.querySelector(':scope > p');
      const entry = signature ? resolveCommand(signature) : null;
      if (!entry || !description) return;

      const details = document.createElement('div');
      details.className = 'command-explanation';
      details.innerHTML = `
        <div><strong>What it is</strong><p>${escapeHTML(entry.what)}</p></div>
        <div><strong>What it does</strong><p>${description.innerHTML}</p></div>
        <div><strong>How it works</strong><p>${escapeHTML(entry.how)}</p></div>`;
      description.replaceWith(details);
      item.classList.add('command-item-explained');
    });

    const hero = document.querySelector('.page-hero');
    if (!hero || document.querySelector('.command-reference-intro')) return;
    const intro = document.createElement('section');
    intro.className = 'section doc-orientation command-reference-intro';
    intro.innerHTML = `
      <div class="doc-orientation-copy"><p class="eyebrow">Command reference explained</p><h2>Commands are configuration tools, not the product itself.</h2><p>Members normally use guided panels. Slash commands configure those panels, inspect the current server or perform deliberate maintenance. Every entry below now explains what the command is, what it changes and how Luminox processes it.</p></div>
      <div class="doc-orientation-details"><article><span>Member commands</span><p>Private identity, timezone and lookup actions available without staff authority.</p></article><article><span>Administrator commands</span><p>Server-specific setup, inspection and recovery actions protected by Discord permissions.</p></article><article><span>Panel-first rule</span><p>If a member feature has a button, that button is the supported entry point instead of a duplicate slash command.</p></article></div>`;
    hero.after(intro);
  };

  addPageOrientation();
  addPageCommandGuide();
  enhanceCommandReference();
})();
