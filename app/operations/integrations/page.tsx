'use client';

import Link from "next/link";
import Image from "next/image"; // Added for logos
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
  Rocket,
  CreditCardIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

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

  // --- Integration Partners Data ---
  const integrationPartners = [
    // Compliance & Traceability
    { 
      name: "METRC", 
      category: "TRACEABILITY", 
      description: "METRC seed-to-sale tracking system ensures complete compliance with state cannabis regulations and inventory management.",
      logo: "/metrc.png",
      logoAlt: "METRC Logo",
      status: "Active"
    },
    { 
      name: "BioTrack", 
      category: "TRACEABILITY", 
      description: "BioTrack provides comprehensive seed-to-sale tracking and compliance solutions for cannabis businesses.",
      logo: "/biotrack.png",
      logoAlt: "BioTrack Logo",
      status: "Active"
    },
    { 
      name: "IDScan", 
      category: "ID VERIFICATION", 
      description: "IDScan provides secure ID verification and customer check-in solutions for cannabis retail locations.",
      logo: "/idscan.png",
      logoAlt: "IDScan Logo",
      status: "Active"
    },
    
    // Accounting & Finance
    { 
      name: "QuickBooks", 
      category: "ACCOUNTING", 
      description: "QuickBooks integration for seamless financial management and automated bookkeeping for your cannabis business.",
      logo: "/quickbooks.png",
      logoAlt: "QuickBooks Logo",
      status: "Coming Soon"
    },
    { 
      name: "Merchant Club USA", 
      category: "PAYMENTS", 
      description: "Merchant Club USA provides secure payment processing solutions specifically designed for cannabis businesses.",
      logo: "/MERCHANT.png",
      logoAlt: "Merchant Club USA Logo",
      status: "Active"
    },
    { 
      name: "Aeropay", 
      category: "PAYMENTS", 
      description: "Aeropay offers digital payment solutions that help cannabis businesses accept secure, compliant transactions.",
      logo: "/aeropay.png",
      logoAlt: "Aeropay Logo",
      status: "Active"
    },
    
    // Inventory & POS
    { 
      name: "GrowFlow", 
      category: "INVENTORY", 
      description: "GrowFlow provides comprehensive inventory management and cultivation tracking for cannabis operations.",
      logo: "/growflow1.png",
      logoAlt: "GrowFlow Logo",
      status: "Active"
    },
    { 
      name: "Lightspeed", 
      category: "POINT OF SALE", 
      description: "Lightspeed retail POS system integration for streamlined cannabis retail operations and inventory management.",
      logo: "/lightspeed.png",
      logoAlt: "Lightspeed Logo",
      status: "Active"
    },
    { 
      name: "Treez", 
      category: "POINT OF SALE", 
      description: "Treez is a comprehensive cannabis retail platform offering POS, inventory, and compliance management.",
      logo: "/treez.png",
      logoAlt: "Treez Logo",
      status: "Active"
    },
    { 
      name: "Cova", 
      category: "POINT OF SALE", 
      description: "Cova provides cannabis retail software with POS, inventory management, and compliance reporting features.",
      logo: "/cova.png",
      logoAlt: "Cova Logo",
      status: "Active"
    },
    { 
      name: "Indica Online", 
      category: "POINT OF SALE", 
      description: "Indica Online offers cannabis retail software with integrated POS, inventory, and customer management tools.",
      logo: "/indicaonlinr.png",
      logoAlt: "Indica Online Logo",
      status: "Active"
    },
    { 
      name: "Weave", 
      category: "CUSTOMER MANAGEMENT", 
      description: "Weave provides customer communication and business management tools for cannabis retailers.",
      logo: "/weave.png",
      logoAlt: "Weave Logo",
      status: "Active"
    },
    
    // Ecommerce & Marketplaces
    { 
      name: "Leafly", 
      category: "MARKETPLACE", 
      description: "Leafly is the world's largest cannabis marketplace, connecting consumers with cannabis retailers and brands.",
      logo: "/leafly.png",
      logoAlt: "Leafly Logo",
      status: "Active"
    },
    { 
      name: "Weedmaps", 
      category: "MARKETPLACE", 
      description: "Weedmaps is a leading cannabis discovery platform that connects consumers with local dispensaries and delivery services.",
      logo: "/weedmaps.png",
      logoAlt: "Weedmaps Logo",
      status: "Active"
    },
    
    // Marketing & Loyalty
    { 
      name: "Springbig", 
      category: "LOYALTY", 
      description: "Springbig provides customer loyalty and marketing automation platform designed specifically for cannabis retailers.",
      logo: "/springbig.png",
      logoAlt: "Springbig Logo",
      status: "Active"
    },
    { 
      name: "Blackleaf", 
      category: "MARKETING", 
      description: "Blackleaf offers comprehensive marketing and customer engagement tools for cannabis businesses.",
      logo: "/blackleaf.png",
      logoAlt: "Blackleaf Logo",
      status: "Active"
    },
    
    // Analytics
    { 
      name: "Google Analytics", 
      category: "ANALYTICS", 
      description: "Google Analytics integration provides comprehensive web analytics and customer behavior insights for your cannabis business.",
      logo: "/googleanalytics.png",
      logoAlt: "Google Analytics Logo",
      status: "Active"
    },
    
    // Coming Soon
    { 
      name: "AI Reporting", 
      category: "ANALYTICS", 
      description: "Advanced AI-powered reporting and insights platform to help you understand your business performance and growth opportunities.",
      logo: "/aireporting.png",
      logoAlt: "AI Reporting Logo",
      status: "Coming Soon",
      isComingSoon: true
    }
  ];

  // Extract unique categories for sidebar
  const allCategories = Array.from(new Set(integrationPartners.map(p => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredPartners = selectedCategory
    ? integrationPartners.filter(p => p.category === selectedCategory)
    : integrationPartners;

  // Map category to icon
  const categoryIcons: Record<string, React.ReactNode> = {
    TRACEABILITY: <ShieldCheckIcon className="w-5 h-5" />,
    "ID VERIFICATION": <UserIcon className="w-5 h-5" />,
    ACCOUNTING: <BriefcaseIcon className="w-5 h-5" />,
    PAYMENTS: <CreditCardIcon className="w-5 h-5" />,
    INVENTORY: <LeafIcon className="w-5 h-5" />,
    "POINT OF SALE": <StoreIcon className="w-5 h-5" />,
    "CUSTOMER MANAGEMENT": <UsersIcon className="w-5 h-5" />,
    MARKETPLACE: <ShoppingCartIcon className="w-5 h-5" />,
    LOYALTY: <SparklesIcon className="w-5 h-5" />,
    MARKETING: <MegaphoneIcon className="w-5 h-5" />,
    ANALYTICS: <BarChart2Icon className="w-5 h-5" />,
    ALL: <MessageSquareIcon className="w-5 h-5" />,
  };

  // --- Integration Partners Section ---
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

      {/* Integration Partners Section (new sidebar + filterable cards) */}
      <section className="w-full max-w-7xl mx-auto mb-12 sm:mb-20 relative z-10 flex flex-col lg:flex-row items-start px-2 sm:px-0">
        {/* Sidebar for categories */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8 sticky top-8 self-start">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Integration categories</h2>
          <div className="flex flex-wrap gap-3">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-base font-semibold border border-gray-700 shadow-sm bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white hover:shadow-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedCategory === null ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              {categoryIcons.ALL}
              <span>All</span>
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-base font-semibold border border-gray-700 shadow-sm bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white hover:shadow-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedCategory === category ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryIcons[category] as React.ReactNode}
                <span>{category.replace(/_/g, ' ')}</span>
              </button>
            ))}
          </div>
        </aside>
        {/* Main grid for integration cards and CTA */}
        <main className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredPartners.map((integration, index) => (
              <div
                key={integration.name}
                className="flex flex-col justify-between h-full p-6 sm:p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                {/* Top row: Name and Logo */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      {integration.name}
                    </h3>
                    {integration.status === 'Coming Soon' && (
                      <span className="inline-block text-xs px-2 py-1 rounded-full bg-yellow-600/20 text-yellow-300 border border-yellow-600/30 mt-1">
                        {integration.status}
                      </span>
                    )}
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/20 transition-colors duration-300">
                    {integration.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={integration.logo}
                          alt={integration.logoAlt}
                          fill
                          className={`object-contain transition-all duration-300 ${integration.isComingSoon ? 'opacity-50 grayscale' : 'opacity-90 group-hover:opacity-100'}`}
                          onError={(e) => {
                            const img = e.currentTarget as HTMLElement;
                            img.style.display = 'none';
                            const fallback = img.nextElementSibling as HTMLElement | null;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {integration.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-white">
                        {integration.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {integration.description}
                </p>
                {/* Bottom row: Category tags and Learn more */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-blue-300 bg-blue-600/20 px-3 py-1 rounded-full">
                    {integration.category}
                  </span>
                  <button className="text-blue-300 hover:text-blue-200 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Integration Request CTA */}
          {/* <div className="text-center mt-12">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Don't see your tool?
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                We're always adding new integrations. Let us know what you need and we'll prioritize it.
              </p>
              <Link href="/contact">
                <button className={buttonVariants({ 
                  variant: "outline", 
                  size: "lg",
                  className: "text-white border-white/30 hover:bg-white/10 flex items-center gap-2 mx-auto"
                })}>
                  Request Integration <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div> */}
        </main>
      </section>

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