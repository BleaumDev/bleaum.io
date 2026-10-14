'use client';

import Link from "next/link";
import {
  ShoppingCartIcon,
  ZapIcon,
  UserIcon,
  BarChart2Icon,
  FileTextIcon,
  CheckCircle2Icon,
  TagIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  LayersIcon,
  EyeIcon,
  ArrowRight,
  Quote,
  Clock,
  Target,
  Smartphone,
  Wifi,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  Timer,
  Heart,
  Gauge,
  Brain,
  Headphones,
  Building2,
  RefreshCw,
  DollarSign,
  Scan,
  Package
  
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function BleaumPOSPage() {
  const posFeatures = [
    {
      title: "Lightning-Fast Checkout",
      description: "30-second transactions, even during peak hours. Your budtenders will thank you, and so will your customers.",
      icon: <ZapIcon className="w-12 h-12 text-blue-400" />,
      quote: "Lines move 3x faster now. Customers are happier, staff is less stressed.",
      features: ["30-second average checkout", "One-tap item selection", "Smart suggested add-ons", "Instant receipt options"],
      highlight: "Speed Demon",
      stats: "3x faster checkouts",
      category: "front"
    },
    {
      title: "Smart Customer Intelligence",
      description: "Know your customers before they speak. See purchase history, preferences, and loyalty status instantly.",
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      quote: "I actually know what to recommend now. Sales are up 25%.",
      features: ["Purchase history at a glance", "Preference tracking", "Loyalty status display", "Smart upsell suggestions"],
      highlight: "AI-Powered",
      stats: "25% higher sales",
      category: "front"
    },
    {
      title: "Real-Time Business Intelligence",
      description: "See what's happening as it happens. No more waiting till close to know your numbers.",
      icon: <BarChart2Icon className="w-12 h-12 text-blue-400" />,
      quote: "I know my hourly sales, top products, and staff performance live.",
      features: ["Live sales dashboards", "Real-time inventory levels", "Performance metrics", "Instant reporting"],
      highlight: "Live Data",
      stats: "100% real-time",
      category: "back"
    },
    {
      title: "Bulletproof Compliance",
      description: "METRC and BioTrack sync, audit trails, and compliance alerts happen automatically—so you can sleep easy during inspections.",
      icon: <ShieldCheckIcon className="w-12 h-12 text-blue-400" />,
      quote: "Passed our state audit with zero issues. The inspector was impressed.",
      features: ["Automatic METRC sync", "Complete audit trails", "Compliance alerts", "Error prevention"],
      highlight: "Audit-Ready",
      stats: "99.9% compliant",
      category: "back"
    }
  ];

  const painPoints = [
    {
      problem: "Slow, clunky checkout",
      solution: "30-second transactions",
      icon: <Timer className="w-8 h-8 text-blue-400" />,
      impact: "Happy customers, faster turnover"
    },
    {
      problem: "Training nightmares",
      solution: "Intuitive, one-shift learning",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      impact: "New staff selling in minutes"
    },
    {
      problem: "Compliance anxiety",
      solution: "Automatic METRC sync",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      impact: "Audit-ready, always"
    },
    {
      problem: "Support black holes",
      solution: "Real humans, real answers",
      icon: <Headphones className="w-8 h-8 text-blue-400" />,
      impact: "Problems solved, not escalated"
    }
  ];

  const businessMetrics = [
    {
      metric: "30 sec",
      description: "Average checkout time",
      icon: <Clock className="w-8 h-8 text-blue-400" />
    },
    {
      metric: "1 shift",
      description: "New hire training time",
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      metric: "99.9%",
      description: "Compliance success rate",
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      metric: "24/7",
      description: "Human support availability",
      icon: <Headphones className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-gray-900 to-gray-950 dark:from-background dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
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
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <ShoppingCartIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              {/* <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> */}
            </div>
          </div>
        </motion.div>
        
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
          The POS that actually gets it
      </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
        Built by operators, for operators—whether you run a any high-stakes retail. Fast checkout, easy training, and rock-solid compliance—without the headaches.
        </p>

        {/* Pain Point Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8 sm:mb-12">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-red-300 text-xs sm:text-sm mb-1 sm:mb-2 line-through text-center">{item.problem}</div>
              <div className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-base text-center">{item.solution}</div>
              <div className="text-blue-300 text-xs sm:text-sm text-center">{item.impact}</div>
            </motion.div>
          ))}
        </div>

        {/* Customer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-4 sm:p-8 bg-gradient-to-r from-white/5 via-blue-500/5 to-white/5 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 max-w-4xl mx-auto mb-6 sm:mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-2 sm:mb-4">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            </div>
            <p className="text-base sm:text-xl text-gray-300 italic mb-4 sm:mb-6">
              "We built Bleaum POS after too many late nights fixing inventory mistakes, training new staff, and wrestling with clunky menus. If you've ever counted cash at close or had to explain compliance to a new hire, you'll understand exactly why we made this."
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-300 font-semibold">The Bleaum Team</p>
                <p className="text-gray-400">Built by operators, for operators</p>
              </div>
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
              className: "w-full sm:w-auto mx-auto px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 mb-2"
            })}
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'Button',
                  event_label: 'Demo'
                });
              }
            }}
          >
            <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            See It Handle Real Traffic
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
      </Link>
      </motion.section>

      {/* Business Metrics */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-10 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Numbers That Matter</h2>
          <p className="text-xl text-gray-300">Real metrics from real Retailers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
              <div className="text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enhanced Features Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-20 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          If it doesn't save time, reduce errors, or make your team faster—we don't build it. No fluff. Just what actually works.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8">
          {posFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden"
            >
              {/* Category indicator - move below title on mobile */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 flex items-center gap-2 flex-wrap">
                      {feature.title}
                      <span className={`text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ml-0 sm:ml-2 mt-1 sm:mt-0 align-middle ${
                        feature.category === 'front' 
                          ? 'bg-green-600/20 text-green-300' 
                          : 'bg-purple-600/20 text-purple-300'
                      }`}>
                        {feature.category === 'front' ? 'Front of House' : 'Back of House'}
                      </span>
                    </h3>
                    <span className="text-xs sm:text-sm text-blue-300 bg-blue-600/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400">{feature.stats}</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed">{feature.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {feature.features.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-10 bg-gradient-to-r from-gray-500/10 via-blue-500/10 to-gray-500/10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Headphones className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Support That Actually Supports
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real people who know your business. Call, text, or chat—we're here when you need us, not when it's convenient for us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real Retail Experience",
              description: "Our support team has actually worked in retailers",
              icon: <Users className="w-8 h-8 text-green-400" />
            },
            {
              title: "24/7 Human Support",
              description: "No bots, no scripts, just real help when you need it",
              icon: <Clock className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Proactive Problem Solving",
              description: "We spot issues before they become your problems",
              icon: <Wifi className="w-8 h-8 text-purple-400" />
            }
          ].map((support, index) => (
            <motion.div
              key={support.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {support.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{support.title}</h3>
              <p className="text-gray-300">{support.description}</p>
            </motion.div>
          ))}
          </div>
      </motion.section>

      {/* Integration Ecosystem */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-10 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <LayersIcon className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400" />
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Everything Connected</h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            POS, inventory, compliance, delivery, loyalty, and analytics—all in one system that actually talks to itself.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {[
            { name: "METRC Sync", icon: <ShieldCheckIcon className="w-6 h-6 text-green-400" /> },
            { name: "Delivery Tracking", icon: <Package className="w-6 h-6 text-blue-400" /> },
            { name: "Loyalty Programs", icon: <Heart className="w-6 h-6 text-pink-400" /> },
            { name: "Live Analytics", icon: <BarChart2Icon className="w-6 h-6 text-purple-400" /> },
            { name: "Payment Processing", icon: <CreditCardIcon className="w-6 h-6 text-yellow-400" /> },
            { name: "Inventory Management", icon: <Package className="w-6 h-6 text-cyan-400" /> },
            { name: "Marketing Tools", icon: <Target className="w-6 h-6 text-orange-400" /> },
            { name: "Multi-Location", icon: <Building2 className="w-6 h-6 text-indigo-400" /> }
          ].map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {integration.icon}
          </div>
              <span className="text-gray-300 text-sm text-center">{integration.name}</span>
            </motion.div>
          ))}
          </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-20 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Teams Switch to Bleaum
          </h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Training went from days to hours. New budtenders are confident on day one.",
              author: "Andrew H.",
              // role: "Training Manager",
              company: "Go Green",
              metric: "90% faster training",
              color: "blue"
            },
            {
              quote: "Our checkout lines move so fast now. Customers actually compliment us on it.",
              author: "Perry Jones",
              // role: "Store Manager", 
              company: "Centered by Design",
              metric: "3x faster checkout",
              color: "blue"
            },
            {
              quote: "State inspection? No problem. Everything's automatically compliant and logged.",
              author: "AJ",
              // role: "Compliance Officer",
              company: "Happy Root",
              metric: "Zero violations",
              color: "blue"
            },
            // {
            //   quote: "State inspection? No problem. Everything's automatically compliant and logged.",
            //   author: "Angelica, Alameda, California",
            //   // role: "Compliance Officer",
            //   company: "Park Social",
            //   metric: "Zero violations",
            //   color: "blue"
            // }
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="text-center border-t border-white/10 pt-6">
                <div className={`text-2xl font-bold mb-2 ${
                  testimonial.color === 'green' ? 'text-green-400' :
                  testimonial.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                }`}>
                  {testimonial.metric}
                </div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                {/* <p className="text-blue-300 text-sm">{testimonial.role}</p> */}
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 relative z-10"
      >
        <div className="p-4 sm:p-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl shadow-2xl text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              
            </div>
            <h2 className="text-xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-6">
              See It Handle Real Traffic
            </h2>
            <p className="text-base sm:text-xl mb-4 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Bleaum isn't just another POS. It's the system we wish we'd had years ago. Want to see how it works in your shop? Let's set up a demo.
      </p>
      <Link href="/demo">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={buttonVariants({ 
                  variant: "secondary", 
                  size: "lg", 
                  className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 sm:gap-3 mb-2"
                })}
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'Button',
                      event_label: 'Demo'
                    });
                  }
                }}
              >
                <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Book Your Personalized Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
      </Link>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Footer Tagline */}
      
      
    </div>
  );
} 