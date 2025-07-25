"use client";

import { CheckCircle2Icon, LockIcon, ShoppingCartIcon, LayersIcon, Settings2Icon, Globe2Icon, Sparkles, StoreIcon, LeafIcon, PillIcon, GlassWaterIcon, ShirtIcon, HeartIcon, MonitorIcon, GiftIcon, DumbbellIcon, Users, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-gray-900 to-gray-950 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto mb-10 sm:mb-16 text-center relative z-10 px-2 sm:px-0"
      >
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
            <LayersIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">Industries We Serve</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          We power businesses across a wide range of retail and regulated sectors. Whether you're managing a boutique storefront or operating in a highly controlled industry like cannabis, our platform delivers the tools, compliance, and performance you need to thrive.
        </p>
      </motion.section>





 {/* Regulated Industries */}
 <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-16 relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheckIcon className="w-8 h-8 text-green-400" />
          <Link href="#" className="focus:outline-none">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Regulated Industries</h2>
          </Link>
        </div>
        <p className="mb-6 text-slate-200">
          We are built to handle the complexity of compliance-heavy markets. From package-level inventory tracking to regulatory reporting, we keep your business audit-ready at all times.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <Link href="/resources/state-laws/" className="contents">
            <IndustryCard icon={<LeafIcon className="w-7 h-7 text-green-400" />} label="Cannabis Retail " />
          </Link>
          <IndustryCard icon={<GlassWaterIcon className="w-7 h-7 text-cyan-400" />} label="CBD & Hemp" />
          <IndustryCard icon={<PillIcon className="w-7 h-7 text-blue-400" />} label="Pharmaceutical Outlets" />
          <IndustryCard icon={<GiftIcon className="w-7 h-7 text-yellow-400" />} label="Liquor Stores " />
        </div>
      </motion.section>

















      {/* Retail-Based Industries */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-16 relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <StoreIcon className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Retail-Based Industries</h2>
        </div>
        <p className="mb-6 text-slate-200">
          Our platform supports modern retail operations with features like real-time inventory, flexible POS workflows, promotions, customer loyalty, and multi-location management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <IndustryCard icon={<ShirtIcon className="w-7 h-7 text-blue-400" />} label="Apparel & Footwear" />
          <IndustryCard icon={<GiftIcon className="w-7 h-7 text-cyan-400" />} label="Convenience Stores" />
          <IndustryCard icon={<HeartIcon className="w-7 h-7 text-pink-400" />} label="Beauty & Cosmetics" />
          <IndustryCard icon={<MonitorIcon className="w-7 h-7 text-purple-400" />} label="Electronics" />
          {/* <IndustryCard icon={<GiftIcon className="w-7 h-7 text-yellow-400" />} label="Specialty Retail (e.g., gifts, home goods)" /> */}
          <IndustryCard icon={<DumbbellIcon className="w-7 h-7 text-green-400" />} label="Health & Wellness" />
          <IndustryCard icon={<PillIcon className="w-7 h-7 text-blue-300" />} label="Supplements & Nutrition" />
        </div>
      </motion.section>

     

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-16 relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <Link href="#" className="focus:outline-none">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Why Choose Us?</h2>
          </Link>
        </div>
        <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-200 mb-4">
          <li className="flex items-center gap-3"><LockIcon className="w-6 h-6 text-blue-400" /> <span><b>Compliance-Ready:</b> Integrated with METRC and other regulatory systems.</span></li>
          <li className="flex items-center gap-3"><ShoppingCartIcon className="w-6 h-6 text-cyan-400" /> <span><b>Retail-Focused Tools:</b> Inventory, fulfillment, and customer engagement designed for speed and flexibility.</span></li>
          <li className="flex items-center gap-3"><Globe2Icon className="w-6 h-6 text-green-400" /> <span><b>Multi-Industry Expertise:</b> One platform, many verticals.</span></li>
          <li className="flex items-center gap-3"><Settings2Icon className="w-6 h-6 text-yellow-400" /> <span><b>Customizable Workflows:</b> Tailor everything to how your business operates.</span></li>
        </ul>
      </motion.section>
    </div>
  );
}

function IndustryCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-white text-sm sm:text-base font-medium">{label}</span>
    </div>
  );
} 