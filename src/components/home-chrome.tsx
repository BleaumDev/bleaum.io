"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { DemoLink } from "@/components/views/home-client"
import { footer, nav } from "@/components/views/home-content"
import { homeFonts } from "@/components/views/home-fonts"
import styles from "@/components/views/home.module.css"

type MenuLink = { title: string; text: string; href: string }

function MenuLinks({ links }: { links: MenuLink[] }) {
  return links.map((l) => (
    <Link key={l.title} href={l.href}>
      <b>{l.title}</b>
      <span>{l.text}</span>
    </Link>
  ))
}

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Bleaum home">
      <Image src="/brand/bleaum-lockup-on-dark.svg" alt="Bleaum" width={108} height={40} priority />
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
    <div className={`${styles.home} ${homeFonts}`}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.top} ref={root}>
        <div className={styles.util}>
          <div className={`${styles.wrap} ${styles.utilIn}`}>
            <span>{nav.tagline}</span>
            <nav aria-label="Utility">
              {nav.utility.map((u) => (
                <Link key={u.text} href={u.href}>{u.text}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className={`${styles.wrap} ${styles.topIn}`}>
          <Brand />
          <nav className={`${styles.nav} ${styles.navD}`} aria-label="Main">
            <details className={styles.menu}>
              <summary>Product</summary>
              <div className={`${styles.menuPanel} ${styles.wide}`}>
                {nav.product.map((g) => (
                  <div key={g.heading}>
                    <h3>{g.heading}</h3>
                    <MenuLinks links={g.links} />
                  </div>
                ))}
              </div>
            </details>
            <Link href="/operations/integrations">Integrations</Link>
            <Link href={nav.industries.href}>{nav.industries.text}</Link>
            <details className={styles.menu}>
              <summary>Resources</summary>
              <div className={styles.menuPanel}>
                <MenuLinks links={nav.resources} />
              </div>
            </details>
            <details className={styles.menu}>
              <summary>Company</summary>
              <div className={styles.menuPanel}>
                <MenuLinks links={nav.company} />
              </div>
            </details>
          </nav>
          <div className={styles.topActions}>
            <Link className={`${styles.btn} ${styles.quiet}`} href={nav.signInHref}>{nav.signIn}</Link>
            <DemoLink className={`${styles.btn} ${styles.copper}`}>{nav.demo}</DemoLink>
          </div>
          <nav className={`${styles.nav} ${styles.navM}`} aria-label="Main (compact)">
            {nav.compact.map((l) => (
              <Link key={l.text} href={l.href}>{l.text}</Link>
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
    <div className={`${styles.home} ${homeFonts}`}>
      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <div className={styles.footIn}>
            <div>
              <Brand />
              <p>{nav.tagline}</p>
              <div className={styles.social}>
                {footer.social.map((s) => {
                  const Icon = socialIcons[s.name as keyof typeof socialIcons]
                  return (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                      <Icon width={20} height={20} />
                    </a>
                  )
                })}
              </div>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.text}>
                      <Link href={l.href}>{l.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.legal}>
            <span>© {new Date().getFullYear()} Bleaum. All rights reserved.</span>
            <span>
              {footer.legal.map((l, i) => (
                <span key={l.text}>
                  {i > 0 && " · "}
                  <Link href={l.href}>{l.text}</Link>
                </span>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
