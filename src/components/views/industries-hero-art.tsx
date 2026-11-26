import type { ComponentType } from "react"
import * as icons from "@/components/icons/product-icons"
import { Box, Mark, Parcel } from "./hero-animation/hero-scene"
import { P, floorM, leftM, pts, rightM } from "./hero-animation/hero-iso"
import { Road } from "./integrations-hero-art"

// Industries hero art: "one platform, many verticals". A round platform with the Bleaum mark lit in the middle and six
// kinds of business around it. Copper packets run between the mark and every store, and round the ring that joins them.
// Each store flies a tile with its animated industry icon (the same icons as the lists below). Wordless, so it adds no
// copy. Deliberately not the open box: that belongs to Home and Integrations.
// Scene units (hero-iso.ts): x runs right-down, y left-down, z up; the platform is centred on x 0, y 0.
const X0 = -75
const Y0 = -105
const FW = 810
const FH = 645
const TILE = 84
const PLATFORM = 318 // radius
const RING = 250 // where the stores stand
const HUB = 56
const SIZE = 70 // store footprint

type V = [number, number, number]
type Faces = readonly [string, string, string] // roof, the face looking down-left, the face looking down-right
type Store = {
  at: number // clockwise on screen: 0 is right, 90 the front
  h: number
  front: "l" | "r" // which face is the shop front: l looks down-left, r down-right
  body: Faces
  stripes?: readonly [string, string] // the awning; a warehouse has roll-up doors instead
  Icon: ComponentType<{ className?: string; delay?: number }>
}

const white: Faces = ["#FFFFFF", "#EAF0F6", "#B9C7D6"]
const blue: Faces = ["#3A709F", "#2C6391", "#1C4B70"]
const copper: Faces = ["#F2B48F", "#E9B391", "#C47D56"]
const grey: Faces = ["#D5DFE9", "#B9C7D6", "#8FA3B8"]
// Back to front, so nearer stores draw over farther ones.
const STORES: Store[] = [
  { at: 240, h: 66, front: "r", body: white, stripes: ["#DF9770", "#FFFFFF"], Icon: icons.PharmacyIcon },
  { at: 300, h: 66, front: "l", body: copper, stripes: ["#1C4B70", "#FFFFFF"], Icon: icons.ElectronicsIcon },
  { at: 180, h: 58, front: "r", body: blue, stripes: ["#DF9770", "#F6F8FB"], Icon: icons.ApparelIcon },
  { at: 0, h: 58, front: "l", body: white, stripes: ["#1C4B70", "#FFFFFF"], Icon: icons.LiquorIcon },
  { at: 120, h: 56, front: "r", body: white, stripes: ["#DF9770", "#FFFFFF"], Icon: icons.ConvenienceIcon },
  { at: 60, h: 52, front: "l", body: grey, Icon: icons.WholesaleIcon },
]

// The floor point at screen angle `at` and radius r: a circle on the floor is an ellipse on screen, turned 45 degrees.
const polar = (at: number, r: number) => {
  const a = ((at - 45) * Math.PI) / 180
  return [+(Math.cos(a) * r).toFixed(1), +(Math.sin(a) * r).toFixed(1)] as const
}
// Screen half-axes of a floor circle.
const oval = (r: number) => [+(r * 1.2247).toFixed(1), +(r * 0.7071).toFixed(1)] as const
const [CX, CY] = P(0, 0)

const glass = "#0B2740"
const warm = "#FFE2C6"

// A lit shop window on a face, in that face's flat coordinates (local y points down, so z = -y).
function Window({ u, w, z, h, goods = true }: { u: number; w: number; z: number; h: number; goods?: boolean }) {
  const items = goods ? Array.from({ length: Math.floor((w - 6) / 7) }, (_, i) => i) : []
  return (
    <>
      <rect x={u} y={-z - h} width={w} height={h} rx={1.5} fill={glass} />
      <rect x={u} y={-z - h} width={w} height={3} fill={warm} fillOpacity={0.55} />
      {items.map((i) => {
        const t = 5 + ((i * 3) % 4) * 1.5
        return <rect key={i} x={u + 4 + i * 7} y={-z - t - 1.5} width={4} height={t} rx={1} fill={["#DF9770", "#EAF0F6", "#F0AE63"][i % 3]} />
      })}
      <path d={`M${u + 3} ${-z}L${u + w * 0.45} ${-z - h}h6L${u + 9} ${-z}z`} fill="#fff" fillOpacity={0.12} />
    </>
  )
}

type Footprint = Pick<Store, "h" | "front" | "body" | "stripes"> & { x: number; y: number; w: number; d: number }
function StoreArt({ x, y, w, d, h, front, body, stripes }: Footprint) {
  const [X, Y] = [x + w, y + d]
  const [len, sideLen] = front === "l" ? [w, d] : [d, w]
  // A point on the shop front: u along it from its left end, z up, o out toward us.
  const F = (u: number, z: number, o = 0): V => (front === "l" ? [x + u, Y + o, z] : [X + o, Y - u, z])
  // Flat art on the front, `o` out from it, at height z; and on the other face we see.
  const onFront = (o: number, z: number) => (front === "l" ? rightM(x, Y + o, z) : leftM(X + o, Y, z))
  const onSide = front === "l" ? leftM(X, Y, 0) : rightM(x, Y, 0)
  const [cx, cy] = P(x + w / 2, y + d / 2)
  const r = (w + d) * 0.7
  const za = h - 11 // where the awning meets the wall
  const n = 8
  const sw = (len - 4) / n
  return (
    <g>
      <ellipse cx={cx} cy={cy + 4} rx={r * 0.866} ry={r * 0.5} fill="url(#ind-shadow)" />
      <Box x={x} y={y} w={w} d={d} h={h} f={body} />
      {/* Flat roof with a parapet, and a unit off to the side (the tether rises from the middle) */}
      <polygon points={pts([x + 5, y + 5, h], [X - 5, y + 5, h], [X - 5, Y - 5, h], [x + 5, Y - 5, h])} fill="#071321" fillOpacity={0.1} />
      <Box x={X - 22} y={y + 7} z={h} w={14} d={11} h={7} f={["#EAF0F6", "#B9C7D6", "#8FA3B8"]} />

      <g transform={onSide}>
        <Window u={sideLen / 2 - 12} w={24} z={16} h={15} goods={false} />
      </g>
      <g transform={onFront(0, 0)}>
        <rect x={0} y={-h} width={len} height={9} fill="#DF9770" />
        <rect x={0} y={-h + 9} width={len} height={1.5} fill="#071321" fillOpacity={0.2} />
        {stripes ? (
          <>
            <Window u={5} w={len / 2 - 16} z={6} h={h - 32} />
            <Window u={len / 2 + 11} w={len / 2 - 16} z={6} h={h - 32} />
            {/* Door, lit from inside */}
            <rect x={len / 2 - 7} y={-(h - 22)} width={14} height={h - 22} rx={1.5} fill={glass} />
            <rect x={len / 2 - 4.5} y={-(h - 24.5)} width={9} height={h - 27} rx={1} fill={warm} fillOpacity={0.3} />
            <circle cx={len / 2 + 4.2} cy={-(h - 22) / 2} r={1.2} fill="#DF9770" />
          </>
        ) : (
          // Two roll-up doors: one down, one up on a lit bay
          [0, 1].map((k) => {
            const [u, dw, dh] = [8 + k * (len / 2 - 4), len / 2 - 12, h - 18]
            return k ? (
              <g key={k}>
                <rect x={u} y={-dh} width={dw} height={dh} fill={glass} />
                <rect x={u} y={-dh} width={dw} height={dh} fill={warm} fillOpacity={0.22} />
                <rect x={u} y={-dh} width={dw} height={6} fill="#53687F" />
              </g>
            ) : (
              <g key={k}>
                <rect x={u} y={-dh} width={dw} height={dh} fill="#53687F" />
                {Array.from({ length: Math.floor(dh / 4.5) }, (_, j) => (
                  <path key={j} d={`M${u} ${-dh + 4.5 * (j + 1)}h${dw}`} stroke="#3B5068" strokeWidth={1.2} />
                ))}
              </g>
            )
          })
        )}
      </g>

      {stripes && (
        <>
          {/* Striped awning, sloping out over the windows, with a scalloped edge */}
          {Array.from({ length: n }, (_, i) => (
            <polygon key={i} points={pts(F(2 + i * sw, za), F(2 + (i + 1) * sw, za), F(2 + (i + 1) * sw, za - 7, 10), F(2 + i * sw, za - 7, 10))} fill={stripes[i % 2]} />
          ))}
          <g transform={onFront(10, za - 7)}>
            {Array.from({ length: n }, (_, i) => (
              <path key={i} d={`M${2 + i * sw} -.5a${sw / 2} ${sw / 2} 0 0 0 ${sw} 0z`} fill={stripes[i % 2]} />
            ))}
          </g>
        </>
      )}
      {!stripes && (front === "l" ? <Parcel x={x + 12} y={Y + 6} w={18} h={14} /> : <Parcel x={X + 6} y={Y - 30} w={18} h={14} />)}
    </g>
  )
}

// The platform: a round slab with the mark printed across it as a halftone.
function Platform() {
  const [rx, ry] = oval(PLATFORM)
  const t = 24
  return (
    <g>
      <ellipse cx={CX} cy={CY + t + 12} rx={rx * 1.1} ry={ry * 1.08} fill="url(#ind-shadow)" />
      <path d={`M${CX - rx} ${CY}v${t}a${rx} ${ry} 0 0 0 ${2 * rx} 0v${-t}z`} fill="url(#ind-side)" />
      <ellipse cx={CX} cy={CY} rx={rx} ry={ry} fill="url(#ind-top)" stroke="#F0C3A4" strokeWidth={3} />
      <g transform={floorM(0, 0)} fill="#F2B48F" fillOpacity={0.2}>
        <Mark r={PLATFORM - 24} gap={23} dot={5} />
      </g>
    </g>
  )
}

// The ring road that joins the stores, with packets going round it.
function Ring() {
  const [rx, ry] = oval(RING)
  const d = `M${CX - rx} ${CY}a${rx} ${ry} 0 1 1 ${2 * rx} 0a${rx} ${ry} 0 1 1 ${-2 * rx} 0`
  return (
    <>
      <path d={d} stroke="#DF9770" strokeWidth={4.5} strokeLinecap="round" strokeDasharray="0 16" strokeOpacity={0.6} />
      {[0, 1].map((i) => (
        <path key={i} d={d} pathLength={100} stroke="#FFE2C6" strokeWidth={9} strokeLinecap="round" strokeDasharray="0 100" className="animate-flow motion-reduce:hidden [animation-duration:9s]" style={{ animationDelay: `${-i * 4.5}s` }} />
      ))}
    </>
  )
}

// The middle: a plinth with the Bleaum mark floating over it in its own light.
function Hub() {
  const [rx, ry] = oval(HUB)
  const h = 22
  return (
    <g>
      {[0, 1].map((i) => (
        <ellipse key={i} cx={CX} cy={CY} rx={rx} ry={ry} stroke="#F2B48F" strokeWidth={2.5} className="origin-center animate-halo [transform-box:fill-box] motion-reduce:hidden" style={{ animationDelay: `${-i * 1.6}s` }} />
      ))}
      <path d={`M${CX - rx} ${CY - h}v${h}a${rx} ${ry} 0 0 0 ${2 * rx} 0v${-h}z`} fill="url(#ind-side)" />
      <ellipse cx={CX} cy={CY - h} rx={rx} ry={ry} fill="#0B1E31" stroke="#FFE2C6" strokeWidth={2.5} />
      <ellipse cx={CX} cy={CY - h} rx={rx * 0.66} ry={ry * 0.66} fill="url(#ind-glow)" stroke="#DF9770" strokeWidth={2} />
      <path d={`M${CX - rx * 0.72} ${CY - h}L${CX - 84} ${CY - 128}H${CX + 84}L${CX + rx * 0.72} ${CY - h}a${rx * 0.72} ${ry * 0.72} 0 0 1 ${-rx * 1.44} 0z`} fill="url(#ind-beam)" />
      <circle cx={CX} cy={CY - 108} r={104} fill="url(#ind-glow)" />
      <g className="animate-float motion-reduce:animate-none">
        <g transform={`translate(${CX} ${CY - 108})`} fill="#FFD9BD">
          <Mark r={58} gap={11.6} dot={5.6} />
        </g>
      </g>
    </g>
  )
}

export function IndustriesHeroArt() {
  const pct = (v: number, of: number) => `${(v / of) * 100}%`
  const placed = STORES.map((s) => {
    const [mx, my] = polar(s.at, RING)
    const [cx, roof] = P(mx, my, s.h)
    return { ...s, x: mx - SIZE / 2, y: my - SIZE / 2, w: SIZE, d: SIZE, cx, roof, tileY: roof - SIZE / 2 - 20 - TILE }
  })
  const back = placed.filter((s) => s.at > 180)
  const near = placed.filter((s) => s.at <= 180)
  const draw = (s: (typeof placed)[number]) => (
    <g key={s.at}>
      <StoreArt {...s} />
      {/* Tied to its tile by a dotted line */}
      <path d={`M${s.cx} ${s.roof}V${s.tileY + TILE + 4}`} stroke="#DF9770" strokeWidth={2.5} strokeLinecap="round" strokeDasharray="0 6" />
      <circle cx={s.cx} cy={s.roof} r={4.5} fill="#DF9770" stroke="#fff" strokeWidth={1.5} />
    </g>
  )
  return (
    <div className="relative aspect-[810/645] w-full" aria-hidden="true">
      <svg viewBox={`${X0} ${Y0} ${FW} ${FH}`} className="absolute inset-0 size-full overflow-visible" fill="none">
        <defs>
          <radialGradient id="ind-shadow"><stop stopColor="#030A13" stopOpacity=".7" /><stop offset="1" stopColor="#030A13" stopOpacity="0" /></radialGradient>
          <radialGradient id="ind-glow"><stop stopColor="#F2B48F" stopOpacity=".5" /><stop offset="1" stopColor="#DF9770" stopOpacity="0" /></radialGradient>
          <linearGradient id="ind-top" x2="0" y2="1"><stop stopColor="#143C5D" /><stop offset="1" stopColor="#1C4B70" /></linearGradient>
          <linearGradient id="ind-side" x2="1" y2="0"><stop stopColor="#E6AC88" /><stop offset="1" stopColor="#9C5A37" /></linearGradient>
          <linearGradient id="ind-beam" x2="0" y2="1"><stop stopColor="#F2B48F" stopOpacity="0" /><stop offset="1" stopColor="#F2B48F" stopOpacity=".35" /></linearGradient>
        </defs>
        <Platform />
        <Ring />
        {/* Spokes first, so each store hides where its road ends. Every other one runs inward. */}
        {placed.map((s, i) => (
          <Road key={s.at} from={P(...polar(s.at, HUB + 12))} to={P(...polar(s.at, RING))} inbound={i % 2 === 1} i={i} />
        ))}
        {back.map(draw)}
        <Hub />
        {near.map(draw)}
      </svg>
      {/* Icon tiles: html over the art, so the icons assemble themselves as they do everywhere else */}
      {placed.map(({ Icon, cx, tileY, at }, i) => (
        <div key={at} className="absolute" style={{ left: pct(cx - TILE / 2 - X0, FW), top: pct(tileY - Y0, FH), width: pct(TILE, FW) }}>
          <div
            className="grid aspect-square place-items-center rounded-[21%] bg-white shadow-[0_14px_16px_rgba(3,10,19,.6)] animate-float motion-reduce:animate-none"
            style={{ animationDelay: `${-i * 0.7}s` }}
          >
            <Icon className="h-auto w-[62%] text-navy-900" delay={0.6 + i * 0.12} />
          </div>
        </div>
      ))}
    </div>
  )
}
