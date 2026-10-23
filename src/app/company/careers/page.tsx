import type { Metadata } from "next"
import { Bloom } from "@/components/views/bloom"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Bleaum team. Roles will be posted here.",
}

// Copy is unchanged on purpose: publishing roles or pulling the links is an open decision (website-updates/careers.md #110).
export default function CareersPage() {
  return (
    <div data-page="careers" className={ui.root}>
      <section
        className={`relative flex min-h-[60vh] items-center overflow-hidden text-white ${ui.heroBg}`}
        aria-labelledby="careers-h"
      >
        <Bloom />
        <div className={`${ui.wrap} relative w-full py-hero`}>
          <h1 id="careers-h" className={`${ui.h1} animate-rise`}>
            Careers at Bleaum
          </h1>
          <p className="mt-5 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:90ms]">
            We&apos;re growing fast—join us soon!
          </p>
          <p className="mt-2 animate-rise font-semibold text-copper-400 [animation-delay:180ms]">
            Careers page coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
