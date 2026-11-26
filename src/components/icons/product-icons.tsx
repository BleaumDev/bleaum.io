import type { ReactNode } from "react"
import { AnimatedIcon } from "./animated-icon"

// Product icons. Use anywhere: <PosIcon />, <DeliveryIcon className="size-10 text-white" delay={0.2} />.
// Each one assembles itself on first view (see animated-icon.tsx).

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
