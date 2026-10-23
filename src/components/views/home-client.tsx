"use client"

import Link from "next/link"
import { useEffect } from "react"

// Demo link that keeps the Google Analytics click event the old Home page sent.
export function DemoLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <Link
      href="/demo"
      className={className}
      onClick={() => window.gtag?.("event", "click", { event_category: "Button", event_label: "Demo" })}
    >
      {children}
    </Link>
  )
}

// Scroll reveal. Elements marked data-reveal that start below the fold fade up once when they
// scroll into view. Skipped for prefers-reduced-motion, and with no JS everything stays visible.
export function RevealOnScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          ;(e.target as HTMLElement).dataset.reveal = "in"
          io.unobserve(e.target)
        }),
      { rootMargin: "0px 0px -8% 0px" },
    )
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.dataset.reveal = "pending"
        io.observe(el)
      } else {
        el.dataset.reveal = "in"
      }
    })
    return () => io.disconnect()
  }, [])
  return null
}
