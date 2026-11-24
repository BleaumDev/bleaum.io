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

// Where an order hangs when the tablet leaves (behind its check mark, the tablet's center), and the counter screen it flies to.
export const TOKEN = [330, 396] as const
export const TILL = P(111, 117, 74)

// Where the two ordered items stand on the shelves (x, y, z).
export const STOCK = { vial: [78, 10, 58], tub: [108, 10, 22] } as const

// The paper bag an order is packed in: where it stands, how big it is.
export const BAG = { x: 124, y: 150, w: 36, d: 24, neck: 28, h: 46 }

// Its sides: back, left, front, front above the neck, right. `open`: 1 standing open, 0 pinched shut along the top.
export function bag(open: number) {
  const { x, y, w, d, neck, h } = BAG
  const [X, Y, half] = [x + w, y + d, (d / 2) * (1 - open)]
  const [b, f] = [y + half, Y - half]
  return [
    pts([x, y, 0], [X, y, 0], [X, y, neck], [X, b, h], [x, b, h], [x, y, neck]),
    pts([x, y, 0], [x, Y, 0], [x, Y, neck], [x, f, h], [x, b, h], [x, y, neck]),
    pts([x, Y, 0], [X, Y, 0], [X, Y, neck], [x, Y, neck]),
    pts([x, Y, neck], [X, Y, neck], [X, f, h], [x, f, h]),
    pts([X, y, 0], [X, Y, 0], [X, Y, neck], [X, f, h], [X, b, h], [X, y, neck]),
  ]
}

// The van's rear corner, and its two rear doors (far, near). `open`: 0 shut, 1 swung out.
export const VAN = { x: 238, y: 74, d: 46 }
export function doors(open: number) {
  const { x, y, d } = VAN
  const [s, c] = [Math.sin(open * 1.9) * 22, Math.cos(open * 1.9) * 22]
  return [[y, c], [y + d, -c]].map(([hinge, run]) => pts([x, hinge, 11], [x - s, hinge + run, 11], [x - s, hinge + run, 60], [x, hinge, 60]))
}
