"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { heroScene } from "./hero-animation/hero-scene-fx"

gsap.registerPlugin(ScrollTrigger, SplitText)

const all = (sel: string) => gsap.utils.toArray<HTMLElement>(sel)
const fx = (name: string) => all(`[data-fx=${name}]`)
const once = (trigger: Element, start = "top 88%") => ({ trigger, start, once: true })

// Hover moves for the line-art spots, by [data-hover] name (home-art.tsx). Each one ends where it started.
const center = { transformOrigin: "50% 50%" }
const moves: Record<string, (t: NodeListOf<Element>) => gsap.core.Animation> = {
  redraw: (t) => gsap.fromTo(t, { strokeDashoffset: 1.05 }, { strokeDashoffset: 0, duration: 0.6, stagger: 0.1, ease: "power2.inOut" }),
  fill: (t) => gsap.fromTo(t, { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
  hop: (t) => gsap.to(t, { y: -5, duration: 0.22, yoyo: true, repeat: 1, stagger: 0.08, ease: "sine.inOut" }),
  pulse: (t) => gsap.to(t, { ...center, scale: 1.3, duration: 0.25, yoyo: true, repeat: 1, stagger: 0.1, ease: "sine.inOut" }),
  beat: (t) => gsap.to(t, { ...center, scale: 1.08, duration: 0.16, yoyo: true, repeat: 3, ease: "sine.inOut" }),
  spin: (t) => gsap.to(t, { ...center, rotation: "+=360", duration: 0.8, ease: "back.inOut(1.7)" }),
  flow: (t) => gsap.to(t, { strokeDashoffset: "-=12", duration: 1, ease: "power1.inOut" }),
  tilt: (t) =>
    gsap.to(t, {
      keyframes: [{ ...center, rotation: -8, duration: 0.2 }, { rotation: 6, duration: 0.2 }, { rotation: -3, duration: 0.15 }, { rotation: 0, duration: 0.15 }],
    }),
  // Drives off to the right and arrives back from the left.
  drive: (t) =>
    gsap
      .timeline()
      .to(t, { x: 24, opacity: 0, duration: 0.35, ease: "power2.in" })
      .set(t, { x: -24 })
      .to(t, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }),
}

// Scroll and pointer motion for the Home page. The markup stays on the server page; this only finds its hooks:
// data-fx = scene (hero-animation/hero-scene-fx.ts), reveal, slide (+ data-dir), stagger, chip, dot, draw, words, scrub-words, stars, count, hero, drift, tablet,
// ping, cta-bloom, bloom, magnet, progress; data-wipe, data-card. Skipped for prefers-reduced-motion,
// and with no JS everything stays visible.
export function HomeFx() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Blocks below the fold rise in as they scroll into view; siblings entering together stagger.
      // "slide" blocks (the text and panel of a split row) come in from the side on wide screens.
      const wide = innerWidth >= 1024
      const below = all("[data-fx=reveal],[data-fx=slide]").filter((el) => el.getBoundingClientRect().top > innerHeight)
      below.forEach((el) => {
        const dir = wide ? +(el.dataset.dir ?? 0) : 0
        gsap.set(el, dir ? { opacity: 0, x: dir * 56 } : { opacity: 0, y: 24 })
      })
      ScrollTrigger.batch(below, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: true }),
      })

      // Section headings: words rise one after another.
      fx("words").forEach((el) =>
        SplitText.create(el, {
          type: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, { opacity: 0, y: 28, duration: 0.7, stagger: 0.06, ease: "power3.out", scrollTrigger: once(el) }),
        }),
      )

      // The founder quote lights up word by word as it scrolls through.
      fx("scrub-words").forEach((el) =>
        SplitText.create(el, {
          type: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              opacity: 0.15,
              stagger: 0.06,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 55%", scrub: true },
            }),
        }),
      )

      // Thin copper bar along the top edge fills as the page scrolls.
      gsap.fromTo(fx("progress"), { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } })

      // Rating stars pop in one by one.
      fx("stars").forEach((el) =>
        SplitText.create(el, {
          type: "chars",
          aria: "none",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, { scale: 0, rotate: -80, duration: 0.5, stagger: 0.09, ease: "back.out(2.5)", scrollTrigger: once(el, "top 92%") }),
        }),
      )

      // Lists, table rows and steps cascade in once their container is on screen.
      fx("stagger").forEach((el) =>
        gsap.from(el.children, { opacity: 0, y: 14, duration: 0.5, stagger: 0.08, ease: "power2.out", scrollTrigger: once(el) }),
      )

      // Stock chips pop in after their table rows.
      fx("chip").forEach((el) =>
        gsap.from(el, { scale: 0.5, opacity: 0, duration: 0.5, delay: 0.4, ease: "back.out(2.5)", scrollTrigger: once(el, "top 92%") }),
      )

      // Line-art spots (home-art.tsx) draw their paths one after another, then any [data-pop] accent springs in
      // and the marks on those accents (checkmarks) draw last. Without this they just show fully drawn.
      fx("draw").forEach((el) => {
        const q = (s: string) => el.querySelectorAll(s)
        const tl = gsap
          .timeline({ scrollTrigger: once(el, "top 92%") })
          .from(q("[data-draw]:not([data-pop] *)"), { strokeDashoffset: 1.05, duration: 0.9, stagger: 0.15, ease: "power2.inOut" })
        const pops = q("[data-pop]")
        if (pops.length) tl.from(pops, { scale: 0, transformOrigin: "50% 50%", duration: 0.6, stagger: 0.12, ease: "back.out(2.5)" }, "-=0.45")
        const late = q("[data-pop] [data-draw]")
        if (late.length) tl.from(late, { strokeDashoffset: 1.05, duration: 0.5, ease: "power2.out" }, "-=0.3")
      })

      // Gallery images unwrap top to bottom.
      all("[data-wipe]").forEach((el) =>
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "power3.inOut", scrollTrigger: once(el, "top 90%") },
        ),
      )
      gsap.fromTo(fx("ping"), { scale: 1, opacity: 0.5 }, { scale: 1.9, opacity: 0, duration: 1.8, ease: "power1.out", repeat: -1 })

      // The CTA dot bloom grows outward from its center.
      fx("cta-bloom").forEach((el) =>
        gsap.from(el.querySelectorAll("circle"), {
          scale: 0,
          transformOrigin: "50% 50%",
          duration: 0.8,
          ease: "back.out(2)",
          stagger: { amount: 1.2, from: "center" },
          scrollTrigger: once(el, "top 85%"),
        }),
      )

      // Stat numbers count up to the written value; non-numeric ones ("Live", "24/7") stay as they are.
      const counted = fx("count").flatMap((el) => {
        const m = el.textContent?.match(/^(\d+)(\D*)$/)
        if (!m) return []
        const end = +m[1], tail = m[2], o = { n: 0 }
        gsap.to(o, {
          n: end,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(o.n) + tail),
          scrollTrigger: once(el, "top 92%"),
        })
        return [[el, el.textContent!] as const]
      })

      const scene = fx("scene")[0]
      if (scene) heroScene(scene, fx("bloom")[0])

      // The tablet floats and the hero drifts as it scrolls away.
      gsap.to(fx("tablet"), { y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 })
      gsap.to(fx("drift"), {
        y: 70,
        ease: "none",
        scrollTrigger: { trigger: fx("hero")[0], start: "top top", end: "bottom top", scrub: true },
      })

      return () => counted.forEach(([el, text]) => (el.textContent = text))
    })

    // Mouse only (touch has no hover): every card leans toward the pointer. The hero art does not; it stays in place.
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const off: (() => void)[] = []
      const lean = (el: HTMLElement, area: HTMLElement, rotY: number, rotX: number) => {
        gsap.set(el, { transformPerspective: 900 })
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3.out" })
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3.out" })
        const move = (e: PointerEvent) => {
          const r = area.getBoundingClientRect()
          ry(((e.clientX - r.left) / r.width - 0.5) * rotY)
          rx(-((e.clientY - r.top) / r.height - 0.5) * rotX)
        }
        const leave = () => (rx(0), ry(0))
        area.addEventListener("pointermove", move)
        area.addEventListener("pointerleave", leave)
        off.push(() => (area.removeEventListener("pointermove", move), area.removeEventListener("pointerleave", leave)))
      }
      // Cards also hand the pointer position to their CSS spotlight (--mx / --my).
      all("[data-card]").forEach((el) => {
        lean(el, el, 8, 8)
        const spot = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          el.style.setProperty("--mx", `${e.clientX - r.left}px`)
          el.style.setProperty("--my", `${e.clientY - r.top}px`)
        }
        el.addEventListener("pointermove", spot)
        off.push(() => el.removeEventListener("pointermove", spot))
      })

      // Gallery art plays its moves when the card is hovered or focused. A run already playing finishes first.
      fx("draw").forEach((svg) => {
        const card = svg.closest<HTMLElement>(".group")
        if (!card || !svg.querySelector("[data-hover]")) return
        let tl: gsap.core.Timeline | undefined
        const play = () => {
          if (tl?.isActive()) return
          tl = gsap.timeline()
          for (const [name, move] of Object.entries(moves)) {
            const t = svg.querySelectorAll(`[data-hover=${name}]`)
            if (t.length) tl.add(move(t), 0)
          }
        }
        card.addEventListener("pointerenter", play)
        card.addEventListener("focusin", play)
        off.push(() => (card.removeEventListener("pointerenter", play), card.removeEventListener("focusin", play)))
      })

      // The hero dot field drifts against the pointer for depth.
      const hero = fx("hero")[0]
      const bx = gsap.quickTo(fx("bloom")[0], "x", { duration: 1.2, ease: "power3.out" })
      const by = gsap.quickTo(fx("bloom")[0], "y", { duration: 1.2, ease: "power3.out" })
      const drift = (e: PointerEvent) => (bx((e.clientX / innerWidth - 0.5) * -60), by((e.clientY / innerHeight - 0.5) * -60))
      const settle = () => (bx(0), by(0))
      hero.addEventListener("pointermove", drift)
      hero.addEventListener("pointerleave", settle)
      off.push(() => (hero.removeEventListener("pointermove", drift), hero.removeEventListener("pointerleave", settle)))

      // Hero and CTA buttons pull toward the pointer. GSAP owns their transform, so CSS stops transitioning it.
      fx("magnet")
        .flatMap((box) => [...box.children] as HTMLElement[])
        .forEach((btn) => {
          btn.style.transitionProperty = "filter,box-shadow"
          const x = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" })
          const y = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" })
          // The rect already includes the current pull, so subtract it to aim at the button's resting center.
          const pull = (e: PointerEvent) => {
            const r = btn.getBoundingClientRect()
            x((e.clientX - (r.left + r.width / 2 - (gsap.getProperty(btn, "x") as number))) * 0.3)
            y((e.clientY - (r.top + r.height / 2 - (gsap.getProperty(btn, "y") as number))) * 0.3)
          }
          const release = () => (x(0), y(0))
          btn.addEventListener("pointermove", pull)
          btn.addEventListener("pointerleave", release)
          off.push(() => (btn.removeEventListener("pointermove", pull), btn.removeEventListener("pointerleave", release), (btn.style.transitionProperty = "")))
        })
      return () => off.forEach((f) => f())
    })

    return () => mm.revert()
  }, [])
  return null
}
