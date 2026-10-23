import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  CheckIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  GlobeIcon,
  PackageIcon,
  QuoteIcon,
  RefreshCwIcon,
  ShieldIcon,
  SmartphoneIcon,
  StarIcon,
  TrendingUpIcon,
  TruckIcon,
  XIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import EcommerceForm from "@/components/views/ecommerce-form"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "Branded web storefronts and mobile apps that sync with your POS, inventory and delivery in real time.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/ecommerce.md #40, #41, #42 and #45 are already applied,
// and the retired sections (Secure & Compliant, Who Uses Bleaum, the 40% retention claim) stay out.
// The testimonials still wait on written permission (#44, all-pages #15).
const features: { icon: Icon; title: string; text: string; quote: string }[] = [
  {
    icon: GlobeIcon,
    title: "SEO-Native Web & Mobile Storefronts",
    text: "No iFrames. No embeds. Just your brand, your domain, and full search visibility. Unlike competitors who use embedded storefronts that can't be crawled by Google, Bleaum provides a fully native, SEO-optimized web portal.",
    quote: "Our products actually show up in Google searches now.",
  },
  {
    icon: RefreshCwIcon,
    title: "Real-Time POS Integration",
    text: "No bridges. No manual syncing. Every eCommerce order automatically syncs with inventory, delivery dispatch, state compliance reporting, and payments.",
    quote: "Everything just works together. No more double-entry.",
  },
  {
    icon: SmartphoneIcon,
    title: "Branded Mobile Apps Included",
    text: "White-labeled iOS & Android apps under your brand. Fast-loading, mobile-optimized storefront with real-time inventory sync.",
    quote: "Our customers love having our own app.",
  },
  {
    icon: StarIcon,
    title: "Built-In Loyalty & Engagement",
    text: "QR code rewards, tiered loyalty programs, BOGOs, bundles, push notifications, and referral tracking — all in one system.",
    quote: "The loyalty features keep our customers coming back.",
  },
]

const compare = [
  { feature: "SEO-friendly native web store", bleaum: "Yes — Google-crawlable", other: "Embedded storefronts only" },
  { feature: "Fully branded mobile app", bleaum: "iOS & Android included", other: "Often unavailable" },
  { feature: "POS, delivery & payment integration", bleaum: "Native and automatic", other: "Fragmented integrations" },
  { feature: "Loyalty, QR rewards, referrals", bleaum: "Built into system", other: "Requires external tools" },
  { feature: "Real-time inventory sync", bleaum: "Instant with POS", other: "Often delayed or partial" },
]

const tools: { icon: Icon; text: string }[] = [
  { icon: PackageIcon, text: "Choose which products/categories to show" },
  { icon: ShieldIcon, text: "Restrict by inventory, license, or region" },
  { icon: TrendingUpIcon, text: "Set custom banners and upsell logic" },
  { icon: TruckIcon, text: "Manage delivery zones and fees" },
  { icon: CreditCardIcon, text: "Control payment options" },
  { icon: ClipboardCheckIcon, text: "All managed from your POS backend" },
]

const insights = [
  "Breakdown by channel (POS, web, app, delivery)",
  "Loyalty and promo usage analytics",
  "Fulfillment performance and delivery metrics",
  "Customer behavior and order frequency",
  "Abandoned cart insights with follow-up tools",
  "Real-time inventory and sales reporting",
]

const integrations = ["QuickBooks (coming soon)", "Custom API Access"]

const scale = [
  "SEO-native eCommerce",
  "Branded apps and storefront",
  "Delivery, loyalty, and payments built in",
  "Real-time POS sync",
]

const testimonials = [
  {
    quote: "Our products actually show up in Google searches now. The SEO-native storefront was a game changer.",
    author: "Casey, Oklahoma",
    company: "Trading Post",
  },
  {
    quote: "Having our own branded app made us feel like a real tech company. Customers love it.",
    author: "Abigail, California",
    company: "Park Social",
  },
  { quote: "Everything syncs perfectly with our POS.", author: "AJ, Oklahoma", company: "Happy Root" },
  {
    quote: "Real-time inventory sync means no more overselling online. It just works.",
    author: "Will, Oklahoma",
    company: "Gold Leaf",
  },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />
const tickDk = <CheckIcon className="mt-1 size-4 shrink-0 text-copper-400" aria-hidden="true" />
const dot = <span className={ui.dotmark} aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Skeleton storefront tile for the hero picture. No text, so it adds no copy.
const Tile = () => (
  <div className="rounded-lg bg-white/[.06] p-2">
    <div className="grid aspect-[4/3] place-items-center rounded-md bg-white/[.06]">
      <span className={ui.dotmarkSm} />
    </div>
    <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/20" />
    <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-copper-400/60" />
  </div>
)

// Decorative web storefront with a phone in front, drawn in CSS.
function Storefront() {
  return (
    <div className="relative hidden pb-12 pl-10 lg:block" aria-hidden="true">
      <div className="animate-rise rounded-2xl border border-white/15 bg-navy-900/80 shadow-[0_32px_64px_-24px_rgba(0,0,0,.7)] backdrop-blur [animation-delay:200ms]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ml-3 h-5 flex-1 rounded-full bg-white/[.07]" />
        </div>
        <div className="p-4">
          <div className="h-20 rounded-lg bg-[linear-gradient(100deg,rgba(223,151,112,.38),rgba(223,151,112,.04))]" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Tile key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 animate-rise rounded-[1.75rem] border-2 border-white/25 bg-navy-950 p-2.5 shadow-[0_24px_48px_-16px_rgba(0,0,0,.8)] [animation-delay:380ms]">
        <div className="mx-auto mb-2.5 h-1 w-8 rounded-full bg-white/25" />
        <div className="h-12 rounded-lg bg-[linear-gradient(100deg,rgba(223,151,112,.38),rgba(223,151,112,.04))]" />
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-md bg-white/[.07] p-1.5">
              <div className="h-8 rounded bg-white/[.07]" />
              <div className="mt-1.5 h-1 w-3/4 rounded-full bg-copper-400/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EcommercePage() {
  return (
    <div data-page="ecommerce" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="ecom-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="ecom-h" className={`${ui.h1} max-w-[18ch] animate-rise`}>
              One platform. Your brand. End-to-end control.
            </h1>
            <p className="mt-5 max-w-[56ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Launch your own fully branded eCommerce experience — with a native web portal and mobile app that connect
              directly to your POS, last-mile delivery, loyalty, and payments system. Built to convert, designed to
              scale, and ready to rank on Google.
            </p>
          </div>
          <Storefront />
        </div>
      </section>

      {/* Features */}
      <section className="py-pad" aria-label="Storefront features">
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
                <p className="mt-2 text-[.9375rem] text-h-muted">{f.text}</p>
                <p className="mt-auto border-l-2 border-copper-400 pl-4 pt-5 font-display text-[1rem] font-medium leading-[1.5]">
                  &ldquo;{f.quote}&rdquo;
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="compare-h">
        <div className={ui.wrap}>
          <div {...ui.rv()}>
            {dot}
            <h2 id="compare-h" className={ui.h2}>Why Bleaum eCommerce Stands Out</h2>
          </div>
          <div {...ui.rv(1, "mt-8 overflow-x-auto rounded-card border border-h-line bg-h-surface")}>
            <table className="w-full min-w-[34rem] border-collapse text-left text-[.9375rem]">
              <thead>
                <tr className={`${ui.label} text-[.875rem] text-h-muted`}>
                  <th scope="col" className="px-5 py-4 font-medium">Feature</th>
                  <th scope="col" className="bg-copper-400/[.14] px-5 py-4 font-semibold text-h-accent">Bleaum</th>
                  <th scope="col" className="px-5 py-4 font-medium">Most Competitors</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.feature} className="border-t border-h-line">
                    <th scope="row" className="px-5 py-4 font-normal">{row.feature}</th>
                    <td className="bg-copper-400/[.07] px-5 py-4 font-semibold text-h-accent">
                      <span className="flex gap-2">
                        {tick}
                        {row.bleaum}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-h-muted">
                      <span className="flex gap-2">
                        <XIcon className="mt-1 size-4 shrink-0 opacity-50" aria-hidden="true" />
                        {row.other}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-pad" aria-labelledby="tools-h">
        <div className={ui.wrap}>
          <div {...ui.rv()}>
            {dot}
            <h2 id="tools-h" className={ui.h2}>Flexible &amp; Customizable eCommerce Tools</h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => (
              <li key={t.text} {...ui.rv(i % 3)}>
                <div className={`${ui.lift} flex h-full items-center gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <t.icon className="size-5" />
                  </span>
                  <span className="text-[.9375rem] font-medium">{t.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights */}
      {/* home-dk equals the page background in dark mode, so the gradient keeps the band apart from its neighbours */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="insights-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            {dot}
            <h2 id="insights-h" className={ui.h2}>Real Insights, Real Time</h2>
            <p className="mt-4 max-w-[44ch] text-h-muted">All data lives in one place, so you can act fast.</p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {insights.map((t, i) => (
              <li key={t} {...ui.rv(i % 2, "flex gap-3 border-t border-h-line py-4")}>
                {tick}
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-h-surface2 py-band" aria-labelledby="integrations-h">
        <div className={`${ui.wrap} flex flex-wrap items-center justify-between gap-x-12 gap-y-6`}>
          <h2 id="integrations-h" {...ui.rv(0, ui.h2)}>
            Integrations That Just Work
          </h2>
          <ul className="flex flex-wrap gap-3">
            {integrations.map((t, i) => (
              <li
                key={t}
                {...ui.rv(i, "flex items-center gap-2.5 rounded-full border border-h-line bg-h-surface px-5 py-2.5 font-medium")}
              >
                <span className="size-2 rounded-full bg-copper-400" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scale */}
      <section className="py-pad" aria-labelledby="scale-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, `relative overflow-hidden rounded-card p-8 text-white sm:p-12 ${ui.heroBg}`)}>
            <div className="opacity-60">
              <Bloom cta />
            </div>
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 id="scale-h" className={`${ui.heading} text-h2 font-normal`}>Ready to Scale?</h2>
                <p className="mt-4 font-display text-quote font-medium leading-[1.4] text-copper-400">
                  With Bleaum, you get more than a website — you get a fully integrated retail engine.
                </p>
                <p className="mt-4 max-w-[48ch] text-fog-200">
                  SEO-native eCommerce, branded apps, delivery, loyalty, and payments — all built in. No third-party
                  patchwork.
                </p>
              </div>
              <ul className="grid">
                {scale.map((t) => (
                  <li key={t} className="flex gap-3 border-t border-white/15 py-4 font-medium">
                    {tickDk}
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="customers-h">
        <div className={ui.wrap}>
          <div {...ui.rv()}>
            {dot}
            <h2 id="customers-h" className={ui.h2}>What Real Customers Say</h2>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <li key={t.author} {...ui.rv(i, "flex")}>
                <figure className={`${ui.lift} flex w-full flex-col rounded-card border border-h-line bg-h-surface p-6`}>
                  <QuoteIcon className="size-7 text-copper-400" aria-hidden="true" />
                  <blockquote className="mt-4 font-display text-[1.0625rem] font-medium leading-[1.5]">
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-6">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-full bg-copper-400 font-display text-[.875rem] font-semibold leading-[normal] text-navy-900"
                      aria-hidden="true"
                    >
                      {t.author[0]}
                    </span>
                    <div>
                      <b className={`${ui.label} block`}>{t.author}</b>
                      <span className="text-[.9375rem] text-h-accent">{t.company}</span>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Talk to us */}
      <section id="talk" className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="talk-h">
        <Bloom cta />
        <div className={`${ui.wrap} relative max-w-3xl`}>
          <div {...ui.rv(0, "text-center")}>
            <span className={`${ui.dotmark} mx-auto`} aria-hidden="true" />
            <h2 id="talk-h" className={`${ui.heading} text-h2 font-normal`}>Talk to an Integration Specialist</h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-[1.125rem] text-fog-200">
              Ready to launch your branded eCommerce experience? Let&apos;s make it happen.
            </p>
          </div>
          {/* home-dk keeps the form on the dark theme tokens in light mode too */}
          <div {...ui.rv(1, "home-dk mt-10 rounded-card border border-h-line p-6 sm:p-8")}>
            <EcommerceForm />
          </div>
        </div>
      </section>
    </div>
  )
}
