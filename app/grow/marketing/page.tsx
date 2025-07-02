'use client';

import Link from "next/link";
import { 
  RocketIcon, 
  MailIcon, 
  BarChart2Icon, 
  TargetIcon, 
  SparklesIcon, 
  UsersIcon,
  ArrowRight,
  CheckCircle2,
  Quote,
  Zap,
  Heart,
  MessageSquare,
  TrendingUp,
  Gift,
  Calendar,
  Bell,
  Star,
  Users,
  Smartphone,
  Receipt,
  ShoppingCart
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function BleaumMarketingPage() {
  const marketingFeatures = [
    {
      title: "Smart Email & SMS Campaigns",
      description: "Send the right message at the right time. No marketing degree required—just results.",
      icon: <MailIcon className="w-12 h-12 text-blue-400" />,
      quote: "Our open rates doubled, and so did our repeat customers.",
      features: ["Drag-and-drop campaign builder", "Pre-built templates", "A/B testing built-in"],
      highlight: "Coming Soon"
    },
    {
      title: "Customer Segmentation That Works",
      description: "Target based on real behavior—purchase history, visit frequency, favorite products.",
      icon: <TargetIcon className="w-12 h-12 text-blue-400" />,
      quote: "Finally, promotions that actually convert.",
      features: ["Smart customer segments", "Behavioral triggers", "Purchase-based targeting"],
      highlight: "Coming Soon"
    },
    {
      title: "Loyalty Programs That Stick",
      description: "Keep customers coming back with rewards they actually want—and you can actually afford.",
      icon: <Heart className="w-12 h-12 text-blue-400" />,
      quote: "Our regulars spend 40% more since we launched loyalty.",
      features: ["Points & rewards system", "VIP tiers", "Birthday & anniversary perks"],
      highlight: "Built-In"
    },
    {
      title: "Real-Time Results",
      description: "See what's working instantly. Track opens, clicks, sales, and ROI—all in one dashboard.",
      icon: <BarChart2Icon className="w-12 h-12 text-blue-400" />,
      quote: "I know exactly which campaigns pay for themselves.",
      features: ["Live campaign tracking", "Revenue attribution", "Customer journey insights"],
      highlight: "Live Data"
    }
  ];

  const automationFeatures = [
    {
      title: "Welcome New Customers",
      description: "First-time visitor gets a welcome text with a special offer",
      icon: <Gift className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Win Back Lost Customers",
      description: "Haven't seen them in 30 days? Auto-send a 'we miss you' deal",
      icon: <Calendar className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Birthday & Anniversary Rewards",
      description: "Automatic special offers on important dates",
      icon: <Star className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Low Stock Alerts to VIPs",
      description: "Give your best customers first dibs on limited products",
      icon: <Bell className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Slow Day Boosters",
      description: "Tuesday looking quiet? Auto-send flash sales to nearby customers",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Loyalty Point Reminders",
      description: "Nudge customers when they're close to earning rewards",
      icon: <Zap className="w-6 h-6 text-blue-400" />
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
          <RocketIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Turn customers into regulars
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Stop blasting everyone with the same promo. Send the right message, to the right people, at the perfect moment—and watch your repeat business soar.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          {[
            "Personal messages that convert",
            "Loyalty programs that work", 
            "Results you can actually see"
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

        {/* Customer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-4 sm:p-6 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-4" />
          <p className="text-base sm:text-lg text-gray-300 italic mb-2 sm:mb-4">
            "We used to send out the same promo to everyone. Now, our regulars get birthday deals, first-timers get a welcome text, and our slow days are actually busy. It's made a real difference."
          </p>
          <p className="text-blue-300 font-semibold">— AJ, Happy Root</p>
        </motion.div>

        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "default", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 mb-2"
          })}>
            See Marketing That Works <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
          {marketingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <span className="text-sm text-blue-300 bg-blue-600/20 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
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

              <div className="border-t border-white/10 pt-4">
                <p className="text-blue-300 italic">"{feature.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Automation Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300"
      >
        <div className="flex justify-center mb-8">
          <Zap className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
           Marketing on Autopilot
        </h2>
       
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Set it once, watch it work. Our smart automation and mobile tools handle the heavy lifting—so you can focus on growing your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* Smart Triggers & Automated Campaigns */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Zap className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1"> Smart Triggers & Automated Campaigns</h3>
            <p className="text-gray-300 text-sm">Smart triggers, push notifications, and seamless campaigns that work across web, app, and in-store</p>
          </div>
          {/* Push Notifications on Mobile */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Smartphone className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1"> Push Notifications on Mobile</h3>
            <p className="text-gray-300 text-sm">Reach customers instantly through personalized, scheduled push alerts in your branded mobile app.</p>
          </div>
          {/* Welcome New Customers */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Gift className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Welcome New Customers</h3>
            <p className="text-gray-300 text-sm">First-time visitor? Send a warm welcome with an automatic offer via text or app notification.</p>
          </div>
          {/* Win Back Lost Customers */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Calendar className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Win Back Lost Customers</h3>
            <p className="text-gray-300 text-sm">Haven't seen them in 30 days? Auto-send a "We miss you" deal to bring them back.</p>
          </div>
          {/* Birthday & Anniversary Rewards */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Star className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Birthday & Anniversary Rewards</h3>
            <p className="text-gray-300 text-sm">Send personalized messages and gifts tied to key dates—fully automated.</p>
          </div>
          {/* BOGO & Targeted Deals */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Receipt className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">BOGO & Targeted Deals</h3>
            <p className="text-gray-300 text-sm">Run mix-and-match promotions, category-specific discounts, or time-sensitive flash sales across both web and app.</p>
          </div>
          {/* Loyalty QR Code Scanning */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Smartphone className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Loyalty QR Code Scanning</h3>
            <p className="text-gray-300 text-sm">Let customers scan in-store with your mobile app to earn and redeem loyalty points instantly.</p>
          </div>
          {/* Loyalty Point Reminders */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Bell className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Loyalty Point Reminders</h3>
            <p className="text-gray-300 text-sm">Nudge customers when they're close to rewards—automatically.</p>
          </div>
          {/* Low Stock Alerts for VIPs */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <Gift className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Low Stock Alerts for VIPs</h3>
            <p className="text-gray-300 text-sm">Let your best customers know when top products are about to run out.</p>
          </div>
          {/* Slow Day Boosters */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Slow Day Boosters</h3>
            <p className="text-gray-300 text-sm">Having a quiet Tuesday? Auto-send limited-time offers to nearby customers via app or SMS.</p>
          </div>
          {/* Syncs with Your Website & Storefront */}
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
            <ShoppingCart className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Syncs with Your Website & Storefront</h3>
            <p className="text-gray-300 text-sm">Every campaign works across your online menu, ecommerce, and in-store checkout—automatically.</p>
          </div>
        </div>
      </motion.section>

      {/* Success Metrics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-cyan-600/20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10"
      >
        <div className="flex justify-center mb-8">
          <TrendingUp className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-center">
          See What Success Looks Like
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">
          {[
            {
              metric: "40%",
              description: "Average increase in repeat customers",
              icon: <Users className="w-8 h-8 text-blue-400" />
            },
            {
              metric: "2.3x",
              description: "Higher push notification open rates vs industry average",
              icon: <MessageSquare className="w-8 h-8 text-blue-400" />
            },
            {
              metric: "24 hours",
              description: "To set up your first campaign",
              icon: <RocketIcon className="w-8 h-8 text-blue-400" />
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.metric}</div>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mobile-First Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-20 p-8 sm:p-10 md:p-12 bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300 text-center"
      >
        <div className="flex justify-center mb-6">
          <Smartphone className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Built for How Customers Really Shop
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
          Your customers live on their phones. With push notifications, mobile alerts, and real-time offers across your app and website, you can reach them instantly—whether they're browsing at home or passing your storefront.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center">
            <Bell className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Push Notifications</h3>
            <p className="text-gray-300 text-sm">Send targeted messages straight to their lock screen through your custom mobile app—fast, personal, and action-driven.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center">
            <ShoppingCart className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="font-bold text-white mb-1">Website & App Sync</h3>
            <p className="text-gray-300 text-sm">Every promo, deal, or flash alert goes live across your app and website automatically—no double entry, no delays.</p>
          </div>
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
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Build Real Loyalty?
        </h2>
        <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Hundreds of retailers use Bleaum to turn one-time buyers into regulars. See how it could work for you in just 24 hours.
        </p>
        <Link href="/demo">
          <button className={buttonVariants({ 
            variant: "secondary", 
            size: "lg", 
            className: "w-full sm:w-auto mx-auto px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 mb-2"
          })}>
            Schedule Your Personalized Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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