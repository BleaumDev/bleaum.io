import type { CSSProperties, ReactNode } from "react"
import { Box as BoxIcon, Camera, ChevronDown, Filter, IdCard, MapPin, Monitor, Pencil, QrCode, RotateCcw, Search, ShoppingCart, Tag, User, X } from "lucide-react"
import { BAG, H, P, STOCK, TILL, TOKEN, VAN, W, bag, doors, floorM, fold, leftM, pts, rightM } from "./hero-iso"
import { hero } from "../home-content"

// Home hero illustration: "your business in a box". A copper box unfolds into a lit pharmacy. A tablet running the POS
// comes up in front of it, takes an order and leaves; the shop bags the order and the van takes it away.
// Pharmacy only: cannabis products, leaves and signage stay out (website-updates/home.md #20, #24, #138).
// The scene itself is wordless; the only text is the POS copy on the tablet (home-content hero.pos).
// Server-rendered in its finished, open state. hero-scene-fx.ts finds the data-s hooks and brings it to life.

const s = (name: string) => ({ "data-s": name })
// Parts the story brings in later: hidden from the first paint, shown only when there is no motion or no script.
const LATER = "opacity-0 motion-reduce:opacity-100 [@media(scripting:none)]:opacity-100"
const line = { strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const

// Isometric cuboid: three visible faces.
type BoxProps = { x: number; y: number; z?: number; w: number; d: number; h: number; f: readonly [string, string, string] }
function Box({ x, y, z = 0, w, d, h, f }: BoxProps) {
  const [X, Y, Z] = [x + w, y + d, z + h]
  return (
    <>
      <polygon points={pts([x, Y, z], [X, Y, z], [X, Y, Z], [x, Y, Z])} fill={f[1]} />
      <polygon points={pts([X, y, z], [X, Y, z], [X, Y, Z], [X, y, Z])} fill={f[2]} />
      <polygon points={pts([x, y, Z], [X, y, Z], [X, Y, Z], [x, Y, Z])} fill={f[0]} />
    </>
  )
}

// Upright cylinder standing at x, y, z.
function Can({ x, y, z, r, h, f, children }: { x: number; y: number; z: number; r: number; h: number; f: readonly [string, string]; children?: ReactNode }) {
  const [cx, cy] = P(x, y, z)
  const [rx, ry] = [r * 1.22, r * 0.71]
  return (
    <>
      <path d={`M${cx - rx} ${cy - h}V${cy}a${rx} ${ry} 0 0 0 ${2 * rx} 0V${cy - h}z`} fill={f[1]} />
      <ellipse cx={cx} cy={cy - h} rx={rx} ry={ry} fill={f[0]} />
      {children}
    </>
  )
}

// The brand mark: a grid of dots that shrink away from the center.
function Mark({ r, gap, dot, className, name }: { r: number; gap: number; dot: number; className?: string; name?: string }) {
  const dots: ReactNode[] = []
  const n = Math.floor(r / gap)
  for (let i = -n; i <= n; i++)
    for (let j = -n; j <= n; j++) {
      const d = Math.hypot(i, j) * gap
      if (d <= r) dots.push(<circle key={`${i},${j}`} cx={i * gap} cy={j * gap} r={+Math.max(0.5, dot * (1 - d / (r * 1.12))).toFixed(2)} />)
    }
  return <g className={className} {...(name && s(name))}>{dots}</g>
}

const kraft = ["#E9B391", "#CF8C66", "#AD6A45"] as const
const parcelTape = "#F7DCC8"

function Parcel({ x, y, z = 0, w = 26, h = 22 }: { x: number; y: number; z?: number; w?: number; h?: number }) {
  return (
    <>
      <Box x={x} y={y} z={z} w={w} d={w} h={h} f={kraft} />
      <polygon points={pts([x + w * 0.4, y, z + h], [x + w * 0.6, y, z + h], [x + w * 0.6, y + w, z + h], [x + w * 0.4, y + w, z + h])} fill={parcelTape} />
      <polygon points={pts([x + w * 0.4, y + w, z + h], [x + w * 0.6, y + w, z + h], [x + w * 0.6, y + w, z + h * 0.65], [x + w * 0.4, y + w, z + h * 0.65])} fill={parcelTape} />
    </>
  )
}

// Cross with arms `2a` wide, reaching `b` from its center.
const cross = (a: number, b: number) => `M${-a}${-b}h${2 * a}v${b - a}h${b - a}v${2 * a}h${a - b}v${b - a}h${-2 * a}v${a - b}h${a - b}v${-2 * a}h${b - a}z`

// A label wrapped round a Can, from height a to b.
function Band({ x, y, z, r, a, b, fill }: { x: number; y: number; z: number; r: number; a: number; b: number; fill: string }) {
  const [cx, cy] = P(x, y, z)
  const [rx, ry] = [r * 1.22, r * 0.71]
  return <path d={`M${cx - rx} ${cy - b}a${rx} ${ry} 0 0 0 ${2 * rx} 0V${cy - a}a${rx} ${ry} 0 0 1 ${-2 * rx} 0z`} fill={fill} />
}

const white = ["#FFFFFF", "#D5DFE9"] as const
const copper = ["#F2B48F", "#C47D56"] as const
const amber = ["#F0AE63", "#D97F2B"] as const
const syrup = ["#8A4E2E", "#6E3B20"] as const
type Spot = { x: number; y?: number; z: number }

// Amber prescription vial, supplement tub, syrup bottle, medicine box.
const Vial = ({ x, y = 10, z, h = 17 }: Spot & { h?: number }) => (
  <>
    <Can x={x} y={y} z={z} r={5} h={h} f={amber} />
    <Band x={x} y={y} z={z} r={5} a={4} b={h * 0.62} fill="#FFFFFF" />
    <Can x={x} y={y} z={z + h} r={5.5} h={5} f={white} />
  </>
)
const Tub = ({ x, y = 10, z, lid = copper, label = "#DF9770" }: Spot & { lid?: readonly [string, string]; label?: string }) => (
  <>
    <Can x={x} y={y} z={z} r={6.4} h={16} f={white} />
    <Band x={x} y={y} z={z} r={6.4} a={4} b={12} fill={label} />
    <Can x={x} y={y} z={z + 16} r={5.6} h={4} f={lid} />
  </>
)
const Syrup = ({ x, y = 10, z }: Spot) => (
  <>
    <Can x={x} y={y} z={z} r={5.6} h={14} f={syrup} />
    <Band x={x} y={y} z={z} r={5.6} a={3} b={11} fill="#F6F8FB" />
    <Can x={x} y={y} z={z + 14} r={2.8} h={4} f={syrup} />
    <Can x={x} y={y} z={z + 18} r={3.4} h={4} f={white} />
  </>
)
const MedBox = ({ x, y = 4, z, w = 18, h = 22, color = "#DF9770" }: Spot & { w?: number; h?: number; color?: string }) => (
  <>
    <Box x={x} y={y} z={z} w={w} d={11} h={h} f={["#FFFFFF", "#F1F5F9", "#B9C7D6"]} />
    <g transform={rightM(x, y + 11, z)} fill={color}>
      <rect y={-h * 0.34} width={w} height={h * 0.34} />
      <path d={cross(1.5, 4.4)} transform={`translate(${w / 2} ${-h * 0.67})`} />
    </g>
  </>
)
const Capsule = ({ x, y, k = 1, r = -35 }: { x: number; y: number; k?: number; r?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${k})`}>
    <rect x={-10} y={-4.5} width={20} height={9} rx={4.5} fill="#DF9770" />
    <path d="M0-4.5h5.5a4.5 4.5 0 0 1 0 9H0z" fill="#EAF0F6" />
  </g>
)

// The wall of stock, three shelves. The two ordered items are drawn in place but as their own group.
const navyLid = ["#2C6391", "#1C4B70"] as const
const SHELVES: { z: number; row: ReactNode[] }[] = [
  {
    z: 94,
    row: [
      <Tub key={1} x={34} z={94} />,
      <Tub key={2} x={51} z={94} lid={navyLid} label="#2C6391" />,
      <Tub key={3} x={68} z={94} />,
      <MedBox key={4} x={80} z={94} color="#2C6391" />,
      <MedBox key={5} x={100} z={94} h={18} />,
      <Vial key={6} x={130} z={94} />,
      <Vial key={7} x={144} z={94} h={13} />,
      <Vial key={8} x={158} z={94} />,
      <Vial key={9} x={172} z={94} h={13} />,
    ],
  },
  {
    z: 58,
    row: [
      <MedBox key={1} x={26} z={58} />,
      <MedBox key={2} x={46} z={58} h={18} color="#2C6391" />,
      <g key={3} {...s("stock")}><Vial x={STOCK.vial[0]} z={STOCK.vial[2]} /></g>,
      <Vial key={4} x={93} z={58} h={13} />,
      <Vial key={5} x={108} z={58} />,
      <Syrup key={6} x={125} z={58} />,
      <Syrup key={7} x={141} z={58} />,
      <MedBox key={8} x={152} z={58} />,
      <MedBox key={9} x={171} z={58} w={11} h={16} color="#2C6391" />,
    ],
  },
  {
    z: 22,
    row: [
      <Syrup key={1} x={34} z={22} />,
      <Syrup key={2} x={50} z={22} />,
      <MedBox key={3} x={60} z={22} w={15} color="#2C6391" />,
      <MedBox key={4} x={77} z={22} w={15} h={17} />,
      <g key={5} {...s("stock")}><Tub x={STOCK.tub[0]} z={STOCK.tub[2]} /></g>,
      <Tub key={6} x={126} z={22} lid={navyLid} label="#2C6391" />,
      <Tub key={7} x={144} z={22} />,
      <MedBox key={8} x={156} z={22} />,
    ],
  },
]

// The four products on the tablet, flat, in a 48 x 40 box. Same order as home-content hero.pos.items.
const GOODS = [
  <g key="vitamin">
    <rect x={15} y={1} width={18} height={8} rx={2} fill="#DF9770" />
    <path d="M12 14a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v21a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" fill="#EAF0F6" />
    <path d="M12 16h24v17H12z" fill="#F2B48F" />
    <circle cx={24} cy={24.5} r={3.4} fill="#0B1E31" />
    <path d="M24 18v1.6M24 29.4V31M17.5 24.5h1.6M28.9 24.5h1.6M19.4 19.9l1.1 1.1M27.5 28l1.1 1.1M28.6 19.9l-1.1 1.1M20.5 28l-1.1 1.1" stroke="#0B1E31" strokeWidth={1.5} {...line} />
  </g>,
  <g key="pain">
    <rect x={5} y={1} width={22} height={9} rx={2} fill="#FFFFFF" />
    <path d="M10 2.5v6M14 2.5v6M18 2.5v6M22 2.5v6" stroke="#B7C4D2" strokeWidth={1.4} {...line} />
    <path d="M7 10h18v25a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4z" fill="#D97F2B" />
    <path d="M7 16h18v15H7z" fill="#FFFFFF" />
    <path d="M10 20h12M10 24h12M10 28h7" stroke="#A9B8C8" strokeWidth={1.6} {...line} />
    <Capsule x={36} y={23} r={-50} />
    <Capsule x={36} y={34.5} r={-8} />
  </g>,
  <g key="syrup">
    <rect x={14} y={0} width={12} height={7} rx={1.5} fill="#EAF0F6" />
    <path d="M16 7h8v4c0 3 6 4 6 9v16a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V20c0-5 6-6 6-9z" fill="#8A4E2E" />
    <path d="M10 20h20v14H10z" fill="#FFE2C6" />
    <path d="M20 22c3 3.6 3.8 5 3.8 6.6a3.8 3.8 0 0 1-7.6 0c0-1.6.8-3 3.8-6.6z" fill="#DF9770" />
    <path d="M33 29h11l-1.6 10h-7.8z" fill="#B7C4D2" fillOpacity={0.5} />
    <path d="M33.6 33h9.8l-1 6h-7.8z" fill="#8A4E2E" />
  </g>,
  <g key="allergy">
    <rect x={4} y={6} width={25} height={33} rx={2} fill="#EAF0F6" />
    <path d="M4 28h25v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="#DF9770" />
    <path d={cross(2.2, 6.6)} transform="translate(16.5 17)" fill="#DF9770" />
    <rect x={24} y={13} width={21} height={26} rx={3} fill="#A9B8C8" />
    {[18, 26, 34].map((y) => [30, 39].map((x) => <circle key={`${x}${y}`} cx={x} cy={y} r={3} fill="#F6F8FB" />))}
  </g>,
]
const Good = ({ i, className, name }: { i: number; className: string; name?: string }) => (
  <svg viewBox="0 0 48 40" className={className} aria-hidden="true" {...(name && s(name))}>{GOODS[i]}</svg>
)

// The paper bag an order is packed in. Items drop in between its back and its front.
function OrderBag() {
  const { x, y, w, d, h } = BAG
  const [X, Y, mid] = [x + w, y + d, y + d / 2]
  const b = bag(0)
  const side = (i: number, fill: string) => <polygon {...s("side")} points={b[i]} fill={fill} stroke={fill} strokeWidth={0.6} strokeLinejoin="round" />
  return (
    <g {...s("parcel")} className={LATER}>
      <polygon points={pts([x - 3, y + 4, 0], [X + 2, y + 4, 0], [X + 2, Y + 8, 0], [x - 3, Y + 8, 0])} fill="#071321" fillOpacity={0.3} />
      {side(0, "#9FB0C2")}
      {side(1, "#B3C1CF")}
      <g {...s("drop")} opacity={0}><Vial x={STOCK.vial[0]} z={STOCK.vial[2]} /></g>
      <g {...s("drop")} opacity={0}><Tub x={STOCK.tub[0]} z={STOCK.tub[2]} /></g>
      {side(2, "#F4F7FA")}
      {side(3, "#FFFFFF")}
      {side(4, "#C3D0DD")}
      {/* Top rolled over and closed with a round seal; the label is stuck on the front */}
      <g {...s("seal")}>
        <polygon points={pts([x, mid, h + 1], [X, mid, h + 1], [X, mid + 6, h - 8], [x, mid + 6, h - 8])} fill="#D3DDE8" />
        <g transform={rightM(x + w / 2, mid + 6, h - 8)}>
          <circle r={7.5} fill="#DF9770" />
          <path d={cross(1.5, 4.5)} fill="#FFFFFF" />
        </g>
        <g transform={rightM(x, Y, 5)}>
          <rect x={5} y={-15} width={26} height={15} rx={1.5} fill="#FFE2C6" />
          <path d="M8.5-11h12M8.5-7.5h18M8.5-4h9" stroke="#B9714A" strokeWidth={1.6} {...line} />
        </g>
      </g>
    </g>
  )
}

// Delivery van facing right-down, parked on the fallen right wall. Origin: rear corner at (vx, vy).
const { x: vx, y: vy } = VAN
const vs = vy + VAN.d // the side we see
function Wheel({ x }: { x: number }) {
  return (
    <g transform={rightM(x, vs + 0.5, 10)}>
      <circle r={11} fill="#071321" />
      <g {...s("wheel")}>
        <circle r={5.6} fill="#A9B8C8" />
        <path d="M-5 0H5M0-5V5" stroke="#071321" strokeWidth={1.6} />
      </g>
    </g>
  )
}
function Van() {
  return (
    <g {...s("van")}>
      <polygon {...s("door")} points={doors(0)[1]} fill="#DCE5EE" />
      {[0, 1, 2].map((i) => {
        const [cx, cy] = P(vx - 4, vs - 8, 8)
        return <circle key={i} {...s("puff")} cx={cx} cy={cy} r={7} fill="#DCE3EB" opacity={0} />
      })}
      <polygon points={pts([vx - 2, vy + 4, 0], [vx + 122, vy + 4, 0], [vx + 122, vs + 14, 0], [vx - 2, vs + 14, 0])} fill="#071321" fillOpacity={0.35} />
      <Box x={vx} y={vy} z={9} w={74} d={46} h={56} f={["#FFFFFF", "#EAF0F6", "#B9C7D6"]} />
      <g transform={rightM(vx, vs, 9)}>
        <rect y={-9} width={74} height={9} fill="#DF9770" />
        <g transform="translate(37 -33)" fill="#DF9770">
          <Mark r={20} gap={5.2} dot={2.5} />
        </g>
      </g>
      {/* cab */}
      <polygon points={pts([vx + 74, vy, 52], [vx + 92, vy, 52], [vx + 92, vs, 52], [vx + 74, vs, 52])} fill="#F6F8FB" />
      <polygon points={pts([vx + 92, vy, 52], [vx + 108, vy, 30], [vx + 108, vs, 30], [vx + 92, vs, 52])} fill="#0F2F4C" />
      <polygon points={pts([vx + 95, vy + 6, 48], [vx + 105, vy + 6, 34], [vx + 105, vy + 18, 34], [vx + 95, vy + 24, 48])} fill="#fff" fillOpacity={0.16} />
      <polygon points={pts([vx + 108, vy, 9], [vx + 108, vs, 9], [vx + 108, vs, 30], [vx + 108, vy, 30])} fill="#C9D5E1" />
      <g transform={rightM(vx, vs, 0)}>
        <path d="M74-9h34v-21L92-52H74z" fill="#EAF0F6" />
        <path d="M79-31h23l-11-15H79z" fill="#0F2F4C" />
        <rect x={74} y={-18} width={34} height={9} fill="#DF9770" />
        <path d="M80-25h6" stroke="#A9B8C8" strokeWidth={2} {...line} />
      </g>
      <g transform={leftM(vx + 108.5, vs, 20)} fill="#FFE2C6" {...s("lights")}>
        <ellipse cx={6} rx={4} ry={3.6} />
        <ellipse cx={40} rx={4} ry={3.6} />
      </g>
      <Wheel x={vx + 18} />
      <Wheel x={vx + 88} />
    </g>
  )
}

// Points along a quadratic curve, for the order's dot trail.
const curve = (a: readonly number[], b: readonly number[], c: readonly number[], n: number) =>
  Array.from({ length: n }, (_, i) => {
    const t = (i + 0.5) / n
    return [0, 1].map((k) => +((1 - t) ** 2 * a[k] + 2 * (1 - t) * t * b[k] + t * t * c[k]).toFixed(1))
  })

// The order hangs where the tablet's check mark was, then arcs to the counter screen.
const ORDER = curve(TOKEN, [TOKEN[0] + 34, TOKEN[1] - 190], TILL, 9)

// The dots that fill the cross sign: biggest in the middle, like the mark.
const LED = Array.from({ length: 13 * 13 }, (_, i) => [(i % 13) - 6, Math.floor(i / 13) - 6])
  .filter(([i, j]) => Math.min(Math.abs(i), Math.abs(j)) < 2)
  .map(([i, j]) => [i * 6.9, j * 6.9, +(3.1 - Math.hypot(i, j) * 0.26).toFixed(2)])

const PANELS_OPEN = fold(90, 1)

// Halftone printed on the two back flaps: dots shrink from the fold outward.
const FLAP_DOTS = ["flapBL", "flapBR"].flatMap((id) => {
  const [a, b, , d] = PANELS_OPEN.find((p) => p.id === id)!.points.split(" ").map((v) => v.split(",").map(Number))
  return Array.from({ length: 17 * 5 }, (_, i) => {
    const [u, v] = [((i % 17) + 0.5) / 17, (Math.floor(i / 17) + 0.5) / 6.4]
    return [0, 1].map((k) => +(a[k] + (b[k] - a[k]) * u + (d[k] - a[k]) * v).toFixed(1)).concat(+(3.4 * (1 - v) * (0.35 + 0.65 * Math.sin(u * Math.PI))).toFixed(2))
  })
})

function Scene() {
  return (
    <svg viewBox="0 0 660 570" className="block h-auto w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="hs-shadow"><stop stopColor="#030A13" stopOpacity=".75" /><stop offset="1" stopColor="#030A13" stopOpacity="0" /></radialGradient>
        <radialGradient id="hs-glow"><stop stopColor="#F2B48F" stopOpacity=".55" /><stop offset="1" stopColor="#DF9770" stopOpacity="0" /></radialGradient>
        <linearGradient id="hs-wl" x1="1" x2="0" y2="1"><stop stopColor="#1C4B70" /><stop offset="1" stopColor="#0D2A44" /></linearGradient>
        <linearGradient id="hs-wr" x2="1" y2="1"><stop stopColor="#235781" /><stop offset="1" stopColor="#143C5D" /></linearGradient>
        <linearGradient id="hs-fl" x2="0" y2="1"><stop stopColor="#123552" /><stop offset="1" stopColor="#1B486B" /></linearGradient>
        <clipPath id="hs-slot"><rect x={60} y={-140} width={140} height={84} /></clipPath>
      </defs>

      <ellipse cx={330} cy={452} rx={370} ry={132} fill="url(#hs-shadow)" />

      {/* Road the van leaves on */}
      <g fill="#DF9770" {...s("road")}>
        {Array.from({ length: 13 }, (_, i) => {
          const [x, y] = P(412 + i * 18, 100)
          return <circle key={i} {...s("dash")} cx={x} cy={y} r={3 - i * 0.15} fillOpacity={1 - i * 0.07} />
        })}
      </g>

      {/* Room */}
      <g>
        <polygon points={pts([0, 0, 0], [W, 0, 0], [W, W, 0], [0, W, 0])} fill="url(#hs-fl)" />
        <polygon points={pts([0, 0, 0], [0, W, 0], [0, W, H], [0, 0, H])} fill="url(#hs-wl)" />
        <polygon points={pts([0, 0, 0], [W, 0, 0], [W, 0, H], [0, 0, H])} fill="url(#hs-wr)" />
        <g fill="#DF9770" stroke="none">
          <polygon points={pts([0, 0, H], [0, W, H], [-5, W, H], [-5, -5, H], [W, -5, H], [W, 0, H])} fill="#F0C3A4" />
          <polygon points={pts([0, W, 0], [-5, W, 0], [-5, W, H], [0, W, H])} fill="#C47D56" />
          <polygon points={pts([W, 0, 0], [W, -5, 0], [W, -5, H], [W, 0, H])} fill="#A9643F" />
        </g>
        {/* Wall base line */}
        <path d={`M${P(0, W, 7).join(" ")}L${P(0, 0, 7).join(" ")}L${P(W, 0, 7).join(" ")}`} stroke="#0B1E31" strokeOpacity={0.45} strokeWidth={2} {...line} />
        <ellipse cx={330} cy={330} rx={190} ry={120} fill="url(#hs-glow)" />
        {/* The mark as a pool of light on the floor */}
        <g transform={floorM(112, 138)} fill="#F2B48F" fillOpacity={0.75}>
          <Mark r={58} gap={11} dot={5} name="pool" />
        </g>

        {/* Left wall: a lit pharmacy cross made of the mark's dots, and the insights screen */}
        <g {...s("pop")}>
          <g transform={leftM(0, 0, 0)}>
            <circle cx={-56} cy={-88} r={62} fill="url(#hs-glow)" {...s("halo")} />
            <g transform="translate(-56 -88)">
              <path d={cross(17, 46)} fill="#DF9770" stroke="#FFE2C6" strokeWidth={3} strokeLinejoin="round" />
              <g {...s("sign")} fill="#FFF6EE">
                {LED.map(([x, y, r]) => <circle key={`${x},${y}`} cx={x} cy={y} r={r} />)}
              </g>
            </g>
          </g>
        </g>
        <g {...s("pop")}>
          <g transform={leftM(0, 0, 0)}>
            <rect x={-184} y={-122} width={72} height={58} rx={5} fill="#071321" stroke="#2C6391" strokeWidth={2} />
            <path d="M-176-78h56M-176-92h56M-176-106h56" stroke="#1C4B70" strokeWidth={1} {...line} />
            <path {...s("chart")} pathLength={1} strokeDasharray="1 3" d="M-176-80l11-7 10 4 11-15 10 7 14-18" stroke="#DF9770" strokeWidth={2.6} {...line} />
            <path {...s("spark")} d="M-124-124l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFE2C6" />
            {/* prescriptions pinned up */}
            {[-176, -146].map((x, i) => (
              <g key={x} transform={`rotate(${i ? 3 : -3} ${x + 10} -52)`}>
                <rect x={x} y={-52} width={22} height={30} rx={1.5} fill="#EAF0F6" />
                <path d={cross(1.3, 4)} transform={`translate(${x + 8} -44)`} fill="#DF9770" />
                <path d={`M${x + 4}-36h14M${x + 4}-31.5h14M${x + 4}-27h9`} stroke="#A9B8C8" strokeWidth={1.4} {...line} />
                <circle cx={x + 11} cy={-52} r={2} fill="#DF9770" />
              </g>
            ))}
          </g>
        </g>

        {/* Right wall: lit shelves of medicine under a pharmacy fascia */}
        {SHELVES.map(({ z, row }) => (
          <g key={z}>
            <polygon points={pts([0, 0, z - 4], [W, 0, z - 4], [W, 0, z - 20], [0, 0, z - 20])} fill="#FFE2C6" fillOpacity={0.12} />
            <Box x={22} y={0} z={z - 4} w={160} d={20} h={4} f={["#FFFFFF", "#DCE5EE", "#B9C7D6"]} />
            <polygon points={pts([22, 20, z - 4], [182, 20, z - 4], [182, 20, z - 5.4], [22, 20, z - 5.4])} fill="#F2B48F" />
            {row.map((item, i) => <g key={i} {...s("pop")}>{item}</g>)}
          </g>
        ))}
        <g {...s("awning")}>
          <Box x={4} y={0} z={126} w={194} d={18} h={22} f={["#FFFFFF", "#F6F8FB", "#C3D0DD"]} />
          <g transform={rightM(4, 18, 126)}>
            <rect y={-3.5} width={194} height={3.5} fill="#DF9770" />
            {[30, 164].map((x) => <circle key={x} cx={x} cy={-12.5} r={5.4} fill="#1C4B70" />)}
            {[30, 164].map((x) => <path key={x} d={`M${x - 3}-9.5l6-6`} stroke="#F6F8FB" strokeWidth={1.4} {...line} />)}
            <Capsule x={62} y={-12.5} k={0.95} />
            <Capsule x={132} y={-12.5} k={0.95} />
            <path d={cross(2.9, 8.2)} transform="translate(97 -12.6)" fill="#DF9770" />
          </g>
        </g>

        {/* Counter with the POS */}
        <g {...s("pop")}>
          <polygon points={pts([56, 96, 0], [172, 96, 0], [172, 146, 0], [56, 146, 0])} fill="#071321" fillOpacity={0.3} />
          <Box x={62} y={100} w={98} d={32} h={42} f={["#F6F8FB", "#E4EBF2", "#B9C7D6"]} />
          {/* Locked glass front */}
          <g transform={rightM(62, 132, 0)}>
            <rect x={5} y={-37} width={88} height={30} rx={1.5} fill="#0B2740" />
            <rect x={5} y={-37} width={88} height={3} fill="#FFE2C6" fillOpacity={0.55} />
            {[12, 20, 28, 68, 76, 84].map((x, i) => (
              <g key={x}>
                <rect x={x} y={-19} width={6} height={12} rx={1} fill={i < 3 ? "#D97F2B" : "#EAF0F6"} />
                <rect x={x - 0.6} y={-22} width={7.2} height={3.4} rx={0.8} fill={i < 3 ? "#FFFFFF" : "#DF9770"} />
              </g>
            ))}
            <path d="M8-11 34-34h9L17-11zM56-11 80-34h5L61-11z" fill="#fff" fillOpacity={0.12} />
            <path d="M49-37v30" stroke="#A9B8C8" strokeWidth={1.6} {...line} />
            <path d="M45.5-21v-3.2a3.5 3.5 0 0 1 7 0v3.2" stroke="#FFE2C6" strokeWidth={1.8} {...line} />
            <rect x={43.5} y={-21.5} width={11} height={9} rx={1.6} fill="#DF9770" />
          </g>
          <Box x={57} y={96} z={42} w={108} d={40} h={5} f={["#FFFFFF", "#DF9770", "#B9714A"]} />
          {/* Mortar and pestle */}
          <g transform={`translate(${P(71, 122, 47).join(" ")})`}>
            <path d="M3-13 12-25" stroke="#DF9770" strokeWidth={4.4} {...line} />
            <path d="M-12-13h24c0 8-3.4 11-6 12.6h-12C-8.6-2-12-5-12-13z" fill="#D5DFE9" />
            <path d="M-7-.6h14v2.6h-14z" fill="#B9C7D6" />
            <ellipse cy={-13} rx={12} ry={4.6} fill="#FFFFFF" />
            <ellipse cy={-12.6} rx={9} ry={3} fill="#A9B8C8" />
            <path d="M2-12.5 12-25" stroke="#DF9770" strokeWidth={4.4} {...line} />
          </g>
          <Box x={104} y={110} z={47} w={14} d={12} h={5} f={["#A9B8C8", "#71869C", "#53687F"]} />
          <g transform={rightM(0, 117, 0)}>
            <rect {...s("till")} x={84} y={-94} width={54} height={42} rx={5} fill="#071321" stroke="#A9B8C8" strokeWidth={2} />
            <path d="M90-87h18" stroke="#53687F" strokeWidth={3} {...line} />
            {[90, 112].map((x) => [-81, -71].map((y) => <rect key={`${x}${y}`} x={x} y={y} width={20} height={7} rx={2} fill="#1C4B70" />))}
            <rect {...s("pay")} x={90} y={-61} width={42} height={6} rx={3} fill="#DF9770" />
          </g>
          <g transform={rightM(0, 118, 0)} clipPath="url(#hs-slot)">
            <path {...s("receipt")} className={LATER} d="M144-56v-24l3 2 3-2 3 2 3-2v24z" fill="#FFFFFF" />
          </g>
          <Box x={142} y={110} z={47} w={17} d={16} h={9} f={["#53687F", "#3B5068", "#2A3D52"]} />
        </g>
        <g {...s("pop")}><Parcel x={18} y={152} w={30} h={24} /><Parcel x={22} y={156} z={24} w={20} h={16} /></g>
      </g>

      {/* Box panels: walls fall outward, flaps open */}
      <g strokeLinejoin="round" strokeWidth={1}>
        {PANELS_OPEN.map((p) => (
          <polygon key={p.id} data-panel={p.id} points={p.points} fill={p.fill} stroke={p.fill} />
        ))}
        {/* Only seen while the box is shut: taped top and a printed side */}
        <g {...s("lid")} opacity={0}>
          <polygon points={pts([0, 0, H], [W, 0, H], [W, W, H], [0, W, H])} fill="#DA9972" />
          <polygon points={pts([0, 84, H], [W, 84, H], [W, 116, H], [0, 116, H])} fill={parcelTape} />
          <polygon points={pts([W, 84, H], [W, 116, H], [W, 116, H - 34], [W, 84, H - 34])} fill="#E2BCA3" />
          <g transform={rightM(100, W, 72)} fill="#0B1E31" fillOpacity={0.5}><Mark r={46} gap={9.4} dot={4.4} /></g>
        </g>
      </g>

      {/* Printed on the fallen walls */}
      <g {...s("print")}>
        <polygon points={pts([W, 0, 0], [W + 4, 0, 0], [W + 4, W, 0], [W, W, 0])} fill="#8A4E2E" fillOpacity={0.55} />
        <polygon points={pts([0, W, 0], [W, W, 0], [W, W + 4, 0], [0, W + 4, 0])} fill="#8A4E2E" fillOpacity={0.55} />
        <polygon points={pts([W + H, 0, 0], [W + H, W, 0], [W + H, W, -5], [W + H, 0, -5])} fill="#8A4E2E" />
        <polygon points={pts([0, W + H, 0], [W, W + H, 0], [W, W + H, -5], [0, W + H, -5])} fill="#99582F" />
        <polygon points={pts([W, W, 0], [W + H, W, 0], [W + H, W, -5], [W, W, -5])} fill="#8A4E2E" />
        <polygon points={pts([W, W, 0], [W, W + H, 0], [W, W + H, -5], [W, W, -5])} fill="#7A4425" />
        {FLAP_DOTS.map(([x, y, r]) => <circle key={`${x},${y}`} cx={x} cy={y} r={r} fill="#A4572C" fillOpacity={0.42} />)}
        <g transform={floorM(100, 275)} fill="#0B1E31" fillOpacity={0.5}><Mark r={46} gap={9.4} dot={4.4} /></g>
        <g transform={floorM(304, 168)} stroke="#0B1E31" strokeOpacity={0.5} strokeWidth={3.4} {...line}><path d="M-12 14V-10m-6 6 6-7 6 7M10 14V-10m-6 6 6-7 6 7M-20 20h38" /></g>
      </g>
      <g {...s("pop")}><Parcel x={212} y={18} w={30} h={26} /><Parcel x={216} y={22} z={26} w={20} h={16} /></g>
      <g {...s("van")}><polygon {...s("door")} points={doors(0)[0]} fill="#B9C7D6" /></g>
      <OrderBag />
      <Van />

      {/* The order: a check mark on its way to the counter, then a ticket over it with the two items to pack */}
      <g fill="#FFE2C6">{ORDER.map(([x, y], i) => <circle key={i} {...s("order")} cx={x} cy={y} r={4.4} opacity={0} />)}</g>
      <g {...s("token")} opacity={0}>
        <circle cx={TOKEN[0]} cy={TOKEN[1]} r={40} fill="#DF9770" />
        <path d={`M${TOKEN[0] - 17} ${TOKEN[1] + 2}l12 12 22-27`} stroke="#0B1E31" strokeWidth={7} {...line} />
      </g>
      <g transform={`translate(${TILL[0]} ${TILL[1] - 26})`}>
        <g {...s("ticket")} opacity={0}>
          <path d="M-96-70H2a12 12 0 0 1 12 12v36a12 12 0 0 1-12 12H-4L0 0-24-10H-96a12 12 0 0 1-12-12v-36a12 12 0 0 1 12-12z" fill="#0B1E31" stroke="#DF9770" strokeWidth={2.5} strokeLinejoin="round" />
          {[1, 0].map((g, i) => (
            <g key={g} transform={`translate(${i ? -44 : -100} -62)`}>
              {GOODS[g]}
              <g {...s("packed")}>
                <circle cx={40} cy={35} r={10} fill="#FFE2C6" />
                <path d="M35.5 35.5l3 3 6-7" stroke="#0B1E31" strokeWidth={2.8} {...line} />
              </g>
            </g>
          ))}
        </g>
      </g>

      {/* Dots rising out of the box */}
      <g fill="#DF9770">
        {Array.from({ length: 14 }, (_, i) => (
          <circle key={i} {...s("mote")} cx={200 + ((i * 97) % 270)} cy={250 + ((i * 53) % 90)} r={2 + (i % 3) * 0.9} opacity={0} />
        ))}
      </g>
    </svg>
  )
}

// Spreads out under a tap, clipped by whatever was tapped.
const Ripple = () => <span {...s("ripple")} className="pointer-events-none absolute left-1/2 top-1/2 -ml-[110px] -mt-[110px] size-[220px] rounded-full bg-white/50 opacity-0" />

const glass = "border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-100"
const field = "border border-white/20 bg-[#00152B]"

// One product, as the POS product grid shows it.
function Card({ i, name, price, low, children }: { i: number; name?: string; price?: string; low?: boolean; children?: ReactNode }) {
  return (
    <div className={`relative h-[112px] overflow-hidden rounded-xl border-[1.5px] bg-[linear-gradient(145deg,#1a2540,#243055_50%,#1c2a42)] shadow-md ${low ? "border-[#E1A31E]/60" : "border-[#228B22]/60"}`}>
      <Good i={i} className="absolute left-1/2 top-2.5 -ml-[38px] h-[63px] w-[76px]" />
      {name && (
        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,.92),rgba(0,0,0,.6)_60%,transparent)] px-2 pb-1.5 pt-7 leading-tight">
          <b className="block text-[.71875rem] font-bold">{name}</b>
          <b className="block text-[.8125rem] font-bold">{price}</b>
        </div>
      )}
      {low && <span className="absolute left-1.5 top-1.5 rounded-full bg-[#CA8A04] px-2 py-0.5 text-[.5625rem] font-bold leading-[1.4] text-white">Low stock</span>}
      {children}
    </div>
  )
}

// The POS app's tablet screen: order tabs and type on top, product grid, then customer, cart, totals and Complete Order.
// Same layout, colors and labels as the app. At rest it shows two items in the cart.
function Screen() {
  const { pos } = hero
  return (
    <div {...s("screen")} className="relative flex h-full flex-col overflow-hidden rounded-[14px] bg-[#071529] text-white">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-blue-400/20 px-2 text-[.6875rem]">
        <div className="flex items-center gap-0.5 rounded-xl bg-white/5 p-0.5">
          {pos.tabs.map((t, i) => (
            <span key={t} className={`rounded-full px-2 py-1 leading-[1.4] ${i === 0 ? `${glass} px-2.5 font-bold` : "font-medium text-blue-200/70"}`}>
              {t}
            </span>
          ))}
        </div>
        <span className="h-5 w-px bg-blue-400/20" />
        <span className={`flex h-[26px] items-center gap-3 rounded-full pl-3 pr-2 font-medium ${glass}`}>
          {pos.type}
          <ChevronDown className="size-3 text-blue-400" />
        </span>
        <span className="flex-1" />
        {[Monitor, IdCard, User, RotateCcw].map((Icon, i) => (
          <span key={i} className={`grid size-[26px] place-items-center rounded-full ${i === 0 ? "border border-green-400/50 bg-green-400/10 text-green-300" : i === 3 ? "border border-red-400/40 bg-red-500/15 text-red-300" : glass}`}>
            <Icon className="size-3.5" />
          </span>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 gap-2 p-2">
        <div className="flex min-w-0 flex-1 flex-col gap-2 overflow-hidden rounded-lg bg-[#00152A] p-2">
          <div className="flex h-7 shrink-0 gap-1.5">
            <span className={`flex items-center rounded-lg p-0.5 ${field}`}>
              {[BoxIcon, QrCode].map((Icon, i) => (
                <span key={i} className={`grid h-full w-7 place-items-center rounded-md ${i === 0 ? "bg-[#038FDE]" : "text-white/70"}`}><Icon className="size-3.5" /></span>
              ))}
            </span>
            <span className={`flex flex-1 items-center rounded-lg px-2 text-white/50 ${field}`}><Search className="size-3.5" /></span>
            {[Camera, Filter].map((Icon, i) => (
              <span key={i} className={`grid w-7 place-items-center rounded-lg ${field}`}><Icon className="size-3.5" /></span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {pos.items.map((it, i) => (
              <div key={it.name} {...(i < 2 && s("tile"))}>
                <Card i={i} {...it}>{i < 2 && <Ripple />}</Card>
              </div>
            ))}
            {/* The next row, cut off by the edge of the list */}
            <Card i={3} />
            <Card i={0} />
          </div>
        </div>

        <div className="flex w-[208px] shrink-0 flex-col gap-2 rounded-lg bg-[#00152A] p-2.5 text-[.6875rem]">
          <div className="flex h-9 items-center gap-2 rounded-xl border border-[#0190DD]/30 bg-[#001D3D] px-2">
            <span className="grid size-6 place-items-center rounded-full bg-[#0190DD]/20 text-[#0190DD]"><User className="size-3.5" /></span>
            <b className="flex-1 text-[.75rem] font-semibold">{pos.customer}</b>
            <X className="size-3.5 opacity-70" />
          </div>
          <div className="flex h-8 items-center gap-2 rounded-xl border-[1.5px] border-[#0190DD]/60 bg-[#0190DD]/[.12] px-2.5">
            <MapPin className="size-3.5 text-[#0190DD]" />
            <b className="flex-1 font-bold">{pos.address}</b>
            <Pencil className="size-3 opacity-60" />
          </div>
          <div {...s("cart")} className="flex h-9 items-center gap-2 rounded-xl bg-[#0190DD] px-2.5">
            <ShoppingCart className="size-4" />
            <b {...s("count")} className="flex-1 font-semibold">{pos.cart.label}</b>
            <b {...s("sum")} className="text-[.8125rem] font-bold">{pos.cart.total}</b>
          </div>
          <div className="flex h-8 items-center gap-2 rounded-xl bg-[#8B5CF6]/85 px-2.5">
            <Tag className="size-3.5" />
            <b className="flex-1 text-[.65625rem] font-semibold">{pos.discounts.label}</b>
            <b className="font-bold">{pos.discounts.total}</b>
          </div>
          <div className="rounded-xl bg-white/[.04] px-2.5 py-2">
            <div className="flex justify-between pb-1.5">
              <span className="text-white/70">{pos.subtotal}</span>
              <b {...s("sum")} className="font-semibold">{pos.cart.total}</b>
            </div>
            <div className="flex justify-between border-t border-white/[.12] pt-1.5 text-[.875rem] font-bold">
              <span>{pos.total}</span>
              <b {...s("sum")} className="font-bold">{pos.cart.total}</b>
            </div>
          </div>
          <div {...s("confirm")} className="relative mt-auto grid h-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#038FDE] to-violet-500 text-[.8125rem] font-bold shadow-lg shadow-[#038FDE]/30">
            <span {...s("label")}>{pos.confirm}</span>
            <svg {...s("spin")} viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 -ml-2.5 -mt-2.5 size-5 opacity-0" aria-hidden="true">
              <circle cx={12} cy={12} r={9} stroke="#fff" strokeOpacity={0.3} strokeWidth={3} fill="none" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="#fff" strokeWidth={3} {...line} />
            </svg>
            <Ripple />
          </div>
        </div>
      </div>

      {/* Items on their way to the cart, the payment going through, and the finger's touch point */}
      {[0, 1].map((i) => <Good key={i} i={i} name="fly" className="absolute left-0 top-0 -ml-[38px] -mt-[32px] h-[63px] w-[76px] opacity-0" />)}
      <div {...s("done")} className="invisible absolute inset-0 grid place-items-center bg-navy-800">
        <svg viewBox="-270 -190 540 380" className="h-full w-full" aria-hidden="true">
          <g fill="#DF9770" fillOpacity={0.4}><Mark r={168} gap={16} dot={6.6} name="burst" /></g>
          <circle {...s("seal-ring")} r={40} fill="#DF9770" />
          <path {...s("check")} pathLength={1} strokeDasharray="1 2" d="M-17 2l12 12 22-27" stroke="#0B1E31" strokeWidth={7} {...line} />
        </svg>
      </div>
      <div {...s("touch")} className="absolute left-0 top-0 -ml-[17px] -mt-[17px] size-[34px] opacity-0">
        <span {...s("ring")} className="absolute inset-0 rounded-full border-[3px] border-white opacity-0" />
        <span {...s("finger")} className="absolute inset-0 rounded-full border-2 border-white/90 bg-white/30 shadow-[0_4px_14px_rgba(0,0,0,.45)]" />
      </div>
    </div>
  )
}

// The tablet itself: metal rim, black bezel, camera, buttons on the top edge, a streak of light on the glass.
function Tablet() {
  return (
    <div
      className="relative h-[412px] w-[572px] rounded-[30px] bg-[linear-gradient(165deg,#E4EAF0,#97A4B2_30%,#5C6977_70%,#8593A2)] p-[3px] shadow-[0_2px_0_#78868F,0_5px_0_#39434E,0_44px_70px_-18px_rgba(3,10,19,.95)]"
      role="img"
      aria-label={hero.pos.alt}
    >
      <span className="absolute -top-[2.5px] right-12 h-[3px] w-11 rounded-t-[3px] bg-[#9AA7B4]" />
      <span className="absolute -top-[2.5px] left-14 h-[3px] w-7 rounded-t-[3px] bg-[#B4BFCA]" />
      <span className="absolute -top-[2.5px] left-[90px] h-[3px] w-7 rounded-t-[3px] bg-[#B4BFCA]" />
      <div className="relative h-full overflow-hidden rounded-[27px] bg-[#04070C] p-[13px] shadow-[inset_0_0_0_1.5px_rgba(0,0,0,.9),inset_0_0_0_2.5px_rgba(255,255,255,.07)]">
        <span className="absolute left-1/2 top-[4px] -ml-[3px] size-[6px] rounded-full bg-[#101B29] shadow-[inset_0_0_0_1px_#26364A]" />
        <Screen />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.09),rgba(255,255,255,.025)_26%,transparent_26.3%,transparent_62%,rgba(255,255,255,.035)_62.3%,transparent_74%)]" />
      </div>
    </div>
  )
}

export function HeroScene() {
  return (
    <div data-fx="scene" className="max-lg:pb-16 lg:-mt-10 lg:mb-6">
      <div className="relative max-lg:-mx-3 lg:-mr-[11%] lg:ml-[2%]">
        <div {...s("stage")} className="animate-rise [animation-delay:350ms]">
          <Scene />
        </div>
        {/* In front of the shop, centered on TOKEN, cropped by the section's bottom edge, which it rises from. Without motion it rests smaller, at the side. */}
        <div
          className="pointer-events-none absolute left-[--x] top-[--y] size-0 scale-[.56] min-[380px]:scale-[.64] sm:scale-100 md:scale-[1.2] lg:scale-[.72] xl:scale-100 motion-reduce:left-[20%] motion-reduce:top-[84%] motion-reduce:!scale-[.28] motion-reduce:sm:!scale-[.46]"
          style={{ "--x": `${(TOKEN[0] / 660) * 100}%`, "--y": `${(TOKEN[1] / 570) * 100}%` } as CSSProperties}
        >
          <div {...s("tablet")} className={`absolute -left-[286px] -top-[206px] ${LATER}`}>
            <div data-fx="tablet" className="relative">
              <span className="absolute -inset-x-28 -inset-y-24 bg-[radial-gradient(closest-side,rgba(3,10,19,.7),transparent)] motion-reduce:hidden" />
              <Tablet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
