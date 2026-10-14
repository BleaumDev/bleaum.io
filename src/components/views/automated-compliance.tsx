"use client";
import {
  Lock,
  Brain,
  Cog,
  ClipboardList,
  AlertOctagon,
  Tag,
  QrCode,
  Puzzle,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#020917] text-white relative overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 md:mb-32 text-center relative z-10 pt-16 sm:pt-24 px-2"
      >
        <div className="mb-10 sm:mb-16">
          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg border-4 border-[#020917] mb-3 sm:mb-4">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Automated Compliance
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 px-1">
            Compliance that runs in the background — so you can focus on growing your retail.<br />
            Bleaum's integrated compliance engine adapts to your state's specific cannabis regulations, automatically tracking inventory, sales, and reporting so you're always on the right side of the law.
          </p>
          <p className="text-sm sm:text-lg font-semibold text-cyan-300 mb-6 sm:mb-8">Seamless, stress-free compliance across your entire operation.</p>
          <div className="flex justify-center w-full">
            <Link href="/demo">
              <button className="mt-2 mb-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all text-base sm:text-lg w-full max-w-xs sm:max-w-none">
                <ArrowRight className="w-5 h-5" /> Get a Demo
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features/Benefits Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 md:mb-32 px-2"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Why Bleaum Compliance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Feature Card */}
          {[
            {
              icon: <Brain className="w-7 h-7 text-white" />, title: "Intelligent Compliance That Works for You", desc: "Bleaum's engine adapts to your state's rules, so you're always compliant—automatically.", list: null
            },
            {
              icon: <Cog className="w-7 h-7 text-white" />, title: "Automated Traceability & Reporting", desc: null, list: [
                "Every sale, every movement — automatically tracked and reported to state systems like Metrc, BioTrack, and others.",
                "Real-time syncing, batch-mode reconciliation, outage recovery, audit logs, and discrepancy detection."
              ]
            },
            {
              icon: <ClipboardList className="w-7 h-7 text-white" />, title: "SOP & Limit Management", desc: null, list: [
                "Define and enforce SOPs for daily operations",
                "Automatically adjust purchase limits for each customer—medical or recreational",
                "Dynamic limit enforcement, instant flagging, and clear reporting for regulators"
              ]
            },
            {
              icon: <AlertOctagon className="w-7 h-7 text-white" />, title: "Pre-Audit Safeguards", desc: null, list: [
                "Automated audit system identifies red flags before regulators show up",
                "Pre-emptive compliance alerts, auto-checks for zeroed out packages, Metrc sync issues, and full audit trail"
              ]
            },
            {
              icon: <Tag className="w-7 h-7 text-white" />, title: "Compliant Labeling & QR Packaging Tools", desc: null, list: [
                "Design state-compliant product labels with drag-and-drop builder",
                "Auto-filled product data from your POS, drag-and-drop templates, scannable Retail IDs & real-time batch info"
              ]
            },
            {
              icon: <Puzzle className="w-7 h-7 text-white" />, title: "Full Traceability Integrations", desc: null, list: [
                "Metrc, BioTrack, or custom-trace state support",
                "Two-way sync, intelligent reconciliation, reduce check-in times, sync thousands of items, built to scale"
              ]
            },
            {
              icon: <ShieldCheck className="w-7 h-7 text-white" />, title: "Security You Can Trust", desc: null, list: [
                "HIPAA-ready architecture to protect customer data",
                "End-to-end encryption across all systems"
              ]
            }
          ].map((feature, idx) => (
            <div key={feature.title} className="bg-[#10182a] border border-blue-400/10 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col h-full">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg mr-2 sm:mr-3">
                  {feature.icon}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-cyan-300">{feature.title}</h3>
              </div>
              {feature.desc && <p className="text-blue-100 text-sm sm:text-base mb-2">{feature.desc}</p>}
              {feature.list && (
                <ul className="list-disc pl-4 sm:pl-5 text-blue-100 text-sm sm:text-base space-y-1">
                  {feature.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 md:mb-32 px-2"
      >
        <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl text-white text-center px-2 sm:px-10 py-8 sm:py-14 flex flex-col items-center justify-center">
          <BarChart3 className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6">Let Compliance Be the Last Thing You Worry About</h2>
          <p className="text-sm sm:text-lg md:text-2xl font-medium text-white mb-6 sm:mb-10 max-w-2xl mx-auto">Bleaum keeps your retail compliant, automatically No more spreadsheets. No more late-night syncs. No more fines.</p>
          <div className="flex justify-center w-full mt-2">
            <Link href="/demo">
              <button className="bg-white text-blue-600 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-14 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-100 transition-all inline-flex items-center justify-center gap-2 w-full max-w-xs sm:max-w-md">
                Schedule Your Compliance Demo <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 