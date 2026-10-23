import type { ComponentType } from "react"
import type { Metadata } from "next"
import { ArrowDownIcon, CheckIcon, ClipboardListIcon, DollarSignIcon, UserPlusIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import ReferForm from "@/components/views/refer-form"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Refer a Business",
  description:
    "Refer a retailer to Bleaum and earn a referral bonus when they become a customer.",
}

// Copy is unchanged from the old page. website-updates/refer.md #115 (one consistent offer) and #118 (legal review of
// the terms) wait on the business, so the offer lines and the fine print stay as they were; #116 and #117 are applied.
const steps: { icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    icon: ClipboardListIcon,
    title: "Complete the referral form",
    text: "We need a few basic details about the retail shop you refer to start the process.",
  },
  {
    icon: UserPlusIcon,
    title: "Get paid!",
    text: "If your referred account signs up for Bleaum within 90 days, we’ll deliver your payment when their shop rings in their first sale.",
  },
  {
    icon: DollarSignIcon,
    title: "Keep spreading the word",
    text: "As long as you refer retailers that aren’t already in our system, you’ll continue to be eligible for more and more bonuses.",
  },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative payout card: an amount bar and three referral rows. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[18rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <DollarSignIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {["w-3/4", "w-2/3", "w-4/5"].map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <UserPlusIcon className="size-6 shrink-0 text-copper-400" />
              <div className="flex-1">
                <div className={`h-2 rounded-full bg-white/35 ${w}`} />
                <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
              </div>
              <span className={`grid size-5 shrink-0 place-items-center rounded-full ${i === 2 ? "bg-white/15" : "bg-copper-400 text-navy-900"}`}>
                {i !== 2 && <CheckIcon className="size-3" strokeWidth={3} />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ReferPage() {
  return (
    <div data-page="refer" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="ref-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <p className={`${ui.kicker} animate-rise text-copper-400`}>REFERRAL BONUS</p>
            <h1 id="ref-h" className={`${ui.h1} max-w-[20ch] animate-rise [animation-delay:60ms]`}>
              Get up to $500 to spread the word about Bleaum.
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:150ms]">
              If you like Bleaum, tell a friend! You can earn cash for referring new retailers to Bleaum. Get $500 for
              every eligible Point of Sale referral and $200 for Ecommerce — complete the form to apply.
            </p>
            <div className={`${ui.actions} mt-8 animate-rise [animation-delay:240ms]`}>
              <a href="#how-it-works-section" className={`${ui.btnGhost} ${ui.stack} gap-2`}>
                How it works <ArrowDownIcon className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <Preview />
        </div>
      </section>

      {/* Referral form */}
      <section className="py-pad" aria-label="Referral form">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "mx-auto max-w-3xl")}>
            <ReferForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works-section" className="bg-h-surface2 py-pad" aria-labelledby="how-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <p className={`${ui.kicker} text-h-accent`}>HOW IT WORKS</p>
            <h2 id="how-h" className={ui.h2}>
              Refer a retail shop in minutes and get paid <br className="hidden sm:block" />
              after their first sale.
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {steps.map(({ icon: I, title, text }, i) => (
              <li key={title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <div className="flex items-center gap-4">
                    <span className={`${chip} size-12`}>
                      <I className="size-6" />
                    </span>
                    <div>
                      <p className="text-[.8125rem] font-bold text-h-muted">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className={ui.h3}>{title}</h3>
                    </div>
                  </div>
                  <p className="text-[.9375rem] text-h-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[.8125rem] text-h-muted">
            Referral must be submitted through the online form here. Referred account must be a new lead/account in our
            system. Referred account must close within 90 days of referral submission. Retail shop owners or key
            decision-makers cannot refer their own shop. Payout in USD/CAD, dependent on referrer&apos;s local currency.
          </p>
        </div>
      </section>
    </div>
  )
}
