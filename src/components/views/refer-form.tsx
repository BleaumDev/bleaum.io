'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as ui from './home-ui';

const { fieldBox: box, fieldLabel: labelText, fieldControl: control } = ui;

// `name` is the key the /api/send-referral route reads. Labels, the offer line and the consent text are unchanged
// (website-updates/refer.md #115 and #118 wait on the business and legal; #116 and #117 are already applied).
const tabs = [
  ['point-of-sale', 'Point of Sale'],
  ['ecommerce', 'Ecommerce'],
] as const;

const us = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'],
  ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['FL', 'Florida'], ['GA', 'Georgia'],
  ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'],
  ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'],
  ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'], ['MO', 'Missouri'],
  ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'],
  ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
  ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
  ['DC', 'District of Columbia'],
] as const;

const canada = [
  ['AB', 'Alberta'], ['BC', 'British Columbia'], ['MB', 'Manitoba'], ['NB', 'New Brunswick'],
  ['NL', 'Newfoundland and Labrador'], ['NT', 'Northwest Territories'], ['NS', 'Nova Scotia'], ['NU', 'Nunavut'],
  ['ON', 'Ontario'], ['PE', 'Prince Edward Island'], ['QC', 'Quebec'], ['SK', 'Saskatchewan'], ['YT', 'Yukon'],
] as const;

// Grid is 6 columns from `sm` up: 6 = full row, 3 = half, 2 = third.
const span = { 6: 'sm:col-span-6', 3: 'sm:col-span-3', 2: 'sm:col-span-2' } as const;

function Field({
  name,
  label,
  type = 'text',
  required,
  w,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  w: keyof typeof span;
}) {
  return (
    <label className={`${box} ${span[w]}`}>
      <span className={labelText}>{label}</span>
      <input type={type} name={name} required={required} className={`${control} w-full`} />
    </label>
  );
}

export default function ReferForm() {
  const [activeTab, setActiveTab] = useState<string>('point-of-sale');
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('/api/send-referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referralNotified: '', ...Object.fromEntries(new FormData(form)), referralType: activeTab }),
      });
      if (response.ok) {
        setStatus({ ok: true, text: 'Referral submitted successfully!' });
        form.reset();
      } else {
        setStatus({ ok: false, text: 'Failed to submit referral.' });
      }
    } catch {
      setStatus({ ok: false, text: 'An error occurred while submitting the referral.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-card border border-h-line bg-h-surface p-5 sm:p-8">
      <p className="text-center text-[.9375rem] text-h-muted" aria-live="polite">
        Earn ${activeTab === 'point-of-sale' ? '500' : '200'} for every eligible{' '}
        <span className="font-bold capitalize text-h-text">{activeTab.replace(/-/g, ' ')}</span> referral
      </p>
      <div role="tablist" className="relative mx-auto mt-3 grid w-fit grid-cols-2 rounded-full border border-h-line p-1">
        {/* One pill slides between the two tabs; the labels only fade their color. */}
        <span
          aria-hidden="true"
          className={`absolute inset-y-1 left-1 w-[calc(50%-.25rem)] rounded-full bg-h-btn transition-transform duration-300 ease-soft motion-reduce:transition-none ${
            activeTab === tabs[0][0] ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
        {tabs.map(([id, text]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            className={`relative min-h-9 rounded-full px-5 text-[.9375rem] font-semibold transition-colors duration-300 motion-reduce:transition-none ${
              activeTab === id ? 'text-h-btn-text' : 'text-h-muted hover:text-h-text'
            }`}
          >
            {text}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:grid-cols-6">
        <Field name="yourFirstName" label="Your First Name*" required w={3} />
        <Field name="yourLastName" label="Your Last Name*" required w={3} />
        <Field name="yourEmail" label="Your Email*" type="email" required w={3} />
        <Field name="yourPhone" label="Your Phone Number" type="tel" w={3} />

        <hr className="my-2 border-h-line sm:col-span-6" />

        <Field name="referralFirstName" label="Referral First Name*" required w={3} />
        <Field name="referralLastName" label="Referral Last Name*" required w={3} />
        <Field name="referralEmail" label="Referral Email*" type="email" required w={6} />
        <Field name="referralShopName" label="Referral Business Name*" required w={6} />
        <Field name="referralPhone" label="Referral Phone #" type="tel" w={2} />
        <label className={`${box} ${span[2]}`}>
          <span className={labelText}>State / Province*</span>
          <span className="relative block">
            <select name="referralState" required defaultValue="" className={`${control} w-full appearance-none pr-7`}>
              <option value="" />
              {us.map(([v, n]) => (
                <option key={v} value={v}>{n}</option>
              ))}
              <optgroup label="Canada">
                {canada.map(([v, n]) => (
                  <option key={v} value={v}>{n}</option>
                ))}
              </optgroup>
            </select>
            <svg
              className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-h-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </label>
        <Field name="referralZip" label="ZIP / Postal Code" w={2} />

        <fieldset className="mt-3 sm:col-span-6">
          <legend className="mb-3 text-[.9375rem] font-medium">
            Did you let them know you&apos;d be referring their business to us?
          </legend>
          <div className="flex gap-8">
            {[['yes', 'Yes'], ['no', 'No']].map(([v, text]) => (
              <label key={v} className="flex cursor-pointer items-center gap-2 text-[.9375rem]">
                <input type="radio" name="referralNotified" value={v} className="size-4 accent-h-accent" />
                {text}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-6">
          <button type="submit" disabled={loading} className={`${ui.btnPrimary} min-w-48 disabled:opacity-60 ${ui.stack}`}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {status && (
            <p role="status" className={`text-[.9375rem] font-medium ${status.ok ? 'text-h-accent' : 'text-red-400'}`}>
              {status.text}
            </p>
          )}
        </div>

        <p className="text-[.8125rem] text-h-muted sm:col-span-6">
          By submitting this form, you&apos;re agreeing to receive marketing communications from Bleaum. For information on
          our privacy practices and commitment to protecting your privacy, please review our{' '}
          <Link href="/privacy" className="font-medium text-h-accent underline">
            privacy policies
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
