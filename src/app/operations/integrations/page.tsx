import type { ComponentType } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CircleCheckIcon, LinkIcon, /* QuoteIcon, REVIEWS HIDDEN (website-updates/all-pages.md #15) */ ZapIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"
import { IntegrationsCatalog, type Partner, type PartnerGroup } from "@/components/views/integrations-catalog"
import { IntegrationsHeroArt } from "@/components/views/integrations-hero-art"

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
      // No longer a client
      // { name: "Lightspeed", logo: "/integrations/lightspeed.png", category: "POS" },
      { name: "Google Analytics", logo: "/integrations/googleanalytics.png", category: "Analytics" },
    ],
  },
  {
    title: "Regulated retail integrations",
    items: [
      // No longer clients
      // { name: "Treez", logo: "/integrations/treez.png", category: "POS" },
      // { name: "Cova", logo: "/integrations/cova.png", category: "POS" },
      // { name: "Indica Online", logo: "/integrations/indicaonlinr.png", category: "POS" },
      // { name: "GrowFlow", logo: "/integrations/growflow1.png", category: "Inventory" },
      // { name: "Weave", logo: "/integrations/weave.png", category: "CRM" },
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
  /* No longer clients: GrowFlow, Lightspeed, Treez, Cova, Indica Online, Weave
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
  */
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

// Partnerships orbit: integrations sit on an ellipse around the Bleaum hub (SVG units, 1000×620 box).
// Each node draws its own line to the hub, so hovering a node lights its line. Below lg it is a plain grid.
const [generalTiles, regulatedTiles, programTiles] = tileGroups
const W = 1000
const H = 620
const CX = 500
const CY = 290
const round = (v: number) => Math.round(v * 10) / 10
const orbit = [...generalTiles.items, ...regulatedTiles.items].map((t, i, all) => {
  // General integrations start just left of top, so they sit as a pair at 12 o'clock.
  const a = ((-90 - 180 / all.length + (360 / all.length) * i) * Math.PI) / 180
  const x = CX + 400 * Math.cos(a)
  const y = CY + 215 * Math.sin(a)
  // Curve the line a little off the straight path.
  const qx = (x + CX) / 2 - (CY - y) * 0.18
  const qy = (y + CY) / 2 + (CX - x) * 0.18
  return {
    ...t,
    general: i < generalTiles.items.length,
    live: t.category !== "Coming Soon",
    left: `${round((x / W) * 100)}%`,
    top: `${round((y / H) * 100)}%`,
    d: `M${round(x)} ${round(y)} Q${round(qx)} ${round(qy)} ${CX} ${CY}`,
  }
})
// White tile so dark logos stay readable in dark mode.
const logoTile = "relative size-14 shrink-0 rounded-ctl bg-white transition-transform duration-300 ease-soft group-hover:scale-110"

export default function IntegrationsPage() {
  return (
    <div data-page="integrations" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="int-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[1fr_1.15fr]`}>
          <div>
            <h1 id="int-h" className={`${ui.h1} max-w-[18ch] animate-rise`}>
              <span className="lg:block">One Platform.</span> <span className="lg:block">Total Sync.</span>{" "}
              <span className="lg:block">No Double Entry.</span>
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
          {/* REVIEWS HIDDEN (website-updates/all-pages.md #15)
          <figure className="animate-rise rounded-card border border-white/20 bg-navy-950/90 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,.7)] backdrop-blur-md [animation-delay:200ms] sm:p-8">
            <QuoteIcon className="size-8 text-copper-400" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-[1.0625rem] font-medium leading-[1.5]">
              &quot;We used to spend hours every week exporting reports and fixing mismatched data. Now, everything just
              flows. Our accountant is happy, and so am I.&quot;
            </blockquote>
            <figcaption className="mt-4 text-[.9375rem] font-semibold text-copper-400">— Diana, Doctor Greens</figcaption>
          </figure> */}
          {/* The open box with roads out to partner systems (consepts/H-box-city) */}
          <div className="animate-rise [animation-delay:200ms] max-lg:mx-auto max-lg:w-full max-lg:max-w-[40rem] lg:-mr-[8%]">
            <IntegrationsHeroArt />
          </div>
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
          {/* Legend: the two integration groups, told apart by the ring around each logo */}
          <div {...ui.rv(0, "mt-8 flex flex-wrap gap-x-8 gap-y-3")}>
            {[generalTiles, regulatedTiles].map((g, i) => (
              <h3 key={g.title} className={`${ui.label} flex items-center gap-2.5 text-[1rem]`}>
                <span className={`size-2.5 rounded-full ${i ? "bg-fog-300" : "bg-copper-400"}`} aria-hidden="true" />
                {g.title}
              </h3>
            ))}
          </div>

          <div {...ui.rv(1, "relative mt-8 lg:mx-auto lg:mt-4 lg:aspect-[1000/620] lg:max-w-[1000px]")}>
            {/* Glow and a slowly turning dotted orbit */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
              <div className="absolute left-1/2 top-[46.8%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(223,151,112,.16),transparent)]" />
              <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" fill="none">
                <ellipse cx={CX} cy={CY} rx={400} ry={215} pathLength={100} strokeDasharray=".25 1.25" strokeLinecap="round" strokeWidth={2} className="animate-[flow_120s_linear_infinite] stroke-h-line" />
              </svg>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:block">
              {orbit.map((t, i) => (
                <li key={t.name} className="group">
                  {/* Line to the hub; a copper pulse runs along it (in or out) while the integration is live */}
                  <svg viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0 hidden size-full lg:block" fill="none" aria-hidden="true">
                    <path d={t.d} strokeWidth={1.5} strokeDasharray={t.live ? undefined : "4 6"} className="stroke-h-line transition-[stroke] duration-300 group-hover:stroke-copper-400" />
                    {t.live && (
                      <path
                        d={t.d}
                        pathLength={100}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeDasharray="5 95"
                        className={`animate-flow stroke-copper-400 ${i % 2 ? "[animation-direction:reverse]" : ""}`}
                        style={{ animationDelay: `${-i * 0.45}s` }}
                      />
                    )}
                  </svg>
                  <div
                    className="flex h-full flex-col items-center rounded-card border border-h-line bg-h-surface p-4 text-center lg:absolute lg:z-10 lg:h-auto lg:w-40 lg:-translate-x-1/2 lg:-translate-y-7 lg:border-0 lg:bg-transparent lg:p-0"
                    style={{ left: t.left, top: t.top }}
                  >
                    <div className={`${logoTile} ring-2 ring-offset-4 ring-offset-h-surface lg:ring-offset-h-bg ${t.general ? "ring-copper-400" : "ring-fog-300/50"}`}>
                      <Image src={t.logo} alt={`${t.name} Logo`} fill sizes="56px" className="object-contain p-2" />
                    </div>
                    <p className="mt-4 font-display text-[.9375rem] font-medium leading-[1.3] lg:[text-shadow:0_0_6px_var(--h-bg),0_0_12px_var(--h-bg)]">
                      {t.name}
                      <span className="sr-only">, {t.general ? generalTiles.title : regulatedTiles.title}</span>
                    </p>
                    <span className="mt-1.5 rounded-full bg-h-surface2 px-3 py-1 text-[.75rem] font-semibold text-h-accent">
                      {t.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bleaum hub */}
            <div className="absolute left-1/2 top-[46.8%] z-20 hidden size-32 -translate-x-1/2 -translate-y-1/2 place-items-center lg:grid" aria-hidden="true">
              <span className="absolute inset-0 animate-halo rounded-full border border-copper-400/70" />
              <span className="absolute inset-0 animate-halo rounded-full border border-copper-400/70 [animation-delay:1.6s]" />
              <span className="relative grid size-full place-items-center rounded-full border border-white/15 bg-navy-900 shadow-[0_24px_64px_-20px_rgba(223,151,112,.55)]">
                <Image src="/brand/bleaum-dots.svg" alt="" width={72} height={72} className="size-[4.5rem]" />
              </span>
            </div>
          </div>

          {/* Programs and memberships: one hairline strip */}
          <div className="mt-14 lg:mt-10">
            <h3 {...ui.rv(0, ui.h3)}>{programTiles.title}</h3>
            <ul {...ui.rv(1, "mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-h-line bg-h-line sm:grid-cols-3 lg:grid-cols-6")}>
              {programTiles.items.map((t) => (
                <li key={t.name} className="group flex flex-col items-center bg-h-surface px-3 py-6 text-center transition-colors duration-300 hover:bg-h-surface2">
                  <div className={logoTile}>
                    <Image src={t.logo} alt={`${t.name} Logo`} fill sizes="56px" className="object-contain p-2" />
                  </div>
                  <p className="mt-3 font-display text-[.9375rem] font-medium leading-[1.3]">{t.name}</p>
                  <span className="mt-1 text-[.75rem] font-semibold text-h-accent">{t.category}</span>
                </li>
              ))}
            </ul>
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
