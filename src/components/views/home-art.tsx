import type { ReactNode } from "react"

// Wordless line-art spots for the Home page, in the brand's navy and copper. No text inside, so no copy to
// keep in sync with website-updates/. Inline SVG: no requests, themes with the h-* colors.
// home-fx.tsx draws every [data-draw] path once the svg scrolls into view (data-fx="draw"), then springs in any
// [data-pop] and draws the [data-draw] marks inside them last. [data-pop] goes on a wrapper <g> when the element
// carries the CSS hover scale (pop), so GSAP and CSS don't fight over one transform. On the gallery cards each
// [data-hover] part plays the move it names (see `moves` in home-fx.tsx) when the card is hovered.

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
    <rect {...D} x="20" y="6" width="80" height="48" rx="6" />
    <path {...D} data-hover="redraw" d="M30 18h22M30 28h22M68 18h22M68 28h22" />
    <g data-pop="" data-hover="fill">
      <rect x="30" y="38" width="60" height="9" rx="4.5" className={`${pop} ${solid}`} />
    </g>
    <path {...D} d="M60 54v10M44 66h32" />
  </Art>
)

const Delivery = () => (
  <Art>
    <g data-hover="drive">
      <path {...D} d="M26 20h46v34H26zM72 30h18l12 12v12H72z" />
      <path {...D} d="M6 28h12M10 38h8M6 48h12" className={acc} />
      {[44, 88].map((x) => (
        <g key={x} data-pop="">
          <circle cx={x} cy="58" r="7" className={`${pop} ${solid}`} />
        </g>
      ))}
    </g>
  </Art>
)

const Pay = () => (
  <Art>
    <g data-hover="tilt">
      <rect {...D} x="14" y="14" width="72" height="46" rx="8" />
      <path {...D} d="M14 28h72" />
      <rect data-pop="" x="24" y="38" width="14" height="10" rx="2" className={solid} />
      <path {...D} d="M46 44h24" />
    </g>
    <g data-pop="" data-hover="spin">
      <g className={pop}>
        <circle cx="92" cy="58" r="13" className={solid} />
        <path {...D} data-hover="redraw" d="M85 58l5 5 9-11" className="stroke-navy-900" />
      </g>
    </g>
  </Art>
)

const App = () => (
  <Art>
    <rect {...D} x="38" y="4" width="44" height="72" rx="8" />
    <path {...D} d="M54 10h12" />
    <rect {...D} data-hover="hop" x="46" y="22" width="12" height="12" rx="3" />
    <rect {...D} data-hover="hop" x="62" y="22" width="12" height="12" rx="3" />
    <rect {...D} data-hover="hop" x="46" y="40" width="12" height="12" rx="3" />
    <g data-pop="" data-hover="hop">
      <rect x="62" y="40" width="12" height="12" rx="3" className={`${pop} ${solid}`} />
    </g>
    <path {...D} d="M50 64h20" />
    <circle data-pop="" data-hover="pulse" cx="20" cy="26" r="3" className={solid} />
    <circle data-pop="" data-hover="pulse" cx="102" cy="52" r="4" className={solid} />
  </Art>
)

const Support = () => (
  <Art>
    <g data-hover="tilt">
      <path {...D} d="M30 46v-4a30 30 0 0 1 60 0v4" className={acc} />
      <rect {...D} x="22" y="42" width="14" height="22" rx="5" />
      <rect {...D} x="84" y="42" width="14" height="22" rx="5" />
      <path {...D} d="M91 64c0 8-10 10-22 10" />
      <g data-pop="" data-hover="pulse">
        <circle cx="64" cy="74" r="4" className={`${pop} ${solid}`} />
      </g>
    </g>
  </Art>
)

const Locations = () => (
  <Art>
    <g data-hover="hop">
      <path {...D} d="M60 14c-10 0-18 8-18 17 0 13 18 29 18 29s18-16 18-29c0-9-8-17-18-17z" />
      <g data-pop="">
        <circle cx="60" cy="31" r="6" className={`${pop} ${solid}`} />
      </g>
    </g>
    <path data-pop="" data-hover="flow" d="M22 56h24M74 56h24M26 24l16 4M94 24l-16 4" strokeDasharray="0.01 6" className="stroke-copper-400" />
    {[[16, 56], [104, 56], [20, 22], [100, 22]].map(([x, y]) => (
      <circle key={x + y} data-pop="" data-hover="pulse" cx={x} cy={y} r="5" />
    ))}
  </Art>
)

const Shield = () => (
  <Art>
    <g data-hover="beat">
      <path {...D} d="M60 8l32 10v20c0 18-14 30-32 36-18-6-32-18-32-36V18z" />
      <path {...D} data-hover="redraw" d="M46 38l10 10 18-20" className={`${pop} ${acc}`} />
    </g>
    <circle data-pop="" data-hover="pulse" cx="14" cy="26" r="2.5" className={solid} />
    <circle data-pop="" data-hover="pulse" cx="106" cy="26" r="2.5" className={solid} />
  </Art>
)

const Receipt = () => (
  <Art>
    <path {...D} d="M34 6h52v62l-8-5-9 5-9-5-9 5-9-5-8 5z" />
    <path {...D} data-hover="redraw" d="M44 20h32M44 30h32M44 40h18" />
    <g data-pop="" data-hover="fill">
      <rect x="44" y="48" width="32" height="6" rx="3" className={`${pop} ${solid}`} />
    </g>
    <g data-pop="" data-hover="spin">
      <path d="M100 11l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" className={`${pop} ${solid}`} />
    </g>
  </Art>
)

const Stock = () => (
  <Art>
    <g data-hover="hop">
      <path {...D} d="M60 8l32 14-32 14-32-14z" />
      <path {...D} d="M28 22v30l32 16V36M92 22v30L60 68" />
      <path {...D} data-hover="redraw" d="M44 15l32 14" className={acc} />
    </g>
    <g data-pop="" data-hover="pulse">
      <g className={pop}>
        <circle cx="102" cy="14" r="9" className="stroke-copper-400" />
        <circle cx="102" cy="14" r="4" className={solid} />
      </g>
    </g>
  </Art>
)

const trust = [Sync, Audit, Backup]
const gallery = [Pos, Delivery, Pay, App, Support, Locations, Shield, Receipt, Stock]

// Pick a spot by its position in the content list.
export function TrustArt({ i }: { i: number }) {
  const A = trust[i]
  return <A />
}
export function GalleryArt({ i }: { i: number }) {
  const A = gallery[i]
  return <A />
}
