<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Rule: check the website-updates files before any change

The wording on the website follows the files in `rebrand resources/website-updates/` (one file per page, plus `all-pages.md`). That wording was guided by the CEO and is permanent. These files are the source of truth for what the site says.

**Before you make any change that touches a page, its text, its URL or its metadata, you must do this first:**

1. Open `rebrand resources/website-updates/all-pages.md` and the file for the page you are changing (for example `point-of-sale.md`, `home.md`, `blog.md`).
2. Check your planned change against them. The change must not remove, reword, undo or contradict anything they set.
3. If there is no conflict, make the change.
4. If there is a conflict, stop. Keep the approved text, tell the user what collides, and wait. Do not work around it.

**What may change:** UI, layout, styling, components, animations, file structure and design system. In a redesign or refactor, the text, claims, numbers, names, URLs, titles, meta descriptions and redirects set by those files carry over unchanged.

**What must not come back:**
- Cannabis-specific wording: budtender, dispensary, Metrc, BioTrack, seed-to-sale, "gram", "cannabis".
- Unverified statistics and absolute claims, for example 99.9% uptime, 100% compliant, "No more fines".
- Anything the files say to remove, pull or retire. Use the replacement wording the files give.

**Never invent copy to fill a gap.** Items marked Verify, Decision or Legal review in those files are waiting on the business. Until they are resolved, do not restore the old claim and do not write a new one.

**Copy can only change through the files.** If the CEO wants different wording, update the `website-updates/` file first, then change the code to match. The code never changes copy on its own.
