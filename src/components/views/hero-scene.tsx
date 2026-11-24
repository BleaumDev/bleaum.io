import type { ReactNode } from "react"
import { H, P, PANELS, W, floorM, fold, leftM, pts, rightM } from "./hero-iso"
import { hero } from "./home-content"

// Home hero illustration: "your business in a box", run "from one hand". A copper box unfolds into a lit shop, and a
// hand holds the POS. The scene itself is wordless; the only text is the approved POS copy (home-content hero.pos).
// Server-rendered in its finished, open state. hero-scene-fx.ts finds the data-s hooks and brings it to life.

const s = (name: string) => ({ "data-s": name })
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

// Delivery van facing right-down, parked on the fallen right wall. Origin: rear corner at (vx, vy).
const [vx, vy] = [238, 74]
const vs = vy + 46 // the side we see
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
const ORDER = curve([166, 392], [214, 178], P(112, 116, 96), 12)

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
          return <circle key={i} cx={x} cy={y} r={3 - i * 0.15} fillOpacity={1 - i * 0.07} />
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
        <Mug x={76} z={70} f={["#FFFFFF", "#D5DFE9"]} />
        <Candle x={100} y={10} z={70} h={13} />
        <Candle x={114} y={10} z={70} h={19} />
        <Candle x={128} y={10} z={70} h={10} />
        <g {...s("pop")}><Box x={142} y={5} z={70} w={26} d={12} h={5} f={["#8A4E2E", "#6E3B20", "#5A2F19"]} /><Box x={143} y={5} z={75} w={24} d={12} h={5} f={["#A4572C", "#8A4E2E", "#6E3B20"]} /></g>
        <g {...s("pop")}><Box x={34} y={5} z={24} w={22} d={12} h={5} f={["#A4572C", "#8A4E2E", "#6E3B20"]} /><Box x={35} y={5} z={29} w={20} d={12} h={5} f={["#8A4E2E", "#6E3B20", "#5A2F19"]} /></g>
        <g {...s("pop")}><Tote x={72} z={54} color="#EAF0F6" /></g>
        <g {...s("pop")}><g {...s("tote")}><Tote x={104} z={54} color="#DF9770" /></g></g>
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
            <rect x={84} y={-94} width={54} height={42} rx={5} fill="#071321" stroke="#A9B8C8" strokeWidth={2} />
            <path d="M90-87h18" stroke="#53687F" strokeWidth={3} {...line} />
            {[90, 112].map((x) => [-81, -71].map((y) => <rect key={`${x}${y}`} x={x} y={y} width={20} height={7} rx={2} fill="#1C4B70" />))}
            <rect {...s("pay")} x={90} y={-61} width={42} height={6} rx={3} fill="#DF9770" />
          </g>
          <g transform={rightM(0, 118, 0)} clipPath="url(#hs-slot)">
            <path {...s("receipt")} d="M144-56v-24l3 2 3-2 3 2 3-2v24z" fill="#FFFFFF" />
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
      <g {...s("parcel")}><Parcel x={206} y={88} w={20} h={18} /></g>
      <Van />

      {/* Order travelling from the hand to the counter */}
      <g fill="#FFE2C6">{ORDER.map(([x, y]) => <circle key={x} {...s("order")} cx={x} cy={y} r={4.4} opacity={0} />)}</g>

      {/* String lights */}
      <path d={`M${strA.join(" ")}Q${strM.join(" ")} ${strB.join(" ")}`} stroke="#0B1E31" strokeWidth={1.6} {...line} {...s("wire")} />
      {BULBS.map(([x, y]) => (
        <g key={x} {...s("bulb")}>
          <circle cx={x} cy={y + 6} r={11} fill="url(#hs-glow)" />
          <circle cx={x} cy={y + 6} r={4} fill="#FFE2C6" />
        </g>
      ))}

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
const handSvg = "pointer-events-none absolute -left-[50px] top-0 h-[720px] w-[350px] max-w-none"

// The hand, in pixels of the 232 x 376 phone it holds. The back goes under the phone, the front over it.
function HandBack() {
  return (
    <svg viewBox="-50 0 350 720" className={handSvg} aria-hidden="true">
      <path d="M4 250C-8 322 8 392 50 432C62 444 66 458 66 480V720H208V500C208 480 214 472 226 462C252 442 274 418 278 384L270 330L226 290Z" fill={skin.palm} />
      <path d="M40 420C84 448 132 440 168 412" stroke={skin.shade} strokeWidth={3} strokeOpacity={0.5} {...line} />
    </svg>
  )
}
function HandFront() {
  return (
    <svg viewBox="-50 0 350 720" className={handSvg} aria-hidden="true">
      {[[152, 38, 17], [191, 39, 19], [231, 37, 17], [269, 32, 12]].map(([y, h, w]) => {
        const r = h / 2
        return (
          <g key={y} transform={`rotate(-7 0 ${y + r})`}>
            <path d={`M0 ${y}C-17 ${y + 3} -17 ${y + h - 3} 0 ${y + h}H${w - r}A${r} ${r} 0 0 0 ${w - r} ${y}Z`} fill={skin.base} />
            <path d={`M-8 ${y + h - 4}Q-2 ${y + h} ${w - r + 2} ${y + h - 1}`} stroke={skin.shade} strokeWidth={3} strokeOpacity={0.6} {...line} />
            <path d={`M${w - 9} ${y + 8}q4 ${r - 8} 0 ${h - 18}`} stroke={skin.light} strokeWidth={3} {...line} />
          </g>
        )
      })}
      <g {...s("thumb")}>
        <path d="M196 520C198 474 240 436 232 374C229 346 221 322 208 304C194 287 192 266 205 255C219 244 239 252 251 269C275 302 291 340 285 384C280 420 254 442 228 462C214 473 208 490 208 520Z" fill={skin.base} />
        <path d="M196 520C198 474 240 436 232 374C229 346 221 322 208 304" stroke={skin.shade} strokeWidth={3} strokeOpacity={0.7} {...line} />
        <path d="M249 300q9 1 14-5M256 313q8 1 13-4" stroke={skin.shade} strokeWidth={2.4} strokeOpacity={0.6} {...line} />
        <path d="M205 266C212 257 226 260 233 270C228 279 217 284 209 284C203 280 201 272 205 266Z" fill={skin.light} />
      </g>
      <path d="M46 486Q137 462 228 486V720H46Z" fill="#17405F" />
      <path d="M46 486Q137 462 228 486V500Q137 476 46 500Z" fill="#EAF0F6" />
      <path d="M78 520V720M112 513V720" stroke="#0F2F4C" strokeWidth={3} {...line} />
      <circle {...s("tap")} cx={184} cy={264} r={16} fill="none" stroke="#FFE2C6" strokeWidth={3} opacity={0} />
    </svg>
  )
}

function Phone() {
  const { pos } = hero
  return (
    <div
      className="relative flex h-[376px] w-[232px] flex-col rounded-[34px] bg-navy-950 p-3 text-fog-100 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.28),0_30px_70px_-20px_rgba(3,10,19,.9)]"
      role="img"
      aria-label={pos.alt}
    >
      <span className="mx-auto mb-2.5 mt-0.5 block h-1.5 w-14 rounded-full bg-white/[.14]" />
      <div className="mb-2.5 flex justify-between text-[.6875rem]">
        {pos.tabs.map((t, i) => (
          <span key={t} className={`rounded-full px-2 py-1 ${i === 0 ? "bg-white/[.12] text-white" : "text-fog-300"}`}>
            {t}
          </span>
        ))}
      </div>
      <div data-fx="pos-items" className="grid flex-1 grid-cols-2 gap-2">
        {pos.items.map((it) => (
          <div
            key={it.name}
            className="relative flex flex-col justify-end gap-0.5 rounded-xl bg-white/[.06] p-2.5 text-[.75rem] leading-[1.4] before:absolute before:inset-x-2.5 before:top-2.5 before:h-[38px] before:bg-[radial-gradient(circle,rgba(223,151,112,.55)_1.4px,transparent_1.9px)] before:bg-[length:8px_8px] before:[mask-image:linear-gradient(#000,transparent)] before:[-webkit-mask-image:linear-gradient(#000,transparent)]"
          >
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
          </div>
        ))}
      </div>
      <div data-fx="pos-cart" className="mt-2.5 flex justify-between rounded-xl bg-copper-400 px-3.5 py-3 text-[.8125rem] font-semibold text-navy-900">
        <span>{pos.cart.label}</span>
        <span>{pos.cart.total}</span>
      </div>
    </div>
  )
}

export function HeroScene() {
  return (
    <div data-fx="scene" className="relative lg:-mt-10 lg:mb-6">
      <div {...s("stage")} className="animate-rise [animation-delay:350ms] max-lg:-mx-3 lg:-mr-[14%] lg:ml-[6%] xl:ml-[12%]">
        <Scene />
      </div>
      {/* In front of the box: below it on small screens, at its left on wide ones. The section crops the arm. */}
      <div
        {...s("hand")}
        className="animate-rise [animation-delay:550ms] max-lg:-mt-[12%] max-lg:mb-2 max-lg:flex max-lg:justify-center lg:absolute lg:-left-4 lg:top-[30%] lg:origin-top-left lg:scale-[.8] xl:left-0 xl:scale-100"
      >
        <div data-fx="phone" className="relative w-[232px]">
          <HandBack />
          <Phone />
          <HandFront />
        </div>
      </div>
    </div>
  )
}
