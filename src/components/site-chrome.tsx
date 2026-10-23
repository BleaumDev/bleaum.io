"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { InstagramIcon, LinkedinIcon, MenuIcon, TwitterIcon, XIcon } from "lucide-react"
import { DemoLink } from "@/components/views/home-client"
import { footer, nav } from "@/components/views/home-content"
import * as ui from "@/components/views/home-ui"

type MenuLink = { title: string; text: string; href: string }

// Nav links and menu buttons share one look.
const navLink =
  "whitespace-nowrap border-b-2 border-transparent py-1.5 text-[.9375rem] font-medium text-fog-300 transition-[color,border-color] duration-200 hover:border-copper-400 hover:text-white"
const summary = `${navLink} flex cursor-pointer list-none items-center gap-2 group-open:border-copper-400 group-open:text-white [&::-webkit-details-marker]:hidden after:size-1.5 after:-translate-y-0.5 after:rotate-45 after:border-current after:[border-width:0_1.5px_1.5px_0] after:transition-transform after:duration-200 after:ease-soft group-open:after:translate-y-px group-open:after:rotate-[225deg]`
// Small dropdowns float under their button; the Product mega panel hangs from the header edge.
const panel =
  "absolute left-[-16px] top-[calc(100%+24px)] z-40 grid w-[340px] max-w-[calc(100vw-32px)] animate-menu-in gap-1 rounded-card border border-white/10 border-t-copper-400/60 bg-navy-950 p-2 text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]"
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

export function SiteHeader() {
  const root = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Menus: one open at a time, close on outside click, link click or Escape.
  useEffect(() => {
    const menus = [...root.current!.querySelectorAll("details")]
    const closeExcept = (keep?: Element | null) => menus.forEach((m) => { if (m !== keep) m.open = false })
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element
      closeExcept(t.closest("details"))
      if (t.closest("details a")) closeExcept()
      // composedPath, not closest(): React swaps the button icon on toggle, so `t` is already detached here.
      const inMobile = e.composedPath().some((n) => n instanceof Element && n.matches("#mobile-menu, [aria-controls=mobile-menu]"))
      if (!inMobile) setMobileOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      closeExcept()
      setMobileOpen(false)
    }
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement
      if (d.open) closeExcept(d)
    }
    // Growing past the mobile breakpoint puts the desktop nav back; drop the panel state with it.
    const desktop = matchMedia("(min-width: 1024px)")
    const onResize = () => desktop.matches && setMobileOpen(false)
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onResize)
    root.current!.addEventListener("toggle", onToggle, true)
    const el = root.current!
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onResize)
      el.removeEventListener("toggle", onToggle, true)
    }
  }, [])

  return (
    <div className={ui.root}>
      <a className="absolute left-4 top-[-60px] z-[60] rounded-chip bg-copper-400 px-3.5 py-2 text-navy-900 focus:top-3" href="#main">
        Skip to content
      </a>
      <header className="relative z-30 bg-navy-900 text-white" ref={root}>
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
          <nav className="mr-auto flex items-center gap-5 max-lg:hidden xl:gap-7" aria-label="Main">
            {/* No `relative` here: the panel positions against the header and spans its full width. */}
            <details className="group">
              <summary className={summary}>Product</summary>
              <div className="absolute inset-x-0 top-full z-40 animate-menu-in overflow-hidden border-t border-t-copper-400/50 bg-navy-950 shadow-[0_40px_60px_-30px_rgba(0,0,0,.7)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-[radial-gradient(circle,rgba(223,151,112,.5)_1.4px,transparent_1.9px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_at_100%_100%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_100%_100%,#000,transparent_70%)]"
                />
                <div className={`${ui.wrap} relative grid gap-x-10 py-8 md:grid-cols-2`}>
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
              </div>
            </details>
            <Link href="/operations/integrations" className={navLink}>Integrations</Link>
            <Link href={nav.industries.href} className={navLink}>{nav.industries.text}</Link>
            <details className="group relative">
              <summary className={summary}>Resources</summary>
              <div className={panel}>
                <MenuLinks links={nav.resources} />
              </div>
            </details>
            <details className="group relative">
              <summary className={summary}>Company</summary>
              <div className={panel}>
                <MenuLinks links={nav.company} />
              </div>
            </details>
          </nav>
          <div className="flex items-center gap-2 max-lg:ml-auto sm:gap-2.5">
            <DemoLink className={`${ui.btnCopper} max-lg:min-h-10 max-lg:px-3.5 max-lg:py-2 max-sm:px-3 max-sm:text-sm`}>{nav.demo}</DemoLink>
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
              <Link href="/operations/integrations" className={`${mobileSummary} after:hidden`}>Integrations</Link>
              <Link href={nav.industries.href} className={`${mobileSummary} after:hidden`}>{nav.industries.text}</Link>
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
