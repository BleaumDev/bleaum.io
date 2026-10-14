"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  AwardIcon,
  BarChart2Icon,
  BoxIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  GiftIcon,
  LockIcon,
  MegaphoneIcon,
  MonitorIcon,
  PlugIcon,
  RocketIcon,
  SearchIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";
import { Bloom } from "./bloom";
import { RevealOnScroll } from "./home-client";
import TopicExplorer, { type Topic } from "./topic-explorer";
import * as ui from "./home-ui";

type Icon = ComponentType<{ className?: string }>;

// Copy is unchanged from the old page; website-updates/sops.md #123 says the guides have not been reviewed yet.
// The commented-out "stages" block is gone: it repeated the three Featured Guides below.
const guides: { icon: Icon; title: string; description: string }[] = [
  {
    icon: RocketIcon,
    title: "Getting Started",
    description: "Essential insights for launching your retail shop with confidence.",
  },
  {
    icon: WrenchIcon,
    title: "Everyday Operations",
    description: "Streamline daily workflows and reduce errors with proven processes.",
  },
  {
    icon: TrendingUpIcon,
    title: "Business Growth",
    description: "Strategies, automations, and features to take your business to the next level.",
  },
];

const topics: Record<string, Topic> = {
  Compliance: {
    icon: ShieldCheckIcon,
    description:
      "Stay audit-ready and compliant with all state and local regulations. Includes state reporting sync, audit prep, and daily/weekly checklists.",
    details: [
      "State Reporting Sync: How to stay synced with the state tracking systems you are required to use.",
      "Audit-Readiness Checklist: Internal steps to prepare for state inspections.",
      "Daily & Weekly Compliance Tasks: Routine tasks for managers to stay ahead of violations.",
      "Employee Training: Ensure all staff are up-to-date on compliance protocols.",
      "Document Storage: Best practices for digital and physical record-keeping.",
      "Incident Reporting: How to log and escalate compliance issues.",
    ],
  },
  Delivery: {
    icon: TruckIcon,
    description: "Best practices for compliant, efficient, and safe delivery operations.",
    details: [
      "Setting Up Delivery Zones: Configure regions, fees, and service limits.",
      "Driver Management SOP: From onboarding to order dispatch and secure handoffs.",
      "Vehicle Logs & Documentation: Keeping your fleet compliant and insured.",
      "Manifest Creation: Ensure every delivery has a compliant manifest.",
      "ID Verification at Delivery: Steps for legal handoff.",
      "Returns & Discrepancies: SOP for missed deliveries or wrong orders.",
    ],
  },
  Ecommerce: {
    icon: ShoppingCartIcon,
    description: "How to manage your online store, orders, and customer experience for maximum sales.",
    details: [
      "Catalog Syncing (POS to Online): Keeping product listings and stock accurate across platforms.",
      "Click & Collect / Pickup Setup: Best practices for fulfillment and customer communication.",
      "App & Webstore Optimization Tips: How to boost conversions using your Bleaum storefront.",
      "Order Routing: Assigning orders by fulfillment type.",
      "Customer UX Optimization: Highlighting top categories and promos.",
      "Issue Handling: SOP for order edits, OOS products, or cancellations.",
    ],
  },
  Emergency: {
    icon: AlertTriangleIcon,
    description: "Protocols for system downtime, security threats, and incident reporting.",
    details: [
      "System Downtime Playbook: What to do if the internet or POS goes down.",
      "Incident Reporting Protocol: How to document and escalate issues internally.",
      "Security Threat Response Guide: Handling theft, breaches, and in-store safety.",
      "Customer & Staff Communication: Messaging for delays or closures.",
      "Resumption SOP: Restart procedures post-downtime.",
      "Audit any missing orders or inventory gaps after an incident.",
    ],
  },
  Events: {
    icon: GiftIcon,
    description: "Plan, execute, and wrap up successful retail events and promotions.",
    details: [
      "Event-Based Discount Planning: Setting up promotions for holidays, Black Friday, etc.",
      "On-Site Sales SOPs: Portable POS use, team assignments, and inventory prep.",
      "Customer Flow & Registration Tips: Managing queues and ID checks at scale.",
      "Pre-Event Prep: Assign team roles and load promos in advance.",
      "Inventory Management: Pull featured stock into event-only storage.",
      "Post-Event Wrap-Up: Close event sales drawer and run event-specific reports.",
    ],
  },
  Integrations: {
    icon: PlugIcon,
    description: "Connect Bleaum to compliance, marketing, and analytics platforms.",
    details: [
      "Connecting Bleaum to state tracking systems: Step-by-step for system sync and troubleshooting.",
      "Third-Party Marketing Tools: Integrate with Blackleaf, Springbig, or others.",
      "Analytics & GA Setup: Tracking customer behavior across your platforms.",
      "Troubleshooting Sync Errors: How to identify and retry failures.",
      "Data Review SOP: Weekly checklist for integration health.",
      "API Key Management: Securely store and rotate credentials.",
    ],
    resources: [{ label: "Google Analytics Help", url: "https://support.google.com/analytics/" }],
  },
  Inventory: {
    icon: BoxIcon,
    description: "Best practices for intake, reconciliation, and storage of retail inventory.",
    details: [
      "Receiving & Logging Packages: SOPs for intake, label printing, and QA.",
      "Mid-Shift & EOD Reconciliation: Daily checks to prevent shrinkage or compliance gaps.",
      "Transfers & Storage Location Setup: Best practices for internal movement and organization.",
      "Cycle Counts: How to schedule and perform regular audits.",
      "Shrinkage Investigation: Steps to identify and resolve discrepancies.",
      "Inventory Feedback Loop: Inform reordering and placement based on sales data.",
    ],
  },
  Loyalty: {
    icon: AwardIcon,
    description: "Build and manage customer loyalty programs for increased retention.",
    details: [
      "Setting Up Reward Tiers & Types: Veterans, VIPs, employees, and more.",
      "QR Code Scanning Process: Customer experience and training staff.",
      "Redeem Flow at POS & Online: Avoiding misuse, double-dips, and expired redemptions.",
      "Loyalty Program Integration: Connect with marketing and POS systems.",
      "Reward Expiry & Notifications: Automate reminders for unused points.",
      "Fraud Prevention: Monitor for suspicious redemption patterns.",
    ],
    resources: [{ label: "Springbig Loyalty Solutions", url: "https://www.springbig.com/" }],
  },
  Marketing: {
    icon: MegaphoneIcon,
    description: "Automate, track, and optimize your marketing campaigns.",
    details: [
      "Automated Campaign Builder: Setting up winbacks, flash sales, and birthdays.",
      "Push Notifications vs. SMS: Best use cases and examples for both.",
      "Event Promo Templates: Editable content for holidays and launches.",
      "Audience Segmentation: Target by spend, frequency, or product type.",
      "A/B Testing: How to run and analyze campaign experiments.",
      "Compliance in Marketing: Avoiding restricted words and claims.",
    ],
  },
  Operational: {
    icon: ClipboardCheckIcon,
    description: "Daily, weekly, and shift-based routines for smooth store operations.",
    details: [
      "Open & Close Checklists (Daily/Weekly): SOPs for managers and associates.",
      "Shop Layout & Queue Management: Optimize foot traffic and wait times.",
      "Shift Changeover SOP: Clean handoffs and register accountability.",
      "Cleaning & Sanitation: Daily and deep-cleaning routines.",
      "Incident Log: How to record and review operational issues.",
      "Supply Ordering: Restock essentials and track usage.",
    ],
  },
  Payments: {
    icon: CreditCardIcon,
    description: "Secure, compliant, and efficient payment handling for retail.",
    details: [
      "Cash Handling SOPs: Secure drops, drawer balances, and vault activity.",
      "Digital Payments & Tips: Configuring virtual and tipping workflows.",
      "Refunds, Voids, and Chargebacks: What's allowed, what's tracked, and how.",
      "Drawer Setup: Assign staff PIN, count starting cash.",
      "Card + Digital Processing: Support for compliant debit solutions.",
      "End-of-Day Reconciliation: Match drawer to transaction totals.",
    ],
  },
  "Point of Sale": {
    icon: MonitorIcon,
    description: "Fast, compliant, and user-friendly POS operations for retail.",
    details: [
      "Creating, Holding & Drafting Orders: Using the POS efficiently under pressure.",
      "Fast Checkout Tips: How to reduce clicks and improve flow.",
      "Cart Rules, Deals & Discounts: Applying logic like BOGO, thresholds, and stacking.",
      "Age & Purchase Limits: POS automatically blocks overage by type.",
      "Order Notes & Holds: Leave notes, park orders, or resume saved carts.",
      "Checkout & Receipt Handling: Digital, printed, or app receipt options.",
    ],
  },
  Sales: {
    icon: BarChart2Icon,
    description: "Drive growth with upselling, segmentation, and real-time sales metrics.",
    details: [
      "Upsell Scripts & Product Recommendations: Empowering your team to drive revenue.",
      "Using Sales Reports for Strategy: Track trends, top products, and conversion rates.",
      "Customer Segmentation: How to identify and market to key buyer groups.",
      "Daily Sales Targets: Assign per-role or per-location goals.",
      "Sales Reporting: Use Bleaum dashboards to view top SKUs.",
      "Inventory Feedback Loop: Inform reordering and placement based on sales data.",
    ],
  },
  Security: {
    icon: LockIcon,
    description: "Protect your store, staff, and data with robust security protocols.",
    details: [
      "PIN Permissions & Access Groups: Lock down sensitive functions.",
      "Surveillance SOPs: Video, camera placement, and backup.",
      "Data Security & Device Settings: Best practices for protecting internal systems.",
      "Alarm + Panic System: Ensure staff are trained in silent triggers.",
      "Cybersecurity: Restrict POS access to whitelisted IPs.",
      "Audit & Escalation SOP: Incident logs, theft investigations, and termination flow.",
    ],
  },
  Staffing: {
    icon: UsersIcon,
    description: "Hire, train, and retain a high-performing retail team.",
    details: [
      "Hiring & Onboarding Templates: From associate to GM, what to teach and when.",
      "Ongoing Training Schedule: Skill-building sessions by month or quarter.",
      "Performance Reviews & Shift Feedback: Track growth, spot burnout, and reward excellence.",
      "Role Definitions: Associate, inventory associate, shift lead, manager.",
      "Training Program: 1-day POS crash course, 7-day shadowing, monthly refreshers.",
      "Scheduling & Coverage: Use fixed templates or flex models.",
    ],
  },
};

const names = Object.keys(topics);

// Icon chip: navy with a copper icon and a faint copper ring.
const chip = "grid shrink-0 place-items-center rounded-ctl bg-navy-800 text-copper-400 shadow-[inset_0_0_0_1px_rgba(223,151,112,.28)]";

export default function SopsView() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(names[0]);

  const q = search.toLowerCase();
  const filteredGuides = guides.filter((g) => g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
  const suggestions = names.filter((n) => n.toLowerCase().includes(q) || topics[n].details.some((d) => d.toLowerCase().includes(q)));
  return (
    <div data-page="sops" className={ui.root}>
      <RevealOnScroll />

      {/* Hero. The Bloom clips in its own box so the search suggestions can hang below the hero. */}
      <section className={`relative z-10 text-white ${ui.heroBg}`} aria-labelledby="sop-h">
        <div className="absolute inset-0 overflow-hidden">
          <Bloom />
        </div>
        <div className={`${ui.wrap} relative py-hero`}>
          <h1 id="sop-h" className={`${ui.h1} max-w-[22ch] animate-rise`}>
            Bleaum Guides &amp; Standard Operating Procedures (SOPs)
          </h1>
          <p className="mt-5 max-w-[34ch] animate-rise font-display text-quote font-medium leading-[1.4] [animation-delay:90ms]">
            Built for clarity, scalability, and success.
          </p>
          <p className="mt-4 max-w-[56ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:180ms]">
            Whether you&apos;re opening your first location or scaling operations across multiple states, Bleaum&apos;s
            SOPs and guides are here to support your every step—from compliance to growth strategy.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-2xl animate-rise [animation-delay:270ms]">
            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-fog-200" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides…"
              aria-label="Search guides"
              className="h-14 w-full rounded-full border border-white/25 bg-white/10 pl-12 pr-5 text-[1.0625rem] text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-fog-200 focus:border-copper-400 focus:shadow-[0_0_0_3px_rgba(223,151,112,.28)]"
            />
            {search && suggestions.length > 0 && (
              <ul className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-card border border-white/15 bg-navy-950 p-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,.8)]">
                {suggestions.map((n) => {
                  const I = topics[n].icon;
                  return (
                    <li key={n}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelected(n);
                          setSearch("");
                        }}
                        className="flex w-full items-center gap-3 rounded-ctl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-white/10 focus-visible:bg-white/10"
                      >
                        <I className="size-5 shrink-0 text-copper-400" />
                        <span>{n}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>

      <TopicExplorer topics={topics} selected={selected} onSelect={setSelected} />

      {/* Featured Guides */}
      <section className="bg-h-surface2 py-pad" aria-labelledby="feat-h">
        <div className={ui.wrap}>
          <h2 id="feat-h" {...ui.rv(0, ui.h2)}>Featured Guides</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {filteredGuides.map(({ icon: I, title, description }, i) => (
              <li key={title} {...ui.rv(i)}>
                <div className={`${ui.lift} flex h-full flex-col gap-3 rounded-card border border-h-line bg-h-surface p-6`}>
                  <span className={`${chip} size-12`}>
                    <I className="size-6" />
                  </span>
                  <h3 className={ui.h3}>{title}</h3>
                  <p className="text-[.9375rem] text-h-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="cta-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="cta-h" className={`${ui.heading} text-h2 font-normal`}>Want something specific?</h2>
            <div className={`${ui.actions} mt-7`}>
              <Link href="/resources/sops/all" className={`${ui.btnCopper} ${ui.stack} gap-2`}>
                Browse all guides by topic <ArrowRightIcon className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/demo" className={`${ui.btnQuietOnDark} ${ui.stack}`}>
                Schedule a live onboarding walkthrough
              </Link>
              <Link href="/resources/sops/checklists" className={`${ui.btnQuietOnDark} ${ui.stack}`}>
                Download printable SOP checklists
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
