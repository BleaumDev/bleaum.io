import type { ComponentType } from "react"
import type { Metadata } from "next"
import * as icons from "@/components/icons/product-icons"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"
import { IndustriesHeroArt } from "@/components/views/industries-hero-art"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Bleaum serves retail, wholesale and distribution, and regulated markets with one flexible platform.",
}

type Icon = ComponentType<{ className?: string; delay?: number }>

// Copy is unchanged from the old page; website-updates/industries.md #97, #98 and #100 are already applied.
// #99 (which regulated verticals to keep) and #101 (short descriptions for each vertical) wait on the business,
// so the lists below stay as they were, except #137 (Medical MJ and Recreational MJ added to Regulated Industries).
const regulated: [Icon, string][] = [
  [icons.PharmacyIcon, "Pharmaceutical Outlets"],
  [icons.LiquorIcon, "Liquor Stores"],
  [icons.MedicalIcon, "Medical MJ"],
  [icons.LeafIcon, "Recreational MJ"],
]
 
const retail: [Icon, string][] = [
  [icons.ApparelIcon, "Apparel & Footwear"],
  [icons.ConvenienceIcon, "Convenience Stores"],
  [icons.BeautyIcon, "Beauty & Cosmetics"],
  [icons.ElectronicsIcon, "Electronics"],
  [icons.GiftIcon, "Specialty Retail (e.g., gifts, home goods)"],
  [icons.WholesaleIcon, "Wholesale & Distribution"],
  [icons.WellnessIcon, "Health & Wellness"],
  [icons.SupplementsIcon, "Supplements & Nutrition"],
]

const why: { icon: Icon; title: string; text: string }[] = [
  { icon: icons.ComplianceIcon, title: "Compliance-Ready", text: "Integrated with state and regulatory systems." },
  {
    icon: icons.AllProductsIcon,
    title: "Retail-Focused Tools",
    text: "Inventory, fulfillment, and customer engagement designed for speed and flexibility.",
  },
  { icon: icons.OneSystemIcon, title: "Multi-Industry Expertise", text: "One platform, many verticals." },
  {
    icon: icons.WorkflowIcon,
    title: "Customizable Workflows",
    text: "Tailor everything to how your business operates.",
  },
]

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
          <I className="mb-4 size-14 text-h-text" delay={0.2} />
          <h2 id={id} className={ui.h2}>{title}</h2>
          <p className="mt-4 text-h-muted">{text}</p>
        </div>
        <ul className={`grid content-start gap-3 sm:gap-4 ${cols}`}>
          {items.map(([T, label], i) => (
            <li key={label} {...ui.rv(i)}>
              <div className={`${ui.lift} group flex h-full items-center gap-4 rounded-card border border-h-line bg-h-surface p-4`}>
                {/* Tiles in a row assemble their icons one after another. */}
                <T className="size-12 text-h-text" delay={0.2 + (i % 2) * 0.12} />
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
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[1fr_1.15fr]`}>
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
          {/* One platform with the kinds of business it runs around it */}
          <div className="animate-rise [animation-delay:200ms] max-lg:mx-auto max-lg:w-full max-lg:max-w-[40rem] lg:-mr-[8%]">
            <IndustriesHeroArt />
          </div>
        </div>
      </section>

      <Group
        id="reg-h"
        icon={icons.RegulatedIcon}
        title="Regulated Industries"
        text="We are built to handle the complexity of compliance-heavy markets. From package-level inventory tracking to regulatory reporting, we keep your business audit-ready at all times."
        items={regulated}
        cols="sm:grid-cols-2"
      />

      <Group
        id="ret-h"
        icon={icons.PosIcon}
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
                <div className={`${ui.lift} group flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <I className="size-14 text-h-text" delay={0.2 + (i % 4) * 0.12} />
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
