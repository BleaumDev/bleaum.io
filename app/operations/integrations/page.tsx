'use client';

import Link from "next/link";
import { 
  LinkIcon,
  BriefcaseIcon,
  BarChart2Icon,
  LeafIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  MegaphoneIcon,
  UsersIcon,
  UserIcon,
  StoreIcon,
  SparklesIcon,
  MessageSquareIcon,
  ArrowRight,
  Zap,
  CheckCircle2,
  Quote,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function BleaumIntegrationsPage() {
  const integrationCategories = [
    {
      title: "Accounting & Finance",
      description: "Keep your books clean without the manual work",
      icon: <BriefcaseIcon className="w-8 h-8 text-blue-400" />,
      integrations: ["Merchant Club USA","Mercco","QuickBooks (Coming Soon)", "Aeropay"],
      highlight: "Auto-sync sales data"
    },
    {
      title: "Analytics & Insights", 
      description: "See what's working, what's not, and what's next",
      icon: <BarChart2Icon className="w-8 h-8 text-blue-400" />,
      integrations: ["Google Analytics", "AI-powered reporting (Coming soon)"],
      highlight: "Real-time dashboards"
    },
    {
      title: "Inventory & Stock Control",
      description: "Keep your inventory up to date",
      icon: <LeafIcon className="w-8 h-8 text-blue-400" />,
      integrations: ["GrowFlow", "Lightspeed", "Treez", "Weave", "Indica online", "Cova"],
      highlight: "Live sync with full visibilty across the channels"
    },
    {
      title: "Compliance & Traceability",
      description: "Stay compliant without the stress",
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-400" />,
      integrations: ["METRC", "IDScan", "BioTrack"],
      highlight: "Automatic reporting"
    },
    {
      title: "Ecommerce ",
      description: "List once, sell everywhere",
      icon: <ShoppingCartIcon className="w-8 h-8 text-blue-400" />,
      integrations: ["Leafly", "Weedmaps"],
      highlight: "Multi-channel inventory"
    },
    {
      title: "Marketing & Loyalty",
      description: "Keep customers coming back",
      icon: <MegaphoneIcon className="w-8 h-8 text-blue-400" />,
      integrations: ["Springbig", "Bleackleaf", "Built-in marketing & loyalty tools with AI (coming soon)"],
      highlight: "Automated campaigns"
    },
 
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-gray-900 to-gray-950 dark:from-background dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 text-center relative z-10 px-2 sm:px-0"
      >
        <div className="flex justify-center mb-4 sm:mb-6">
          <LinkIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        One Platform. Total Sync. No Double Entry.
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
        Bleaum unifies your business — from mobile apps and ecommerce to POS, delivery, payments, and compliance — in a single intelligent system.
        </p>

        {/* Customer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-4 sm:p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-4" />
          <p className="text-base sm:text-lg text-gray-300 italic mb-2 sm:mb-4">
            "We used to spend hours every week exporting reports and fixing mismatched data. Now, everything just flows. Our accountant is happy, and so am I."
          </p>
          <p className="text-blue-300 font-semibold">— Diana, Doctor Greens</p>
        </motion.div>

        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "default", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 mb-2"
          })}>
            Schedule a Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </motion.section>

      {/* Integration Categories Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-12 sm:mb-20 relative z-10 px-2 sm:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1">{category.title}</h3>
                  <span className="text-xs sm:text-sm text-blue-300 bg-blue-600/20 px-2 py-0.5 sm:py-1 rounded-full">
                    {category.highlight}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{category.description}</p>
              
              <div className="space-y-2">
                {category.integrations.map((integration, idx) => (
                  <div key={idx} className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-base">{integration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Native vs Integrated Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 p-4 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-cyan-600/20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 text-center"
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Native when you want it. Integrated when you need it.
        </h2>
        <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
        With native integrations to Metrc, BioTrack, and a suite of third-party tools, we help you move faster, stay compliant, and reduce manual tasks that eat up time and create errors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" />
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Built-In Power</h3>
            <p className="text-gray-300 text-xs sm:text-base">Everything you need in one platform—no setup, no sync issues, no extra fees.</p>
          </div>
          <div className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <LinkIcon className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" />
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Seamless Connections</h3>
            <p className="text-gray-300 text-xs sm:text-base">Keep your favorite tools and connect them effortlessly with real-time data flow.</p>
          </div>
        </div>
        <Link href="/contact">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 mb-2"
          })}>
            Would you like to become integration partner? Let's talk <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 p-4 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-2 sm:mb-3" />
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Smart Integrations. Smoother Operations.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6 sm:space-y-8">
            <li className="flex items-start gap-2 sm:gap-4">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm sm:text-base">Seed-to-sale compliance</span>
                <div className="text-gray-300 text-xs sm:text-base">We sync directly with Metrc & BioTrack, ensuring all inventory, sales, and delivery events are reported in real time.</div>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm sm:text-base">Connected ecosystem</span>
                <div className="text-gray-300 text-xs sm:text-base">We integrate with tools like QuickBooks, Springbig, Google Analytics, Leafly, Weedmaps, IDScan, and others—so your data flows where it needs to.</div>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm sm:text-base">POS + Ecommerce + Delivery</span>
                <div className="text-gray-300 text-xs sm:text-base">Unlike patchwork systems, Bleaum lets you connect all touchpoints:<br/>App → Website → In-Store POS → Last Mile Delivery<br/>…without the painful handoffs.</div>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm sm:text-base">Marketing, CRM & Reports</span>
                <div className="text-gray-300 text-xs sm:text-base">Automatically feed sales and customer data into your preferred marketing platforms and CRM tools. Plus, export what you need—when you need it—with clean, real-time data.</div>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm sm:text-base">AI-powered insights</span>
                <div className="text-gray-300 text-xs sm:text-base">Built-in reporting and analytics help you understand margins, movement, and growth drivers without lifting a finger.</div>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="p-4 sm:p-8 md:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl shadow-2xl text-white hover:shadow-blue-500/25 transition-shadow duration-300">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
          Ready to drop the disconnected systems?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          Bleaum connects your entire operation — and simplifies everything.
          </p>
          <Link href="/demo">
            <button className={buttonVariants({ 
              variant: "secondary", 
              size: "lg", 
              className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 mb-2"
            })}>
              Schedule Your Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}