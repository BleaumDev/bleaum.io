import type { ReactNode } from "react"
import { ShoppingBag, Store, Truck } from "lucide-react"
import { BOX, H, P, THUMB, TILL, TOKEN, VAN, W, doors, flaps, floorM, fold, leftM, pts, rightM, thumb } from "./hero-iso"
import { hero } from "./home-content"

// Home hero illustration: "your business in a box", run "from one hand". A copper box unfolds into a lit shop. A hand
// comes up in front of it, places an order on the phone and leaves; the shop packs the order and the van takes it away.
// The scene itself is wordless; the only text is the POS copy on the phone (home-content hero.pos).
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

const Mug = ({ x, z, f }: { x: number; z: number; f: readonly [string, string] }) => {
  const [cx, cy] = P(x, 10, z)
  return (
    <g {...s("pop")}>
      <path d={`M${cx + 7} ${cy - 10}c8 -1 8 9 -1 8`} stroke={f[1]} strokeWidth={2.4} {...line} />
      <Can x={x} y={10} z={z} r={6.2} h={13} f={f} />
    </g>
  )
}

const Candle = ({ x, y, z, h }: { x: number; y: number; z: number; h: number }) => {
  const [cx, cy] = P(x, y, z + h)
  return (
    <g {...s("pop")}>
      <Can x={x} y={y} z={z} r={4.6} h={h} f={["#FBE7DA", "#E2B195"]} />
      <path {...s("flame")} d={`M${cx} ${cy - 1}c-3.6-3-2.6-6.5 0-10 2.6 3.5 3.6 7 0 10z`} fill="#FFD9A8" />
    </g>
  )
}

const Tote = ({ x, z, color }: { x: number; z: number; color: string }) => (
  <g transform={rightM(x, 4, z)}>
    <path d="M6 1c0-13 10-13 10 0" stroke={color} strokeWidth={2} {...line} />
    <path d="M0 0h22l2 25H-2z" fill={color} />
    <g transform="translate(11 14)" fill="#0B1E31" fillOpacity={0.45}>
      <Mark r={7} gap={3} dot={1.3} />
    </g>
  </g>
)

// The four products on the phone, flat, in a 48 x 40 box. Same order as home-content hero.pos.items.
const GOODS = [
  <g key="tote">
    <path d="M17 15c0-13 14-13 14 0" stroke="#DF9770" strokeWidth={2.6} {...line} />
    <path d="M11 14h26l2 24H9z" fill="#DF9770" />
    <g transform="translate(24 26)" fill="#0B1E31" fillOpacity={0.5}><Mark r={8} gap={3.4} dot={1.5} /></g>
  </g>,
  <g key="mug">
    <path d="M32 14c10-1 10 13 0 12" stroke="#B7C4D2" strokeWidth={3} {...line} />
    <path d="M12 7h21v23a7 7 0 0 1-7 7h-7a7 7 0 0 1-7-7z" fill="#EAF0F6" />
    <path d="M12 7h21v5H12z" fill="#DF9770" />
  </g>,
  <g key="wallet">
    <rect x={6} y={9} width={36} height={27} rx={4} fill="#8A4E2E" />
    <path d="M6 18v-5a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v5z" fill="#A4572C" />
    <rect x={31} y={19} width={11} height={9} rx={4.5} fill="#DF9770" />
  </g>,
  <g key="candles">
    {[[8, 20, 10], [20, 12, 10], [32, 24, 9]].map(([x, y, w]) => (
      <g key={x}>
        <path d={`M${x + w / 2} ${y}c-3.6-3-2.6-6.5 0-10 2.6 3.5 3.6 7 0 10z`} fill="#FFD9A8" />
        <path d={`M${x} ${y}h${w}v${37 - y}h-${w}z`} fill="#FBE7DA" />
      </g>
    ))}
  </g>,
]
const Good = ({ i, className }: { i: number; className: string }) => (
  <svg viewBox="0 0 48 40" className={className} aria-hidden="true">{GOODS[i]}</svg>
)

// The carton an order is packed in. Items drop in between its back flaps and its front walls.
function Carton() {
  const { x, y, w, h } = BOX
  const [X, Y] = [x + w, y + w]
  const f = flaps(0)
  const [a, b] = [x + w * 0.36, x + w * 0.64]
  const flap = (i: number, fill: string) => <polygon {...s("flap")} points={f[i]} fill={fill} stroke={fill} strokeWidth={0.6} strokeLinejoin="round" />
  return (
    <g {...s("parcel")} className={LATER}>
      <polygon points={pts([x - 3, y + 4, 0], [X + 2, y + 4, 0], [X + 2, Y + 8, 0], [x - 3, Y + 8, 0])} fill="#071321" fillOpacity={0.3} />
      <polygon points={pts([x, y, h], [X, y, h], [X, Y, h], [x, Y, h])} fill="#6E3B20" />
      {flap(0, "#DCA07C")}
      {flap(1, "#EAB592")}
      <g {...s("drop")} opacity={0}><Mug x={76} z={70} f={["#FFFFFF", "#D5DFE9"]} /></g>
      <g {...s("drop")} opacity={0}><Tote x={104} z={54} color="#DF9770" /></g>
      <polygon points={pts([x, Y, 0], [X, Y, 0], [X, Y, h], [x, Y, h])} fill={kraft[1]} />
      <polygon points={pts([X, y, 0], [X, Y, 0], [X, Y, h], [X, y, h])} fill={kraft[2]} />
      {flap(2, "#DDA07B")}
      {flap(3, kraft[0])}
      <g {...s("seal")}>
        <polygon points={pts([a, y, h], [b, y, h], [b, Y, h], [a, Y, h])} fill={parcelTape} />
        <polygon points={pts([a, Y, h], [b, Y, h], [b, Y, h - 9], [a, Y, h - 9])} fill={parcelTape} />
        <g transform={leftM(X, Y, 12)}>
          <rect x={6} y={-8} width={20} height={15} rx={1.5} fill="#FFFFFF" />
          <path d="M9-3.5h9M9 0h13M9 3.5h6" stroke="#A9B8C8" strokeWidth={1.6} {...line} />
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

// Points along a quadratic curve, for the string lights and the order's dot trail.
const curve = (a: readonly number[], b: readonly number[], c: readonly number[], n: number) =>
  Array.from({ length: n }, (_, i) => {
    const t = (i + 0.5) / n
    return [0, 1].map((k) => +((1 - t) ** 2 * a[k] + 2 * (1 - t) * t * b[k] + t * t * c[k]).toFixed(1))
  })

const strA = P(0, W, H - 2)
const strB = P(W, 0, H - 2)
const strM = [330, 284] as const
const BULBS = curve(strA, strM, strB, 9)
// The order hangs where the phone's check mark was, then arcs to the counter screen.
const ORDER = curve(TOKEN, [TOKEN[0] + 34, TOKEN[1] - 190], TILL, 9)

// Scalloped awning over the right-hand wall: 8 stripes from (x, 0, H-6) down to (x, 24, H-22).
const STRIPES = Array.from({ length: 8 }, (_, i) => {
  const [a, b] = [6 + i * 23.5, 6 + (i + 1) * 23.5]
  const [p, q] = [P(a, 24, H - 24), P(b, 24, H - 24)]
  return { top: pts([a, 0, H - 4], [b, 0, H - 4], [b, 24, H - 24], [a, 24, H - 24]), edge: `M${p[0]} ${p[1]}v8q${(q[0] - p[0]) / 2} ${14 + (q[1] - p[1]) / 2} ${q[0] - p[0]} ${q[1] - p[1]}v-8z`, on: i % 2 === 0 }
})

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

        {/* Left wall: the mark as a lit sign, and the insights screen */}
        <g {...s("pop")}>
          <g transform={leftM(0, 0, 0)}>
            <circle cx={-58} cy={-92} r={46} fill="url(#hs-glow)" {...s("halo")} />
            <circle cx={-58} cy={-92} r={37} fill="#0B1E31" stroke="#DF9770" strokeWidth={2} />
            <g transform="translate(-58 -92)" fill="#F2B48F">
              <Mark r={31} gap={6.4} dot={3.3} name="sign" />
            </g>
          </g>
        </g>
        <g {...s("pop")}>
          <g transform={leftM(0, 0, 0)}>
            <rect x={-184} y={-122} width={72} height={58} rx={5} fill="#071321" stroke="#2C6391" strokeWidth={2} />
            <path d="M-176-78h56M-176-92h56M-176-106h56" stroke="#1C4B70" strokeWidth={1} {...line} />
            <path {...s("chart")} pathLength={1} strokeDasharray="1 3" d="M-176-80l11-7 10 4 11-15 10 7 14-18" stroke="#DF9770" strokeWidth={2.6} {...line} />
            <path {...s("spark")} d="M-124-124l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFE2C6" />
            {/* invoices pinned up */}
            {[-176, -146].map((x, i) => (
              <g key={x} transform={`rotate(${i ? 3 : -3} ${x + 10} -52)`}>
                <rect x={x} y={-52} width={22} height={30} rx={1.5} fill="#EAF0F6" />
                <path d={`M${x + 4}-45h14M${x + 4}-40h14M${x + 4}-35h9`} stroke="#A9B8C8" strokeWidth={1.4} {...line} />
                <circle cx={x + 11} cy={-52} r={2} fill="#DF9770" />
              </g>
            ))}
          </g>
        </g>

        {/* Right wall: shelves and awning */}
        {[70, 24].map((z) => (
          <Box key={z} x={26} y={0} z={z - 4} w={150} d={20} h={4} f={["#E9B391", "#B9714A", "#A9643F"]} />
        ))}
        <Mug x={40} z={70} f={["#FFFFFF", "#D5DFE9"]} />
        <Mug x={58} z={70} f={["#F2B48F", "#C47D56"]} />
        <g {...s("stock")}><Mug x={76} z={70} f={["#FFFFFF", "#D5DFE9"]} /></g>
        <Candle x={100} y={10} z={70} h={13} />
        <Candle x={114} y={10} z={70} h={19} />
        <Candle x={128} y={10} z={70} h={10} />
        <g {...s("pop")}><Box x={142} y={5} z={70} w={26} d={12} h={5} f={["#8A4E2E", "#6E3B20", "#5A2F19"]} /><Box x={143} y={5} z={75} w={24} d={12} h={5} f={["#A4572C", "#8A4E2E", "#6E3B20"]} /></g>
        <g {...s("pop")}><Box x={34} y={5} z={24} w={22} d={12} h={5} f={["#A4572C", "#8A4E2E", "#6E3B20"]} /><Box x={35} y={5} z={29} w={20} d={12} h={5} f={["#8A4E2E", "#6E3B20", "#5A2F19"]} /></g>
        <g {...s("pop")}><Tote x={72} z={54} color="#EAF0F6" /></g>
        <g {...s("pop")}><g {...s("stock")}><Tote x={104} z={54} color="#DF9770" /></g></g>
        <g {...s("pop")}><Tote x={136} z={54} color="#EAF0F6" /></g>
        <g {...s("awning")}>
          {STRIPES.map((t) => (
            <g key={t.top}>
              <path d={t.edge} fill={t.on ? "#C47D56" : "#DCE3EB"} />
              <polygon points={t.top} fill={t.on ? "#DF9770" : "#FFFFFF"} />
            </g>
          ))}
        </g>

        {/* Counter with the POS */}
        <g {...s("pop")}>
          <polygon points={pts([56, 96, 0], [172, 96, 0], [172, 146, 0], [56, 146, 0])} fill="#071321" fillOpacity={0.3} />
          <Box x={62} y={100} w={98} d={32} h={42} f={["#0F2F4C", "#12395A", "#0B2740"]} />
          <g transform={rightM(62, 132, 0)} stroke="#DF9770" strokeOpacity={0.55} strokeWidth={2}>
            {Array.from({ length: 11 }, (_, i) => <path key={i} d={`M${8 + i * 8.2}-6v-29`} {...line} />)}
          </g>
          <Box x={57} y={96} z={42} w={108} d={40} h={5} f={["#F0C3A4", "#DF9770", "#B9714A"]} />
          <Candle x={70} y={122} z={47} h={9} />
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
      <Carton />
      <Van />

      {/* String lights */}
      <path d={`M${strA.join(" ")}Q${strM.join(" ")} ${strB.join(" ")}`} stroke="#0B1E31" strokeWidth={1.6} {...line} {...s("wire")} />
      {BULBS.map(([x, y]) => (
        <g key={x} {...s("bulb")}>
          <circle cx={x} cy={y + 6} r={11} fill="url(#hs-glow)" />
          <circle cx={x} cy={y + 6} r={4} fill="#FFE2C6" />
        </g>
      ))}

      {/* The order: a check mark on its way to the counter, then a ticket over it with the two items to pack */}
      <g fill="#FFE2C6">{ORDER.map(([x, y]) => <circle key={x} {...s("order")} cx={x} cy={y} r={4.4} opacity={0} />)}</g>
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

const skin = { base: "#DF9770", light: "#EDB592", shade: "#B9714A", palm: "#CB855D" }
const handSvg = "pointer-events-none absolute -left-[50px] top-0 h-[780px] w-[370px] max-w-none"

// The hand, in pixels of the 232 x 404 phone it holds. The back goes under the phone, the front over it.
function HandBack() {
  return (
    <svg viewBox="-50 0 370 780" className={handSvg} aria-hidden="true">
      <path d="M4 278C-8 350 8 420 50 460C62 472 66 486 66 508V780H208V528C208 508 214 500 226 490C252 470 274 446 278 412L268 352L226 318Z" fill={skin.palm} />
      <path d="M40 448C84 476 132 468 168 440" stroke={skin.shade} strokeWidth={3} strokeOpacity={0.5} {...line} />
    </svg>
  )
}
function HandFront() {
  const t = thumb(THUMB.x, THUMB.y)
  return (
    <svg viewBox="-50 0 370 780" className={handSvg} aria-hidden="true">
      {[[180, 38, 17], [219, 39, 19], [259, 37, 17], [297, 32, 12]].map(([y, h, w]) => {
        const r = h / 2
        return (
          <g key={y} transform={`rotate(-7 0 ${y + r})`}>
            <path d={`M0 ${y}C-17 ${y + 3} -17 ${y + h - 3} 0 ${y + h}H${w - r}A${r} ${r} 0 0 0 ${w - r} ${y}Z`} fill={skin.base} />
            <path d={`M-8 ${y + h - 4}Q-2 ${y + h} ${w - r + 2} ${y + h - 1}`} stroke={skin.shade} strokeWidth={3} strokeOpacity={0.6} {...line} />
            <path d={`M${w - 9} ${y + 8}q4 ${r - 8} 0 ${h - 18}`} stroke={skin.light} strokeWidth={3} {...line} />
          </g>
        )
      })}
      <circle {...s("tap")} r={16} fill="#FFE2C6" fillOpacity={0.25} stroke="#FFE2C6" strokeWidth={3} opacity={0} />
      <path {...s("thumb-shadow")} d={t.body} fill="#030A13" fillOpacity={0.35} transform="translate(-9 9)" />
      <path {...s("thumb")} d={t.body} fill={skin.base} />
      <path {...s("thumb-edge")} d={t.edge} stroke={skin.shade} strokeWidth={3} strokeOpacity={0.7} {...line} />
      <g {...s("thumb-crease")} transform={t.crease}><path d="M-4 8q5 6 1 13M7 7q5 6 1 12" stroke={skin.shade} strokeWidth={2.4} strokeOpacity={0.6} {...line} /></g>
      <g {...s("thumb-nail")} transform={t.nail}><path d="M-13-8C-6-13 12-12 14 0C12 12-6 13-13 8C-10 3-10-3-13-8Z" fill={skin.light} /></g>
      <path d="M46 512Q140 488 240 514V780H46Z" fill="#17405F" />
      <path d="M46 512Q140 488 240 514V528Q140 502 46 526Z" fill="#EAF0F6" />
      <path d="M78 548V780M112 541V780" stroke="#0F2F4C" strokeWidth={3} {...line} />
    </svg>
  )
}

const panel = "rounded-xl bg-white/[.06]"

// A phone version of the POS "Process" screen: order type, products, cart bar; then the order sheet and the check mark
// that hero-scene-fx.ts brings in. At rest it shows two items picked.
function Phone() {
  const { pos } = hero
  return (
    <div
      className="relative h-[404px] w-[232px] rounded-[36px] bg-navy-950 p-2 text-fog-100 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.28),0_30px_70px_-20px_rgba(3,10,19,.9)]"
      role="img"
      aria-label={pos.alt}
    >
      <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-[28px] bg-[#0A1A2B] p-2.5">
        <span className="mx-auto block h-1.5 w-14 shrink-0 rounded-full bg-white/[.14]" />
        <div className="flex h-6 shrink-0 items-center justify-between text-[.6875rem]">
          {pos.tabs.map((t, i) => (
            <span key={t} className={`rounded-full px-2 py-1 ${i === 0 ? "bg-white/[.12] text-white" : "text-fog-300"}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex h-8 shrink-0 gap-1 rounded-full bg-white/[.06] p-1 text-fog-300">
          {[Store, ShoppingBag].map((Icon, i) => (
            <span key={i} className="grid w-12 place-items-center"><Icon className="size-3.5" /></span>
          ))}
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-copper-400 text-[.6875rem] font-semibold text-navy-900">
            <Truck className="size-3.5" />
            {pos.type}
          </span>
        </div>
        {/* The two ordered items sit in the bottom row, where a thumb can reach */}
        <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2">
          {pos.items.map((it, i) => (
            <div key={it.name} {...s(i < 2 ? "tile" : "tile-idle")} className={`relative flex flex-col justify-end overflow-hidden p-1.5 text-[.6875rem] leading-[1.4] ${panel} ${i < 2 ? "order-last" : ""}`}>
              <Good i={i} className="absolute left-2 top-2 h-9 w-11" />
              <b className="font-semibold">{it.name}</b>
              <i className="not-italic text-fog-300">
                {it.price}
                {it.low && (
                  <>
                    {" · "}
                    <span className="whitespace-nowrap font-semibold text-copper-400">Low stock</span>
                  </>
                )}
              </i>
              {i < 2 && (
                <span {...s("picked")} className="absolute inset-0 rounded-xl bg-copper-400/[.12] ring-2 ring-inset ring-copper-400">
                  <svg viewBox="0 0 20 20" className="absolute right-1.5 top-1.5 size-5">
                    <circle cx={10} cy={10} r={10} fill="#DF9770" />
                    <path d="M5.5 10.5l3 3 6-7" stroke="#0B1E31" strokeWidth={2.4} {...line} />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
        <div {...s("cart")} className="flex h-[42px] shrink-0 items-center justify-between rounded-xl bg-copper-400 px-3.5 text-[.8125rem] font-semibold text-navy-900">
          <span>{pos.cart.label}</span>
          <span>{pos.cart.total}</span>
        </div>

        <span {...s("scrim")} className="invisible absolute inset-0 bg-navy-950/60" />
        <div {...s("sheet")} className="invisible absolute inset-x-0 bottom-0 flex flex-col gap-2 rounded-t-[22px] bg-navy-800 p-2.5 text-[.75rem] shadow-[0_-12px_30px_rgba(3,10,19,.5)]">
          <span className="mx-auto mb-0.5 block h-1 w-9 rounded-full bg-white/20" />
          {pos.items.slice(0, 2).map((it, i) => (
            <div key={it.name} className={`flex items-center gap-2 p-2 ${panel}`}>
              <Good i={i} className="h-7 w-[34px]" />
              <b className="flex-1 font-semibold">{it.name}</b>
              <span className="text-fog-300">{it.price}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-2 py-1 text-fog-300">
            <Truck className="size-3.5" />
            {pos.type}
            <b className="ml-auto text-[.9375rem] font-semibold text-white">{pos.cart.total}</b>
          </div>
          <div {...s("confirm")} className="grid h-[44px] place-items-center rounded-xl bg-copper-400 text-[.8125rem] font-semibold text-navy-900">
            {pos.confirm}
          </div>
        </div>
        <div {...s("done")} className="invisible absolute inset-0 grid place-items-center bg-navy-800">
          <svg viewBox="-108 -194 216 388" className="h-full w-full" aria-hidden="true">
            <g fill="#DF9770" fillOpacity={0.4}><Mark r={104} gap={13} dot={5.6} name="burst" /></g>
            <circle {...s("seal-ring")} r={40} fill="#DF9770" />
            <path {...s("check")} pathLength={1} strokeDasharray="1 2" d="M-17 2l12 12 22-27" stroke="#0B1E31" strokeWidth={7} {...line} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function HeroScene() {
  return (
    <div data-fx="scene" className="relative max-lg:pb-16 lg:-mt-10 lg:mb-6">
      <div {...s("stage")} className="animate-rise [animation-delay:350ms] max-lg:-mx-3 lg:-mr-[11%] lg:ml-[2%]">
        <Scene />
      </div>
      {/* In front of the shop, cropped by the section's bottom edge, which it rises from. Without motion it rests at the side. */}
      <div className="pointer-events-none absolute left-[40%] top-0 -ml-[116px] origin-top scale-[.86] sm:top-[20%] sm:scale-100 lg:left-[44%] lg:top-[16%] lg:scale-[.8] xl:top-[20%] xl:scale-100 motion-reduce:lg:left-0 motion-reduce:lg:ml-0">
        <div {...s("hand")} className={LATER}>
          <div data-fx="phone" className="relative w-[232px]">
            <span className="absolute -inset-x-64 -inset-y-32 bg-[radial-gradient(closest-side,rgba(3,10,19,.72),transparent)]" />
            <HandBack />
            <Phone />
            <HandFront />
          </div>
        </div>
      </div>
    </div>
  )
}
