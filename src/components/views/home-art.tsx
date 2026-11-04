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

const ai = [Customer, Insights, Report]
const trust = [Sync, Audit, Backup]

// Pick a spot by its position in the content list.
export function AiArt({ i }: { i: number }) {
  const A = ai[i]
  return <A />
}
export function TrustArt({ i }: { i: number }) {
  const A = trust[i]
  return <A />
}
