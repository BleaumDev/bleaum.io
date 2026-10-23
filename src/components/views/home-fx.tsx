"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const all = (sel: string) => gsap.utils.toArray<HTMLElement>(sel)
const fx = (name: string) => all(`[data-fx=${name}]`)
const once = (trigger: Element, start = "top 88%") => ({ trigger, start, once: true })

// Scroll and pointer motion for the Home page. The markup stays on the server page; this only finds its hooks:
// data-fx = reveal, slide (+ data-dir), stagger, chip, dot, words, scrub-words, stars, count, hero, drift, tilt, phone,
// pos-items, pos-cart, ping, cta-bloom; data-clip, data-wipe, data-card. Skipped for prefers-reduced-motion,
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

      // Small marks pop: brand dots spin in, stock chips follow their table rows.
      fx("dot").forEach((el) =>
        gsap.from(el, { scale: 0, rotate: -90, duration: 0.7, ease: "back.out(2)", scrollTrigger: once(el, "top 92%") }),
      )
      fx("chip").forEach((el) =>
        gsap.from(el, { scale: 0.5, opacity: 0, duration: 0.5, delay: 0.4, ease: "back.out(2.5)", scrollTrigger: once(el, "top 92%") }),
      )

      // Gallery images unwrap top to bottom; the video frame opens up as it arrives.
      all("[data-wipe]").forEach((el) =>
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "power3.inOut", scrollTrigger: once(el, "top 90%") },
        ),
      )
      all("[data-clip]").forEach((el) =>
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 10% round 28px)" },
          { clipPath: "inset(0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: el, start: "top 92%", end: "top 35%", scrub: true } },
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

      // Phone items pop in after the hero text, then the phone floats and the hero drifts as it scrolls away.
      gsap
        .timeline({ delay: 0.5 })
        .from(fx("pos-items")[0].children, { opacity: 0, scale: 0.9, y: 14, duration: 0.5, stagger: 0.07, ease: "back.out(1.6)" })
        .from(fx("pos-cart"), { opacity: 0, y: 16, duration: 0.4, ease: "power2.out" }, "-=0.2")
      gsap.to(fx("phone"), { y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 })
      gsap.to(fx("drift"), {
        y: 70,
        ease: "none",
        scrollTrigger: { trigger: fx("hero")[0], start: "top top", end: "bottom top", scrub: true },
      })

      return () => counted.forEach(([el, text]) => (el.textContent = text))
    })

    // Mouse only (touch has no hover): the hero phone and every card lean toward the pointer.
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
      lean(fx("tilt")[0], fx("hero")[0], 14, 10)
      all("[data-card]").forEach((el) => lean(el, el, 8, 8))
      return () => off.forEach((f) => f())
    })

    return () => mm.revert()
  }, [])
  return null
}
