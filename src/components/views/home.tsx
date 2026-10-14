import type { CSSProperties, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./home.module.css"
import { DemoLink, RevealOnScroll } from "./home-client"
import { homeFonts } from "./home-fonts"
import * as c from "./home-content"

// Marks an element for the scroll reveal; `i` staggers siblings.
const rv = (i = 0) => ({ "data-reveal": "", style: { "--i": i } as CSSProperties })
const delay = (i: number) => ({ "--i": i }) as CSSProperties

// Halftone "bloom" from the brand mark: dot size fades with distance from the center.
const BLOOM_DOTS = (() => {
  const size = 760, gap = 34, reach = 370, rMax = 21, fall = 400, stagger = 2.2, mid = size / 2
  const dots: ReactNode[] = []
  for (let y = mid % gap; y <= size; y += gap) {
    for (let x = mid % gap; x <= size; x += gap) {
      const d = Math.hypot(x - mid, y - mid)
      if (d > reach) continue
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={Math.max(1.6, rMax * (1 - d / fall)).toFixed(2)}
          fillOpacity={(0.12 + 0.88 * (1 - d / reach) ** 2).toFixed(2)}
          style={{ animationDelay: `${Math.round(d * stagger)}ms` }}
        />,
      )
    }
  }
  return dots
})()

function Bloom() {
  return (
    <svg className={styles.bloom} viewBox="0 0 760 760" aria-hidden="true">
      {BLOOM_DOTS}
    </svg>
  )
}

function Head({ id, title, subtitle, kicker }: { id: string; title: string; subtitle?: string; kicker?: string }) {
  return (
    <div className={styles.head} {...rv()}>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className={styles.ticks}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Quote({ quote }: { quote: c.Quote }) {
  return (
    <figure className={styles.quote}>
      <blockquote>
        <p>“{quote.text}”</p>
      </blockquote>
      <figcaption>— {quote.who}</figcaption>
    </figure>
  )
}

function Tiles({ items, three }: { items: { big: string; small: string }[]; three?: boolean }) {
  return (
    <div className={`${styles.tiles} ${three ? styles.three : ""}`}>
      {items.map((t) => (
        <div key={t.big}>
          <b>{t.big}</b>
          <span>{t.small}</span>
        </div>
      ))}
    </div>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.block}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

type SplitProps = {
  kicker: string
  title: string
  text: string
  bullets: string[]
  quote: c.Quote
  more?: { text: string; href: string }
  panel: ReactNode
  flip?: boolean
}

// Text beside a navy "screen", as in the Phase-2 index.
function Split({ kicker, title, text, bullets, quote, more, panel, flip }: SplitProps) {
  return (
    <div className={`${styles.split} ${flip ? styles.flip : ""}`}>
      <div {...rv()}>
        <p className={styles.kicker}>{kicker}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Ticks items={bullets} />
        {more && (
          <Link className={styles.more} href={more.href}>
            {more.text}
          </Link>
        )}
        <Quote quote={quote} />
      </div>
      <div {...rv(1)}>{panel}</div>
    </div>
  )
}

const initials = (name: string) => {
  const words = name.split(" ")
  return words.length > 1 ? words.map((w) => w[0]).join("") : name.slice(0, 2)
}

export default function HomeView() {
  const { hero } = c
  return (
    <div data-page="home" className={`${styles.home} ${homeFonts}`}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-h">
        <Bloom />
        <div className={`${styles.wrap} ${styles.heroIn}`}>
          <div>
            <p className={`${styles.kicker} ${styles.rise}`} style={delay(0)}>{hero.kicker}</p>
            <h1 id="hero-h" className={styles.rise} style={delay(1)}>
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </h1>
            <p className={`${styles.lede} ${styles.rise}`} style={delay(2)}>{hero.lede}</p>
            <div className={`${styles.actions} ${styles.rise}`} style={delay(3)}>
              <DemoLink className={`${styles.btn} ${styles.copper}`}>{hero.primaryCta}</DemoLink>
              <Link href={hero.secondaryHref} className={`${styles.btn} ${styles.ghost}`}>
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className={`${styles.pos} ${styles.rise}`} style={delay(2)} role="img" aria-label={hero.pos.alt}>
            <div className={styles.posBar}>
              {hero.pos.tabs.map((t, i) => (
                <span key={t} className={i === 0 ? styles.on : undefined}>
                  {t}
                </span>
              ))}
            </div>
            <div className={styles.posGrid}>
              {hero.pos.items.map((it) => (
                <div key={it.name} className={styles.posItem}>
                  <b>{it.name}</b>
                  <i>
                    {it.price}
                    {it.low && (
                      <>
                        {" · "}
                        <span className={styles.low}>Low stock</span>
                      </>
                    )}
                  </i>
                </div>
              ))}
            </div>
            <div className={styles.posCart}>
              <span>{hero.pos.cart.label}</span>
              <span>{hero.pos.cart.total}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={styles.section} id="products" aria-labelledby="prod-h">
        <div className={styles.wrap}>
          <Head id="prod-h" title={c.products.title} subtitle={c.products.subtitle} />
          <ul className={styles.grid}>
            {c.products.items.map((p, i) => (
              <li key={p.title} {...rv(i % 3)}>
                <Link className={styles.card} href={p.href}>
                  <span className={styles.dotmark} aria-hidden="true" />
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className={styles.go}>{c.products.linkText}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inventory, delivery, online store, receipts */}
      <section className={`${styles.section} ${styles.alt}`} aria-label="Inventory, delivery, online store and receipts">
        <div className={styles.wrap}>
          <Split
            {...c.inventory}
            panel={
              <div className={styles.vis} role="img" aria-label={c.inventory.visAlt}>
                <div className={styles.visHead}>
                  {c.inventory.visHead.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <table>
                  <thead>
                    <tr>
                      {c.inventory.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.inventory.rows.map((r) => (
                      <tr key={r.name}>
                        <td>{r.name}</td>
                        <td>{r.onHand}</td>
                        <td>
                          <span className={`${styles.chip} ${r.low ? styles.low : ""}`}>
                            {r.low ? c.inventory.lowStock : c.inventory.inStock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
          <Split
            {...c.delivery}
            flip
            panel={
              <div className={styles.vis} role="img" aria-label={c.delivery.visAlt}>
                <div className={styles.visHead}>
                  {c.delivery.visHead.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ol className={styles.how}>
                  {c.delivery.steps.map((s) => (
                    <li key={s.title}>
                      {s.title}
                      <small>{s.text}</small>
                    </li>
                  ))}
                </ol>
              </div>
            }
          />
          <Split
            {...c.mobile}
            panel={
              <div className={styles.vis}>
                <Block title={c.mobile.native.title} text={c.mobile.native.text} />
                {c.mobile.items.map((it) => (
                  <div key={it.title} className={styles.feat}>
                    <span className={`${styles.dotmark} ${styles.sm}`} aria-hidden="true" />
                    <div>
                      <b>{it.title}</b>
                      <span>{it.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
          <Split
            {...c.receipts}
            flip
            panel={
              <div className={styles.vis}>
                <Block title={c.receipts.system.title} text={c.receipts.system.text} />
                <div className={styles.visHead}>
                  <span>{c.receipts.optionsTitle}</span>
                </div>
                <Tiles items={c.receipts.options} three />
                <div className={styles.visHead}>
                  <span>{c.receipts.complianceTitle}</span>
                </div>
                <ul className={styles.checks}>
                  {c.receipts.compliance.map((t) => (
                    <li key={t}>
                      <span aria-hidden="true">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>
      </section>

      {/* Video preview */}
      <section className={styles.section} aria-labelledby="video-h">
        <div className={styles.wrap}>
          <Head id="video-h" title={c.video.title} subtitle={c.video.subtitle} />
          <Link href="/demo" className={styles.video} {...rv(1)}>
            <Image src={c.video.poster} alt="" fill sizes="(min-width: 1200px) 1136px, 100vw" />
            <span className={styles.veil} />
            <span className={styles.play} aria-hidden="true" />
            <span className={styles.cap}>
              <b>{c.video.caption}</b>
              <span>{c.video.captionText}</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Explore the platform */}
      <section className={`${styles.section} ${styles.alt}`} aria-labelledby="gallery-h">
        <div className={styles.wrap}>
          <Head id="gallery-h" title={c.gallery.title} subtitle={c.gallery.subtitle} />
          <ul className={styles.grid}>
            {c.gallery.items.map((it, i) => (
              <li key={it.title} {...rv(i % 3)}>
                <Link href={it.href} className={styles.pcard}>
                  <div className={styles.thumb}>
                    <Image src={it.src} alt={it.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className={styles.pbody}>
                    <h3>{it.title}</h3>
                    <p>{it.description}</p>
                    <span className={styles.go} aria-hidden="true">→</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why teams choose Bleaum */}
      <section className={styles.section} aria-labelledby="why-h">
        <div className={styles.wrap}>
          <Head id="why-h" title={c.why.title} subtitle={c.why.subtitle} />
          <ul className={styles.reasons}>
            {c.why.items.map((r, i) => (
              <li key={r.title} {...rv(i % 3)}>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className={`${styles.section} ${styles.alt}`} id="about" aria-labelledby="about-h">
        <div className={styles.wrap}>
          <Head id="about-h" title={c.about.title} subtitle={c.about.subtitle} />
          <div className={styles.aboutGrid}>
            <figure className={styles.founder} {...rv()}>
              <blockquote>
                <p>“{c.about.quote}”</p>
              </blockquote>
              <figcaption>
                <Image src={c.about.founder.photo} alt={c.about.founder.name} width={56} height={56} />
                <div>
                  <b>{c.about.founder.name}</b>
                  <span>{c.about.founder.role}</span>
                </div>
              </figcaption>
            </figure>
            <ul className={styles.values}>
              {c.about.values.map((v, i) => (
                <li key={v.title} {...rv(i)}>
                  <span className={`${styles.dotmark} ${styles.sm}`} aria-hidden="true" />
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.numbers}>
            {c.about.stats.map((s, i) => (
              <li key={s.label} {...rv(i)}>
                <b>{s.number}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust and industries */}
      <section className={`${styles.dk} ${styles.band}`} aria-labelledby="trust-h">
        <div className={styles.wrap}>
          <Head id="trust-h" kicker={c.trust.kicker} title={c.trust.title} subtitle={c.trust.text} />
          <ul className={styles.pillars}>
            {c.trust.pillars.map((p, i) => (
              <li key={p.title} {...rv(i)}>
                <span className={styles.dotmark} aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.inds}>
            {c.trust.industries.map((ind, i) => (
              <li key={ind.title} {...rv(i)}>
                <b>{ind.title}</b>
                <span>{ind.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section} id="testimonials" aria-labelledby="testimonials-h">
        <div className={styles.wrap}>
          <Head id="testimonials-h" title={c.testimonials.title} subtitle={c.testimonials.subtitle} />
          <ul className={styles.tgrid}>
            {c.testimonials.items.map((t, i) => (
              <li key={t.name} {...rv(i % 2)}>
                <figure className={styles.tcard}>
                  <span className={styles.stars} role="img" aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}
                  </span>
                  <blockquote>
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption>
                    <span className={styles.avatar} aria-hidden="true">
                      {initials(t.name)}
                    </span>
                    <div>
                      <b>{t.name}</b>
                      <span>{t.company}</span>
                      <span>{t.location}</span>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact band */}
      <section className={styles.contact} aria-labelledby="contact-h">
        <div className={`${styles.wrap} ${styles.contactIn}`} {...rv()}>
          <div>
            <h2 id="contact-h">{c.contact.title}</h2>
            <p>{c.contact.text}</p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.btn} href={c.contact.primary.href}>
              {c.contact.primary.text}
            </Link>
            <Link className={`${styles.btn} ${styles.quiet}`} href={c.contact.secondary.href}>
              {c.contact.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.cta} aria-labelledby="cta-h">
        <Bloom />
        <div className={styles.wrap}>
          <div className={styles.ctaIn} {...rv()}>
            <h2 id="cta-h">{c.cta.title}</h2>
            <p>{c.cta.text}</p>
            <div className={styles.actions}>
              <DemoLink className={`${styles.btn} ${styles.copper}`}>{c.cta.primary}</DemoLink>
              <Link href={c.cta.secondary.href} className={`${styles.btn} ${styles.ghost}`}>
                {c.cta.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
