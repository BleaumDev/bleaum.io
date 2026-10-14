import type { Metadata } from "next"
import type { ComponentType } from "react"
import Image from "next/image"
import {
  BellRingIcon,
  ClipboardListIcon,
  HandshakeIcon,
  PackageIcon,
  ShoppingCartIcon,
  UserCheckIcon,
  UsersIcon,
  UserRoundIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page, except "Metrc" -> "state tracking and reporting integrations"
// (website-updates/all-pages.md row 3).
const top: { icon: Icon; label: string; text: string }[] = [
  { icon: UserCheckIcon, label: "Welcome Message:", text: "A quick greeting with user personalization." },
  { icon: ClipboardListIcon, label: "Due Tasks Summary:", text: "View any pending tasks directly on login." },
  { icon: BellRingIcon, label: "New Orders Summary:", text: "Instantly see if new orders have been placed." },
]

const charts: { chart: string; purpose: string; features: string }[] = [
  {
    chart: "Top Products / Categories / Brands",
    purpose: "Visualizes top-selling products, categories, or brands.",
    features: "Dropdown to switch view. Select different timelines for broader or narrower insights.",
  },
  {
    chart: "Conversion Chart",
    purpose: "Tracks customer flow: how many were added to the queue vs. how many completed a purchase.",
    features: "Dropdown to switch between timelines (Past 7, 14, 30 days, 3 months, 6 months).",
  },
  {
    chart: "Popular Times",
    purpose: "Shows busiest times based on historical order data.",
    features: "Hover over bars to see exact numbers. Great for staffing and scheduling insights.",
  },
  {
    chart: "Total Revenue Chart",
    purpose: "Displays total revenue performance over time.",
    features: "Dropdown to adjust timeline (similar to Conversion Chart).",
  },
]

const links: { icon: Icon; name: string }[] = [
  { icon: PackageIcon, name: "Products" },
  { icon: ClipboardListIcon, name: "Tasks" },
  { icon: UsersIcon, name: "Employees" },
  { icon: ShoppingCartIcon, name: "Orders" },
  { icon: UserRoundIcon, name: "Customers" },
  { icon: HandshakeIcon, name: "Deals" },
]

const shortcuts: { name: string; fn: string }[] = [
  { name: "Customer Queue", fn: "Quickly jump to view and manage the customer queue." },
  {
    name: "Task List",
    fn: "Add new tasks, track pending/completed tasks, view priority, assigned user, creation and due dates.",
  },
  {
    name: "Registers",
    fn: 'View and manage registers. Toggle status ON/OFF. Under "Action", see associated drawers, open/close a drawer, create deposits or withdrawals.',
  },
  {
    name: "State Reporting Alerts",
    fn: 'Monitor all sales, transfer, and communication issues with state tracking and reporting integrations. Each event has a "+" button to expand and view detailed information, including links to resolve the issue.',
  },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

const shot = "h-auto w-full rounded-card border border-h-line shadow-[0_24px_48px_-28px_rgba(11,30,49,.5)]"

// Decorative dashboard: stat tiles and a bar chart. No text, so it adds no copy.
const bars = ["h-1/3", "h-1/2", "h-2/5", "h-3/4", "h-3/5", "h-full", "h-2/3"]

function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/[.06] p-3">
            <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
            <div className="mt-3 h-3 w-2/3 rounded-full bg-copper-400/80" />
          </div>
          <div className="rounded-lg bg-white/[.06] p-3">
            <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
            <div className="mt-3 h-3 w-1/2 rounded-full bg-white/40" />
          </div>
        </div>
        <div className="flex h-32 items-end gap-2 rounded-lg bg-white/[.06] p-3">
          {bars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-t ${h} ${i === 5 ? "bg-copper-400" : "bg-white/30"}`} />
          ))}
        </div>
        <div className="mt-3 grid gap-2">
          <div className="h-2 w-3/4 rounded-full bg-white/20" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Help Guide",
  description: "Step-by-step help for using the Bleaum POS.",
}

export default function DashboardOverviewPage() {
  return (
    <div data-page="dashboard-overview" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="do-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="do-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Dashboard Overview
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              The Dashboard gives you a full snapshot of store performance, tasks, sales, and system activity — all in
              one interactive place.
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* Top section */}
      <section id="dashboard-overview" className="py-pad" aria-labelledby="top-h">
        <div id="top-section" className={`${ui.wrap} grid scroll-mt-24 items-center gap-10 lg:grid-cols-[5fr_7fr]`}>
          <div {...ui.rv()}>
            <h2 id="top-h" className={ui.h2}>Top Section: Welcome &amp; Quick Overview</h2>
            <ul className="mt-6 grid gap-4">
              {top.map((t) => (
                <li key={t.label} className="flex gap-4">
                  <span className={`${chip} size-11`}>
                    <t.icon className="size-5" />
                  </span>
                  <p className="text-[.9375rem]">
                    <span className="font-semibold text-h-accent">{t.label}</span> {t.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div {...ui.rv(1)}>
            <Image
              src="/help/dashboard.jpg"
              alt="Dashboard top section with welcome message and summaries"
              width={600}
              height={300}
              sizes="(min-width: 1024px) 40rem, 100vw"
              className={shot}
            />
          </div>
        </div>
      </section>

      {/* Interactive graphs */}
      <section id="interactive-graphs" className="scroll-mt-24 bg-h-surface2 py-pad" aria-labelledby="graphs-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[44rem]")}>
            <h2 id="graphs-h" className={ui.h2}>Middle Section: Interactive Graphs</h2>
          </div>
          <div {...ui.rv(0, "mx-auto mt-8 max-w-[44rem]")}>
            <Image
              src="/help/dashboardmidsection.jpg"
              alt="Dashboard middle section with charts and quick links"
              width={600}
              height={300}
              sizes="(min-width: 768px) 44rem, 100vw"
              className={shot}
            />
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            {charts.map((c, i) => (
              <li key={c.chart} {...ui.rv(i)}>
                <div className={`${ui.lift} h-full rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                  <h3 className={ui.h3}>{c.chart}</h3>
                  <dl className="mt-4 grid gap-3 border-t border-h-line pt-4 text-[.9375rem]">
                    <div>
                      <dt className="font-semibold text-h-accent">Purpose</dt>
                      <dd className="text-h-muted">{c.purpose}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-h-accent">Key Features</dt>
                      <dd className="text-h-muted">{c.features}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <p {...ui.rv(0, "mt-8 max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]")}>
            All charts are interactive. Hover over points to see detailed data.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section id="quick-links" className="scroll-mt-24 py-pad" aria-labelledby="links-h">
        <div className={`${ui.wrap} max-w-[60rem]`}>
          <div {...ui.rv()}>
            <h2 id="links-h" className={ui.h2}>Middle Section: Key Quick Links</h2>
            <p className="mt-3">Below the charts, you&apos;ll find six quick links:</p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {links.map((l, i) => (
              <li key={l.name} {...ui.rv(i)}>
                <div className={`${ui.lift} flex items-center gap-3 rounded-card border border-h-line bg-h-surface p-4`}>
                  <span className={`${chip} size-10`}>
                    <l.icon className="size-5" />
                  </span>
                  <span className="font-display font-medium">{l.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <p {...ui.rv(0, "mt-8 max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]")}>
            Clicking any link takes you directly to that section for deeper management.
          </p>
        </div>
      </section>

      {/* Shortcuts */}
      <section id="shortcuts" className="scroll-mt-24 bg-h-surface2 py-pad" aria-labelledby="short-h">
        <div className={`${ui.wrap} max-w-[60rem]`}>
          <div {...ui.rv()}>
            <h2 id="short-h" className={ui.h2}>Shortcuts Section</h2>
            <div className="mt-8 overflow-x-auto rounded-card border border-h-line bg-h-surface">
              <table className="w-full min-w-[32rem] border-collapse text-left text-[.9375rem]">
                <thead>
                  <tr className="bg-h-surface2">
                    <th scope="col" className={`${ui.label} w-1/3 px-5 py-4 sm:px-8`}>Shortcut</th>
                    <th scope="col" className={`${ui.label} px-5 py-4 sm:px-8`}>Function</th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map((s) => (
                    <tr key={s.name} className="border-t border-h-line align-top">
                      <th scope="row" className="px-5 py-5 font-semibold text-h-accent sm:px-8">{s.name}</th>
                      <td className="px-5 py-5 text-h-muted sm:px-8">{s.fn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
