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
  Scaling
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
            Retail, the way you wish it worked
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You know the pain: late-night inventory, lost sales, tech that never quite fits. We built Bleaum for shops like yours—real people, real problems, real wins.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-10xl mx-auto">
          {[
            {
              title: "Inventory in Minutes, Not Hours",
              description: "No more 2am counts. See what's on your shelf, catch shrinkage, and audit on the fly—while you're open.",
              quote: "I used to dread inventory. Now it's just part of the day.",
              icon: <Search className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Delivery That Doesn't Miss",
              description: "Drivers get real routes, customers get live updates, and you get fewer calls asking 'where's my order?'",
              quote: "We finally stopped losing orders to bad addresses.",
              icon: <Truck className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Your Store, In Their Pocket",
              description: "Launch a branded app—no dev team needed. Customers order, pay, and track in real time.",
              quote: "Our regulars love the app. It's like we're always open.",
              icon: <Smartphone className="w-12 h-12 text-blue-400" />
            },
            {
              title: "Receipts That Make Sense",
              description: "Print, text, or email. Branded, tax-compliant, and always synced.",
              quote: "We keep the track of receipts, everything related to you",
              icon: <Receipt className="w-12 h-12 text-blue-400" />
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

        {/* Why Teams Switch Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto mt-20 p-8 sm:p-10 md:p-12 bg-white/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Real Shops Switch to Bleaum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Onboard in 24 hours",
                icon: <Clock className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Multi-location, no extra fees",
                icon: <Building2 className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Works on Any Device",
                icon: <WifiOff className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Support that actually picks up",
                icon: <Headphones className="w-6 h-6 text-blue-400" />
              },
              {
                text: "Compliance built in, not bolted on",
                icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
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
      </motion.section>

      {/* Demo CTA Section */}
      <motion.section 
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
          See It For Yourself
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          24 hours. No pressure. Just real answers from real people.
      </p>
      <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "px-8 py-3 text-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          })}>
            Schedule a Demo <ArrowRight className="w-5 h-5" />
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
        {/* <div className="flex items-center justify-center gap-4">
          <Star className="w-8 h-8 text-blue-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Bleaum.io — Run Better. Sell Smarter.
          </span>
          <Star className="w-8 h-8 text-blue-400" />
        </div> */}
      </motion.section>

      {/* Born From the Front Lines Section */}
      <motion.section 
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
          {/* I ran a retail shop. I've done the late nights, the broken printers, the "where's my order?" calls. Bleaum is what I wish I'd had: simple, powerful, and made for real shops. */}
          If it doesn't save time, reduce errors, or make your team faster—we don't build it. No fluff. Just what actually works.
        </p>
        <p className="text-blue-300 font-semibold">
          — Antonio Panella, Founder
        </p>
      </motion.section>

      {/* Secure & Compliant Section */}
      <motion.section 
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
            "Full audit trails & staff permissions"
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
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section 
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
      </motion.section>

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
          Track Everything. Scale Easily.
        </h2>
        <p className="text-xl font-semibold text-blue-400 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          From seed to sale, Bleaum grows with you.
        </p>
         <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          One shop or multi-state—stay lean, fast, and focused.
        </p>
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
                quote: "We used to spend 4 hours doing inventory. Now it's 20 minutes—midday.",
                author: "Perry Jones, Tulsa, Oklahoma",
                company: "Centered by Design"
              },
              {
                quote: "Our drivers love it. And so do our customers. Real-time tracking changed everything.",
                author: "Andrew H. , Ontario, Canada",
                company: "Go Green"
              },
              {
                quote: "We're never switching back. The compliance features alone saved us from three audits.",
                author: "AJ, Oklahoma City, Oklahoma",
                company: "Happy Root"
              },
              {
                quote: "Onboarding was literally 24hours. We were selling the same day.",
                author: "Angelica, Alameda, California",
                company: "Park Social"
              },
              // Duplicated testimonials for endless loop effect
              {
                quote: "We used to spend 4 hours doing inventory. Now it's 20 minutes—midday.",
                author: "Perry Jones, Tulsa, Oklahoma",
                company: "Centered by Design"
              },
              {
                quote: "Our drivers love it. And so do our customers. Real-time tracking changed everything.",
                author: "Andrew H. , Ontario, Canada",
                company: "Go Green"
              },
              {
                quote: "We're never switching back. The compliance features alone saved us from three audits.",
                author: "AJ, Oklahoma City, Oklahoma",
                company: "Happy Root"
              },
              {
                quote: "Onboarding was literally 24hours. We were selling the same day.",
                author: "Angelica, Alameda, California",
                company: "Park Social"
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
          {/* <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white mx-auto mb-1 sm:mb-2" /> */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Talk to Us</h2>
          <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium">We're real people. We've run shops. We get it. Let's talk.</p>
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
              <option value="">What type of partnership are you interested in?*</option>
              <option value="integration">Integration</option>
              <option value="non-integration">Non-Integration</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <button type="submit" className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-bold py-3 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-200 shadow-lg">Let's go!</button>
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