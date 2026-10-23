"use client"

import { useEffect, useLayoutEffect, useRef, type ComponentType } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import * as ui from "./home-ui"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

type Icon = ComponentType<{ className?: string }>
export type Topic = { icon: Icon; description: string; details: string[]; resources?: { label: string; url: string }[] }

// Topics for the SOPs page. On wide screens the section pins and scrolling steps through the topics: a wheel of
// names turns, and the panel redraws with a staggered entrance. Clicking a name, or picking one in the search,
// scrolls to that topic's spot. Narrow screens and prefers-reduced-motion get no pin: a chip row and a plain swap.
// The selected topic lives in the parent so the hero search can set it.

const ROW = 52 // px, wheel row height (matches h-[52px] below)
const STEP = 220 // px of scroll per topic while pinned

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]"

// Wheel rows fade and shrink with their distance from the selected one.
const look = (row: number, at: number) => {
  const d = Math.abs(row - at)
  return { opacity: d === 0 ? 1 : Math.max(0.12, 1 - d * 0.3), scale: 1 - Math.min(d, 4) * 0.05 }
}

// "Title: text" splits into a bold title (colon kept) and the rest. A line without a title stays whole.
const splitDetail = (d: string): [string, string] => {
  const i = d.indexOf(": ")
  return i < 0 ? ["", d] : [d.slice(0, i + 1), d.slice(i + 2)]
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

export default function TopicExplorer({
  topics,
  selected,
  onSelect,
}: {
  topics: Record<string, Topic>
  selected: string
  onSelect: (name: string) => void
}) {
  const names = Object.keys(topics)
  const topic = topics[selected]
  const at = names.indexOf(selected)

  const section = useRef<HTMLElement>(null)
  const wheel = useRef<HTMLUListElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const trigger = useRef<ScrollTrigger | null>(null)
  const scrollAt = useRef(0) // index the scroll position last chose
  const lockUntil = useRef(0) // ignore scroll updates while a click's scroll is under way
  const first = useRef(true)
  const select = useRef(onSelect)
  useEffect(() => {
    select.current = onSelect
  })

  // Pin the section on wide screens and map scroll position to a topic.
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const n = names.length
      const st = ScrollTrigger.create({
        trigger: section.current,
        pin: true,
        anticipatePin: 1,
        start: "center center",
        end: `+=${n * STEP}`,
        snap: { snapTo: names.map((_, i) => (i + 0.5) / n), duration: { min: 0.15, max: 0.4 }, delay: 0.1, ease: "power2.inOut" },
        onUpdate: (self) => {
          if (performance.now() < lockUntil.current) return
          const i = Math.min(n - 1, Math.floor(self.progress * n))
          if (i === scrollAt.current) return
          scrollAt.current = i
          select.current(names[i])
        },
      })
      trigger.current = st
      return () => {
        trigger.current = null
      }
    })
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Selected topic changed: turn the wheel, fill the progress bar, replay the panel entrance.
  useIsoLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dur = first.current || reduce ? 0 : 0.55
    const rows = gsap.utils.toArray<HTMLElement>(wheel.current?.children ?? [])
    gsap.to(wheel.current, { y: -(at + 0.5) * ROW, duration: dur, ease: "power3.out", overwrite: "auto" })
    gsap.to(rows, { opacity: (j) => look(j, at).opacity, scale: (j) => look(j, at).scale, duration: dur, ease: "power3.out", overwrite: "auto" })
    gsap.to(bar.current, { scaleX: (at + 1) / names.length, duration: dur, ease: "power2.out", overwrite: "auto" })

    if (dur) {
      const q = gsap.utils.selector(panel)
      gsap.fromTo(q("[data-fx=chip]"), { scale: 0.5, rotate: -30 }, { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2)", overwrite: "auto" })
      gsap.fromTo(q("[data-fx=head]"), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", overwrite: "auto" })
      gsap.from(q("[data-fx=card]"), { y: 28, opacity: 0, scale: 0.96, duration: 0.55, stagger: 0.06, ease: "power3.out", clearProps: "transform,opacity" })
    }

    // A change the scroll did not cause (a click, or the hero search): go to that topic's spot.
    const initial = first.current
    first.current = false
    if (initial || at === scrollAt.current) return
    scrollAt.current = at
    const st = trigger.current
    if (st) {
      lockUntil.current = performance.now() + 1000
      const y = st.start + ((at + 0.5) / names.length) * (st.end - st.start)
      gsap.to(window, { scrollTo: { y, autoKill: true }, duration: 0.8, ease: "power2.inOut", overwrite: true })
    } else if (section.current) {
      const r = section.current.getBoundingClientRect()
      if (r.top > innerHeight * 0.6 || r.bottom < 0) section.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selected])

  return (
    <section ref={section} id="topics" className="scroll-mt-24 py-pad" aria-labelledby="topics-h">
      <div className={ui.wrap}>
        <h2 id="topics-h" className={`${ui.h2} max-w-[40ch]`}>What topics are you interested in?</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[17rem_1fr] lg:gap-8">
          {/* Narrow screens: a row of chips */}
          <ul className="-mx-gutter flex snap-x gap-2 overflow-x-auto px-gutter pb-2 [scrollbar-width:none] lg:hidden">
            {names.map((n) => {
              const I = topics[n].icon
              const on = n === selected
              return (
                <li key={n} className="shrink-0 snap-start">
                  <button
                    type="button"
                    onClick={() => onSelect(n)}
                    aria-pressed={on}
                    className={`flex items-center gap-3 rounded-ctl border p-2 pr-4 text-left transition-[background-color,border-color] duration-250 ease-soft ${
                      on ? "border-copper-400 bg-h-surface" : "border-transparent hover:border-h-line hover:bg-h-surface"
                    }`}
                  >
                    <span className={`${chip} size-9`}>
                      <I className="size-[1.125rem]" />
                    </span>
                    <span className={`whitespace-nowrap font-display font-medium ${on ? "text-h-text" : "text-h-muted"}`}>{n}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Wide screens: a wheel. The band in the middle marks the selected row. */}
          <div className="relative hidden h-[min(34rem,64vh)] overflow-hidden [-webkit-mask-image:linear-gradient(transparent,#000_22%,#000_78%,transparent)] [mask-image:linear-gradient(transparent,#000_22%,#000_78%,transparent)] lg:block">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-[52px] -translate-y-1/2 rounded-ctl border border-copper-400 bg-h-surface shadow-[0_12px_28px_-18px_rgba(11,30,49,.5)]"
            />
            <ul ref={wheel} className="absolute inset-x-0 top-1/2" style={{ transform: `translateY(${-0.5 * ROW}px)` }}>
              {names.map((n, j) => {
                const I = topics[n].icon
                const on = n === selected
                return (
                  <li key={n} className="h-[52px] origin-left" style={{ opacity: look(j, 0).opacity, transform: `scale(${look(j, 0).scale})` }}>
                    <button
                      type="button"
                      onClick={() => onSelect(n)}
                      aria-pressed={on}
                      className="relative flex h-full w-full items-center gap-3 rounded-ctl px-2 text-left"
                    >
                      <span className={`${chip} size-9`}>
                        <I className="size-[1.125rem]" />
                      </span>
                      <span className={`font-display font-medium transition-colors duration-300 ${on ? "text-h-text" : "text-h-muted"}`}>{n}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div ref={panel} className="relative overflow-hidden rounded-card border border-h-line bg-h-surface lg:h-[min(34rem,64vh)]" aria-live="polite">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-h-line" aria-hidden="true">
              <div ref={bar} className="h-full origin-left bg-copper-400" style={{ transform: `scaleX(${1 / names.length})` }} />
            </div>
            <div className="h-full overflow-y-auto p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span data-fx="chip" className={`${chip} size-14`}>
                  <topic.icon className="size-7" />
                </span>
                <h3 data-fx="head" className={`${ui.heading} text-[1.5rem] font-medium`}>{selected}</h3>
              </div>
              <p data-fx="head" className="mt-4 max-w-[60ch] text-h-muted">{topic.description}</p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {topic.details.map((d, i) => {
                  const [head, rest] = splitDetail(d)
                  return (
                    <li key={`${selected}-${d}`} data-fx="card" className="flex gap-3 rounded-ctl bg-h-surface2 p-4">
                      <span className="pt-0.5 font-display text-[.8125rem] font-semibold text-h-accent">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[.9375rem] text-h-muted">
                        {head && (
                          <>
                            <strong className="font-semibold text-h-text">{head}</strong>{" "}
                          </>
                        )}
                        {rest}
                      </p>
                    </li>
                  )
                })}
              </ol>
              {topic.resources && (
                <div data-fx="card" className="mt-6 border-t border-h-line pt-5">
                  <h4 className={ui.h3}>Resources</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-h-accent">
                    {topic.resources.map((r) => (
                      <li key={r.url}>
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-medium text-h-accent underline underline-offset-4">
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
