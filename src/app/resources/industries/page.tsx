import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  Globe2Icon,
  GiftIcon,
  HeartPulseIcon,
  LayersIcon,
  LeafIcon,
  LockIcon,
  MonitorIcon,
  PillIcon,
  Settings2Icon,
  ShieldCheckIcon,
  ShirtIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StethoscopeIcon,
  StoreIcon,
  TruckIcon,
  WineIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Bleaum serves retail, wholesale and distribution, and regulated markets with one flexible platform.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page; website-updates/industries.md #97, #98 and #100 are already applied.
// #99 (which regulated verticals to keep) and #101 (short descriptions for each vertical) wait on the business,
// so the lists below stay as they were, except #137 (Medical MJ and Recreational MJ added to Regulated Industries).
const regulated: [Icon, string][] = [
  [PillIcon, "Pharmaceutical Outlets"],
  [WineIcon, "Liquor Stores"],
  [StethoscopeIcon, "Medical MJ"],
  [LeafIcon, "Recreational MJ"],
]

const retail: [Icon, string][] = [
  [ShirtIcon, "Apparel & Footwear"],
  [StoreIcon, "Convenience Stores"],
  [SparklesIcon, "Beauty & Cosmetics"],
  [MonitorIcon, "Electronics"],
  [GiftIcon, "Specialty Retail (e.g., gifts, home goods)"],
  [TruckIcon, "Wholesale & Distribution"],
  [HeartPulseIcon, "Health & Wellness"],
  [PillIcon, "Supplements & Nutrition"],
]

const why: { icon: Icon; title: string; text: string }[] = [
  { icon: LockIcon, title: "Compliance-Ready", text: "Integrated with state and regulatory systems." },
  {
    icon: ShoppingCartIcon,
    title: "Retail-Focused Tools",
    text: "Inventory, fulfillment, and customer engagement designed for speed and flexibility.",
  },
  { icon: Globe2Icon, title: "Multi-Industry Expertise", text: "One platform, many verticals." },
  {
    icon: Settings2Icon,
    title: "Customizable Workflows",
    text: "Tailor everything to how your business operates.",
  },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative grid of vertical tiles: an icon and a bar each. No text, so it adds no copy.
function Preview() {
  const tiles = [ShirtIcon, StoreIcon, TruckIcon, PillIcon, MonitorIcon, WineIcon]
  return (
    <div className="relative hidden h-[18rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <LayersIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {tiles.map((T, i) => (
            <div key={i} className="flex flex-col items-center gap-3 rounded-lg bg-white/[.06] px-2 py-4">
              <T className="size-6 text-copper-400" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/25" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Title and intro on the left, tiles on the right; stacks on small screens.
function Group({
  id,
  icon: I,
  title,
  text,
  items,
  tone,
  cols,
}: {
  id: string
  icon: Icon
  title: string
  text: string
  items: [Icon, string][]
  tone?: string
  cols: string
}) {
  return (
    <section className={`py-pad ${tone ?? ""}`} aria-labelledby={id}>
      <div className={`${ui.wrap} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14`}>
        <div {...ui.rv(0, "max-w-[44ch]")}>
          <span className={`${chip} mb-4 size-12`}>
            <I className="size-6" />
          </span>
          <h2 id={id} className={ui.h2}>{title}</h2>
          <p className="mt-4 text-h-muted">{text}</p>
        </div>
        <ul className={`grid content-start gap-3 sm:gap-4 ${cols}`}>
          {items.map(([T, label], i) => (
            <li key={label} {...ui.rv(i)}>
              <div className={`${ui.lift} flex h-full items-center gap-4 rounded-card border border-h-line bg-h-surface p-4`}>
                <span className={`${chip} size-11`}>
                  <T className="size-5" />
                </span>
                <span className="font-display font-medium leading-snug">{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function IndustriesPage() {
  return (
    <div data-page="industries" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="ind-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="ind-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Industries We Serve
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              We power businesses across a wide range of retail and regulated sectors. Whether you&apos;re managing a
              boutique storefront or operating in a highly regulated industry, our platform delivers the tools,
              compliance, and performance you need to thrive.
            </p>
          </div>
          <Preview />
        </div>
      </section>

      <Group
        id="reg-h"
        icon={ShieldCheckIcon}
        title="Regulated Industries"
        text="We are built to handle the complexity of compliance-heavy markets. From package-level inventory tracking to regulatory reporting, we keep your business audit-ready at all times."
        items={regulated}
        cols="sm:grid-cols-2"
      />

      <Group
        id="ret-h"
        icon={StoreIcon}
        title="Retail-Based Industries"
        text="Our platform supports modern retail operations with features like real-time inventory, flexible POS workflows, promotions, customer loyalty, and multi-location management."
        items={retail}
        tone="bg-h-surface2"
        cols="sm:grid-cols-2"
      />

      {/* Why Choose Us */}
      <section className="py-pad" aria-labelledby="why-h">
        <div className={ui.wrap}>
          <h2 id="why-h" {...ui.rv(0, `${ui.h2} max-w-[24ch]`)}>Why Choose Us?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {why.map(({ icon: I, title, text }, i) => (
              <li key={title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-12`}>
                    <I className="size-6" />
                  </span>
                  <h3 className={ui.h3}>{title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
