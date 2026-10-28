"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { InstagramIcon, LinkedinIcon, MenuIcon, TwitterIcon, XIcon } from "lucide-react"
import { DemoLink } from "@/components/views/home-client"
import { footer, nav } from "@/components/views/home-content"
import * as ui from "@/components/views/home-ui"

type MenuLink = { title: string; text: string; href: string }

// Nav links and menu buttons share one look.
const navLink =
  "whitespace-nowrap border-b-2 border-transparent py-1.5 text-[.9375rem] font-medium text-fog-300 transition-[color,border-color] duration-200 hover:border-copper-400 hover:text-white"
const summary = `${navLink} flex cursor-pointer list-none items-center gap-2 group-open:border-copper-400 group-open:text-white [&::-webkit-details-marker]:hidden after:size-1.5 after:-translate-y-0.5 after:rotate-45 after:border-current after:[border-width:0_1.5px_1.5px_0] after:transition-transform after:duration-200 after:ease-soft group-open:after:translate-y-px group-open:after:rotate-[225deg]`
// Same trigger inside the mobile panel: full-width row with the chevron on the right.
const mobileSummary = `${summary} justify-between border-b border-b-white/10 py-3.5 text-base`
const footLink ="text-fog-300 transition-colors duration-200 hover:text-white hover:underline hover:decoration-copper-400 hover:underline-offset-4"

// Mini halftone bloom (the brand mark's motif): dots swell and brighten when the row is hovered.
const bloomDots = ["size-[3px]", "size-1", "size-[3px]", "size-1", "size-[7px]", "size-1", "size-[3px]", "size-1", "size-[3px]"]

function MenuLinks({ links }: { links: MenuLink[] }) {
  return links.map((l) => (
    <Link
      key={l.title}
      href={l.href}
      className="group/item flex items-center gap-3.5 rounded-card p-2.5 transition-colors duration-200 hover:bg-white/[.06] focus-visible:bg-white/[.06]"
    >
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 grid-cols-3 place-items-center rounded-ctl bg-white/[.05] p-2 ring-1 ring-white/10 transition-[background-color,box-shadow] duration-200 group-hover/item:bg-copper-400/15 group-hover/item:ring-copper-400/50"
      >
        {bloomDots.map((d, i) => (
          <i
            key={i}
            className={`${d} rounded-full bg-copper-400 opacity-60 transition-[transform,opacity] duration-250 ease-soft group-hover/item:scale-[1.4] group-hover/item:opacity-100`}
          />
        ))}
      </span>
      <span className="min-w-0 flex-1">
        <b className={`${ui.label} block text-[.9375rem] text-white`}>{l.title}</b>
        <span className="block text-[.8125rem] leading-[1.35] text-fog-300">{l.text}</span>
      </span>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-4 shrink-0 -translate-x-1.5 text-copper-400 opacity-0 transition-[opacity,transform] duration-200 ease-soft group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  ))
}

function Brand() {
  return (
    <Link className="flex items-center gap-1.5" href="/" aria-label="Bleaum home">
      <Image src="/brand/bleaum-dots.svg" alt="" width={30} height={30} className="size-[30px]" priority />
      {/* Wordmark vector lifted from bleaum-lockup-on-dark.svg so the header matches the logo exactly. */}
      <Image src="/brand/bleaum-wordmark.svg" alt="" width={79} height={16} className="h-4 w-auto max-sm:h-3.5" priority />
    </Link>
  )
}

// Desktop nav motion (GSAP, same feel as clay.com): expo-out everywhere, open slow and soft, close fast.
const ease = "expo.out"
const dur = { in: 0.3, out: 0.2, morph: 0.4 }
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches
const MENUS = ["product", "resources", "company"] as const
type Menu = (typeof MENUS)[number]

// Label that rolls up and out while a copy rolls in from below. CSS only: slower in (.8s) than out (.7s).
const roll = "block transition-transform duration-700 ease-expo group-hover/nav:duration-800 motion-reduce:transition-none"
const item =
  "group/nav whitespace-nowrap border-b-2 border-transparent py-1.5 text-[.9375rem] font-medium text-fog-300 transition-[color,border-color] duration-200 hover:border-copper-400 hover:text-white aria-expanded:border-copper-400 aria-expanded:text-white"

function Roll({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className={`${roll} group-hover/nav:-translate-y-full`}>{children}</span>
      <span aria-hidden="true" className={`${roll} absolute inset-0 translate-y-full group-hover/nav:translate-y-0`}>{children}</span>
    </span>
  )
}

function DesktopNav() {
  const [active, setActive] = useState<Menu | null>(null)
  const zone = useRef<HTMLElement>(null)
  const pos = useRef<HTMLDivElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const body = useRef<HTMLDivElement>(null)
  const arrow = useRef<HTMLSpanElement>(null)
  const btns = useRef<Partial<Record<Menu, HTMLButtonElement | null>>>({})
  const shown = useRef<Menu | null>(null)
  const openT = useRef(0)
  const closeT = useRef(0)

  // Hover intent: open after 80ms, close 150ms after the pointer leaves nav + panel (they share one hover zone).
  const hover = (menu: Menu | null) => {
    clearTimeout(closeT.current)
    clearTimeout(openT.current)
    openT.current = window.setTimeout(() => setActive(menu), 80)
  }
  const leave = () => {
    clearTimeout(openT.current)
    closeT.current = window.setTimeout(() => setActive(null), 150)
  }

  // One panel for every menu: it opens from nothing, closes faster, and when you move to another menu it
  // changes height, the arrow slides to the new item and the new links nudge in from the side you came from.
  useEffect(() => {
    const was = shown.current
    shown.current = active
    const p = pos.current!
    const c = card.current!
    const b = body.current!
    const a = arrow.current!
    const blocks = [...b.querySelectorAll<HTMLElement>("[data-menu]")]
    const calm = reduced()
    const prevH = b.offsetHeight
    gsap.killTweensOf([c, b, a, ...blocks])

    if (!active) {
      if (was) {
        gsap.to(c, {
          opacity: 0, y: calm ? 0 : -8, scale: calm ? 1 : 0.98,
          duration: calm ? 0.1 : dur.out, ease: "power2.inOut",
          onComplete: () => { gsap.set(p, { display: "none" }) },
        })
      }
      return
    }

    blocks.forEach((m) => { m.style.display = m.dataset.menu === active ? "" : "none" })
    gsap.set(b, { clearProps: "height" })
    gsap.set(p, { display: "block" })
    const t = btns.current[active]!.getBoundingClientRect()
    const x = t.left + t.width / 2 - p.getBoundingClientRect().left

    if (!was) {
      gsap.set(a, { x })
      gsap.fromTo(c, calm ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: calm ? 0.15 : dur.in, ease })
      return
    }

    gsap.set(c, { opacity: 1, y: 0, scale: 1 })
    if (calm) return void gsap.set(a, { x })
    const dir = MENUS.indexOf(active) > MENUS.indexOf(was) ? 1 : -1
    gsap.fromTo(b, { height: prevH }, { height: b.offsetHeight, duration: dur.morph, ease, clearProps: "height" })
    gsap.to(a, { x, duration: dur.morph, ease })
    gsap.fromTo(blocks.find((m) => m.dataset.menu === active)!, { opacity: 0, x: 8 * dir }, { opacity: 1, x: 0, duration: dur.morph, ease })
  }, [active])

  // Escape closes and hands focus back to the trigger; a click anywhere outside closes (touch screens never "leave").
  useEffect(() => {
    const els = [pos.current, card.current, body.current, arrow.current]
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !shown.current) return
      if (zone.current!.contains(document.activeElement)) btns.current[shown.current]?.focus()
      setActive(null)
    }
    const onClick = (e: MouseEvent) => zone.current!.contains(e.target as Node) || setActive(null)
    document.addEventListener("keydown", onKey)
    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("click", onClick)
      clearTimeout(openT.current)
      clearTimeout(closeT.current)
      gsap.killTweensOf(els)
    }
  }, [])

  const trigger = (menu: Menu, label: string) => (
    <button
      type="button"
      ref={(el) => { btns.current[menu] = el }}
      aria-haspopup="true"
      aria-expanded={active === menu}
      aria-controls="nav-panel"
      className={item}
      onMouseEnter={() => hover(menu)}
      onClick={() => setActive(menu)}
      onKeyDown={(e) => {
        if (e.key !== "ArrowDown") return
        e.preventDefault()
        setActive(menu)
        requestAnimationFrame(() => body.current!.querySelector<HTMLElement>(`[data-menu=${menu}] a`)?.focus())
      }}
    >
      <Roll>{label}</Roll>
    </button>
  )
  const plain = (href: string, label: string) => (
    <Link href={href} className={item} onMouseEnter={() => hover(null)}>
      <Roll>{label}</Roll>
    </Link>
  )

  return (
    // No `relative` here: the panel positions against the header and spans its full width.
    // `self-stretch` runs the hover zone down to the row's padding, where the panel's invisible bridge takes over.
    <nav
      ref={zone}
      aria-label="Main"
      className="mr-auto flex items-center gap-5 self-stretch max-lg:hidden xl:gap-7"
      onMouseEnter={() => clearTimeout(closeT.current)}
      onMouseLeave={leave}
      // Keyboard: tabbing to any other top-level item, or out of the nav, closes the open panel.
      onFocus={(e) => {
        if (!pos.current!.contains(e.target) && e.target !== btns.current[shown.current!]) setActive(null)
      }}
      onBlur={(e) => zone.current!.contains(e.relatedTarget) || setActive(null)}
    >
      {plain("/operations/integrations", "Integrations")}
      {plain(nav.industries.href, nav.industries.text)}
      {trigger("product", "Product")}
      {trigger("resources", "Resources")}
      {trigger("company", "Company")}
      <div
        ref={pos}
        id="nav-panel"
        className="absolute inset-x-0 top-full z-40 hidden before:absolute before:inset-x-0 before:-top-3 before:h-3"
        onClick={(e) => (e.target as Element).closest("a") && setActive(null)}
      >
        <div ref={card} className="relative origin-top border-t border-t-copper-400/50 bg-navy-950 text-white shadow-[0_40px_60px_-30px_rgba(0,0,0,.7)]">
          <div ref={body} className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-[radial-gradient(circle,rgba(223,151,112,.5)_1.4px,transparent_1.9px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_at_100%_100%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_100%_100%,#000,transparent_70%)]"
            />
            <div data-menu="product" className={`${ui.wrap} relative grid gap-x-10 py-8 md:grid-cols-2`}>
              {nav.product.map((g) => (
                <div key={g.heading}>
                  <h3 className="mb-3 flex items-center gap-3 px-2.5 font-body text-[.75rem] font-semibold uppercase leading-[normal] tracking-[.08em] text-copper-400 after:h-[3px] after:flex-1 after:bg-[radial-gradient(circle,rgba(223,151,112,.6)_1px,transparent_1.5px)] after:bg-[length:8px_3px]">
                    {g.heading}
                  </h3>
                  <div className="grid gap-1">
                    <MenuLinks links={g.links} />
                  </div>
                </div>
              ))}
            </div>
            <div data-menu="resources" className={`${ui.wrap} relative grid gap-1 py-8 md:grid-cols-2 md:gap-x-10`}>
              <MenuLinks links={nav.resources} />
            </div>
            <div data-menu="company" className={`${ui.wrap} relative grid gap-1 py-8 md:grid-cols-2 md:gap-x-10`}>
              <MenuLinks links={nav.company} />
            </div>
          </div>
          {/* Notch on the panel's top edge; slides under whichever nav item is open. */}
          <span ref={arrow} aria-hidden="true" className="pointer-events-none absolute -top-px left-0 size-0">
            <i className="absolute left-0 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-copper-400/50 bg-navy-950" />
          </span>
        </div>
      </div>
    </nav>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const bar = useRef<HTMLDivElement>(null)

  // Slides away on scroll down, returns on any scroll up so the nav is always one flick away.
  // Stays put near the top, while the mobile menu is open or while keyboard focus is inside it
  // (:focus-visible, not :focus-within, because a mouse click leaves focus on the link/button for good).
  useEffect(() => {
    const el = bar.current!
    let last = scrollY
    const onScroll = () => {
      const dy = scrollY - last
      if (Math.abs(dy) < 6) return
      last = scrollY
      const keep = scrollY < el.offsetHeight || el.querySelector(":focus-visible, #mobile-menu")
      el.toggleAttribute("data-hidden", dy > 0 && !keep)
    }
    addEventListener("scroll", onScroll, { passive: true })
    return () => removeEventListener("scroll", onScroll)
  }, [])

  // Mobile panel: close on outside click, link click or Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // composedPath, not closest(): React swaps the button icon on toggle, so e.target is already detached here.
      const inMobile = e.composedPath().some((n) => n instanceof Element && n.matches("#mobile-menu, [aria-controls=mobile-menu]"))
      if (!inMobile) setMobileOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false)
    // Growing past the mobile breakpoint puts the desktop nav back; drop the panel state with it.
    const desktop = matchMedia("(min-width: 1024px)")
    const onResize = () => desktop.matches && setMobileOpen(false)
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onResize)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onResize)
    }
  }, [])

  return (
    <div
      ref={bar}
      onFocus={() => bar.current?.removeAttribute("data-hidden")}
      className={`${ui.root} sticky top-0 z-50 transition-transform duration-300 ease-soft data-[hidden]:-translate-y-full motion-reduce:transition-none`}
    >
      <a className="absolute left-4 top-[-60px] z-[60] rounded-chip bg-copper-400 px-3.5 py-2 text-navy-900 focus:top-3" href="#main">
        Skip to content
      </a>
      <header className="relative z-30 bg-navy-900 text-white">
        <div className="bg-navy-950 text-[.8125rem] text-fog-300">
          <div className={`${ui.wrap} flex min-h-10 items-center justify-between gap-4 max-md:justify-end`}>
            <span className="max-md:hidden">{nav.tagline}</span>
            <nav className="flex gap-1" aria-label="Utility">
              {nav.utility.map((u) => (
                <Link
                  key={u.text}
                  href={u.href}
                  className="inline-flex min-h-8 items-center rounded-chip px-3 text-fog-300 transition-colors duration-200 hover:text-white"
                >
                  {u.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className={`${ui.wrap} flex min-h-16 items-center gap-x-3 py-3 lg:min-h-[76px] lg:gap-x-6 xl:gap-x-9`}>
          <Brand />
          <DesktopNav />
          <div className="flex items-center gap-2 max-lg:ml-auto sm:gap-2.5">
            <DemoLink className={`${ui.btnCopper} group gap-2 max-lg:min-h-10 max-lg:px-3.5 max-lg:py-2 max-sm:px-3 max-sm:text-sm`}>
              {nav.demo}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4 transition-transform duration-400 ease-quart group-hover:translate-x-[3px] max-sm:hidden motion-reduce:transition-none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </DemoLink>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-ctl text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.3)] transition-shadow duration-200 hover:shadow-[inset_0_0_0_1.5px_#fff] lg:hidden"
            >
              {mobileOpen ? <XIcon size={20} aria-hidden="true" /> : <MenuIcon size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav
            id="mobile-menu"
            aria-label="Main (mobile)"
            onClick={(e) => (e.target as Element).closest("a") && setMobileOpen(false)}
            className="absolute inset-x-0 top-full z-40 max-h-[75dvh] animate-menu-in overflow-y-auto overscroll-contain border-t border-t-copper-400/50 bg-navy-950 shadow-[0_40px_60px_-30px_rgba(0,0,0,.7)] lg:hidden"
          >
            <div className={`${ui.wrap} py-2`}>
              <Link href="/operations/integrations" className={`${mobileSummary} after:hidden`}>Integrations</Link>
              <Link href={nav.industries.href} className={`${mobileSummary} after:hidden`}>{nav.industries.text}</Link>
              <details className="group">
                <summary className={mobileSummary}>Product</summary>
                <div className="grid gap-4 py-3 md:grid-cols-2">
                  {nav.product.map((g) => (
                    <div key={g.heading}>
                      <h3 className="mb-2 px-2.5 font-body text-[.75rem] font-semibold uppercase leading-[normal] tracking-[.08em] text-copper-400">{g.heading}</h3>
                      <div className="grid gap-1">
                        <MenuLinks links={g.links} />
                      </div>
                    </div>
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className={mobileSummary}>Resources</summary>
                <div className="grid gap-1 py-3 md:grid-cols-2"><MenuLinks links={nav.resources} /></div>
              </details>
              <details className="group">
                <summary className={mobileSummary}>Company</summary>
                <div className="grid gap-1 py-3 md:grid-cols-2"><MenuLinks links={nav.company} /></div>
              </details>
            </div>
          </nav>
        )}
      </header>
    </div>
  )
}

const socialIcons = { LinkedIn: LinkedinIcon, Twitter: TwitterIcon, Instagram: InstagramIcon }

export function SiteFooter() {
  return (
    <div className={ui.root}>
      <footer className="bg-navy-950 py-14 text-fog-300">
        <div className={ui.wrap}>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Brand />
              <p className="mt-3">{nav.tagline}</p>
              <div className="mt-4 flex gap-4">
                {footer.social.map((s) => {
                  const Icon = socialIcons[s.name as keyof typeof socialIcons]
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="inline-flex text-fog-300 transition-[color,transform] duration-200 ease-soft hover:-translate-y-0.5 hover:text-white"
                    >
                      <Icon width={20} height={20} />
                    </a>
                  )
                })}
              </div>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 font-body text-[.9375rem] font-semibold leading-[normal] tracking-[0] text-white">{col.title}</h3>
                <ul className="[&>li+li]:mt-2">
                  {col.links.map((l) => (
                    <li key={l.text}>
                      <Link href={l.href} className={footLink}>{l.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-white/[.12] pt-5 text-[.875rem]">
            <span>© {new Date().getFullYear()} Bleaum. All rights reserved.</span>
            <span>
              {footer.legal.map((l, i) => (
                <span key={l.text}>
                  {i > 0 && " · "}
                  <Link href={l.href} className={footLink}>{l.text}</Link>
                </span>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
