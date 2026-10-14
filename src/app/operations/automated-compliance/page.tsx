import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  ArrowRightIcon,
  BrainIcon,
  CheckIcon,
  ClipboardListIcon,
  CogIcon,
  OctagonAlertIcon,
  PuzzleIcon,
  ShieldCheckIcon,
  TagIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Automated Compliance",
  description:
    "Compliance tools that run in the background: state reporting integrations, audit trails, purchase limits and pre-audit checks.",
}

type Feature = { icon: ComponentType<{ className?: string }>; title: string; text?: string; items?: string[] }

// Copy is unchanged from the old page; website-updates/compliance.md #72 to #76 and #78 are already applied.
// #77 (HIPAA) stays out, and #80 (the "state-compliant" labels) waits on the business.
const features: Feature[] = [
  {
    icon: BrainIcon,
    title: "Intelligent Compliance That Works for You",
    text: "Bleaum's engine adapts to your state's rules to help you stay compliant—automatically.",
  },
  {
    icon: CogIcon,
    title: "Automated Traceability & Reporting",
    items: [
      "Every sale, every movement — automatically tracked and reported to the state tracking systems you are required to use.",
      "Real-time syncing, batch-mode reconciliation, outage recovery, audit logs, and discrepancy detection.",
    ],
  },
  {
    icon: ClipboardListIcon,
    title: "SOP & Limit Management",
    items: [
      "Define and enforce SOPs for daily operations",
      "Automatically enforce per-customer purchase limits where required",
      "Dynamic limit enforcement, instant flagging, and clear reporting for regulators",
    ],
  },
  {
    icon: OctagonAlertIcon,
    title: "Pre-Audit Safeguards",
    items: [
      "Automated audit system identifies red flags before regulators show up",
      "Pre-emptive compliance alerts, auto-checks for inventory discrepancies and sync issues, and full audit trail",
    ],
  },
  {
    icon: TagIcon,
    title: "Compliant Labeling & QR Packaging Tools",
    items: [
      "Design state-compliant product labels with drag-and-drop builder",
      "Auto-filled product data from your POS, drag-and-drop templates, scannable Retail IDs & real-time batch info",
    ],
  },
  {
    icon: PuzzleIcon,
    title: "Full Traceability Integrations",
    items: [
      "Support for state tracking systems and custom traceability",
      "Two-way sync, intelligent reconciliation, reduce check-in times, sync thousands of items, built to scale",
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Security You Can Trust",
    items: ["End-to-end encryption across all systems"],
  },
]

// Decorative audit panel: a shield, then checked rows. No text, so it adds no copy.
const rows = ["w-3/4", "w-2/3", "w-4/5", "w-1/2"]

function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <ShieldCheckIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {rows.map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full ${i === 3 ? "bg-white/15" : "bg-copper-400 text-navy-900"}`}
              >
                {i !== 3 && <CheckIcon className="size-3" strokeWidth={3} />}
              </span>
              <div className="flex-1">
                <div className={`h-2 rounded-full bg-white/35 ${w}`} />
                <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ f, i }: { f: Feature; i: number }) {
  const Icon = f.icon
  return (
    // The reveal and the hover lift both set `transition`, so they sit on separate elements.
    // A card with only a sentence runs the full row.
    <li {...ui.rv(i, f.items ? "" : "md:col-span-2")}>
      <div className={`${ui.lift} flex h-full flex-col rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
        <span className="mb-5 grid size-11 place-items-center rounded-ctl bg-h-surface2 text-h-accent">
          <Icon className="size-5" />
        </span>
        <h3 className={ui.h3}>{f.title}</h3>
        {f.text && <p className="mt-2 max-w-[60ch] text-[.9375rem] text-h-muted">{f.text}</p>}
        {f.items && (
          <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem]">
            {f.items.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-[.55em] size-1.5 shrink-0 rounded-full bg-h-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function AutomatedCompliancePage() {
  return (
    <div data-page="automated-compliance" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="comp-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="comp-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Automated Compliance
            </h1>
            <p className="mt-5 max-w-[34ch] animate-rise font-display text-quote font-medium leading-[1.4] [animation-delay:90ms]">
              Compliance that runs in the background — so you can focus on growing your retail.
            </p>
            <p className="mt-4 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:180ms]">
              Bleaum&apos;s integrated compliance engine adapts to your state&apos;s specific regulations, automatically
              tracking inventory, sales, and reporting to help you stay on the right side of the law.
            </p>
            <p className="mt-4 max-w-[52ch] animate-rise font-semibold text-copper-400 [animation-delay:270ms]">
              Seamless, stress-free compliance across your entire operation.
            </p>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:360ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                <ArrowRightIcon className="size-5" aria-hidden="true" /> Get a Demo
              </DemoLink>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Why Bleaum Compliance? */}
      <section className="py-pad" aria-labelledby="why-h">
        <div className={ui.wrap}>
          <h2 id="why-h" {...ui.rv(0, `${ui.h2} max-w-[24ch]`)}>Why Bleaum Compliance?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
            {features.map((f, i) => (
              <Card key={f.title} f={f} i={i % 2} />
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Let Compliance Be the Last Thing You Worry About</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Bleaum helps keep your retail compliant, automatically. No more spreadsheets. No more late-night syncs.
              Fewer surprises.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Schedule Your Compliance Demo <ArrowRightIcon className="size-5" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
