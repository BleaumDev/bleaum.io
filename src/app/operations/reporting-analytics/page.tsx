import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  ArrowRightIcon,
  BarChart2Icon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  LineChartIcon,
  QuoteIcon,
  RefreshCwIcon,
  TargetIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Reporting & Analytics",
  description:
    "Live dashboards and customizable reports across every location, sales, inventory and customers.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/reporting.md #69 is already applied there, and the 15% margin
// and AI pricing quotes (#70) are already gone, so they stay out. The "Coming Soon" tags (#68), the 5-locations quote (#71)
// and the named testimonial (#15) wait on the business.
const benefits = ["See trends before they happen", "Multi-location in one view", "Compliance reports on autopilot"]

const features: { icon: Icon; title: string; text: string; items: string[]; highlight: string; soon?: boolean; quote?: string }[] = [
  {
    icon: BrainIcon,
    title: "AI-Powered Insights",
    text: "Get smart alerts, trend predictions, and AI-written summaries that actually help you make decisions.",
    items: ["Spot anomalies automatically", "Surface profitable segments", "AI-written report summaries"],
    highlight: "Coming Soon",
    soon: true,
  },
  {
    icon: LineChartIcon,
    title: "Real-Time Dashboards",
    text: "See everything that matters—sales, inventory, customer behavior—updating live as it happens.",
    items: ["Custom filters & date ranges", "Built-in templates"],
    highlight: "Live Data",
    quote: "Finally, dashboards that actually make sense.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Location Command Center",
    text: "One view across all your stores. Compare performance, spot trends, manage everything from anywhere.",
    items: ["Location-based tracking", "Unified data streams", "Cross-store comparisons"],
    highlight: "Enterprise Ready",
    quote: "I can see all 5 locations at a glance. Game changer.",
  },
  {
    icon: RefreshCwIcon,
    title: "Automated Compliance Reports",
    text: "Never miss a deadline. Set it once, get reports delivered on schedule—formatted for compliance.",
    items: ["Scheduled reports", "One-click CSV exports", "Compliance-ready formats"],
    highlight: "Coming Soon!",
    soon: true,
  },
]

const tracked: { icon: Icon; title: string }[] = [
  { icon: TargetIcon, title: "What's selling & What's not" },
  { icon: ClockIcon, title: "Peak hours and slow periods" },
  { icon: UsersIcon, title: "Customer buying patterns" },
  { icon: TrendingUpIcon, title: "Staff performance metrics" },
  { icon: RefreshCwIcon, title: "Inventory turnover rates" },
  { icon: BarChart2Icon, title: "Profit margins by product" },
]

const access: { icon: Icon; title: string; text: string }[] = [
  { icon: UserIcon, title: "Manager Dashboards", text: "Staff performance, daily targets, operational metrics" },
  { icon: TrendingUpIcon, title: "Owner Analytics", text: "P&L insights, growth trends, strategic planning data" },
  { icon: UsersIcon, title: "Team Collaboration", text: "Shared reports, comments, action items" },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative dashboard: tiles over a bar chart, and a trend card over it. No text, so it adds no copy.
const bars = ["h-[35%]", "h-[55%]", "h-[42%]", "h-[70%]", "h-[58%]", "h-[85%]", "h-[100%]"]

function Preview() {
  return (
    <div className="relative hidden h-[24rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-[22rem] animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-white/[.06] p-2.5">
              <div className="h-1.5 w-2/3 rounded-full bg-white/25" />
              <div className={`mt-2.5 h-2.5 rounded-full ${i === 0 ? "w-4/5 bg-copper-400" : "w-3/5 bg-white/40"}`} />
            </div>
          ))}
        </div>
        <div className="flex h-40 items-end gap-2 rounded-lg bg-white/[.06] p-3">
          {bars.map((h, i) => (
            <div key={h} className={`flex-1 rounded-t ${h} ${i === bars.length - 1 ? "bg-copper-400" : "bg-white/30"}`} />
          ))}
        </div>
        <div className="mt-3 grid gap-2">
          {["w-full", "w-4/5"].map((w) => (
            <div key={w} className={`h-1.5 rounded-full bg-white/15 ${w}`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-52 animate-rise rounded-2xl border border-white/15 bg-navy-900/90 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] backdrop-blur [animation-delay:380ms]">
        <div className="flex items-center gap-2">
          <span className={`${chip} size-8`}>
            <TrendingUpIcon className="size-4" />
          </span>
          <div className="h-1.5 flex-1 rounded-full bg-white/25" />
        </div>
        <svg viewBox="0 0 120 40" className="mt-3 h-12 w-full rounded-lg bg-white/90 p-1.5" fill="none">
          <polyline points="2,34 20,26 38,30 58,16 78,20 98,8 118,4" className="stroke-copper-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default function ReportingAnalyticsPage() {
  return (
    <div data-page="reporting-analytics" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="rep-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="rep-h" className={`${ui.h1} max-w-[20ch] animate-rise`}>
              Know your numbers. Grow your business.
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Stop guessing, start knowing. Get real-time insights that actually help you make better decisions—not just
              prettier charts.
            </p>
            <ul className="mt-6 grid max-w-[52ch] animate-rise gap-3 text-fog-200 [animation-delay:180ms]">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-copper-400" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                See Your Data Come Alive
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Features */}
      <section className="py-pad" aria-label="Reporting features">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 md:gap-6`}>
          {features.map((f, i) => (
            <li key={f.title} {...ui.rv(i % 2)}>
              {/* The reveal and the hover lift both set `transition`, so they sit on separate elements. */}
              <div className={`${ui.lift} group relative flex h-full flex-col overflow-hidden rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#DF9770,transparent)] opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className={`${chip} size-12`}>
                    <f.icon className="size-6" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[.8125rem] font-semibold ${f.soon ? "bg-copper-400 text-navy-900" : "bg-copper-400/[.16] text-h-accent"}`}
                  >
                    {f.highlight}
                  </span>
                </div>
                <h2 className={ui.h3}>{f.title}</h2>
                <p className="mt-3 text-[.9375rem] text-h-muted">{f.text}</p>
                <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem]">
                  {f.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      {tick}
                      {t}
                    </li>
                  ))}
                </ul>
                {f.quote && (
                  <div className="mt-auto pt-6">
                    <p className="border-l-2 border-copper-400 pl-4 font-display text-[1rem] font-medium leading-[1.5]">
                      &ldquo;{f.quote}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* What you'll track */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="track-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="track-h" className={ui.h2}>Track Everything That Matters</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tracked.map((t, i) => (
              <li key={t.title} {...ui.rv(i % 3)}>
                <div className={`${ui.lift} flex items-center gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <t.icon className="size-5" />
                  </span>
                  <span className={ui.h3}>{t.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success story */}
      <section className="py-pad" aria-labelledby="story-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="story-h" className={ui.h2}>Real Results from Real Retailers</h2>
          </div>
          <figure {...ui.rv(1, `${ui.lift} mt-10 flex max-w-[64ch] flex-col gap-5 rounded-card border border-h-line bg-h-surface p-6 sm:p-8`)}>
            <span className={`${chip} size-11`}>
              <QuoteIcon className="size-5" />
            </span>
            <blockquote className="font-display text-[1.25rem] font-medium leading-[1.5]">
              &ldquo;Before Bleaum, I was flying blind. Now I know exactly which products to push, when to staff up, and
              where my money&apos;s going.&rdquo;
            </blockquote>
            <figcaption className="border-t border-h-line pt-5">
              <span className="block font-semibold">Perry Jones</span>
              <span className="block text-[.9375rem] text-h-muted">Centered by Design</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Access control. home-dk equals the page background in dark mode, so the gradient keeps the band apart. */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="acc-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="acc-h" className={ui.h2}>Right Data, Right People, Right Time</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {access.map((a, i) => (
              <li key={a.title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <a.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{a.title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{a.text}</p>
                </div>
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
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Turn Data Into Decisions</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Stop drowning in spreadsheets. See your business clearly, make moves confidently, and grow faster with
              insights that actually matter.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Book Your Demo
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
