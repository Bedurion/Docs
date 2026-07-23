(() => {
  const screenshots = {
    "index.html": {
      eyebrow: "Discord-native by design",
      title: "See Luminox where it actually works.",
      summary: "Luminox is our custom Discord bot for managing guilds and gaming communities. There is no external dashboard: administrators organize each system by channel, while members use permanent panels, guided buttons and clear live information entirely inside Discord.",
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
            alt: "Luminox Server Boost Loyalty panel with active boosters and rewards.", href: "bot-boosts.html", linkLabel: "Explore Server Boosts"
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
            file: "bot-blacklist-01.png", width: 618, height: 706, tone: "red",
            kicker: "Blacklist", title: "Active intelligence stays separate from resolved history.",
            lead: "Targets retain world, bounty, reason and identity context.",
            caption: "On-world, transferred and resolved sections preserve the moderation decision without mixing inactive targets into live operations.",
            alt: "Luminox Blacklist panel with characters, guilds, bounties and reasons.", href: "bot-blacklist.html", linkLabel: "See more about Blacklist"
          },
          {
            file: "bot-banlist-01.png", width: 609, height: 368, tone: "gold",
            kicker: "Ban list", title: "Timed and permanent sanctions remain immediately readable.",
            lead: "The panel records who acted, why and for how long.",
            caption: "Authorized controls maintain the list while the public result remains compact enough for quick staff verification.",
            alt: "Luminox Ban List panel showing reasons, executors and expiration.", href: "bot-banlist.html", linkLabel: "Explore Ban List"
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
    "editions.html": {
      eyebrow: "Real panels, different context",
      title: "The shared interface stays familiar.",
      summary: "Universal and Community use the same panel-first language. Community panels add Tibia-aware data where a game-independent workflow would not need it.",
      tone: "violet",
      layout: "overview",
      anchor: ".edition-comparison-section",
      position: "after",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-support-01.png", width: 604, height: 465, tone: "cyan",
            kicker: "Shared foundation", title: "Private Support belongs in both editions.",
            lead: "The workflow is useful without game-specific data.",
            caption: "Members open the right private route from a permanent panel while responsible staff continue inside Discord.",
            alt: "Luminox Private Support panel available to Universal and Community editions.", href: "bot-support.html", linkLabel: "Explore Support"
          },
          {
            file: "bot-events-01.png", width: 599, height: 242, tone: "green",
            kicker: "Shared foundation", title: "General event organization works anywhere.",
            lead: "Buttons, schedules, participants and archives are Discord-native.",
            caption: "Community can add specialized Tibia team rules while Universal keeps the event model game-independent.",
            alt: "Luminox Hunt Board demonstrating the shared event panel pattern.", href: "bot-events.html", linkLabel: "Explore Events"
          },
          {
            file: "bot-watchlists-02.png", width: 617, height: 293, tone: "red",
            kicker: "Community context", title: "Live enemy intelligence understands Tibia.",
            lead: "Character, world, bounty and blacklist context stay connected.",
            caption: "This Community capability depends on Tibia-specific identity and live world information that Universal deliberately does not require.",
            alt: "Luminox Enemies Online panel available in Community Edition.", href: "bot-watchlists.html", linkLabel: "Explore Online Lists"
          },
          {
            file: "bot-guildbank-01.png", width: 560, height: 479, tone: "gold",
            kicker: "Community operations", title: "GuildBank connects Tibia economy and review.",
            lead: "Contribution rules, balance and staff controls share one panel.",
            caption: "Community adds this specialized guild workflow alongside Loot Split, Recruitment, Guards and other Tibia-aware systems.",
            alt: "Luminox GuildBank Control Panel available in Community Edition.", href: "bot-guildbank.html", linkLabel: "Explore GuildBank"
          }
        ]
      }
    },
    "features.html": {
      eyebrow: "The product in Discord",
      title: "See Luminox at work.",
      summary: "This curated tour shows the real member and staff experience: permanent launchers, guided actions, private workflows, live information and readable history without an external dashboard.",
      tone: "violet",
      layout: "overview",
      anchor: ".thread-native-overview",
      position: "after",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-events-01.png", width: 599, height: 242, tone: "green",
            kicker: "Member activities", title: "A permanent launcher replaces remembered commands.",
            lead: "Members begin from buttons in the correct channel.",
            caption: "Events, hunts, bosses and quests use the same recognizable panel-first pattern while retaining their own rules.",
            alt: "Luminox Hunt Board with Create hunt and Information buttons.", href: "bot-events.html", linkLabel: "Explore Events"
          },
          {
            file: "bot-events-thread-01.png", width: 300, height: 268, tone: "green",
            kicker: "Thread-native events", title: "Active work is visible directly from the channel list.",
            lead: "The board count and linked thread make the current activity easy to find.",
            caption: "Planning stays inside the event thread while the permanent board channel remains clean and reusable.",
            alt: "Discord channel list showing one active boss event and its linked Raid for final boss thread.", href: "bot-events.html", linkLabel: "See how event threads work"
          },
          {
            file: "bot-support-01.png", width: 604, height: 465, tone: "cyan",
            kicker: "Private workflows", title: "One public panel opens the correct private support route.",
            lead: "Required information is collected before the thread opens.",
            caption: "The requester and responsible staff continue inside Discord while archived conversations remain available through My tickets.",
            alt: "Luminox Private Support panel with Open ticket and My tickets buttons.", href: "bot-support.html", linkLabel: "Explore Support"
          },
          {
            file: "bot-support-thread-01.png", width: 296, height: 90, tone: "cyan",
            kicker: "Protected conversations", title: "A private ticket remains visually attached to Support.",
            lead: "Authorized people see the thread beneath the permanent help channel.",
            caption: "The channel list stays understandable without exposing the complaint or its evidence to unrelated members.",
            alt: "Discord Support category showing the help channel and a nested Complaint about user thread.", href: "bot-support.html", linkLabel: "See how Support threads work"
          },
          {
            file: "bot-loyalty-03.png", width: 636, height: 843, tone: "violet",
            kicker: "Connected progression", title: "Contribution rules and account history stay understandable.",
            lead: "Public context and private profiles use the same account record.",
            caption: "Members can understand eligibility, recent rewards and their own progression without asking staff for a manual total.",
            alt: "Luminox Loyalty System panel and recent Loyalty activity.", href: "bot-loyalty.html", linkLabel: "Explore Loyalty"
          },
          {
            file: "bot-recruitment-01.png", width: 690, height: 683, tone: "green",
            kicker: "Staff review", title: "Every recruitment claim keeps a visible decision state.",
            lead: "Registration, review, disputes and approval remain separate.",
            caption: "Authorized controls stay on the final panel while compact entries make the active queue understandable to recruiters.",
            alt: "Luminox Recruitment Panel with pending and approved recruitment entries.", href: "bot-recruitment.html", linkLabel: "Explore Recruitment"
          },
          {
            file: "bot-guildbank-01.png", width: 560, height: 479, tone: "gold",
            kicker: "Accountable economy", title: "Balance and review actions share one controlled surface.",
            lead: "Members and staff see only the actions they can use.",
            caption: "Current balance, contribution rules and pending reviews remain attached to the permanent GuildBank history.",
            alt: "Luminox GuildBank Control Panel with Deposit, Withdraw and Clean buttons.", href: "bot-guildbank.html", linkLabel: "Explore GuildBank"
          },
          {
            file: "bot-watchlists-02.png", width: 617, height: 293, tone: "red",
            kicker: "Live intelligence", title: "Operational context appears beside every current target.",
            lead: "Online status, bounty and reasons stay readable at a glance.",
            caption: "Community Edition reuses current Tibia data to keep guild and enemy views synchronized without another website workflow.",
            alt: "Luminox Enemies Online panel with bounties and blacklist reasons.", href: "bot-watchlists.html", linkLabel: "Explore Online Lists"
          },
          {
            file: "bot-automation-01.png", width: 643, height: 642, tone: "red",
            kicker: "Automatic reconciliation", title: "Connected records react when membership changes.",
            lead: "Roles, eligibility and rewards remain synchronized.",
            caption: "Luminox records the outcome in Discord instead of silently changing linked systems or requiring manual cleanup.",
            alt: "Luminox automation log reconciling a guild departure and linked rewards.", href: "bot-automation.html", linkLabel: "Explore Automation"
          },
          {
            file: "bot-leaderboards-01.png", width: 435, height: 734, tone: "gold",
            kicker: "Visible progress", title: "Long rankings remain useful without spreadsheets.",
            lead: "Categories, movement and navigation stay inside Discord.",
            caption: "Automatically refreshed leaderboards make current guild progress visible while preserving a clean channel structure.",
            alt: "Luminox leaderboard index and ranked Discord panels.", href: "bot-leaderboards.html", linkLabel: "Explore Leaderboards"
          }
        ]
      }
    },
    "docs.html": {
      eyebrow: "Documentation in context",
      title: "See what each guide builds.",
      summary: "The documentation explains every prerequisite, command and permission. These real captures show what administrators are building and what members will finally use.",
      tone: "cyan",
      layout: "docs-overview",
      anchor: ".docs-basics",
      position: "after",
      items: [
        {
          file: "docs-panels-01.png",
          width: 294,
          height: 1107,
          tone: "gold",
          variant: "channel",
          kicker: "Server map",
          title: "Give every workflow a predictable Discord home.",
          lead: "Setup commands connect the structure once.",
          caption: "Members then return to clear panel channels for identity, support, activities, live information and guild operations.",
          alt: "Lumina Discord channel list organized into Home, Support, Online, Team and Services categories."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-events-03.png", width: 513, height: 675, tone: "green",
            kicker: "Guided input", title: "Structured forms collect the details a workflow actually needs.",
            lead: "Required fields replace improvised instructions in chat.",
            caption: "Each guide explains the setup behind the panel and the exact sequence members see after clicking it.",
            alt: "Discord form for creating a Luminox event with structured fields.", href: "docs-events.html", linkLabel: "Read the Events guide"
          },
          {
            file: "bot-support-01.png", width: 604, height: 465, tone: "cyan",
            kicker: "Private support", title: "Public entry points can continue in protected threads.",
            lead: "Permissions and required questions are documented before launch.",
            caption: "The Support guide explains categories, staff access, claims, participants, closure and satisfaction rewards.",
            alt: "Luminox Private Support panel in Discord.", href: "docs-support.html", linkLabel: "Read the Support guide"
          },
          {
            file: "bot-guildbank-01.png", width: 560, height: 479, tone: "gold",
            kicker: "Controlled reviews", title: "Panels expose actions while permanent messages preserve history.",
            lead: "Configuration and daily operation remain separate.",
            caption: "The GuildBank guide covers channels, treasurers, minimums, accumulated deposits, review and safe deletion.",
            alt: "Luminox GuildBank Control Panel in Discord.", href: "docs-guildbank.html", linkLabel: "Read the GuildBank guide"
          },
          {
            file: "bot-blacklist-01.png", width: 618, height: 706, tone: "red",
            kicker: "Blacklist intelligence", title: "Active targets and resolved history remain clearly separated.",
            lead: "Buttons replace scattered list-management commands.",
            caption: "The Blacklist guide explains permissions, bounties, identity changes, active-world filtering and permanent Discord logs.",
            alt: "Luminox Blacklist panel with active and resolved sections.", href: "docs-blacklist.html", linkLabel: "Read the Blacklist guide"
          },
          {
            file: "bot-automation-01.png", width: 643, height: 642, tone: "violet",
            kicker: "Safe maintenance", title: "Automation remains visible enough to audit.",
            lead: "The lightest refresh or cleanup solves each problem.",
            caption: "The Automation guide separates panel redraws, external-data scans, temporary responses, retention and local backups.",
            alt: "Luminox automation log showing synchronized membership changes.", href: "docs-automation.html", linkLabel: "Read the Automation guide"
          }
        ]
      }
    },
    "docs-timezones.html": {
      eyebrow: "Friend Time in Discord",
      title: "See the original message and its local conversion together.",
      summary: "A member writes an explicit time normally. Another member can use the clock reaction or message action, and Luminox compares both saved timezones without sending anyone to an external converter.",
      tone: "violet",
      anchor: ".page-hero",
      position: "after",
      items: [
        {
          file: "bot-timezones-message-01.png",
          width: 342,
          height: 99,
          tone: "gold",
          variant: "compact",
          kicker: "Original message",
          title: "Write the time naturally in conversation.",
          lead: "No scheduling command interrupts the message.",
          caption: "The clock reaction tells Luminox which explicit time the reader wants to compare with their own saved timezone.",
          alt: "Discord message from Sacrel saying We meet tomorrow at 10:00 with one clock reaction."
        },
        {
          file: "bot-timezones-conversion-01.png",
          width: 458,
          height: 235,
          tone: "violet",
          variant: "compact",
          kicker: "Friend Time result",
          title: "Luminox explains both sides of the conversion.",
          lead: "Author time and reader time remain visibly distinct.",
          caption: "The response identifies the original message, both configured timezones and whether the written hour already matches the reader's local time.",
          alt: "Luminox Friend Time response comparing the author's Europe Madrid timezone with the reader's Europe Madrid timezone."
        }
      ]
    },
    "docs-events.html": {
      eyebrow: "Event workflow in Discord",
      title: "Follow an event from its permanent launcher to its archived thread.",
      summary: "Real captures show the guided setup, schedule decision, live participant panel, channel counter and dedicated discussion thread used by Hunt, Boss, Quest and general Event boards.",
      tone: "green",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-events-01.png", width: 599, height: 242, tone: "green",
            kicker: "Hunt Board", title: "Members start from one permanent launcher.",
            lead: "Create and Information remain easy to find.",
            caption: "The setup section explains how to publish this board and which Discord permissions keep it current.",
            alt: "Luminox Hunt Board with Create hunt and Information buttons.", href: "docs-events.html#setup", linkLabel: "Jump to board setup"
          },
          {
            file: "bot-events-02.png", width: 595, height: 239, tone: "gold",
            kicker: "Boss Board", title: "Dedicated boards preserve activity-specific context.",
            lead: "The interface stays familiar while the team model changes.",
            caption: "Bosses organize Tanks, Heals and DPS; Hunts validate composition and shared experience; other boards use their documented minimum.",
            alt: "Luminox Boss Board with Create boss and Information buttons.", href: "docs-events.html#types", linkLabel: "Compare event types"
          },
          {
            file: "bot-events-03.png", width: 513, height: 675, tone: "violet",
            kicker: "Creation form", title: "Discord validates the important details before publishing.",
            lead: "Title, description, schedule and duration stay structured.",
            caption: "The complete creation flow also covers invitations, team requirements, schedule voting and final review.",
            alt: "Discord modal for creating a Luminox event.", href: "docs-events.html#create", linkLabel: "Follow event creation"
          },
          {
            file: "bot-events-scheduling-01.png", width: 775, height: 290, tone: "gold",
            kicker: "Scheduling choice", title: "Leadership decides how the final date will be selected.",
            lead: "Set it immediately, conclude a participant vote or allow safe automatic scheduling.",
            caption: "The availability section explains proposal ranges, voting, tie protection and the conditions required before Luminox can publish a winning schedule automatically.",
            alt: "Luminox scheduling choice showing Set date now, Vote Leadership decides and Vote Automatic.", href: "docs-events.html#availability", linkLabel: "Understand schedule voting"
          },
          {
            file: "bot-events-active-hunt-01.png", width: 781, height: 813, tone: "violet",
            kicker: "Live hunt panel", title: "One message keeps the complete event state readable.",
            lead: "Composition, Leadership, attendance and moderation controls remain together.",
            caption: "The live panel exposes the selected schedule, party rules, participant status, thread link and every action available to Leadership or authorized staff.",
            alt: "Active Luminox Yalahar team hunt panel with schedule, vocation composition, Leadership and event controls.", href: "docs-events.html#join", linkLabel: "Read participant states"
          },
          {
            file: "bot-events-thread-02.png", width: 300, height: 337, tone: "green",
            kicker: "Channel and thread", title: "The active count and planning space remain connected.",
            lead: "Members can identify the current Hunt before opening the channel.",
            caption: "The nested thread stays visible beneath hunts·1 while the permanent board channel remains clean and reusable.",
            alt: "Discord channel list showing hunts with one active Yalahar team hunt discussion thread.", href: "docs-events.html#threads", linkLabel: "Understand channel and thread structure"
          },
          {
            file: "bot-events-discussion-01.png", width: 482, height: 310, tone: "cyan",
            kicker: "Discussion thread", title: "Every participant receives the same coordination space.",
            lead: "Invitations, schedule updates and final outcomes remain attached to the event.",
            caption: "The thread accepts normal discussion during the activity, then Luminox locks and archives it after the documented visibility period.",
            alt: "Luminox Yalahar team hunt discussion thread showing a participant added to the thread.", href: "docs-events.html#notifications", linkLabel: "Read thread notifications"
          }
        ]
      }
    },
    "docs-recruitment.html": {
      eyebrow: "Recruitment in practice",
      title: "Separate member claims from active prospecting.",
      summary: "The public Recruitment Panel follows ownership and rewards, while Potential Recruits gives authorized staff a filtered outreach workspace.",
      tone: "green",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-recruitment-panel-03.png", width: 718, height: 678, tone: "green",
            kicker: "Recruitment Panel", title: "Every report exposes its current review state.",
            lead: "Waiting, disputed and approved entries remain distinct.",
            caption: "The guide explains reporting, ownership changes, staff review, disputes, provisional rewards and final protection.",
            alt: "Luminox Recruitment Panel with reports in different review states.", href: "docs-recruitment.html#claim", linkLabel: "Follow the report workflow"
          },
          {
            file: "bot-recruitment-02.png", width: 606, height: 777, tone: "cyan",
            kicker: "Potential Recruits", title: "Filtered prospects support coordinated outreach.",
            lead: "Vocation, level and previous contact stay visible.",
            caption: "The search reuses current online information and excludes unsuitable, sanctioned or already-contacted characters.",
            alt: "Luminox Potential Recruits panel separated by vocation.", href: "bot-recruitment.html", linkLabel: "Open the Recruitment overview"
          }
        ]
      }
    },
    "docs-watchlists.html": {
      eyebrow: "Two live views",
      title: "Read guild activity and enemy risk without mixing them.",
      summary: "Both panels reuse current world data, but each presents the context its audience needs: guild sessions and gains or sanctioned enemy intelligence.",
      tone: "red",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-watchlists-01.png", width: 420, height: 255, tone: "violet",
            kicker: "Guild Members Online", title: "Current members stay compact and clickable.",
            lead: "Session, character and progress data share one row.",
            caption: "The guide explains the channel counter, refresh policy, registered identity links and guild Power total.",
            alt: "Luminox Guild Members Online panel.", href: "docs-watchlists.html#members", linkLabel: "Read the member list"
          },
          {
            file: "bot-watchlists-02.png", width: 617, height: 293, tone: "red",
            kicker: "Enemies Online", title: "Bounty and blacklist context follow active targets.",
            lead: "Individual characters and hostile guilds remain separate.",
            caption: "The guide explains world filtering, Power totals, sanctions and why transferred characters do not remain in the live enemy list.",
            alt: "Luminox Enemies Online panel with bounties and reasons.", href: "docs-watchlists.html#enemies", linkLabel: "Read the enemy list"
          }
        ]
      }
    },
    "docs-moderation.html": {
      eyebrow: "Permanent moderation structure",
      title: "Keep prevention, current controls and audit history in clear places.",
      summary: "Automod protects only the channels administrators select. Separate staff spaces and fixed log messages keep important decisions readable after the live state changes.",
      tone: "red",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-staff-01.png",
          width: 291,
          height: 345,
          tone: "red",
          variant: "portrait",
          kicker: "Purpose-specific staff spaces",
          title: "Protection and history do not compete in one channel.",
          lead: "Automod rules, list panels and permanent logs remain distinct.",
          caption: "The guide explains exactly which commands configure channel protection and which destination receives the fixed moderation audit history.",
          alt: "Discord staff category with separate channels for changes, guides, staff, logs, bans and promotions."
        }
      ]
    },
    "docs-banlist.html": {
      eyebrow: "Sanctions in practice",
      title: "Every active ban remains readable at a glance.",
      summary: "The panel preserves the target, reason, responsible staff member and duration while private controls handle additions and revisions.",
      tone: "gold",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-banlist-01.png",
          width: 609,
          height: 368,
          tone: "gold",
          variant: "compact",
          kicker: "Ban List panel",
          title: "Timed and unlimited sanctions share one accountable view.",
          lead: "Authorized controls add, edit or lift records without exposing management forms publicly.",
          caption: "The guide covers Universal Discord targets, Community Tibia character targets, duration changes, pagination and the audit trail.",
          alt: "Luminox Ban List panel showing active bans, reasons, responsible staff and duration."
        }
      ]
    },
    "docs-blacklist.html": {
      eyebrow: "Tibia intelligence in practice",
      title: "Current threats and resolved history remain visibly separate.",
      summary: "Characters and guilds retain their reason, bounty and identity state while connected systems reuse the same reviewed record.",
      tone: "red",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-blacklist-01.png",
          width: 618,
          height: 706,
          tone: "red",
          variant: "portrait",
          kicker: "Community Blacklist",
          title: "On-world, transferred and resolved records keep their context.",
          lead: "Live intelligence stays focused without deleting historical decisions.",
          caption: "The guide explains characters, guilds, bounties, the entry manager, Tracker outcomes, Enemies Online and Guards.",
          alt: "Luminox Community Blacklist with current characters, guilds and resolved sections."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-blacklist-on-world-04.png", width: 622, height: 730, tone: "red",
            kicker: "On This World", title: "Current threats keep the context staff need.",
            lead: "Characters and guilds retain bounty, reason and live-world status.",
            caption: "The active section remains operational while reviewed edits and management controls stay attached to the same source list.",
            alt: "Luminox Blacklist On This World panel with active characters, guilds, bounties and management controls.", href: "#sections", linkLabel: "Read active blacklist records"
          },
          {
            file: "bot-blacklist-out-world-02.png", width: 625, height: 353, tone: "cyan",
            kicker: "Out of This World", title: "Transferred targets leave live intelligence without losing history.",
            lead: "The new world and identity state remain visible.",
            caption: "World transfers no longer pollute Enemies Online, but the reviewed blacklist decision and navigation remain available.",
            alt: "Luminox Blacklist Out of This World panel showing a transferred character and destination world.", href: "#sections", linkLabel: "Understand world-state separation"
          },
          {
            file: "bot-blacklist-resolved-03.png", width: 462, height: 513, tone: "gold",
            kicker: "Resolved history", title: "Paid, deleted and disbanded outcomes remain explicit.",
            lead: "Empty sections are visible instead of silently disappearing.",
            caption: "Resolved records preserve the audit structure while keeping current operational lists focused on active targets.",
            alt: "Luminox Blacklist Resolved, Disbanded and Deleted panel with separate historical sections.", href: "#sections", linkLabel: "Read resolved outcomes"
          }
        ]
      }
    },
    "docs-progression.html": {
      eyebrow: "Progression output",
      title: "Keep permanent advances above one rolling summary.",
      summary: "Individual level and death events remain in Discord history while the final panel refreshes daily, monthly and yearly progress without duplicating old messages.",
      tone: "green",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-progression-01.png", width: 772, height: 383, tone: "gold",
            kicker: "Permanent announcement", title: "Important advances remain visible as fixed messages.",
            lead: "Character, level and account context stay attached.",
            caption: "The guide explains which characters are eligible, when announcements are created and how guild membership affects display.",
            alt: "Luminox level-up announcement in Discord.", href: "docs-progression.html#levels", linkLabel: "Read progression announcements"
          },
          {
            file: "bot-deaths-01.png", width: 777, height: 542, tone: "red",
            kicker: "Death history", title: "Every genuine Tibia death becomes one permanent announcement.",
            lead: "Character context, killer and rolling totals stay together.",
            caption: "Official Tibia death records are deduplicated before publishing, so the channel preserves a readable history without repeating the same event.",
            alt: "Luminox Discord death announcements with characters, killers and rolling monthly and yearly totals.", href: "docs-progression.html#deaths", linkLabel: "Read death tracking"
          },
          {
            file: "bot-progression-02.png", width: 774, height: 1052, tone: "green",
            kicker: "Rolling panel", title: "Daily gains determine order while longer totals add context.",
            lead: "The refreshed panel remains below the permanent history.",
            caption: "Pagination and navigation keep every eligible member visible without truncating the list or moving the newest logs below it.",
            alt: "Luminox Daily Level Gains panel below level-up messages.", href: "docs-progression.html#summaries", linkLabel: "Read the rolling panel"
          }
        ]
      }
    },
    "docs-leaderboards.html": {
      eyebrow: "Rankings in Discord",
      title: "Move from the category index into readable ranking pages.",
      summary: "The first panel works as a stable directory; long rankings then split safely while preserving movement, context and navigation.",
      tone: "gold",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-leaderboards-01.png", width: 435, height: 734, tone: "gold",
            kicker: "Leaderboard index", title: "One directory exposes every available ranking.",
            lead: "Members choose a category without remembering a command.",
            caption: "The guide explains eligibility, refresh timing, category availability and how inactive guild characters leave current rankings.",
            alt: "Luminox leaderboard index in Discord.", href: "docs-leaderboards.html#setup", linkLabel: "Read the leaderboard index"
          },
          {
            file: "bot-leaderboards-02.png", width: 363, height: 718, tone: "violet",
            kicker: "Paginated ranking", title: "Long lists remain navigable across safe Discord messages.",
            lead: "Movement and identity context stay on every entry.",
            caption: "Navigation returns members to the index or top while the bot creates only the number of pages the current result needs.",
            alt: "Multi-message Luminox leaderboard with navigation links.", href: "docs-leaderboards.html#display", linkLabel: "Read ranking pagination"
          }
        ]
      }
    },
    "docs-guards.html": {
      eyebrow: "Guard operations",
      title: "Connect active reports with accumulated battle history.",
      summary: "The control panel starts duty, sightings and battles; the historical view preserves time by enemy and participating character after active threads close.",
      tone: "red",
      anchor: ".doc-layout",
      position: "before",
      items: [],
      gallery: {
        slides: [
          {
            file: "bot-guards-01.png", width: 634, height: 459, tone: "red",
            kicker: "Guards panel", title: "Duty, sightings and battles remain distinct actions.",
            lead: "Each button explains the report before opening it.",
            caption: "The guide covers specialist roles, selected characters, required locations, notifications, threads and automatic expiration.",
            alt: "Luminox Guards panel with guard and enemy report controls.", href: "docs-guards.html#setup", linkLabel: "Read Guard controls"
          },
          {
            file: "bot-guards-02.png", width: 628, height: 789, tone: "gold",
            kicker: "Battle history", title: "Time remains grouped by enemy and participating character.",
            lead: "Accumulated contribution outlives the active report thread.",
            caption: "The guide explains time accounting, defeated targets, bounty distribution and how multiple characters from one account remain distinguishable.",
            alt: "Luminox Guard battle history grouped by enemy.", href: "bot-guards.html", linkLabel: "Open the Guards overview"
          }
        ]
      }
    },
    "docs-support.html": {
      eyebrow: "Private support in practice",
      title: "One public panel opens every protected support route.",
      summary: "Members understand required answers, media rules and privacy before Luminox creates a category-aware private thread for the requester and responsible staff.",
      tone: "cyan",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-support-01.png", width: 604, height: 465, tone: "cyan",
          cropTop: 10,
          kicker: "Private Support", title: "Open and recover tickets from one permanent entry point.",
          lead: "The panel explains what remains private and what Discord preserves.",
          caption: "The guide below covers categories, required questions, media, staff access, claims, invited participants, closure and satisfaction rewards.",
          alt: "Luminox Private Support panel with Open ticket and My tickets buttons."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-support-02.png", width: 1537, height: 1023, tone: "cyan",
            kicker: "Category selection", title: "Members choose the right private route before a ticket opens.",
            lead: "Each category explains its purpose in the same guided selector.",
            caption: "Complaints, registration help and staff applications can share one public launcher while still reaching different responsible staff teams.",
            alt: "Luminox Support category selector showing Complaints, Registration and Staff Applications.", href: "#open", linkLabel: "Review the member flow"
          },
          {
            file: "bot-support-03.png", width: 983, height: 1601, tone: "violet",
            kicker: "Required complaint form", title: "Questions and evidence arrive before staff begin the review.",
            lead: "Every required field and initial attachment is collected first.",
            caption: "Category settings define the questions, accepted media and file count so the private thread begins with useful context instead of another information request.",
            alt: "Luminox Support complaint form with required questions and required media upload.", href: "#categories", linkLabel: "Review category settings"
          },
          {
            file: "bot-support-thread-01.png", width: 296, height: 90, tone: "cyan",
            kicker: "Channel and private thread", title: "The active case stays easy to locate without becoming public.",
            lead: "Discord nests the protected conversation beneath the permanent Support channel.",
            caption: "Only the requester, responsible staff and invited participants can enter the ticket while the server keeps a clean channel structure.",
            alt: "Discord Support category showing the help channel and a nested Complaint about user thread.", href: "#threads", linkLabel: "Review the thread structure"
          },
          {
            file: "bot-support-history-05.png", width: 663, height: 308, tone: "violet",
            kicker: "My Support Tickets", title: "Members and staff recover the right history from one private view.",
            lead: "Opened, Staff and Joined keep each relationship understandable.",
            caption: "Pagination remains inside the same private response, and resolved entries link back to their archived Discord threads.",
            alt: "Luminox My Support Tickets private view showing a resolved staff ticket and navigation buttons.", href: "#history", linkLabel: "Understand private ticket history"
          }
        ]
      }
    },
    "docs-guildbank.html": {
      eyebrow: "GuildBank in practice",
      title: "Review balance, contribution rules and pending entries together.",
      summary: "The final control panel stays below permanent transaction records so daily actions remain easy to find without rewriting the historical audit.",
      tone: "gold",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-guildbank-01.png", width: 560, height: 479, tone: "gold",
          kicker: "GuildBank Control Panel", title: "Members and treasurers share one controlled surface.",
          lead: "Balance and minimums remain visible before any action begins.",
          caption: "The guide below explains setup, accumulated deposits, confirmation, denial, withdrawals, Loyalty rewards and safe record deletion.",
          alt: "Luminox GuildBank Control Panel with balance and action buttons."
        },
        {
          file: "bot-guildbank-deposit-assignment-01.png", width: 562, height: 163, tone: "violet",
          variant: "compact",
          kicker: "Deposit ownership", title: "A deposit can be assigned before it enters review.",
          lead: "Members choose themselves or another registered account.",
          caption: "This private step keeps contribution and Loyalty attribution accurate without asking staff to repair ownership later.",
          alt: "Luminox GuildBank deposit prompt with Myself, Another user and Cancel buttons."
        }
      ]
    },
    "docs-guildhall.html": {
      eyebrow: "Guildhall in practice",
      title: "Keep rooms, occupants and requests in one property panel.",
      summary: "Members see availability and submit claims from the final panel while authorized staff maintain definitions, occupants and review decisions.",
      tone: "gold",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-guildhall-01.png", width: 638, height: 328, tone: "gold",
          kicker: "Guildhall panel", title: "Room management remains visible without a spreadsheet.",
          lead: "Availability, claims and staff actions share one predictable destination.",
          caption: "The guide below explains specialist permissions, up to 100 rooms, ordering, registered-character claims and permanent Discord logs.",
          alt: "Luminox Guildhall panel with room and claim controls."
        },
        {
          file: "bot-guildhall-unavailable-02.png", width: 686, height: 354, tone: "violet",
          variant: "compact",
          kicker: "Before configuration", title: "The empty state still guides members and staff.",
          lead: "Availability remains honest while setup and review controls stay reachable.",
          caption: "The panel communicates that no guildhall is configured, shows zero capacity and preserves the actions needed to report or prepare one.",
          alt: "Luminox Guildhall Not available panel with zero rooms and guildhall management controls."
        }
      ]
    },
    "docs-finder.html": {
      eyebrow: "Finder in practice",
      title: "Turn one current online snapshot into practical team suggestions.",
      summary: "Finder combines compatible characters, Looking for Team status and recent activity without starting a separate Tibia request for every match.",
      tone: "cyan",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-finder-01.png", width: 454, height: 1044, tone: "cyan", variant: "tall",
          kicker: "Finder panel", title: "Online members and voluntary signals become ranked matches.",
          lead: "Every suggestion keeps character context and compatibility visible.",
          caption: "The guide below explains setup order, match scoring, group rules, Looking for Team, private history and cached performance.",
          alt: "Luminox Finder panel showing online characters and ranked matches."
        }
      ]
    },
    "docs-tracker.html": {
      eyebrow: "Tracker in practice",
      title: "Preserve fixed identity events above one refreshed summary.",
      summary: "Renames, trades, transfers, returns and resolved targets remain readable as historical Discord messages without duplicating the newest-event panel.",
      tone: "cyan",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-tracker-01.png", width: 639, height: 864, tone: "cyan", variant: "tall",
          kicker: "Character Tracker Log", title: "Identity changes remain traceable after lists update.",
          lead: "Fixed events preserve the old and new state.",
          caption: "The guide below explains detection, Blacklist movement, important Guild Chat alerts, retries and duplicate prevention.",
          alt: "Luminox Character Tracker log and recent-event panel."
        },
        {
          file: "bot-tracker-transfers-02.png", width: 646, height: 898, tone: "violet", variant: "tall",
          kicker: "Transfer history", title: "Fixed events remain above one refreshed recent-events panel.",
          lead: "Each transfer records the character, origin, destination and time.",
          caption: "The permanent Discord messages preserve evidence while the final panel summarizes only the newest events and links back to the complete log.",
          alt: "Luminox Character Tracker showing two permanent world-transfer messages above the refreshed tracker log panel."
        }
      ]
    },
    "docs-automation.html": {
      eyebrow: "Automation in practice",
      title: "Make connected changes visible without turning maintenance into noise.",
      summary: "A readable Discord outcome shows what Luminox reconciled while the guide separates routine redraws, external scans, cleanup and retention.",
      tone: "violet",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-automation-01.png", width: 643, height: 642, tone: "violet",
          kicker: "Automatic reconciliation", title: "A membership change updates every connected consequence.",
          lead: "Roles, eligibility and rewards stay synchronized and auditable.",
          caption: "The guide below explains Autodelete, stable panels, private-response lifetimes, refresh levels, backups and sustainable retention.",
          alt: "Luminox automation log reconciling a guild departure and linked rewards."
        }
      ]
    },
    "docs-inactive-characters.html": {
      eyebrow: "Membership lifecycle in practice",
      title: "One confirmed departure produces one explainable account outcome.",
      summary: "Luminox records the departed character, remaining eligibility, managed Discord access and reward changes while preserving the verified identity record.",
      tone: "red",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-inactive-characters-01.png",
          width: 786,
          height: 993,
          tone: "red",
          variant: "tall",
          kicker: "Automatic departure reconciliation",
          title: "Connected systems receive the same verified membership result.",
          lead: "Roles, Loyalty and recruitment remain synchronized and auditable.",
          caption: "The guide below explains safe verification, account-level decisions, retained character history and every connected consequence.",
          alt: "Luminox Discord log showing a partially vested recruitment reward, a member leaving the guild, a role change to Guest and a new character registration."
        }
      ]
    },
    "bot-timezones.html": {
      eyebrow: "One reaction, local context",
      title: "Friend Time answers where the conversation already happens.",
      summary: "Members write explicit hours normally. Luminox reads the author and viewer timezone settings, then returns a clear comparison directly inside Discord.",
      tone: "violet",
      items: [
        {
          file: "bot-timezones-conversion-01.png",
          width: 458,
          height: 235,
          tone: "violet",
          variant: "compact",
          kicker: "Friend Time conversion",
          title: "The reader sees both local interpretations.",
          lead: "No external timezone website is required.",
          caption: "Luminox links back to the original message, identifies both account timezones and clearly states when no conversion is necessary.",
          alt: "Luminox Friend Time response comparing the author's Europe Madrid timezone with the reader's Europe Madrid timezone."
        },
        {
          file: "bot-timezones-message-01.png",
          width: 342,
          height: 99,
          tone: "gold",
          variant: "compact",
          kicker: "Natural conversation",
          title: "One clock reaction starts the comparison.",
          lead: "Members keep writing times in ordinary messages.",
          caption: "The reaction provides a lightweight entry point while the saved account timezone supplies the context Luminox needs.",
          alt: "Discord message from Sacrel saying We meet tomorrow at 10:00 with one clock reaction."
        }
      ]
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
    "bot-inactive-characters.html": {
      eyebrow: "Verified membership outcome",
      title: "A guild departure updates every connected system once.",
      summary: "Luminox explains why an account changed, what access was reconciled and how much Loyalty or protected recruitment value was affected.",
      tone: "red",
      items: [
        {
          file: "bot-inactive-characters-01.png",
          width: 786,
          height: 993,
          tone: "red",
          variant: "tall",
          kicker: "Membership reconciliation",
          title: "The Discord log keeps the complete account transition readable.",
          lead: "Departed characters, roles and rewards share one outcome.",
          caption: "The verified registration remains stored while current guild eligibility and connected systems follow the official roster.",
          alt: "Luminox Discord log showing a recruitment reward adjustment, a member departure, managed Discord roles and a later character registration."
        }
      ]
    },
    "bot-events.html": {
      eyebrow: "The complete event lifecycle",
      title: "See planning, participation and coordination inside Discord.",
      summary: "A permanent board starts the workflow, guided controls publish a structured event and every participant continues inside one connected discussion thread.",
      tone: "green",
      additionalPreviewPlacements: [
        { previewIndex: 1, collection: "items", itemIndex: 1 }
      ],
      items: [
        {
          file: "bot-events-active-hunt-01.png",
          width: 781,
          height: 813,
          tone: "violet",
          kicker: "Live hunt panel",
          title: "The whole event remains visible in one message.",
          lead: "Schedule, team composition, attendance and controls stay connected.",
          caption: "Members understand who joined, which places remain and where to coordinate without reconstructing the event from chat messages.",
          alt: "Active Luminox Yalahar team hunt panel with schedule, vocation composition, Leadership and event controls."
        },
        {
          file: "bot-events-thread-02.png",
          width: 300,
          height: 337,
          tone: "green",
          variant: "compact",
          kicker: "Channel and thread",
          title: "The channel list shows the active event and its discussion.",
          lead: "One active Hunt appears as hunts·1 with its linked thread beneath it.",
          caption: "Members find the planning space immediately while the permanent board channel remains clean for future activities.",
          alt: "Discord channel list showing hunts with one active Yalahar team hunt discussion thread."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-events-01.png", width: 599, height: 242, tone: "green",
            kicker: "Permanent launcher", title: "Members always know where a new Hunt begins.",
            lead: "Create and Information remain available at the bottom of the board channel.",
            caption: "The launcher keeps the public channel reusable while every active activity receives its own panel and thread.",
            alt: "Luminox Hunt Board with Create hunt and Information buttons.", href: "docs-events.html#setup", linkLabel: "See board setup"
          },
          {
            file: "bot-events-02.png", width: 595, height: 239, tone: "gold",
            kicker: "Dedicated activity boards", title: "Each event type preserves the context it needs.",
            lead: "The pattern stays familiar while its team rules change.",
            caption: "Hunts, Bosses, Quests and general Events share one workflow without losing their specialized composition or eligibility rules.",
            alt: "Luminox Boss Board with Create boss and Information buttons.", href: "docs-events.html#types", linkLabel: "Compare event types"
          },
          {
            file: "bot-events-03.png", width: 513, height: 675, tone: "violet",
            kicker: "Guided creation", title: "Required details are collected before publication.",
            lead: "Structured fields replace improvised event instructions.",
            caption: "The organizer defines the purpose, schedule and duration before Luminox creates the live card and its coordination thread.",
            alt: "Discord modal for creating a Luminox event with structured fields.", href: "docs-events.html#create", linkLabel: "Follow event creation"
          },
          {
            file: "bot-events-scheduling-01.png", width: 775, height: 290, tone: "gold",
            kicker: "Flexible scheduling", title: "Choose an immediate date, a vote or guarded automation.",
            lead: "Leadership keeps control without doing every scheduling step manually.",
            caption: "Automatic scheduling acts only when every participant has voted and one safe option satisfies the required team.",
            alt: "Luminox scheduling choice showing Set date now, Vote Leadership decides and Vote Automatic.", href: "docs-events.html#availability", linkLabel: "Explore scheduling"
          },
          {
            file: "bot-events-discussion-01.png", width: 482, height: 310, tone: "cyan",
            kicker: "Dedicated discussion", title: "Coordination stays attached to the event.",
            lead: "Participants receive thread access as soon as they join or are invited.",
            caption: "Updates, conversation and the final archived outcome remain inside Discord instead of creating a second external workspace.",
            alt: "Luminox Yalahar team hunt discussion thread showing a participant added to the thread.", href: "docs-events.html#notifications", linkLabel: "See thread notifications"
          }
        ]
      }
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
        },
        {
          file: "bot-guildbank-deposit-assignment-01.png",
          width: 562,
          height: 163,
          tone: "violet",
          variant: "compact",
          kicker: "Deposit ownership",
          title: "Contribution is attributed before review begins.",
          lead: "Members can record a deposit for themselves or another registered account.",
          caption: "The guided private choice prevents ambiguous ownership and keeps GuildBank totals and Loyalty rewards connected to the correct member.",
          alt: "Luminox GuildBank deposit prompt with Myself, Another user and Cancel controls."
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
          file: "bot-guildhall-unavailable-02.png",
          width: 686,
          height: 354,
          tone: "green",
          variant: "compact",
          kicker: "Guildhall panel",
          title: "Availability remains visible before the first room exists.",
          lead: "The empty state is operational, not a dead end.",
          caption: "The panel still exposes reporting and staff controls, shows configured capacity and becomes the entry point for future room claims.",
          alt: "Luminox Guildhall Not available panel showing zero rooms and Guildhall action buttons."
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
      ],
      gallery: {
        slides: [
          {
            file: "bot-loyalty-profile-01.png", width: 604, height: 1093, tone: "gold",
            kicker: "Private Loyalty Profile", title: "Every contribution source remains explainable.",
            lead: "Balance, level, rank, boosts, streaming and recent activity share one private view.",
            caption: "Members can inspect earned, pending and reversed value without exposing their complete account history publicly.",
            alt: "Private Luminox Loyalty Profile showing balance, level, boost rewards, stream Loyalty and recent account activity.", href: "docs-loyalty.html#profile", linkLabel: "Understand the private profile"
          },
          {
            file: "bot-loyalty-activity-02.png", width: 722, height: 854, tone: "violet",
            kicker: "Public Loyalty Activity", title: "Rewards and proportional reversals remain in one readable history.",
            lead: "Grouped entries explain why the balance changed.",
            caption: "Boost periods, recruitment rewards and unvested reversals keep their reason and amount while pagination protects long-term readability.",
            alt: "Luminox Loyalty System information and paginated Loyalty Activity with rewards and reversals.", href: "docs-loyalty.html#history", linkLabel: "Read Loyalty history"
          }
        ]
      }
    },
    "bot-boosts.html": {
      eyebrow: "Continuous support in Discord",
      title: "Every completed boost period remains visible.",
      summary: "The live panel distinguishes active boosts, lifetime completed contribution, expected rewards and attribution limits without requiring a manual monthly review.",
      tone: "cyan",
      items: [
        {
          file: "bot-loyalty-02.png",
          width: 613,
          height: 561,
          tone: "cyan",
          kicker: "Server Boost Loyalty",
          title: "Current and historical support share one panel.",
          lead: "Every active unit has a visible next reward.",
          caption: "Contributors can see active boosts, Total Boosts, expected points and the next continuous period while unattributed units remain honestly separated.",
          alt: "Luminox Server Boost Loyalty panel showing active contributors, completed boosts and expected rewards."
        },
        {
          file: "bot-boosts-tracking-01.png",
          width: 471,
          height: 248,
          tone: "cyan",
          variant: "compact",
          kicker: "Boost tracking begins",
          title: "Every active unit starts a visible continuous reward period.",
          lead: "Member, reward and requirement are recorded immediately.",
          caption: "The fixed message shows the 5,000-point reward and 30 continuous days required before the unit becomes completed contribution.",
          alt: "Luminox Boost tracking started message showing the member, 5,000 Loyalty Point reward and 30 continuous day requirement."
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
      ],
      gallery: {
        slides: [
          {
            file: "bot-loyalty-profile-01.png", width: 604, height: 1093, tone: "gold",
            kicker: "Private account view", title: "The profile separates current, earned and pending value.",
            lead: "Account progress and every recurring source remain inspectable.",
            caption: "The guide maps each profile section to eligibility, levels, boosts, stream sessions, retention and recent activity.",
            alt: "Private Luminox Loyalty Profile showing account balance, level, rank, boosts, streaming and recent activity.", href: "#profile", linkLabel: "Read the profile fields"
          },
          {
            file: "bot-loyalty-activity-02.png", width: 722, height: 854, tone: "violet",
            kicker: "Public account history", title: "Important rewards and reversals keep their reason.",
            lead: "Pagination prevents the activity record from becoming unreadable.",
            caption: "The guide explains grouping, retention and why proportional recruitment reversals appear beside positive rewards.",
            alt: "Luminox Loyalty Activity panel with positive rewards, recruitment reversals and pagination.", href: "#history", linkLabel: "Read activity history"
          }
        ]
      }
    },
    "docs-boosts.html": {
      eyebrow: "What members can verify",
      title: "The Discord panel explains the full reward state.",
      summary: "Administrators configure one channel; members can then distinguish current boost units, completed contribution, the next reward and any attribution gap directly in Discord.",
      tone: "cyan",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-loyalty-02.png",
          width: 613,
          height: 561,
          tone: "cyan",
          kicker: "Live boost panel",
          title: "Multiple boosts remain independently understandable.",
          lead: "Current support and completed history are not the same number.",
          caption: "The panel keeps active units, lifetime completed periods and expected rewards separate so the technical guide maps directly to what members see.",
          alt: "Luminox Server Boost Loyalty panel used as the visual reference for boost configuration."
        },
        {
          file: "bot-boosts-tracking-01.png",
          width: 471,
          height: 248,
          tone: "cyan",
          variant: "compact",
          kicker: "Tracking record",
          title: "The first fixed message explains the full reward condition.",
          lead: "One boost unit starts one independent continuous period.",
          caption: "The member, point value, minimum duration and starting time remain visible before the live panel summarizes the account.",
          alt: "Luminox Boost tracking started message showing reward value, required activity and starting time."
        }
      ]
    },
    "bot-moderation.html": {
      eyebrow: "Discord-native moderation",
      title: "Staff protection and permanent history stay purpose-specific.",
      summary: "Automod is configured per channel, while important member, role and staff actions remain available in fixed Discord log messages.",
      tone: "red",
      items: [
        {
          file: "bot-staff-01.png",
          width: 291,
          height: 345,
          tone: "red",
          variant: "portrait",
          kicker: "Structured staff area",
          title: "Rules, active controls and audit records use separate channels.",
          lead: "The right people can find the right surface without mixing every moderation task.",
          caption: "Administrators configure Automod and log destinations; moderators operate connected panels through role-aware controls.",
          alt: "Discord staff category with separate changes, guides, staff, log, bans and promotions channels."
        }
      ]
    },
    "bot-banlist.html": {
      eyebrow: "Readable sanctions",
      title: "The panel shows every fact staff need before acting.",
      summary: "Targets, reasons, responsible accounts and durations remain visible while add, edit and lift controls stay restricted to authorized staff.",
      tone: "gold",
      items: [
        {
          file: "bot-banlist-01.png",
          width: 609,
          height: 368,
          tone: "gold",
          variant: "compact",
          kicker: "Ban List",
          title: "Timed and unlimited records remain compact.",
          lead: "One glance explains who, why, by whom and until when.",
          caption: "Universal uses Discord members directly. Community can additionally identify an exact Tibia character and enrich linked account context.",
          alt: "Luminox Ban List panel with active bans, reasons, responsible staff and expiration."
        }
      ]
    },
    "bot-blacklist.html": {
      eyebrow: "Connected Tibia intelligence",
      title: "One reviewed record can power every enemy workflow.",
      summary: "Blacklist keeps active characters, hostile guilds, transferred targets and resolved history organized without duplicating the source decision.",
      tone: "red",
      items: [
        {
          file: "bot-blacklist-01.png",
          width: 618,
          height: 706,
          tone: "red",
          variant: "portrait",
          kicker: "Community Blacklist",
          title: "Risk context survives world and identity changes.",
          lead: "World, bounty, reason and current state stay visible.",
          caption: "The same records feed Enemies Online, Tracker, Guards and recruitment safeguards while historical outcomes remain above the live controls.",
          alt: "Luminox Community Blacklist showing current characters, guilds and resolved history."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-blacklist-on-world-04.png", width: 622, height: 730, tone: "red",
            kicker: "On This World", title: "Active targets remain ready for connected workflows.",
            lead: "Characters, guilds, bounty and reason stay together.",
            caption: "The current-world section is the reviewed source used by enemy monitoring, Guards and recruitment safeguards.",
            alt: "Luminox Blacklist On This World panel with active characters, guilds, bounties and controls.", href: "docs-blacklist.html#sections", linkLabel: "See active records"
          },
          {
            file: "bot-blacklist-out-world-02.png", width: 625, height: 353, tone: "cyan",
            kicker: "Out of This World", title: "Transferred targets stop appearing as local threats.",
            lead: "The blacklist decision remains preserved with the destination world.",
            caption: "Tracker can move the record automatically without deleting its history or continuing to show it in the configured world's live enemy list.",
            alt: "Luminox Blacklist Out of This World panel showing a transferred target.", href: "docs-blacklist.html#sections", linkLabel: "See world-state handling"
          },
          {
            file: "bot-blacklist-resolved-03.png", width: 462, height: 513, tone: "gold",
            kicker: "Resolved history", title: "Paid, deleted and disbanded outcomes leave the active list.",
            lead: "Historical sections stay explicit and navigable.",
            caption: "The panel keeps completed outcomes auditable without mixing them with characters and guilds that still require attention.",
            alt: "Luminox Blacklist Resolved, Disbanded and Deleted history panel.", href: "docs-blacklist.html#sections", linkLabel: "See resolved states"
          }
        ]
      }
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
        },
        {
          file: "bot-deaths-01.png",
          width: 777,
          height: 542,
          tone: "red",
          kicker: "Death announcements",
          title: "Genuine deaths remain visible without duplicate noise.",
          lead: "The character, killer and rolling totals appear in one line.",
          caption: "Luminox checks official Tibia death records and publishes each new event once, creating a permanent Discord history that members can understand immediately.",
          alt: "Luminox Discord death announcements with character links, killers and monthly and yearly death totals."
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
          file: "bot-recruitment-panel-03.png",
          width: 718,
          height: 678,
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
          file: "bot-staff-voting-05.png",
          width: 615,
          height: 360,
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
        },
        {
          file: "bot-staff-voting-05.png",
          width: 615,
          height: 360,
          tone: "violet",
          variant: "compact",
          kicker: "Private staff voting",
          title: "Candidate totals are visible without exposing individual voters.",
          lead: "Only configured moderators and administrators can act.",
          caption: "The guide explains nomination eligibility, anonymous voting, duplicate prevention and the administrator conclusion flow.",
          alt: "Luminox Staff Voting panel with no active candidacies and Start candidacy, Vote and Conclude controls."
        }
      ]
    },
    "bot-support.html": {
      eyebrow: "Private by default",
      title: "The public panel opens a private support conversation.",
      summary: "Members choose a category and complete its required questions from one permanent entry point. Luminox then creates a private thread for the requester and responsible staff.",
      tone: "cyan",
      additionalPreviewPlacements: [
        { previewIndex: 1, collection: "gallery", itemIndex: 2 }
      ],
      items: [
        {
          file: "bot-support-01.png",
          width: 604,
          height: 465,
          cropTop: 10,
          tone: "cyan",
          kicker: "Private Support",
          title: "Members understand the process before opening a ticket.",
          lead: "Required answers, media and privacy are explained in advance.",
          caption: "Open ticket starts a new guided request, while My tickets returns the member to open or archived conversations linked to the same account.",
          alt: "Luminox Private Support panel explaining ticket creation, privacy and Open ticket and My tickets buttons."
        }
      ],
      gallery: {
        slides: [
          {
            file: "bot-support-02.png", width: 1537, height: 1023, tone: "cyan",
            kicker: "Guided routing", title: "One selector routes each request to the correct staff team.",
            lead: "Members see what every support category is for before continuing.",
            caption: "Complaints, registration help and staff applications remain easy to distinguish without exposing the resulting conversation in a public channel.",
            alt: "Luminox Support category selector showing Complaints, Registration and Staff Applications.", href: "docs-support.html#open", linkLabel: "See the complete member flow"
          },
          {
            file: "bot-support-03.png", width: 983, height: 1601, tone: "violet",
            kicker: "Complete context", title: "Required questions and evidence are collected before opening the thread.",
            lead: "The form adapts to the selected category instead of asking everyone the same questions.",
            caption: "Configurable fields and initial media requirements help responsible staff receive the facts they need from the first message.",
            alt: "Luminox Support complaint form with required questions and required media upload.", href: "docs-support.html#categories", linkLabel: "See category configuration"
          },
          {
            file: "bot-support-thread-01.png", width: 296, height: 90, tone: "cyan",
            kicker: "Protected thread", title: "The private case remains attached to its public entry point.",
            lead: "The requester sees the ticket beneath #help without exposing it to the server.",
            caption: "Discord's native channel structure keeps active support easy to locate while role-aware access protects the complete conversation.",
            alt: "Discord Support category showing the help channel and a nested Complaint about user thread.", href: "docs-support.html#threads", linkLabel: "See the channel and thread model"
          },
          {
            file: "bot-support-history-05.png", width: 663, height: 308, tone: "violet",
            kicker: "My Support Tickets", title: "Private history distinguishes creator, staff and invited participation.",
            lead: "One paginated response returns the viewer to the right active or archived case.",
            caption: "The relationship, category, state and latest activity remain readable without exposing ticket history publicly.",
            alt: "Luminox My Support Tickets private view showing a resolved staff ticket and pagination controls.", href: "docs-support.html#history", linkLabel: "See how My Tickets works"
          }
        ]
      }
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
        },
        {
          file: "bot-tracker-transfers-02.png",
          width: 646,
          height: 898,
          tone: "violet",
          variant: "tall",
          kicker: "Permanent transfer history",
          title: "Every world move remains fixed above the live summary.",
          lead: "Character, origin, destination and timestamp remain traceable.",
          caption: "The final tracker panel summarizes recent events and links to the complete log without duplicating the permanent messages above it.",
          alt: "Luminox Character Tracker showing permanent transfer messages and a refreshed recent event panel."
        }
      ]
    },
    "bot-website.html": {
      eyebrow: "Founder publishing in Discord",
      title: "The live editorial panel keeps every action understandable.",
      summary: "Gallery submissions, multi-message Blog drafts, website status and staff review remain together inside Lumina's private Founder workflow.",
      tone: "violet",
      items: [
        {
          file: "bot-website-panel-01.png",
          width: 687,
          height: 721,
          tone: "violet",
          variant: "portrait",
          kicker: "Lumina Website",
          title: "Publishing starts and remains reviewable inside Discord.",
          lead: "Members submit screenshots while authorized authors and staff manage Blog content.",
          caption: "Website status, supported files, publishing queues and the copyright period remain visible beside the actions that open each secure review flow.",
          alt: "Luminox Lumina Website panel showing website status, screenshot and blog publishing instructions, and staff review controls."
        }
      ]
    },
    "docs-website.html": {
      eyebrow: "Founder publishing in practice",
      title: "The panel maps directly to the secured publishing workflow.",
      summary: "Administrators can compare the technical guide with the exact Discord controls used for Gallery media, Blog drafts, staff review and live-site status.",
      tone: "violet",
      anchor: ".doc-layout",
      position: "before",
      items: [
        {
          file: "bot-website-panel-01.png",
          width: 687,
          height: 721,
          tone: "violet",
          variant: "portrait",
          kicker: "Founder Website panel",
          title: "Every publishing route explains its own boundary.",
          lead: "Allowed files, private threads, review queues and live status remain visible.",
          caption: "The guide below documents how each button creates a validated draft or staff review without allowing arbitrary repository access from Discord.",
          alt: "Luminox Founder Website panel showing Gallery and Blog publishing instructions, website health and review controls."
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

  const allItems = config.items || [];
  const allGallerySlides = config.gallery?.slides || [];
  const getScreenshotGeometry = (item) => {
    const cropTop = Math.max(0, Math.min(Number(item.cropTop) || 0, item.height - 1));
    const visibleHeight = Math.max(1, item.height - cropTop);
    const aspect = item.width / visibleHeight;
    const maxDisplayHeight = item.variant === "channel"
      ? 680
      : aspect < 0.72
        ? 640
        : aspect < 1
          ? 600
          : 520;
    const frameWidth = aspect < 1.05
      ? Math.min(900, Math.max(260, Math.round(aspect * maxDisplayHeight)))
      : 900;

    return { aspect, cropTop, frameWidth };
  };
  const renderScreenshotCard = (item, index, { intro = false } = {}) => {
    const geometry = getScreenshotGeometry(item);
    const classes = ["discord-screenshot-card", `discord-screenshot-card--${item.tone || config.tone || "violet"}`];
    if (item.variant) classes.push(`discord-screenshot-card--${item.variant}`);
    if (item.wide && !intro) classes.push("discord-screenshot-card--wide");
    if (intro) classes.push("discord-screenshot-card--intro");
    if (geometry.cropTop) classes.push("discord-screenshot-card--crop-top");

    return `
      <figure class="${classes.join(" ")}" style="--shot-aspect: ${geometry.aspect}; --shot-frame-width: ${geometry.frameWidth}px;"${intro ? ` data-screenshot-preview="${item.file}"` : ""}>
        <header class="discord-screenshot-card__header">
          <div>
            <span class="discord-screenshot-card__kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="discord-screenshot-card__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        </header>
        <div class="discord-screenshot-card__media">
          <img class="discord-screenshot-card__image" src="assets/screenshots/${item.file}" width="${item.width}" height="${item.height}" loading="${intro ? "eager" : "lazy"}" decoding="async" alt="${item.alt}">
        </div>
        <figcaption class="discord-screenshot-card__caption">
          <p><strong>${item.lead}</strong><span>${item.caption}</span></p>
        </figcaption>
      </figure>`;
  };

  const usedItemIndexes = new Set();
  const usedGalleryIndexes = new Set();
  if (pageName.startsWith("bot-") && allItems.length) {
    const placements = [
      { previewIndex: 0, collection: "items", itemIndex: 0 },
      ...(config.additionalPreviewPlacements || [])
    ];
    const previews = Array.from(main.querySelectorAll(".product-preview"));

    placements.forEach((placement, placementIndex) => {
      const preview = previews[placement.previewIndex];
      const collection = placement.collection === "gallery" ? allGallerySlides : allItems;
      const item = collection[placement.itemIndex];
      if (!preview || !item) return;

      const template = document.createElement("template");
      template.innerHTML = renderScreenshotCard(item, placementIndex, { intro: true }).trim();
      const card = template.content.firstElementChild;
      const parentSection = preview.closest(".section.split");

      preview.replaceWith(card);
      if (parentSection) {
        parentSection.classList.add(placement.previewIndex === 0 ? "bot-visual-intro" : "bot-visual-proof");
      }

      const keepDetailedCapture = item.height / item.width > 1.45;
      if (!keepDetailedCapture && placement.collection === "gallery") usedGalleryIndexes.add(placement.itemIndex);
      else if (!keepDetailedCapture) usedItemIndexes.add(placement.itemIndex);
    });
  }

  const remainingItems = allItems.filter((item, index) => !usedItemIndexes.has(index));
  const gallerySlides = allGallerySlides.filter((item, index) => !usedGalleryIndexes.has(index));
  if (!remainingItems.length && !gallerySlides.length) return;

  const headingId = `discord-showcase-${pageName.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
  const section = document.createElement("section");
  section.className = `section product-screenshot-showcase product-screenshot-showcase--${config.tone || "violet"}`;
  section.dataset.screenshotShowcase = pageName;
  section.setAttribute("aria-labelledby", headingId);

  const cards = remainingItems.map((item, index) => renderScreenshotCard(item, index)).join("");
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
  if (remainingItems.length + (initialGallerySlide ? 1 : 0) === 1) gridClasses.push("discord-screenshot-grid--single");
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
