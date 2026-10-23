"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const LINE = "top 35%" // the reading line: the section crossing it is the active one
const HEADER = 96 // matches the headings' scroll-mt-24

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

// Contents list kept in step with the article. Scrolling the article moves the copper marker and fills the rail;
// a click glides the page to that section. Each heading in `items` must exist in the document as `#id`.
export function PolicyToc({ items }: { items: [id: string, label: string][] }) {
  const [active, setActive] = useState(items[0][0])
  const nav = useRef<HTMLElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const marker = useRef<HTMLSpanElement>(null)
  const fill = useRef<HTMLSpanElement>(null)
  const locked = useRef(false) // a click glide is running, so the spy stays quiet until it lands
  const placed = useRef(false)

  // Spy: each heading owns the stretch of page down to the next heading. The rail fills with reading progress.
  useEffect(() => {
    const heads = items.map(([id]) => document.getElementById(id)!)
    const article = heads[0].closest("article")!
    const spies = heads.map((h, i) =>
      ScrollTrigger.create({
        trigger: h,
        start: LINE,
        endTrigger: heads[i + 1] ?? article,
        end: heads[i + 1] ? LINE : "bottom 35%",
        onToggle: (s) => s.isActive && !locked.current && setActive(h.id),
      }),
    )
    const progress = gsap.fromTo(
      fill.current,
      { scaleY: 0 },
      { scaleY: 1, ease: "none", scrollTrigger: { trigger: article, start: LINE, end: "bottom 65%", scrub: true } },
    )
    return () => {
      spies.forEach((s) => s.kill())
      progress.scrollTrigger?.kill()
      progress.kill()
    }
  }, [items])

  // The marker slides to the active item, and the list scrolls to keep that item in the middle.
  useEffect(() => {
    const place = (d: number) => {
      // The refs are already null when the page unmounts but the ResizeObserver still fires once more.
      const box = nav.current
      const li = list.current?.querySelector<HTMLElement>(`[data-id="${active}"]`)
      if (!box || !li) return
      gsap.to(marker.current, { y: li.offsetTop, height: li.offsetHeight, opacity: 1, duration: d, ease: "power3.out", overwrite: true })
      gsap.to(box, { scrollTo: { y: li.offsetTop - (box.clientHeight - li.offsetHeight) / 2 }, duration: d, ease: "power3.out" })
    }
    place(placed.current && !reduced() ? 0.45 : 0)
    placed.current = true
    const ro = new ResizeObserver(() => place(0))
    ro.observe(list.current!)
    return () => ro.disconnect()
  }, [active])

  const go = (e: MouseEvent, id: string) => {
    e.preventDefault()
    const head = document.getElementById(id)!
    const quick = reduced()
    locked.current = true
    setActive(id)
    history.replaceState(null, "", `#${id}`)
    const land = () => (locked.current = false)
    gsap.to(window, {
      scrollTo: { y: head, offsetY: HEADER },
      duration: quick ? 0 : 0.9,
      ease: "power3.inOut",
      overwrite: true,
      onInterrupt: land,
      onComplete: () => {
        land()
        // The heading settles in so the eye finds where the jump ended.
        if (!quick) gsap.fromTo(head, { x: -14, opacity: 0.3 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", clearProps: "transform,opacity" })
      },
    })
  }

  return (
    <nav ref={nav} aria-label="Contents" className="hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:sticky lg:top-24 lg:block">
      <div ref={list} className="relative">
        <span ref={fill} aria-hidden="true" className="absolute left-0 top-0 h-full w-px origin-top bg-copper-400/40" style={{ transform: "scaleY(0)" }} />
        <span ref={marker} aria-hidden="true" className="absolute left-0 top-0 w-0.5 rounded-full bg-copper-400 opacity-0" />
        <ul className="grid gap-1 border-l border-h-line text-[.875rem]">
          {items.map(([id, label]) => (
            <li key={id} data-id={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={active === id ? "location" : undefined}
                className={`block py-1.5 pl-4 transition-colors duration-200 hover:text-h-text ${active === id ? "font-medium text-h-text" : "text-h-muted"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
