import type { ReactNode } from "react"

// Wordless line-art spots for the Home page, in the brand's navy and copper. No text inside, so no copy to
// keep in sync with website-updates/. Inline SVG: no requests, themes with the h-* colors.
// home-fx.tsx draws every [data-draw] path once the svg scrolls into view (data-fx="draw").

function Art({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-1 block h-20 w-[120px] stroke-h-muted"
      data-fx="draw"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// pathLength 1 + dash "1 3" lets one dashoffset animation draw any path, whatever its real length.
const D = { "data-draw": "", pathLength: 1, strokeDasharray: "1 3" } as const
const acc = "stroke-h-accent"
const solid = "fill-copper-400 stroke-none"
// Copper accents grow slightly when the parent card (class "group") is hovered.
const pop = "origin-center [transform-box:fill-box] transition-transform duration-300 ease-soft group-hover:scale-[1.15]"

// Customer Assistant: a customer card with a suggestion bubble.
const Customer = () => (
  <Art>
    <rect x="8" y="8" width="76" height="56" rx="8" />
    <circle cx="28" cy="28" r="8" />
    <path d="M14 54c2-7 8-10 14-10s12 3 14 10" />
    <path {...D} d="M52 24h24M52 34h16" />
    <g className={pop}>
      <rect x="62" y="46" width="48" height="26" rx="13" className={solid} />
      {[76, 86, 96].map((x) => (
        <circle key={x} cx={x} cy="59" r="2.5" className="fill-navy-900 stroke-none" />
      ))}
    </g>
  </Art>
)

// Insights Assistant: a trend line with one unusual point flagged.
const Insights = () => (
  <Art>
    <path d="M10 8v62h100" />
    <path {...D} d="M16 56l16-10 16 8 18-26 16 14 22-12" className={acc} />
    <g className={pop}>
      <circle cx="66" cy="28" r="9" className="stroke-copper-400" />
      <circle cx="66" cy="28" r="4" className={solid} />
    </g>
  </Art>
)

// Reporting Assistant: a report page being written, with a spark.
const Report = () => (
  <Art>
    <rect x="12" y="6" width="70" height="68" rx="8" />
    <path {...D} d="M24 22h28" className={acc} />
    <path {...D} d="M24 36h46M24 46h46M24 56h26" />
    <path d="M98 13l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" className={`${pop} ${solid}`} />
  </Art>
)

// State tracking and reporting: your record and the state's record, matched.
const Sync = () => (
  <Art>
    <rect x="6" y="18" width="32" height="44" rx="6" />
    <path d="M14 32h16M14 42h16M14 52h10" />
    <rect x="82" y="18" width="32" height="44" rx="6" />
    <path d="M90 32h16M90 42h16M90 52h10" />
    <path d="M42 40h36" strokeDasharray="0.01 6" className="stroke-copper-400" />
    <g className={pop}>
      <circle cx="60" cy="40" r="11" className={solid} />
      <path {...D} d="M54 40l4 4 8-9" className="stroke-navy-900" />
    </g>
  </Art>
)

// Audit trails and permissions: a lock beside a log of changes.
const Audit = () => (
  <Art>
    <rect x="10" y="34" width="36" height="32" rx="6" />
    <path d="M18 34v-8a10 10 0 0 1 20 0v8" />
    <circle cx="28" cy="49" r="4" className={`${pop} ${solid}`} />
    <path d="M68 22v36" strokeDasharray="0.01 6" className="stroke-copper-400" />
    {[18, 40, 62].map((y) => (
      <g key={y}>
        <circle cx="68" cy={y} r="3.5" className={solid} />
        <path {...D} d={`M80 ${y}h30`} />
      </g>
    ))}
  </Art>
)

// Encrypted and backed up: stored data with a verified badge.
const Backup = () => (
  <Art>
    <ellipse cx="52" cy="16" rx="34" ry="9" />
    <path d="M18 16v44c0 5 15 9 34 9s34-4 34-9V16M18 38c0 5 15 9 34 9s34-4 34-9" />
    <g className={pop}>
      <circle cx="94" cy="58" r="14" className={solid} />
      <path {...D} d="M87 58l5 5 9-11" className="stroke-navy-900" />
    </g>
  </Art>
)

// "Explore the platform" cards, in the order of gallery.items.
const Pos = () => (
  <Art>
    <rect x="20" y="6" width="80" height="48" rx="6" />
    <path {...D} d="M30 18h22M30 28h22M68 18h22M68 28h22" />
    <rect x="30" y="38" width="60" height="9" rx="4.5" className={`${pop} ${solid}`} />
    <path d="M60 54v10M44 66h32" />
  </Art>
)

const Delivery = () => (
  <Art>
    <path {...D} d="M6 28h12M10 38h8M6 48h12" className={acc} />
    <path d="M26 20h46v34H26zM72 30h18l12 12v12H72z" />
    {[44, 88].map((x) => (
      <circle key={x} cx={x} cy="58" r="7" className={`${pop} ${solid}`} />
    ))}
  </Art>
)

const Pay = () => (
  <Art>
    <rect x="14" y="14" width="72" height="46" rx="8" />
    <path d="M14 28h72" />
    <rect x="24" y="38" width="14" height="10" rx="2" className={solid} />
    <path {...D} d="M46 44h24" />
    <g className={pop}>
      <circle cx="92" cy="58" r="13" className={solid} />
      <path {...D} d="M85 58l5 5 9-11" className="stroke-navy-900" />
    </g>
  </Art>
)

const App = () => (
  <Art>
    <rect x="38" y="4" width="44" height="72" rx="8" />
    <path d="M54 10h12" />
    <rect x="46" y="22" width="12" height="12" rx="3" />
    <rect x="62" y="22" width="12" height="12" rx="3" />
    <rect x="46" y="40" width="12" height="12" rx="3" />
    <rect x="62" y="40" width="12" height="12" rx="3" className={`${pop} ${solid}`} />
    <path {...D} d="M50 64h20" />
    <circle cx="20" cy="26" r="3" className={solid} />
    <circle cx="102" cy="52" r="4" className={solid} />
  </Art>
)

const Support = () => (
  <Art>
    <path {...D} d="M30 46v-4a30 30 0 0 1 60 0v4" className={acc} />
    <rect x="22" y="42" width="14" height="22" rx="5" />
    <rect x="84" y="42" width="14" height="22" rx="5" />
    <path d="M91 64c0 8-10 10-22 10" />
    <circle cx="64" cy="74" r="4" className={`${pop} ${solid}`} />
  </Art>
)

const Locations = () => (
  <Art>
    <path {...D} d="M60 14c-10 0-18 8-18 17 0 13 18 29 18 29s18-16 18-29c0-9-8-17-18-17z" />
    <circle cx="60" cy="31" r="6" className={`${pop} ${solid}`} />
    <path d="M22 56h24M74 56h24M26 24l16 4M94 24l-16 4" strokeDasharray="0.01 6" className="stroke-copper-400" />
    {[[16, 56], [104, 56], [20, 22], [100, 22]].map(([x, y]) => (
      <circle key={x + y} cx={x} cy={y} r="5" />
    ))}
  </Art>
)

const Shield = () => (
  <Art>
    <path {...D} d="M60 8l32 10v20c0 18-14 30-32 36-18-6-32-18-32-36V18z" />
    <path {...D} d="M46 38l10 10 18-20" className={`${pop} ${acc}`} />
    <circle cx="14" cy="26" r="2.5" className={solid} />
    <circle cx="106" cy="26" r="2.5" className={solid} />
  </Art>
)

const Receipt = () => (
  <Art>
    <path {...D} d="M34 6h52v62l-8-5-9 5-9-5-9 5-9-5-8 5z" />
    <path {...D} d="M44 20h32M44 30h32M44 40h18" />
    <rect x="44" y="48" width="32" height="6" rx="3" className={`${pop} ${solid}`} />
    <path d="M100 11l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" className={`${pop} ${solid}`} />
  </Art>
)

const Stock = () => (
  <Art>
    <path {...D} d="M60 8l32 14-32 14-32-14z" />
    <path d="M28 22v30l32 16V36M92 22v30L60 68" />
    <path d="M44 15l32 14" className={acc} />
    <g className={pop}>
      <circle cx="102" cy="14" r="9" className="stroke-copper-400" />
      <circle cx="102" cy="14" r="4" className={solid} />
    </g>
  </Art>
)

// "Why teams choose Bleaum" rows, in the order of why.items.
const Setup = () => (
  <Art>
    <rect x="14" y="8" width="14" height="14" rx="4" />
    <path {...D} d="M17 15l3 3 5-6M38 15h58" />
    <rect x="14" y="30" width="14" height="14" rx="4" />
    <path {...D} d="M17 37l3 3 5-6M38 37h44" />
    <g className={pop}>
      <rect x="14" y="52" width="14" height="14" rx="4" className={solid} />
      <path d="M17 59l3 3 5-6" className="stroke-navy-900" />
    </g>
    <path {...D} d="M38 59h50" className={acc} />
  </Art>
)

const OneSystem = () => (
  <Art>
    <path {...D} d="M26 20l24 15M94 20l-24 15M26 60l24-15M94 60l-24-15" />
    {[[20, 16], [100, 16], [20, 64], [100, 64]].map(([x, y]) => (
      <circle key={x + y} cx={x} cy={y} r="6" />
    ))}
    <circle cx="60" cy="40" r="10" className={`${pop} ${solid}`} />
  </Art>
)

const Devices = () => (
  <Art>
    <rect x="8" y="14" width="52" height="36" rx="4" />
    <path {...D} d="M34 50v8M24 60h20" />
    <rect x="68" y="26" width="28" height="38" rx="4" />
    <rect x="100" y="36" width="14" height="28" rx="3" />
    <circle cx="34" cy="32" r="4" className={`${pop} ${solid}`} />
    <circle cx="82" cy="45" r="3.5" className={`${pop} ${solid}`} />
    <circle cx="107" cy="50" r="2.5" className={`${pop} ${solid}`} />
  </Art>
)

const People = () => (
  <Art>
    <circle cx="22" cy="50" r="9" className={`${pop} ${solid}`} />
    <path {...D} d="M8 76c0-8 6-12 14-12s14 4 14 12" className={acc} />
    <rect x="40" y="8" width="70" height="36" rx="10" />
    <path d="M54 44v10l10-10" />
    <path {...D} d="M52 20h46M52 30h28" />
  </Art>
)

const Regulated = () => (
  <Art>
    <path {...D} d="M16 30l6-18h60l6 18zM22 30v38h60V30" />
    <path d="M44 68V48h16v20" />
    <g className={pop}>
      <path d="M98 36l14 5v10c0 9-6 15-14 18-8-3-14-9-14-18V41z" className={solid} />
      <path {...D} d="M92 52l4 4 8-9" className="stroke-navy-900" />
    </g>
  </Art>
)

const Pricing = () => (
  <Art>
    <rect x="24" y="6" width="64" height="68" rx="8" />
    <path {...D} d="M36 20h20M36 30h40" />
    <rect x="36" y="40" width="28" height="8" rx="4" className={solid} />
    <path {...D} d="M36 62c4-8 6-8 8 0s6 8 10 0 6-4 10-2" className={acc} />
    <g className={pop}>
      <circle cx="98" cy="48" r="12" className={solid} />
      <circle cx="98" cy="48" r="6" className="stroke-navy-900" />
    </g>
  </Art>
)

const ai = [Customer, Insights, Report]
const trust = [Sync, Audit, Backup]
const why = [Setup, OneSystem, Devices, People, Regulated, Pricing]
const gallery = [Pos, Delivery, Pay, App, Support, Locations, Shield, Receipt, Stock]

// Pick a spot by its position in the content list.
export function AiArt({ i }: { i: number }) {
  const A = ai[i]
  return <A />
}
export function TrustArt({ i }: { i: number }) {
  const A = trust[i]
  return <A />
}
export function GalleryArt({ i }: { i: number }) {
  const A = gallery[i]
  return <A />
}
export function WhyArt({ i }: { i: number }) {
  const A = why[i]
  return <A />
}
