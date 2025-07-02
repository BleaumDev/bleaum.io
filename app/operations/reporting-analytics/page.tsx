'use client';

import Link from "next/link";
import { 
  BarChart2Icon, 
  ZapIcon, 
  MapPinIcon, 
  LineChartIcon, 
  RefreshCwIcon, 
  UserIcon, 
  GlobeIcon, 
  BrainIcon,
  AlertCircleIcon,
  TrendingUpIcon,
  FileTextIcon,
  UsersIcon,
  LockIcon,
  BuildingIcon,
  LightbulbIcon,
  FilterIcon,
  EyeIcon,
  CalendarIcon,
  FileDownIcon,
  LinkIcon,
  ArrowRight,
  CheckCircle2,
  Quote,
  Target,
  Clock,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function BleaumReportingPage() {
  const reportingFeatures = [
    {
      title: "AI-Powered Insights",
      description: "Get smart alerts, trend predictions, and AI-written summaries that actually help you make decisions.",
      icon: <BrainIcon className="w-12 h-12 text-blue-400" />,
      quote: "The AI caught a pricing issue we missed for weeks.",
      features: ["Spot anomalies automatically", "Surface profitable segments", "AI-written report summaries"],
      highlight: "Coming Soon",
      isNew: true
    },
    {
      title: "Real-Time Dashboards", 
      description: "See everything that matters—sales, inventory, customer behavior—updating live as it happens.",
      icon: <LineChartIcon className="w-12 h-12 text-blue-400" />,
      quote: "Finally, dashboards that actually make sense.",
      features: ["Custom filters & date ranges", "Built-in templates"],
      highlight: "Live Data"
    },
    {
      title: "Multi-Location Command Center",
      description: "One view across all your stores. Compare performance, spot trends, manage everything from anywhere.",
      icon: <GlobeIcon className="w-12 h-12 text-blue-400" />,
      quote: "I can see all 5 locations at a glance. Game changer.",
      features: ["Location-based tracking", "Unified data streams", "Cross-store comparisons"],
      highlight: "Enterprise Ready"
    },
    {
      title: "Automated Compliance Reports",
      description: "Never miss a deadline. Set it once, get reports delivered on schedule—formatted for compliance.",
      icon: <RefreshCwIcon className="w-12 h-12 text-blue-400" />,
      quote: "Audit prep went from days to minutes.",
      features: ["Scheduled reports", "One-click CSV exports", "Compliance-ready formats"],
      highlight: "Coming Soon!"
    }
  ];

  const businessInsights = [
    {
      title: "What's selling & What's not",
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Peak hours and slow periods",
      icon: <Clock className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Customer buying patterns", 
      icon: <UsersIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Staff performance metrics",
      icon: <TrendingUpIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Inventory turnover rates",
      icon: <RefreshCwIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Profit margins by product",
      icon: <BarChart2Icon className="w-6 h-6 text-blue-400" />
    }
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
          <BarChart2Icon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Know your numbers. Grow your business.
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Stop guessing, start knowing. Get real-time insights that actually help you make better decisions—not just prettier charts.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          {[
            "See trends before they happen",
            "Multi-location in one view", 
            "Compliance reports on autopilot"
          ].map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-3 sm:p-4 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-1 sm:mb-2" />
              <p className="text-gray-300 text-xs sm:text-base">{point}</p>
            </motion.div>
          ))}
        </div>

        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "default", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 mb-2"
          })}>
            See Your Data Come Alive <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </motion.section>

      {/* Features Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reportingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group relative"
            >
              {feature.isNew && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  {!feature.isNew && (
                    <span className="text-sm text-blue-300 bg-blue-600/20 px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              <div className="space-y-3 mb-6">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {feature.quote && (
                <div className="border-t border-white/10 pt-4">
                  <p className="text-blue-300 italic">"{feature.quote}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What You'll Track Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <div className="flex justify-center mb-8">
          <EyeIcon className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          Track Everything That Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {businessInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {insight.icon}
              <span className="text-lg text-gray-300">{insight.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Customer Success Story */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-6">
          <Quote className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Real Results from Real Shops
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed italic max-w-2xl mx-auto">
          "Before Bleaum, I was flying blind. Now I know exactly which products to push, when to staff up, and where my money's going. Our profit margins improved 15% in the first quarter just from better data."
        </p>
        <p className="text-blue-300 font-semibold">
          — Perry Jones, Centered by Design
        </p>
      </motion.section>

      {/* Access Control Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <div className="flex justify-center mb-8">
          <LockIcon className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          Right Data, Right People, Right Time
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Manager Dashboards",
              description: "Staff performance, daily targets, operational metrics",
              icon: <UserIcon className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Owner Analytics", 
              description: "P&L insights, growth trends, strategic planning data",
              icon: <TrendingUpIcon className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Team Collaboration",
              description: "Shared reports, comments, action items",
              icon: <UsersIcon className="w-8 h-8 text-blue-400" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl shadow-2xl text-white text-center relative z-10 hover:shadow-blue-500/25 transition-shadow duration-300"
      >
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Turn Data Into Decisions
        </h2>
        <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Stop drowning in spreadsheets. See your business clearly, make moves confidently, and grow faster with insights that actually matter.
        </p>
        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 mb-2"
          })}>
            Book Your Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </motion.section>

      {/* Footer Tagline */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto text-center text-2xl md:text-4xl font-bold text-white relative z-10"
      >
     
      </motion.section>
    </div>
  );
} 