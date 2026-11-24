// Isometric geometry shared by the Home hero art (hero-scene.tsx draws it, hero-scene-fx.ts folds the box).
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
