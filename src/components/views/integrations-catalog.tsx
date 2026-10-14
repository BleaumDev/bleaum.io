"use client"

import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRightIcon,
  BarChart2Icon,
  BriefcaseIcon,
  CreditCardIcon,
  LeafIcon,
  MegaphoneIcon,
  MessageSquareIcon,
  PauseIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StoreIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export type Partner = {
  name: string
  category: string
  description: string
  logo: string
  logoAlt: string
  status: string
  group: string
  dim?: boolean
}
export type PartnerGroup = { id: string; title: string }

const icons: Record<string, ReactNode> = {
  TRACEABILITY: <ShieldCheckIcon className="size-5" />,
  "ID VERIFICATION": <UserIcon className="size-5" />,
  ACCOUNTING: <BriefcaseIcon className="size-5" />,
  PAYMENTS: <CreditCardIcon className="size-5" />,
  INVENTORY: <LeafIcon className="size-5" />,
  "POINT OF SALE": <StoreIcon className="size-5" />,
  "CUSTOMER MANAGEMENT": <UsersIcon className="size-5" />,
  MARKETPLACE: <ShoppingCartIcon className="size-5" />,
  LOYALTY: <SparklesIcon className="size-5" />,
  MARKETING: <MegaphoneIcon className="size-5" />,
  ANALYTICS: <BarChart2Icon className="size-5" />,
  ALL: <MessageSquareIcon className="size-5" />,
}

const DWELL = 2.6 // seconds the tour rests on each category
const GLOW = "0 0 0 1.5px rgba(223,151,112,.95), 0 28px 64px -24px rgba(223,151,112,.55)"
const NO_GLOW = "0 0 0 0 rgba(223,151,112,0), 0 0 0 0 rgba(223,151,112,0)"

const chip =
  "relative z-10 inline-flex items-center gap-3 rounded-ctl border px-4 py-2.5 text-left text-[.9375rem] font-medium transition-colors duration-300 lg:w-full"

const reduceQuery = "(prefers-reduced-motion: reduce)"
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(reduceQuery)
  m.addEventListener("change", cb)
  return () => m.removeEventListener("change", cb)
}
// The server snapshot says "reduced", so nothing auto-plays before the client knows the real setting.
const useReducedMotion = () => useSyncExternalStore(subscribe, () => window.matchMedia(reduceQuery).matches, () => true)

// White tile so dark logos stay readable in dark mode. A missing or broken logo shows the first letter.
function Logo({ p }: { p: Partner }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative grid size-14 shrink-0 place-items-center rounded-ctl bg-white sm:size-16">
      {p.logo && !failed ? (
        <Image
          src={p.logo}
          alt={p.logoAlt}
          fill
          sizes="64px"
          className={`object-contain p-2 ${p.dim ? "opacity-50 grayscale" : ""}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-display text-[1.125rem] font-medium text-navy-900">{p.name.charAt(0)}</span>
      )}
    </div>
  )
}

// Every card stays on the page. A tour walks through the categories on its own: a copper pill slides to the
// next category, its cards flip forward and glow, and the rest blur back. Cards also tilt toward the pointer.
// A chip click, or the pause button, takes over from the tour. Reduced motion gets the chips and no tour.
export function IntegrationsCatalog({ partners, groups }: { partners: Partner[]; groups: PartnerGroup[] }) {
  const order = useMemo<(string | null)[]>(() => [null, ...Array.from(new Set(partners.map((p) => p.category)))], [partners])
  const [active, setActive] = useState<string | null>(null)
  const [playing, setPlaying] = useState(true)
  const [inView, setInView] = useState(false)
  const [hover, setHover] = useState(false)
  const reduced = useReducedMotion()
  const touring = playing && inView && !hover && !reduced

  const root = useRef<HTMLDivElement>(null)
  const chips = useRef<HTMLDivElement>(null)
  const pill = useRef<HTMLSpanElement>(null)
  const bar = useRef<HTMLSpanElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const placed = useRef(false)
  const spoken = useRef(false)

  // The tour only runs while the catalog is on screen.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "-20% 0px -20% 0px" })
    io.observe(root.current!)
    return () => io.disconnect()
  }, [])

  // Tour clock: the bar in the pill fills, then the next category takes over.
  useEffect(() => {
    gsap.set(bar.current, { scaleX: 0 })
    if (!touring) return
    const t = gsap.to(bar.current, {
      scaleX: 1,
      duration: DWELL,
      ease: "none",
      onComplete: () => setActive((a) => order[(order.indexOf(a) + 1) % order.length]),
    })
    return () => {
      t.kill()
    }
  }, [touring, active, order])

  // The pill slides behind the active chip. It snaps (no tween) on the first paint and on resize.
  useEffect(() => {
    const box = chips.current!
    const place = (d: number) => {
      const el = box.querySelector<HTMLElement>("[data-chip][aria-pressed=true]")
      if (!el) return
      gsap.to(pill.current, {
        x: el.offsetLeft,
        y: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        opacity: 1,
        duration: d,
        ease: "power3.inOut",
        overwrite: true,
      })
      box.dataset.pill = "on"
    }
    place(placed.current && !reduced ? 0.6 : 0)
    placed.current = true
    const ro = new ResizeObserver(() => place(0))
    ro.observe(box)
    return () => ro.disconnect()
  }, [active, reduced])

  // Spotlight: the active category's cards glow and flip forward, the others blur back.
  useEffect(() => {
    if (!spoken.current) {
      spoken.current = true
      return
    }
    const cards = gsap.utils.toArray<HTMLElement>("[data-card]", root.current)
    const hit = (c: HTMLElement) => !active || c.dataset.cat === active
    const on = cards.filter(hit)
    const d = reduced ? 0 : 0.55
    gsap.to(on, {
      opacity: 1,
      scale: active ? 1.02 : 1,
      filter: "blur(0px)",
      boxShadow: active ? GLOW : NO_GLOW,
      duration: d,
      ease: "power3.out",
      overwrite: "auto",
    })
    gsap.to(
      cards.filter((c) => !hit(c)),
      { opacity: 0.2, scale: 0.96, filter: "blur(2px)", boxShadow: NO_GLOW, duration: d, ease: "power2.out", overwrite: "auto" },
    )
    if (active && !reduced) {
      gsap.fromTo(
        on.map((c) => c.parentElement),
        { rotationY: -70, transformPerspective: 900 },
        { rotationY: 0, duration: 0.95, ease: "back.out(1.6)", stagger: 0.08, overwrite: "auto" },
      )
    }
  }, [active, reduced])

  // Cards rise in with a tilt as they scroll into view, and lean toward a fine pointer.
  useEffect(() => {
    const mm = gsap.matchMedia(root.current!)
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const wraps = gsap.utils.toArray<HTMLElement>("[data-enter]", root.current)
      gsap.set(wraps, { opacity: 0, y: 60, rotationX: -30, transformPerspective: 900, transformOrigin: "50% 100%" })
      ScrollTrigger.batch(wraps, {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, rotationX: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" }),
      })
    })
    mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const ctl = new AbortController()
      gsap.utils.toArray<HTMLElement>("[data-card]", root.current).forEach((card) => {
        gsap.set(card, { transformPerspective: 900 })
        const rx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" })
        const ry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" })
        card.addEventListener(
          "pointermove",
          (e) => {
            const r = card.getBoundingClientRect()
            ry(((e.clientX - r.left) / r.width - 0.5) * 12)
            rx(-((e.clientY - r.top) / r.height - 0.5) * 12)
          },
          { signal: ctl.signal },
        )
        card.addEventListener("pointerleave", () => (rx(0), ry(0)), { signal: ctl.signal })
      })
      return () => ctl.abort()
    })
    return () => mm.revert()
  }, [])

  // A chip click also scrolls to that category's first card ("All" goes to the top of the list).
  const pick = (c: string | null) => {
    setPlaying(false)
    setActive(c)
    const card = c ? Array.from(root.current!.querySelectorAll<HTMLElement>("[data-card]")).find((el) => el.dataset.cat === c) : undefined
    ;(card ?? list.current)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: card ? "center" : "start" })
  }

  return (
    <div ref={root} className="grid items-start gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
      <aside className="lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-[1.5rem] font-medium leading-[1.15]">Integration categories</h2>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause category tour" : "Play category tour"}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-h-line bg-h-surface text-h-accent transition-colors duration-200 hover:border-copper-400"
            >
              {playing ? <PauseIcon className="size-4" /> : <PlayIcon className="size-4" />}
            </button>
          )}
        </div>
        <div ref={chips} data-pill="off" className="group relative mt-5 flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
          <span
            ref={pill}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-0 overflow-hidden rounded-ctl bg-copper-400 opacity-0"
          >
            <span
              ref={bar}
              className="absolute inset-x-0 bottom-0 h-1 bg-navy-900/35"
              style={{ transform: "scaleX(0)", transformOrigin: "0 50%" }}
            />
          </span>
          {order.map((c) => {
            const on = active === c
            return (
              <button
                key={c ?? "ALL"}
                type="button"
                data-chip
                aria-pressed={on}
                onClick={() => pick(c)}
                className={`${chip} ${on ? "border-transparent bg-copper-400 text-navy-900 group-data-[pill=on]:bg-transparent" : "border-h-line hover:border-copper-400"}`}
              >
                <span className={on ? "" : "text-h-accent"}>{icons[c ?? "ALL"]}</span>
                {c ?? "All"}
              </button>
            )
          })}
        </div>
      </aside>

      <div ref={list} className="grid scroll-mt-24 gap-10" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
        {groups.map((g) => {
          const items = partners.filter((p) => p.group === g.id)
          if (!items.length) return null
          return (
            <section key={g.id} aria-labelledby={`grp-${g.id}`}>
              <h3 id={`grp-${g.id}`} className="font-display text-[1.25rem] font-medium leading-[1.15]">{g.title}</h3>
              <ul className="mt-5 grid gap-4 md:grid-cols-2 md:gap-6">
                {items.map((p) => (
                  <li key={p.name} data-enter>
                    <div
                      data-card
                      data-cat={p.category}
                      className="flex h-full flex-col rounded-card border border-h-line bg-h-surface p-6 sm:p-8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-display text-[1.125rem] font-medium leading-[1.2]">{p.name}</h4>
                          {p.status === "Coming Soon" && (
                            <span className="mt-2 inline-block rounded-full border border-h-line bg-h-surface2 px-3 py-1 text-[.75rem] font-semibold text-h-accent">
                              {p.status}
                            </span>
                          )}
                        </div>
                        <Logo p={p} />
                      </div>
                      <p className="mt-4 text-[.9375rem] text-h-muted">{p.description}</p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                        <span className="rounded-full bg-h-surface2 px-3 py-1 text-[.75rem] font-semibold text-h-accent">
                          {p.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[.875rem] font-medium text-h-accent">
                          Learn more <ArrowRightIcon className="size-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
