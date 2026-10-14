import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import Link from "next/link";

const field =
  "w-full rounded-ctl border border-h-line bg-h-bg px-3.5 py-2.5 text-[.9375rem] text-h-text placeholder:text-h-muted";

const inputs = [
  ["text", "First name*"],
  ["text", "Last name*"],
  ["email", "Business email address*"],
  ["tel", "Business phone number*"],
  ["text", "Business name*"],
  ["text", "Job title*"],
  ["text", "Business website*"],
];

export default function NotFound() {
  return (
    <div data-page="not-found" className={ui.root}>
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`}>
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-12 py-hero lg:grid-cols-[5fr_6fr] [&>*]:min-w-0`}>
          <div>
            <h1 className={`${ui.h1} animate-rise`}>Talk to our team</h1>
            <p className="mt-5 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:90ms]">
              Interested in partnering and integrating with Bleaum
            </p>
          </div>
          <div className="animate-rise rounded-card bg-h-surface p-6 text-h-text shadow-[0_40px_100px_-30px_rgba(223,151,112,.45)] [animation-delay:180ms] sm:p-8">
            <form className="grid gap-4 sm:grid-cols-2">
              {inputs.map(([type, placeholder], i) => (
                <input
                  key={placeholder}
                  type={type}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  required
                  className={`${field} ${i === inputs.length - 1 ? "sm:col-span-2" : ""}`}
                />
              ))}
              <div className="relative sm:col-span-2">
                <select
                  required
                  aria-label="What type of business are you"
                  className={`${field} appearance-none pr-10`}
                >
                  <option value="">What type of business are you:</option>
                  <option value="none">Marketing</option>
                  <option value="weedmaps">Weedmaps only</option>
                  <option value="leafly">Ecommerce</option>
                  <option value="custom">Delivery</option>
                  <option value="other">Other</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-h-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="business-description" className="mb-1.5 block text-[.9375rem] font-medium">
                  Describe your business
                </label>
                <textarea
                  id="business-description"
                  name="business-description"
                  rows={3}
                  className={field}
                  placeholder="Tell us a bit about your business..."
                />
              </div>
              <button type="submit" className={`${ui.btnPrimary} sm:col-span-2`}>
                Get My Branded Store
              </button>
            </form>
            <p className="mt-4 text-[.8125rem] text-h-muted">
              By submitting this form, you&apos;re agreeing to receive marketing communications from Bleaum. For information on our privacy practices and commitment to protecting your privacy, please review our{" "}
              <Link href="/privacy" className="font-medium text-h-accent underline underline-offset-2">
                privacy policies
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
