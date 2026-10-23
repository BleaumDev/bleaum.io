'use client';

import { useState } from 'react';
import { Bloom } from './bloom';
import * as ui from './home-ui';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia'
];

const provinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'
];

// The service covers the US and Canada only. The number is sent as "<dial code> <number>" so the email route needs no change.
const dialCodes = [{ id: 'US', dial: '+1' }, { id: 'CA', dial: '+1' }];

// Each inner array is one numbered step on the rail. `name` is the key the /api/send-email route reads.
const groups = [
  [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel' },
  ],
  [
    { name: 'companyName', label: 'Company Name', type: 'text' },
    { name: 'state', label: 'State / Province', type: 'select' },
    { name: 'numberOfLocations', label: 'Number of Locations', type: 'number' },
  ],
  [
    { name: 'howHear', label: 'How did you hear about Bleaum?', type: 'text' },
    { name: 'industry', label: 'Industry (optional)', type: 'text' },
    { name: 'devices', label: 'Devices you use (optional)', type: 'text' },
  ],
] as const;

type FormData = Record<(typeof groups)[number][number]['name'], string>;

const empty = Object.fromEntries(groups.flat().map((f) => [f.name, ''])) as FormData;

const { fieldBox: box, fieldLabel: labelText, fieldControl: control } = ui;

export default function DemoPage() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [country, setCountry] = useState('US');
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Phone accepts digits only, so pasted "(555) 123-4567" becomes 5551234567.
    setFormData({ ...formData, [name]: name === 'phoneNumber' ? value.replace(/\D/g, '') : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phoneNumber: formData.phoneNumber && `${dialCodes.find((d) => d.id === country)!.dial} ${formData.phoneNumber}`,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ ok: true, text: 'Demo request sent successfully!' });
        setFormData(empty);
      } else {
        setStatus({ ok: false, text: `Failed to send demo request: ${data.message}` });
      }
    } catch {
      setStatus({ ok: false, text: 'An error occurred while sending the demo request.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-page="demo" className={ui.root}>
      <section
        className={`relative overflow-hidden text-white ${ui.heroBg}`}
        aria-labelledby="demo-h"
      >
        <Bloom />
        <div className={`${ui.wrap} relative py-band`}>
          <h1 id="demo-h" className={`${ui.h1} max-w-[20ch] animate-rise`}>
            Is Your Retail Shop Ready for a Serious Upgrade?
          </h1>
          <p className="mt-4 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:90ms]">
            Book a walkthrough of the platform built for how retail really runs.
          </p>
        </div>
      </section>

      <section className="py-pad">
        <form onSubmit={handleSubmit} className={`${ui.wrap} max-w-3xl`}>
          {/* Numbered steps joined by copper dot trails, as in the delivery steps on Home */}
          <ol className="[counter-reset:s]">
            {groups.map((group, gi) => (
              <li
                key={gi}
                className="relative pb-10 pl-[52px] [counter-increment:s] before:absolute before:left-0 before:top-0 before:grid before:size-[34px] before:place-items-center before:rounded-full before:bg-navy-800 before:font-display before:text-[.8125rem] before:font-semibold before:leading-none before:text-white before:shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.22)] before:content-[counter(s)] after:absolute after:bottom-2 after:left-[15px] after:top-11 after:w-1 after:bg-[radial-gradient(circle,#DF9770_1.3px,transparent_1.7px)] after:bg-[length:4px_8px] after:bg-repeat-y sm:pl-[68px]"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.map((f) => (
                    <label
                      key={f.name}
                      className={`${box} ${f.name === 'email' || f.name === 'howHear' ? 'sm:col-span-2' : ''}`}
                    >
                      <span className={labelText}>{f.label}</span>
                      {f.type === 'select' ? (
                        <span className="relative block">
                          <select
                            name={f.name}
                            value={formData[f.name]}
                            onChange={handleChange}
                            className={`${control} w-full appearance-none pr-7`}
                          >
                            <option value="">Select a state or province</option>
                            <optgroup label="United States">
                              {states.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </optgroup>
                            <optgroup label="Canada">
                              {provinces.map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </optgroup>
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
                      ) : f.type === 'tel' ? (
                        <span className="flex items-center gap-2">
                          <select
                            aria-label="Country code"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className={`${control} shrink-0 border-r border-h-line pr-2`}
                          >
                            {dialCodes.map((d) => (
                              <option key={d.id} value={d.id}>{d.id} {d.dial}</option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel-national"
                            aria-label={f.label}
                            name={f.name}
                            value={formData[f.name]}
                            onChange={handleChange}
                            className={`${control} min-w-0 flex-1`}
                          />
                        </span>
                      ) : (
                        <input
                          type={f.type}
                          name={f.name}
                          value={formData[f.name]}
                          onChange={handleChange}
                          className={`${control} w-full`}
                        />
                      )}
                    </label>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pl-[52px] sm:pl-[68px]">
            <button type="submit" disabled={sending} className={`${ui.btnCopper} min-w-40 disabled:opacity-60`}>
              Send
            </button>
            {status && (
              <p
                role="status"
                className={`text-[.9375rem] font-medium ${status.ok ? 'text-h-accent' : 'text-red-700 dark:text-red-400'}`}
              >
                {status.text}
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
