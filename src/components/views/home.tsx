import type { CSSProperties, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { DemoLink } from "./home-client"
import { HomeFx } from "./home-fx"
import * as ui from "./home-ui"
import * as c from "./home-content"
import { Bloom } from "./bloom"

// Marks an element for the scroll reveal in home-fx.tsx. `cls` is the element's own classes.
const rv = (cls = "") => ({ "data-fx": "reveal", className: cls })
// Same, but the block slides in from one side (-1 left, 1 right) on wide screens.
const slide = (dir: number) => ({ "data-fx": "slide", "data-dir": dir })
// Staggers the entrance animation of hero items.
const rise = (i: number) => ({ style: { animationDelay: `${i * 90}ms` } as CSSProperties })

function DotMark({ small }: { small?: boolean }) {
  return <span data-fx="dot" className={small ? ui.dotmarkSm : ui.dotmark} aria-hidden="true" />
}

function Head({ id, title, subtitle, kicker }: { id: string; title: string; subtitle?: string; kicker?: string }) {
  return (
    <div {...rv("max-w-[60ch]")}>
      {kicker && <p className={`${ui.kicker} text-h-accent`}>{kicker}</p>}
      <h2 id={id} data-fx="words" className={ui.h2}>{title}</h2>
      {subtitle && <p className="mt-2.5 text-[1.25rem] leading-[1.5] text-h-muted">{subtitle}</p>}
    </div>
  )
}

function Ticks({ items }: { items: string[] }) {
  return (
    <ul data-fx="stagger" className="mt-[18px]">
      {items.map((t) => (
        <li key={t} className="relative py-[7px] pl-7 before:absolute before:left-1 before:top-4 before:size-2.5 before:rounded-full before:bg-copper-400">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Quote({ quote }: { quote: c.Quote }) {
  return (
    <figure className="mt-6 rounded-ctl bg-h-surface px-5 py-[18px] shadow-[inset_0_0_0_1.5px_var(--h-line)]">
      <blockquote>
        <p className="italic">“{quote.text}”</p>
      </blockquote>
      <figcaption className="mt-2.5 text-[.9375rem] font-semibold text-h-accent">— {quote.who}</figcaption>
    </figure>
  )
}

function Tiles({ items, three }: { items: { big: string; small: string }[]; three?: boolean }) {
  return (
    <div data-fx="stagger" className={`mb-1 grid gap-2 ${three ? "grid-cols-3" : "grid-cols-2"}`}>
      {items.map((t) => (
        <div key={t.big} className="rounded-xl bg-white/[.06] px-2 py-3 text-center transition-colors duration-200 hover:bg-white/10">
          <b className="block font-display text-[1.25rem] font-medium leading-[1.2]">{t.big}</b>
          <span className="text-[.8125rem] text-fog-300">{t.small}</span>
        </div>
      ))}
    </div>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-3.5 grid gap-1 rounded-xl bg-white/[.06] p-3.5">
      <h3 className={`${ui.heading} text-[1.0625rem] font-medium text-white`}>{title}</h3>
      <p className="text-[.9375rem] text-fog-300">{text}</p>
    </div>
  )
}

// Row of small label text inside a navy panel
const visHead = "mb-2 mt-4 flex items-center justify-between gap-3 text-[.8125rem] text-fog-300 first:mb-3 first:mt-0"
const vis = "rounded-card bg-navy-900 p-5 text-fog-100 shadow-[0_0_0_1px_var(--h-line),0_30px_70px_-40px_rgba(11,30,49,.7)]"
const chip = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[.75rem] font-semibold"
const flipRow = "lg:[&>:first-child]:order-2"

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
    <div className={`mt-pad grid items-center gap-10 first:mt-0 lg:grid-cols-2 lg:gap-[72px] [&>*]:min-w-0 ${flip ? flipRow : ""}`}>
      <div {...slide(flip ? 1 : -1)}>
        <p className={`${ui.kicker} text-h-accent`}>{kicker}</p>
        <h2 data-fx="words" className={ui.h2}>{title}</h2>
        <p className="mt-3 text-h-muted">{text}</p>
        <Ticks items={bullets} />
        {more && (
          <Link
            className="mt-5 inline-block font-semibold underline decoration-copper-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-h-accent hover:decoration-current"
            href={more.href}
          >
            {more.text}
          </Link>
        )}
        <Quote quote={quote} />
      </div>
      <div {...slide(flip ? -1 : 1)}>{panel}</div>
    </div>
  )
}

const initials = (name: string) => {
  const words = name.split(" ")
  return words.length > 1 ? words.map((w) => w[0]).join("") : name.slice(0, 2)
}

// Copper spotlight that follows the pointer inside a card; home-fx.tsx feeds --mx / --my.
const glow =
  "relative isolate before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,50%),rgba(223,151,112,.18),transparent)] hover:before:opacity-100"

const section = "py-pad"
const alt = "bg-h-surface2"
const grid3 = "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"

export default function HomeView() {
  const { hero } = c
  return (
    <div data-page="home" className={ui.root}>
      <HomeFx />
      <div data-fx="progress" className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-copper-400" aria-hidden="true" />

      {/* Hero */}
      <section data-fx="hero" className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="hero-h">
        <Bloom />
        <div data-fx="drift" className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr] [&>*]:min-w-0`}>
          <div>
            <p {...rise(0)} className={`${ui.kicker} text-copper-400 animate-rise`}>{hero.kicker}</p>
            <h1 id="hero-h" {...rise(1)} className={`${ui.h1} animate-rise`}>
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </h1>
            <p {...rise(2)} className="mt-5 max-w-[44ch] text-[1.25rem] leading-[1.5] text-fog-200 animate-rise">{hero.lede}</p>
            <div {...rise(3)} data-fx="magnet" className={`${ui.actions} mt-8 animate-rise`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>{hero.primaryCta}</DemoLink>
              <Link href={hero.secondaryHref} className={`${ui.btnGhost} ${ui.stack}`}>
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div data-fx="tilt" {...rise(2)} className="w-[min(100%,340px)] animate-rise justify-self-center">
          <div
            data-fx="phone"
            className="rounded-[34px] bg-navy-950 p-3.5 text-fog-100 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.22),0_40px_100px_-30px_rgba(223,151,112,.45)]"
            role="img"
            aria-label={hero.pos.alt}
          >
            <div className="mb-3 flex gap-1 text-[.75rem]">
              {hero.pos.tabs.map((t, i) => (
                <span key={t} className={`rounded-full px-2.5 py-1.5 ${i === 0 ? "bg-white/[.12] text-white" : "text-fog-300"}`}>
                  {t}
                </span>
              ))}
            </div>
            <div data-fx="pos-items" className="grid grid-cols-2 gap-2">
              {hero.pos.items.map((it) => (
                <div
                  key={it.name}
                  className="relative flex min-h-24 flex-col justify-end gap-0.5 rounded-xl bg-white/[.06] p-2.5 text-[.8125rem] transition-colors duration-200 before:absolute before:inset-x-2.5 before:top-2.5 before:h-[38px] before:bg-[radial-gradient(circle,rgba(223,151,112,.55)_1.4px,transparent_1.9px)] before:bg-[length:8px_8px] before:[mask-image:linear-gradient(#000,transparent)] before:[-webkit-mask-image:linear-gradient(#000,transparent)] hover:bg-white/10"
                >
                  <b className="font-semibold">{it.name}</b>
                  <i className="not-italic text-fog-300">
                    {it.price}
                    {it.low && (
                      <>
                        {" · "}
                        <span className="font-semibold text-copper-400">Low stock</span>
                      </>
                    )}
                  </i>
                </div>
              ))}
            </div>
            <div data-fx="pos-cart" className="mt-3 flex justify-between rounded-xl bg-copper-400 px-3.5 py-[13px] text-[.875rem] font-semibold text-navy-900">
              <span>{hero.pos.cart.label}</span>
              <span>{hero.pos.cart.total}</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={section} id="products" aria-labelledby="prod-h">
        <div className={ui.wrap}>
          <Head id="prod-h" title={c.products.title} subtitle={c.products.subtitle} />
          <ul className={grid3}>
            {c.products.items.map((p) => (
              <li key={p.title} data-card {...rv()}>
                <Link
                  className={`group flex h-full flex-col gap-2 rounded-card border border-h-line bg-h-surface p-6 ${glow} ${ui.lift}`}
                  href={p.href}
                >
                  <DotMark />
                  <h3 className={ui.h3}>{p.title}</h3>
                  <p className="flex-1 text-[.9375rem] text-h-muted">{p.description}</p>
                  <span className="text-[.9375rem] font-semibold text-h-accent transition-transform duration-250 ease-soft group-hover:translate-x-1.5">
                    {c.products.linkText}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inventory, delivery, online store, receipts */}
      <section className={`${section} ${alt}`} aria-label="Inventory, delivery, online store and receipts">
        <div className={ui.wrap}>
          <Split
            {...c.inventory}
            panel={
              <div className={vis} role="img" aria-label={c.inventory.visAlt}>
                <div className={visHead}>
                  {c.inventory.visHead.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <table className="w-full border-collapse text-[.875rem]">
                  <thead>
                    <tr>
                      {c.inventory.columns.map((col) => (
                        <th key={col} className="border-b border-white/[.14] px-1.5 py-2 text-left font-medium text-fog-300 last:text-right">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody data-fx="stagger">
                    {c.inventory.rows.map((r) => (
                      <tr key={r.name} className="transition-colors duration-200 hover:bg-white/[.04]">
                        <td className="border-b border-white/[.07] px-1.5 py-[11px]">{r.name}</td>
                        <td className="border-b border-white/[.07] px-1.5 py-[11px]">{r.onHand}</td>
                        <td className="border-b border-white/[.07] px-1.5 py-[11px] text-right">
                          <span data-fx="chip" className={`${chip} ${r.low ? "bg-copper-400 text-navy-900" : "bg-white/10 text-fog-100"}`}>
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
              <div className={vis} role="img" aria-label={c.delivery.visAlt}>
                <div className={visHead}>
                  {c.delivery.visHead.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {/* Numbered steps joined by copper dot trails */}
                <ol data-fx="stagger" className="mt-[18px] [counter-reset:s]">
                  {c.delivery.steps.map((s) => (
                    <li
                      key={s.title}
                      className="relative min-h-[34px] pb-5 pl-[52px] pt-[3px] [counter-increment:s] last:pb-[3px] before:absolute before:left-0 before:top-0 before:grid before:size-[34px] before:place-items-center before:rounded-full before:bg-navy-800 before:font-display before:text-[.8125rem] before:font-semibold before:leading-none before:text-white before:shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.22)] before:content-[counter(s)] last:before:bg-copper-400 last:before:text-navy-900 last:before:shadow-none after:absolute after:bottom-1 after:left-[15px] after:top-10 after:w-1 after:bg-[radial-gradient(circle,#DF9770_1.3px,transparent_1.7px)] after:bg-[length:4px_8px] after:bg-repeat-y last:after:hidden"
                    >
                      {s.title}
                      <small className="block text-[.9375rem] text-fog-300">{s.text}</small>
                    </li>
                  ))}
                </ol>
              </div>
            }
          />
          <Split
            {...c.mobile}
            panel={
              <div className={vis}>
                <Block title={c.mobile.native.title} text={c.mobile.native.text} />
                {c.mobile.items.map((it, i) => (
                  <div key={it.title} className={`flex items-center gap-3 px-1.5 py-2.5 ${i > 0 ? "border-t border-white/[.08]" : ""}`}>
                    <DotMark small />
                    <div>
                      <b className={`${ui.label} block text-[.9375rem]`}>{it.title}</b>
                      <span className="text-[.875rem] text-fog-300">{it.text}</span>
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
              <div className={vis}>
                <Block title={c.receipts.system.title} text={c.receipts.system.text} />
                <div className={visHead}>
                  <span>{c.receipts.optionsTitle}</span>
                </div>
                <Tiles items={c.receipts.options} three />
                <div className={visHead}>
                  <span>{c.receipts.complianceTitle}</span>
                </div>
                <ul data-fx="stagger" className="px-1.5 py-1 text-[.9375rem] text-fog-300">
                  {c.receipts.compliance.map((t) => (
                    <li key={t} className="py-1">
                      <span className="mr-2 text-copper-400" aria-hidden="true">✓</span>
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
      <section className={section} aria-labelledby="video-h">
        <div className={ui.wrap}>
          <Head id="video-h" title={c.video.title} subtitle={c.video.subtitle} />
          <Link
            href="/demo"
            data-clip
            {...rv("group relative mt-10 block aspect-video overflow-hidden rounded-card bg-navy-900 shadow-[0_0_0_1px_var(--h-line),0_30px_70px_-40px_rgba(11,30,49,.7)]")}
          >
            <Image
              src={c.video.poster}
              alt=""
              fill
              sizes="(min-width: 1200px) 1136px, 100vw"
              className="object-cover transition-transform duration-600 ease-soft group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-navy-950/45 backdrop-blur-[8px]" />
            <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
              <span data-fx="ping" className="aspect-square w-[clamp(64px,9vw,96px)] rounded-full bg-copper-400" />
            </span>
            <span
              className="absolute left-1/2 top-1/2 grid aspect-square w-[clamp(64px,9vw,96px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-copper-400 shadow-[0_0_0_8px_rgba(223,151,112,.3)] transition-[transform,box-shadow] duration-300 ease-soft before:ml-[6%] before:border-y-[.6em] before:border-l-[1em] before:border-y-transparent before:border-l-navy-900 before:text-[clamp(1rem,2.4vw,1.5rem)] group-hover:scale-[1.08] group-hover:shadow-[0_0_0_14px_rgba(223,151,112,.25)]"
              aria-hidden="true"
            />
            <span className="absolute inset-x-4 bottom-4 max-w-[420px] rounded-ctl bg-navy-950/[.72] px-4 py-3 text-white max-[479px]:inset-x-2.5 max-[479px]:bottom-2.5">
              <b className={`${ui.label} block text-[1.0625rem]`}>{c.video.caption}</b>
              <span className="text-[.875rem] text-fog-300">{c.video.captionText}</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Explore the platform */}
      <section className={`${section} ${alt}`} aria-labelledby="gallery-h">
        <div className={ui.wrap}>
          <Head id="gallery-h" title={c.gallery.title} subtitle={c.gallery.subtitle} />
          <ul className={grid3}>
            {c.gallery.items.map((it) => (
              <li key={it.title} data-card {...rv()}>
                <Link
                  href={it.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-card border border-h-line bg-h-surface ${glow} ${ui.lift}`}
                >
                  <div className="flex flex-1 flex-col gap-1.5 p-6">
                    <span className="mb-3.5 grid size-11 place-items-center rounded-ctl bg-h-surface2 text-h-accent">
                      <it.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className={ui.h3}>{it.title}</h3>
                    <p className="flex-1 text-[.9375rem] text-h-muted">{it.description}</p>
                    <span className="font-semibold text-h-accent transition-transform duration-250 ease-soft group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why teams choose Bleaum */}
      <section className={section} aria-labelledby="why-h">
        <div className={ui.wrap}>
          <Head id="why-h" title={c.why.title} subtitle={c.why.subtitle} />
          <ul className="mt-10 grid gap-x-10 border-t border-h-line md:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((r) => (
              <li key={r.title} {...rv("border-b border-h-line py-6")}>
                <h3 className={ui.h3}>{r.title}</h3>
                <p className="mt-1.5 text-h-muted">{r.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className={`${section} ${alt}`} id="about" aria-labelledby="about-h">
        <div className={ui.wrap}>
          <Head id="about-h" title={c.about.title} subtitle={c.about.subtitle} />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <figure {...rv("rounded-card bg-h-surface p-7 shadow-[inset_0_0_0_1.5px_var(--h-line)]")}>
              <blockquote className="font-display text-quote font-medium leading-[1.45] tracking-[-.01em]">
                <p data-fx="scrub-words">“{c.about.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5">
                <Image
                  src={c.about.founder.photo}
                  alt={c.about.founder.name}
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover ring-2 ring-copper-400"
                />
                <div>
                  <b className={`${ui.label} block text-[1.0625rem]`}>{c.about.founder.name}</b>
                  <span className="text-[.9375rem] text-h-accent">{c.about.founder.role}</span>
                </div>
              </figcaption>
            </figure>
            <ul className="grid gap-7">
              {c.about.values.map((v) => (
                <li key={v.title} {...rv("flex gap-4")}>
                  <DotMark small />
                  <div>
                    <h3 className={ui.h3}>{v.title}</h3>
                    <p className="mt-1 text-h-muted">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 md:grid-cols-4">
            {c.about.stats.map((s) => (
              <li key={s.label} {...rv("border-t border-h-line py-5")}>
                <b data-fx="count" className="block font-display text-[2rem] font-medium leading-[1.1] text-h-accent">{s.number}</b>
                <span className="text-[.9375rem] text-h-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust and industries */}
      <section className={`home-dk ${section}`} aria-labelledby="trust-h">
        <div className={ui.wrap}>
          <Head id="trust-h" kicker={c.trust.kicker} title={c.trust.title} subtitle={c.trust.text} />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {c.trust.pillars.map((p) => (
              <li key={p.title} {...rv()}>
                <DotMark />
                <h3 className={ui.h3}>{p.title}</h3>
                <p className="mt-2 text-h-muted">{p.description}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid border-t border-h-line md:grid-cols-3 md:gap-8 md:border-t-0">
            {c.trust.industries.map((ind) => (
              <li key={ind.title} {...rv("border-b border-h-line py-[18px] md:border-b-0 md:border-t")}>
                <b className={`${ui.label} text-[1.25rem]`}>{ind.title}</b>
                <span className="mt-1 block text-h-muted">{ind.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className={section} id="testimonials" aria-labelledby="testimonials-h">
        <div className={ui.wrap}>
          <Head id="testimonials-h" title={c.testimonials.title} subtitle={c.testimonials.subtitle} />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {c.testimonials.items.map((t) => (
              <li key={t.name} data-card {...rv()}>
                <figure className={`${glow} flex h-full flex-col gap-4 rounded-card border border-h-line bg-h-surface p-6 transition-[border-color,transform] duration-250 ease-soft hover:-translate-y-[3px] hover:border-copper-400`}>
                  <span data-fx="stars" className="tracking-[3px] text-copper-400" role="img" aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}
                  </span>
                  <blockquote className="flex-1 text-[1.125rem] leading-[1.55]">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-copper-400 font-display text-[.875rem] font-semibold leading-[normal] text-navy-900"
                      aria-hidden="true"
                    >
                      {initials(t.name)}
                    </span>
                    <div>
                      <b className={`${ui.label} block text-[1rem]`}>{t.name}</b>
                      <span className="block text-[.875rem] leading-[1.4] text-h-muted">{t.company}</span>
                      <span className="block text-[.875rem] leading-[1.4] text-h-muted">{t.location}</span>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-h-surface2 py-band" aria-labelledby="contact-h">
        <div {...rv(`${ui.wrap} flex flex-wrap items-center justify-between gap-6`)}>
          <div>
            <h2 id="contact-h" data-fx="words" className={ui.h2}>{c.contact.title}</h2>
            <p className="mt-2 max-w-[52ch] text-h-muted">{c.contact.text}</p>
          </div>
          <div className={ui.actions}>
            <Link className={ui.btnPrimary} href={c.contact.primary.href}>
              {c.contact.primary.text}
            </Link>
            <Link className={ui.btnQuiet} href={c.contact.secondary.href}>
              {c.contact.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...rv("relative max-w-[60ch]")}>
            <h2 id="cta-h" data-fx="words" className={`${ui.heading} text-h2 font-normal`}>{c.cta.title}</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">{c.cta.text}</p>
            <div data-fx="magnet" className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>{c.cta.primary}</DemoLink>
              <Link href={c.cta.secondary.href} className={`${ui.btnGhost} ${ui.stack}`}>
                {c.cta.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
