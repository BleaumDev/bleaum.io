import type { Metadata } from "next"
import { CheckIcon, HandshakeIcon, MailIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Bleaum. Learn how to become an integration or technology partner.",
}

// Copy is unchanged from the old page, and no file in website-updates/ covers it. The three "Partner .." entries are
// the old page's placeholders: real names, and the partners@bleaum.com domain, wait on the business.
const current = ["Partner .. ", "Partner ..", "Partner .."]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative partner list: a logo tile, two bars and a check per row. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[18rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <HandshakeIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {["w-3/4", "w-2/3", "w-4/5"].map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <div className="size-9 shrink-0 rounded-md bg-white/90" />
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

export default function PartnersPage() {
  return (
    <div data-page="partners" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="par-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="par-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Our Partners
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              We collaborate with industry leaders and innovative companies to deliver the best solutions for our
              clients. Interested in partnering with us? Reach out below!
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-pad" aria-labelledby="become-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, `${ui.lift} flex max-w-[64ch] flex-col gap-4 rounded-card border border-h-line bg-h-surface p-6 sm:p-8`)}>
            <span className={`${chip} size-12`}>
              <MailIcon className="size-6" />
            </span>
            <h2 id="become-h" className={ui.h3}>Become a Partner</h2>
            <p className="text-[.9375rem] text-h-muted">
              We&apos;re always looking for new opportunities to grow together. Email us at{" "}
              <a href="mailto:partners@bleaum.com" className="font-medium text-h-accent underline underline-offset-4">
                partners@bleaum.com
              </a>{" "}
              to start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="cur-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[60ch]")}>
            <span className={ui.dotmark} aria-hidden="true" />
            <h2 id="cur-h" className={ui.h2}>Our Current Partners</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {current.map((p, i) => (
              <li key={i} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full items-center gap-4 rounded-card border border-h-line bg-h-surface p-5`}>
                  <span className={`${chip} size-11`}>
                    <HandshakeIcon className="size-5" />
                  </span>
                  <span className={ui.h3}>{p}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
