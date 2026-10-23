import type { Metadata } from "next"
import { CheckIcon, ClipboardCheckIcon, DownloadIcon, FileTextIcon } from "lucide-react"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "SOP Checklists",
  description:
    "Downloadable standard operating procedure checklists for your store operations.",
}

// Copy and file links are unchanged from the old page. website-updates/sops.md #123 says this page has not been
// reviewed yet, so no wording is touched here.
const checklists = [
  { title: "General Operations SOP", href: "/downloads/general-operations-sop.pdf" },
  { title: "Inventory Management SOP", href: "/downloads/inventory-management-sop.pdf" },
  { title: "Employee Onboarding SOP", href: "/downloads/employee-onboarding-sop.pdf" },
]

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Decorative checklist: a header and three ticked rows. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[18rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <ClipboardCheckIcon className="size-8 shrink-0 text-copper-400" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-3">
          {["w-3/4", "w-2/3", "w-4/5"].map((w, i) => (
            <div key={w} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <span className="grid size-5 shrink-0 place-items-center rounded-md bg-copper-400 text-navy-900">
                <CheckIcon className="size-3" strokeWidth={3} />
              </span>
              <div className="flex-1">
                <div className={`h-2 rounded-full bg-white/35 ${w}`} />
                <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
              </div>
              <DownloadIcon className={`size-4 shrink-0 ${i === 2 ? "text-white/25" : "text-white/60"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SopsChecklistsPage() {
  return (
    <div data-page="sop-checklists" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="chk-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="chk-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              SOP Checklists
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              Download our Standard Operating Procedure (SOP) checklists to help streamline your business operations.
              Click on a checklist below to download.
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* Checklists */}
      <section className="py-pad" aria-label="Checklists">
        <div className={ui.wrap}>
          <ul className="mx-auto grid max-w-3xl gap-4">
            {checklists.map((c, i) => (
              <li key={c.href} {...ui.rv(i)}>
                <div
                  className={`${ui.lift} flex flex-col gap-4 rounded-card border border-h-line bg-h-surface p-5 sm:flex-row sm:items-center sm:justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`${chip} size-12`}>
                      <FileTextIcon className="size-6" />
                    </span>
                    <h2 className={ui.h3}>{c.title}</h2>
                  </div>
                  <a href={c.href} download className={`${ui.btnPrimary} gap-2 max-sm:w-full`}>
                    <DownloadIcon className="size-5" aria-hidden="true" /> Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
