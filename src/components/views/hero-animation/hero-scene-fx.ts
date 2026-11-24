import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BAG, P, STOCK, TILL, TOKEN, bag, doors, fold } from "./hero-iso"
import { hero } from "../home-content"

// Screen offset for a move of `d` scene units along the scene's x axis (the way the van faces).
const along = (d: number) => ({ x: d * 0.866, y: d * 0.5 })

const AWAY = 900 // px below its place: past the section's bottom edge at every width

// Brings the Home hero art (hero-scene.tsx) to life: the box unfolds once, then one sale plays on repeat.
// Tablet rises -> two products tapped into the cart -> Complete Order -> tablet leaves -> order reaches the counter -> bag packed -> loaded -> van leaves -> restock -> van returns.
// Runs inside home-fx's reduced-motion gsap.matchMedia, which reverts every tween made here.
export function heroScene(root: HTMLElement, bloom: Element) {
  const q = <T extends Element = SVGElement>(name: string) => [...root.querySelectorAll<T>(`[data-s=${name}]`)]
  const svg = root.querySelector("svg")!
  const panels = [...root.querySelectorAll("[data-panel]")]

  // Only fold from closed if the art is still hidden by its CSS entrance delay; a late script must not snap an open box shut.
  const early = +getComputedStyle(q("stage")[0]).opacity < 0.05
  const intro = gsap.timeline()
  // The tablet is hidden by CSS on load, so moving it below the section and showing it in one step never flashes it.
  gsap.set(q("tablet"), { y: AWAY, opacity: 1, transformPerspective: 1500 })
  if (early) {
    const box = { wall: 0, flap: 0 }
    const draw = () =>
      fold(box.wall, box.flap).forEach((p, i) => {
        panels[i].setAttribute("points", p.points)
        panels[i].setAttribute("fill", p.fill)
        panels[i].setAttribute("stroke", p.fill)
      })
    draw()
    intro
      .set(q("lid"), { opacity: 1 }, 0)
      .set([q("print"), q("road")].flat(), { opacity: 0 }, 0)
      .set(q("pop"), { scale: 0, transformOrigin: "50% 100%" }, 0)
      .set(q("awning"), { scaleY: 0, transformOrigin: "50% 0%" }, 0)
      .set(q("van"), { ...along(360), opacity: 0 }, 0)
      .fromTo(svg, { rotation: -1.4, transformOrigin: "50% 80%" }, { rotation: 1.4, duration: 0.08, repeat: 6, yoyo: true, ease: "sine.inOut" }, 0.7)
      .to(svg, { rotation: 0, duration: 0.1 })
      .addLabel("open")
      .to(q("lid"), { opacity: 0, duration: 0.15 }, "open")
      .to(box, { flap: 1, duration: 0.8, ease: "back.out(1.5)", onUpdate: draw }, "open")
      .to(box, { wall: 90, duration: 1, ease: "bounce.out", onUpdate: draw }, "open+=0.35")
      .to(q("print"), { opacity: 1, duration: 0.3 }, "open+=1.2")
      .to(q("awning"), { scaleY: 1, duration: 0.6, ease: "back.out(1.6)" }, "open+=0.6")
      .to(q("pop"), { scale: 1, duration: 0.55, stagger: { amount: 1 }, ease: "back.out(1.9)" }, "open+=0.6")
      .to(q("road"), { opacity: 1, duration: 0.4 }, "open+=1.3")
      .to(q("van"), { opacity: 1, duration: 0.2 }, "open+=1.4")
      .to(q("van"), { x: 0, y: 0, duration: 1.3, ease: "power2.out" }, "open+=1.4")
  }

  // Light ripples out from the middle of the dot field behind the box.
  const dots = [...bloom.querySelectorAll("circle")]
  const num = (el: Element, a: string) => +el.getAttribute(a)!
  const base = dots.map((d) => num(d, "r"))
  const far = dots.map((d) => Math.hypot(num(d, "cx") - 380, num(d, "cy") - 380))
  const ripple = gsap.timeline()
  ripple.to(dots, {
    attr: { r: (i: number) => base[i] * 1.4 },
    duration: 0.4,
    ease: "sine.inOut",
    stagger: (i: number) => far[i] * 0.0032,
  })
  ripple.to(dots, { attr: { r: (i: number) => base[i] }, duration: 0.7, ease: "sine.inOut", stagger: (i: number) => far[i] * 0.0032 }, 0.4)

  const story = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: early ? intro.duration() + 0.3 : 1.5, defaults: { immediateRender: false } })

  const screen = q<HTMLElement>("screen")[0]
  // A spot on an element, in screen pixels. Offsets ignore transforms, so the tablet's scale and tilt do not matter.
  const spot = (el: HTMLElement, u = 0.5, v = 0.5) => {
    let [x, y] = [el.offsetWidth * u, el.offsetHeight * v]
    for (let e = el; e !== screen; e = e.offsetParent as HTMLElement) [x, y] = [x + e.offsetLeft, y + e.offsetTop]
    return [x, y]
  }
  // The touch point glides to `el` and presses: the element gives, a ripple fills it, a ring spreads, the tablet rocks a little.
  const tap = (el: HTMLElement, at: number) => {
    const [x, y] = spot(el)
    story
      .to(q("touch"), { x, y, duration: 0.5, ease: "power2.inOut" }, at)
      .to(q("finger"), { scale: 0.68, backgroundColor: "rgba(255,255,255,.75)", duration: 0.12, repeat: 1, yoyo: true, ease: "power2.out" }, at + 0.5)
      .fromTo(q("ring"), { scale: 0.7, opacity: 0.95 }, { scale: 2.5, opacity: 0, duration: 0.65, ease: "power2.out" }, at + 0.58)
      .to(el, { scale: 0.93, duration: 0.12, repeat: 1, yoyo: true, ease: "power1.inOut" }, at + 0.5)
      .fromTo(el.querySelector("[data-s=ripple]"), { scale: 0, opacity: 0.75 }, { scale: 1, opacity: 0, duration: 0.7, ease: "power2.out" }, at + 0.56)
      .to(q("tablet"), { rotationY: (x / screen.offsetWidth - 0.5) * 7, rotationX: (0.5 - y / screen.offsetHeight) * 6, duration: 0.14, repeat: 1, yoyo: true, ease: "sine.inOut" }, at + 0.5)
  }
  // A jump in the scene, from one offset to another.
  const hop = (el: Element | Element[], [x0, y0]: number[], [x1, y1]: number[], rise: number, duration: number, at: number) =>
    story
      .fromTo(el, { x: x0 }, { x: x1, duration, ease: "none" }, at)
      .fromTo(el, { y: y0 }, { y: Math.min(y0, y1) - rise, duration: duration * 0.42, ease: "power2.out" }, at)
      .to(el, { y: y1, duration: duration * 0.58, ease: "power2.in" }, at + duration * 0.42)

  const mouth = { open: 0 }
  const drawBag = () => bag(mouth.open).forEach((p, i) => q("side")[i].setAttribute("points", p))
  const gate = { open: 0 }
  const drawGate = () => doors(gate.open).forEach((p, i) => q("door")[i].setAttribute("points", p))
  const mid = [BAG.x + BAG.w / 2, BAG.y + BAG.d / 2] as const
  const ground = { svgOrigin: P(...mid).join(" ") }
  // From a shelf spot down into the open bag.
  const into = ([x, y, z]: readonly [number, number, number]) => [P(...mid)[0] - P(x, y)[0], P(...mid, BAG.h)[1] + 18 - P(x, y, z)[1]]
  const tiles = q<HTMLElement>("tile")
  const [cart] = q<HTMLElement>("cart")
  const [confirm] = q<HTMLElement>("confirm")
  const burst = q("burst").flatMap((g) => [...g.children])
  const [vialDrop, tubDrop] = q("drop")
  const [vialStock, tubStock] = q("stock")

  // Every fromTo names the same properties on both sides: GSAP applies from-only ones on the first loop and then not again.

  // 1. The tablet comes up in front of the shop and takes an order
  const bill = ({ label, total }: { label: string; total: string }, at: number) =>
    story.set(q("count"), { textContent: label }, at).set(q("sum"), { textContent: total }, at)
  const [endX, endY] = spot(confirm)
  story
    .set([q("parcel"), q("receipt"), q("seal"), q("token"), q("ticket"), q("spin"), q("fly")].flat(), { opacity: 0 }, 0)
    .set(q("done"), { autoAlpha: 0 }, 0)
    .set(q("label"), { opacity: 1 }, 0)
    .set(confirm, { y: 70, opacity: 0 }, 0)
    .set(q("touch"), { x: 300, y: 330, opacity: 0 }, 0)
    .set([q("seal-ring"), burst].flat(), { scale: 0, transformOrigin: "50% 50%" }, 0)
    .set(q("check"), { strokeDashoffset: 1.05 }, 0)
  bill(hero.pos.filling[0], 0)
  story
    .fromTo(q("tablet"), { y: AWAY, rotation: 5, rotationX: -32, rotationY: 0 }, { y: 0, rotation: 0, rotationX: 0, rotationY: 0, duration: 1.3, ease: "power3.out" }, 0)
    .to(q("touch"), { opacity: 1, duration: 0.25 }, 1)
  // Tap a product and it flies into the cart.
  const add = (i: number, at: number) => {
    tap(tiles[i], at)
    const [from, to] = [spot(tiles[i], 0.5, 0.36), spot(cart, 0.1)]
    const fly = q("fly")[i]
    story.set(fly, { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, at + 0.66)
    hop(fly, from, to, 34, 0.6, at + 0.66)
    story
      .to(fly, { scale: 0.25, duration: 0.6, ease: "power2.in" }, at + 0.66)
      .set(fly, { opacity: 0 }, at + 1.26)
      .fromTo(cart, { scale: 1.06, backgroundColor: "#5CC4FF" }, { scale: 1, backgroundColor: "#0190DD", duration: 0.45, ease: "power2.out" }, at + 1.26)
  }
  add(0, 1.05)
  bill(hero.pos.filling[1], 2.31)
  story.fromTo(confirm, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.5)" }, 2.31)
  add(1, 1.95)
  bill(hero.pos.cart, 3.21)
  tap(confirm, 3.15)
  story
    .to(q("label"), { opacity: 0, duration: 0.15 }, 3.85)
    .to(q("spin"), { opacity: 1, duration: 0.15 }, 3.85)
    .fromTo(q("spin"), { rotation: 0, transformOrigin: "50% 50%" }, { rotation: 540, duration: 0.8, ease: "none" }, 3.85)
    .to(q("touch"), { opacity: 0, duration: 0.2 }, 3.82)
    .fromTo(q("done"), { clipPath: `circle(0px at ${endX}px ${endY}px)`, autoAlpha: 1 }, { clipPath: `circle(640px at ${endX}px ${endY}px)`, autoAlpha: 1, duration: 0.55, ease: "power2.inOut" }, 4.5)
    .fromTo(burst, { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5, from: "center" } }, 4.7)
    .fromTo(q("seal-ring"), { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.5, ease: "back.out(2.2)" }, 4.75)
    .fromTo(q("check"), { strokeDashoffset: 1.05 }, { strokeDashoffset: 0, duration: 0.4, ease: "power2.out" }, 4.95)

  // 2. The tablet leaves; the check mark stays behind and drops into the counter screen
  story
    .set(q("token"), { opacity: 1, x: 0, y: 0, scale: 1 }, 5.7)
    .to(q("tablet"), { y: AWAY, rotation: -4, rotationX: -26, duration: 0.95, ease: "power2.in" }, 5.7)
  hop(q("token"), [0, 0], [TILL[0] - TOKEN[0], TILL[1] - TOKEN[1]], 90, 0.8, 6.55)
  story
    .to(q("token"), { scale: 0.62, transformOrigin: "50% 50%", duration: 0.35, ease: "power2.out" }, 6.5)
    .to(q("token"), { scale: 0.15, duration: 0.4, ease: "power2.in" }, 6.95)
    .set(q("token"), { opacity: 0 }, 7.35)
    .to(q("order"), { keyframes: [{ opacity: 1, duration: 0.12 }, { opacity: 0, duration: 0.6 }], stagger: 0.06 }, 6.65)

  // 3. The shop processes it: screen, receipt, ticket
  story
    .fromTo(q("till"), { attr: { fill: "#DF9770" } }, { attr: { fill: "#071321" }, duration: 0.7 }, 7.35)
    .fromTo(q("pay"), { fill: "#DF9770" }, { fill: "#FFFFFF", duration: 0.15, repeat: 3, yoyo: true }, 7.35)
    .add(ripple, 7.35)
    .fromTo(q("receipt"), { y: 28, opacity: 1 }, { y: 0, opacity: 1, duration: 0.8, ease: "steps(6)" }, 7.45)
    .set(q("packed"), { scale: 0, transformOrigin: "50% 50%" }, 7.4)
    .fromTo(q("ticket"), { opacity: 1, scale: 0, transformOrigin: "50% 100%" }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }, 7.6)

  // 4. A bag opens; the two items leave the shelves and drop in
  story
    .fromTo(q("parcel"), { opacity: 1, x: 0, y: 0, scale: 0, ...ground }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: "back.out(2)" }, 8)
    .fromTo(mouth, { open: 0 }, { open: 1, duration: 0.45, ease: "back.out(1.6)", onUpdate: drawBag }, 8.25)
  const pack = (shelf: Element, item: Element, to: number[], done: Element, at: number) => {
    story.set(shelf, { opacity: 0 }, at).set(item, { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, at)
    hop(item, [0, 0], to, 46, 0.85, at)
    story
      .to(item, { scale: 1.5, duration: 0.36, ease: "power2.out" }, at)
      .to(item, { scale: 0.7, duration: 0.45, ease: "power2.in" }, at + 0.4)
      .set(item, { opacity: 0 }, at + 0.85)
      .to(q("parcel"), { scaleY: 0.9, scaleX: 1.05, ...ground, duration: 0.09, repeat: 1, yoyo: true }, at + 0.82)
      .to(done, { scale: 1, duration: 0.4, ease: "back.out(2.5)" }, at + 0.85)
  }
  pack(vialStock, vialDrop, into(STOCK.vial), q("packed")[0], 8.75)
  pack(tubStock, tubDrop, into(STOCK.tub), q("packed")[1], 9.3)

  // 5. Folded shut, sealed, carried into the van
  story
    .to(mouth, { open: 0, duration: 0.35, ease: "power2.in", onUpdate: drawBag }, 10.35)
    .fromTo(q("seal"), { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.25, ease: "power2.in" }, 10.7)
    .to(q("ticket"), { scale: 0, opacity: 0, duration: 0.3, ease: "back.in(2)" }, 10.6)
    .to(gate, { open: 1, duration: 0.45, ease: "back.out(1.4)", onUpdate: drawGate }, 10.75)
  // Past the counter, then up between the doors
  const stops = [[0, 0, 0], [48, -8, 0], [120, -68, 14]].map(([x, y, z]) => [(x - y) * 0.866, (x + y) * 0.5 - z])
  hop(q("parcel"), stops[0], stops[1], 30, 0.5, 11.1)
  hop(q("parcel"), stops[1], stops[2], 8, 0.6, 11.65)
  story
    .to(q("parcel"), { scale: 0.85, ...ground, duration: 0.4, ease: "power1.in" }, 11.85)
    .set(q("parcel"), { opacity: 0 }, 12.25)
    .to(q("van"), { y: 4, duration: 0.1, repeat: 1, yoyo: true, ease: "sine.inOut" }, 12.22)
    .to(gate, { open: 0, duration: 0.3, ease: "power2.in", onUpdate: drawGate }, 12.3)

  // 6. The van drives off to deliver it
  story
    .fromTo(q("puff"), { x: 0, y: 0, scale: 0.3, opacity: 0.7, transformOrigin: "50% 50%" }, { ...along(-46), scale: 1.7, opacity: 0, duration: 0.8, stagger: 0.22, ease: "power1.out" }, 12.55)
    .to(q("van"), { ...along(-8), duration: 0.25, ease: "power2.out" }, 12.6)
    .to(q("van"), { ...along(520), duration: 1.9, ease: "power2.in" }, 12.85)
    .to(q("wheel"), { rotation: 1080, svgOrigin: "0 0", duration: 1.9, ease: "power2.in" }, 12.85)
    .to(q("dash"), { scale: 2, transformOrigin: "50% 50%", duration: 0.22, stagger: 0.06, repeat: 1, yoyo: true }, 13.6)
    .to(q("van"), { opacity: 0, duration: 0.25 }, 14.5)

  // 7. The books update, the shelf restocks, the van backs in for the next one
  story
    .fromTo(q("chart"), { strokeDashoffset: 1.05 }, { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, 13.9)
    .fromTo(q("spark"), { scale: 0.4, rotation: -90, transformOrigin: "50% 50%" }, { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(3)" }, 14.7)
    .to(q("receipt"), { y: -20, opacity: 0, duration: 0.5, ease: "power1.in" }, 14)
    .fromTo(q("stock"), { y: -26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "bounce.out" }, 14.6)
    .to(q("van"), { opacity: 1, duration: 0.3 }, 15)
    .to(q("van"), { x: 0, y: 0, duration: 1.6, ease: "power2.out" }, 15)
    .to(q("wheel"), { rotation: 0, duration: 1.6, ease: "power2.out" }, 15)

  // Small things that never stop: the shop's slow float, the cross sign's lights and halo, dots rising out of the box.
  const idle = gsap.timeline()
  idle.to(svg, { y: -7, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" }, 0)
  idle.to(q("sign").flatMap((g) => [...g.children]), { opacity: 0.4, duration: 0.7, stagger: { amount: 1.4, from: "center", repeat: -1, yoyo: true }, ease: "sine.inOut" }, 0)
  idle.to(q("halo"), { scale: 1.25, opacity: 0.6, transformOrigin: "50% 50%", duration: 1.8, repeat: -1, yoyo: true, ease: "sine.inOut" }, 0)
  idle.to(q("pool").flatMap((g) => [...g.children]), { opacity: 0.45, duration: 1.2, stagger: { amount: 2.4, from: "center", repeat: -1, yoyo: true }, ease: "sine.inOut" }, 0)
  q("mote").forEach((el, i) =>
    idle.fromTo(
      el,
      { y: 0, opacity: 0 },
      { y: -190, duration: 4 + (i % 5), delay: intro.duration() + i * 0.5, repeat: -1, ease: "none", keyframes: { opacity: [0, 0.85, 0.6, 0] } },
      0,
    ),
  )

  // Nothing runs while the hero is off screen.
  ScrollTrigger.create({
    trigger: root,
    start: "top bottom",
    end: "bottom top",
    onToggle: ({ isActive }) => [intro, story, idle].forEach((tl) => tl.paused(!isActive)),
  })
}
