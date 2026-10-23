'use client';

import { useState } from 'react';
import * as ui from './home-ui';

const { fieldBox: box, fieldLabel: labelText, fieldControl: control } = ui;

// `name` is the key the /api/send-email route reads. Labels and the consent text are unchanged
// (website-updates/ecommerce.md #45 is already applied; #46 consent text is waiting on legal review).
const fields = [
  { name: 'firstName', label: 'First name*', type: 'text' },
  { name: 'lastName', label: 'Last name*', type: 'text' },
  { name: 'email', label: 'Business email address*', type: 'email' },
  { name: 'phoneNumber', label: 'Business phone number*', type: 'tel' },
  { name: 'companyName', label: 'Business name*', type: 'text' },
  { name: 'jobTitle', label: 'Job title*', type: 'text' },
] as const;

export default function EcommerceForm() {
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (response.ok) {
        setStatus({ ok: true, text: 'Form submitted successfully!' });
        form.reset();
      } else {
        setStatus({ ok: false, text: 'Failed to submit form.' });
      }
    } catch {
      setStatus({ ok: false, text: 'An error occurred while submitting the form.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.name} className={box}>
          <span className={labelText}>{f.label}</span>
          <input type={f.type} name={f.name} required className={`${control} w-full`} />
        </label>
      ))}
      <label className={box}>
        <span className={labelText}>Business website*</span>
        <input type="text" name="businessWebsite" required className={`${control} w-full`} />
      </label>
      <label className={box}>
        <span className={labelText}>What type of business are you:</span>
        <span className="relative block">
          <select name="businessType" required defaultValue="" className={`${control} w-full appearance-none pr-7`}>
            <option value="" />
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Distribution">Distribution</option>
            <option value="Other">Other</option>
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
      <label className={`${box} sm:col-span-2`}>
        <span className={labelText}>Describe your business</span>
        <textarea
          name="businessDescription"
          rows={3}
          placeholder="Tell us a bit about your business..."
          className={`${control} w-full resize-y placeholder:text-h-muted`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button type="submit" disabled={sending} className={`${ui.btnPrimary} min-w-48 disabled:opacity-60 ${ui.stack}`}>
          Get My Branded Store
        </button>
        {status && (
          <p role="status" className={`text-[.9375rem] font-medium ${status.ok ? 'text-h-accent' : 'text-red-400'}`}>
            {status.text}
          </p>
        )}
      </div>
      <p className="text-[.8125rem] text-h-muted sm:col-span-2">
        By submitting this form, you&apos;re agreeing to receive marketing communications from Bleaum. For information on
        our privacy practices and commitment to protecting your privacy, please review our{' '}
        <a href="/privacy" className="font-medium text-h-accent underline">
          privacy policies
        </a>
        .
      </p>
    </form>
  );
}
