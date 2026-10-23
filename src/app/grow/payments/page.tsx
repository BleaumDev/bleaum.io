import { Fragment, type ComponentType } from "react"
import type { Metadata } from "next"
import {
  ArrowRightIcon,
  BanknoteIcon,
  BarChart2Icon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CreditCardIcon,
  DollarSignIcon,
  HeartIcon,
  LinkIcon,
  LockIcon,
  QrCodeIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  TruckIcon,
  UserIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"
import { WorkflowsFx } from "@/components/views/workflows-fx"

export const metadata: Metadata = {
  title: "Payments",
  description:
    "Bleaum Pay brings card terminals, pay-by-bank, QR wallet and online payments into your POS and ecommerce.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/payments.md #54 to #59 and #61 are already applied there, and
// the Cashless ATM pairing and the 25-30% claim stay out. The quote's attribution (#63) waits on the business.
// The one new line, "Mix. Match. Get paid." with its sentence under Workflows, is #130 and is awaiting CEO review.
const features: { icon: Icon; title: string; text?: string; items: string[] }[] = [
  {
    icon: WalletIcon,
    title: "No Cash, No Problem",
    text: "Let your customers pay how they want—right from their bank, online or in-store. No more fumbling for cash, no more awkward 'cash only' signs.",
    items: ["End-to-end encrypted", "Built for regulated retail", "Ready to use—no extra hardware, no downloads"],
  },
  {
    icon: TrendingUpIcon,
    title: "Bigger Orders, Happier Customers",
    items: [
      "Repeat customers come back faster with easy checkout",
      "More loyalty, less friction—at the counter and online",
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Ditch the Cash Drawer",
    items: [
      "Protect your team and your store—less cash means less risk",
      "Cut costs on cash pickups, storage, and mistakes",
      "Automate your reporting—no more manual entry or late-night reconciliations",
    ],
  },
  {
    icon: ZapIcon,
    title: "One-Tap Setup for Shoppers",
    text: "After a quick one-time setup, your customers can pay with a single tap—online or in-store. No cards, no PINs, no confusion.",
    items: ["Quick one-time customer setup", "Single tap payments in-store and online", "No cards, no PINs, no confusion"],
  },
]

const safe: { label: string; text: string }[] = [
  { label: "Security First", text: "End-to-end encrypted payments, built for regulated retail" },
  {
    label: "Efficiency Built-In",
    text: "Linked directly to your POS and Bleaum Ecommerce—no data entry, no syncing headaches",
  },
  {
    label: "Completely Integrated",
    text: "Manage everything in one place: inventory, orders, payments, and customers",
  },
]

const solutions: { icon: Icon; title: string; use: string; how: string; best: string }[] = [
  {
    icon: CreditCardIcon,
    title: "Credit Card Terminals",
    use: "In-store swipe, chip, tap payments",
    how: "Accept all 4 card types via secure hardware",
    best: "Retail, Wellness, Regulated Retail",
  },
  {
    icon: BanknoteIcon,
    title: "Virtual ACH / Pay-by-Bank",
    use: "Cardless, cashless, direct-from-bank transactions",
    how: "One-time setup, QR or link-based checkout, fast funding",
    best: "Delivery, Subscriptions, eComm, Repeat Buyers",
  },
  {
    icon: QrCodeIcon,
    title: "QR Code Wallet",
    use: "App-based, tap-to-pay solution",
    how: "Customer scans QR code, confirms bank-linked payment",
    best: "Retail, Wellness, Loyalty Programs",
  },
  {
    icon: LinkIcon,
    title: "eComm + POS Integration",
    use: "Unified payments across online and in-store",
    how: "Orders, payments, and inventory synced in real time",
    best: "Businesses using Bleaum POS or eComm",
  },
  {
    icon: WalletIcon,
    title: "Standard Payment Processing",
    use: "Traditional payments for non-regulated businesses",
    how: "Swipe, tap, and online checkout through standard rails",
    best: "Retail, Beauty, Health, Events, Food & Bev",
  },
]

const why: { icon: Icon; title: string; text: string }[] = [
  { icon: SettingsIcon, title: "Modular Setup", text: "Choose the solutions that match your business model" },
  { icon: ShieldCheckIcon, title: "Compliance-Ready", text: "Built for complex industries, but flexible for all" },
  { icon: LinkIcon, title: "Integrated Platform", text: "Syncs with Bleaum POS & eCommerce — no double entry" },
  { icon: DollarSignIcon, title: "Clear Pricing", text: "Pricing explained up front" },
  { icon: BarChart2Icon, title: "Real-Time Reporting", text: "Live sales, funding, and performance insights" },
  { icon: UserIcon, title: "Customer-Centric UX", text: "ACH, Wallet, Cards — however they want to pay" },
]

const industries: { icon: Icon; name: string }[] = [
  { icon: ShoppingCartIcon, name: "Retail" },
  { icon: HeartIcon, name: "Wellness" },
  { icon: CalendarIcon, name: "Events" },
  { icon: BriefcaseIcon, name: "Professional Services" },
]

// Each stack is the old "A + B" line split into its parts, so the words are unchanged.
const method: Record<string, Icon> = {
  "Credit Terminal": CreditCardIcon,
  "Virtual ACH": BanknoteIcon,
  "QR Wallet": QrCodeIcon,
  eCommerce: LinkIcon,
  "Standard Processing": WalletIcon,
  "Card Processing": CreditCardIcon,
}

const workflows: { icon: Icon; name: string; stack: string[] }[] = [
  { icon: ShoppingCartIcon, name: "Retail Shop", stack: ["Credit Terminal", "Virtual ACH"] },
  { icon: TruckIcon, name: "Delivery-Only Retail", stack: ["Virtual ACH", "QR Wallet"] },
  { icon: HeartIcon, name: "Wellness Studio", stack: ["Credit Terminal", "eCommerce"] },
  { icon: ShoppingBagIcon, name: "Retail Boutique", stack: ["Credit Terminal", "Standard Processing"] },
  { icon: BriefcaseIcon, name: "High-Ticket B2B", stack: ["Virtual ACH", "Card Processing"] },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative QR code. The three corner finders and a scatter of cells, no text.
const qr = ["1110111", "1010101", "1110111", "0101010", "1110011", "1010110", "1110101"]

// Decorative checkout: a card terminal with a keypad, and a QR wallet card over it. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[27rem] lg:block" aria-hidden="true">
      <div className="absolute right-6 top-0 w-56 animate-rise rounded-[1.75rem] border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="flex h-20 items-end rounded-xl bg-[linear-gradient(100deg,rgba(223,151,112,.38),rgba(223,151,112,.04))] p-3">
          <div className="h-2.5 w-1/2 rounded-full bg-white/40" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="h-8 rounded-md bg-white/[.07]" />
          ))}
        </div>
        <div className="mt-3 h-8 rounded-md bg-copper-400/80" />
      </div>
      <div className="absolute bottom-6 left-0 w-44 animate-rise rounded-2xl border border-white/15 bg-navy-900/90 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] backdrop-blur [animation-delay:380ms]">
        <div className="grid grid-cols-7 gap-1 rounded-lg bg-white/90 p-2">
          {qr.flatMap((row, r) =>
            [...row].map((c, i) => <span key={`${r}${i}`} className={`aspect-square rounded-[2px] ${c === "1" ? "bg-navy-950" : ""}`} />),
          )}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className={`${chip} size-7`}>
            <CheckIcon className="size-4" />
          </span>
          <div className="h-1.5 flex-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

export default function PaymentsPage() {
  return (
    <div data-page="payments" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="pay-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="pay-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Bleaum Pay
            </h1>
            <p className={`${ui.h3} mt-4 max-w-[28ch] animate-rise text-copper-400 [animation-delay:90ms]`}>
              One Payment Platform. Every Business. Fully Covered
            </p>
            <figure className="mt-6 max-w-[52ch] animate-rise border-l-2 border-copper-400 pl-4 [animation-delay:180ms]">
              <blockquote className="text-[1.125rem] text-fog-200">
                &ldquo;From regulated retail to everyday retail, wellness, and services — Bleaum Pay delivers a complete
                suite of payment solutions that adapt to your business model, risk profile, and customer
                expectations.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[.9375rem] text-fog-200/70">— Collin, Park Social</figcaption>
            </figure>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Get a Demo of Bleaum Pay
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Features */}
      <section className="py-pad" aria-label="Payment benefits">
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
                {f.text && <p className="mt-2 text-[.9375rem] text-h-muted">{f.text}</p>}
                <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem]">
                  {f.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      {tick}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Safe, streamlined and smart. home-dk equals the page background in dark mode, so the gradient keeps the band apart. */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="safe-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="safe-h" className={ui.h2}>Safe, Streamlined &amp; Smart</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {safe.map((s, i) => (
              <li key={s.label} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <LockIcon className="size-5" />
                  </span>
                  <p className="text-[.9375rem] text-h-muted">
                    <strong className="font-semibold text-h-text">{s.label}:</strong> {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-pad" aria-labelledby="sol-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="sol-h" className={ui.h2}>A Payment Solution for Every Type of Business</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {solutions.map((s, i) => (
              <li
                key={s.title}
                {...ui.rv(i % 3, i < 3 ? "lg:col-span-2" : i === 4 ? "md:col-span-2 lg:col-span-3" : "lg:col-span-3")}
              >
                <div className={`${ui.lift} flex h-full flex-col rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                  <span className={`${chip} mb-5 size-12`}>
                    <s.icon className="size-6" />
                  </span>
                  <h3 className={ui.h3}>{s.title}</h3>
                  <dl className="mt-4 grid gap-4 text-[.9375rem]">
                    <div>
                      <dt className="text-[.8125rem] font-semibold text-h-accent">Use Case</dt>
                      <dd className="mt-0.5">{s.use}</dd>
                    </div>
                    <div>
                      <dt className="text-[.8125rem] font-semibold text-h-accent">How It Works</dt>
                      <dd className="mt-0.5 text-h-muted">{s.how}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-5">
                    <p className="border-t border-h-line pt-4 text-[.875rem] font-semibold">Best for: {s.best}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why businesses choose Bleaum Pay */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="why-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="why-h" className={ui.h2}>Why Businesses Choose Bleaum Pay</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <li key={w.title} {...ui.rv(i % 3)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <w.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{w.title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="py-pad" aria-labelledby="ind-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="ind-h" className={ui.h2}>Industries We Serve</h2>
            <p className="mt-4 text-h-muted">
              Whether you&apos;re navigating compliance or scaling fast, Bleaum Pay has the tech, rails, and experience
              to support you.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {industries.map((n, i) => (
              <li key={n.name} {...ui.rv(i % 2)}>
                <div className={`${ui.lift} flex items-center gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <n.icon className="size-5" />
                  </span>
                  <span className={ui.h3}>{n.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflows. WorkflowsFx draws the rail and brings each step in as it scrolls past. GSAP owns each li's
          transform, so the hover lift sits on the inner card. */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="wf-h">
        <WorkflowsFx className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv(0, "lg:sticky lg:top-28")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="wf-h" className={ui.h2}>Workflows</h2>
            {/* Copy from website-updates/payments.md #130 */}
            <p data-fx="words" className={`${ui.heading} mt-6 text-[2.5rem] font-medium sm:text-[3rem]`}>
              <span data-fx="word" className="block">Mix.</span>
              <span data-fx="word" className="block">Match.</span>
              <span data-fx="word" className="block text-h-accent">Get paid.</span>
            </p>
            <p className="mt-5 max-w-[40ch] text-h-muted">
              See how different businesses combine Bleaum Pay solutions to fit the way they sell.
            </p>
          </div>
          <div className="relative pl-10">
            <span aria-hidden="true" className="absolute bottom-3 left-2 top-3 w-px bg-h-line" />
            <span data-fx="rail" aria-hidden="true" className="absolute bottom-3 left-2 top-3 w-px origin-top bg-copper-400" />
            <ol data-fx="list" className="grid gap-4">
              {workflows.map((w, i) => (
                <li key={w.name} data-fx="step" className="relative">
                  <span
                    data-fx="node"
                    aria-hidden="true"
                    className="absolute -left-[2.375rem] top-8 size-3 rounded-full bg-h-line ring-4 ring-h-surface2 transition-colors duration-300 [.is-active_&]:bg-copper-400"
                  />
                  <div
                    className={`${ui.lift} flex flex-col gap-4 rounded-card border border-h-line bg-h-surface p-5 sm:p-6 [.is-active_&]:border-copper-400`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${chip} size-11`}>
                        <w.icon className="size-5" />
                      </span>
                      <h3 className={ui.h3}>{w.name}</h3>
                      <span aria-hidden="true" className="ml-auto font-display text-[1.5rem] text-h-muted opacity-40">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="flex flex-wrap items-center gap-2">
                      {w.stack.map((m, j) => {
                        const I = method[m]
                        return (
                          <Fragment key={m}>
                            {j > 0 && (
                              <>
                                <span data-fx="plus" aria-hidden="true" className="inline-block text-h-muted">+</span>
                                <span className="sr-only"> + </span>
                              </>
                            )}
                            <span
                              data-fx="pill"
                              className="inline-flex items-center gap-2 rounded-full border border-h-line bg-h-surface2 px-3 py-1.5 text-[.875rem] font-medium"
                            >
                              <I className="size-4 text-h-accent" aria-hidden="true" />
                              {m}
                            </span>
                          </Fragment>
                        )
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </WorkflowsFx>
      </section>

      {/* One platform and the call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>One Platform. All Payments.</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              No matter your vertical, Bleaum Pay offers a frictionless, secure, and fully scalable way to get paid.
            </p>
            <p className="mt-3 text-fog-200">
              From POS and eCommerce to loyalty and reporting — it&apos;s all in one platform, built for you.
            </p>
            <h3 className={`${ui.h3} mt-10 border-t border-white/15 pt-8 text-[1.5rem]`}>Ready to Simplify your Payments?</h3>
            <p className="mt-3 text-fog-200">
              Want to see how Bleaum Pay could work in your retail shop? Let&apos;s set up a quick demo and show you the
              difference.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Get a Demo of Bleaum Pay
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
