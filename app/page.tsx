"use client"
import { 
  ArrowRight, 
  Shield,
  Users,
  ShoppingCart,
  Smartphone,
  CheckCircle2,
  Clock,
  Headphones,
  Quote,
  Play,
  MapPin,
  Star,
  Award,
  Target,
  Rocket,
  BarChart3,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Eye,
  Zap,
  Receipt,
  Building2,
  WifiOff,
  ShieldCheck,
  Lock,
  Link2,
  ScrollText,
  Bell,
  CreditCard,
} from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const heroMessages = [
    "Trusted by 300+ retailers and specialty retailers.",
    "98% of teams say Bleaum saves them hours every week.",
    "Built by operators, for operators—no more clunky POS.",
  ]
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % heroMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer for section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number.parseInt(entry.target.getAttribute("data-section") || "0"))
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#020917] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          data-section="0"
          className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Background image for hero section */}
          <div className="absolute inset-0 z-0">
            <img
              src="/background.png"
              alt="Background"
              className="w-full h-full object-cover opacity-60 blur-sm scale-105"
              style={{ filter: 'blur(2px)', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020917]/80 to-[#020917]/90" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Hero Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-blue-200 font-medium text-sm sm:text-base">Trusted by 300+ Retailers</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Where Retail Runs{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Smart
                </motion.span>
              </motion.h1>
              
              {/* Animated Tagline */}
              <motion.div
                className="h-12 sm:h-16 mb-8 sm:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-base sm:text-xl md:text-2xl text-blue-200 leading-relaxed max-w-4xl mx-auto px-4"
                  >
                    {heroMessages[currentMessage]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/demo">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold overflow-hidden shadow-2xl w-full sm:w-auto"
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag('event', 'click', {
                            event_category: 'Button',
                            event_label: 'Demo'
                          });
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                        Get Live Demo
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <button
                    className="group border-2 border-blue-500/50 text-blue-200 px-8 py-3 sm:px-10 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'click', {
                          event_category: 'Button',
                          event_label: 'Demo'
                        });
                      }
                      window.location.href = '/demo';
                    }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                      Watch Demo
                    </span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  { number: "300+", label: "Retailers" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "24/7", label: "Support" },
                ].map((stat: { number: string; label: string }, index: number) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-blue-300 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom--4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-[16/9]"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-blue-400 transition-colors"
                  onClick={() => setShowVideo(false)}
                >
                  <X className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full rounded-xl sm:rounded-2xl shadow-2xl"
                  style={{ border: "none" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Preview Section */}
        <section data-section="1" className="py-12 sm:py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                See Bleaum in{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Action</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                Watch how we transform retail operations from chaos to clockwork
              </p>
            </motion.div>

            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
                onClick={() => window.location.href = '/demo'}
                style={{ backgroundImage: 'url(/IMAGE.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur" />
                <motion.button
                  className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl border-4 border-white/30 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg ml-1" />
                </motion.button>
                {/* Video overlay info */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Platform Demo</h3>
                    <p className="text-blue-200 text-xs sm:text-sm">See how Bleaum streamlines retail operations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Expertise Gallery Section */}
        <section data-section="2" className="py-16 sm:py-24 relative rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-3xl" />
        
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our Professional{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                Explore our gallery of successful projects and see how we elevate businesses through strategic solutions
              </p>
            </motion.div>

            {/* Gallery with enhanced scroll arrows */}
            <div className="relative">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const el = document.getElementById("expertise-gallery-scroll")
                    if (el) el.scrollBy({ left: -350, behavior: "smooth" })
                  }
                }}
                className="hidden lg:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl border-2 border-white/20 hover:scale-110 hover:border-cyan-300 transition-all duration-200 opacity-90 hover:opacity-100"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const el = document.getElementById("expertise-gallery-scroll")
                    if (el) el.scrollBy({ left: 350, behavior: "smooth" })
                  }
                }}
                className="hidden lg:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl border-2 border-white/20 hover:scale-110 hover:border-cyan-300 transition-all duration-200 opacity-90 hover:opacity-100"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div
                id="expertise-gallery-scroll"
                className="flex gap-4 sm:gap-6 overflow-x-auto snap-x scroll-smooth scrollbar-hide pb-4"
                style={{ scrollBehavior: "smooth" }}
              >
                {[
                  {
                    src: "/2.png",
                    alt: "pos",
                    title: "All-in-One POS System",
                    description: "Complete point-of-sale solution",
                    href: "/grow/point-of-sale",
                  },
                  {
                    src: "/delivery.png",
                    alt: "Last Mile Delivery Solutions",
                    title: "Last Mile Delivery",
                    description: "Smart routing & tracking",
                    href: "/grow/delivery",
                  },
                  {
                    src: "/bleaumpay.png",
                    alt: "Bleaum Pay",
                    title: "Bleaum Pay",
                    description: "One Payment Platform. Fully Covered",
                    href: "/grow/payments",
                  },
                  {
                    src: "/3.png",
                    alt: "Branded Mobile App Screenshot",
                    title: "Branded Mobile App",
                    description: "iOS & Android app ",
                    href: "/grow/ecommerce",
                  },
                  {
                    src: "/5.png",
                    alt: "Human Support Staff Assisting Customer",
                    title: "Human Support",
                    description: "Real people, real solutions",
                    href: "/company/support",
                  },
                  {
                    src:"/realtime.png",
                    alt: "Multi-Location Management",
                    title: "Multi-Location Ready",
                    description: "Scale across multiple locations",
                    href: "/grow/point-of-sale",
                  },
                  {
                    src: "/7.png",
                    alt: "Secure & Compliant Platform",
                    title: "Secure & Compliant",
                    description: "Enterprise-grade security",
                    href: "/operations/automated-compilance",
                  },
                  {
                    src: "/4.png",
                    alt: "Smart Receipts Drag and Drop Graphic",
                    title: "Smart Receipts",
                    description: "Dynamic receipts for every order",
                    href: "/grow/point-of-sale",
                  },
                  {
                    src:"/inventory.png",
                    alt: "Real-Time Inventory Tracking",
                    title: "Real-Time Inventory",
                    description: "Live inventory management",
                    href: "/operations/inventory-management",
                  },
                ].map((img: { src: string; alt: string; title: string; description: string; href: string }, idx: number) => (
                  <Link href={img.href} key={idx} className="block group cursor-pointer">
                    <motion.div
                      className="relative flex-shrink-0 snap-start group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 group-hover:border-blue-500/50 transition-all duration-500">
                        <img
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {img.title}
                          </h3>
                          <p className="text-blue-200 text-sm leading-relaxed">{img.description}</p>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section data-section="3" className="py-20 sm:py-32 relative" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Everything You Need,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Nothing You Don't
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                From point of sale to last-mile delivery, we've built the complete retail ecosystem
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Smart POS System",
                  description: "Lightning-fast checkout with real-time inventory sync",
                  features: ["Offline capability", "Custom receipts", "Multi-payment support"],
                },
                {
                  icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Last-Mile Delivery",
                  description: "Smart routing and real-time tracking for your drivers",
                  features: ["Route optimization", "OTP verification", "Live tracking"],
                },
                {
                  icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Real-Time Analytics",
                  description: "Know your business inside and out with live dashboards",
                  features: ["Sales insights", "Inventory alerts", "Performance metrics"],
                },
                {
                  icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Compliance Ready",
                  description: "Stay audit-ready with built-in compliance tools",
                  features: ["Metrc integration", "Audit trails", "Staff permissions"],
                },
                {
                  icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Team Management",
                  description: "Empower your team with role-based access and training",
                  features: ["User roles", "Training modules", "Performance tracking"],
                },
              ].map((feature: { icon: JSX.Element; title: string; description: string; features: string[]; src?: string; alt?: string }, index: number) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-blue-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.features.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3 text-blue-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Add image for Branded Mobile App only */}
                      {feature.src && (
                        <img
                          src={feature.src}
                          alt={feature.alt || feature.title}
                          className="w-full h-48 object-cover rounded-xl mt-6"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-Time Inventory Section */}
        <section data-section="4" className="py-20 sm:py-32 relative bg-gradient-to-br from-blue-900/10 to-cyan-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Real-Time Inventory,{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Real Easy
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                  Know exactly what's on your shelf—anytime, anywhere.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Run midday audits without closing",
                    "Track shrinkage in real-time",
                    "Catch theft before it happens",
                    "No more counting blind",
                  ].map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
                  <p className="text-blue-200 italic text-base sm:text-lg leading-relaxed">
                    "With Bleaum, we don't wait until close to count—we count while we sell. It's a game changer."
                  </p>
                  <div className="mt-3 sm:mt-4 text-blue-400 font-semibold text-sm sm:text-base">— AJ, Happy Root</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                      <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                      <div className="text-xl sm:text-2xl font-bold mb-1">Live</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Inventory View</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                      <div className="text-xl sm:text-2xl font-bold mb-1">Instant</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Updates</div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-white font-semibold text-sm sm:text-base">Current Stock Levels</span>
                      <span className="bg-green-400 text-green-900 px-2 py-1 rounded text-xs font-bold animate-pulse">
                        LIVE
                      </span>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { name: "Blue Dream 1/8oz", stock: 24, status: "good" },
                        { name: "OG Kush Pre-rolls", stock: 12, status: "good" },
                        { name: "Sativa Gummies", stock: 3, status: "low" },
                        { name: "CBD Tincture", stock: 18, status: "good" },
                      ].map((product: { name: string; stock: number; status: string }, idx: number) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-blue-100 text-xs sm:text-sm truncate flex-1 mr-2">{product.name}</span>
                          <span
                            className={`font-semibold text-xs sm:text-sm flex-shrink-0 ${
                              product.status === "low" ? "text-yellow-300" : "text-white"
                            }`}
                          >
                            {product.stock} units {product.status === "low" && "⚠️"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Last Mile Delivery Section */}
        <section data-section="5" className="py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Smart Routing</h3>
                    <p className="text-blue-100 text-sm sm:text-base">AI-optimized delivery routes in real-time</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold mb-1">OTP</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Verification</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold mb-1">Live</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Tracking</div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Active Deliveries</div>
                    <div className="space-y-2">
                      {[
                        { driver: "AJ", orders: 3, eta: "15 min" },
                        { driver: "Perry", orders: 2, eta: "8 min" },
                        { driver: "Andrew", orders: 4, eta: "22 min" },
                      ].map((delivery: { driver: string; orders: number; eta: string }, idx: number) => (
                        <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-blue-100">{delivery.driver}</span>
                          <span className="text-white">{delivery.orders} orders</span>
                          <span className="text-green-300">{delivery.eta}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Last Mile,{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Locked In
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                  Drivers get a connected app. You get smart routes, live tracking, OTP verification, and full control.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Connected driver mobile app",
                    "AI-powered route optimization",
                    "Real-time GPS tracking",
                    "Secure OTP verification system",
                    "Automated customer notifications",
                  ].map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
                  <p className="text-blue-200 italic text-base sm:text-lg leading-relaxed">
                    "We went from chaos to clockwork overnight. Our delivery times improved by 40%."
                  </p>
                  <div className="mt-3 sm:mt-4 text-blue-400 font-semibold text-sm sm:text-base">— Collin, Park Social</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section data-section="6" className="py-20 sm:py-32 relative bg-gradient-to-br from-blue-900/10 to-cyan-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Your Branded{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Mobile App
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                  Launch a custom storefront without the custom development cost. Get your own iOS & Android app in
                  days, not months.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Live inventory synchronization",
                    "Secure in-app payment processing",
                    "Real-time delivery tracking",
                    "Custom branding & design",
                    "Push notification campaigns",
                    "Customer loyalty programs",
                  ].map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
                  <p className="text-blue-200 italic text-base sm:text-lg leading-relaxed">
                    "It's like having our own app development team—without the headache or the cost."
                  </p>
                  <div className="mt-3 sm:mt-4 text-blue-400 font-semibold text-sm sm:text-base">— Hugo, Go Green</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Native Mobile Experience</h3>
                    <p className="text-blue-100 text-sm sm:text-base">iOS & Android ready with app store deployment</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                      <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">Seamless Shopping</div>
                        <div className="text-blue-100 text-xs sm:text-sm">Cart, checkout, and order tracking</div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">Secure Payments</div>
                        <div className="text-blue-100 text-xs sm:text-sm">Multiple payment methods supported</div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                      <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">Smart Notifications</div>
                        <div className="text-blue-100 text-xs sm:text-sm">Order updates and promotions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Smart Receipts Section */}
        <section data-section="7" className="py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <Receipt className="w-8 h-8 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Smart Receipt System</h3>
                    <p className="text-blue-100 text-sm sm:text-base">Print, text, or email automatically based on customer preference</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <div className="text-white font-semibold mb-2 text-sm sm:text-base">Receipt Delivery Options:</div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
                        <div className="bg-white/10 rounded-xl p-2 sm:p-3">
                          <div className="font-semibold">Print</div>
                          <div className="text-blue-100 text-xs">Thermal printer</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 sm:p-3">
                          <div className="font-semibold">Text</div>
                          <div className="text-blue-100 text-xs">SMS delivery</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 sm:p-3">
                          <div className="font-semibold">Email</div>
                          <div className="text-blue-100 text-xs">Digital copy</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <div className="text-white font-semibold mb-2 text-sm sm:text-base">Compliance Features:</div>
                      <div className="text-blue-100 text-xs sm:text-sm space-y-1">
                        <div>✓ Tax calculations included</div>
                        <div>✓ Regulatory compliance built-in</div>
                        <div>✓ Custom branding options</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Receipts That{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Just Work
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                  Print, text, or email. Itemized, branded, tax-compliant. Your customers choose how they want their
                  receipt.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Fully synced with POS & inventory systems",
                    "Custom branding and logo integration",
                    "Automatic tax compliance calculations",
                    "Multiple delivery method options",
                    "Digital receipt storage and retrieval",
                    "Environmental impact reduction",
                  ].map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
                  <p className="text-blue-200 italic text-base sm:text-lg leading-relaxed">
                    "Customers love choosing how they get their receipts. It's the little things that make a big
                    difference."
                  </p>
                  <div className="mt-3 sm:mt-4 text-blue-400 font-semibold text-sm sm:text-base">— Cam, Project Releaf</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Teams Switch Section */}
        <section data-section="8" className="py-20 sm:py-32 relative bg-gradient-to-br from-blue-900/10 to-cyan-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Why Teams Switch to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bleaum</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                See why retailers choose Bleaum over the competition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "POS Onboard in 24 hours",
                  icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "Get up and running fast with our streamlined setup process",
                },
                {
                  title: "Multi-location ready",
                  icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "Scale seamlessly across multiple locations and states",
                },
                {
                  title: "Work on Any Device",
                  icon: <WifiOff className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "From storefront to sidewalk—your POS works on whatever device you've got.",
                },
                {
                  title: "Real support, real fast",
                  icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "Human help when you need it, not chatbots",
                },
                {
                  title: "Fully compliant, always",
                  icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "Stay audit-ready 24/7 with built-in compliance tools",
                },
                {
                  title: "Transparent pricing",
                  icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                  description: "No hidden fees, no surprises, just honest pricing",
                },
              ].map((feature: { title: string; icon: JSX.Element; description: string }, index: number) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full text-center group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section data-section="9" className="py-20 sm:py-32 relative" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Built by{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Operators
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                We've been in the trenches. We know the pain points. That's why we built something different.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mb-4 sm:mb-6" />
                  <blockquote className="text-xl sm:text-2xl text-white font-medium mb-6 sm:mb-8 leading-relaxed">
                    "Every feature we build comes from real problems we've solved in the field. That's what makes Bleaum
                    different."
                  </blockquote>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/6.png" alt="Antonio Panella" className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm sm:text-base">Antonio Panella</div>
                      <div className="text-blue-400 text-sm sm:text-base">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                {[
                  {
                    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Our Mission",
                    description: "Empower small businesses with enterprise-grade tools that actually work",
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Our Vision",
                    description: "A world where running a retail business is simple, profitable, and stress-free",
                  },
                  {
                    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
                    title: "Our Values",
                    description: "Transparency, reliability, and genuine care for our customers' success",
                  },
                ].map((item: { icon: JSX.Element; title: string; description: string }, index: number) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-blue-200 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: "300+", label: "Happy Retailers", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
                { number: "50%", label: "Time Saved", icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> },
                { number: "99.9%", label: "Uptime", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> },
                { number: "24/7", label: "Support", icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" /> },
              ].map((stat: { number: string; label: string; icon: JSX.Element }, index: number) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-blue-300 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Secure & Compliant Section */}
        <section data-section="10" className="py-20 sm:py-32 relative bg-gradient-to-br from-blue-900/10 to-cyan-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Secure & Compliant,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  End to End
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                Built with enterprise-grade security and compliance from day one
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "State Integrations",
                  description: "Metrc, BioTrack & state compliance systems",
                  icon: <Link2 className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                },
                {
                  title: "Data Security",
                  description: "Encrypted, backed-up, and SOC 2 compliant",
                  icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                },
                {
                  title: "Audit Ready",
                  description: "Full audit trails & granular staff permissions",
                  icon: <ScrollText className="w-6 h-6 sm:w-8 sm:h-8 text-white-400" />,
                },
              ].map((feature: { title: string; description: string; icon: JSX.Element }, index: number) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-full group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section data-section="11" className="py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Industries We{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Serve</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                Specialized solutions for regulated and high-compliance retail environments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Cannabis Retail & Delivery",
                  description: "Complete seed-to-sale tracking with state compliance",
                  icon: <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />,
                },
                {
                  title: "Pharmacies & Wellness",
                  description: "Secure handling of controlled substances and patient data",
                  icon: <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />,
                },
                {
                  title: "High-Compliance Retail",
                  description: "Any retail environment requiring detailed tracking and reporting",
                  icon: <Building2 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />,
                },
              ].map((industry: { title: string; description: string; icon: JSX.Element }, index: number) => (
                <motion.div
                  key={industry.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-full group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base">{industry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          data-section="12"
          className="py-20 sm:py-32 relative bg-gradient-to-br from-blue-900/10 to-cyan-900/10"
          id="testimonials"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Customers Say
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                Real stories from real retailers who've transformed their business with Bleaum
              </p>
            </motion.div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section data-section="13" className="py-10 sm:py-16 relative overflow-hidden rounded-3xl mx-2 sm:mx-4 lg:mx-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:40px_40px] rounded-3xl"></div>
        
          <div className="relative max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 text-center rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
              <p className="text-base sm:text-lg text-blue-100 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto">
                Join 300+ retailers who've already made the switch. See the difference in just 24 hours.
              </p>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/demo">
                    <button className="bg-white text-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                      Schedule Your Demo
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/demo">
                    <button className="border-2 border-white/50 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
                      Talk to Sales
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Bleaum cut our inventory time from 4 hours to 30 minutes. Our team actually enjoys using it now!",
      name: "Perry Jones",
      company: "Centered by Design",
      location: "Tulsa, Oklahoma",
      rating: 5,
    },
    {
      quote: "The mobile app launched our online presence overnight. Sales increased 40% in the first month.",
      name: "Andrew H",
      company: "Go Green",
      location: "Ontario, Canada",
      rating: 5,
    },
    {
      quote: "We switched from a big-name POS and never looked back. Bleaum just works—no more headaches.",
      name: "AJ",
      company: "Happy Root",
      location: "Oklahoma City, Oklahoma",
      rating: 5,
    },
    {
      quote: "The compliance features saved us during our last audit. Everything was organized and ready to go.",
      name: "Angelica",
      company: "Park Social",
      location: "Alameda, California",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_: undefined, i: number) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-4 sm:mb-6" />

          <blockquote className="text-lg sm:text-2xl text-white font-medium mb-6 sm:mb-8 leading-relaxed px-4">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">
                {testimonials[currentIndex].name
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')}
              </span>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm sm:text-base">{testimonials[currentIndex].name}</div>
              <div className="text-blue-400 text-sm sm:text-base">{testimonials[currentIndex].company}</div>
              <div className="text-blue-300 text-xs sm:text-sm">{testimonials[currentIndex].location}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {testimonials.map((_: { quote: string; name: string; company: string; location: string; rating: number }, index: number) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-400' : 'bg-blue-800'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}