import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  ArrowRightIcon,
  BarChart2Icon,
  BrainIcon,
  BuildingIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  HeadphonesIcon,
  HeartIcon,
  PackageIcon,
  QuoteIcon,
  ShieldCheckIcon,
  ShieldIcon,
  TargetIcon,
  TimerIcon,
  UsersIcon,
  WifiIcon,
  ZapIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Point of Sale",
  description:
    "Fast checkout, easy training and built-in compliance tools. Bleaum POS runs your counter and back office on one real-time system.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/point-of-sale.md #31 to #35 and #39 are already applied there,
// and the numbers block (#36) and the audit quote (#37) are already gone, so they stay out. The 24/7 line (#38)
// and the named testimonials with their business names (#15) wait on the business.
const painPoints: { icon: Icon; problem: string; solution: string; impact: string }[] = [
  { icon: TimerIcon, problem: "Slow, clunky checkout", solution: "Fast transactions", impact: "Happy customers, faster turnover" },
  { icon: UsersIcon, problem: "Training nightmares", solution: "Intuitive, one-shift learning", impact: "New staff selling in minutes" },
  { icon: ShieldIcon, problem: "Compliance anxiety", solution: "Automatic state reporting sync", impact: "Audit-ready tools built in" },
  { icon: HeadphonesIcon, problem: "Support black holes", solution: "Real humans, real answers", impact: "Problems solved, not escalated" },
]

const features: {
  icon: Icon
  title: string
  text: string
  items: string[]
  quote: string
  highlight: string
  stats: string
  side: "Front of House" | "Back of House"
}[] = [
  {
    icon: ZapIcon,
    title: "Lightning-Fast Checkout",
    text: "Fast transactions, even during peak hours. Your team will thank you, and so will your customers.",
    items: ["Fast average checkout", "One-tap item selection", "Smart suggested add-ons", "Instant receipt options"],
    quote: "Lines move faster now. Customers are happier, staff is less stressed.",
    highlight: "Speed Demon",
    stats: "Faster checkouts",
    side: "Front of House",
  },
  {
    icon: BrainIcon,
    title: "Smart Customer Intelligence",
    text: "Know your customers before they speak. See purchase history, preferences, and loyalty status instantly.",
    items: ["Purchase history at a glance", "Preference tracking", "Loyalty status display", "Smart upsell suggestions"],
    quote: "I actually know what to recommend now.",
    highlight: "AI-Powered",
    stats: "Smarter upsells",
    side: "Front of House",
  },
  {
    icon: BarChart2Icon,
    title: "Real-Time Business Intelligence",
    text: "See what's happening as it happens. No more waiting till close to know your numbers.",
    items: ["Live sales dashboards", "Real-time inventory levels", "Performance metrics", "Instant reporting"],
    quote: "I know my hourly sales, top products, and staff performance live.",
    highlight: "Live Data",
    stats: "Real-time",
    side: "Back of House",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built-In Compliance",
    text: "State reporting sync, audit trails, and compliance alerts happen automatically—so you can sleep easy during inspections.",
    items: ["Automatic state reporting sync", "Complete audit trails", "Compliance alerts", "Error prevention"],
    quote: "Audit prep is so much easier. Everything is logged and ready.",
    highlight: "Audit-Ready",
    stats: "Audit-ready",
    side: "Back of House",
  },
]

const support: { icon: Icon; title: string; text: string }[] = [
  { icon: UsersIcon, title: "Real Retail Experience", text: "Our support team has actually worked in retail" },
  { icon: ClockIcon, title: "24/7 Human Support", text: "No bots, no scripts, just real help when you need it" },
  { icon: WifiIcon, title: "Proactive Problem Solving", text: "We spot issues before they become your problems" },
]

const connected: { icon: Icon; name: string }[] = [
  { icon: ShieldCheckIcon, name: "State Reporting Sync" },
  { icon: PackageIcon, name: "Delivery Tracking" },
  { icon: HeartIcon, name: "Loyalty Programs" },
  { icon: BarChart2Icon, name: "Live Analytics" },
  { icon: CreditCardIcon, name: "Payment Processing" },
  { icon: PackageIcon, name: "Inventory Management" },
  { icon: TargetIcon, name: "Marketing Tools" },
  { icon: BuildingIcon, name: "Multi-Location" },
]

const stories: { quote: string; author: string; company: string; metric: string }[] = [
  {
    quote: "Training went from days to hours. New staff are confident on day one.",
    author: "Andrew H.",
    company: "Go Green",
    metric: "Faster training",
  },
  {
    quote: "Our checkout lines move so fast now. Customers actually compliment us on it.",
    author: "Perry Jones",
    company: "Centered by Design",
    metric: "Faster checkout",
  },
  {
    quote: "State inspection? No problem. Everything's automatically compliant and logged.",
    author: "AJ",
    company: "Happy Root",
    metric: "Audit-ready",
  },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative register: product tiles beside a ticket, and a receipt card over it. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[27rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-[22rem] animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-3 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-6 flex-1 rounded-md bg-white/[.07]" />
          <div className="size-6 rounded-md bg-copper-400/60" />
        </div>
        <div className="grid grid-cols-[3fr_2fr] gap-3">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="rounded-md bg-white/[.07] p-1.5">
                <div className="h-12 rounded bg-white/[.07]" />
                <div className="mt-1.5 h-1 w-3/4 rounded-full bg-copper-400/60" />
              </div>
            ))}
          </div>
          <div className="flex flex-col rounded-lg bg-white/[.06] p-2.5">
            {["w-4/5", "w-3/5", "w-full", "w-2/3"].map((w) => (
              <div key={w} className="mb-3 flex items-center justify-between gap-2">
                <div className={`h-1.5 rounded-full bg-white/30 ${w}`} />
                <div className="h-1.5 w-3 shrink-0 rounded-full bg-white/15" />
              </div>
            ))}
            <div className="mt-auto border-t border-white/10 pt-2.5">
              <div className="h-2 w-1/2 rounded-full bg-white/40" />
              <div className="mt-2.5 h-7 rounded-md bg-copper-400/80" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 w-48 animate-rise rounded-2xl border border-white/15 bg-navy-900/90 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] backdrop-blur [animation-delay:380ms]">
        <div className="flex items-center gap-2">
          <span className={`${chip} size-8`}>
            <CheckIcon className="size-4" />
          </span>
          <div className="h-1.5 flex-1 rounded-full bg-white/25" />
        </div>
        <div className="mt-3 grid gap-2 rounded-lg bg-white/90 p-2.5">
          {["w-full", "w-4/5", "w-2/3"].map((w) => (
            <div key={w} className={`h-1.5 rounded-full bg-navy-950/30 ${w}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PointOfSalePage() {
  return (
    <div data-page="point-of-sale" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="pos-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="pos-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              The POS that actually gets it
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Built by operators, for operators—whether you run any high-stakes retail operation. Fast checkout, easy
              training, and rock-solid compliance—without the headaches.
            </p>
            <figure className="mt-6 max-w-[52ch] animate-rise border-l-2 border-copper-400 pl-4 [animation-delay:180ms]">
              <blockquote className="text-fog-200">
                &ldquo;We built Bleaum POS after too many late nights fixing inventory mistakes, training new staff, and
                wrestling with clunky menus. If you&apos;ve ever counted cash at close or had to explain compliance to a
                new hire, you&apos;ll understand exactly why we made this.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[.9375rem] text-fog-200/70">
                <span className="font-semibold text-fog-200">The Bleaum Team</span>
                <span className="block">Built by operators, for operators</span>
              </figcaption>
            </figure>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                See It Handle Real Traffic
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Problems and the fix for each */}
      <section className="bg-h-surface2 py-pad" aria-label="Problems Bleaum solves">
        <ul className={`${ui.wrap} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {painPoints.map((p, i) => (
            <li key={p.problem} {...ui.rv(i)}>
              <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                <span className={`${chip} size-11`}>
                  <p.icon className="size-5" />
                </span>
                <s className="text-[.9375rem] text-h-muted">{p.problem}</s>
                <h2 className={ui.h3}>{p.solution}</h2>
                <p className="mt-auto border-t border-h-line pt-3 text-[.9375rem] font-semibold text-h-accent">{p.impact}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section className="py-pad" aria-labelledby="feat-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[64ch] lg:max-w-[80ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="feat-h" className={`${ui.h2} text-balance`}>
              If it doesn&apos;t save time, reduce errors, or make your team faster—we don&apos;t build it.
            </h2>
            <p className="mt-4 text-[1.125rem] text-h-muted">No fluff. Just what actually works.</p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            {features.map((f, i) => (
              <li key={f.title} {...ui.rv(i % 2)}>
                {/* The reveal and the hover lift both set `transition`, so they sit on separate elements. */}
                <div className={`${ui.lift} group relative flex h-full flex-col overflow-hidden rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                  <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#DF9770,transparent)] opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className={`${chip} size-12`}>
                      <f.icon className="size-6" />
                    </span>
                    <span className="rounded-full bg-copper-400/[.16] px-3 py-1 text-[.8125rem] font-semibold text-h-accent">
                      {f.side}
                    </span>
                  </div>
                  <h3 className={ui.h3}>{f.title}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[.875rem]">
                    <span className="rounded-full border border-h-line bg-h-surface2 px-3 py-1 font-medium">{f.highlight}</span>
                    <span className="font-display font-medium text-h-accent">{f.stats}</span>
                  </p>
                  <p className="mt-4 text-[.9375rem] text-h-muted">{f.text}</p>
                  <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem] sm:grid-cols-2">
                    {f.items.map((t) => (
                      <li key={t} className="flex gap-3">
                        {tick}
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <p className="border-l-2 border-copper-400 pl-4 font-display text-[1rem] font-medium leading-[1.5]">
                      &ldquo;{f.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support. home-dk equals the page background in dark mode, so the gradient keeps the band apart. */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="sup-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="sup-h" className={ui.h2}>Support That Actually Supports</h2>
            <p className="mt-4 text-[1.125rem] text-h-muted">
              Real people who know your business. Call, text, or chat—we&apos;re here when you need us, not when
              it&apos;s convenient for us.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {support.map((s, i) => (
              <li key={s.title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <s.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{s.title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Everything connected */}
      <section className="py-pad" aria-labelledby="conn-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="conn-h" className={ui.h2}>Everything Connected</h2>
            <p className="mt-4 text-h-muted">
              POS, inventory, compliance, delivery, loyalty, and analytics—all in one system that actually talks to
              itself.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {connected.map((c, i) => (
              <li key={c.name} {...ui.rv(i % 2)}>
                <div className={`${ui.lift} flex items-center gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <c.icon className="size-5" />
                  </span>
                  <span className={ui.h3}>{c.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="story-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="story-h" className={ui.h2}>Why Teams Switch to Bleaum</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {stories.map((s, i) => (
              <li key={s.author} {...ui.rv(i)}>
                <figure className={`${ui.lift} flex h-full flex-col gap-5 rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                  <span className={`${chip} size-11`}>
                    <QuoteIcon className="size-5" />
                  </span>
                  <blockquote className="text-[1.0625rem]">&ldquo;{s.quote}&rdquo;</blockquote>
                  <figcaption className="mt-auto border-t border-h-line pt-5">
                    <span className={`${ui.h3} block text-h-accent`}>{s.metric}</span>
                    <span className="mt-1 block font-semibold">{s.author}</span>
                    <span className="block text-[.9375rem] text-h-muted">{s.company}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>See It Handle Real Traffic</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Bleaum isn&apos;t just another POS. It&apos;s the system we wish we&apos;d had years ago. Want to see how it
              works in your shop? Let&apos;s set up a demo.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Book Your Personalized Demo
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
