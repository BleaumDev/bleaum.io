import { Scene } from "./hero-animation/hero-scene"

// Integrations hero art (consepts/H-box-city): the open Bleaum box, with dotted roads out to cartons that stand for
// partner systems, each carrying the partner's logo. A copper packet runs every road, in or out, for "Total Sync".
// Wordless on purpose: logos only, so it adds no copy. Units are the box scene's (its svg is 660×570), widened to fit.
const X0 = -135
const Y0 = 30
const FW = 995
const FH = 650
const GAP = 18 // road dot spacing; the same as the van's road in the scene, so the dots line up

export type Pt = readonly [number, number]
const UR: Pt = [0.866, -0.5]
const DR: Pt = [0.866, 0.5]
const DL: Pt = [-0.866, 0.5]
const go = ([x, y]: Pt, [dx, dy]: Pt, n: number): Pt => [x + dx * n, y + dy * n]
const p = (...v: Pt[]) => v.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
const mid = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

// Live integrations only (QuickBooks is still Coming Soon). `inbound`: the packet runs toward the box.
const ROADS = [
  { from: [680, 440] as Pt, dir: UR, dots: 7, logo: "/integrations/googleanalytics.png", inbound: true },
  { from: [600, 518] as Pt, dir: DR, dots: 11, logo: "/integrations/aeropay.png", inbound: false },
  { from: [60, 518] as Pt, dir: DL, dots: 8, logo: "/integrations/idscan.png", inbound: true },
].map((r) => ({ ...r, to: go(r.from, r.dir, r.dots * GAP) }))

// Closed carton (hero palette) whose footprint centre sits on (x, y).
const SIZE = 66
const TALL = 60
function Carton({ x, y }: { x: number; y: number }) {
  const [dx, dy] = [SIZE * 0.866, SIZE / 2]
  const F: Pt = [x, y + dy]
  const L: Pt = [x - dx, y]
  const R: Pt = [x + dx, y]
  const B: Pt = [x, y - dy]
  const up = ([a, b]: Pt): Pt => [a, b - TALL]
  const w = 0.13
  const [a1, a2] = [mid(up(L), up(B), 0.5 - w), mid(up(L), up(B), 0.5 + w)]
  const [b1, b2] = [mid(up(F), up(R), 0.5 - w), mid(up(F), up(R), 0.5 + w)]
  const [c1, c2] = [mid(F, R, 0.5 - w), mid(F, R, 0.5 + w)]
  return (
    <g>
      <ellipse cx={x} cy={y + 4} rx={dx * 1.5} ry={dy * 1.3} fill="url(#ih-shadow)" />
      <polygon points={p(F, L, up(L), up(F))} fill="#C47D56" />
      <polygon points={p(F, R, up(R), up(F))} fill="#A9643F" />
      <polygon points={p(up(F), up(L), up(B), up(R))} fill="#DDA07B" />
      <polygon points={p(a1, a2, b2, b1)} fill="#F3D3B6" opacity={0.85} />
      <polygon points={p(b1, b2, [c2[0], c2[1] - TALL * 0.6], [c1[0], c1[1] - TALL * 0.6])} fill="#E7BC98" opacity={0.8} />
    </g>
  )
}

// A dotted road with a copper packet riding it, away from the box (toward it when `inbound`). `i` staggers the packets.
export function Road({ from, to, inbound, i }: { from: Pt; to: Pt; inbound?: boolean; i: number }) {
  const d = `M${p(from)}L${p(to)}`
  return (
    <>
      <path d={d} stroke="#DF9770" strokeWidth={6} strokeLinecap="round" strokeDasharray={`0 ${GAP}`} strokeOpacity={0.9} />
      {/* Packet: a soft glow and a bright core, riding the road */}
      {[
        { w: 22, c: "#DF9770", o: 0.3 },
        { w: 10, c: "#FFE2C6", o: 1 },
      ].map((s) => (
        <path
          key={s.w}
          d={d}
          pathLength={100}
          stroke={s.c}
          strokeOpacity={s.o}
          strokeWidth={s.w}
          strokeLinecap="round"
          strokeDasharray="0 100"
          className={`animate-packet motion-reduce:hidden ${inbound ? "[animation-direction:reverse]" : ""}`}
          style={{ animationDelay: `${-i * 0.9}s` }}
        />
      ))}
    </>
  )
}

const TILE = 84
export function IntegrationsHeroArt() {
  return (
    <div className="relative aspect-[995/650] w-full" aria-hidden="true">
      <div className="absolute" style={{ left: `${(-X0 / FW) * 100}%`, top: `${(-Y0 / FH) * 100}%`, width: `${(660 / FW) * 100}%` }}>
        <Scene />
      </div>
      <svg viewBox={`${X0} ${Y0} ${FW} ${FH}`} className="absolute inset-0 size-full overflow-visible" fill="none">
        <defs>
          <radialGradient id="ih-shadow"><stop stopColor="#030A13" stopOpacity=".7" /><stop offset="1" stopColor="#030A13" stopOpacity="0" /></radialGradient>
        </defs>
        {ROADS.map((r, i) => {
          const top = r.to[1] - TALL // carton lid centre
          const tileY = top - SIZE / 2 - 20 - TILE
          return (
            <g key={r.logo}>
              <Road from={r.from} to={r.to} inbound={r.inbound} i={i} />
              <Carton x={r.to[0]} y={r.to[1]} />
              {/* Logo tile floating over the carton, tied to its lid by a dotted line */}
              <path d={`M${r.to[0]} ${top}V${tileY + TILE + 4}`} stroke="#DF9770" strokeWidth={2.5} strokeLinecap="round" strokeDasharray="0 6" />
              <circle cx={r.to[0]} cy={top} r={4.5} fill="#DF9770" stroke="#fff" strokeWidth={1.5} />
              <g className="animate-float [filter:drop-shadow(0_14px_16px_rgba(3,10,19,.6))]" style={{ animationDelay: `${-i * 1.3}s` }}>
                <rect x={r.to[0] - TILE / 2} y={tileY} width={TILE} height={TILE} rx={18} fill="#fff" />
                <image href={r.logo} x={r.to[0] - TILE / 2 + 12} y={tileY + 12} width={TILE - 24} height={TILE - 24} preserveAspectRatio="xMidYMid meet" />
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
