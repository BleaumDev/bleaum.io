import type { Metadata } from "next"
import type { ComponentType } from "react"
import Image from "next/image"
import Link from "next/link"
import { SettingsIcon, SlidersHorizontalIcon, UsersIcon, ZapIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import { List, type Item } from "@/components/views/guide-list"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Help Guide",
  description: "Step-by-step help for using the Bleaum POS.",
}

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. The poshelpguide.jpg hero image stays out, as it was commented out there.
const tabs: { icon: Icon; name: string; href: string }[] = [
  { icon: UsersIcon, name: "Queue", href: "#queue-tab" },
  { icon: ZapIcon, name: "Activity", href: "/help/guide/activity-tab" },
  { icon: SlidersHorizontalIcon, name: "Personalize", href: "#personalize-tab" },
]

const queue: { id: string; title: string; text: string; src: string; alt: string; w: number; h: number }[] = [
  {
    id: "queue-tab",
    title: "Queue Tab",
    text: "Manage customers entering your shop with three main actions:",
    src: "/help/addtoqueue.jpg",
    alt: "Add to Queue",
    w: 1356,
    h: 243,
  },
  {
    id: "add-customer",
    title: "Add Customer",
    text: "Upload customer medical ID or driver's license manually, scan ID, or upload images.",
    src: "/help/addcustomer.jpg",
    alt: "Add Customer",
    w: 991,
    h: 568,
  },
  {
    id: "customer-queue",
    title: "Customer Queue",
    text: "Manage customers entering your shop with three main actions:",
    src: "/help/customerqueue.jpg",
    alt: "Customer Queue",
    w: 976,
    h: 578,
  },
]

const settings: { title: string; items: Item[]; note?: string }[] = [
  {
    title: "Appearance Settings",
    items: [
      "Light or Dark Mode: Choose your preferred theme.",
      "Color Options: In Light Mode, select different color themes for accents.",
      "Navigation Style: Adjust navigation layout according to preference.",
      "Layout Options: Fit different screen sizes and devices.",
    ],
  },
  {
    title: "Queue Settings",
    items: [
      {
        text: "Yellow Border Timer:",
        items: ["Set a time (in minutes) after which a customer rectangle turns yellow in the queue — warning wait time."],
      },
      {
        text: "Red Border Timer:",
        items: ["Set a time (in minutes) after which a customer rectangle turns red — critical wait time."],
      },
    ],
    note: "This helps your team quickly identify customers who have been waiting too long.",
  },
  {
    title: "Default POS Screen",
    items: [
      {
        text: "Choose your default view:",
        items: [
          "Tablet Mode: Optimized for compact touchscreen devices.",
          "Computer Mode: Full-size POS view for desktops or large screens.",
        ],
      },
      "Switch at any time using the top right corner button on the POS screen.",
    ],
  },
  {
    title: "Default Print Type",
    items: [
      {
        text: "Choose how you print:",
        items: ["Browser Print: Print directly from the browser.", "Hardware Print: Use a specified printer device."],
      },
    ],
  },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

const shot = "h-auto w-full rounded-card border border-h-line shadow-[0_24px_48px_-28px_rgba(11,30,49,.5)]"

const callout = "max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]"

// Decorative side panel: a gear and three tabs with rows below. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-2">
          <SettingsIcon className="size-6 shrink-0 text-copper-400" />
          <div className="h-6 flex-1 rounded-full bg-copper-400/70" />
          <div className="h-6 flex-1 rounded-full bg-white/10" />
          <div className="h-6 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="grid gap-3">
          {["w-3/4", "w-2/3", "w-4/5"].map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <span className={`size-8 shrink-0 rounded-full ${i === 0 ? "bg-copper-400/80" : "bg-white/20"}`} />
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

export default function PosHelpGuidePage() {
  return (
    <div data-page="pos-help-guide" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="pos-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <h1 id="pos-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
            POS Help Guide
          </h1>
          <Preview />
        </div>
      </section>

      {/* Side settings panel */}
      <section id="pos-help-guide" className="py-pad" aria-labelledby="side-h">
        <div className={`${ui.wrap} max-w-[60rem]`}>
          <div {...ui.rv()}>
            <h2 id="side-h" className={ui.h2}>Side Settings Panel (Spinning Gear Icon)</h2>
            <p className="mt-3">The Side Settings panel has three main tabs:</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 md:gap-4">
            {tabs.map((t, i) => (
              <li key={t.name} {...ui.rv(i)}>
                <Link
                  href={t.href}
                  className={`${ui.lift} flex items-center gap-3 rounded-card border border-h-line bg-h-surface p-4`}
                >
                  <span className={`${chip} size-10`}>
                    <t.icon className="size-5" />
                  </span>
                  <span className="font-display font-medium">{t.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p {...ui.rv(0, `mt-8 ${callout}`)}>
            Each tab helps you manage the flow of your shop, your customers, and your POS experience.
          </p>
        </div>
      </section>

      {/* Queue tab, add customer, customer queue */}
      {queue.map((q, i) => (
        <section
          key={q.id}
          id={q.id}
          className={`scroll-mt-24 py-pad ${i % 2 === 0 ? "bg-h-surface2" : ""}`}
          aria-labelledby={`${q.id}-h`}
        >
          {/* The first image is a wide strip, so it sits under its text. The others sit beside it. */}
          <div className={`${ui.wrap} grid items-center gap-10 ${i === 0 ? "" : "lg:grid-cols-[5fr_7fr]"}`}>
            <div {...ui.rv(0, i === 2 ? "lg:order-2" : "")}>
              <h2 id={`${q.id}-h`} className={ui.h2}>{q.title}</h2>
              <p className="mt-3 max-w-[56ch]">{q.text}</p>
            </div>
            <div {...ui.rv(1, i === 2 ? "lg:order-1" : "")}>
              <Image src={q.src} alt={q.alt} width={q.w} height={q.h} sizes="(min-width: 1024px) 44rem, 100vw" className={shot} />
            </div>
          </div>
        </section>
      ))}

      {/* Personalize tab */}
      <section id="personalize-tab" className="scroll-mt-24 py-pad" aria-labelledby="pers-h">
        <div className={ui.wrap}>
          <div {...ui.rv()}>
            <h2 id="pers-h" className={ui.h2}>Personalize Tab</h2>
            <p className="mt-3 max-w-[56ch]">Customize your POS interface to suit your style and workflow:</p>
          </div>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[7fr_5fr]">
            <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
              {settings.map((s, i) => (
                <li key={s.title} {...ui.rv(i)}>
                  <div className={`${ui.lift} h-full rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                    <h3 className={ui.h3}>{s.title}</h3>
                    <div className="text-[.9375rem]">
                      <List items={s.items} top />
                      {s.note && <p className="mt-4 text-h-muted">{s.note}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div {...ui.rv(2, "lg:sticky lg:top-24")}>
              <Image
                src="/help/appearancesetting.jpg"
                alt="Appearance Settings"
                width={551}
                height={592}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className={`${shot} mx-auto max-w-[28rem]`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick summary */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="sum-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="sum-h" className={`${ui.heading} text-h2 font-normal`}>Quick Summary</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              The Side Settings Panel gives you powerful tools to manage customer flow, track shop activity, and
              personalize the POS experience for smooth daily operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
