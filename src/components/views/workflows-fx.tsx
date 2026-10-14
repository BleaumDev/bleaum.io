"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Scroll motion for the Payments "Workflows" timeline. The markup stays on the server page; this only finds its
// data-fx hooks: words, word, list, rail, step, node, pill, plus. A step gets the "is-active" class while it sits mid-screen.
// Skipped for prefers-reduced-motion, and with no JS everything stays visible.
export function WorkflowsFx({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root)

      // The three big words rise one after another.
      gsap.from(q("[data-fx=word]"), {
        y: 48,
        opacity: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: q("[data-fx=words]")[0], start: "top 85%", toggleActions: "play none none reverse" },
      })

      // The copper rail draws down as the list scrolls past.
      gsap.fromTo(
        q("[data-fx=rail]"),
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: q("[data-fx=list]")[0], start: "top 65%", end: "bottom 65%", scrub: 0.6 } },
      )

      q("[data-fx=step]").forEach((step) => {
        const s = gsap.utils.selector(step)
        gsap
          .timeline({ scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" } })
          .from(step, { y: 36, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(s("[data-fx=node]"), { scale: 0, duration: 0.4, ease: "back.out(2.5)" }, 0.1)
          .from(s("[data-fx=pill]"), { x: -14, opacity: 0, scale: 0.92, duration: 0.45, stagger: 0.1, ease: "power2.out" }, 0.25)
          .from(s("[data-fx=plus]"), { rotate: -90, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, 0.35)
        ScrollTrigger.create({ trigger: step, start: "top 55%", end: "bottom 55%", toggleClass: { targets: step, className: "is-active" } })
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  )
}
