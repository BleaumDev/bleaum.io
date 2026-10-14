import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import Link from "next/link";

// Shown for every unknown URL, with a real 404 status. It used to be a copy of the "Talk to our team" lead form
// (a dead form with the old "Weedmaps only" option), so a mistyped URL looked like a working page.
// website-updates/ has no 404 wording, so this is the minimum a 404 needs: a status, one line, and a way out.
export default function NotFound() {
  return (
    <div data-page="not-found" className={ui.root}>
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="nf-h">
        <Bloom />
        <div className={`${ui.wrap} relative py-hero`}>
          <p
            className="animate-rise font-display text-[clamp(5rem,18vw,11rem)] font-medium leading-none tracking-[-.04em] text-copper-400"
            aria-hidden="true"
          >
            404
          </p>
          <h1 id="nf-h" className={`${ui.h1} mt-4 animate-rise [animation-delay:90ms]`}>
            Page not found
          </h1>
          <p className="mt-4 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:180ms]">
            The page you are looking for does not exist or has moved.
          </p>
          <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
            <Link href="/" className={`${ui.btnCopper} ${ui.stack}`}>
              Back to homepage
            </Link>
            <Link href="/support" className={`${ui.btnGhost} ${ui.stack}`}>
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
