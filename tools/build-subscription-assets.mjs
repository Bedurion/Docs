import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'assets', 'subscriptions');

const skus = [
  {
    edition: 'universal',
    tier: 'core',
    tierNumber: 1,
    name: 'Luminox Universal Core',
    price: '€4.99 / month',
    description: 'Add progression and structured staff workflows to any gaming community with Loyalty, leaderboards, rewards, applications, voting and higher limits.',
    benefits: [
      ['🏆', 'Loyalty & Leaderboards', 'Reward activity with Loyalty Points, public rankings, Server Boost rewards and Stream rewards.'],
      ['🗳️', 'Staff Participation', 'Run public staff applications and private staff voting through guided Discord panels.'],
      ['📈', 'Core Capacity', 'Use up to 10 active events, 6 Support categories and 10 Automod channels.'],
      ['⚡', 'Faster Operations', 'Use 10-minute eligible external refreshes, 3-minute cached panels and 2-year history.']
    ]
  },
  {
    edition: 'universal',
    tier: 'growth',
    tierNumber: 2,
    name: 'Luminox Universal Growth',
    price: '€9.99 / month',
    description: 'Run every Universal Core system at higher capacity, with faster eligible refreshes, five-year history and more room for events, Support and Automod.',
    benefits: [
      ['✨', 'Everything in Core', 'Keep every Universal Core module and your existing Discord configuration.'],
      ['📈', 'Growth Capacity', 'Use up to 30 active events, 15 Support categories and 30 Automod channels.'],
      ['⚡', 'Faster Refresh Policy', 'Use 5-minute eligible external refreshes and 2-minute cached panel refreshes.'],
      ['🗄️', 'Five-Year History', 'Retain useful operational history for up to 5 years.'],
      ['🧭', 'Priority Guidance', 'Receive priority configuration guidance for a smoother rollout.']
    ]
  },
  {
    edition: 'universal',
    tier: 'scale',
    tierNumber: 3,
    name: 'Luminox Universal Scale',
    price: '€19.99 / month',
    description: 'Operate Luminox as a daily platform with website publishing, the highest Universal limits, fastest public refresh policy and ten-year history.',
    benefits: [
      ['🌐', 'Website Publishing', 'Collect, review and publish approved website content directly from Discord.'],
      ['🚀', 'Maximum Capacity', 'Use up to 100 active events, 25 Support categories and 100 Automod channels.'],
      ['⚡', 'Fastest Public Policy', 'Use 2-minute eligible external refreshes and 1-minute cached panel refreshes.'],
      ['🗄️', 'Ten-Year History', 'Retain useful operational history for up to 10 years.'],
      ['🛠️', 'Priority Setup Support', 'Receive priority setup support for large or established communities.']
    ]
  },
  {
    edition: 'community',
    tier: 'core',
    tierNumber: 1,
    name: 'Luminox Community Core',
    price: '€7.99 / month',
    description: 'Add Loyalty, specialized Tibia events and live risk awareness with Boss and Quest boards, Watchlists, Blacklist and Enemies Online.',
    benefits: [
      ['👁️', 'Tibia Risk Intelligence', 'Unlock Watchlists, Blacklist and Enemies Online monitoring for your configured world.'],
      ['⚔️', 'Boss & Quest Events', 'Add dedicated Boss and Quest event workflows to Hunts and general Events.'],
      ['🏆', 'Loyalty & Staff Systems', 'Unlock Loyalty, Boost and Stream rewards, staff applications and private voting.'],
      ['📈', 'Core Capacity', 'Use up to 10 active events, 6 Support categories and 10 Automod channels.'],
      ['⚡', 'Faster Operations', 'Use 10-minute eligible external refreshes, 3-minute cached panels and 2-year history.']
    ]
  },
  {
    edition: 'community',
    tier: 'growth',
    tierNumber: 2,
    name: 'Luminox Community Growth',
    price: '€14.99 / month',
    description: 'Run a connected Tibia guild platform with Recruitment, Tracker, Guards, Finder, GuildBank, Loot Split, Guildhall and higher limits.',
    benefits: [
      ['🧭', 'Recruitment & Identity', 'Unlock recruitment rewards and the Tibia character identity tracker.'],
      ['🛡️', 'Guards & Finder', 'Coordinate enemy alerts, battle tracking and Tibia team finding.'],
      ['💰', 'Guild Economy', 'Unlock GuildBank, Loot Split and Guildhall room management.'],
      ['📈', 'Growth Capacity', 'Use up to 30 active events, 15 Support categories and 30 Automod channels.'],
      ['⚡', 'Faster, Longer History', 'Use 5-minute eligible external refreshes, 2-minute cached panels and 5-year history.']
    ]
  },
  {
    edition: 'community',
    tier: 'scale',
    tierNumber: 3,
    name: 'Luminox Community Scale',
    price: '€29.99 / month',
    description: 'Unlock every public Community feature, Discord-based website publishing, maximum capacity, fastest public refresh policy and ten-year history.',
    benefits: [
      ['💎', 'Complete Community Suite', 'Use every public Community Edition module in one Discord-native system.'],
      ['🌐', 'Website Publishing', 'Collect, review and publish approved website content directly from Discord.'],
      ['🚀', 'Maximum Capacity', 'Use up to 100 active events, 25 Support categories and 100 Automod channels.'],
      ['⚡', 'Fastest Public Policy', 'Use 2-minute eligible external refreshes and 1-minute cached panel refreshes.'],
      ['🗄️', 'Ten-Year History', 'Retain useful operational history for up to 10 years.']
    ]
  }
];

const palettes = {
  universal: {
    editionLabel: 'UNIVERSAL EDITION',
    primary: '#A77CFF',
    secondary: '#56C7F5',
    tertiary: '#F265A7',
    panel: '#0B1025',
    panelDeep: '#050817'
  },
  community: {
    editionLabel: 'COMMUNITY EDITION',
    primary: '#F3CC63',
    secondary: '#55DEA0',
    tertiary: '#56C7F5',
    panel: '#0B1521',
    panelDeep: '#050B14'
  }
};

const tierMetadata = {
  core: { label: 'CORE', roman: 'I' },
  growth: { label: 'GROWTH', roman: 'II' },
  scale: { label: 'SCALE', roman: 'III' }
};

function validateCatalog() {
  for (const sku of skus) {
    if (sku.name.length > 80) {
      throw new Error(`${sku.name}: SKU name exceeds 80 characters.`);
    }
    if (sku.description.length > 160) {
      throw new Error(`${sku.name}: description exceeds 160 characters (${sku.description.length}).`);
    }
    if (sku.benefits.length > 6) {
      throw new Error(`${sku.name}: more than 6 benefits.`);
    }
    for (const [, title, description] of sku.benefits) {
      if (title.length > 80) {
        throw new Error(`${sku.name}: benefit title exceeds 80 characters.`);
      }
      if (description.length > 160) {
        throw new Error(`${sku.name}: benefit description exceeds 160 characters.`);
      }
    }
  }
}

function universalMark(palette) {
  return `
    <circle cx="125" cy="106" r="51" fill="#070B1B" fill-opacity=".76" stroke="url(#accent)" stroke-width="2.2"/>
    <ellipse cx="125" cy="106" rx="23" ry="51" stroke="${palette.primary}" stroke-width="1.4" stroke-opacity=".72"/>
    <ellipse cx="125" cy="106" rx="40" ry="17" stroke="${palette.secondary}" stroke-width="1.4" stroke-opacity=".58"/>
    <path d="M74 106h102M84 82c12 7 26 10 41 10s29-3 41-10M84 130c12-7 26-10 41-10s29 3 41 10" stroke="url(#accent)" stroke-width="1.25" stroke-linecap="round" stroke-opacity=".72"/>
  `;
}

function communityMark(palette) {
  return `
    <path d="m125 52 47 17v38c0 35-18 61-47 77-29-16-47-42-47-77V69l47-17Z" fill="#06111A" fill-opacity=".78" stroke="url(#accent)" stroke-width="2.3" stroke-linejoin="round"/>
    <circle cx="125" cy="94" r="14" stroke="${palette.secondary}" stroke-width="1.8" stroke-opacity=".65"/>
    <circle cx="96" cy="110" r="9" stroke="${palette.primary}" stroke-width="1.6" stroke-opacity=".58"/>
    <circle cx="154" cy="110" r="9" stroke="${palette.tertiary}" stroke-width="1.6" stroke-opacity=".58"/>
    <path d="M92 139c3-18 14-27 33-27s30 9 33 27M80 134c2-11 8-18 18-20M170 134c-2-11-8-18-18-20" stroke="url(#accent)" stroke-width="1.8" stroke-linecap="round" stroke-opacity=".62"/>
  `;
}

function tierDecoration(sku, palette) {
  if (sku.tier === 'core') {
    return `
      <path d="m125 43 68 39v78l-68 39-68-39V82l68-39Z" fill="none" stroke="url(#accent)" stroke-width="1.2" stroke-opacity=".32" stroke-dasharray="3 7"/>
      <circle cx="194" cy="106" r="4.5" fill="${palette.secondary}" filter="url(#nodeGlow)"/>
      <path d="M194 106h22" stroke="${palette.secondary}" stroke-width="1.4" stroke-linecap="round" stroke-opacity=".55"/>
    `;
  }

  if (sku.tier === 'growth') {
    return `
      <ellipse cx="125" cy="106" rx="80" ry="67" fill="none" stroke="url(#accent)" stroke-width="1.3" stroke-opacity=".34" stroke-dasharray="4 7"/>
      <path d="M63 145 93 119l26 15 34-38 34 21" fill="none" stroke="url(#accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity=".88"/>
      <g filter="url(#nodeGlow)">
        <circle cx="63" cy="145" r="4" fill="${palette.secondary}"/>
        <circle cx="93" cy="119" r="4" fill="${palette.primary}"/>
        <circle cx="119" cy="134" r="4" fill="${palette.tertiary}"/>
        <circle cx="153" cy="96" r="4.5" fill="${palette.primary}"/>
        <circle cx="187" cy="117" r="4" fill="${palette.secondary}"/>
      </g>
      <path d="m116 48 9-9 9 9M116 59l9-9 9 9" stroke="${palette.primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".78"/>
    `;
  }

  return `
    <circle cx="125" cy="106" r="78" fill="none" stroke="url(#accent)" stroke-width="1.2" stroke-opacity=".28"/>
    <circle cx="125" cy="106" r="68" fill="none" stroke="${palette.secondary}" stroke-width="1" stroke-opacity=".2" stroke-dasharray="2 7"/>
    <path d="M69 144 93 119l28 10 26-34 35 16" fill="none" stroke="url(#accent)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>
    <g filter="url(#nodeGlow)">
      <circle cx="69" cy="144" r="4" fill="${palette.secondary}"/>
      <circle cx="93" cy="119" r="4.3" fill="${palette.primary}"/>
      <circle cx="121" cy="129" r="4" fill="${palette.tertiary}"/>
      <circle cx="147" cy="95" r="4.7" fill="${palette.primary}"/>
      <circle cx="182" cy="111" r="4" fill="${palette.secondary}"/>
    </g>
    <path d="M103 48 111 34l14 11 14-11 8 14-8 12h-28l-8-12Z" fill="#091020" stroke="url(#gold)" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="111" cy="34" r="2.8" fill="${palette.secondary}"/><circle cx="125" cy="45" r="2.8" fill="${palette.primary}"/><circle cx="139" cy="34" r="2.8" fill="${palette.tertiary}"/>
  `;
}

function editionBadge(sku, palette) {
  if (sku.edition === 'universal') {
    return `
      <g transform="translate(24 22)" stroke="url(#accent)" fill="none" stroke-linecap="round">
        <circle cx="8" cy="8" r="7" stroke-width="1.5"/>
        <path d="M1 8h14M8 1c2.3 2.2 3.4 4.5 3.4 7S10.3 12.8 8 15M8 1C5.7 3.2 4.6 5.5 4.6 8S5.7 12.8 8 15" stroke-width="1"/>
      </g>
    `;
  }

  return `
    <g transform="translate(24 20)" stroke="url(#accent)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="m8 1 7 2.6V9c0 4.8-2.7 8.8-7 11-4.3-2.2-7-6.2-7-11V3.6L8 1Z" stroke-width="1.4"/>
      <circle cx="8" cy="7.6" r="2.2" stroke-width="1.1"/>
      <path d="M4.8 14c.7-2.4 1.7-3.6 3.2-3.6s2.5 1.2 3.2 3.6" stroke-width="1.1"/>
    </g>
  `;
}

function subscriptionSvg(sku) {
  const palette = palettes[sku.edition];
  const tier = tierMetadata[sku.tier];
  const centralMark = sku.edition === 'universal' ? universalMark(palette) : communityMark(palette);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" role="img" aria-label="${sku.name} subscription artwork">
  <defs>
    <linearGradient id="accent" x1="28" y1="26" x2="222" y2="220" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.primary}"/>
      <stop offset=".52" stop-color="${palette.secondary}"/>
      <stop offset="1" stop-color="${palette.tertiary}"/>
    </linearGradient>
    <linearGradient id="gold" x1="96" y1="65" x2="162" y2="157" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFF4B1"/>
      <stop offset=".35" stop-color="#F3CC63"/>
      <stop offset=".72" stop-color="#D59625"/>
      <stop offset="1" stop-color="#7C4316"/>
    </linearGradient>
    <radialGradient id="aura" cx="0" cy="0" r="1" gradientTransform="translate(125 94) rotate(90) scale(126)" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.primary}" stop-opacity=".3"/>
      <stop offset=".48" stop-color="${palette.secondary}" stop-opacity=".1"/>
      <stop offset="1" stop-color="${palette.panelDeep}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel" x1="19" y1="15" x2="229" y2="236" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.panel}"/>
      <stop offset="1" stop-color="${palette.panelDeep}"/>
    </linearGradient>
    <filter id="shadow" x="-35%" y="-35%" width="170%" height="185%">
      <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#000" flood-opacity=".74"/>
    </filter>
    <filter id="nodeGlow" x="-180%" y="-180%" width="460%" height="460%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="250" height="250" fill="#04060D"/>
  <rect x="6" y="6" width="238" height="238" rx="38" fill="url(#panel)"/>
  <rect x="6.75" y="6.75" width="236.5" height="236.5" rx="37.25" fill="none" stroke="url(#accent)" stroke-width="1.5" stroke-opacity=".78"/>
  <rect x="12" y="12" width="226" height="226" rx="32" fill="url(#aura)"/>
  <g opacity=".16" stroke="${palette.secondary}" stroke-width=".65">
    <path d="M24 61h202M24 171h202M61 24v202M189 24v202"/>
    <circle cx="125" cy="106" r="91" fill="none" stroke-dasharray="2 8"/>
  </g>

  ${editionBadge(sku, palette)}
  <text x="48" y="31" fill="#DDE5F8" fill-opacity=".84" font-family="Arial, Helvetica, sans-serif" font-size="8.5" font-weight="700" letter-spacing="1.3">${palette.editionLabel}</text>
  <text x="220" y="31" fill="${palette.primary}" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="800" text-anchor="end">${tier.roman}</text>

  ${tierDecoration(sku, palette)}
  ${centralMark}

  <g filter="url(#shadow)">
    <path d="M104 71h25v58h36v23h-61V71Z" fill="#1B0E04" stroke="#07050A" stroke-width="6" stroke-linejoin="round"/>
    <path d="M101 67h25v58h36v23h-61V67Z" fill="url(#gold)" stroke="#FFF0A4" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M107 74h12v56h35" fill="none" stroke="#FFF8D2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".58"/>
  </g>

  <path d="M42 184h166" stroke="url(#accent)" stroke-width="1" stroke-opacity=".38"/>
  <text x="125" y="211" fill="#F8FAFF" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" letter-spacing="2.5" text-anchor="middle">${tier.label}</text>
  <g transform="translate(${125 - sku.tierNumber * 9 - (sku.tierNumber - 1) * 3} 225)">
    ${Array.from({ length: sku.tierNumber }, (_, index) => `<rect x="${index * 21}" y="0" width="18" height="4" rx="2" fill="url(#accent)"/>`).join('')}
  </g>
</svg>`;
}

function markdownCatalog() {
  const lines = [
    '# Discord Subscription SKU Copy',
    '',
    'Use **Guild Subscription** for every paid SKU. Each subscription applies to one Discord server and renews monthly.',
    '',
    'Do not create a Free SKU. Free access is the default when a server has no active paid entitlement. Founder Edition is private and is not a public SKU.',
    '',
    'Discord limits used here: SKU name up to 80 characters, SKU description up to 160 characters, and up to 6 benefits with titles and descriptions up to 80 and 160 characters respectively.',
    ''
  ];

  for (const sku of skus) {
    const fileBase = `${sku.edition}-${sku.tier}`;
    lines.push(
      `## ${sku.name}`,
      '',
      `- **Subscription type:** Guild Subscription`,
      `- **Billing:** Monthly recurring`,
      `- **Price:** ${sku.price}`,
      `- **Image:** \`assets/subscriptions/${fileBase}.png\``,
      '',
      '**Description**',
      '',
      sku.description,
      '',
      '**Benefits**',
      ''
    );

    sku.benefits.forEach(([emoji, title, description], index) => {
      lines.push(
        `${index + 1}. **Emoji:** ${emoji}`,
        `   - **Benefit title:** ${title}`,
        `   - **Benefit description:** ${description}`
      );
    });

    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

validateCatalog();
await fs.mkdir(outputDirectory, { recursive: true });

for (const sku of skus) {
  const fileBase = `${sku.edition}-${sku.tier}`;
  const svg = subscriptionSvg(sku);
  const svgPath = path.join(outputDirectory, `${fileBase}.svg`);
  const pngPath = path.join(outputDirectory, `${fileBase}.png`);

  await fs.writeFile(svgPath, svg, 'utf8');
  await sharp(Buffer.from(svg), { density: 384 })
    .resize(250, 250, { fit: 'fill' })
    .png({ compressionLevel: 9, palette: false })
    .toFile(pngPath);
}

await fs.writeFile(
  path.join(outputDirectory, 'discord-sku-copy.md'),
  markdownCatalog(),
  'utf8'
);

console.log(`Built ${skus.length} Discord subscription images and copy in ${outputDirectory}`);
