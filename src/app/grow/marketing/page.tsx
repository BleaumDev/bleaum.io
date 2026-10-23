import type { ComponentType } from "react"
import type { Metadata } from "next"
import {
  ArrowRightIcon,
  BarChart2Icon,
  BellIcon,
  CalendarIcon,
  CheckIcon,
  GiftIcon,
  HeartIcon,
  MailIcon,
  ReceiptIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Marketing & Loyalty",
  description:
    "Loyalty programs, campaigns and customer segments that bring shoppers back, all connected to your POS.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. website-updates/marketing.md #51 is already applied, and the 40% and
// 2.3x claims (#49, #50) stay out. The "Coming Soon" tags (#48) and the 300+ count (#52) wait on the business.
const benefits = ["Personal messages that convert", "Loyalty programs that work", "Results you can actually see"]

const features: { icon: Icon; title: string; text: string; items: string[]; tag: string; quote?: string }[] = [
  {
    icon: MailIcon,
    title: "Smart Email & SMS Campaigns",
    text: "Send the right message at the right time. No marketing degree required—just results.",
    items: ["Drag-and-drop campaign builder", "Pre-built templates", "A/B testing built-in"],
    tag: "Coming Soon",
  },
  {
    icon: TargetIcon,
    title: "Customer Segmentation That Works",
    text: "Target based on real behavior—purchase history, visit frequency, favorite products.",
    items: ["Smart customer segments", "Behavioral triggers", "Purchase-based targeting"],
    tag: "Coming Soon",
  },
  {
    icon: HeartIcon,
    title: "Loyalty Programs That Stick",
    text: "Keep customers coming back with rewards they actually want—and you can actually afford.",
    items: ["Points & rewards system", "VIP tiers", "Birthday & anniversary perks"],
    tag: "Built-In",
    quote: "Our regulars spend more since we launched loyalty.",
  },
  {
    icon: BarChart2Icon,
    title: "Real-Time Results",
    text: "See what's working instantly. Track opens, clicks, sales, and ROI—all in one dashboard.",
    items: ["Live campaign tracking", "Revenue attribution", "Customer journey insights"],
    tag: "Live Data",
    quote: "I know exactly which campaigns pay for themselves.",
  },
]

const automation: { icon: Icon; title: string; text: string }[] = [
  {
    icon: ZapIcon,
    title: "Smart Triggers & Automated Campaigns",
    text: "Smart triggers, push notifications, and seamless campaigns that work across web, app, and in-store",
  },
  {
    icon: SmartphoneIcon,
    title: "Push Notifications on Mobile",
    text: "Reach customers instantly through personalized, scheduled push alerts in your branded mobile app.",
  },
  {
    icon: GiftIcon,
    title: "Welcome New Customers",
    text: "First-time visitor? Send a warm welcome with an automatic offer via text or app notification.",
  },
  {
    icon: CalendarIcon,
    title: "Win Back Lost Customers",
    text: "Haven't seen them in 30 days? Auto-send a \"We miss you\" deal to bring them back.",
  },
  {
    icon: StarIcon,
    title: "Birthday & Anniversary Rewards",
    text: "Send personalized messages and gifts tied to key dates—fully automated.",
  },
  {
    icon: ReceiptIcon,
    title: "BOGO & Targeted Deals",
    text: "Run mix-and-match promotions, category-specific discounts, or time-sensitive flash sales across both web and app.",
  },
  {
    icon: SmartphoneIcon,
    title: "Loyalty QR Code Scanning",
    text: "Let customers scan in-store with your mobile app to earn and redeem loyalty points instantly.",
  },
  {
    icon: BellIcon,
    title: "Loyalty Point Reminders",
    text: "Nudge customers when they're close to rewards—automatically.",
  },
  {
    icon: GiftIcon,
    title: "Low Stock Alerts for VIPs",
    text: "Let your best customers know when top products are about to run out.",
  },
  {
    icon: TrendingUpIcon,
    title: "Slow Day Boosters",
    text: "Having a quiet Tuesday? Auto-send limited-time offers to nearby customers via app or SMS.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Syncs with Your Website & Storefront",
    text: "Every campaign works across your online store, ecommerce, and in-store checkout—automatically.",
  },
]

const mobile: { icon: Icon; title: string; text: string }[] = [
  {
    icon: BellIcon,
    title: "Push Notifications",
    text: "Send targeted messages straight to their lock screen through your custom mobile app—fast, personal, and action-driven.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Website & App Sync",
    text: "Every promo, deal, or flash alert goes live across your app and website automatically—no double entry, no delays.",
  },
]

const tick = <CheckIcon className="mt-1 size-4 shrink-0 text-h-accent" aria-hidden="true" />
const tickDk = <CheckIcon className="mt-1 size-4 shrink-0 text-copper-400" aria-hidden="true" />

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative push notification, drawn in CSS. No text, so it adds no copy.
const Note = ({ icon: I, cls }: { icon: Icon; cls: string }) => (
  <div
    className={`absolute flex w-64 animate-rise items-center gap-3 rounded-2xl border border-white/15 bg-navy-900/90 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] backdrop-blur ${cls}`}
  >
    <span className={`${chip} size-10`}>
      <I className="size-5" />
    </span>
    <div className="flex-1">
      <div className="h-2 w-3/4 rounded-full bg-white/25" />
      <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/15" />
    </div>
  </div>
)

// Decorative loyalty app: a phone with a points bar, and two notifications over it.
function Preview() {
  return (
    <div className="relative hidden h-[27rem] lg:block" aria-hidden="true">
      <div className="absolute right-6 top-0 w-60 animate-rise rounded-[2rem] border-2 border-white/25 bg-navy-950 p-3 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/25" />
        <div className="h-24 rounded-xl bg-[linear-gradient(100deg,rgba(223,151,112,.38),rgba(223,151,112,.04))]" />
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-copper-400" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white/[.07] p-2">
              <div className="h-14 rounded-md bg-white/[.07]" />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-copper-400/60" />
            </div>
          ))}
        </div>
      </div>
      <Note icon={BellIcon} cls="left-0 top-14 [animation-delay:380ms]" />
      <Note icon={GiftIcon} cls="bottom-12 left-10 [animation-delay:520ms]" />
    </div>
  )
}

export default function MarketingPage() {
  return (
    <div data-page="marketing" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="mkt-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="mkt-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Turn customers into regulars
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Stop blasting everyone with the same promo. Send the right message, to the right people, at the perfect
              moment—and watch your repeat business soar.
            </p>
            <ul className="mt-6 grid animate-rise gap-2 [animation-delay:180ms]">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 font-medium">
                  {tickDk}
                  {b}
                </li>
              ))}
            </ul>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                See Marketing That Works
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </DemoLink>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Features */}
      <section className="py-pad" aria-label="Marketing features">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 md:gap-6`}>
          {features.map((f, i) => (
            <li key={f.title} {...ui.rv(i % 2)}>
              {/* The reveal and the hover lift both set `transition`, so they sit on separate elements. */}
              <div className={`${ui.lift} group relative flex h-full flex-col overflow-hidden rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#DF9770,transparent)] opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className={`${chip} size-12`}>
                    <f.icon className="size-6" />
                  </span>
                  <span className="rounded-full bg-copper-400/[.16] px-3 py-1 text-[.8125rem] font-semibold text-h-accent">
                    {f.tag}
                  </span>
                </div>
                <h2 className={ui.h3}>{f.title}</h2>
                <p className="mt-2 text-[.9375rem] text-h-muted">{f.text}</p>
                <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem]">
                  {f.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      {tick}
                      {t}
                    </li>
                  ))}
                </ul>
                {f.quote && (
                  <p className="mt-6 border-l-2 border-copper-400 pl-4 font-display text-[1rem] font-medium leading-[1.5]">
                    &ldquo;{f.quote}&rdquo;
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Automation. home-dk equals the page background in dark mode, so the gradient keeps the band apart. */}
      <section className={`home-dk py-pad ${ui.heroBg}`} aria-labelledby="auto-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="auto-h" className={ui.h2}>Marketing on Autopilot</h2>
            <p className="mt-4 text-[1.125rem] text-h-muted">
              Set it once, watch it work. Our smart automation and mobile tools handle the heavy lifting—so you can
              focus on growing your business.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {automation.map((a, i) => (
              <li key={a.title} {...ui.rv(i % 3, i === 0 ? "lg:col-span-2" : "")}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <a.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{a.title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="mobile-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="mobile-h" className={ui.h2}>Built for How Customers Really Shop</h2>
            <p className="mt-4 text-h-muted">
              Your customers live on their phones. With push notifications, mobile alerts, and real-time offers across
              your app and website, you can reach them instantly—whether they&apos;re browsing at home or passing your
              storefront.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {mobile.map((m, i) => (
              <li key={m.title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-11`}>
                    <m.icon className="size-5" />
                  </span>
                  <h3 className={ui.h3}>{m.title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{m.text}</p>
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
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Ready to Build Real Loyalty?</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              300+ retailers use Bleaum to turn one-time buyers into regulars. See how it could work for you in a live
              demo.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>Schedule Your Personalized Demo</DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
