# Bleaum.io dummy UI

Static demo of a redesigned bleaum.io. Open `index.html` in a browser. No build step, nothing is sent anywhere.

It uses the same brand language as the Help Center phase-1 demo (navy and copper tokens, Montserrat and IBM Plex Sans, the halftone bloom, dotted trails, dots as icons) so the two sites feel related. The pages and components are new.

| Page | File | What it shows |
|---|---|---|
| Home A | `index.html` | Dark hero with a CSS-built POS screen, product grid, inventory and delivery sections, trust band, CTA |
| Home B | `home-b.html` | Light header, very large type, tile layout |
| Product | `product.html` | New overview page. The top-nav `/product` link returns a 404 today |
| Point of Sale | `pos.html` | Template for every product page |
| Integrations | `integrations.html` | Split into General and Regulated retail, with a filter |
| Support | `support.html` | Contact options, hours, emergency line and message form, from `app/support/page.tsx` |
| Book a demo | `book-demo.html` | Form with industry, devices, and US, Canada and Other regions |

## Copy rules applied

From `../website-updates/`: no cannabis, Metrc, BioTrack, dispensary or budtender wording; no absolute claims such as "99.9% uptime"; no named testimonials; neutral sample products (Canvas Tote, Ceramic Mug); a real hero line ("Run your whole business from one hand.") and meta descriptions.

## Placeholders to replace

- Phone number on Support (`+1 (555) 010-0100`) and the chat link.
- Integration names and status tags on Integrations. Only QuickBooks is marked "Coming soon", as in the update sheet.
- The "member of Google for Startups, Microsoft for Startups and AWS" line: confirm wording and logo-use permission.
- Consent text on the demo form: counsel review.
- Links that show "Demo only" are pages outside the demo.

The page switcher at the bottom and the dashed "demo" flags come out before shipping.
