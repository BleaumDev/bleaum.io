import type { Metadata } from "next"
import type { ComponentType } from "react"
import Image from "next/image"
import { BellIcon, MessageSquareIcon, ZapIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import { List, type Item } from "@/components/views/guide-list"
import * as ui from "@/components/views/home-ui"

type Icon = ComponentType<{ className?: string }>

// Copy is unchanged from the old page. The same article also lives at /docs/pos-help-guide/action-icons.
const icons: { id: string; icon: Icon; title: string; purpose: string; items: Item[]; closing: string }[] = [
  {
    id: "lightning-bolt",
    icon: ZapIcon,
    title: "Lightning Bolt Icon — Activity Center",
    purpose: "View and track all actions taken across the system.",
    items: [
      "Click the Lightning Bolt to open the Main Activity Page.",
      {
        text: "Features:",
        items: [
          "View every action recorded in the system (customer check-ins, edits, sales, updates, etc.).",
          { text: "Filter by Date:", items: ["All actions", "Today", "Yesterday", "Custom Date Range"] },
          "Filter by Activity Type for more detailed searches (e.g., Product Edited, Order Completed).",
        ],
      },
    ],
    closing: "Helps you quickly monitor what's happening across the platform at any time.",
  },
  {
    id: "bell-icon",
    icon: BellIcon,
    title: "Bell Icon — Notifications",
    purpose: "See real-time alerts for incoming activities.",
    items: [
      {
        text: "Click the Bell to view:",
        items: [
          "New orders coming into the system.",
          "Requests (such as order updates, manager approvals, or inventory alerts).",
        ],
      },
    ],
    closing: "Never miss a customer request, order, or important system update.",
  },
  {
    id: "chat-icon",
    icon: MessageSquareIcon,
    title: "Chat Icon — Messaging Center",
    purpose: "Communicate instantly with Customers and Teammates.",
    items: [
      "Click the Chat Bubble icon to access chat functions.",
      {
        text: "Inside the chat center:",
        items: [
          { text: "Customer Tab:", items: ["Send and receive messages directly with customers."] },
          { text: "Teammate Tab:", items: ["Internal messaging with team members."] },
        ],
      },
    ],
    closing: "Streamlines communication inside the store — faster responses, better teamwork.",
  },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

export const metadata: Metadata = {
  title: "Help Guide",
  description: "Step-by-step help for using the Bleaum POS.",
}

export default function ActionIconsPage() {
  return (
    <div data-page="action-icons" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="ai-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="ai-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Action Icons
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Directly below the user&apos;s name, you&apos;ll see three action icons. Each one gives quick access to
              important real-time tools.
            </p>
          </div>
          <div className="animate-rise justify-self-start [animation-delay:200ms] lg:justify-self-center">
            <Image
              src="/help/bolt.jpg"
              alt="Lightning bolt, bell, and chat icons"
              width={235}
              height={172}
              priority
              className="h-auto w-full max-w-[15rem] rounded-card border-2 border-white/25 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)]"
            />
          </div>
        </div>
      </section>

      {/* The three icons */}
      <section id="action-icons" className="py-pad" aria-label="Action icons">
        <ul className={`${ui.wrap} grid gap-4 md:gap-6 lg:grid-cols-3`}>
          {icons.map((c, i) => (
            <li key={c.id} id={c.id} {...ui.rv(i, "scroll-mt-24")}>
              <div className={`${ui.lift} flex h-full flex-col rounded-card border border-h-line bg-h-surface p-6 sm:p-8`}>
                <span className={`${chip} mb-5 size-12`}>
                  <c.icon className="size-6" />
                </span>
                <h2 className={ui.h3}>{c.title}</h2>
                <p className="mt-3 text-[.9375rem]">
                  <span className="font-semibold text-h-accent">Purpose:</span> {c.purpose}
                </p>
                <div className="text-[.9375rem]">
                  <List items={c.items} top />
                </div>
                <div className="mt-auto pt-6">
                  <p className="border-l-2 border-copper-400 pl-4 font-display text-[1rem] font-medium leading-[1.5]">
                    {c.closing}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick summary */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="sum-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="sum-h" className={`${ui.heading} text-h2 font-normal`}>Quick Summary</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              The Lightning Bolt, Bell, and Chat icons give you instant access to activity history, new notifications,
              and direct messaging — all designed to keep you connected, informed, and efficient throughout the day.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
