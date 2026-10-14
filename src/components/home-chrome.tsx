"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { DemoLink } from "@/components/views/home-client"
import { footer, nav } from "@/components/views/home-content"
import * as ui from "@/components/views/home-ui"

type MenuLink = { title: string; text: string; href: string }

// Nav links and menu buttons share one look.
const navLink =
  "whitespace-nowrap border-b-2 border-transparent py-1.5 text-[.9375rem] font-medium text-fog-300 transition-[color,border-color] duration-200 hover:border-copper-400 hover:text-white"
const summary = `${navLink} flex cursor-pointer list-none items-center gap-2 group-open:border-copper-400 group-open:text-white [&::-webkit-details-marker]:hidden after:size-1.5 after:-translate-y-0.5 after:rotate-45 after:border-current after:[border-width:0_1.5px_1.5px_0] after:transition-transform after:duration-200 after:ease-soft group-open:after:translate-y-px group-open:after:rotate-[225deg]`
const panel =
  "absolute left-[-16px] top-[calc(100%+14px)] z-40 min-w-[300px] max-w-[calc(100vw-32px)] animate-menu-in rounded-card border border-h-line bg-h-surface p-2.5 text-h-text shadow-[0_30px_60px_-30px_rgba(0,0,0,.55)]"
const footLink = "text-fog-300 transition-colors duration-200 hover:text-white hover:underline hover:decoration-copper-400 hover:underline-offset-4"

function MenuLinks({ links }: { links: MenuLink[] }) {
  return links.map((l) => (
    <Link key={l.title} href={l.href} className="block rounded-ctl px-3 py-2.5 transition-colors duration-150 hover:bg-h-surface2">
      <b className={`${ui.label} block text-[.9375rem]`}>{l.title}</b>
      <span className="block text-[.8125rem] leading-[1.35] text-h-muted">{l.text}</span>
    </Link>
  ))
}

function Brand() {
  return (
    <Link className="flex items-center" href="/" aria-label="Bleaum home">
      <Image src="/brand/bleaum-lockup-on-dark.svg" alt="Bleaum" width={108} height={40} className="h-10 w-auto" priority />
    </Link>
  )
}

export function HomeHeader() {
  const root = useRef<HTMLElement>(null)

  // Menus: one open at a time, close on outside click, link click or Escape.
  useEffect(() => {
    const menus = [...root.current!.querySelectorAll("details")]
    const closeExcept = (keep?: Element | null) => menus.forEach((m) => { if (m !== keep) m.open = false })
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element
      closeExcept(t.closest("details"))
      if (t.closest("details a")) closeExcept()
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeExcept()
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement
      if (d.open) closeExcept(d)
    }
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    root.current!.addEventListener("toggle", onToggle, true)
    const el = root.current!
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
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
        <div className={`${ui.wrap} flex min-h-[76px] flex-wrap items-center gap-x-9 gap-y-3 py-3 max-md:gap-x-4 max-md:gap-y-2`}>
          <Brand />
          <nav className="mr-auto flex items-center gap-7 max-md:hidden" aria-label="Main">
            <details className="group relative">
              <summary className={summary}>Product</summary>
              <div className={`${panel} grid min-w-[660px] grid-cols-2 gap-x-5 gap-y-1 p-3.5`}>
                {nav.product.map((g) => (
                  <div key={g.heading}>
                    <h3 className="mb-1 ml-3 mt-1.5 font-body text-[.8125rem] font-semibold leading-[normal] tracking-[0] text-h-muted">{g.heading}</h3>
                    <MenuLinks links={g.links} />
                  </div>
                ))}
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
          <div className="flex items-center gap-2.5">
            <Link className={`${ui.btnQuietOnDark} max-md:hidden`} href={nav.signInHref}>{nav.signIn}</Link>
            <DemoLink className={`${ui.btnCopper} max-md:ml-auto max-md:min-h-10 max-md:px-3.5 max-md:py-2`}>{nav.demo}</DemoLink>
          </div>
          <nav className="hidden w-full gap-[22px] overflow-x-auto [scrollbar-width:none] max-md:order-3 max-md:flex" aria-label="Main (compact)">
            {nav.compact.map((l) => (
              <Link key={l.text} href={l.href} className={navLink}>{l.text}</Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

const socialIcons = { LinkedIn: LinkedinIcon, Twitter: TwitterIcon, Instagram: InstagramIcon }

export function HomeFooter() {
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
