# Bleaum Help Center rebrand: Phase 1

Scope of this phase: brand analysis, rebrand plan, per-page plans for Home and the Main Resource page, technical approach, and a working HTML demo of both pages.

Inputs read: every file in `rebrand resources/bleaum-brand/` (logo SVG/PNG, favicon pack, backgrounds, social images, app mockup), the website update sheet split in `rebrand resources/website-updates/`, and the current site code (`app/`, `components/`, `styles/`, `tailwind.config.ts`).

## Assumptions

- **I could inspect the logo.** I read the SVG source (exact hex values, dot geometry) and viewed the PNG lockup, OG image, backgrounds and app mockup. Nothing below is guessed from a description. What I could not see: a brand guideline PDF, so the typeface is matched by eye (see Typography) and should be confirmed against the designer's source.
- **This repo is the Help Center, not the marketing site.** It ships as "Bleaum Support" (home, getting started, 17 POS guides, product pages, announcements, support chat). The update sheet in `website-updates/` is written for the marketing site `bleaum.io` (`/grow/point-of-sale`, `/company/about`). Those pages are not in this repo. I applied the sheet's wording rules (no cannabis, Metrc or dispensary language; "state tracking and reporting integrations"; no absolute claims) to everything in the demo, and I treat the marketing-site pages as out of scope here.
- **"Main Resource page" = a new Guides hub at `/guides`.** The current site has no page that lists every guide in one place. The home page mixes marketing blurbs, product cards and an accordion. The hub is the primary content hub, so it is the second page I rebuild. If you meant a different page, tell me and I will swap it.
- **Light and dark both ship.** The current site forces dark mode. The logo has a "color on light" variant and a light background, so the brand supports both, and `next-themes` is already installed.
- Demo guide titles, the "What's new" items and dates are placeholders, except guide names taken from `content/docs/pos-help-guide/`.

---

## 1. Brand analysis

### What the logo is made of

| Element | What I found |
|---|---|
| **Mark** | A radial halftone: a square grid of dots on a 34-unit pitch inside a 480 × 480 box. Dot radius is largest at the center (about 20) and shrinks smoothly to about 2 at the edge, so the grid reads as a glowing orb. It looks like a flower opening ("bleaum" ≈ bloom) and like light on a screen. |
| **Wordmark** | Lowercase "bleaum", regular weight, geometric sans with round bowls and a double-storey "a". It closely matches Montserrat Regular. Wide letterforms, generous spacing, no ligatures. |
| **Color** | Two brand colors only: copper `#DF9770` (the mark) and deep navy `#0F2F4C` (the wordmark on light). On dark, the wordmark is white and the favicon tile is `#0B1E31`. |
| **Variants** | Lockup, mark and wordmark, each in color, color-on-light, copper, white and black. |
| **Brand surfaces** | Backgrounds and social images use a navy gradient from `#0F2F4C` to near-black with the dot grid enlarged and faded to about 8% copper-grey. A light version fades white into pale blue. |
| **Product UI** | The app mockup is dark navy with blue controls, a yellow "Processing" state, a purple discount bar and green status chips. Those are product colors, not brand colors. |

### Mood

Calm, precise, quietly warm. Navy gives trust and technical credibility. Copper adds one warm point, like a lit window at night. The dots say data and craft without looking like a dashboard cliché. The tagline in the assets ("Your entire business in your pocket", "Your business in a box") asks for something compact and capable, not loud.

### Visual direction

**Principle: navy is the room, copper is the light.** Copper appears once per view as the memorable thing: the halftone bloom in the hero, then small copper dots as connectors and markers. Everything else stays navy, white and cool grey. This also fixes a contrast fact: copper on white is only 2.4:1, so on light surfaces copper is used for fills, dots and underlines, never for small text.

#### Color palette

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `navy-950` | `#071321` | Dark page background, footer | White text 16.3:1 |
| `navy-900` | `#0B1E31` | Header, hero, dark surfaces (matches favicon tile) | White 16.9:1, copper 7.1:1 |
| `navy-800` | `#0F2F4C` | Wordmark color, buttons and links on light | On white 13.7:1 |
| `copper-400` | `#DF9770` | The mark, dots, active-nav underline, primary button on dark | On navy-900 7.1:1 |
| `copper-700` | `#A4572C` | Copper as text or focus ring on light | On white 5.3:1, on paper 5.0:1 |
| `slate-500` | `#53687F` | Muted text on light | On white 5.8:1 |
| `fog-300` | `#A9B8C8` | Muted text on dark | On navy-900 8.3:1 |
| `line-200` | `#DCE3EB` | Borders on light | Decorative |
| `mist-100` | `#EEF3F8` | Tinted panels on light | Decorative |
| `paper` | `#F6F8FB` | Light page background | Navy text 12.9:1 |

Status colors (success, warning, error) are kept out of the brand palette and reserved for product screenshots and form states, using the green, yellow and red already in the app.

#### Typography

| Role | Face | Why |
|---|---|---|
| Headings, nav, numerals | **Montserrat** 400/500/600 | Matches the wordmark's geometry, so headings feel like the logo. Used at weight 400–500 with slight negative tracking, which is how the wordmark itself is set. |
| Body, UI, tables | **IBM Plex Sans** 400/500/600 | A plain, sturdy reading face with clear numerals. It stays out of the way of long help articles and sits well beside a geometric display face. |

Scale (rem): 0.875 / 1.0625 body / 1.25 / 1.625 / 2.25 / 3.5 hero (fluid with `clamp`). Body line height 1.6, headings 1.15, text columns capped near 65 characters. Sentence case everywhere, no all-caps labels.

#### Spacing and grid

- 8-pixel base unit. Steps: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Container 1200 px, side gutter `clamp(16px, 4vw, 32px)`. Section spacing `clamp(56px, 8vw, 96px)`.
- Layout is 12 columns on desktop (7/5 and 8/4 splits), one column on mobile.
- Radii: 6 px for chips and inputs inside rows, 10 px for buttons, 18 px for panels. Only panels get a border; no shadows except the hero search field.

#### Iconography

Dots are the icon language. The 9-step setup rail uses numbered circles joined by copper dot trails. The product index joins title to guide count with a dotted leader. For functional icons (search, menu, chevron), use outline icons with a 2 px stroke and round caps (`lucide-react` is already installed, keep it). No filled gradient tiles behind icons, which is the current look.

#### Imagery

- Hero: the halftone bloom as a static SVG exported from `bleaum-mark-copper.svg`, scaled large and cropped off the right edge. In the demo it is generated in JS only to keep the file single; production uses the SVG.
- Product shots: real POS screenshots in a plain device frame (the mockup shows the style), always on navy.
- Social and OG images: reuse the files already in `bleaum-brand/social/`.
- No stock photos, no illustrations of people. Help content needs screenshots, not mood.

---

## 2. Rebrand plan

### Strategy

Rebuild from the shared foundation out, one page type at a time:

1. Lay the foundation once: tokens, fonts, header, footer, buttons, search field.
2. Rebuild the two highest-traffic pages on it (Home, Guides hub). Their components become the kit for everything else.
3. Rebuild the article template next, since 17 guides share it.
4. Roll through the remaining pages. Each is mostly a recomposition of kit parts plus copy changes from the update sheet.

### Goals

- A look that matches the logo and the existing social and app assets, so nothing on the site reads as the old brand.
- Faster answers: a visitor reaches the right guide in at most two clicks or one search.
- Clear path for new stores (setup checklist) and for stuck users (support in every footer and a band on key pages).
- Remove the legacy wording flagged in the update sheet while each page is open. Today the code still contains about 17 uses of "cannabis", 18 of "dispensary/dispensaries" and 71 of "metrc".
- Pass accessibility basics: 4.5:1 text contrast, visible focus, keyboard-only use, reduced-motion support, pinch zoom (the current viewport meta blocks zoom).

### Audience

| Audience | Needs | Design response |
|---|---|---|
| Store owner or manager, setting up | A clear order of steps | Setup rail on Home, checklist with progress in the hub |
| Cashier or associate, mid-shift | The answer in seconds, on a phone or POS screen | Large search first, big tap targets, short guide titles, "where it lives in the app" tags |
| Admin, back office | Settings, team access, reporting | Guides grouped by product area, not by feature name |
| Anyone stuck | A human | Contact band on Home, side panel in the hub, always in the header |

### Page roadmap

| # | Page | Route | Why here |
|---|---|---|---|
| 1 | **Home** | `/` | First impression and entry to everything. Builds header, footer, hero, search, tokens. |
| 2 | **Guides hub (Main Resource)** | `/guides` (new) | The content hub. Builds list rows, filters, side panels, empty state. |
| 3 | Guide article template | `/docs/[...slug]` | Serves all 17 guides, so it has the largest reach for the least work. Needs the typography kit from step 2. |
| 4 | Getting started | `/getting-started` | Linked from Home and the hub; its 9 sections are the setup rail. |
| 5 | Support | `/connect`, `/connect/chat` | Where stuck users end up; must feel on-brand under stress. |
| 6 | Downloads and printer setup | `/docs/download-pos-app`, `/printersetup` | High-intent pages with fixed content. |
| 7 | Product pages | `/docs/pos`, `/docs/ecommerce`, `/docs/delivery`, `/docs/pay`, `/docs/orders`, `/docs/transfers` | Same layout, six content swaps. Wording cleanup is heaviest here. |
| 8 | Announcements | `/docs/announcements` and 4 sub-pages | Lower traffic; reuses the "What's new" feed styles. |
| 9 | Forms and careers | `/career`, `/card-form`, `/bleaum-form` | Form kit: inputs, selects, upload, signature. `card-form` alone has 34 hardcoded color values. |
| 10 | Legacy | `/contact-old`, `/help/guide/*` | Decide whether to redirect or delete before restyling. |

### Why Home, then the Guides hub

- **Home sets the system.** It contains every global piece (header, footer, hero, search, buttons, cards, type scale). Once Home is right, other pages inherit decisions instead of re-making them.
- **The hub proves the system on real content.** Home is mostly marketing-style sections. The hub is dense lists, filters and states. If the kit works there, it works for articles and product pages.
- **They are the two linked pages.** Visitors go Home → hub → article. Rebuilding both first means the main path looks consistent in one release instead of mixing old and new.
- **Risk.** Home today has the most dead weight (a no-op Search button, a promoted-article accordion of marketing copy). Fixing it early removes the most obvious problems.

---

## 3. Per-page plans

### 3.1 Home (`/`)

**Job:** get a visitor to the right guide in one search, and route new stores to setup.

**Layout (top to bottom)**

1. **Header** (all pages): bloom mark + "bleaum" + "Help Center", nav (Guides, Get started, Downloads, What's new), one copper button "Contact support". Navy band, sticky is optional.
2. **Hero:** left-aligned headline "Find the answer. Get back to the counter.", one-sentence lede, large search field, popular-search chips. Copper halftone bloom fills the right side and grows outward once on load.
3. **Setup path:** nine numbered steps joined by copper dot trails (text on the left third, rail on the right two thirds), with "Setting up a new store?" and one button. Mirrors the nine sections of `/getting-started`.
4. **Browse by product (7 cols) + What's new (5 cols):** the index lists five product areas with guide counts and a dotted leader; the feed lists four dated items with a type label.
5. **Contact band:** "Still stuck? Talk to our support team." with Chat and Ticket buttons.
6. **Footer:** brand, Guides, Support, Bleaum link groups, copyright with a dynamic year, tagline "Your business in a box."

**Components:** `SiteHeader`, `Hero` with `BloomArt`, `SearchField`, `Chip`, `SetupRail`, `ProductIndex`, `NewsFeed`, `ContactBand`, `SiteFooter`.

**UX flow**

- Search is the primary path: type → results page or hub filtered. `/` focuses the field from anywhere.
- Secondary: pick a product from the index → hub pre-filtered (`/guides/online`).
- Tertiary: new stores take the setup rail → checklist.
- Escape hatch: contact band and header button.

**CTAs:** primary "Search" (copper on navy) and "Contact support"; secondary "Open the setup checklist", "Chat with support", "Open a ticket", "All announcements".

**Content hierarchy:** headline > search > setup path > product index > news > contact.

**What leaves the page:** the "Promoted articles" accordion (six marketing essays about the "unified tech stack", "composable UI" and so on; they are blog content and carry the claims the update sheet flags), the four gradient icon cards for What's New (replaced by the feed), and the "Welcome to Bleaum Support" heading.

### 3.2 Guides hub (`/guides`)

**Job:** list every guide, grouped by product area, with search and filters, so nobody needs the sidebar tree to find one.

**Layout**

1. **Page head** (navy): breadcrumb, `Guides` title with one-line description, compact search field on the right, filter tabs underneath: All guides, Point of sale, Back office, Online & delivery, Payments, Hardware & apps.
2. **Main column (8/12):** one section per product area with guide count and a one-line summary. Each guide is a row: title, one-sentence description, and (where useful) a tag for where it lives in the app, like `Settings › Cash Management`. Rows sit in one bordered panel per group.
3. **Side column (4/12, sticky):** setup checklist with a nine-dot progress meter that persists in the browser, then a soft "Can't find a guide?" panel with a Chat button.
4. **Empty state:** names the search term and tells the user what to try, with a link to support.

**Components:** `PageHead`, `FilterTabs`, `GuideGroup`, `GuideRow`, `AppPathTag`, `ChecklistPanel`, `HelpPanel`, `EmptyState`.

**UX flow**

- URL is the state: `/guides/online` pre-selects the tab, so Home links and shared links work.
- Typing filters instantly across title, description, app path and extra keywords. Terms are ANDed.
- Filter tabs and search combine.
- Rows are whole-row links with a visible hover and focus state.
- On mobile, tabs scroll sideways, rows stack, and the tag moves under the description. The side panels drop below the list.

**CTAs:** each guide row (primary action), "Chat with support" in the side panel.

**Content hierarchy:** page title > search and filters > groups > rows > checklist > help panel.

**Data:** build the list from `lib/routes-config.ts`, which already holds titles, hrefs and a `keywords` array per guide. Add a `category`, a `description` (from MDX frontmatter) and an optional `appPath` field rather than keeping a second list.

---

## 4. Technical approach

### Stack (no new framework)

Keep Next.js 16 (App Router), React 19, Tailwind 3.4, Radix primitives, `next-themes`, `lucide-react`. Add nothing except two fonts through `next/font/google`. Replace `Space_Grotesk` and `Space_Mono` in `app/layout.tsx` with `Montserrat` and `IBM_Plex_Sans`, loading all needed weights (today only weight 400 is loaded, so every bold style is synthetic).

### Design tokens

The site already uses shadcn-style HSL variables in `styles/globals.css`, mapped in `tailwind.config.ts`. Keep that mechanism. Replace values, add the brand ramp.

```css
/* styles/globals.css (light is default) */
:root {
  --background: 216 38% 97%;       /* paper */
  --foreground: 210 63% 12%;       /* navy-900 */
  --card: 0 0% 100%;
  --card-foreground: 210 63% 12%;
  --primary: 209 67% 18%;          /* navy-800 */
  --primary-foreground: 0 0% 100%;
  --secondary: 210 42% 95%;        /* mist-100 */
  --secondary-foreground: 210 63% 12%;
  --muted: 210 42% 95%;
  --muted-foreground: 211 21% 41%; /* slate-500 */
  --accent: 21 63% 66%;            /* copper-400 */
  --accent-foreground: 210 63% 12%;
  --accent-text: 21 58% 41%;       /* copper-700, copper as text on light */
  --border: 212 27% 89%;           /* line-200 */
  --input: 212 27% 89%;
  --ring: 21 58% 41%;
  --radius: 0.625rem;
}
.dark {
  --background: 212 65% 8%;        /* navy-950 */
  --foreground: 210 40% 94%;
  --card: 210 63% 12%;             /* navy-900 */
  --card-foreground: 210 40% 94%;
  --primary: 21 63% 66%;           /* copper-400 buttons on dark */
  --primary-foreground: 210 63% 12%;
  --secondary: 208 62% 14%;
  --muted: 208 62% 14%;
  --muted-foreground: 211 22% 72%; /* fog-300 */
  --accent: 21 63% 66%;
  --accent-text: 21 63% 66%;
  --border: 0 0% 100% / 0.12;
  --ring: 21 63% 66%;
}
```

Add to `tailwind.config.ts`: `colors.navy` (950, 900, 800), `colors.copper` (400, 700), `accent.text`, `fontFamily.display` and `fontFamily.sans`, and a `maxWidth.page: 1200px`. Keep tokens semantic in components (`bg-background`, `text-muted-foreground`) so dark mode needs no per-component work.

### Breakpoints

Use Tailwind's defaults, which the demo matches:

| Name | Min width | Behavior |
|---|---|---|
| base | 0 | One column, tabs and nav scroll sideways, setup rail stacks vertically with a vertical dot trail, bloom shrinks to a faded corner |
| `md` | 768 | Header on one row, rows show the app-path tag at the right |
| `lg` | 1024 | Two-column layouts (7/5 on Home, 8/4 on hub), sticky side column, setup rail beside its text |
| `xl` | 1280 | Container stays 1200 px; only outer margins grow |

### Migration notes and risks

- **Hardcoded color.** `#0a0f19` appears in 29 files under `app/` and `components/`, including the navbar and footer. First pass: replace with `bg-background`. Do this before restyling any page or old and new will fight.
- **Forced dark mode.** `app/layout.tsx` sets `className="dark"`, `<meta name="color-scheme" content="dark">` and `theme-color`. Remove them and let `next-themes` decide; set `theme-color` through the `viewport` export.
- **Viewport.** `maximum-scale=1.0, user-scalable=no` blocks zoom. Remove it (accessibility fail).
- **Metadata.** `metadataBase` is `https://your-website-url.com` (sheet row #12) and the title template is `%s - Bleaum`. Set the real URL, use the brand favicon pack in `bleaum-brand/favicon/` (its `head-snippet.html` has the tags), and point OG and Twitter images at `bleaum-brand/social/og-image-1200x630.png`.
- **Logo files.** Replace `/bleaum White.png` (file name with a space) in `components/navbar.tsx` with the SVG lockup, inlined or through `next/image`.
- **Search.** The home search button only calls `console.log`, and results are limited to `/docs/pos-help-guide`. Reuse `page_routes` and its keywords, or switch on `@docsearch/react`, which is already a dependency.
- **Slugs.** `metrc-section` stays as a URL for now; changing it needs a 301 redirect (sheet row #18). Retitle it "State reporting" in the UI now.
- **Motion.** One orchestrated moment only: the bloom grows outward on load. It is disabled under `prefers-reduced-motion`. No hover scale effects on cards.
- **Accessibility.** Skip link, `aria-live` on results, visible 2 px focus ring in copper, 44 px minimum tap targets, labels on every input.

### Rollout order

1. Branch `rebrand/phase-1`. Land tokens and fonts, swap `#0a0f19` for `bg-background` across the repo, no visual redesign yet.
2. Land header, footer and shared components.
3. Land Home.
4. Land `/guides` and update nav and links.

---

## 5. Demo

Plain HTML, one file per page, no build step. Open `rebrand resources/phase-1/demo/index.html` in a browser; it lists every page. All pages share `assets/styles.css` (tokens and components) and `assets/app.js` (sample data and the small bits of behavior); the logo mark and favicon are the real files from `bleaum-brand/`. The pages follow the system light or dark setting. Search, filters, the setup checklist (saved in the browser) and the `/` keyboard shortcut work.

Because the goal is to choose a look, several pages have more than one design option. A switcher bar is fixed at the bottom of every page, and its "All" button returns to `index.html`.

| Page | File | Direction |
|---|---|---|
| Prototype index | `index.html` | Lists and links every page below |
| Home A | `home-a.html` | Navy hero, copper bloom, search first, setup path |
| Home B | `home-b.html` | Light page, very large type, tile layout |
| Home C | `home-c.html` | Dark, task-led ("What are you trying to do?"), sample POS screen |
| Home D | `home-d.html` | Centered orb, three paths by need, ranked most-read list |
| Guides hub A | `guides.html` | Grouped lists with a side checklist. Filter with `guides.html#online`, search with `guides.html?q=cash` |
| Guides hub B | `guides-b.html` | Light cards with sidebar checkbox filters |
| Guides hub C | `guides-c.html` | Dark dense index table with sort and filter |
| Guide article | `article.html` | Sample "Cash management" guide with steps and on-page contents |
| Getting started | `start.html` | Nine-step setup with progress |
| Support | `support.html` | Chat, quick links and a ticket form (sends nothing) |
| Downloads and printer | `downloads.html` | App installers and Printer Client setup |

Only the Cash management guide opens a sample article; other guide rows show a short note. The index page and the switcher bar are demo-only and come out before shipping.

---

## 6. Next pages to address

1. Guide article template (`/docs/[...slug]`), covering all 17 guides
2. Getting started (`/getting-started`)
3. Support (`/connect`, `/connect/chat`)
4. Download and printer setup (`/docs/download-pos-app`, `/printersetup`)
5. Product pages: POS, Ecommerce, Delivery, Pay, Orders, Transfers
6. Announcements and its four sub-pages
7. Careers and the two forms (`/career`, `/card-form`, `/bleaum-form`)
8. Legacy pages: decide redirect or delete for `/contact-old` and `/help/guide/*`

## What I need from you

- Confirm "Main Resource page" means the new `/guides` hub.
- Send the brand guideline or the original font name if one exists, so I can confirm Montserrat for headings.
- Confirm that the update-sheet pages on `bleaum.io` are a separate project, or tell me which of them live here.
