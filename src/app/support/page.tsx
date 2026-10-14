import type { ComponentType } from "react"
import type { Metadata } from "next"
import { ArrowUpRightIcon, CheckIcon, HeadsetIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact the Bleaum support team by phone or email, and see support hours.",
}

type Option = { icon: ComponentType<{ className?: string }>; title: string; description: string; href: string }

// Copy, hours and contact details are unchanged from the old page. website-updates/support.md #109 also asks for chat
// and a help center link; both wait on the business (no chat tool is live, and the link text is not set), so neither
// is added. The phone number is the old page's placeholder (555-1234) and stays until the real one is confirmed;
// the old page's commented-out emergency phone line stays out.
const options: Option[] = [
  { icon: PhoneIcon, title: "Call us", description: "Speak directly with our support team", href: "tel:+18005551234" },
  { icon: MailIcon, title: "Email us", description: "Send us a detailed message", href: "mailto:comms@bleaum.io" },
]

const hours = [
  ["Monday - Friday:", "9:00 AM - 5:00 PM EST"],
  ["Saturday:", "09:00 AM - 2:00 PM EST"],
  ["Sunday:", "09:00 AM - 2:00 PM EST"],
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative support card: a headset, a call row and a mail row. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[18rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <HeadsetIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {[PhoneIcon, MailIcon, HeadsetIcon].map((I, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <I className="size-6 shrink-0 text-copper-400" />
              <div className="flex-1">
                <div className={`h-2 rounded-full bg-white/35 ${["w-3/4", "w-2/3", "w-4/5"][i]}`} />
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

export default function SupportPage() {
  return (
    <div data-page="support" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="sup-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="sup-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Connect with Bleaum Support
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Choose your preferred way to get in touch with our support team. We&apos;re here to help!
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* Ways to reach us */}
      <section className="py-pad" aria-label="Contact options">
        <div className={ui.wrap}>
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-6">
            {options.map(({ icon: I, title, description, href }, i) => (
              <li key={title} {...ui.rv(i)}>
                <a
                  href={href}
                  className={`${ui.lift} group flex h-full min-h-[13rem] flex-col rounded-card border border-h-line bg-h-surface p-6`}
                >
                  <span className="flex items-start justify-between">
                    <span className={`${chip} size-14 transition-transform duration-250 ease-soft group-hover:-rotate-6 group-hover:scale-105`}>
                      <I className="size-7" />
                    </span>
                    <ArrowUpRightIcon
                      className="size-5 text-h-muted transition-[transform,color] duration-250 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-h-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <h2 className={`${ui.h3} mt-auto pt-8`}>{title}</h2>
                  <p className="mt-1 text-[.9375rem] text-h-muted">{description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support hours */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="hours-h">
        <div className={ui.wrap}>
          <h2 id="hours-h" {...ui.rv(0, ui.h2)}>Support Hours</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
            <div {...ui.rv(0, "rounded-card border border-h-line bg-h-surface p-6 sm:p-8")}>
              <h3 className={ui.h3}>Customer Support</h3>
              <dl className="mt-4 divide-y divide-h-line">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 first:pt-0 last:pb-0">
                    <dt className="font-medium">{day}</dt>
                    <dd className="text-h-muted">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div {...ui.rv(1, `home-dk relative overflow-hidden rounded-card border border-h-line p-6 sm:p-8`)}>
              <h3 className={`${ui.h3} flex items-center gap-3`}>
                <span className="relative flex size-2.5" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper-400 opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-copper-400" />
                </span>
                Emergency Support
              </h3>
              <p className="mt-4 text-h-muted">Available 24/7 for critical system issues</p>
              <p className="mt-3 text-h-muted">
                Email:{" "}
                <a href="mailto:comms@bleaum.io" className="font-medium text-h-accent underline underline-offset-4">
                  comms@bleaum.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
