import type { ComponentType } from "react"
import type { Metadata } from "next"
import { MapPinIcon, PackageIcon, RefreshCwIcon, SmartphoneIcon, SmileIcon, ZapIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Delivery",
  description:
    "Route planning, a connected driver app, live tracking and ID and signature checks for retail delivery.",
}

type Feature = { icon: ComponentType<{ className?: string }>; title: string; text: string; items: string[] }

// Copy is unchanged from the old page; website-updates/delivery.md #64 and #65 are already applied.
const core: Feature[] = [
  {
    icon: RefreshCwIcon,
    title: "From Order to Door—No Guesswork",
    text: "No more switching tabs or copying addresses. Orders flow straight from your POS to the driver app.",
    items: [
      "Orders go right from POS to driver app—no manual entry",
      "Inventory updates in real time as you pack and deliver",
      "Routes, manifests, and compliance—all in one place",
    ],
  },
  {
    icon: SmartphoneIcon,
    title: "A Driver App Drivers Actually Like",
    text: "No more lost drivers or missed stops. Focus on delivering, not troubleshooting.",
    items: [
      "Turn-by-turn navigation built in",
      "Route optimization for multiple stops",
      "One-tap status: On Route, Delivered, Delayed",
      "Digital ID check and signature capture",
    ],
  },
  {
    icon: MapPinIcon,
    title: "Zones, GPS, and Full Control",
    text: "Set your own rules—by zone, GPS, time, or order value. Deliver where and when you want.",
    items: [
      "Zone-based or GPS-based route generation",
      "Dynamic delivery windows based on availability",
      "Scheduled or on-demand delivery—your choice",
      "Adjust pricing, fees, and limits per region",
    ],
  },
  {
    icon: PackageIcon,
    title: "Inventory on Wheels—No More Guesswork",
    text: "Track every item, every stop, every time. Compliance is built in.",
    items: [
      "Real-time inventory syncing with POS",
      "Vehicle load limits and compliance rules",
      "Automated return-to-store workflows",
      "Full traceability from pack to delivery",
    ],
  },
]

const more: Feature[] = [
  {
    icon: ZapIcon,
    title: "Deliver More, Stress Less",
    text: "Whether you've got one driver or a fleet, deliver more, faster—with less stress.",
    items: [
      "Assign and batch multiple orders per route",
      "Auto-prioritize based on time sensitivity",
      "Customize workflows per driver or store",
      "Review daily performance with built-in analytics",
    ],
  },
  {
    icon: SmileIcon,
    title: "Customers Know Exactly What's Happening",
    text: "No more 'where's my order?' calls. Real-time updates and driver ETAs.",
    items: [
      "Real-time order updates via SMS or app",
      "Driver ETAs and delivery tracking",
      "Custom notifications when order is on the way",
      "Reorder in one tap from past delivery history",
    ],
  },
]

function Card({ f, i }: { f: Feature; i: number }) {
  const Icon = f.icon
  return (
    // The reveal and the hover lift both set `transition`, so they sit on separate elements.
    <li {...ui.rv(i)}>
      <div className={`${ui.lift} flex h-full flex-col rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
        <span className="mb-5 grid size-11 place-items-center rounded-ctl bg-h-surface2 text-h-accent">
          <Icon className="size-5" />
        </span>
        <h2 className={ui.h3}>{f.title}</h2>
        <p className="mt-2 text-[.9375rem] text-h-muted">{f.text}</p>
        <ul className="mt-5 grid gap-3 border-t border-h-line pt-5 text-[.9375rem]">
          {f.items.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-[.55em] size-1.5 shrink-0 rounded-full bg-h-accent" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function DeliveryPage() {
  return (
    <div data-page="delivery" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="delivery-h">
        <Bloom />
        <div className={`${ui.wrap} relative py-hero`}>
          <h1 id="delivery-h" className={`${ui.h1} animate-rise`}>
            Bleaum Last-Mile Delivery
          </h1>
          <p className="mt-5 max-w-[34ch] animate-rise font-display text-quote font-medium leading-[1.4] [animation-delay:90ms]">
            Real-time routes. Fewer headaches. Happy customers.
          </p>
          <p className="mt-4 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:180ms]">
            We built Bleaum Delivery after too many nights tracking down lost drivers, fixing manifest mistakes, and
            fielding &quot;where&apos;s my order?&quot; calls. Now, your team can see every order, every route, and every
            delivery—live.
          </p>
          <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
            <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>Book a Demo</DemoLink>
          </div>
        </div>
      </section>

      {/* Core features */}
      <section className="py-pad" aria-label="Delivery features">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 md:gap-6`}>
          {core.map((f, i) => (
            <Card key={f.title} f={f} i={i % 2} />
          ))}
        </ul>
      </section>

      {/* Speed and customer updates */}
      <section className="bg-h-surface2 py-pad" aria-label="Faster deliveries and customer updates">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 md:gap-6`}>
          {more.map((f, i) => (
            <Card key={f.title} f={f} i={i} />
          ))}
        </ul>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Ready for Delivery That Just Works?</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Want to see how Bleaum Delivery could work for your team? Let&apos;s set up a quick demo and show you the
              difference.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>
                <span className="hidden sm:inline">Schedule a Demo to See It in Action</span>
                <span className="sm:hidden">Schedule a Demo</span>
              </DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
