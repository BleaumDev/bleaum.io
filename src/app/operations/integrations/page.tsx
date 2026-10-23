import type { ComponentType } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CircleCheckIcon, LinkIcon, QuoteIcon, ZapIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"
import { IntegrationsCatalog, type Partner, type PartnerGroup } from "@/components/views/integrations-catalog"

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Bleaum to accounting, analytics, payments, ID verification and state reporting systems.",
}

type Tile = { name: string; logo: string; category: string }
type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page; website-updates/integrations.md #89, #90, #91 and #94 are already applied.
// #92, #93 and #96 (QuickBooks and AI Reporting "Coming Soon", the Diana quote) wait on the business.
// The old page also had a commented-out "Don't see your tool?" block; it never rendered, so it stays out.
const tileGroups: { title: string; items: Tile[] }[] = [
  {
    title: "General integrations",
    items: [
      { name: "QuickBooks", logo: "/integrations/quickbooks.png", category: "Coming Soon" },
      { name: "Lightspeed", logo: "/integrations/lightspeed.png", category: "POS" },
      { name: "Google Analytics", logo: "/integrations/googleanalytics.png", category: "Analytics" },
    ],
  },
  {
    title: "Regulated retail integrations",
    items: [
      { name: "Treez", logo: "/integrations/treez.png", category: "POS" },
      { name: "Cova", logo: "/integrations/cova.png", category: "POS" },
      { name: "Indica Online", logo: "/integrations/indicaonlinr.png", category: "POS" },
      { name: "GrowFlow", logo: "/integrations/growflow1.png", category: "Inventory" },
      { name: "Weave", logo: "/integrations/weave.png", category: "CRM" },
      { name: "Leafly", logo: "/integrations/leafly.png", category: "Marketplace" },
      { name: "Weedmaps", logo: "/integrations/weedmaps.png", category: "Marketplace" },
      { name: "Springbig", logo: "/integrations/springbig.png", category: "Loyalty" },
      { name: "Blackleaf", logo: "/integrations/blackleaf.png", category: "Marketing" },
      { name: "Aeropay", logo: "/integrations/aeropay.png", category: "Payments" },
      { name: "IDScan", logo: "/integrations/idscan.png", category: "Verification" },
      { name: "GREEN Dispensary Marketing", logo: "/integrations/greendispensary.jpg", category: "Marketing" },
    ],
  },
  {
    title: "Programs and memberships",
    items: [
      { name: "Google", logo: "/integrations/google.jpg", category: "Google for Startups" },
      { name: "Microsoft", logo: "/integrations/microsoft.png", category: "Microsoft for Startups" },
      { name: "AWS", logo: "/integrations/AWS1.jpg", category: "Cloud" },
      { name: "Microsoft Azure", logo: "/integrations/azure.jpg", category: "Cloud" },
      { name: "NVIDIA", logo: "/integrations/nvidia.svg", category: "NVIDIA Inception Program" },
      { name: "Claude", logo: "/integrations/claude.svg", category: "Claude for Startups" },
    ],
  },
]

// group: "general" tools work for any retailer; "regulated" are for regulated retail
const partnerGroups: PartnerGroup[] = [
  { id: "general", title: "General integrations" },
  { id: "regulated", title: "Regulated retail integrations" },
]

const partners: Partner[] = [
  {
    name: "State Traceability",
    category: "TRACEABILITY",
    description:
      "State traceability integration: inventory, sales and delivery events are reported to the state tracking systems you are required to use.",
    logo: "",
    logoAlt: "",
    status: "Active",
    group: "regulated",
  },
  {
    name: "IDScan",
    category: "ID VERIFICATION",
    description:
      "IDScan provides secure ID verification and customer check-in solutions for age-restricted retail locations.",
    logo: "/integrations/idscan.png",
    logoAlt: "IDScan Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "QuickBooks",
    category: "ACCOUNTING",
    description:
      "QuickBooks integration for seamless financial management and automated bookkeeping for your business.",
    logo: "/integrations/quickbooks.png",
    logoAlt: "QuickBooks Logo",
    status: "Coming Soon",
    group: "general",
  },
  {
    name: "Aeropay",
    category: "PAYMENTS",
    description: "Aeropay offers digital payment solutions that help retailers accept secure, bank-based transactions.",
    logo: "/integrations/aeropay.png",
    logoAlt: "Aeropay Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "GrowFlow",
    category: "INVENTORY",
    description: "GrowFlow provides inventory management and production tracking for regulated operations.",
    logo: "/integrations/growflow1.png",
    logoAlt: "GrowFlow Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Lightspeed",
    category: "POINT OF SALE",
    description: "Lightspeed retail POS system integration for streamlined retail operations and inventory management.",
    logo: "/integrations/lightspeed.png",
    logoAlt: "Lightspeed Logo",
    status: "Active",
    group: "general",
  },
  {
    name: "Treez",
    category: "POINT OF SALE",
    description: "Treez is a retail platform offering POS, inventory, and compliance management.",
    logo: "/integrations/treez.png",
    logoAlt: "Treez Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Cova",
    category: "POINT OF SALE",
    description: "Cova provides retail software with POS, inventory management, and compliance reporting features.",
    logo: "/integrations/cova.png",
    logoAlt: "Cova Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Indica Online",
    category: "POINT OF SALE",
    description: "Indica Online offers retail software with integrated POS, inventory, and customer management tools.",
    logo: "/integrations/indicaonlinr.png",
    logoAlt: "Indica Online Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Weave",
    category: "CUSTOMER MANAGEMENT",
    description: "Weave provides customer communication and business management tools for retailers.",
    logo: "/integrations/weave.png",
    logoAlt: "Weave Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Leafly",
    category: "MARKETPLACE",
    description: "Leafly is an online marketplace connecting consumers with local retailers and brands.",
    logo: "/integrations/leafly.png",
    logoAlt: "Leafly Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Weedmaps",
    category: "MARKETPLACE",
    description: "Weedmaps is a discovery platform that connects consumers with local retailers and delivery services.",
    logo: "/integrations/weedmaps.png",
    logoAlt: "Weedmaps Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Springbig",
    category: "LOYALTY",
    description: "Springbig provides a customer loyalty and marketing automation platform for retailers.",
    logo: "/integrations/springbig.png",
    logoAlt: "Springbig Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Blackleaf",
    category: "MARKETING",
    description: "Blackleaf offers marketing and customer engagement tools for retailers.",
    logo: "/integrations/blackleaf.png",
    logoAlt: "Blackleaf Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Green Dispensary Marketing",
    category: "MARKETING",
    description: "GREEN Dispensary is a retail partner providing marketing and customer engagement solutions.",
    logo: "/integrations/greendispensary.jpg",
    logoAlt: "GREEN Dispensary Logo",
    status: "Active",
    group: "regulated",
  },
  {
    name: "Google Analytics",
    category: "ANALYTICS",
    description:
      "Google Analytics integration provides comprehensive web analytics and customer behavior insights for your business.",
    logo: "/integrations/googleanalytics.png",
    logoAlt: "Google Analytics Logo",
    status: "Active",
    group: "general",
  },
  {
    name: "Bleaum AI Reporting",
    category: "ANALYTICS",
    description:
      "Advanced AI-powered reporting and insights from Bleaum to help you understand your business performance and growth opportunities.",
    logo: "/integrations/aireporting.png",
    logoAlt: "Bleaum AI Reporting Logo",
    status: "Coming Soon",
    group: "general",
    dim: true,
  },
]

const native: { icon: Icon; title: string; text: string }[] = [
  {
    icon: ZapIcon,
    title: "Built-In Power",
    text: "Everything you need in one platform—no setup, no sync issues, no extra fees.",
  },
  {
    icon: LinkIcon,
    title: "Seamless Connections",
    text: "Keep your favorite tools and connect them effortlessly with real-time data flow.",
  },
]

const benefits: { title: string; text: string }[] = [
  {
    title: "Full traceability",
    text: "We sync directly with state tracking and reporting systems, ensuring all inventory, sales, and delivery events are reported in real time.",
  },
  {
    title: "Connected ecosystem",
    text: "We integrate with analytics, loyalty, ID verification, marketplace and payment tools, and others—so your data flows where it needs to.",
  },
  {
    title: "POS + Ecommerce + Delivery",
    text: "Unlike patchwork systems, Bleaum lets you connect all touchpoints:\nApp → Website → In-Store POS → Last Mile Delivery\n…without the painful handoffs.",
  },
  {
    title: "Marketing, CRM & Reports",
    text: "Automatically feed sales and customer data into your preferred marketing platforms and CRM tools. Plus, export what you need—when you need it—with clean, real-time data.",
  },
  {
    title: "AI-powered insights",
    text: "Built-in reporting and analytics help you understand margins, movement, and growth drivers without lifting a finger.",
  },
]

// White tile so dark logos stay readable in dark mode.
const logoTile = "relative size-16 rounded-ctl bg-white sm:size-20"

export default function IntegrationsPage() {
  return (
    <div data-page="integrations" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="int-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="int-h" className={`${ui.h1} max-w-[18ch] animate-rise`}>
              One Platform. Total Sync. No Double Entry.
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Bleaum unifies your business — from mobile apps and ecommerce to POS, delivery, payments, and compliance —
              in a single intelligent system.
            </p>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:180ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Schedule a Demo <ArrowRightIcon className="size-5" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
          <figure className="animate-rise rounded-card border border-white/20 bg-navy-950/90 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,.7)] backdrop-blur-md [animation-delay:200ms] sm:p-8">
            <QuoteIcon className="size-8 text-copper-400" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-[1.0625rem] font-medium leading-[1.5]">
              &quot;We used to spend hours every week exporting reports and fixing mismatched data. Now, everything just
              flows. Our accountant is happy, and so am I.&quot;
            </blockquote>
            <figcaption className="mt-4 text-[.9375rem] font-semibold text-copper-400">— Diana, Doctor Greens</figcaption>
          </figure>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-pad" aria-labelledby="part-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <h2 id="part-h" className={ui.h2}>Partnerships</h2>
            <p className="mt-3">
              Seamless integrations that power your retail business operations. Bleaum is a member of Google for Startups,
              Microsoft for Startups and AWS.
            </p>
          </div>
          <div className="mt-10 grid gap-10">
            {tileGroups.map((g) => (
              <div key={g.title}>
                <h3 {...ui.rv(0, ui.h3)}>{g.title}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
                  {g.items.map((t, i) => (
                    <li key={t.name} {...ui.rv(i % 6)}>
                      <div className={`${ui.lift} flex h-full flex-col items-center rounded-card border border-h-line bg-h-surface p-4 text-center`}>
                        <div className={logoTile}>
                          <Image src={t.logo} alt={`${t.name} Logo`} fill sizes="80px" className="object-contain p-2" />
                        </div>
                        <p className="mt-3 font-display text-[.9375rem] font-medium leading-[1.3]">{t.name}</p>
                        <span className="mt-2 rounded-full bg-h-surface2 px-3 py-1 text-[.75rem] font-semibold text-h-accent">
                          {t.category}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration catalog: category filter and cards */}
      <section className="bg-h-surface2 py-pad" aria-label="Integration catalog">
        <div className={ui.wrap}>
          <IntegrationsCatalog partners={partners} groups={partnerGroups} />
        </div>
      </section>

      {/* Native vs integrated */}
      <section className="py-pad" aria-labelledby="native-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <h2 id="native-h" className={ui.h2}>Native when you want it. Integrated when you need it.</h2>
            <p className="mt-3">
              With native integrations to state tracking and reporting systems and a suite of third-party tools, we help
              you move faster, stay compliant, and reduce manual tasks that eat up time and create errors.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
            {native.map((n, i) => (
              <li key={n.title} {...ui.rv(i)}>
                <div className={`${ui.lift} h-full rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                  <span className="mb-5 grid size-11 place-items-center rounded-ctl bg-h-surface2 text-h-accent">
                    <n.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{n.title}</h3>
                  <p className="mt-2 text-[.9375rem] text-h-muted">{n.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div {...ui.rv(0, `${ui.actions} mt-8`)}>
            <Link href="/support" className={`${ui.btnPrimary} ${ui.stack} gap-2`}>
              Would you like to become integration partner? Let&apos;s talk <ArrowRightIcon className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="ben-h">
        <div className={`${ui.wrap} max-w-[60rem]`}>
          <h2 id="ben-h" {...ui.rv(0, ui.h2)}>Smart Integrations. Smoother Operations.</h2>
          <ul className="mt-8 grid gap-4">
            {benefits.map((b, i) => (
              <li key={b.title} {...ui.rv(i)}>
                <div className="flex gap-4 rounded-card border border-h-line bg-h-surface p-6">
                  <CircleCheckIcon className="mt-0.5 size-6 shrink-0 text-h-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-medium leading-[1.3]">{b.title}</h3>
                    <p className="mt-1 whitespace-pre-line text-[.9375rem] text-h-muted">{b.text}</p>
                  </div>
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
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Ready to drop the disconnected systems?</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">Bleaum connects your entire operation — and simplifies everything.</p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Schedule Your Demo <ArrowRightIcon className="size-5" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
