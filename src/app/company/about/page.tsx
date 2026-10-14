import type { Metadata } from "next"
import { Bloom } from "@/components/views/bloom"
import { DemoLink, RevealOnScroll } from "@/components/views/home-client"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "About",
  description:
    "Bleaum builds an all-in-one platform for retailers, from point of sale and inventory to delivery and payments.",
}

const dot = <span className={ui.dotmark} aria-hidden="true" />

const stats = [
  { big: "300+", label: "Trusted Retailers" },
  { big: "24/7", label: "Support" },
]

const story = [
  {
    title: "Our Story",
    text: [
      "Bleaum started in 2021 with a simple goal: make running a retail shop or specialty retail shop less stressful and more profitable. Our founders spent years in the trenches—managing inventory, dealing with compliance headaches, and trying to keep customers happy.",
      "We knew there had to be a better way.",
    ],
  },
  {
    title: "Today",
    text: [
      "Today, Bleaum is trusted by over 300 retailers across the US. We help teams save hours every week, reduce costly mistakes, and focus on what matters: growing their business and serving their communities.",
    ],
  },
]

const values = [
  {
    title: "Why We Built Bleaum",
    text: "We saw friends and colleagues struggle with clunky POS systems, endless spreadsheets, and confusing regulations. We built Bleaum to give operators a single, easy-to-use platform that actually helps.",
  },
  {
    title: "Our Mission",
    text: "We believe small businesses are the backbone of every community. Our mission is to help them thrive by making technology accessible, affordable, and genuinely helpful.",
  },
  {
    title: "Built for regulated retail",
    text: "We got our start in regulated retail, where compliance, efficiency, and precision are everything. Today our platform supports a wide range of regulated and fast-moving industries.",
  },
]

// Labels only: the destinations for these are still an open decision (website-updates/about.md #108).
const next = [
  {
    title: "Looking Ahead",
    text: "We're constantly improving, adding new features, and listening to feedback. Our roadmap is shaped by the needs of real operators. If you have an idea or a pain point, we want to hear from you.",
    label: "Continuous Innovation",
  },
  {
    title: "Let's Grow Together",
    text: "Bleaum is more than software—it's a community of builders, operators, and dreamers. If you're ready to simplify your operations and grow your business, let's talk.",
    label: "Join Our Community",
  },
]

export default function AboutPage() {
  return (
    <div data-page="about" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="about-h">
        <Bloom />
        <div className={`${ui.wrap} relative py-hero`}>
          <p className={`${ui.kicker} animate-rise text-copper-400`}>Established 2021</p>
          <h1 id="about-h" className={`${ui.h1} animate-rise [animation-delay:90ms]`}>
            About Bleaum
          </h1>
          <p className="mt-5 max-w-[34ch] animate-rise font-display text-quote font-medium leading-[1.4] [animation-delay:180ms]">
            Empowering retailers with intelligent solutions for compliance, inventory, and growth
          </p>
          <p className="mt-4 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:270ms]">
            Since 2021, we&apos;ve been the trusted technology partner for retailers and specialty retailers,
            transforming complex operations into streamlined success stories.
          </p>
          <ul className="mt-12 grid max-w-md animate-rise grid-cols-2 gap-x-6 [animation-delay:360ms]">
            {stats.map((s) => (
              <li key={s.label} className="border-t border-white/20 py-4">
                <b className="block font-display text-[2rem] font-medium leading-[1.1] text-copper-400">{s.big}</b>
                <span className="text-[.9375rem] text-fog-300">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story */}
      <section className="py-pad" aria-label="Our story">
        <div className={`${ui.wrap} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          {story.map((s, i) => (
            <div key={s.title} {...ui.rv(i)}>
              {dot}
              <h2 className={ui.h2}>{s.title}</h2>
              <div className="mt-4 grid gap-4 text-h-muted">
                {s.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why, mission, regulated retail */}
      <section className="bg-h-surface2 py-pad" aria-label="Why we built Bleaum">
        <ul className={`${ui.wrap} grid gap-4 md:grid-cols-2 lg:grid-cols-3`}>
          {values.map((v, i) => (
            <li key={v.title} {...ui.rv(i, "flex flex-col gap-2 rounded-card border border-h-line bg-h-surface p-6")}>
              {dot}
              <h2 className={ui.h3}>{v.title}</h2>
              <p className="text-[.9375rem] text-h-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonial */}
      <section className="home-dk py-pad" aria-labelledby="results-h">
        <div className={`${ui.wrap} grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div {...ui.rv()}>
            <h2 id="results-h" className={ui.h2}>Real Results, Real People</h2>
            <p className="mt-4 max-w-[44ch] text-h-muted">
              Our customers tell us they love how easy Bleaum is to use, and how much time it saves their staff.
              We&apos;re proud to be a partner, not just a vendor.
            </p>
          </div>
          <figure {...ui.rv(1, "rounded-card bg-h-surface p-7 shadow-[inset_0_0_0_1.5px_var(--h-line)] sm:p-9")}>
            <blockquote className="font-display text-quote font-medium leading-[1.45] tracking-[-.01em]">
              <p>
                &ldquo;Bleaum helped us cut inventory time in half and made compliance a breeze. Their support team
                actually listens and solves problems fast.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3.5">
              <span
                className="grid size-11 shrink-0 place-items-center rounded-full bg-copper-400 font-display text-[.875rem] font-semibold leading-[normal] text-navy-900"
                aria-hidden="true"
              >
                D
              </span>
              <div>
                <b className={`${ui.label} block text-[1.0625rem]`}>Dominique</b>
                <span className="text-[.9375rem] text-h-accent">Green Releaf</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Looking ahead, community */}
      <section className="py-pad" aria-label="Looking ahead">
        <div className={`${ui.wrap} grid gap-10 md:grid-cols-2 md:gap-14`}>
          {next.map((n, i) => (
            <div key={n.title} {...ui.rv(i, "border-t border-h-line pt-6")}>
              <h2 className={ui.h2}>{n.title}</h2>
              <p className="mt-3 text-h-muted">{n.text}</p>
              <p className="mt-5 font-semibold text-h-accent">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Ready to Get Started?</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              Join over 300 retailers who trust Bleaum to streamline their operations and grow their business.
            </p>
            <div className={`${ui.actions} mt-7`}>
              <DemoLink className={`${ui.btnCopper} ${ui.stack}`}>Book a Demo</DemoLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
