(() => {
  const screenshots = {
    "index.html": {
      eyebrow: "Discord-native by design",
      title: "See Luminox where it actually works.",
      summary: "There is no external dashboard. Luminox lives inside Discord: administrators organize each system by channel, while members use permanent panels, guided buttons and clear live information.",
      tone: "violet",
      layout: "home",
      anchor: ".product-explainer",
      anchorClosest: "section",
      position: "after",
      items: [
        {
          file: "docs-panels-01.png",
          width: 294,
          height: 1107,
          tone: "gold",
          variant: "channel",
          kicker: "Server structure",
          title: "One Discord, clearly organized.",
          lead: "Every workflow has a predictable home.",
          caption: "Support, online intelligence, team activities and guild services remain separated, easy to find and ready for their own permanent panel.",
          alt: "Lumina Discord channel list organized into Home, Support, Online, Team and Services categories."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-events-01.png", width: 599, height: 242, tone: "green",
            kicker: "Universal event panel", title: "Activities begin from one permanent launcher.",
            lead: "Members create or understand an event from two clear buttons.",
            caption: "The same panel-first pattern supports organized activities without asking members to memorize a slash command.",
            alt: "Luminox Hunt Board with Create hunt and Information buttons.", href: "bot-events.html", linkLabel: "See more about Events"
          },
          {
            file: "bot-support-01.png", width: 604, height: 465, tone: "cyan",
            kicker: "Universal support panel", title: "Private support starts from one public panel.",
            lead: "Members open the correct private route without commands.",
            caption: "Required questions, media rules and ticket history remain inside Discord while only the requester and responsible staff enter the private thread.",
            alt: "Luminox Private Support panel with Open ticket and My tickets buttons.", href: "bot-support.html", linkLabel: "See more about Support"
          },
          {
            file: "bot-staff-03.png", width: 649, height: 402, tone: "green",
            kicker: "Applications", title: "Public and private applications stay clearly separated.",
            lead: "Members choose the route that matches their situation.",
            caption: "Public applications remain visible to the community, while private requests continue through the protected Support workflow.",
            alt: "Luminox Applications panel with Public apply and Private apply controls.", href: "bot-staff.html", linkLabel: "See more about Staff systems"
          },
          {
            file: "bot-staff-04.png", width: 612, height: 349, tone: "violet",
            kicker: "Staff voting", title: "Internal candidacies reveal totals, not individual votes.",
            lead: "Authorized staff decide from a purpose-built panel.",
            caption: "Nominations, voting and conclusions remain controlled without publishing who initiated or supported each candidacy.",
            alt: "Luminox Staff Voting panel with candidacy, vote and conclude controls.", href: "bot-staff.html", linkLabel: "Explore Staff voting"
          },
          {
            file: "bot-automation-01.png", width: 643, height: 642, tone: "red",
            kicker: "Automatic reconciliation", title: "Connected records react when membership changes.",
            lead: "Roles, eligibility and rewards remain synchronized.",
            caption: "Luminox explains the resulting role and Loyalty changes in Discord instead of silently rewriting connected data.",
            alt: "Luminox automation log reconciling a guild departure and linked rewards.", href: "bot-automation.html", linkLabel: "See more about Automation"
          },
          {
            file: "bot-events-03.png", width: 513, height: 675, tone: "violet",
            kicker: "Guided event form", title: "Organizers answer only the questions the event needs.",
            lead: "Structured fields replace improvised chat instructions.",
            caption: "Discord validates the title, description, timing and duration before Luminox publishes the live event and planning thread.",
            alt: "Discord form for creating a Luminox event with structured fields.", href: "bot-events.html", linkLabel: "Explore the Event workflow"
          },
          {
            file: "bot-leaderboards-01.png", width: 435, height: 734, tone: "gold",
            kicker: "Leaderboards", title: "Progress stays visible without external spreadsheets.",
            lead: "Rankings refresh where members already communicate.",
            caption: "Multiple categories, movement indicators and navigation keep long competitive lists readable directly in Discord.",
            alt: "Luminox leaderboard index and ranked Discord panels.", href: "bot-leaderboards.html", linkLabel: "See more about Leaderboards"
          },
          {
            file: "bot-guildbank-01.png", width: 560, height: 479, tone: "gold",
            kicker: "GuildBank control", title: "Balance and review actions share one accountable surface.",
            lead: "Members and authorized staff see only the actions they can use.",
            caption: "Current balance, minimums and pending reviews remain below the permanent transaction history for quick daily operation.",
            alt: "Luminox GuildBank Control Panel with Deposit, Withdraw and Clean buttons.", href: "bot-guildbank.html", linkLabel: "See more about GuildBank"
          },
          {
            file: "bot-loyalty-03.png", width: 636, height: 843, tone: "violet",
            kicker: "Loyalty system", title: "Contribution rules and recent rewards remain transparent.",
            lead: "Members understand eligibility before inspecting their profile.",
            caption: "Public activity explains important rewards while each account can open a private progression profile from the same panel.",
            alt: "Luminox Loyalty System panel and recent Loyalty activity.", href: "bot-loyalty.html", linkLabel: "See more about Loyalty"
          },
          {
            file: "bot-loyalty-02.png", width: 613, height: 561, tone: "cyan",
            kicker: "Server Boost Loyalty", title: "Recurring contributions show current and completed value.",
            lead: "Active boosters can see what is earned and what remains pending.",
            caption: "The live panel separates active boosts, completed periods and expected rewards without requiring manual verification.",
            alt: "Luminox Server Boost Loyalty panel with active boosters and rewards.", href: "bot-loyalty.html", linkLabel: "Explore Loyalty rewards"
          },
          {
            file: "bot-finder-01.png", width: 454, height: 1044, tone: "cyan",
            kicker: "Finder", title: "Current online data becomes useful team suggestions.",
            lead: "Members opt into Looking for Team from one live panel.",
            caption: "Luminox ranks compatible matches using information it already maintains, keeping coordination voluntary and inside Discord.",
            alt: "Luminox Finder panel showing online characters and ranked matches.", href: "bot-finder.html", linkLabel: "See more about Finder"
          },
          {
            file: "bot-recruitment-01.png", width: 690, height: 683, tone: "green",
            kicker: "Recruitment panel", title: "Every recruitment claim keeps a visible decision state.",
            lead: "Registration, review, disputes and approval remain distinct.",
            caption: "Compact entries identify the character, recruiter and method while staff controls keep the active queue manageable.",
            alt: "Luminox Recruitment Panel with pending and approved recruitment entries.", href: "bot-recruitment.html", linkLabel: "See more about Recruitment"
          },
          {
            file: "bot-recruitment-02.png", width: 606, height: 777, tone: "cyan",
            kicker: "Potential recruits", title: "Recruiters receive filtered prospects, not an unverified list.",
            lead: "Vocation, level, sanctions and previous outreach are considered first.",
            caption: "Authorized recruiters can coordinate outreach without repeatedly contacting the same unsuitable characters.",
            alt: "Luminox Potential Recruits panel separated by vocation.", href: "bot-recruitment.html", linkLabel: "Explore Recruitment tools"
          },
          {
            file: "bot-moderation-01.png", width: 618, height: 706, tone: "red",
            kicker: "Blacklist", title: "Active intelligence stays separate from resolved history.",
            lead: "Targets retain world, bounty, reason and identity context.",
            caption: "On-world, transferred and resolved sections preserve the moderation decision without mixing inactive targets into live operations.",
            alt: "Luminox Blacklist panel with characters, guilds, bounties and reasons.", href: "bot-moderation.html", linkLabel: "See more about Moderation"
          },
          {
            file: "bot-moderation-02.png", width: 631, height: 374, tone: "gold",
            kicker: "Ban list", title: "Timed and permanent sanctions remain immediately readable.",
            lead: "The panel records who acted, why and for how long.",
            caption: "Authorized controls maintain the list while the public result remains compact enough for quick staff verification.",
            alt: "Luminox Ban List panel showing reasons, executors and expiration.", href: "bot-moderation.html", linkLabel: "Explore Moderation lists"
          },
          {
            file: "bot-guards-01.png", width: 634, height: 459, tone: "red",
            kicker: "Guards", title: "Guard duty, sightings and battles use different actions.",
            lead: "The panel explains every report before it starts.",
            caption: "Authorized members can activate duty or open the appropriate enemy report while automatic expiration prevents stale active states.",
            alt: "Luminox Guards panel with guard, enemy and battle report controls.", href: "bot-guards.html", linkLabel: "See more about Guards"
          },
          {
            file: "bot-guildhall-01.png", width: 638, height: 328, tone: "gold",
            kicker: "Guildhall", title: "Rooms and requests stay organized in one property panel.",
            lead: "Members claim rooms while authorized staff maintain availability.",
            caption: "Room definitions, occupants and pending requests remain clear without maintaining a separate spreadsheet.",
            alt: "Luminox Guildhall panel with room management and claim controls.", href: "bot-guildhall.html", linkLabel: "See more about Guildhall"
          },
          {
            file: "bot-loot-02.png", width: 438, height: 233, tone: "gold",
            kicker: "Loot Split", title: "One button starts the complete split workflow.",
            lead: "Members paste the analyzer output into a guided private flow.",
            caption: "The permanent launcher replaces repeated instructions while keeping an explanation available for first-time users.",
            alt: "Luminox Loot Split panel with Split loot and How it works buttons.", href: "bot-loot.html", linkLabel: "See more about Loot Split"
          },
          {
            file: "bot-loot-03.png", width: 797, height: 830, tone: "green",
            kicker: "Loot result", title: "Final balances and transfers arrive already structured.",
            lead: "The result remains understandable after the hunt ends.",
            caption: "Participants, balances, transfers and optional GuildBank contribution context share one accountable Discord result.",
            alt: "Luminox final loot split result with balances and transfers.", href: "bot-loot.html", linkLabel: "Explore Loot results"
          },
          {
            file: "bot-watchlists-01.png", width: 420, height: 255, tone: "violet",
            kicker: "Members online", title: "The guild sees who is active right now.",
            lead: "Character, session and recent progress remain compact.",
            caption: "The channel count and live panel use the same cached snapshot so members can coordinate around a consistent roster.",
            alt: "Luminox Guild Members Online panel.", href: "bot-watchlists.html", linkLabel: "See more about Online lists"
          },
          {
            file: "bot-watchlists-02.png", width: 617, height: 293, tone: "red",
            kicker: "Enemies online", title: "Threat context appears beside every active target.",
            lead: "Bounty and blacklist reasons remain visible at a glance.",
            caption: "Individual targets and tracked guild totals help authorized teams understand current online risk without another dashboard.",
            alt: "Luminox Enemies Online panel with bounties and blacklist reasons.", href: "bot-watchlists.html", linkLabel: "Explore Watchlists"
          },
          {
            file: "bot-tracker-01.png", width: 639, height: 864, tone: "cyan",
            kicker: "Identity tracker", title: "Important identity changes become permanent events.",
            lead: "Transfers, trades and returns remain part of the record.",
            caption: "Fixed Discord messages preserve what changed while one refreshed panel summarizes the newest activity without duplication.",
            alt: "Luminox Character Tracker log and recent-event panel.", href: "bot-tracker.html", linkLabel: "See more about Tracker"
          },
          {
            file: "bot-progression-02.png", width: 774, height: 1052, tone: "green",
            kicker: "Progression", title: "Individual advances stay above one rolling progress panel.",
            lead: "Daily, monthly and yearly totals remain in the correct order.",
            caption: "Members can follow current progression while permanent level announcements remain preserved in the same Discord channel.",
            alt: "Luminox level-up announcements and Daily Level Gains panel.", href: "bot-progression.html", linkLabel: "See more about Progression"
          },
          {
            file: "bot-leaderboards-02.png", width: 363, height: 718, tone: "violet",
            kicker: "Ranking detail", title: "Long leaderboards remain navigable across multiple messages.",
            lead: "Navigation links return members to the index or top instantly.",
            caption: "Luminox keeps large rankings compact and ordered without sacrificing the context behind each position.",
            alt: "Multi-message Luminox leaderboard with navigation links.", href: "bot-leaderboards.html", linkLabel: "Explore ranking detail"
          },
          {
            file: "bot-loyalty-01.png", width: 607, height: 495, tone: "violet",
            kicker: "Loyalty activity", title: "Positive rewards and reversals share one clear history.",
            lead: "Every important point change includes its reason.",
            caption: "Grouped rewards and proportional reversals remain transparent without flooding the public channel with repetitive entries.",
            alt: "Luminox Loyalty Activity panel with rewards and a reversal.", href: "bot-loyalty.html", linkLabel: "Explore Loyalty history"
          }
        ]
      }
    },
    "bot-automation.html": {
      eyebrow: "Real Discord output",
      title: "Automation leaves a readable audit trail.",
      summary: "When membership changes, Luminox can reconcile access, update linked rewards and explain the result in the configured Discord log instead of silently changing data.",
      tone: "red",
      items: [
        {
          file: "bot-automation-01.png",
          width: 643,
          height: 642,
          tone: "red",
          kicker: "Automatic reconciliation",
          title: "A guild departure updates connected systems.",
          lead: "Roles, eligibility and protected rewards stay synchronized.",
          caption: "This log records the departed character, the account transition, Discord role changes and the proportional Loyalty adjustment in one traceable outcome.",
          alt: "Discord log showing Luminox reconciling a member who left the guild, changing roles and adjusting a recruitment reward."
        }
      ]
    },
    "bot-events.html": {
      eyebrow: "From board to creation",
      title: "Every event starts from a guided Discord flow.",
      summary: "Permanent boards keep creation easy to find. The organizer then completes a focused form instead of constructing an event manually in chat.",
      tone: "green",
      items: [
        {
          file: "bot-events-01.png",
          width: 599,
          height: 242,
          tone: "green",
          variant: "compact",
          kicker: "Hunt board",
          title: "Create hunts from a permanent panel.",
          lead: "The channel always ends with the correct starting point.",
          caption: "Members can open the hunt suite or read its information without memorizing a command or searching through old messages.",
          alt: "Luminox Hunt Board in Discord with Create hunt and Information buttons."
        },
        {
          file: "bot-events-02.png",
          width: 595,
          height: 239,
          tone: "gold",
          variant: "compact",
          kicker: "Boss board",
          title: "Each activity keeps its own context.",
          lead: "Boss events use a dedicated board with the same familiar pattern.",
          caption: "Separate Hunt, Boss, Quest and general Event channels make the system predictable while preserving type-specific questions and rules.",
          alt: "Luminox Boss Board in Discord with Create boss and Information buttons."
        },
        {
          file: "bot-events-03.png",
          width: 513,
          height: 675,
          tone: "violet",
          variant: "portrait",
          wide: true,
          kicker: "Guided form",
          title: "The organizer answers only the necessary questions.",
          lead: "Title, description, timing and duration stay structured.",
          caption: "Discord validates required fields before Luminox publishes the live event card and opens the connected planning thread.",
          alt: "Discord modal for creating a Luminox hunt with title, description, start time and duration fields."
        }
      ]
    },
    "bot-finder.html": {
      eyebrow: "Live team intelligence",
      title: "Useful matches appear where members already coordinate.",
      summary: "Finder converts current online information into voluntary Looking for Team status and ranked compatible groups without creating a separate website workflow.",
      tone: "cyan",
      items: [
        {
          file: "bot-finder-01.png",
          width: 454,
          height: 1044,
          tone: "cyan",
          variant: "portrait",
          kicker: "Finder panel",
          title: "Online characters become practical team suggestions.",
          lead: "Matches are ranked and explained inside the panel.",
          caption: "Members can join the Looking for Team list, inspect suitable pairings and use the current online data Luminox already maintains.",
          alt: "Tall Luminox Finder panel in Discord showing online characters, Looking for Team status and ranked matches."
        }
      ]
    },
    "bot-guards.html": {
      eyebrow: "Alerts with accountability",
      title: "Active reports and permanent battle history stay connected.",
      summary: "The control panel starts guard duty and enemy reports. Final records preserve who fought, for how long and what happened to the tracked enemy.",
      tone: "red",
      items: [
        {
          file: "bot-guards-01.png",
          width: 634,
          height: 459,
          tone: "red",
          kicker: "Guards control panel",
          title: "Reporting begins from clear authorized actions.",
          lead: "Guard activation, sightings and battles use separate controls.",
          caption: "The panel explains role requirements, automatic expiration and how battle reports differ from normal enemy sightings.",
          alt: "Luminox Guards panel in Discord explaining guard activation, enemy reports and battle reports."
        },
        {
          file: "bot-guards-02.png",
          width: 630,
          height: 697,
          tone: "gold",
          variant: "portrait",
          kicker: "Defeated history",
          title: "Resolved enemies retain a final record.",
          lead: "Outcome, bounty and guard time remain available after resolution.",
          caption: "Completely defeated entries preserve the transfer or deletion outcome and the final proportional bounty context without keeping the enemy active.",
          alt: "Luminox Completely Defeated panel showing a transferred enemy, bounty and guard battle history."
        }
      ]
    },
    "bot-guildbank.html": {
      eyebrow: "A real control surface",
      title: "Balance, review and member actions meet in one panel.",
      summary: "The final GuildBank message remains below its permanent history, giving members an obvious place to deposit while staff retain controlled review and maintenance actions.",
      tone: "gold",
      items: [
        {
          file: "bot-guildbank-01.png",
          width: 560,
          height: 479,
          tone: "gold",
          kicker: "GuildBank panel",
          title: "Current state first. Permanent history above.",
          lead: "Large balances, minimums and review status remain easy to scan.",
          caption: "Members use Deposit, while authorized treasurers or administrators receive the additional Withdraw and Clean controls defined by server configuration.",
          alt: "Luminox GuildBank Control Panel showing balance, review deadline, minimums and Deposit, Withdraw and Clean buttons."
        }
      ]
    },
    "bot-guildhall.html": {
      eyebrow: "Property management in Discord",
      title: "One panel follows the guildhall and every room request.",
      summary: "Members can report available properties or claim configured rooms, while specialist staff manage capacity, occupants and pending decisions from the same channel.",
      tone: "green",
      items: [
        {
          file: "bot-guildhall-01.png",
          width: 638,
          height: 328,
          tone: "green",
          variant: "compact",
          kicker: "Guildhall panel",
          title: "Availability remains visible before the first room exists.",
          lead: "The empty state is operational, not a dead end.",
          caption: "The panel still exposes reporting and staff controls, shows configured capacity and becomes the entry point for future room claims.",
          alt: "Luminox Guildhall panel showing no property configured, room totals and Guildhall action buttons."
        }
      ]
    },
    "bot-leaderboards.html": {
      eyebrow: "Progress members can inspect",
      title: "Different achievements share one consistent ranking format.",
      summary: "Paginated Discord leaderboards keep long rankings readable and let the guild compare character progression, activity and contribution without spreadsheets.",
      tone: "cyan",
      items: [
        {
          file: "bot-leaderboards-01.png",
          width: 435,
          height: 734,
          tone: "violet",
          variant: "portrait",
          kicker: "Top level",
          title: "Character progression stays ranked and current.",
          lead: "Level, vocation and Loyalty context appear together.",
          caption: "Position movement is retained across valid refreshes so members can understand not only who leads, but who is climbing.",
          alt: "Luminox Top Level leaderboard in Discord with character vocations, levels, Loyalty levels and position changes."
        },
        {
          file: "bot-leaderboards-02.png",
          width: 363,
          height: 718,
          tone: "cyan",
          variant: "portrait",
          kicker: "Hours played",
          title: "Activity rankings use the same readable structure.",
          lead: "Rolling time windows turn raw sessions into useful comparisons.",
          caption: "Members can inspect playtime without a separate tracker interface, while the panel remains compact enough for Discord and mobile use.",
          alt: "Luminox Hours Played leaderboard for the last 30 days in Discord."
        }
      ]
    },
    "bot-loot.html": {
      eyebrow: "Calculation you can verify",
      title: "The party receives a complete result, not a hidden number.",
      summary: "Luminox turns the pasted analyzer into balances, transfers and contribution choices that every participant can inspect directly in Discord.",
      tone: "gold",
      items: [
        {
          file: "bot-loot-01.png",
          width: 766,
          height: 891,
          tone: "gold",
          variant: "portrait",
          kicker: "Complete split",
          title: "Every transfer is derived from the same hunt summary.",
          lead: "The result identifies who started and who confirms the transfer.",
          caption: "Final balances, payment direction and optional GuildBank contribution remain together so the party can verify the calculation before acting.",
          alt: "Detailed Luminox Loot Split result in Discord with hunt summary, balances and transfers."
        },
        {
          file: "bot-loot-03.png",
          width: 797,
          height: 830,
          tone: "cyan",
          variant: "portrait",
          kicker: "Recent example",
          title: "The same flow scales to each new hunt.",
          lead: "Duration, total balance and per-member transfers remain explicit.",
          caption: "A new session produces an independent readable result while the configured panel and log navigation stay in the channel.",
          alt: "Recent Luminox Loot Split result showing hunt duration, balances, transfers and contribution controls."
        }
      ]
    },
    "docs-loot.html": {
      eyebrow: "What members see",
      title: "The permanent panel starts the entire Loot flow.",
      summary: "After administrators publish the channel, members click one button to paste a Tibia session log. Information remains available beside the action for first-time users.",
      tone: "gold",
      anchor: ".docs-layout",
      position: "before",
      items: [
        {
          file: "bot-loot-02.png",
          width: 438,
          height: 233,
          tone: "gold",
          variant: "compact",
          kicker: "Member launcher",
          title: "Split loot begins without a slash command.",
          lead: "One permanent panel replaces repeated instructions.",
          caption: "The action opens the guided private flow, while How it works explains the expected analyzer input before the member starts.",
          alt: "Compact Luminox Loot Split panel with Split loot and How it works buttons."
        }
      ]
    },
    "bot-loyalty.html": {
      eyebrow: "Transparent account progression",
      title: "Rewards and long-term contributions remain explainable.",
      summary: "Public activity shows why important point changes happened, while connected panels track recurring contributions such as continuous Discord Server Boost periods.",
      tone: "violet",
      items: [
        {
          file: "bot-loyalty-01.png",
          width: 607,
          height: 495,
          tone: "violet",
          kicker: "Loyalty activity",
          title: "Positive and reversed rewards share one history.",
          lead: "Every important point change includes its reason.",
          caption: "Grouped boosts, recruitment rewards and proportional reversals remain understandable without flooding the public channel with repetitive entries.",
          alt: "Luminox Loyalty Activity panel showing positive rewards and a reversed recruitment reward with reasons."
        },
        {
          file: "bot-loyalty-02.png",
          width: 613,
          height: 561,
          tone: "cyan",
          kicker: "Server Boost Loyalty",
          title: "Continuous boosts show current and completed value.",
          lead: "Active contributors are ranked with their reward timing.",
          caption: "The panel separates active boosts, total completed periods and expected rewards so members can understand what is earned now and what remains pending.",
          alt: "Luminox Server Boost Loyalty panel with active boosters, attributed boosts and reward information."
        }
      ]
    },
    "docs-loyalty.html": {
      eyebrow: "What members read first",
      title: "The Loyalty panel explains eligibility before showing rewards.",
      summary: "Members can understand who earns points, where progress belongs and how to open their private profile before they inspect the detailed history.",
      tone: "violet",
      anchor: ".docs-layout",
      position: "before",
      items: [
        {
          file: "bot-loyalty-03.png",
          width: 636,
          height: 843,
          tone: "violet",
          variant: "portrait",
          kicker: "Loyalty system panel",
          title: "Rules and recent activity live together.",
          lead: "The panel introduces the account model before the ranking begins.",
          caption: "Members see eligibility, private-profile guidance and the first page of meaningful guild rewards in one consistent Discord destination.",
          alt: "Luminox Loyalty System information and Loyalty Activity history in Discord."
        }
      ]
    },
    "bot-moderation.html": {
      eyebrow: "Visible moderation records",
      title: "Blacklist intelligence and server bans remain distinct.",
      summary: "Each list communicates a different risk model while preserving the target, reason, executor, duration and authorized controls needed to maintain it.",
      tone: "red",
      items: [
        {
          file: "bot-moderation-01.png",
          width: 618,
          height: 706,
          tone: "red",
          variant: "portrait",
          kicker: "Blacklist",
          title: "Characters and guilds retain live Tibia context.",
          lead: "World, bounty, reason and identity state stay visible.",
          caption: "On-world, transferred and resolved sections keep active intelligence separate without deleting the historical moderation decision.",
          alt: "Luminox Blacklist panel in Discord listing blacklisted characters and guilds with bounty and reasons."
        },
        {
          file: "bot-moderation-02.png",
          width: 631,
          height: 374,
          tone: "gold",
          variant: "compact",
          kicker: "Ban List",
          title: "Timed and unlimited bans are immediately readable.",
          lead: "The record explains who applied the sanction and for how long.",
          caption: "Authorized controls add, edit or lift a ban while the public panel remains compact enough for quick staff verification.",
          alt: "Luminox Ban List panel showing active bans, reasons, executors and expiration."
        }
      ]
    },
    "bot-progression.html": {
      eyebrow: "Guild progress in context",
      title: "Roster state and daily advances stay visible together.",
      summary: "Luminox uses the verified guild data it already maintains to publish a rank-grouped roster and a rolling view of recent level gains.",
      tone: "cyan",
      items: [
        {
          file: "bot-progression-01.png",
          width: 569,
          height: 740,
          tone: "violet",
          variant: "portrait",
          kicker: "Guild List",
          title: "The full roster carries operational context.",
          lead: "Rank, registration, character data and guild power share one view.",
          caption: "Leadership and members can inspect who is registered, which role each character holds and how the complete guild is distributed across pages.",
          alt: "Luminox Lumina Guild List in Discord grouped by guild rank with registration and character information."
        },
        {
          file: "bot-progression-02.png",
          width: 774,
          height: 1052,
          tone: "green",
          variant: "portrait",
          kicker: "Level gains",
          title: "Announcements and rolling totals stay in the correct order.",
          lead: "Individual advances remain above the refreshed daily list.",
          caption: "Members see the latest level messages and a complete rolling panel with daily, monthly and yearly progress without losing the permanent channel history.",
          alt: "Luminox Discord level-up announcements followed by Daily Level Gains panels."
        }
      ]
    },
    "bot-recruitment.html": {
      eyebrow: "Recruitment without guesswork",
      title: "Claims and outreach remain visible but separate.",
      summary: "The Recruitment Panel follows reported members through registration and review, while Potential Recruits helps authorized recruiters contact suitable guildless characters without repeating old outreach.",
      tone: "green",
      items: [
        {
          file: "bot-recruitment-01.png",
          width: 690,
          height: 683,
          tone: "green",
          variant: "portrait",
          kicker: "Recruitment Panel",
          title: "Every report shows its current decision state.",
          lead: "Awaiting registration, review, dispute and approval remain distinct.",
          caption: "Compact entries identify the character, recruiter and method while summary counts and staff controls keep the review queue manageable.",
          alt: "Luminox Recruitment Panel showing awaiting registration, pending, disputed and provisionally approved recruitment entries."
        },
        {
          file: "bot-recruitment-02.png",
          width: 606,
          height: 777,
          tone: "cyan",
          variant: "portrait",
          kicker: "Potential Recruits",
          title: "Current prospects are filtered before staff contact them.",
          lead: "Vocation, level, sanctions and previous outreach are already considered.",
          caption: "Recruiters receive verified guildless characters currently online on the configured world, separated by vocation and ready for controlled contact tracking.",
          alt: "Luminox Potential Recruits panel listing verified guildless online characters separated by vocation."
        }
      ]
    },
    "bot-staff.html": {
      eyebrow: "Two paths into staff",
      title: "Public applications and private voting stay deliberate.",
      summary: "Members can present themselves through a public application, while existing staff use a separate anonymous nomination and voting process for internal candidates.",
      tone: "violet",
      items: [
        {
          file: "bot-staff-03.png",
          width: 649,
          height: 402,
          tone: "green",
          variant: "compact",
          kicker: "Applications",
          title: "Members choose public or private contact.",
          lead: "A registered main anchors the public candidacy.",
          caption: "The panel explains visibility and voting before the member starts, while Private apply routes confidential requests through Support.",
          alt: "Luminox Applications panel with Public apply, Private apply, Vote and Conclude buttons."
        },
        {
          file: "bot-staff-04.png",
          width: 612,
          height: 349,
          tone: "violet",
          variant: "compact",
          kicker: "Staff Voting",
          title: "Internal nominations reveal totals, not voters.",
          lead: "Configured staff can nominate, vote and conclude privately.",
          caption: "Candidate identity and vote totals remain visible to the authorized team without publishing who initiated or supported the candidacy.",
          alt: "Luminox Staff Voting panel with Start candidacy, Vote and Conclude buttons."
        }
      ]
    },
    "docs-staff.html": {
      eyebrow: "Discord structure in practice",
      title: "Staff channels and application controls stay purpose-specific.",
      summary: "The role hierarchy determines who can access internal spaces; the visible panel then exposes only the decisions appropriate to that staff workflow.",
      tone: "violet",
      anchor: ".docs-layout",
      position: "before",
      items: [
        {
          file: "bot-staff-01.png",
          width: 291,
          height: 345,
          tone: "gold",
          variant: "portrait",
          kicker: "Staff channel structure",
          title: "Internal spaces remain separated by responsibility.",
          lead: "Changes, guides, staff logs, bans and promotions do not compete in one channel.",
          caption: "Discord permissions and Luminox specialist roles work together to keep sensitive workflows visible only to the correct team.",
          alt: "Discord staff category showing changes, guides, staff, log, bans and promotions channels."
        },
        {
          file: "bot-staff-02.png",
          width: 605,
          height: 402,
          tone: "green",
          variant: "compact",
          kicker: "Application controls",
          title: "The panel explains the decision before it opens.",
          lead: "Public and private routes remain clearly separated.",
          caption: "Members see who can vote and what remains anonymous, while authorized staff receive the controls needed to conclude the process.",
          alt: "Luminox Applications panel explaining public applications, private applications and anonymous guild voting."
        }
      ]
    },
    "bot-support.html": {
      eyebrow: "Private by default",
      title: "The public panel opens a private support conversation.",
      summary: "Members choose a category and complete its required questions from one permanent entry point. Luminox then creates a private thread for the requester and responsible staff.",
      tone: "cyan",
      items: [
        {
          file: "bot-support-01.png",
          width: 604,
          height: 465,
          tone: "cyan",
          kicker: "Private Support",
          title: "Members understand the process before opening a ticket.",
          lead: "Required answers, media and privacy are explained in advance.",
          caption: "Open ticket starts a new guided request, while My tickets returns the member to open or archived conversations linked to the same account.",
          alt: "Luminox Private Support panel explaining ticket creation, privacy and Open ticket and My tickets buttons."
        }
      ]
    },
    "bot-tracker.html": {
      eyebrow: "Identity changes preserved",
      title: "Permanent events sit above one refreshed tracker panel.",
      summary: "Transfers, trades, renames, returns and resolved blacklist identities remain readable as fixed Discord events while the final panel summarizes the newest activity.",
      tone: "cyan",
      items: [
        {
          file: "bot-tracker-01.png",
          width: 639,
          height: 864,
          tone: "cyan",
          variant: "portrait",
          kicker: "Character Tracker Log",
          title: "World transfers remain part of the historical record.",
          lead: "Fixed event messages preserve what changed and when.",
          caption: "The recent-event panel below them stays updated without rewriting old evidence or creating duplicate historical messages.",
          alt: "Luminox Character Tracker Log with world transfer events and a refreshed recent events panel."
        }
      ]
    },
    "bot-watchlists.html": {
      eyebrow: "Live information at a glance",
      title: "Guild activity and enemy risk use separate online views.",
      summary: "The panels reuse the same current world data but present different operational context: member sessions and gains for the guild, bounty and blacklist reasons for enemies.",
      tone: "red",
      items: [
        {
          file: "bot-watchlists-01.png",
          width: 420,
          height: 255,
          tone: "violet",
          variant: "compact",
          kicker: "Guild Members Online",
          title: "The guild sees who is active right now.",
          lead: "Character, vocation, session and recent gains remain compact.",
          caption: "The channel count and panel share the same cached snapshot so members can coordinate around the current online roster.",
          alt: "Luminox Guild Members Online panel showing six online characters, power and recent level gains."
        },
        {
          file: "bot-watchlists-02.png",
          width: 617,
          height: 293,
          tone: "red",
          variant: "compact",
          kicker: "Enemies Online",
          title: "Threat context appears beside every online target.",
          lead: "Bounty, character data and blacklist reason stay visible.",
          caption: "Blacklisted guild totals use the same panel so guards can understand both individual enemies and the online power of tracked groups.",
          alt: "Luminox Enemies Online panel showing blacklisted characters, bounties, reasons and blacklisted guilds online."
        }
      ]
    },
    "docs-panels.html": {
      eyebrow: "A panel-first server",
      title: "Channel structure makes every published panel easier to find.",
      summary: "Administrators decide where each system belongs once. Members then return to the same predictable Discord destination whenever they need Registration, Support, Events or guild services.",
      tone: "gold",
      anchor: ".docs-layout",
      position: "before",
      items: [
        {
          file: "docs-panels-01.png",
          width: 294,
          height: 1107,
          tone: "gold",
          variant: "portrait",
          kicker: "Example server map",
          title: "Panels become part of the Discord architecture.",
          lead: "Categories separate public entry points, live information and guild operations.",
          caption: "This example is not a required template: each server chooses its own channels, then Luminox publishes or refreshes the relevant permanent panel there.",
          alt: "Full Lumina Discord channel map separated into Home, Support, Online, Team and Services categories."
        }
      ]
    }
  };

  const currentPath = window.location.pathname.split("/").pop();
  const pageName = currentPath || "index.html";
  const config = screenshots[pageName];
  const main = document.querySelector("main");

  if (!config || !main || main.querySelector("[data-screenshot-showcase]")) return;

  const headingId = `discord-showcase-${pageName.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
  const section = document.createElement("section");
  section.className = `section product-screenshot-showcase product-screenshot-showcase--${config.tone || "violet"}`;
  section.dataset.screenshotShowcase = pageName;
  section.setAttribute("aria-labelledby", headingId);

  const cards = config.items.map((item, index) => {
    const classes = ["discord-screenshot-card", `discord-screenshot-card--${item.tone || config.tone || "violet"}`];
    if (item.variant) classes.push(`discord-screenshot-card--${item.variant}`);
    if (item.wide) classes.push("discord-screenshot-card--wide");

    return `
      <figure class="${classes.join(" ")}">
        <header class="discord-screenshot-card__header">
          <div>
            <span class="discord-screenshot-card__kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="discord-screenshot-card__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        </header>
        <div class="discord-screenshot-card__media">
          <img class="discord-screenshot-card__image" src="assets/screenshots/${item.file}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" alt="${item.alt}">
        </div>
        <figcaption class="discord-screenshot-card__caption">
          <p><strong>${item.lead}</strong><span>${item.caption}</span></p>
        </figcaption>
      </figure>`;
  }).join("");

  const gallerySlides = config.gallery?.slides || [];
  const initialGallerySlide = gallerySlides[0];
  const galleryCard = initialGallerySlide ? `
    <article class="discord-screenshot-card discord-screenshot-gallery discord-screenshot-card--${initialGallerySlide.tone || config.tone || "violet"}" data-screenshot-gallery>
      <header class="discord-screenshot-card__header discord-screenshot-gallery__header">
        <div>
          <span class="discord-screenshot-card__kicker" data-gallery-kicker>${initialGallerySlide.kicker}</span>
          <h3 data-gallery-title>${initialGallerySlide.title}</h3>
        </div>
        <span class="discord-screenshot-card__number discord-screenshot-gallery__counter" data-gallery-counter aria-label="Screenshot 1 of ${gallerySlides.length}">01/${String(gallerySlides.length).padStart(2, "0")}</span>
      </header>
      <div class="discord-screenshot-gallery__stage" data-gallery-panel role="tabpanel" aria-live="polite" style="--gallery-aspect: ${initialGallerySlide.width} / ${initialGallerySlide.height}; --gallery-stage-width: ${Math.min(900, Math.round((initialGallerySlide.width / initialGallerySlide.height) * 520))}px">
        <img class="discord-screenshot-gallery__image" data-gallery-image src="assets/screenshots/${initialGallerySlide.file}" width="${initialGallerySlide.width}" height="${initialGallerySlide.height}" decoding="async" fetchpriority="low" alt="${initialGallerySlide.alt}">
      </div>
      <div class="discord-screenshot-gallery__detail">
        <span class="discord-screenshot-gallery__detail-line" aria-hidden="true"></span>
        <p><strong data-gallery-lead>${initialGallerySlide.lead}</strong><span data-gallery-caption>${initialGallerySlide.caption}</span></p>
        <a class="discord-screenshot-gallery__link" data-gallery-link href="${initialGallerySlide.href}"><span data-gallery-link-label>${initialGallerySlide.linkLabel}</span><span aria-hidden="true">↗</span></a>
      </div>
      <div class="discord-screenshot-gallery__selector">
        <div class="discord-screenshot-gallery__selector-header">
          <div><span>Interactive preview</span><strong>Explore ${gallerySlides.length} real panels</strong></div>
          <div class="discord-screenshot-gallery__controls" aria-label="Screenshot controls">
            <button type="button" data-gallery-prev aria-label="Previous screenshot">←</button>
            <button type="button" data-gallery-next aria-label="Next screenshot">→</button>
          </div>
        </div>
        <div class="discord-screenshot-gallery__track" data-gallery-track role="tablist" aria-label="Choose a Discord panel">
          ${gallerySlides.map((slide, index) => `
            <button class="discord-screenshot-gallery__thumbnail${index === 0 ? " is-active" : ""}" type="button" role="tab" data-gallery-index="${index}" aria-label="Show ${slide.kicker}" aria-selected="${index === 0 ? "true" : "false"}" tabindex="${index === 0 ? "0" : "-1"}">
              <img src="assets/screenshots/thumbs/${slide.file.replace(/\.png$/i, ".webp")}" width="180" height="128" decoding="async" alt="">
            </button>`).join("")}
        </div>
      </div>
    </article>` : "";

  const gridClasses = ["discord-screenshot-grid"];
  if (config.items.length + (initialGallerySlide ? 1 : 0) === 1) gridClasses.push("discord-screenshot-grid--single");
  if (config.layout) gridClasses.push(`discord-screenshot-grid--${config.layout}`);

  section.innerHTML = `
    <div class="screenshot-showcase-header">
      <div class="screenshot-showcase-heading">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2 id="${headingId}">${config.title}</h2>
      </div>
      <p class="screenshot-showcase-summary"><strong>Real Discord captures.</strong> ${config.summary}</p>
    </div>
    <div class="${gridClasses.join(" ")}">${cards}${galleryCard}</div>`;

  let anchor = config.anchor ? document.querySelector(config.anchor) : null;
  if (anchor && config.anchorClosest) anchor = anchor.closest(config.anchorClosest);
  if (!anchor) anchor = main.querySelector(".conversion-cta")?.closest("section") || null;

  if (anchor && config.position === "after") anchor.after(section);
  else if (anchor) anchor.before(section);
  else main.append(section);

  const gallery = section.querySelector("[data-screenshot-gallery]");
  if (gallery && gallerySlides.length) {
    const toneValues = {
      gold: "243, 204, 99",
      cyan: "86, 199, 245",
      green: "94, 225, 157",
      red: "251, 113, 133",
      violet: "139, 92, 246"
    };
    const image = gallery.querySelector("[data-gallery-image]");
    const stage = gallery.querySelector("[data-gallery-panel]");
    const kicker = gallery.querySelector("[data-gallery-kicker]");
    const title = gallery.querySelector("[data-gallery-title]");
    const lead = gallery.querySelector("[data-gallery-lead]");
    const caption = gallery.querySelector("[data-gallery-caption]");
    const link = gallery.querySelector("[data-gallery-link]");
    const linkLabel = gallery.querySelector("[data-gallery-link-label]");
    const counter = gallery.querySelector("[data-gallery-counter]");
    const track = gallery.querySelector("[data-gallery-track]");
    const tabs = Array.from(gallery.querySelectorAll("[data-gallery-index]"));
    let selectedIndex = 0;
    let selectionToken = 0;

    const selectSlide = (nextIndex, moveFocus = false) => {
      const index = (nextIndex + gallerySlides.length) % gallerySlides.length;
      const slide = gallerySlides[index];
      const token = ++selectionToken;
      selectedIndex = index;
      gallery.classList.add("is-changing");
      gallery.style.setProperty("--shot-accent", toneValues[slide.tone] || toneValues.violet);
      kicker.textContent = slide.kicker;
      title.textContent = slide.title;
      lead.textContent = slide.lead;
      caption.textContent = slide.caption;
      link.href = slide.href;
      linkLabel.textContent = slide.linkLabel;
      counter.textContent = `${String(index + 1).padStart(2, "0")}/${String(gallerySlides.length).padStart(2, "0")}`;
      counter.setAttribute("aria-label", `Screenshot ${index + 1} of ${gallerySlides.length}`);

      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === index;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });

      const activeTab = tabs[index];
      activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      if (moveFocus) activeTab.focus({ preventScroll: true });

      const preload = new Image();
      const applyImage = () => {
        if (token !== selectionToken) return;
        image.src = `assets/screenshots/${slide.file}`;
        image.width = slide.width;
        image.height = slide.height;
        image.alt = slide.alt;
        stage.style.setProperty("--gallery-aspect", `${slide.width} / ${slide.height}`);
        stage.style.setProperty("--gallery-stage-width", `${Math.min(900, Math.round((slide.width / slide.height) * 520))}px`);
        gallery.classList.remove("is-changing");
      };
      preload.addEventListener("load", applyImage, { once: true });
      preload.addEventListener("error", applyImage, { once: true });
      preload.src = `assets/screenshots/${slide.file}`;
      if (preload.complete) applyImage();
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => selectSlide(Number(tab.dataset.galleryIndex)));
    });
    gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => selectSlide(selectedIndex - 1));
    gallery.querySelector("[data-gallery-next]").addEventListener("click", () => selectSlide(selectedIndex + 1));
    track.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") selectSlide(0, true);
      else if (event.key === "End") selectSlide(gallerySlides.length - 1, true);
      else selectSlide(selectedIndex + (event.key === "ArrowRight" ? 1 : -1), true);
    });
    gallery.style.setProperty("--shot-accent", toneValues[initialGallerySlide.tone] || toneValues.violet);
  }

  if (window.location.hash === `#${headingId}`) {
    window.requestAnimationFrame(() => section.scrollIntoView({ block: "start" }));
  }
})();
