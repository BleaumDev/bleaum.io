import type { CSSProperties } from "react"
import { IBM_Plex_Sans, Montserrat } from "next/font/google"

const display = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat", display: "swap" })
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" })

// Tailwind classes shared by the Home page, header and footer. Colors, spacing, fonts and keyframes
// come from tailwind.config.ts; theme variables (--h-*) come from globals.css.

// Page root: font variables, theme tokens, base type.
export const root =
  `${display.variable} ${body.variable} home-theme overflow-x-clip bg-h-bg font-body text-[1.0625rem] leading-[1.6] text-h-text antialiased ` +
  "[&_:focus-visible]:outline [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[3px] [&_:focus-visible]:outline-h-accent"

export const wrap = "mx-auto max-w-wrap px-gutter"

// Headings
export const heading = "font-display leading-[1.15] tracking-[-.015em]"
export const h1 = `${heading} text-h1 font-normal`
export const h2 = `${heading} text-h2 font-medium`
export const h3 = `${heading} text-[1.25rem] font-medium`
// Small display label (the old `font:` shorthand also reset line-height to normal)
export const label = "font-display font-medium leading-[normal]"

export const kicker = "mb-4 text-[.9375rem] font-semibold"

// Buttons
const btn =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-ctl px-5 py-2.5 font-body text-[.9375rem] font-semibold leading-[1.2] transition-[transform,filter,box-shadow] duration-200 ease-soft hover:-translate-y-0.5 active:translate-y-0"
export const btnPrimary = `${btn} bg-h-btn text-h-btn-text hover:brightness-[1.08]`
export const btnCopper = `${btn} bg-copper-400 text-navy-900 hover:brightness-[1.08]`
export const btnQuiet = `${btn} bg-transparent text-h-text shadow-[inset_0_0_0_1.5px_var(--h-line)] hover:shadow-[inset_0_0_0_1.5px_currentColor]`
export const btnQuietOnDark = `${btn} bg-transparent text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.3)] hover:shadow-[inset_0_0_0_1.5px_#fff]`
export const btnGhost = `${btn} bg-transparent text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.35)] hover:shadow-[inset_0_0_0_1.5px_#fff]`
export const actions = "flex flex-wrap gap-3"
// Full-width buttons on small phones (hero and CTA)
export const stack = "max-[479px]:flex-[1_1_100%]"

// Brand dots as icons
const dotFill =
  "block bg-[radial-gradient(circle,#DF9770_2.4px,transparent_2.9px)] [mask-image:radial-gradient(circle,#000_28%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,#000_28%,transparent_70%)]"
export const dotmark = `${dotFill} mb-1 size-12 bg-[length:9px_9px]`
export const dotmarkSm = `${dotFill} size-8 shrink-0 bg-[length:7px_7px]`

// Cards that lift on hover
export const lift =
  "transition-[transform,border-color,box-shadow] duration-250 ease-soft hover:-translate-y-1 hover:border-copper-400 hover:shadow-[0_24px_48px_-28px_rgba(11,30,49,.5)] focus-visible:-translate-y-1 focus-visible:border-copper-400 focus-visible:shadow-[0_24px_48px_-28px_rgba(11,30,49,.5)]"

// Scroll reveal: home-client.tsx marks elements below the fold "pending", then "in" once seen.
export const reveal =
  "transition-[opacity,transform] duration-600 ease-soft data-[reveal=pending]:translate-y-6 data-[reveal=pending]:opacity-0"

// Props that mark an element for the scroll reveal: `i` staggers siblings, `cls` is the element's own classes.
export const rv = (i = 0, cls = "") => ({
  "data-reveal": "",
  className: `${reveal} ${cls}`,
  style: { transitionDelay: `${i * 70}ms` } as CSSProperties,
})

// Form fields: the label sits inside the box above the value, and the box lights up with the field.
// The root's focus outline is dropped on the inner control because the whole box shows focus instead.
export const fieldBox =
  "block rounded-ctl border border-h-line bg-h-surface px-4 pb-2 pt-2.5 transition-[border-color,box-shadow] duration-200 focus-within:border-copper-400 focus-within:shadow-[0_0_0_3px_rgba(223,151,112,.28)]"
export const fieldLabel = "block text-[.75rem] font-medium text-h-muted"
export const fieldControl = "mt-0.5 block bg-transparent text-[1rem] text-h-text focus-visible:!outline-none"

// Gradients
export const heroBg = "bg-[linear-gradient(100deg,#0F2F4C_0%,#0B1E31_45%,#071321_100%)]"
export const ctaBg = "bg-[linear-gradient(100deg,#0F2F4C_0%,#0B1E31_50%,#071321_100%)]"

// Article text follows the Home theme: prose colors come from the h-* tokens, so light and dark both work.
export const prose =
  "prose prose-lg max-w-none font-body [--tw-prose-body:var(--h-text)] [--tw-prose-headings:var(--h-text)] [--tw-prose-bold:var(--h-text)] [--tw-prose-links:var(--h-accent)] [--tw-prose-bullets:var(--h-accent)] [--tw-prose-counters:var(--h-muted)] [--tw-prose-quotes:var(--h-text)] [--tw-prose-quote-borders:var(--h-line)] [--tw-prose-hr:var(--h-line)] prose-headings:font-display prose-headings:font-medium prose-h2:mb-3 prose-h2:mt-10 prose-h2:text-[1.5rem] prose-a:font-medium"
