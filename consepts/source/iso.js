// Helpers for the isometric concept mockups (same look as the live hero scene).
const NS = "http://www.w3.org/2000/svg"
const layer = (z = 0) => {
  const s = document.createElementNS(NS, "svg")
  s.setAttribute("viewBox", "0 0 1440 900")
  s.style.cssText = `position:absolute;left:0;top:0;width:1440px;height:900px;z-index:${z};overflow:visible;pointer-events:none`
  document.body.appendChild(s)
  return s
}
const add = (s, html) => s.insertAdjacentHTML("beforeend", html)

// Copper halftone field like the hero's bloom: dot size falls off with distance from (cx, cy).
function bloom(s, cx, cy, reach, { gap = 37, max = 11, min = 1.2, op = 0.9, x0 = 0, y0 = 116, x1 = 1440, y1 = 900 } = {}) {
  let h = ""
  for (let y = y0 + gap / 2; y < y1; y += gap)
    for (let x = x0 + gap / 2; x < x1; x += gap) {
      const d = Math.hypot(x - cx, (y - cy) * 1.15) / reach
      const r = max * Math.max(0, 1 - d) ** 1.3
      if (r > min) h += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}"/>`
    }
  add(s, `<g fill="#DF9770" fill-opacity="${op}">${h}</g>`)
}

// Closed cardboard box (hero palette) standing with its front-bottom corner at (cx, cy).
function cube(s, cx, cy, size, h, { tape = true, shadow = true } = {}) {
  const dx = size * 0.866, dy = size * 0.5
  const F = [cx, cy], L = [cx - dx, cy - dy], R = [cx + dx, cy - dy], B = [cx, cy - 2 * dy]
  const up = ([x, y]) => [x, y - h]
  const p = (...v) => v.map((q) => q.join(",")).join(" ")
  const mid = (a, b, t = 0.5) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
  let g = ""
  if (shadow) g += `<ellipse cx="${cx}" cy="${cy - dy + 4}" rx="${dx * 1.5}" ry="${dy * 1.3}" fill="#030a13" opacity=".45" filter="url(#soft)"/>`
  g += `<polygon points="${p(F, L, up(L), up(F))}" fill="#C47D56"/>`
  g += `<polygon points="${p(F, R, up(R), up(F))}" fill="#A9643F"/>`
  g += `<polygon points="${p(up(F), up(L), up(B), up(R))}" fill="#DDA07B"/>`
  if (tape) {
    const w = 0.13
    const a1 = mid(up(L), up(B), 0.5 - w), a2 = mid(up(L), up(B), 0.5 + w), b1 = mid(up(F), up(R), 0.5 - w), b2 = mid(up(F), up(R), 0.5 + w)
    g += `<polygon points="${p(a1, a2, b2, b1)}" fill="#F3D3B6" opacity=".85"/>`
    const c1 = mid(F, R, 0.5 - w), c2 = mid(F, R, 0.5 + w)
    g += `<polygon points="${p(b1, b2, [c2[0], c2[1] - h * 0.6], [c1[0], c1[1] - h * 0.6])}" fill="#E7BC98" opacity=".8"/>`
  }
  add(s, g)
}

// Dotted copper road between points (like the van's road in the hero).
function road(s, pts, { gap = 13, r = 3, op = 0.9 } = {}) {
  let h = ""
  for (let i = 0; i < pts.length - 1; i++) {
    const [a, b] = [pts[i], pts[i + 1]], n = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / gap))
    for (let k = i ? 1 : 0; k <= n; k++) h += `<circle cx="${(a[0] + ((b[0] - a[0]) * k) / n).toFixed(1)}" cy="${(a[1] + ((b[1] - a[1]) * k) / n).toFixed(1)}" r="${r}"/>`
  }
  add(s, `<g fill="#DF9770" fill-opacity="${op}">${h}</g>`)
}

const DEFS = `<defs><filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter></defs>`

// Small UI card: icon, title, line, optional value.
const card = (x, y, icon, title, line, val = "", extra = "") =>
  `<div class="cl" style="left:${x}px;top:${y}px;${extra}"><span class="ic"><i data-i="${icon}"></i></span><div><b>${title}</b><small>${line}</small></div>${val ? `<em>${val}</em>` : ""}</div>`
