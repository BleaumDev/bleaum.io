"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// The 48×48 frame every icon in this folder draws into. It assembles itself once it scrolls into view:
// copper [data-dot]s burst out of the center, the [data-draw] lines draw in, the [data-pop] accent springs
// into place, then the dots keep a slow twinkle. Skipped for prefers-reduced-motion; without JS it shows finished.
// Lines follow the text color (`text-*` on the icon or a parent). Hover moves play when a parent has class "group".
export function AnimatedIcon({ children, className = "size-14", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const el = ref.current!
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = (s: string) => el.querySelectorAll<SVGElement>(s)
      const dots = q("[data-dot]")
      const fromCenter = (axis: "cx" | "cy") => (_: number, d: SVGElement) => 24 - +d.getAttribute(axis)!
      gsap
        .timeline({ delay, scrollTrigger: { trigger: el, start: "top 92%", once: true } })
        .from(dots, { x: fromCenter("cx"), y: fromCenter("cy"), scale: 0, transformOrigin: "50% 50%", duration: 0.7, stagger: 0.05, ease: "back.out(2.5)" })
        .from(q("[data-draw]"), { strokeDashoffset: 1.05, duration: 0.8, stagger: 0.1, ease: "power2.inOut" }, 0.15)
        .from(q("[data-pop]"), { scale: 0, rotate: -60, transformOrigin: "50% 50%", duration: 0.7, ease: "back.out(2.5)" }, "-=0.45")
        .to(dots, { opacity: 0.35, duration: 1.4, ease: "sine.inOut", stagger: { each: 0.35, from: "random", repeat: -1, yoyo: true } })
    })
    return () => mm.revert()
  }, [delay])

  return (
    <svg
      ref={ref}
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`block shrink-0 overflow-visible stroke-current ${className}`}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}
