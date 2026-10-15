"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const all = (name: string) => gsap.utils.toArray<HTMLElement>(`[data-fx=${name}]`)

// Scroll and pointer motion for the Home page. The markup stays on the server page; this only finds its data-fx
// hooks: reveal, stagger, count, hero, drift, tilt, phone, pos-items, pos-cart. Skipped for prefers-reduced-motion,
// and with no JS everything stays visible.
export function HomeFx() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Blocks below the fold rise in as they scroll into view; siblings entering together stagger.
      const below = all("reveal").filter((el) => el.getBoundingClientRect().top > innerHeight)
      gsap.set(below, { opacity: 0, y: 24 })
      ScrollTrigger.batch(below, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", overwrite: true }),
      })

      // Lists, table rows and steps cascade in once their container is on screen.
      all("stagger").forEach((el) =>
        gsap.from(el.children, {
          opacity: 0,
          y: 14,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
      )

      // Stat numbers count up to the written value; non-numeric ones ("Live", "24/7") stay as they are.
      const counted = all("count").flatMap((el) => {
        const m = el.textContent?.match(/^(\d+)(\D*)$/)
        if (!m) return []
        const end = +m[1], tail = m[2], o = { n: 0 }
        gsap.to(o, {
          n: end,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(o.n) + tail),
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        })
        return [[el, el.textContent!] as const]
      })

      // Phone items pop in after the hero text, then the phone floats and the hero drifts as it scrolls away.
      gsap
        .timeline({ delay: 0.5 })
        .from(all("pos-items")[0].children, { opacity: 0, scale: 0.9, y: 14, duration: 0.5, stagger: 0.07, ease: "back.out(1.6)" })
        .from(all("pos-cart"), { opacity: 0, y: 16, duration: 0.4, ease: "power2.out" }, "-=0.2")
      gsap.to(all("phone"), { y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 })
      gsap.to(all("drift"), {
        y: 70,
        ease: "none",
        scrollTrigger: { trigger: all("hero")[0], start: "top top", end: "bottom top", scrub: true },
      })

      return () => counted.forEach(([el, text]) => (el.textContent = text))
    })

    // The phone leans toward the pointer. Mouse only: touch has no hover.
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const [hero] = all("hero"), [tilt] = all("tilt")
      gsap.set(tilt, { transformPerspective: 900 })
      const rx = gsap.quickTo(tilt, "rotationX", { duration: 0.6, ease: "power3.out" })
      const ry = gsap.quickTo(tilt, "rotationY", { duration: 0.6, ease: "power3.out" })
      const move = (e: PointerEvent) => {
        const r = hero.getBoundingClientRect()
        ry(((e.clientX - r.left) / r.width - 0.5) * 14)
        rx(-((e.clientY - r.top) / r.height - 0.5) * 10)
      }
      const leave = () => (rx(0), ry(0))
      hero.addEventListener("pointermove", move)
      hero.addEventListener("pointerleave", leave)
      return () => {
        hero.removeEventListener("pointermove", move)
        hero.removeEventListener("pointerleave", leave)
      }
    })

    return () => mm.revert()
  }, [])
  return null
}
