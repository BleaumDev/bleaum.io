"use client"; // Error components must be Client Components

import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div data-page="error" className={ui.root}>
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`}>
        <Bloom />
        <div className={`${ui.wrap} relative py-hero`}>
          <h1 className={`${ui.h1} animate-rise`}>Oops!</h1>
          <p className="mt-4 animate-rise text-[1.25rem] font-medium text-copper-400 [animation-delay:90ms]">
            Something went wrong {":`("}
          </p>
          <p className="mt-2 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:180ms]">
            We&apos;re sorry, but an error occurred while processing your request.
          </p>
          <div className={`${ui.actions} mt-8 animate-rise [animation-delay:270ms]`}>
            <button
              type="button"
              // Attempt to recover by trying to re-render the segment
              onClick={() => reset()}
              className={`${ui.btnCopper} ${ui.stack}`}
            >
              Reload page
            </button>
            <Link href="/" className={`${ui.btnGhost} ${ui.stack}`}>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
