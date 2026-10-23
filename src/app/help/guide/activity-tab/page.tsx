import type { Metadata } from "next"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

// Copy is unchanged from the old page, including the "1." in the first column heading.
const rows: { type: string; details: string }[] = [
  { type: "Activity Type", details: "Description of the action taken (e.g., Customer Added, Product Edited)." },
  { type: "Date and Time", details: "Precise time of each action." },
]

// Decorative activity feed: a dot, two bars and a time bar per entry. No text, so it adds no copy.
const feed = ["w-3/4", "w-2/3", "w-4/5", "w-1/2"]

function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-copper-400/70" />
          <div className="h-6 w-16 rounded-full bg-white/10" />
          <div className="h-6 w-16 rounded-full bg-white/10" />
        </div>
        <div className="grid gap-3">
          {feed.map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <span className={`size-2.5 shrink-0 rounded-full ${i === 0 ? "bg-copper-400" : "bg-white/30"}`} />
              <div className="flex-1">
                <div className={`h-2 rounded-full bg-white/35 ${w}`} />
                <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
              </div>
              <div className="h-1.5 w-10 shrink-0 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Help Guide",
  description: "Step-by-step help for using the Bleaum POS.",
}

export default function ActivityTabPage() {
  return (
    <div data-page="activity-tab" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="act-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="act-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              Activity Tab
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Track every action happening in your shop.
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* What the tab shows */}
      <section id="activity-tab" className="py-pad" aria-label="Activity tab details">
        <div className={`${ui.wrap} max-w-[60rem]`}>
          <div {...ui.rv()}>
            <div className="overflow-x-auto rounded-card border border-h-line bg-h-surface">
              <table className="w-full min-w-[28rem] border-collapse text-left text-[.9375rem]">
                <thead>
                  <tr className="bg-h-surface2">
                    <th scope="col" className={`${ui.label} w-2/5 px-5 py-4 sm:px-8`}>1.What It Shows</th>
                    <th scope="col" className={`${ui.label} px-5 py-4 sm:px-8`}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.type} className="border-t border-h-line align-top">
                      <th scope="row" className="px-5 py-5 font-semibold text-h-accent sm:px-8">{r.type}</th>
                      <td className="px-5 py-5 text-h-muted sm:px-8">{r.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]">
              Every change, addition, deletion, and update in the system is logged for transparency and accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
