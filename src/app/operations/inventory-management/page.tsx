import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  AlertCircleIcon,
  ArrowRightIcon,
  Building2Icon,
  CheckIcon,
  CheckSquareIcon,
  ClockIcon,
  EyeIcon,
  LayersIcon,
  PackageIcon,
  QuoteIcon,
  ShieldCheckIcon,
  ShieldIcon,
  ZapIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Inventory Management",
  description:
    "Real-time stock levels, live audits, transfers and bulk operations across all your locations.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/inventory.md #81 to #83, #86 and #87 are already applied there,
// and #84, #85 and #88 are already gone, so they stay out. The named testimonials (#15), the 300+ count (#16)
// and the "20-Minute" button label (#86 family) wait on the business.
const painPoints: { icon: Icon; problem: string; solution: string; impact: string }[] = [
  { icon: ClockIcon, problem: "Late-night inventory counts", solution: "Count during business hours", impact: "Get your evenings back" },
  { icon: ShieldIcon, problem: "Compliance panic attacks", solution: "Auto-sync with state systems", impact: "Sleep easy during audits" },
  { icon: EyeIcon, problem: "Missing inventory mysteries", solution: "Real-time variance alerts", impact: "Catch shrinkage early" },
  { icon: Building2Icon, problem: "Multi-store chaos", solution: "Unified inventory control", impact: "One source of truth" },
]

const features: {
  icon: Icon
  title: string
  text: string
  items: string[]
  quote: string
  highlight: string
  stats: string
}[] = [
  {
    icon: ZapIcon,
    title: "Live Inventory Audits",
    text: "Count while you sell. No more after-hours marathons or surprise variances.",
    items: ["Audit during business hours", "Blind counts with manager approval", "Instant variance alerts", "Full compliance logging"],
    quote: "We went from long closing counts to quick midday audits.",
    highlight: "Real-Time",
    stats: "Faster audits",
  },
  {
    icon: ShieldCheckIcon,
    title: "Smart Compliance Sync",
    text: "One-click package acceptance, auto-sync with state systems. Compliance without the headache.",
    items: ["One-click package acceptance", "Two-way compliance syncing", "Automatic overage alerts", "Full traceability"],
    quote: "Audit prep is so much faster now.",
    highlight: "Automated",
    stats: "Automated sync",
  },
  {
    icon: Building2Icon,
    title: "Multi-Location Command Center",
    text: "See everything, everywhere. Transfer between stores, sync online, control it all.",
    items: ["Centralized inventory control", "Cross-store transfers", "Location-specific pricing", "Unified reporting"],
    quote: "I can manage 6 locations and move 100 items easily.",
    highlight: "Enterprise",
    stats: "Multi-location control",
  },
  {
    icon: LayersIcon,
    title: "Bulk Operations That Actually Work",
    text: "Move 1,000 items as easily as 1. Print compliant labels instantly. No clicking fatigue.",
    items: ["Bulk move, adjust, relabel", "Instant compliant labels", "Mass product updates", "Scheduled operations"],
    quote: "Bulk actions saved us hours every single week.",
    highlight: "Efficient",
    stats: "Faster operations",
  },
]

const compliance = ["State system sync", "Custom compliance rules", "Audit trail logging"]

const overview: { icon: Icon; label: string; value: string }[] = [
  { icon: EyeIcon, label: "Live Stock Levels", value: "Real-time" },
  { icon: AlertCircleIcon, label: "Variance Alerts", value: "Instant" },
  { icon: ShieldIcon, label: "State Sync", value: "Automated" },
  { icon: CheckSquareIcon, label: "Audit Ready", value: "Built in" },
]

const stories: { quote: string; author: string; company: string; metric: string }[] = [
  {
    quote: "Inventory counts went from our most dreaded task to something we barely think about. It just works.",
    author: "Perry Jones, Tulsa, Oklahoma",
    company: "Centered by Design",
    metric: "Time saved",
  },
  {
    quote: "Multi-location management finally makes sense. I can see everything from anywhere.",
    author: "AJ, Oklahoma City, Oklahoma",
    company: "Happy Root",
    metric: "6 locations unified",
  },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative stock list: rows with level bars, one flagged, and an alert card over it. No text, so it adds no copy.
const levels = ["w-4/5", "w-3/5", "w-[30%]", "w-2/3", "w-1/2"]

function Preview() {
  return (
    <div className="relative hidden h-[24rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-[22rem] animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <span className={`${chip} size-9`}>
            <PackageIcon className="size-4" />
          </span>
          <div className="flex-1">
            <div className="h-2.5 w-1/2 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/4 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {levels.map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <div className="size-8 shrink-0 rounded-md bg-white/[.09]" />
              <div className="flex-1">
                <div className="h-1.5 w-2/5 rounded-full bg-white/35" />
                <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${i === 2 ? "bg-copper-400" : "bg-white/40"} ${w}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-52 animate-rise rounded-2xl border border-white/15 bg-navy-900/90 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] backdrop-blur [animation-delay:380ms]">
        <div className="flex items-center gap-2">
          <span className={`${chip} size-8`}>
            <AlertCircleIcon className="size-4" />
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

export default function InventoryManagementPage() {
  return (
    <div data-page="inventory-management" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="inv-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="inv-h" className={`${ui.h1} max-w-[20ch] animate-rise`}>
              Inventory that doesn&apos;t ruin your night
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Count during the day. Catch problems early. Stay compliant without the stress. Finally, inventory
              management that works with your schedule, not against it.
            </p>
            <figure className="mt-6 max-w-[52ch] animate-rise border-l-2 border-copper-400 pl-4 [animation-delay:180ms]">
              <blockquote className="text-fog-200">
                &ldquo;We used to spend hours after close just counting. Now, we do it live, and I actually trust the
                numbers. Game changer for our whole operation.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[.9375rem] text-fog-200/70">
                <span className="font-semibold text-fog-200">Cam</span>
                <span className="block">Project Releaf</span>
              </figcaption>
            </figure>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                See 20-Minute Inventory in Action
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
      <section className="py-pad" aria-label="Inventory features">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 md:gap-6`}>
          {features.map((f, i) => (
            <li key={f.title} {...ui.rv(i % 2)}>
              {/* The reveal and the hover lift both set `transition`, so they sit on separate elements. */}
              <div className={`${ui.lift} group relative flex h-full flex-col overflow-hidden rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#DF9770,transparent)] opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
                <span className={`${chip} mb-5 size-12`}>
                  <f.icon className="size-6" />
                </span>
                <h2 className={ui.h3}>{f.title}</h2>
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
      </section>

      {/* Compliance. home-dk equals the page background in dark mode, so the gradient keeps the band apart. */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="comp-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="comp-h" className={ui.h2}>Compliance That Actually Works</h2>
            <p className="mt-4 text-[1.125rem] text-h-muted">
              Stop dreading state inspections. Our two-way sync keeps you compliant automatically, with full audit
              trails and instant alerts.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {compliance.map((c, i) => (
              <li key={c} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <ShieldCheckIcon className="size-5" />
                  </span>
                  <span className={ui.h3}>{c}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Overview */}
      <section className="py-pad" aria-labelledby="see-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="see-h" className={ui.h2}>See Everything, Miss Nothing</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overview.map((o, i) => (
              <li key={o.label} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <o.icon className="size-5" />
                  </span>
                  <span className={`${ui.h3} text-h-accent`}>{o.value}</span>
                  <span className="text-[.9375rem] text-h-muted">{o.label}</span>
                </div>
              </li>
            ))}
          </ul>
          <p {...ui.rv(0, "mt-8 max-w-[60ch] text-[1.125rem] text-h-muted")}>
            Track what matters. Know what&apos;s happening. Stay ahead of problems.
          </p>
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="story-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="story-h" className={ui.h2}>Real Results from Real Operators</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
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
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Ready for Inventory That Works?</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Join 300+ retailers who&apos;ve said goodbye to late-night counts and compliance stress.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Schedule Your Inventory Demo
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
