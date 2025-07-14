'use client';

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image';
import { 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  Sparkles, 
  Shield, 
  Users,
  ShoppingCart,
  Truck,
  Smartphone,
  Package,
  CreditCard,
  Rocket,
  MessageSquare,
  Star,
  CheckCircle2,
  Search,
  ClipboardCheck,
  Receipt,
  Clock,
  Building2,
  WifiOff,
  Headphones,
  ShieldCheck,
  Quote,
  Lock,
  Building,
  Link2,
  Scaling,
  Globe,
  Eye,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020917] text-white relative overflow-x-hidden">
      {/* Hero Section with Quote */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 text-center relative z-10 pt-24"
      >
        {/* Main Quote */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            One platform. Your brand. End-to-end control.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Launch your own fully branded eCommerce experience — with a native web portal and mobile app that connect directly to your POS, last-mile delivery, loyalty, and payments system. Built to convert, designed to scale, and ready to rank on Google.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-10xl mx-auto">
          {[
            {
              title: "SEO-Native Web & Mobile Storefronts",
              description: "No iFrames. No embeds. Just your brand, your domain, and full search visibility. Unlike competitors who use embedded menus that can't be crawled by Google, Bleaum provides a fully native, SEO-optimized web portal.",
              quote: "Our products actually show up in Google searches now.",
              icon: <Globe className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Real-Time POS Integration",
              description: "No bridges. No manual syncing. Every eCommerce order automatically syncs with inventory, delivery dispatch, Metrc compliance, and payments.",
              quote: "Everything just works together. No more double-entry.",
              icon: <RefreshCw className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Branded Mobile Apps Included",
              description: "White-labeled iOS & Android apps under your brand. Fast-loading, mobile-optimized storefront with real-time inventory sync.",
              quote: "Our customers love having our own app.",
              icon: <Smartphone className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Built-In Loyalty & Engagement",
              description: "QR code rewards, tiered loyalty programs, BOGOs, bundles, push notifications, and referral tracking — all in one system.",
              quote: "Customer retention went up 40% with the loyalty features.",
              icon: <Star className="w-12 h-12 text-blue-400" />
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 sm:p-8 md:p-10 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              {feature.quote && (
                <p className="text-blue-300 italic">"{feature.quote}"</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Competitive Advantage Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto mt-20 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Bleaum eCommerce Stands Out
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 text-lg font-semibold text-white">Feature</th>
                  <th className="pb-4 text-lg font-semibold text-green-400">Bleaum</th>
                  <th className="pb-4 text-lg font-semibold text-red-400">Most Competitors</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {[
                  {
                    feature: "SEO-friendly native web store",
                    bleaum: "Yes — Google-crawlable",
                    competitors: "Embedded menus only"
                  },
                  {
                    feature: "Fully branded mobile app",
                    bleaum: "iOS & Android included",
                    competitors: "Often unavailable"
                  },
                  {
                    feature: "POS, delivery & payment integration",
                    bleaum: "Native and automatic",
                    competitors: "Fragmented integrations"
                  },
                  {
                    feature: "Loyalty, QR rewards, referrals",
                    bleaum: "Built into system",
                    competitors: "Requires external tools"
                  },
                  {
                    feature: "Real-time inventory sync",
                    bleaum: "Instant with POS",
                    competitors: "Often delayed or partial"
                  }
                ].map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10"
                  >
                    <td className="py-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 text-green-400 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{row.bleaum}</span>
                    </td>
                    <td className="py-4 text-red-400">{row.competitors}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      </motion.section>

      {/* Demo CTA Section */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl shadow-2xl text-white text-center relative z-10 hover:shadow-blue-500/25 transition-shadow duration-300"
      >
        <div className="flex justify-center mb-6">
          <Rocket className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          See Your Branded Store Live
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          Get more than a website — get a fully integrated retail engine optimized for search, conversion, and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <button className={buttonVariants({ 
              variant: "secondary", 
              size: "lg", 
              className: "px-8 py-3 text-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            })}>
              Schedule a Demo <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/sample-store">
            <button className={buttonVariants({ 
              variant: "outline", 
              size: "lg", 
              className: "px-8 py-3 text-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 border-white text-white hover:bg-white hover:text-blue-600"
            })}>
              View Sample Store <Eye className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </motion.section> */}

      {/* Customizable Tools Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Flexible & Customizable eCommerce Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "Choose which products/categories to show",
              icon: <Package className="w-6 h-6 text-blue-400" />
            },
            {
              text: "Restrict by inventory, license, or region",
              icon: <Shield className="w-6 h-6 text-blue-400" />
            },
            {
              text: "Set custom banners and upsell logic",
              icon: <TrendingUp className="w-6 h-6 text-blue-400" />
            },
            {
              text: "Manage delivery zones and fees",
              icon: <Truck className="w-6 h-6 text-blue-400" />
            },
            {
              text: "Control payment options",
              icon: <CreditCard className="w-6 h-6 text-blue-400" />
            },
            {
              text: "All managed from your POS backend",
              icon: <ClipboardCheck className="w-6 h-6 text-blue-400" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {item.icon}
              <span className="text-lg text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Real Insights Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <BarChart3 className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Real Insights, Real Time
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          All data lives in one place, so you can act fast.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-300">
          {[
            "Breakdown by channel (POS, web, app, delivery)",
            "Loyalty and promo usage analytics",
            "Fulfillment performance and delivery metrics",
            "Customer behavior and order frequency",
            "Abandoned cart insights with follow-up tools",
            "Real-time inventory and sales reporting"
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0"/>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Born From the Front Lines Section */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-6">
          <Quote className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Every Feature Solves a Real Problem
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed italic max-w-2xl mx-auto">
          If it doesn't save time, reduce errors, or make your team faster—we don't build it. No fluff. Just what actually works.
        </p>
        <p className="text-blue-300 font-semibold">
          — Antonio Panella, Founder
        </p>
      </motion.section> */}

      {/* Secure & Compliant Section */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <div className="flex justify-center mb-8">
          <Lock className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          Secure & Compliant, End to End
        </h2>
        <ul className="list-none space-y-4 text-lg text-gray-300 max-w-2xl mx-auto">
          {[ 
            "Metrc, BioTrack & state integrations",
            "Encrypted + backed-up data",
            "Full audit trails & staff permissions",
            "PCI DSS compliant payments",
            "GDPR and CCPA privacy controls"
          ].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section> */}

      {/* Industries We Serve Section */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Building className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Who Uses Bleaum?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-300 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
             <ShoppingCart className="w-5 h-5 text-blue-400"/><span>Cannabis Retail & Delivery</span>
          </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <MessageSquare className="w-5 h-5 text-blue-400"/> <span>Pharmacies & Wellness Retail</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center space-x-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <Building2 className="w-5 h-5 text-blue-400"/><span>High-Compliance General Retail</span>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Integrations Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Link2 className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Integrations That Just Work
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-300">
          {[
            "QuickBooks",
            "Weedmaps",
            "Leafly",
            "Custom API Access"
          ].map((item, index) => (
             <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-blue-600/30 text-blue-200 rounded-full shadow-inner hover:bg-blue-600/40 transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Track Everything Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 md:mb-32 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-8">
          <Scaling className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Ready to Scale?
        </h2>
        <p className="text-xl font-semibold text-blue-400 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          With Bleaum, you get more than a website — you get a fully integrated retail engine.
        </p>
         <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          SEO-native eCommerce, branded apps, delivery, loyalty, and payments — all built in. No third-party patchwork.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "SEO-native eCommerce",
            "Branded apps and storefront", 
            "Delivery, loyalty, and payments built in",
            "Real-time POS sync"
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-white/5 rounded-lg text-blue-300 font-medium flex items-center gap-2 justify-center"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What Customers Say Section - Auto-scrolling horizontal */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto mb-20 md:mb-32 relative z-10"
      >
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <MessageSquare className="w-16 h-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            What Real Customers Say
          </h2>
        </div>
        
        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
          
          {/* Auto-scrolling testimonials */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * 7] // Adjust based on number of testimonials
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 36, // Adjust speed here (higher = slower)
                ease: "linear",
              },
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[
              {
                quote: "Our products actually show up in Google searches now. The SEO-native storefront was a game changer.",
                author: "Casey, Oklahoma",
                company: "Trading Post"
              },
              {
                quote: "Having our own branded app made us feel like a real tech company. Customers love it.",
                author: "Abigail, California,", 
                company: "Park Social"
              },
              {
                quote: "The loyalty program doubled our repeat customers. Everything syncs perfectly with our POS.",
                author: "AJ, Oklahoma",
                company: "Happy Root"
              },
              {
                quote: "Real-time inventory sync means no more overselling online. It just works.",
                author: "Will, Oklahoma",
                company: "Gold Leaf"
              },
              // Duplicated testimonials for endless loop effect
              {
                quote: "Our products actually show up in Google searches now. The SEO-native storefront was a game changer.",
                author: "Samantha, Michigan",
                company: "Peoples Place"
              },
              {
                quote: "Having our own branded app made us feel like a real tech company. Customers love it.",
                author: "Abigail, California,", 
                company: "Park Social"
              },
              {
                quote: "The loyalty program doubled our repeat customers. Everything syncs perfectly with our POS.",
                author: "AJ, Oklahoma",
                company: "Happy Root"
              },
              {
                quote: "Real-time inventory sync means no more overselling online. It just works.",
                author: "Will, Oklahoma",
                company: "Gold Leaf"
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed whitespace-pre-line">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Talk to Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-12 sm:mb-20 md:mb-32 bg-gradient-to-br from-white/10 via-cyan-900/10 to-blue-900/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 px-3 sm:px-6 py-3 sm:py-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Talk to an Integration Specialist</h2>
          <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium">Ready to launch your branded eCommerce experience? Let's make it happen.</p>
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
              <option value="">What type of business are you:</option>
              <option value="none">Marketing</option>
            
              <option value="leafly">Ecommerce</option>
              <option value="custom">Delivery</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="business-description" className="block mt-4 mb-1 text-white text-sm sm:text-base font-medium">Describe your business</label>
            <textarea id="business-description" name="business-description" rows={3} className="appearance-none w-full rounded-lg border border-slate-300 bg-white/80 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell us a bit about your business..." />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <button type="submit" className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-bold py-3 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-200 shadow-lg">Get My Branded Store</button>
        </form>
        <div className="px-2 sm:px-6 md:px-16 pb-6 sm:pb-8">
          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-center">
            By submitting this form, you're agreeing to receive marketing communications from Bleaum. For information on our privacy practices and commitment to protecting your privacy, please review our <a href="/privacy" className="underline text-cyan-400 hover:text-blue-400">privacy policies</a>.
          </p>
        </div>
      </motion.section>
    </div>
  );
}