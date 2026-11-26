import type { ReactNode } from "react"
import { AnimatedIcon } from "./animated-icon"

// Line-art icons. Use anywhere: <PosIcon />, <DeliveryIcon className="size-10 text-white" delay={0.2} />.
// Each one assembles itself whenever it comes into view (see animated-icon.tsx).

type Props = { className?: string; delay?: number }

// pathLength 1 + dash "1 3" lets one dashoffset animation draw any path, whatever its real length.
const D = { "data-draw": "", pathLength: 1, strokeDasharray: "1 3" } as const
// Copper follows the Home theme accent where it exists, plain copper elsewhere.
const acc = "stroke-[var(--h-accent,#DF9770)]"
const solid = "fill-copper-400 stroke-none"
const cut = "fill-navy-900 stroke-none"
const hov = "[transform-box:fill-box] transition-transform duration-500 ease-soft"

const Dot = ({ x, y, r = 1.75 }: { x: number; y: number; r?: number }) => <circle data-dot="" cx={x} cy={y} r={r} className={solid} />
// GSAP owns the transform of a [data-pop] group, so hover moves go on its child and the two never fight.
const Pop = ({ children }: { children: ReactNode }) => <g data-pop="">{children}</g>
// Rounded rectangle and circle as paths, so they can draw in like the other lines.
const rr = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${2 * r - w}a${r} ${r} 0 0 1 ${-r} ${-r}v${2 * r - h}a${r} ${r} 0 0 1 ${r} ${-r}z`
const ring = (x: number, y: number, r: number) => `M${x} ${y - r}a${r} ${r} 0 1 1 0 ${2 * r}a${r} ${r} 0 1 1 0 ${-2 * r}`

// Point of Sale: a register; the receipt prints on hover.
export const PosIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <Pop>
      <path d="M16 14V5h16v9M20 9h8" className={`${hov} ${acc} origin-bottom group-hover:scale-y-[1.3]`} />
    </Pop>
    <path {...D} d={`${rr(6, 14, 36, 22, 4)}M24 36v6M16 42h16`} />
    <path {...D} d="M18 21h12M18 26h9M18 31h11" />
    {[21, 26, 31].map((y) => <Dot key={y} x={13} y={y} />)}
  </AnimatedIcon>
)

// Payments: a card with tap-to-pay waves that pulse on hover.
export const PaymentsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(4, 14, 30, 21, 3.5)}M4 20h30`} />
    <Pop>
      <rect x="8" y="25" width="7" height="5.5" rx="1.5" className={solid} />
    </Pop>
    {[20, 24.5, 29].map((x) => <Dot key={x} x={x} y={28} r={1.3} />)}
    <path {...D} d="M38 19a7 7 0 0 1 0 10M42 15.5a12 12 0 0 1 0 17" className={`${acc} motion-safe:group-hover:animate-pulse`} />
  </AnimatedIcon>
)

// Delivery: a route through its stops to the drop-off pin, which bounces on hover.
export const DeliveryIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M6 42c8 0 8-10 16-10s12-2 12-7" />
    <Dot x={6} y={42} r={2.25} />
    <Dot x={22} y={32} r={2.25} />
    <Pop>
      <g className={`${hov} motion-safe:group-hover:animate-bounce`}>
        <path d="M34 25s-8-7.2-8-13a8 8 0 0 1 16 0c0 5.8-8 13-8 13z" className={solid} />
        <circle cx="34" cy="12" r="3" className={cut} />
      </g>
    </Pop>
  </AnimatedIcon>
)

// Online store: a phone with a shopping bag and a new-order badge.
export const StoreIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(13, 4, 22, 40, 4.5)}M21 8.5h6`} />
    <Pop>
      <g className={`${hov} origin-center group-hover:scale-110`}>
        <path d="M20.5 22v-2a3.5 3.5 0 0 1 7 0v2" className={acc} />
        <rect x="18" y="22" width="12" height="10" rx="2" className={solid} />
      </g>
    </Pop>
    {[20, 24, 28].map((x) => <Dot key={x} x={x} y={38} r={1.2} />)}
    <Dot x={36} y={6} r={3} />
  </AnimatedIcon>
)

// Inventory: stacked boxes; the top one lifts on hover.
export const InventoryIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(5, 26, 18, 16, 2)}M14 26v5M12.5 37h6`} />
    <path {...D} d={`${rr(25, 26, 18, 16, 2)}M34 26v5M32.5 37h6`} />
    <Pop>
      <g className={`${hov} origin-center group-hover:-translate-y-1 group-hover:-rotate-6`}>
        <rect x="15" y="8" width="18" height="16" rx="2" className={solid} />
        <path d="M24 8v5" className="stroke-navy-900" />
      </g>
    </Pop>
    <Dot x={9} y={37} r={1.5} />
    <Dot x={29} y={37} r={1.5} />
  </AnimatedIcon>
)

// Compliance: a shield with a check, guarded on both sides.
export const ComplianceIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M24 4l16 6v11c0 10.5-7 17.5-16 22-9-4.5-16-11.5-16-22V10z" />
    <Pop>
      <path d="M16.5 23.5l5 5 10-11" strokeWidth={2.5} className={`${hov} ${acc} origin-center group-hover:scale-110`} />
    </Pop>
    {[[3.5, 16], [44.5, 16], [3.5, 26], [44.5, 26]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={1.3} />)}
  </AnimatedIcon>
)

// Reporting & analytics: bars grow up from the axis and a trend runs over them.
export const ReportingIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M6 5v37h38" />
    {[[13.5, 32], [21.5, 26], [29.5, 29], [37.5, 20]].map(([x, y], i) => (
      <path
        key={x}
        {...D}
        d={`M${x} 41V${y}`}
        strokeWidth={5}
        strokeLinecap="butt"
        style={{ transitionDelay: `${i * 60}ms` }}
        className={`${hov} origin-bottom opacity-50 group-hover:scale-y-110`}
      />
    ))}
    <path {...D} d="M13.5 24L21.5 17 29.5 20 37.5 10" className={acc} />
    {[[13.5, 24], [21.5, 17], [29.5, 20], [37.5, 10]].map(([x, y]) => <Dot key={x} x={x} y={y} r={2} />)}
  </AnimatedIcon>
)

// Marketing & loyalty: a coupon whose star turns on hover.
export const MarketingIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M5 13h38v7a4 4 0 0 0 0 8v7H5v-7a4 4 0 0 0 0-8z" />
    {[16, 20, 24, 28, 32].map((y) => <Dot key={y} x={31} y={y} r={1.1} />)}
    <Pop>
      <path
        d="M18 17.5l1.6 4.3 4.6.2-3.6 2.8 1.2 4.5-3.8-2.6-3.8 2.6 1.2-4.5-3.6-2.8 4.6-.2z"
        strokeWidth={1.5}
        className="fill-copper-400 stroke-copper-400 transition-transform duration-700 ease-soft [transform-origin:18px_24px] group-hover:rotate-[144deg]"
      />
    </Pop>
  </AnimatedIcon>
)

// Integrations: a hub wired to four systems, with data on every line; the network turns on hover.
export const IntegrationsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className="transition-transform duration-700 ease-soft [transform-origin:24px_24px] group-hover:rotate-90">
      <path {...D} d={ring(9, 9, 4) + ring(39, 9, 4) + ring(9, 39, 4) + ring(39, 39, 4)} />
      <path {...D} d="M11.8 11.8l8 8M36.2 11.8l-8 8M11.8 36.2l8-8M36.2 36.2l-8-8" />
      {[[15.8, 15.8], [32.2, 15.8], [15.8, 32.2], [32.2, 32.2]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={1.5} />)}
    </g>
    <Pop>
      <circle cx="24" cy="24" r="6" className={solid} />
      <circle cx="24" cy="24" r="2.25" className={cut} />
    </Pop>
  </AnimatedIcon>
)

// ── Header menu icons (site-chrome.tsx) ──

// A hover-only stroke: hidden at rest, draws itself while the parent "group" is hovered.
const hoverDraw = "[stroke-dashoffset:1.05] transition-[stroke-dashoffset] duration-500 ease-soft group-hover:[stroke-dashoffset:0]"

// All products: the whole set of tools; the last tile turns on hover.
export const AllProductsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={rr(5, 5, 16, 16, 3) + rr(27, 5, 16, 16, 3) + rr(5, 27, 16, 16, 3)} />
    {[[13, 13], [35, 13], [13, 35]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={2} />)}
    <Pop>
      <rect x="27" y="27" width="16" height="16" rx="3" className={`${solid} ${hov} origin-center group-hover:rotate-45 group-hover:scale-90`} />
    </Pop>
  </AnimatedIcon>
)

// Blog: a page of writing; the pencil scribbles on hover.
export const BlogIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(5, 4, 25, 35, 3)}M11 12h13M11 18h13M11 24h8`} />
    {[12, 16, 20].map((x) => <Dot key={x} x={x} y={31} r={1.1} />)}
    <Pop>
      <path d="M31 45l1.3-5 11-11 3.7 3.7-11 11z" className={`${solid} ${hov} origin-bottom-left group-hover:-translate-x-1 group-hover:-rotate-6`} />
    </Pop>
  </AnimatedIcon>
)

// SOPs: a checklist on a clipboard; the last step gets ticked on hover.
export const SopsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(8, 7, 32, 37, 4)}M19 19h14M19 27h14M19 35h7`} />
    {[19, 27, 35].map((y) => <Dot key={y} x={14} y={y} r={1.5} />)}
    <Pop>
      <rect x="17" y="3" width="14" height="8" rx="2.5" className={solid} />
    </Pop>
    <path d="M29.5 35l3 3 5.5-6" pathLength={1} strokeDasharray="1 3" strokeWidth={2.25} className={`${acc} ${hoverDraw}`} />
  </AnimatedIcon>
)

// Refer a business: pass it on; the plus badge spins on hover.
export const ReferIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${ring(15, 14, 6.5)}M4 40c0-7 4.9-12 11-12s11 5 11 12`} />
    {[[27, 14], [31, 17.5], [34.5, 21.5]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={1.2} />)}
    <Pop>
      <g className={`${hov} origin-center group-hover:rotate-90 group-hover:scale-110`}>
        <circle cx="37" cy="33" r="7.5" className={solid} />
        <path d="M37 29.5v7M33.5 33h7" strokeWidth={2} className="stroke-navy-900" />
      </g>
    </Pop>
  </AnimatedIcon>
)

// About: the Bleaum bloom, a halftone that swells on hover.
const bloom = [-14, -7, 0, 7, 14]
  .flatMap((x) => [-14, -7, 0, 7, 14].map((y) => [x, y, Math.hypot(x, y)]))
  .filter(([, , d]) => d > 0 && d < 16)
export const AboutIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={ring(24, 24, 20.5)} />
    <g className={`${hov} origin-center group-hover:scale-110`}>
      {bloom.map(([x, y, d], i) => <Dot key={i} x={24 + x} y={24 + y} r={+(3.2 - d * 0.13).toFixed(2)} />)}
    </g>
    <Pop>
      <circle cx="24" cy="24" r="4" className={`${solid} ${hov} origin-center group-hover:scale-125`} />
    </Pop>
  </AnimatedIcon>
)

// Careers: a briefcase; the handle lifts on hover.
export const CareersIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(5, 14, 38, 28, 4)}M5 27h13M30 27h13`} />
    <path {...D} d="M18 14v-3.5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V14" className={`${hov} group-hover:-translate-y-1`} />
    <Pop>
      <rect x="19" y="23.5" width="10" height="7" rx="2" className={solid} />
    </Pop>
    <Dot x={39} y={8} r={1.7} />
    <Dot x={43.5} y={4} r={1.1} />
  </AnimatedIcon>
)

// Support: a chat with someone typing, and a copper reply that hops on hover.
export const SupportIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M9 6h22a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H18l-7 6v-6H9a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5z" />
    {[13, 20, 27].map((x) => <Dot key={x} x={x} y={17.5} r={2} />)}
    <Pop>
      <path
        d="M30 31h10a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-.5v4l-5-4H30a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4z"
        className={`${solid} ${hov} origin-bottom-right group-hover:-translate-y-1 group-hover:-rotate-6`}
      />
    </Pop>
  </AnimatedIcon>
)

// ── "Why teams choose Bleaum" icons (home.tsx), in the order of why.items ──

// Quick to set up: a checklist whose last step just got ticked; it springs on hover.
export const SetupIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(5, 4, 9, 9, 2.5)}${rr(5, 17.5, 9, 9, 2.5)}M7.5 8.5l1.8 1.8 2.7-3.3M7.5 22l1.8 1.8 2.7-3.3M20 8.5h23M20 22h17`} />
    <path {...D} d="M20 35.5h15" className={acc} />
    <Pop>
      <g className={`${hov} origin-center group-hover:-rotate-12 group-hover:scale-110`}>
        <rect x="5" y="31" width="9" height="9" rx="2.5" className={solid} />
        <path d="M7.5 35.5l1.8 1.8 2.7-3.3" className="stroke-navy-900" />
      </g>
    </Pop>
    {[[39.5, 32.5, 1.4], [43.5, 36, 1], [42.5, 29, 0.9]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// One system, every location: one record feeding every store; the stores hop in turn on hover.
const pin = (x: number, y: number) => `M${x} ${y}s-5.5-5-5.5-9.5a5.5 5.5 0 0 1 11 0c0 4.5-5.5 9.5-5.5 9.5z`
export const OneSystemIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M20.1 13.6L9.5 26.5M24 15.5V27M27.9 13.6L38.5 26.5" />
    {[8, 24, 40].map((x, i) => (
      <g key={x} style={{ transitionDelay: `${i * 70}ms` }} className={`${hov} group-hover:-translate-y-1`}>
        <path {...D} d={pin(x, 44)} />
        <Dot x={x} y={34.5} r={1.8} />
      </g>
    ))}
    <Pop>
      <circle cx="24" cy="9" r="6" className={`${solid} ${hov} origin-center group-hover:scale-110`} />
    </Pop>
  </AnimatedIcon>
)

// Works with what you have: computer, tablet and phone in sync; the link between them draws on hover.
export const DevicesIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(2, 10, 25, 18, 2.5)}M14.5 28v5M9.5 34h10`} />
    <path {...D} d={rr(29, 16, 11, 18, 2) + rr(41.5, 22, 5.5, 12, 1.5)} />
    <Dot x={14.5} y={19} r={2.4} />
    <Dot x={34.5} y={25} r={2} />
    <Dot x={44.25} y={28} r={1.4} />
    <path d="M15 6.5C24 1 38 2 44.25 18" pathLength={1} strokeDasharray="1 3" className={`${acc} ${hoverDraw}`} />
  </AnimatedIcon>
)

// Real people when you need help: a person answering in a chat; they lean in on hover.
export const PeopleIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className={`${hov} origin-bottom-left group-hover:-translate-y-0.5 group-hover:-rotate-3`}>
      <path {...D} d="M23 4h18a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H29l-6 5v-5a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5zM24 11h16" />
      {[25, 29, 33].map((x) => <Dot key={x} x={x} y={17} r={1.3} />)}
    </g>
    <path {...D} d="M2 46c0-5 3.6-8 8-8s8 3 8 8" className={acc} />
    <Pop>
      <circle cx="10" cy="30" r="4.5" className={`${solid} ${hov} origin-center group-hover:-translate-y-0.5 group-hover:scale-110`} />
    </Pop>
  </AnimatedIcon>
)

// Built for regulated retail: a store with compliance built in; the shield turns on hover.
export const RegulatedIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M3 17l3.5-10h22L32 17zM6 17v25h23V17M14 42v-9h7v9" />
    {[11, 17.5, 24].map((x) => <Dot key={x} x={x} y={23} r={1.3} />)}
    <Pop>
      <g className={`${hov} origin-center group-hover:-rotate-6 group-hover:scale-110`}>
        <path d="M41 20l7 2.6v5.4c0 5-3 8.4-7 10-4-1.6-7-5-7-10v-5.4z" className={solid} />
        <path d="M38 29l2 2 4-4.5" className="stroke-navy-900" />
      </g>
    </Pop>
  </AnimatedIcon>
)

// Clear pricing: a signed price sheet with a seal that stamps on hover.
export const PricingIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(4, 4, 26, 40, 4)}M10 12h10M10 18h14`} />
    <Pop>
      <rect x="10" y="23" width="11" height="4.5" rx="2.25" className={solid} />
    </Pop>
    <path {...D} d="M10 35c2-4 3-4 4 0s3 4 5 0 3-2 5-1" className={acc} />
    {[10, 13.5, 17, 20.5, 24].map((x) => <Dot key={x} x={x} y={40} r={0.9} />)}
    <Pop>
      <g className={`${hov} origin-center group-hover:rotate-[20deg] group-hover:scale-110`}>
        <circle cx="39.5" cy="27" r="7" className={solid} />
        <circle cx="39.5" cy="27" r="3.5" className="stroke-navy-900" />
      </g>
    </Pop>
  </AnimatedIcon>
)

// ── Bleaum AI icons (home.tsx), in the order of ai.assistants ──

// Customer Assistant: a customer card with a suggestion being typed; the bubble nudges up on hover.
export const CustomerAssistantIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(3, 4, 33, 25, 4)}${ring(12, 13.5, 3.5)}M6 25c1-4 3.5-5.5 6-5.5s5 1.5 6 5.5M22 13h9M22 19h6`} />
    <Dot x={31} y={9.5} r={1.5} />
    <g className={`${hov} origin-top-left group-hover:-translate-y-1 group-hover:scale-105`}>
      <Pop>
        <rect x="20" y="31" width="26" height="13" rx="6.5" className={solid} />
      </Pop>
      {/* Navy dots on the copper bubble: their twinkle reads as typing. */}
      {[27, 33, 39].map((x) => <circle key={x} data-dot="" cx={x} cy={37.5} r={1.6} className={cut} />)}
    </g>
  </AnimatedIcon>
)

// Insights Assistant: a trend with one unusual point flagged; the flag ring swells on hover.
export const InsightsAssistantIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M5 4v38h40" />
    <path {...D} d="M9 34l7-5 7 4 8-13 7 7 7-5" className={acc} />
    {[[16, 29], [23, 33], [38, 27]].map(([x, y]) => <Dot key={x} x={x} y={y} r={1.4} />)}
    <Pop>
      <circle cx="31" cy="20" r="5" strokeWidth={1.5} className={`${acc} ${hov} origin-center group-hover:scale-[1.35]`} />
      <circle cx="31" cy="20" r="2.2" className={solid} />
    </Pop>
  </AnimatedIcon>
)

// Reporting Assistant: a report writing itself, with a spark that turns on hover.
export const ReportingAssistantIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(4, 4, 28, 40, 4)}M10 20h16M10 26h16M10 32h8`} />
    <path {...D} d="M10 12h11" className={acc} />
    {[21, 24.5, 28].map((x) => <Dot key={x} x={x} y={32} r={1.1} />)}
    <Dot x={45.5} y={20} r={1.2} />
    <Pop>
      <path
        d="M40.5 4l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z"
        strokeWidth={1}
        className="fill-copper-400 stroke-copper-400 transition-transform duration-700 ease-soft [transform-origin:40.5px_10px] group-hover:rotate-90 group-hover:scale-110"
      />
    </Pop>
  </AnimatedIcon>
)

// ── Other Home icons ──

// Smart notifications: a bell with a new-alert badge; it swings on hover.
export const NotificationsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className={`${hov} origin-top group-hover:rotate-12`}>
      <path {...D} d="M24 11V7M14 21a10 10 0 0 1 20 0v9l4 6H10l4-6zM20 40a4 4 0 0 0 8 0" />
    </g>
    {[[7, 15, 1.3], [4.5, 21, 1], [41, 24, 1.3], [43.5, 30, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
    <Pop>
      <circle cx="38" cy="9" r="5" className={`${solid} ${hov} origin-center group-hover:scale-125`} />
    </Pop>
  </AnimatedIcon>
)

// ── "Built by Operators" values (home.tsx), in the order of about.values ──

// Our Mission: a target; the arrow lands in the bullseye on hover.
export const MissionIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={ring(22, 26, 17) + ring(22, 26, 9.5)} />
    {[[22, 9], [5, 26], [22, 43], [39, 26]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={1.4} />)}
    <Pop>
      <circle cx="22" cy="26" r="3.5" className={`${solid} ${hov} origin-center group-hover:scale-125`} />
    </Pop>
    <g className={`${hov} group-hover:-translate-x-0.5 group-hover:translate-y-0.5`}>
      <path {...D} d="M25 23L41 7M41 7l1-5M41 7l5-1" className={acc} />
    </g>
  </AnimatedIcon>
)

// Our Vision: a road to a rising sun; the sun swells on hover.
export const VisionIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M3 34h42M6 46l15-12M42 46L27 34M24 37.5v2.5M24 43v3" />
    {[[10.8, 29.2, 1.4], [16, 22.5, 1.4], [24, 20, 1.7], [32, 22.5, 1.4], [37.2, 29.2, 1.4]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
    <Pop>
      <path d="M15 34a9 9 0 0 1 18 0z" className={`${solid} ${hov} origin-bottom group-hover:scale-110`} />
    </Pop>
  </AnimatedIcon>
)

// Our Values: a hand offering a heart (shape after lucide's hand-heart, at 2×); the heart lifts on hover.
export const ValuesIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path
      {...D}
      d="M22 28h4a4 4 0 1 0 0-8h-6c-1.2 0-2.2.4-2.8 1.2L6 32M14 40l3.2-2.8c.6-.8 1.6-1.2 2.8-1.2h8c2.2 0 4.2-.8 5.6-2.4l9.2-8.8a4 4 0 0 0-5.5-5.82l-8.4 7.8M4 30l12 12"
    />
    {[[45, 6, 1.3], [18.5, 7, 1.1], [46, 14, 0.9]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
    <Pop>
      <path
        d="M39 17c1.4-1.4 3-3.2 3-5.4A5.46 5.46 0 0 0 32 8a5.56 5.56 0 0 0-10 3.6c0 2.4 1.6 4 3 5.6L32 24z"
        className={`${solid} ${hov} origin-center group-hover:-translate-y-0.5 group-hover:scale-110`}
      />
    </Pop>
  </AnimatedIcon>
)

// ── Industries page icons (resources/industries/page.tsx) ──

// Pharmaceutical outlets: a pill bottle with a cross; the cap twists off on hover.
export const PharmacyIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(11, 14, 26, 30, 4)}M17 20h14`} />
    <path {...D} d="M24 26v11M18.5 31.5h11" className={acc} />
    <Pop>
      <rect x="9" y="4" width="30" height="7.5" rx="2" className={`${solid} ${hov} origin-bottom-left group-hover:-translate-y-1 group-hover:-rotate-6`} />
    </Pop>
    {[[43, 24, 1.4], [45.5, 30, 1], [42.5, 35, 1.2]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Liquor stores: a bottle and a glass; the glass tips toward you on hover.
export const LiquorIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M12 4h6v8c0 2.5 4 4.5 4 9.5V42a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V21.5c0-5 4-7 4-9.5zM8 28h14" />
    <g className={`${hov} origin-bottom group-hover:rotate-12`}>
      <path {...D} d="M29 18h16c0 7-3.5 11-8 11s-8-4-8-11zM37 29v12M32 43h10" />
      <Pop>
        <path d="M32 22.5h10c-.9 2.6-2.8 3.8-5 3.8s-4.1-1.2-5-3.8z" className={solid} />
      </Pop>
    </g>
    {[[33, 12, 1.2], [37.5, 8, 1.5], [41.5, 12.5, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Medical: a stethoscope (shape after lucide's, at 2×); the chest piece swells on hover.
export const MedicalIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M10 4v4M22 4v4M10 6H8a4 4 0 0 0-4 4v8a12 12 0 0 0 24 0v-8a4 4 0 0 0-4-4h-2M16 30a12 12 0 0 0 24 0v-5" />
    {[[44.5, 34, 1.3], [42, 40, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
    <Pop>
      <g className={`${hov} origin-center group-hover:scale-125`}>
        <circle cx="40" cy="18" r="5" className={solid} />
        <circle cx="40" cy="18" r="1.8" className={cut} />
      </g>
    </Pop>
  </AnimatedIcon>
)

// Recreational: a leaf on its stem; it sways on hover.
export const LeafIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M5 43l8.5-8.5" />
    <Pop>
      <g className={`${hov} origin-bottom-left group-hover:-rotate-12`}>
        <path d="M14 34C12 18 26 6 42 6c0 16-12 30-28 28z" className={solid} />
        <path d="M18 30L34 14" className="stroke-navy-900" />
      </g>
    </Pop>
    {[[8, 12, 1.4], [14, 5.5, 1], [5, 20, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Apparel & footwear: a t-shirt (shape after lucide's, at 2×) with a price tag that swings on hover.
export const ApparelIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path
      {...D}
      d="M40.76 6.92L32 4a8 8 0 0 1-16 0L7.24 6.92a4 4 0 0 0-2.68 4.46l1.16 6.94a2 2 0 0 0 1.98 1.68H12v20a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V20h4.3a2 2 0 0 0 1.98-1.68l1.16-6.94a4 4 0 0 0-2.68-4.46z"
    />
    <Pop>
      <g className={`${hov} [transform-origin:19px_26px] group-hover:rotate-12`}>
        <path d="M19 22.5h7.5l3.5 3.5-3.5 3.5H19z" className={solid} />
        <circle cx="22" cy="26" r="1.2" className={cut} />
      </g>
    </Pop>
    {[20, 24, 28].map((x) => <Dot key={x} x={x} y={37} r={1.1} />)}
  </AnimatedIcon>
)

// Convenience stores: a storefront whose striped awning flaps on hover.
export const ConvenienceIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d="M4 14l4-8h32l4 8zM7 25v17h34V25M20 42V31h8v11" />
    <path {...D} d={rr(32, 29, 6, 6, 1.5)} />
    <Pop>
      <path
        d="M4 16.5h40a5 5 0 0 1-10 0a5 5 0 0 1-10 0a5 5 0 0 1-10 0a5 5 0 0 1-10 0z"
        className={`${solid} ${hov} origin-top group-hover:scale-y-125`}
      />
    </Pop>
    {[[11, 30], [15, 30], [11, 34], [15, 34]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={1.2} />)}
  </AnimatedIcon>
)

// Beauty & cosmetics: a lipstick and a sparkle; the lipstick rises and the sparkle turns on hover.
export const BeautyIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(10, 28, 16, 16, 2.5)}${rr(12.5, 19, 11, 9, 1.5)}M10 34h16`} />
    <Pop>
      <path d="M14.5 17.5V10l7-4.5v12z" className={`${solid} ${hov} group-hover:-translate-y-1`} />
    </Pop>
    <Pop>
      <path
        d="M37 6l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5-5.5-2 5.5-2z"
        strokeWidth={1}
        className="fill-copper-400 stroke-copper-400 transition-transform duration-700 ease-soft [transform-origin:37px_13.5px] group-hover:rotate-90"
      />
    </Pop>
    {[[41, 30, 1.4], [35, 35, 1], [43.5, 39, 1.1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Electronics: a screen with a charge bolt that flickers on hover.
export const ElectronicsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`${rr(4, 6, 40, 27, 3)}M24 33v6M16 41h16`} />
    <Pop>
      <path d="M27 10.5l-9 11.5h6l-3 7.5 9-11.5h-6z" className={`${solid} motion-safe:group-hover:animate-pulse`} />
    </Pop>
    <Dot x={9} y={28} r={1.2} />
    <Dot x={13} y={28} r={1.2} />
  </AnimatedIcon>
)

// Specialty retail: a gift box; the lid lifts on hover.
export const GiftIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={rr(7, 25, 34, 18, 2.5)} />
    <path {...D} d="M24 25v18" className={acc} />
    <g className={`${hov} group-hover:-translate-y-1`}>
      <path {...D} d={rr(4, 16, 40, 8, 2)} />
      <path {...D} d="M24 16v8" className={acc} />
      <Pop>
        <path d="M24 14.5c-3-6-10-7-10-2.5s6 2.5 10 2.5zM24 14.5c3-6 10-7 10-2.5s-6 2.5-10 2.5z" className={solid} />
      </Pop>
    </g>
    {[[7, 8, 1.3], [41, 6, 1.4], [44.5, 11, 0.9]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Wholesale & distribution: a truck (shape after lucide's, at 2×) carrying a crate; it rolls forward on hover.
export const WholesaleIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className={`${hov} group-hover:translate-x-1`}>
      <path
        {...D}
        d={`M28 36V12a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v22a2 2 0 0 0 2 2h4M30 36H18M38 36h4a2 2 0 0 0 2-2v-7.3a2 2 0 0 0-.44-1.25l-6.96-8.7A2 2 0 0 0 35.04 16H28${ring(14, 36, 4)}${ring(34, 36, 4)}`}
      />
      <Dot x={14} y={36} r={1.3} />
      <Dot x={34} y={36} r={1.3} />
      <Pop>
        <rect x="10" y="15" width="12" height="12" rx="2" className={solid} />
        <path d="M16 17v3.5" className="stroke-navy-900" />
      </Pop>
    </g>
  </AnimatedIcon>
)

// Health & wellness: a heart with a pulse running through it (after lucide's heart-pulse, at 2×); it beats on hover.
export const WellnessIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className={`${hov} origin-center group-hover:scale-110`}>
      <path {...D} d="M38 28c2.98-2.92 6-6.42 6-11A11 11 0 0 0 33 6c-3.52 0-6 1-9 4-3-3-5.48-4-9-4A11 11 0 0 0 4 17c0 4.6 3 8.1 6 11l14 14z" />
      <path {...D} d="M6.44 26H19l1-2 4 9 4-14 3 7h10.54" className={acc} />
      <Pop>
        <circle cx="28" cy="19" r="2.75" className={solid} />
      </Pop>
    </g>
    {[[44, 34, 1.3], [40.5, 39, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Supplements & nutrition: a capsule, half copper, with tablets beside it; it turns on hover.
export const SupplementsIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <g className={`${hov} origin-center group-hover:rotate-12`}>
      <g transform="rotate(-45 24 24)">
        <path {...D} d="M24 17H13a7 7 0 0 0 0 14h11z" />
        <Pop>
          <path d="M25.5 17H35a7 7 0 0 1 0 14h-9.5z" className={solid} />
        </Pop>
      </g>
    </g>
    {[[38, 38, 2.2], [43.5, 31.5, 1.4], [10, 10, 1.4], [31, 43.5, 1]].map(([x, y, r], i) => <Dot key={i} x={x} y={y} r={r} />)}
  </AnimatedIcon>
)

// Customizable workflows: sliders set your way; the copper one grows on hover.
export const WorkflowIcon = (p: Props) => (
  <AnimatedIcon {...p}>
    <path {...D} d={`M4 12h21.5M34.5 12H44M4 24h6M22 24h22M4 36h25.5M38.5 36H44${ring(30, 12, 4.5)}${ring(34, 36, 4.5)}`} />
    <Dot x={30} y={12} r={1.5} />
    <Dot x={34} y={36} r={1.5} />
    <Pop>
      <circle cx="16" cy="24" r="4.5" className={`${solid} ${hov} origin-center group-hover:scale-110`} />
    </Pop>
  </AnimatedIcon>
)
