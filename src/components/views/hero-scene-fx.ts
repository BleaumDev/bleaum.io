import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fold } from "./hero-iso"

// Screen offset for a move of `d` scene units along the scene's x axis (the way the van faces).
const along = (d: number) => ({ x: d * 0.866, y: d * 0.5 })

// Brings the Home hero art (hero-scene.tsx) to life: the box unfolds once, then one sale plays on repeat.
// Thumb tap -> order dots -> receipt, stock and lights react -> parcel loads -> van leaves -> restock -> van returns.
// Runs inside home-fx's reduced-motion gsap.matchMedia, which reverts every tween made here.
export function heroScene(root: HTMLElement, bloom: Element) {
  const q = (name: string) => [...root.querySelectorAll<SVGElement>(`[data-s=${name}]`)]
  const svg = root.querySelector("svg")!
  const panels = [...root.querySelectorAll("[data-panel]")]

  // Only fold from closed if the art is still hidden by its CSS entrance delay; a late script must not snap an open box shut.
  const intro = gsap.timeline()
  if (+getComputedStyle(q("stage")[0]).opacity < 0.05) {
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
      .set([q("print"), q("road"), q("wire")].flat(), { opacity: 0 }, 0)
      .set([q("pop"), q("bulb")].flat(), { scale: 0, transformOrigin: "50% 100%" }, 0)
      .set(q("awning"), { scaleY: 0, transformOrigin: "50% 0%" }, 0)
      .set(q("parcel"), { opacity: 0 }, 0)
      .set(q("van"), { ...along(360), opacity: 0 }, 0)
      .fromTo(svg, { rotation: -1.4, transformOrigin: "50% 80%" }, { rotation: 1.4, duration: 0.08, repeat: 6, yoyo: true, ease: "sine.inOut" }, 0.7)
      .to(svg, { rotation: 0, duration: 0.1 })
      .addLabel("open")
      .to(q("lid"), { opacity: 0, duration: 0.15 }, "open")
      .to(box, { flap: 1, duration: 0.8, ease: "back.out(1.5)", onUpdate: draw }, "open")
      .to(box, { wall: 90, duration: 1, ease: "bounce.out", onUpdate: draw }, "open+=0.35")
      .to(q("print"), { opacity: 1, duration: 0.3 }, "open+=1.2")
      .to(q("awning"), { scaleY: 1, duration: 0.6, ease: "back.out(1.6)" }, "open+=0.6")
      .to(q("pop"), { scale: 1, duration: 0.55, stagger: 0.06, ease: "back.out(1.9)" }, "open+=0.6")
      .to(q("wire"), { opacity: 1, duration: 0.3 }, "open+=1.2")
      .to(q("bulb"), { scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(2.5)" }, "open+=1.2")
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

  const story = gsap.timeline({ repeat: -1, repeatDelay: 1.4, delay: intro.duration() + 0.6, defaults: { immediateRender: false } })
  story
    // Tap
    .set([q("parcel"), q("receipt")].flat(), { opacity: 0 }, 0)
    .to(q("thumb"), { rotation: -9, x: -8, svgOrigin: "252 440", duration: 0.3, ease: "power2.inOut" }, 0)
    .to(q("thumb"), { rotation: 0, x: 0, duration: 0.45, ease: "power2.out" }, 0.4)
    .fromTo(q("tap"), { attr: { r: 5 }, opacity: 1 }, { attr: { r: 34 }, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.28)
    // Order travels to the counter
    .to(q("order"), { keyframes: [{ opacity: 1, duration: 0.15 }, { opacity: 0, duration: 0.7 }], stagger: 0.07 }, 0.4)
    .fromTo(q("pay"), { fill: "#DF9770" }, { fill: "#FFFFFF", duration: 0.15, repeat: 3, yoyo: true }, 1.2)
    .add(ripple, 1.2)
    .fromTo(q("receipt"), { y: 28, opacity: 1 }, { y: 0, duration: 0.8, ease: "steps(6)" }, 1.4)
    // Stock goes down, a parcel loads
    .to(q("tote"), { y: -16, duration: 0.3, ease: "back.out(2)" }, 1.5)
    .to(q("tote"), { scale: 0, transformOrigin: "50% 50%", duration: 0.25, ease: "back.in(2)" }, 1.9)
    .fromTo(q("parcel"), { ...along(-30), scale: 0, transformOrigin: "50% 100%" }, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2)" }, 2.1)
    .to(q("parcel"), { ...along(36), duration: 0.7, ease: "power1.inOut" }, 2.7)
    .set(q("parcel"), { opacity: 0 })
    .to(q("van"), { y: 4, duration: 0.12, repeat: 1, yoyo: true, ease: "sine.inOut" }, 3.35)
    // Van leaves
    .to(q("van"), { ...along(380), duration: 1.6, ease: "power2.in" }, 3.7)
    .to(q("wheel"), { rotation: 720, svgOrigin: "0 0", duration: 1.6, ease: "power2.in" }, 3.7)
    .to(q("van"), { opacity: 0, duration: 0.3 }, 5)
    // The books update and the shelf restocks
    .fromTo(q("chart"), { strokeDashoffset: 1.05 }, { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, 4.6)
    .fromTo(q("spark"), { scale: 0.4, rotation: -90, transformOrigin: "50% 50%" }, { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(3)" }, 5.4)
    .to(q("receipt"), { y: -20, opacity: 0, duration: 0.5, ease: "power1.in" }, 5.2)
    .set(q("tote"), { y: -26, scale: 1, opacity: 0 }, 5.6)
    .to(q("tote"), { y: 0, opacity: 1, duration: 0.6, ease: "bounce.out" }, 5.7)
    // Van backs in for the next one
    .to(q("van"), { opacity: 1, duration: 0.3 }, 6.2)
    .to(q("van"), { x: 0, y: 0, duration: 1.7, ease: "power2.out" }, 6.2)
    .to(q("wheel"), { rotation: 0, duration: 1.7, ease: "power2.out" }, 6.2)

  // Small things that never stop: flames, bulbs, the sign's halo, dots rising out of the box.
  const idle = gsap.timeline()
  q("flame").forEach((el) => idle.to(el, { scaleY: 1.25, scaleX: 0.88, transformOrigin: "50% 100%", duration: gsap.utils.random(0.25, 0.5), repeat: -1, yoyo: true, ease: "sine.inOut" }, 0))
  q("bulb").forEach((el, i) => idle.to(el.firstElementChild, { opacity: 0.35, duration: 1.1, delay: (i % 4) * 0.35, repeat: -1, yoyo: true, ease: "sine.inOut" }, 0))
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

  ;(window as unknown as { __tl: unknown }).__tl = { intro, story, idle, gsap } // TEMP-DEBUG

  // Nothing runs while the hero is off screen.
  ScrollTrigger.create({
    trigger: root,
    start: "top bottom",
    end: "bottom top",
    onToggle: ({ isActive }) => [intro, story, idle].forEach((tl) => tl.paused(!isActive)),
  })
}
