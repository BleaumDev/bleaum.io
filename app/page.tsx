"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, MotionConfig } from "framer-motion"
import {
  ArrowRight,
  Play,
  Check,
  ShoppingCart,
  MapPin,
  CreditCard,
  Smartphone,
  Boxes,
  ShieldCheck,
  Building2,
  Receipt,
  Headphones,
  Clock,
  CircleDollarSign,
  Lock,
  Link2,
  ScrollText,
  Star,
  Target,
  Sparkles,
  Award,
  TrendingUp,
  Eye,
  Zap,
  Bell,
  Printer,
  MessageSquare,
  Mail,
} from "lucide-react"
import { trackDemoClick } from "@/components/navbar"

const wrap = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-7 py-3.5 text-[15px] font-semibold text-brand-navy shadow-lg shadow-brand-coral/25 transition-colors duration-200 hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-fg focus-visible:ring-offset-2"
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ui-line/15 bg-ui-surface px-7 py-3.5 text-[15px] font-semibold text-ui-fg transition-colors duration-200 hover:border-ui-line/30 hover:bg-ui-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-fg focus-visible:ring-offset-2"

const INTEGRATIONS = [
  { name: "Metrc", src: "/metrc.png" },
  { name: "BioTrack", src: "/biotrack.png" },
  { name: "Leafly", src: "/leafly.png" },
  { name: "Weedmaps", src: "/weedmaps.png" },
  { name: "Springbig", src: "/springbig.png" },
  { name: "QuickBooks", src: "/quickbooks.png" },
  { name: "AeroPay", src: "/aeropay.png" },
  { name: "IDScan", src: "/idscan.png" },
]

const PRODUCTS = [
  { title: "All-in-one POS", desc: "Lightning-fast checkout with real-time inventory sync, offline mode and multi-payment support.", href: "/grow/point-of-sale", img: "/posimage.png", icon: ShoppingCart, featured: true },
  { title: "Bleaum Pay", desc: "One payment platform. Fully covered.", href: "/grow/payments", img: "/bleaumpay.png", icon: CreditCard },
  { title: "Last-mile delivery", desc: "Smart routing, OTP verification and live driver tracking.", href: "/grow/delivery", img: "/delivery.png", icon: MapPin },
  { title: "Branded mobile app", desc: "Your own iOS & Android storefront, live in days.", href: "/grow/ecommerce", img: "/3.png", icon: Smartphone },
  { title: "Real-time inventory", desc: "Live counts, shrinkage tracking and low-stock alerts.", href: "/operations/inventory-management", img: "/inventory.png", icon: Boxes },
  { title: "Secure & compliant", desc: "Metrc & BioTrack sync, audit trails and staff permissions.", href: "/operations/automated-compilance", img: "/7.png", icon: ShieldCheck },
  { title: "Multi-location ready", desc: "Scale across stores and states from one dashboard.", href: "/grow/point-of-sale", img: "/realtime.png", icon: Building2 },
  { title: "Smart receipts", desc: "Print, text or email — branded and tax-compliant.", href: "/grow/point-of-sale", img: "/4.png", icon: Receipt },
]

const REASONS = [
  { title: "POS onboard in 24 hours", desc: "Get up and running fast with our streamlined setup process.", icon: Clock },
  { title: "Multi-location ready", desc: "Scale seamlessly across multiple locations and states.", icon: Building2 },
  { title: "Works on any device", desc: "From storefront to sidewalk — your POS runs on whatever device you've got.", icon: Smartphone },
  { title: "Real support, real fast", desc: "Human help when you need it, not chatbots.", icon: Headphones },
  { title: "Fully compliant, always", desc: "Stay audit-ready 24/7 with built-in compliance tools.", icon: ShieldCheck },
  { title: "Transparent pricing", desc: "No hidden fees, no surprises — just honest pricing.", icon: CircleDollarSign },
]

const SECURITY = [
  { title: "State integrations", desc: "Metrc, BioTrack & state compliance systems.", icon: Link2 },
  { title: "Data security", desc: "Encrypted, backed-up, and SOC 2 compliant.", icon: Lock },
  { title: "Audit ready", desc: "Full audit trails & granular staff permissions.", icon: ScrollText },
]

const INDUSTRIES = [
  { title: "Cannabis retail & delivery", desc: "Complete seed-to-sale tracking with state compliance.", icon: ShoppingCart },
  { title: "Pharmacies & wellness", desc: "Secure handling of controlled substances and patient data.", icon: ShieldCheck },
  { title: "High-compliance retail", desc: "Any retail environment requiring detailed tracking and reporting.", icon: Building2 },
]

const VALUES = [
  { title: "Our mission", desc: "Empower small businesses with enterprise-grade tools that actually work.", icon: Target },
  { title: "Our vision", desc: "A world where running a retail business is simple, profitable, and stress-free.", icon: Sparkles },
  { title: "Our values", desc: "Transparency, reliability, and genuine care for our customers' success.", icon: Award },
]

const STATS = [
  { value: "300+", label: "Happy retailers" },
  { value: "50%", label: "Time saved" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Human support" },
]

const TESTIMONIALS = [
  { quote: "Bleaum cut our inventory time from 4 hours to 30 minutes. Our team actually enjoys using it now!", name: "Perry Jones", company: "Centered by Design", location: "Tulsa, Oklahoma" },
  { quote: "The mobile app launched our online presence overnight. Sales increased 40% in the first month.", name: "Andrew H", company: "Go Green", location: "Ontario, Canada" },
  { quote: "We switched from a big-name POS and never looked back. Bleaum just works—no more headaches.", name: "AJ", company: "Happy Root", location: "Oklahoma City, Oklahoma" },
  { quote: "The compliance features saved us during our last audit. Everything was organized and ready to go.", name: "Angelica", company: "Park Social", location: "Alameda, California" },
]

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-ui-bg text-ui-fg">
        <Hero />
        <IntegrationStrip />
        <Platform />
        <DeepDives />
        <Reasons />
        <Compliance />
        <Operators />
        <Testimonials />
        <FinalCta />
      </div>
    </MotionConfig>
  )
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function BrandMark({ className }: { className?: string }) {
  const cells: [number, number, string][] = [
    [0, 0, "#FBC9C5"], [1, 0, "#E08E5F"],
    [0, 1, "#FDB56E"], [1, 1, "#FBA382"], [2, 1, "#FBC9C5"],
    [1, 2, "#FDB27E"], [2, 2, "#E08E5F"],
  ]
  return (
    <svg aria-hidden viewBox="0 0 34 34" className={className}>
      {cells.map(([x, y, fill]) => (
        <rect key={`${x}-${y}`} x={x * 12} y={y * 12} width="10" height="10" rx="1.5" fill={fill} />
      ))}
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  dark?: boolean
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className={`text-[13px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-brand-peach" : "text-ui-accent"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ui-fg"}`}>{title}</h2>
      {description && (
        <p className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-brand-mist" : "text-ui-body"}`}>{description}</p>
      )}
    </Reveal>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_90%_0%,#FCE6DD_0%,transparent_65%),radial-gradient(40%_50%_at_0%_100%,#FDEBD9_0%,transparent_60%)] dark:opacity-[0.12]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,27,69,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,27,69,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] dark:invert"
      />

      <div className={`${wrap} relative grid items-center gap-16 pb-20 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24`}>
        <Reveal className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-ui-line/10 bg-ui-surface px-3.5 py-1.5 text-xs font-semibold text-ui-fg shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            Trusted by 300+ retailers
          </span>

          <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-ui-fg sm:text-6xl lg:text-[4.25rem]">
            Where retail runs{" "}
            <span className="relative inline-block whitespace-nowrap text-ui-accent">
              smart.
              <svg aria-hidden viewBox="0 0 220 16" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-3 w-full text-brand-coral">
                <path d="M3 12C55 4 140 2 217 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ui-body">
            Point of sale, inventory, delivery, payments and compliance in one platform — built by operators, for
            operators. No more clunky POS.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo" onClick={trackDemoClick} className={btnPrimary}>
              Book a live demo
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/demo" onClick={trackDemoClick} className={btnSecondary}>
              <Play className="h-4 w-4 fill-current" />
              Watch the tour
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ui-body">
            {["Onboard in 24 hours", "No hidden fees", "Real human support"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-teal" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative lg:col-span-7">
          <div className="relative rounded-2xl border border-ui-line/10 bg-ui-surface p-2 shadow-2xl shadow-brand-navy/15">
            <div className="flex items-center gap-1.5 px-3 pb-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs font-medium text-ui-subtle">Bleaum Dashboard</span>
            </div>
            <Image
              src="/IMAGE.png"
              alt="Bleaum dashboard showing sales trends, popular times, revenue and the live customer queue"
              width={1366}
              height={768}
              priority
              className="rounded-xl border border-ui-line/5"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl border border-ui-line/10 bg-ui-surface p-4 shadow-xl shadow-brand-navy/10 sm:block lg:-left-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-ui-subtle">
              <TrendingUp className="h-4 w-4 text-brand-teal" />
              Sales today
            </div>
            <div className="mt-1.5 text-2xl font-extrabold text-ui-fg">$12,480</div>
            <div className="mt-1 text-xs font-semibold text-brand-teal">+18% vs last week</div>
          </div>

          <div className="absolute -right-3 -top-5 hidden items-center gap-3 rounded-2xl border border-ui-line/10 bg-ui-surface px-4 py-3 shadow-xl shadow-brand-navy/10 sm:flex lg:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ui-tint text-ui-accent">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-ui-fg">Metrc synced</div>
              <div className="text-xs text-ui-subtle">Compliant · 2 min ago</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function IntegrationStrip() {
  return (
    <section className="border-y border-ui-line/5 bg-ui-surface">
      <div className={`${wrap} py-12`}>
        <p className="text-center text-sm font-medium text-ui-subtle">
          Connected to the compliance, payment and marketing tools you already use
        </p>
        <ul className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-8 sm:gap-4">
          {INTEGRATIONS.map((integration) => (
            <li key={integration.name} className="flex h-20 items-center justify-center rounded-2xl border border-ui-line/10 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/5">
              <Image src={integration.src} alt={integration.name} width={64} height={64} className="h-full w-auto object-contain" />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/operations/integrations" className="inline-flex items-center gap-1 text-sm font-semibold text-ui-accent hover:underline">
            See all integrations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className={wrap}>
        <SectionHeading
          eyebrow="The platform"
          title="Everything you need. Nothing you don't."
          description="From point of sale to last-mile delivery, we've built the complete retail ecosystem."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.title} delay={(index % 3) * 0.08} className={product.featured ? "sm:col-span-2" : ""}>
              <Link
                href={product.href}
                className="group flex h-full flex-col rounded-3xl border border-ui-line/10 bg-ui-surface p-2.5 transition duration-300 hover:-translate-y-1 hover:border-brand-coral/40 hover:shadow-xl hover:shadow-brand-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
              >
                <div className="relative h-52 overflow-hidden rounded-2xl bg-ui-bg">
                  <Image
                    src={product.img}
                    alt=""
                    fill
                    sizes={product.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ui-tint text-ui-accent">
                      <product.icon className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="text-lg font-bold text-ui-fg">{product.title}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ui-body">{product.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ui-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <BrandMark className="absolute -right-4 -top-6 h-16 w-16 opacity-90" />
      <div className="relative rounded-3xl border border-ui-line/10 bg-ui-surface p-5 shadow-2xl shadow-brand-navy/10 sm:p-7">{children}</div>
    </div>
  )
}

function InventoryMock() {
  const items = [
    { name: "Blue Dream 1/8oz", stock: 24, low: false },
    { name: "OG Kush Pre-rolls", stock: 12, low: false },
    { name: "Sativa Gummies", stock: 3, low: true },
    { name: "CBD Tincture", stock: 18, low: false },
  ]
  return (
    <MockCard>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Eye, value: "Live", label: "Inventory view" },
          { icon: Zap, value: "Instant", label: "Updates" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-ui-bg p-4">
            <stat.icon className="h-5 w-5 text-ui-accent" />
            <div className="mt-3 text-xl font-extrabold">{stat.value}</div>
            <div className="text-xs font-medium text-ui-subtle">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-bold">Current stock levels</span>
        <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-teal">Live</span>
      </div>
      <ul className="mt-3 divide-y divide-ui-line/5">
        {items.map((item) => (
          <li key={item.name} className="flex items-center justify-between py-3 text-sm">
            <span className="text-ui-body">{item.name}</span>
            <span className={`rounded-md px-2 py-0.5 font-semibold ${item.low ? "bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300" : "text-ui-fg"}`}>
              {item.stock} units{item.low && " · Low"}
            </span>
          </li>
        ))}
      </ul>
    </MockCard>
  )
}

function DeliveryMock() {
  const drivers = [
    { driver: "AJ", orders: 3, eta: "15 min" },
    { driver: "Perry", orders: 2, eta: "8 min" },
    { driver: "Andrew", orders: 4, eta: "22 min" },
  ]
  return (
    <MockCard>
      <div className="flex items-start gap-4 rounded-2xl bg-brand-navy p-5 text-white">
        <MapPin className="h-6 w-6 flex-none text-brand-peach" />
        <div>
          <div className="font-bold">Smart routing</div>
          <div className="mt-1 text-sm text-brand-mist">AI-optimized delivery routes in real time</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[
          { value: "OTP", label: "Verification" },
          { value: "Live", label: "Tracking" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-ui-bg p-4 text-center">
            <div className="text-xl font-extrabold">{stat.value}</div>
            <div className="text-xs font-medium text-ui-subtle">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-sm font-bold">Active deliveries</div>
      <ul className="mt-2 divide-y divide-ui-line/5">
        {drivers.map((d) => (
          <li key={d.driver} className="grid grid-cols-3 items-center py-3 text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ui-tint text-xs font-bold text-ui-accent">{d.driver[0]}</span>
              {d.driver}
            </span>
            <span className="text-center text-ui-body">{d.orders} orders</span>
            <span className="text-right font-semibold text-brand-teal">{d.eta}</span>
          </li>
        ))}
      </ul>
    </MockCard>
  )
}

function AppMock() {
  return (
    <div className="relative">
      <BrandMark className="absolute -right-4 -top-6 z-10 h-16 w-16" />
      <div className="relative overflow-hidden rounded-3xl border border-ui-line/10 bg-ui-surface shadow-2xl shadow-brand-navy/10">
        <Image src="/3.png" alt="Branded Bleaum storefront app on a phone" width={1080} height={1080} className="h-auto w-full" />
      </div>
      <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-2xl border border-ui-line/10 bg-ui-surface p-3 shadow-xl shadow-brand-navy/10 sm:left-10 sm:right-10">
        {[
          { icon: ShoppingCart, label: "Shopping" },
          { icon: CreditCard, label: "Payments" },
          { icon: Bell, label: "Push alerts" },
        ].map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-1 py-1 text-center text-xs font-semibold text-ui-body">
            <f.icon className="h-5 w-5 text-ui-accent" />
            {f.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function ReceiptMock() {
  return (
    <MockCard>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ui-tint text-ui-accent">
          <Receipt className="h-5 w-5" />
        </span>
        <div>
          <div className="font-bold">Smart receipt system</div>
          <div className="text-sm text-ui-subtle">Delivered the way each customer prefers</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { icon: Printer, label: "Print", sub: "Thermal printer" },
          { icon: MessageSquare, label: "Text", sub: "SMS delivery" },
          { icon: Mail, label: "Email", sub: "Digital copy" },
        ].map((o) => (
          <div key={o.label} className="rounded-2xl bg-ui-bg p-3 text-center">
            <o.icon className="mx-auto h-5 w-5 text-ui-fg" />
            <div className="mt-2 text-sm font-bold">{o.label}</div>
            <div className="text-[11px] text-ui-subtle">{o.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-dashed border-ui-line/15 p-4">
        <div className="text-sm font-bold">Compliance built in</div>
        <ul className="mt-3 space-y-2 text-sm text-ui-body">
          {["Tax calculations included", "Regulatory compliance built-in", "Custom branding options"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-teal" strokeWidth={3} />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </MockCard>
  )
}

const DEEP_DIVES = [
  {
    eyebrow: "Inventory",
    title: "Real-time inventory, real easy.",
    body: "Know exactly what's on your shelf — anytime, anywhere.",
    points: ["Run midday audits without closing", "Track shrinkage in real time", "Catch theft before it happens", "No more counting blind"],
    quote: { text: "With Bleaum, we don't wait until close to count—we count while we sell. It's a game changer.", author: "AJ, Happy Root" },
    href: "/operations/inventory-management",
    visual: <InventoryMock />,
  },
  {
    eyebrow: "Delivery",
    title: "Last mile, locked in.",
    body: "Drivers get a connected app. You get smart routes, live tracking, OTP verification, and full control.",
    points: ["Connected driver mobile app", "AI-powered route optimization", "Real-time GPS tracking", "Secure OTP verification", "Automated customer notifications"],
    quote: { text: "We went from chaos to clockwork overnight. Our delivery times improved by 40%.", author: "Collin, Park Social" },
    href: "/grow/delivery",
    visual: <DeliveryMock />,
  },
  {
    eyebrow: "Branded app",
    title: "Your brand, in every pocket.",
    body: "Launch a custom storefront without the custom development cost. Get your own iOS & Android app in days, not months.",
    points: ["Live inventory synchronization", "Secure in-app payments", "Real-time delivery tracking", "Custom branding & design", "Push notification campaigns", "Customer loyalty programs"],
    quote: { text: "It's like having our own app development team—without the headache or the cost.", author: "Hugo, Go Green" },
    href: "/grow/ecommerce",
    visual: <AppMock />,
  },
  {
    eyebrow: "Receipts",
    title: "Receipts that just work.",
    body: "Print, text, or email. Itemized, branded, tax-compliant. Your customers choose how they get their receipt.",
    points: ["Fully synced with POS & inventory", "Custom branding and logo", "Automatic tax calculations", "Digital receipt storage and retrieval"],
    quote: { text: "Customers love choosing how they get their receipts. It's the little things that make a big difference.", author: "Cam, Project Releaf" },
    href: "/grow/point-of-sale",
    visual: <ReceiptMock />,
  },
]

function DeepDives() {
  return (
    <section className="bg-ui-surface py-20 lg:py-28">
      <div className={`${wrap} space-y-24 lg:space-y-32`}>
        {DEEP_DIVES.map((dive, index) => (
          <div key={dive.eyebrow} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className={index % 2 ? "lg:order-2" : ""}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ui-accent">{dive.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ui-fg sm:text-[2.75rem] sm:leading-[1.1]">{dive.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ui-body">{dive.body}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {dive.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-ui-body">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-teal/10">
                      <Check className="h-3 w-3 text-brand-teal" strokeWidth={3.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <figure className="mt-8 border-l-4 border-brand-coral pl-5">
                <blockquote className="text-[15px] leading-relaxed text-ui-body">&ldquo;{dive.quote.text}&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-ui-fg">— {dive.quote.author}</figcaption>
              </figure>
              <Link href={dive.href} className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-ui-accent hover:underline">
                Explore {dive.eyebrow.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.1} className={index % 2 ? "lg:order-1" : ""}>
              {dive.visual}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}

function Reasons() {
  return (
    <section className="py-20 lg:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="Why Bleaum" title="Why teams switch to Bleaum" description="See why retailers choose Bleaum over the competition." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ui-line/10 bg-ui-line/10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 0.06} className="h-full">
              <div className="group h-full bg-ui-surface p-8 transition-colors duration-300 hover:bg-ui-bg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-peach transition-colors dark:bg-ui-tint dark:text-ui-accent duration-300 group-hover:bg-brand-coral group-hover:text-brand-navy">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-ui-fg">{reason.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ui-body">{reason.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Compliance() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_100%_0%,rgba(240,138,93,0.18)_0%,transparent_70%)]"
      />
      <div className={`${wrap} relative`}>
        <SectionHeading
          dark
          eyebrow="Security & compliance"
          title="Secure & compliant, end to end."
          description="Built with enterprise-grade security and compliance from day one."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SECURITY.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-brand-coral/50 hover:bg-white/[0.07]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-coral text-brand-navy">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-mist">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-peach">Industries we serve</p>
              <h3 className="mt-3 text-2xl font-extrabold">Made for regulated, high-compliance retail.</h3>
            </div>
            {INDUSTRIES.map((industry) => (
              <div key={industry.title}>
                <industry.icon className="h-7 w-7 text-brand-peach" />
                <h4 className="mt-4 font-bold">{industry.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-mist">{industry.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Operators() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Our story"
          title="Built by operators."
          description="We've been in the trenches. We know the pain points. That's why we built something different."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="relative rounded-3xl bg-ui-surface p-8 shadow-xl shadow-brand-navy/5 ring-1 ring-ui-line/10 sm:p-10">
              <BrandMark className="h-10 w-10" />
              <blockquote className="mt-6 text-2xl font-semibold leading-snug text-ui-fg">
                &ldquo;Every feature we build comes from real problems we&apos;ve solved in the field. That&apos;s what makes Bleaum different.&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image src="/6.png" alt="Antonio Panella" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-ui-tint" />
                <div>
                  <div className="font-bold text-ui-fg">Antonio Panella</div>
                  <div className="text-sm text-ui-subtle">Founder & CEO</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-8">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-ui-tint text-ui-accent">
                    <value.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ui-fg">{value.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ui-body">{value.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <dl className="grid grid-cols-2 gap-y-10 rounded-3xl border border-ui-line/10 bg-ui-surface py-10 md:grid-cols-4 md:divide-x md:divide-ui-line/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-sm font-medium text-ui-subtle">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-extrabold tracking-tight text-ui-fg sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-ui-surface py-20 lg:py-28">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Customer stories"
          title="What our customers say"
          description="Real stories from real retailers who've transformed their business with Bleaum."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.name} delay={(index % 2) * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-ui-line/10 bg-ui-bg p-8">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg font-medium leading-relaxed text-ui-fg">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-brand-peach">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="font-bold text-ui-fg">{t.name}</div>
                    <div className="text-sm text-ui-subtle">
                      {t.company} · {t.location}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className={wrap}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-16 dark:ring-1 dark:ring-white/10 text-center sm:px-16 lg:py-20">
            <BrandMark className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 opacity-20" />
            <BrandMark className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rotate-180 opacity-20" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Ready to transform your business?</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-mist">
                Join 300+ retailers who&apos;ve already made the switch. See the difference in just 24 hours.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/demo" onClick={trackDemoClick} className={`${btnPrimary} focus-visible:ring-offset-brand-navy`}>
                  Schedule your demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/demo"
                  onClick={trackDemoClick}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-brand-navy"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
