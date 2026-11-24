// Geometry shared by the Home hero art: hero-scene.tsx draws the resting state, hero-scene-fx.ts moves the same parts.
// x runs right-down, y runs left-down, z runs up. Numbers are scene units in the svg viewBox.

type V = [number, number, number]

const OX = 330
const OY = 262
export const W = 200 // floor side
export const H = 150 // wall height
const FLAP = 62

export const P = (x: number, y: number, z = 0) => [OX + (x - y) * 0.866, OY + (x + y) * 0.5 - z] as const
export const pts = (...v: V[]) => v.map(([x, y, z]) => P(x, y, z).map((n) => n.toFixed(1)).join(",")).join(" ")

// Matrices that lay flat art on a plane. Local x/y are scene units; on walls local y points down, so z = -y.
const at = (m: string, [x, y]: readonly [number, number]) => `matrix(${m},${x.toFixed(1)},${y.toFixed(1)})`
export const floorM = (x = 0, y = 0, z = 0) => at(".866,.5,-.866,.5", P(x, y, z))
export const rightM = (x = 0, y = 0, z = 0) => at(".866,.5,0,1", P(x, y, z)) // a wall you face looking right-up; local x = x
export const leftM = (x = 0, y = 0, z = 0) => at(".866,-.5,0,1", P(x, y, z)) // the other one; local x = -y

// The six box panels that move, drawn in this order. [inside, outside] fills.
export const PANELS = {
  flapBL: ["#DCA07C", "#B9714A"],
  flapBR: ["#EAB592", "#C47D56"],
  flapL: ["#E6AC88", "#C47D56"],
  flapR: ["#DDA07B", "#B06A44"],
  wallL: ["#C9855F", "#C47D56"],
  wallR: ["#BE7851", "#A9643F"],
} as const
export type Panel = keyof typeof PANELS

// `wall`: how far the two front walls have fallen (0 upright, 90 flat). `flap`: 0 closed, 1 open.
export function fold(wall: number, flap: number) {
  const r = Math.PI / 180
  const [s, c] = [Math.sin(wall * r) * H, Math.cos(wall * r) * H]
  // Flap angles from vertical, outward positive: -90 lies across the closed top.
  const back = (-90 + flap * 138) * r
  const front = (-90 + flap * 104 + wall * 0.62) * r
  const [bs, bc] = [Math.sin(back) * FLAP, Math.cos(back) * FLAP]
  const [fs, fc] = [Math.sin(front) * FLAP * 0.8, Math.cos(front) * FLAP * 0.8]

  const quad = (a: V, b: V, d: V): V[] => [a, b, [b[0] + d[0], b[1] + d[1], b[2] + d[2]], [a[0] + d[0], a[1] + d[1], a[2] + d[2]]]
  const quads: Record<Panel, V[]> = {
    flapBL: quad([0, 0, H], [0, W, H], [-bs, 0, bc]),
    flapBR: quad([W, 0, H], [0, 0, H], [0, -bs, bc]),
    flapL: quad([0, W + s, c], [W, W + s, c], [0, fs, fc]),
    flapR: quad([W + s, W, c], [W + s, 0, c], [fs, 0, fc]),
    wallL: quad([0, W, 0], [W, W, 0], [0, s, c]),
    wallR: quad([W, W, 0], [W, 0, 0], [s, 0, c]),
  }
  return (Object.keys(PANELS) as Panel[]).map((id) => {
    const q = quads[id]
    const [a, b, d] = [P(...q[0]), P(...q[1]), P(...q[3])]
    // Screen winding tells which face we see. Every quad above winds the same way when its outside shows.
    const outside = (b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]) < 0
    return { id, points: pts(...q), fill: PANELS[id][outside ? 1 : 0] }
  })
}

// Where an order hangs when the phone leaves (behind its check mark), and the counter screen it flies to.
export const TOKEN = [258, 314] as const
export const TILL = P(111, 117, 74)

// The carton an order is packed in: where it stands, how big it is.
export const BOX = { x: 128, y: 148, w: 36, h: 27 }

// Its four top flaps, back two first. `open`: 0 shut, 1 folded out.
export function flaps(open: number) {
  const { x, y, w, h } = BOX
  const [i, u] = [(Math.cos(open * 2.3) * w) / 2, (Math.sin(open * 2.3) * w) / 2 + h]
  const [X, Y] = [x + w, y + w]
  return [
    pts([x, y, h], [x, Y, h], [x + i, Y, u], [x + i, y, u]),
    pts([x, y, h], [X, y, h], [X, y + i, u], [x, y + i, u]),
    pts([X, y, h], [X, Y, h], [X - i, Y, u], [X - i, y, u]),
    pts([x, Y, h], [X, Y, h], [X, Y - i, u], [x, Y - i, u]),
  ]
}

// The van's rear corner, and its two rear doors (far, near). `open`: 0 shut, 1 swung out.
export const VAN = { x: 238, y: 74, d: 46 }
export function doors(open: number) {
  const { x, y, d } = VAN
  const [s, c] = [Math.sin(open * 1.9) * 22, Math.cos(open * 1.9) * 22]
  return [[y, c], [y + d, -c]].map(([hinge, run]) => pts([x, hinge, 11], [x - s, hinge + run, 11], [x - s, hinge + run, 60], [x, hinge, 60]))
}

// The thumb, in phone pixels: a tapered limb from the wrist to a tip at (x, y). It bows outward when the tip is close.
const [WX, WY, REACH] = [188, 522, 250]
export const THUMB = { x: 234, y: 318 }
export function thumb(x: number, y: number) {
  const [dx, dy] = [x - WX, y - WY]
  const d = Math.hypot(dx, dy)
  const bow = Math.sqrt(Math.max(0, REACH * REACH - d * d)) * 0.85
  const [cx, cy] = [(WX + x) / 2 - (dy / d) * bow, (WY + y) / 2 + (dx / d) * bow]
  const n = 22
  const spine = Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n
    const [px, py] = [(1 - t) ** 2 * WX + 2 * (1 - t) * t * cx + t * t * x, (1 - t) ** 2 * WY + 2 * (1 - t) * t * cy + t * t * y]
    const a = Math.atan2((1 - t) * (cy - WY) + t * (y - cy), (1 - t) * (cx - WX) + t * (x - cx))
    const r = 20 + 15 * Math.sin(Math.PI * (0.05 + 0.82 * t)) - 5 * t
    return { px, py, a, r }
  })
  const side = (k: number) => spine.map(({ px, py, a, r }) => `${(px - Math.sin(a) * r * k).toFixed(1)} ${(py + Math.cos(a) * r * k).toFixed(1)}`)
  const [inner, outer] = [side(-1), side(1).reverse()]
  const at = (i: number) => `translate(${spine[i].px.toFixed(1)} ${spine[i].py.toFixed(1)}) rotate(${((spine[i].a * 180) / Math.PI).toFixed(1)})`
  return {
    body: `M${inner.join("L")}A${spine[n].r} ${spine[n].r} 0 0 1 ${outer.join("L")}Z`,
    edge: `M${inner.slice(0, 17).join("L")}`,
    nail: at(n),
    crease: at(14),
  }
}
