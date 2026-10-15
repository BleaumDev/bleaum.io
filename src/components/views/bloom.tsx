import type { ReactNode } from "react"

// Halftone "bloom" from the brand mark: dot size fades with distance from the center.
const BLOOM_DOTS = (still: boolean) => {
  const size = 760, gap = 34, reach = 370, rMax = 21, fall = 400, stagger = 2.2, mid = size / 2
  const dots: ReactNode[] = []
  for (let y = mid % gap; y <= size; y += gap) {
    for (let x = mid % gap; x <= size; x += gap) {
      const d = Math.hypot(x - mid, y - mid)
      if (d > reach) continue
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={Math.max(1.6, rMax * (1 - d / fall)).toFixed(2)}
          fillOpacity={(0.12 + 0.88 * (1 - d / reach) ** 2).toFixed(2)}
          className={still ? undefined : "origin-center animate-grow [transform-box:fill-box]"}
          style={still ? undefined : { animationDelay: `${Math.round(d * stagger)}ms` }}
        />,
      )
    }
  }
  return dots
}
const HERO_DOTS = BLOOM_DOTS(false)
const CTA_DOTS = BLOOM_DOTS(true)

const bloomBase = "pointer-events-none absolute top-1/2 -translate-y-1/2 fill-copper-400 max-md:top-[-60px] max-md:translate-y-0"

export function Bloom({ cta }: { cta?: boolean }) {
  return (
    <svg
      className={`${bloomBase} ${cta ? "right-[-12%] w-[min(46vw,520px)] opacity-60" : "right-[-6%] w-[min(58vw,720px)] max-md:right-[-55%] max-md:w-[130vw] max-md:opacity-[.35]"}`}
      viewBox="0 0 760 760"
      data-fx={cta ? "cta-bloom" : undefined}
      aria-hidden="true"
    >
      {cta ? CTA_DOTS : HERO_DOTS}
    </svg>
  )
}
