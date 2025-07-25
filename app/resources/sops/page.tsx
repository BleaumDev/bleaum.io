"use client";
import Link from "next/link";
import { SearchIcon, BookOpenIcon, BarChart2Icon, ShoppingBagIcon, BookTextIcon, DollarSignIcon, ClipboardCheckIcon, MegaphoneIcon, ShoppingCartIcon, BuildingIcon, Rocket, Wrench, TrendingUp, ShieldCheckIcon, TruckIcon, ShoppingCart, AlertTriangleIcon, GiftIcon, PlugIcon, BoxIcon, UsersIcon, Megaphone, CreditCardIcon, MonitorIcon, LockIcon, ChevronRight } from "lucide-react";
import React, { useState } from "react";

// Sample guides data
const guides = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Getting Started",
    description: "Essential insights for launching your retail shop with confidence."
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    title: "Everyday Operations",
    description: "Streamline daily workflows and reduce errors with proven processes."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Business Growth",
    description: "Strategies, automations, and features to take your business to the next level."
  }
];

// Add details for each topic
const topicDetails: { [key: string]: { icon: JSX.Element; title: string; description?: string; details: string[]; resources?: { label: string; url: string }[] } } = {
  Compliance: {
    icon: <ShieldCheckIcon className="w-6 h-6 text-blue-500" />,
    title: "Compliance",
    description: "Stay audit-ready and compliant with all state and local regulations. Includes METRC/BioTrack sync, audit prep, and daily/weekly checklists.",
    details: [
      "METRC Sync & Reporting: How to stay fully synced and error-free with automatic METRC updates.",
      "Audit-Readiness Checklist: Internal steps to prepare for state inspections.",
      "Daily & Weekly Compliance Tasks: Routine tasks for managers to stay ahead of violations.",
      "Employee Training: Ensure all staff are up-to-date on compliance protocols.",
      "Document Storage: Best practices for digital and physical record-keeping.",
      "Incident Reporting: How to log and escalate compliance issues."
    ],
    resources: [
      { label: "METRC Official Guide", url: "https://www.metrc.com/resources" },
      { label: "Cannabis Compliance Alliance", url: "https://cannabiscompliancealliance.org/" }
    ]
  },
  Delivery: {
    icon: <TruckIcon className="w-6 h-6 text-blue-500" />,
    title: "Delivery",
    description: "Best practices for compliant, efficient, and safe cannabis delivery operations.",
    details: [
      "Setting Up Delivery Zones: Configure regions, fees, and service limits.",
      "Driver Management SOP: From onboarding to order dispatch and secure handoffs.",
      "Vehicle Logs & Documentation: Keeping your fleet compliant and insured.",
      "Manifest Creation: Ensure every delivery has a compliant manifest.",
      "ID Verification at Delivery: Steps for legal handoff.",
      "Returns & Discrepancies: SOP for missed deliveries or wrong orders."
    ],
    resources: [
      { label: "Leafly Delivery Guide", url: "https://www.leafly.com/news/industry/cannabis-delivery-guide" }
    ]
  },
  Ecommerce: {
    icon: <ShoppingCartIcon className="w-6 h-6 text-blue-500" />,
    title: "Ecommerce",
    description: "How to manage your online menu, orders, and customer experience for maximum sales.",
    details: [
      "Menu Syncing (POS to Online): Keeping product listings and stock accurate across platforms.",
      "Click & Collect / Pickup Setup: Best practices for fulfillment and customer communication.",
      "App & Webstore Optimization Tips: How to boost conversions using your Bleaum storefront.",
      "Order Routing: Assigning orders by fulfillment type.",
      "Customer UX Optimization: Highlighting top categories and promos.",
      "Issue Handling: SOP for order edits, OOS products, or cancellations."
    ],
    resources: [
      { label: "MJBizDaily Ecommerce Tips", url: "https://mjbizdaily.com/optimizing-cannabis-ecommerce/" }
    ]
  },
  Emergency: {
    icon: <AlertTriangleIcon className="w-6 h-6 text-blue-500" />,
    title: "Emergency",
    description: "Protocols for system downtime, security threats, and incident reporting.",
    details: [
      "System Downtime Playbook: What to do if the internet or POS goes down.",
      "Incident Reporting Protocol: How to document and escalate issues internally.",
      "Security Threat Response Guide: Handling theft, breaches, and in-store safety.",
      "Customer & Staff Communication: Messaging for delays or closures.",
      "Resumption SOP: Restart procedures post-downtime.",
      "Audit any missing orders or inventory gaps after an incident."
    ],
    resources: [
      { label: "NCIA Security & Emergency Resources", url: "https://thecannabisindustry.org/resources/" }
    ]
  },
  Events: {
    icon: <GiftIcon className="w-6 h-6 text-blue-500" />,
    title: "Events",
    description: "Plan, execute, and wrap up successful cannabis retail events and promotions.",
    details: [
      "Event-Based Discount Planning: Setting up promotions for 420, Black Friday, etc.",
      "On-Site Sales SOPs: Portable POS use, team assignments, and inventory prep.",
      "Customer Flow & Registration Tips: Managing queues and ID checks at scale.",
      "Pre-Event Prep: Assign team roles and load promos in advance.",
      "Inventory Management: Pull featured stock into event-only storage.",
      "Post-Event Wrap-Up: Close event sales drawer and run event-specific reports."
    ],
    resources: [
      { label: "Eventbrite Cannabis Event Guide", url: "https://www.eventbrite.com/blog/cannabis-event-guide-ds00/" }
    ]
  },
  Integrations: {
    icon: <PlugIcon className="w-6 h-6 text-blue-500" />,
    title: "Integrations",
    description: "Connect Bleaum to compliance, marketing, and analytics platforms.",
    details: [
      "Connecting Bleaum to BioTrack or METRC: Step-by-step for system sync and troubleshooting.",
      "Third-Party Marketing Tools: Integrate with Blackleaf, Springbig, or others.",
      "Analytics & GA Setup: Tracking customer behavior across your platforms.",
      "Troubleshooting Sync Errors: How to identify and retry failures.",
      "Data Review SOP: Weekly checklist for integration health.",
      "API Key Management: Securely store and rotate credentials."
    ],
    resources: [
      { label: "BioTrack Support", url: "https://biotrack.com/support/" },
      { label: "Google Analytics Help", url: "https://support.google.com/analytics/" }
    ]
  },
  Inventory: {
    icon: <BoxIcon className="w-6 h-6 text-blue-500" />,
    title: "Inventory",
    description: "Best practices for intake, reconciliation, and storage of cannabis inventory.",
    details: [
      "Receiving & Logging Packages: SOPs for intake, label printing, and QA.",
      "Mid-Shift & EOD Reconciliation: Daily checks to prevent shrinkage or compliance gaps.",
      "Transfers & Storage Location Setup: Best practices for internal movement and organization.",
      "Cycle Counts: How to schedule and perform regular audits.",
      "Shrinkage Investigation: Steps to identify and resolve discrepancies.",
      "Inventory Feedback Loop: Inform reordering and placement based on sales data."
    ],
    resources: [
      { label: "NCIA Inventory Management", url: "https://thecannabisindustry.org/resource/inventory-management/" }
    ]
  },
  Loyalty: {
    icon: <UsersIcon className="w-6 h-6 text-blue-500" />,
    title: "Loyalty",
    description: "Build and manage customer loyalty programs for increased retention.",
    details: [
      "Setting Up Reward Tiers & Types: Veterans, VIPs, employees, and more.",
      "QR Code Scanning Process: Customer experience and training staff.",
      "Redeem Flow at POS & Online: Avoiding misuse, double-dips, and expired redemptions.",
      "Loyalty Program Integration: Connect with marketing and POS systems.",
      "Reward Expiry & Notifications: Automate reminders for unused points.",
      "Fraud Prevention: Monitor for suspicious redemption patterns."
    ],
    resources: [
      { label: "Springbig Loyalty Solutions", url: "https://www.springbig.com/" }
    ]
  },
  Marketing: {
    icon: <Megaphone className="w-6 h-6 text-blue-500" />,
    title: "Marketing",
    description: "Automate, track, and optimize your cannabis marketing campaigns.",
    details: [
      "Automated Campaign Builder: Setting up winbacks, flash sales, and birthdays.",
      "Push Notifications vs. SMS: Best use cases and examples for both.",
      "Event Promo Templates: Editable content for holidays and launches.",
      "Audience Segmentation: Target by spend, frequency, or product type.",
      "A/B Testing: How to run and analyze campaign experiments.",
      "Compliance in Marketing: Avoiding restricted words and claims."
    ],
    resources: [
      { label: "Leafly Marketing Guide", url: "https://www.leafly.com/news/industry/cannabis-marketing-guide" }
    ]
  },
  Operational: {
    icon: <ClipboardCheckIcon className="w-6 h-6 text-blue-500" />,
    title: "Operational",
    description: "Daily, weekly, and shift-based routines for smooth store operations.",
    details: [
      "Open & Close Checklists (Daily/Weekly): SOPs for managers and budtenders.",
      "Shop Layout & Queue Management: Optimize foot traffic and wait times.",
      "Shift Changeover SOP: Clean handoffs and register accountability.",
      "Cleaning & Sanitation: Daily and deep-cleaning routines.",
      "Incident Log: How to record and review operational issues.",
      "Supply Ordering: Restock essentials and track usage."
    ],
    resources: [
      { label: "NCIA Operations Resources", url: "https://thecannabisindustry.org/resources/" }
    ]
  },
  Payments: {
    icon: <CreditCardIcon className="w-6 h-6 text-blue-500" />,
    title: "Payments",
    description: "Secure, compliant, and efficient payment handling for cannabis retail.",
    details: [
      "Cash Handling SOPs: Secure drops, drawer balances, and vault activity.",
      "Digital Payments & Tips: Configuring virtual and tipping workflows.",
      "Refunds, Voids, and Chargebacks: What's allowed, what's tracked, and how.",
      "Drawer Setup: Assign staff PIN, count starting cash.",
      "Card + Digital Processing: Support for compliant debit solutions.",
      "End-of-Day Reconciliation: Match drawer to transaction totals."
    ],
    resources: [
      { label: "FinCEN Cannabis Banking Guidance", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" }
    ]
  },
  "Point of Sale": {
    icon: <MonitorIcon className="w-6 h-6 text-blue-500" />,
    title: "Point of Sale",
    description: "Fast, compliant, and user-friendly POS operations for cannabis retail.",
    details: [
      "Creating, Holding & Drafting Orders: Using the POS efficiently under pressure.",
      "Fast Checkout Tips: How to reduce clicks and improve flow.",
      "Cart Rules, Deals & Discounts: Applying logic like BOGO, thresholds, and stacking.",
      "Age & Purchase Limits: POS automatically blocks overage by type.",
      "Order Notes & Holds: Leave notes, park orders, or resume saved carts.",
      "Checkout & Receipt Handling: Digital, printed, or app receipt options."
    ],
    resources: [
      { label: "POS Nation Cannabis POS Guide", url: "https://posnation.com/blog/cannabis-pos-system" }
    ]
  },
  Sales: {
    icon: <BarChart2Icon className="w-6 h-6 text-blue-500" />,
    title: "Sales",
    description: "Drive growth with upselling, segmentation, and real-time sales metrics.",
    details: [
      "Upsell Scripts & Product Recommendations: Empowering your team to drive revenue.",
      "Using Sales Reports for Strategy: Track trends, top products, and conversion rates.",
      "Customer Segmentation: How to identify and market to key buyer groups.",
      "Daily Sales Targets: Assign per-role or per-location goals.",
      "Sales Reporting: Use Bleaum dashboards to view top SKUs.",
      "Inventory Feedback Loop: Inform reordering and placement based on sales data."
    ],
    resources: [
      { label: "MJBizDaily Sales Tips", url: "https://mjbizdaily.com/retail-sales-tips/" }
    ]
  },
  Security: {
    icon: <LockIcon className="w-6 h-6 text-blue-500" />,
    title: "Security",
    description: "Protect your store, staff, and data with robust security protocols.",
    details: [
      "PIN Permissions & Access Groups: Lock down sensitive functions.",
      "Surveillance SOPs: Video, camera placement, and backup.",
      "Data Security & Device Settings: Best practices for protecting internal systems.",
      "Alarm + Panic System: Ensure staff are trained in silent triggers.",
      "Cybersecurity: Restrict POS access to whitelisted IPs.",
      "Audit & Escalation SOP: Incident logs, theft investigations, and termination flow."
    ],
    resources: [
      { label: "NCIA Security Resources", url: "https://thecannabisindustry.org/resource/security/" }
    ]
  },
  Staffing: {
    icon: <UsersIcon className="w-6 h-6 text-blue-500" />,
    title: "Staffing",
    description: "Hire, train, and retain a high-performing cannabis retail team.",
    details: [
      "Hiring & Onboarding Templates: From budtender to GM, what to teach and when.",
      "Ongoing Training Schedule: Skill-building sessions by month or quarter.",
      "Performance Reviews & Shift Feedback: Track growth, spot burnout, and reward excellence.",
      "Role Definitions: Budtender, inventory associate, shift lead, manager.",
      "Training Program: 1-day POS crash course, 7-day shadowing, monthly refreshers.",
      "Scheduling & Coverage: Use fixed templates or flex models."
    ],
    resources: [
      { label: "Vangst Cannabis Staffing", url: "https://www.vangst.com/" }
    ]
  }
};

export default function BleaumSOPsPage() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(search.toLowerCase()) ||
    guide.description.toLowerCase().includes(search.toLowerCase())
  );

  // Filter topics for suggestions (by name or details)
  const topicSuggestions = Object.keys(topicDetails).filter(topic => {
    const lowerSearch = search.toLowerCase();
    return (
      topic.toLowerCase().includes(lowerSearch) ||
      topicDetails[topic].details.some(detail => detail.toLowerCase().includes(lowerSearch))
    );
  });

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-16">
        <h1 className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Bleaum Guides & Standard Operating Procedures (SOPs)
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700 dark:text-gray-300">
          Built for clarity, scalability, and success.
        </h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Whether you&apos;re opening your first location or scaling operations across multiple states, Bleaum&apos;s SOPs and guides are here to support your every step—from compliance to growth strategy.
        </p>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder=" Search guides…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pr-12 pl-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-gray-100 text-base sm:text-lg"
            />
            <SearchIcon className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          {/* Suggestions Dropdown */}
          {search && topicSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
              {topicSuggestions.map((topic, idx) => (
                <button
                  key={topic}
                  className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center gap-2"
                  onClick={() => {
                    setSelectedTopic(topic);
                    setModalOpen(true);
                    setSearch("");
                  }}
                >
                  <span className="text-lg sm:text-xl">{topicDetails[topic].icon}</span>
                  <span className="text-gray-700 dark:text-gray-200 text-base sm:text-lg">{topic}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Business Stages Section */}
      {/* <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">What stage is your business in?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Rocket className="w-8 h-8 text-blue-500" />,
              title: "Getting Started",
              description: "Essential insights for launching your retail shop with confidence."
            },
            {
              icon: <Wrench className="w-8 h-8 text-blue-500" />,
              title: "Everyday Operations",
              description: "Streamline daily workflows and reduce errors with proven processes."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
              title: "Business Growth",
              description: "Strategies, automations, and features to take your business to the next level."
            }
          ].map((stage, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl mb-4">{stage.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{stage.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{stage.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Topics Section */}
      <div className="mb-10 sm:mb-16">
        <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-gray-900 dark:text-gray-100">What topics are you interested in?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {Object.keys(topicDetails).map((topic, index) => (
            <button
              key={index}
              className="group flex items-center justify-between w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200"
              onClick={() => { setSelectedTopic(topic); setModalOpen(true); }}
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl">{topicDetails[topic].icon}</span>
                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-base">{topic}</span>
              </span>
              <ChevronRight
                className="w-4 h-4 text-blue-400 flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-110"
                style={{ willChange: 'transform' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal for topic details */}
      {modalOpen && selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] px-2 sm:px-0">
          <div className="relative w-full max-w-xs sm:max-w-lg p-0">
            <div className="animate-fadeInUp bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-800 p-4 sm:p-8 pt-8 sm:pt-10 relative">
              <button
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-blue-500 text-xl sm:text-2xl bg-white/70 dark:bg-gray-800/70 rounded-full p-1 sm:p-2 shadow-md transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg border-2 sm:border-4 border-white dark:border-gray-900">
                  <span className="text-2xl sm:text-3xl text-white">{topicDetails[selectedTopic as keyof typeof topicDetails].icon}</span>
                </div>
                <h2 className="text-lg sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{topicDetails[selectedTopic as keyof typeof topicDetails].title}</h2>
              </div>
              {topicDetails[selectedTopic as keyof typeof topicDetails].description && (
                <p className="mb-2 sm:mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{topicDetails[selectedTopic as keyof typeof topicDetails].description}</p>
              )}
              <hr className="my-2 sm:my-4 border-blue-200 dark:border-blue-800" />
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base mb-2 sm:mb-4">
                {topicDetails[selectedTopic as keyof typeof topicDetails].details.map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              {topicDetails[selectedTopic as keyof typeof topicDetails].resources && (
                <div className="mt-4 sm:mt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 text-base sm:text-lg">Resources</h3>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                    {topicDetails[selectedTopic as keyof typeof topicDetails].resources!.map((res, idx) => (
                      <li key={idx}>
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-medium hover:text-cyan-500 transition-colors duration-200 text-sm sm:text-base">{res.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured Guides Section */}
      <div className="mb-10 sm:mb-16">
        <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-gray-900 dark:text-gray-100"> Featured Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredGuides.map((guide, index) => (
            <div key={index} className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-1 sm:p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  {guide.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">{guide.title}</h4>
                </div>
              </div>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-gray-900 dark:text-gray-100">Want something specific?</h3>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <Link href="/resources/sops/all">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md text-xs sm:text-base">
              Browse all guides by topic
            </button>
          </Link>
          <Link href="/demo">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-300 text-xs sm:text-base">
              Schedule a live onboarding walkthrough
            </button>
          </Link>
          <Link href="/resources/sops/checklists">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-300 text-xs sm:text-base">
              Download printable SOP checklists
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}