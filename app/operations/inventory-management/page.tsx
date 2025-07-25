'use client';

import Link from "next/link";
import {
  PackageIcon,
  ZapIcon,
  ShieldCheckIcon,
  BarChart2Icon,
  StoreIcon,
  PrinterIcon,
  CheckCircle2Icon,
  LayersIcon,
  AlertCircleIcon,
  TagIcon,
  UsersIcon,
  SearchIcon,
  ArrowRight,
  Quote,
  Clock,
  Target,
  Smartphone,
  Wifi,
  Eye,
  TrendingUp,
  Shield,
  Sparkles,
  CheckSquare,
  Archive,
  Scan,
  Building2,
  RefreshCw,
  FileText,
  Star,
  Timer
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function InventoryManagementPage() {
  const inventoryFeatures = [
    {
      title: "Live Inventory Audits",
      description: "Count while you sell. No more after-hours marathons or surprise variances.",
      icon: <ZapIcon className="w-12 h-12 text-blue-400" />,
      quote: "We went from 4-hour closing counts to 20-minute midday audits.",
      features: ["Audit during business hours", "Blind counts with manager approval", "Instant variance alerts", "Full compliance logging"],
      highlight: "Real-Time",
      stats: "Save 3+ hours per audit"
    },
    {
      title: "Smart Compliance Sync",
      description: "One-click Metrc acceptance, auto-sync with BioTrack. Compliance without the headache.",
      icon: <ShieldCheckIcon className="w-12 h-12 text-blue-400" />,
      quote: "Audit prep went from days to literally 10 minutes.",
      features: ["One-click package acceptance", "Two-way compliance syncing", "Automatic overage alerts", "Seed-to-sale tracking"],
      highlight: "Automated",
      stats: "99.9% compliance rate"
    },
    {
      title: "Multi-Location Command Center",
      description: "See everything, everywhere. Transfer between stores, sync online, control it all.",
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      quote: "I can manage 6 locations and Move 100 items easily",
      features: ["Centralized inventory control", "Cross-store transfers", "Location-specific pricing", "Unified reporting"],
      highlight: "Enterprise",
      stats: "Unlimited locations"
    },
    {
      title: "Bulk Operations That Actually Work",
      description: "Move 1,000 items as easily as 1. Print compliant labels instantly. No clicking fatigue.",
      icon: <LayersIcon className="w-12 h-12 text-blue-400" />,
      quote: "Bulk actions saved us hours every single week.",
      features: ["Bulk move, adjust, relabel", "Instant compliant labels", "Mass product updates", "Scheduled operations"],
      highlight: "Efficient",
      stats: "10x faster operations"
    }
  ];

  const problemSolvers = [
    {
      problem: "Late-night inventory counts",
      solution: "Count during business hours",
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      impact: "Get your evenings back"
    },
    {
      problem: "Compliance panic attacks",
      solution: "Auto-sync with state systems",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      impact: "Sleep easy during audits"
    },
    {
      problem: "Missing inventory mysteries",
      solution: "Real-time variance alerts",
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      impact: "Catch shrinkage early"
    },
    {
      problem: "Multi-store chaos",
      solution: "Unified inventory control",
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      impact: "One source of truth"
    }
  ];

  const complianceFeatures = [
    "METRC integration",
    "BioTrack sync",
    "Custom compliance rules",
    "Audit trail logging"
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-gray-900 to-gray-950 dark:from-background dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 text-center relative z-10 px-2 sm:px-0"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="relative">
            <PackageIcon className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" />
            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle2Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
        </motion.div>
        
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
          Inventory that doesn't ruin your night
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Count during the day. Catch problems early. Stay compliant without the stress. Finally, inventory management that works with your schedule, not against it.
        </p>

        {/* Problem/Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8 sm:mb-12">
          {problemSolvers.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-4 sm:p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-red-300 text-xs sm:text-sm mb-1 sm:mb-2 line-through">{item.problem}</div>
              <div className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.solution}</div>
              <div className="text-blue-300 text-xs sm:text-sm">{item.impact}</div>
            </motion.div>
          ))}
        </div>

        {/* Customer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-4 sm:p-8 bg-gradient-to-r from-white/5 to-blue-500/5 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 max-w-4xl mx-auto mb-6 sm:mb-8 relative overflow-hidden"
        >
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400/30" />
          </div>
          <p className="text-base sm:text-xl text-gray-300 italic mb-4 sm:mb-6 pt-6 sm:pt-8">
            "We used to spend hours after close just counting. Now, we do it live, and I actually trust the numbers. Game changer for our whole operation."
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <p className="text-blue-300 font-semibold">Cam
              </p>
              <p className="text-gray-400">Project Releaf</p>
            </div>
          </div>
        </motion.div>

        <Link href="/demo">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={buttonVariants({ 
              variant: "default", 
              size: "lg", 
              className: "w-full sm:w-auto mx-auto px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 mb-2"
            })}
          >
            <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
            See 20-Minute Inventory in Action 
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </Link>
      </motion.section>

      {/* Enhanced Features Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-12 sm:mb-20 relative z-10 px-2 sm:px-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {inventoryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">{feature.title}</h3>
                      <span className="text-xs sm:text-sm text-blue-300 bg-blue-600/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-bold text-blue-400">{feature.stats}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {feature.features.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-1 sm:gap-2"
                    >
                      <CheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <p className="text-blue-300 italic text-xs sm:text-base">"{feature.quote}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Compliance Showcase */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 p-4 sm:p-10 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-4 sm:mb-8">
            <div className="relative">
              <Shield className="w-14 h-14 sm:w-20 sm:h-20 text-blue-600" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200 text-center">
            Compliance That Actually Works
          </h2>
          
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
            Stop dreading state inspections. Our two-way sync keeps you compliant automatically, with full audit trails and instant alerts.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-2 sm:p-4 bg-white/5 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors duration-300"
              >
                <span className="text-gray-300 font-medium text-xs sm:text-base text-center">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Real-Time Dashboard Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 p-4 sm:p-10 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="flex justify-center mb-4 sm:mb-8">
          <BarChart2Icon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
        </div>
        
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          See Everything, Miss Nothing
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[
            { label: "Live Stock Levels", value: "Real-time", icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> },
            { label: "Variance Alerts", value: "Instant", icon: <AlertCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" /> },
            { label: "Compliance Status", value: "99.9%", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> },
            { label: "Audit Ready", value: "Always", icon: <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex justify-center mb-2 sm:mb-3">
                {stat.icon}
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            Track what matters. Know what's happening. Stay ahead of problems.
          </p>
        </div>
      </motion.section>

      {/* Success Stories Carousel */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-12 sm:mb-20 relative z-10 px-2 sm:px-0"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Real Results from Real Operators
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              quote: "Inventory counts went from our most dreaded task to something we barely think about. It just works.",
              author: "Perry Jones, Tulsa, Oklahoma",
              // role: "Operations Manager",
              company: "Centered by Design",
              metric: "75% time saved"
            },
            {
              quote: "The compliance features alone are worth it. We haven't had a single violation since switching.",
              author: "Andrew H. , Ontario, Canada",
              // role: "Owner", 
              company: "Go Green",
              metric: "100% compliant"
            },
            {
              quote: "Multi-location management finally makes sense. I can see everything from anywhere.",
              author: "AJ, Oklahoma City, Oklahoma",
              // role: "Regional Director",
              company: "Happy Root",
              metric: "6 locations unified"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4 sm:p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-2 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-base sm:text-lg text-gray-300 italic mb-4 sm:mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="text-center border-t border-white/10 pt-2 sm:pt-4">
                <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1 sm:mb-2">{testimonial.metric}</div>
                <p className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</p>
                {/* <p className="text-blue-300 text-xs sm:text-sm">{testimonial.role}</p> */}
                <p className="text-gray-400 text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 p-4 sm:p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl shadow-2xl text-white text-center relative z-10 hover:shadow-blue-500/25 transition-shadow duration-300"
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
        Ready for Inventory That Works?
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
        Join hundreds of operators who've said goodbye to late-night counts and compliance stress. See why they call it "the best inventory system in cannabis."
        </p>
        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 mb-2"
          })}>
           Schedule Your Inventory Demo<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </motion.section>
      {/* Enhanced Footer Tagline */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto text-center text-lg sm:text-2xl md:text-4xl font-bold text-white relative z-10"
      >
        
      </motion.section>
    </div>
  );
}