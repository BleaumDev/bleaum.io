import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
      {/* Talk to Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mt-12 bg-gradient-to-br from-white/10 via-cyan-900/10 to-blue-900/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 px-3 sm:px-6 py-3 sm:py-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Talk to our team</h2>
          <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium">Interested in partnering and integrating with Bleaum</p>
        </div>
        {/* Form */}
        <form className="px-2 sm:px-6 md:px-16 py-6 sm:py-8 space-y-4 sm:space-y-5 bg-white/10 backdrop-blur rounded-b-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input type="text" placeholder="First name*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
            <input type="text" placeholder="Last name*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input type="email" placeholder="Business email address*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
            <input type="tel" placeholder="Business phone number*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input type="text" placeholder="Business name*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
            <input type="text" placeholder="Job title*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <input type="text" placeholder="Business website*" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <div className="relative">
            <select className="appearance-none w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10" required>
              <option value="">Current eCommerce setup (if any)*</option>
              <option value="none">No online store yet</option>
              <option value="weedmaps">Weedmaps only</option>
              <option value="leafly">Leafly only</option>
              <option value="custom">Custom website</option>
              <option value="other">Other platform</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <button type="submit" className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-bold py-3 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-200 shadow-lg">Get My Branded Store</button>
        </form>
        <div className="px-2 sm:px-6 md:px-16 pb-6 sm:pb-8">
          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-center">
            By submitting this form, you&apos;re agreeing to receive marketing communications from Bleaum. For information on our privacy practices and commitment to protecting your privacy, please review our <a href="/privacy" className="underline text-cyan-400 hover:text-blue-400">privacy policies</a>.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
