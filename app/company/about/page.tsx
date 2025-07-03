// import Link from "next/link";
// import { BriefcaseBusinessIcon, GlobeIcon, LeafIcon, LightbulbIcon, UsersIcon, SparklesIcon, ScaleIcon } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-10 max-w-3xl">
//       <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Bleaum</h1>
//       <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">A Team of Retailers, Builders, and Problem-Solvers</h2>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         Bleaum started in 2021 with a simple goal: make running a retail shop or specialty retail shop less stressful and more profitable. Our founders spent years in the trenches—managing inventory, dealing with compliance headaches, and trying to keep customers happy. We knew there had to be a better way.
//       </p>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         Today, Bleaum is trusted by over 150 retailers across the US. We help teams save hours every week, reduce costly mistakes, and focus on what matters: growing their business and serving their communities.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <SparklesIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Why We Built Bleaum</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         We saw friends and colleagues struggle with clunky POS systems, endless spreadsheets, and confusing regulations. We built Bleaum to give operators a single, easy-to-use platform that actually helps—not hinders—them. Our software is designed to be intuitive, reliable, and flexible enough to handle the real-world challenges of retail.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <LightbulbIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Mission</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         We believe small businesses are the backbone of every community. Our mission is to help them thrive by making technology accessible, affordable, and genuinely helpful. Whether you're a single-location retail shop or a fast-growing retail chain, we're here to help you scale without losing your edge.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <LeafIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Built for Cannabis, Ready for More</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         We cut our teeth in cannabis retail, where compliance and efficiency are everything. Our tools help retailers stay audit-ready, keep shelves stocked, and deliver a great customer experience. But our platform works just as well for wellness shops, specialty grocers, and other regulated retailers.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <UsersIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Real Results, Real People</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         "Bleaum helped us cut inventory time in half and made compliance a breeze. Their support team actually listens and solves problems fast."<br />
//         <span className="italic text-blue-700 dark:text-blue-300">— Jamie R., GreenLeaf retail shop, Denver</span>
//       </p>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         Our customers tell us they love how easy Bleaum is to use, and how much time it saves their staff. We're proud to be a partner, not just a vendor.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <BriefcaseBusinessIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Looking Ahead</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         We're constantly improving, adding new features, and listening to feedback. Our roadmap is shaped by the needs of real operators. If you have an idea or a pain point, we want to hear from you.
//       </p>

//       <div className="flex items-center gap-3 mb-4 mt-8">
//         <ScaleIcon className="w-8 h-8 text-blue-500" />
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Let's Grow Together</h2>
//       </div>
//       <p className="mb-6 text-gray-700 dark:text-gray-300">
//         Bleaum is more than software—it's a community of builders, operators, and dreamers. If you're ready to simplify your operations and grow your business, let's talk.
//       </p>
//       <Link href="/demo">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Book a Demo</button>
//       </Link>
//     </div>
//   );
// } 


import Link from "next/link"
import {
  BriefcaseBusinessIcon,
  LeafIcon,
  LightbulbIcon,
  UsersIcon,
  SparklesIcon,
  ScaleIcon,
  ArrowRight,
  Quote,
  Target,
  Building2,
  Award,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020917]">
      {/* Professional Hero Section */}
      <div className="relative overflow-hidden">
        {/* Remove the following overlay that causes the dark rectangle */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div> */}

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-blue-400 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-cyan-400 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-2 sm:px-4 py-12 sm:py-24">
          <div className="max-w-5xl mx-auto">
            {/* Company badge */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                <span className="text-blue-100 font-medium text-xs sm:text-base">Established 2021</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Bleaum</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <h2 className="text-base sm:text-xl md:text-2xl font-medium mb-4 sm:mb-8 text-slate-200 leading-relaxed">
                  Empowering retailers with intelligent solutions for
                  <span className="text-blue-300 font-semibold"> compliance</span>,
                  <span className="text-cyan-300 font-semibold"> inventory</span>, and
                  <span className="text-blue-300 font-semibold"> growth</span>
                </h2>

                <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Since 2021, we've been the trusted technology partner for retailers and specialty retailers,
                  transforming complex operations into streamlined success stories.
                </p>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">300+</div>
                <div className="text-slate-300 font-medium text-xs sm:text-base">Trusted Retailers</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">50%</div>
                <div className="text-slate-300 font-medium text-xs sm:text-base">Time Savings</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-slate-300 font-medium text-xs sm:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute -bottom-1 left-0 right-0 h-10 sm:h-20 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 max-w-6xl">
        {/* Company Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Our Story</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base">
                Bleaum started in 2021 with a simple goal: make running a retail shop or specialty retail shop less
                stressful and more profitable. Our founders spent years in the trenches—managing inventory, dealing with
                compliance headaches, and trying to keep customers happy.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                We knew there had to be a better way.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
                <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Today</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base">
                Today, Bleaum is trusted by over 300+ retailers across the US. We help teams save hours every week,
                reduce costly mistakes, and focus on what matters: growing their business and serving their communities.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>300+ Retailers</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Hours Saved Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-20">
          {/* Why We Built Bleaum */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100">Why We Built Bleaum</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              We saw friends and colleagues struggle with clunky POS systems, endless spreadsheets, and confusing
              regulations. We built Bleaum to give operators a single, easy-to-use platform that actually helps.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                <LightbulbIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100">Our Mission</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              We believe small businesses are the backbone of every community. Our mission is to help them thrive by
              making technology accessible, affordable, and genuinely helpful.
            </p>
          </div>

          {/* Built for Cannabis */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <LeafIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100">Built for Cannabis</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              We cut our teeth in cannabis retail, where compliance and efficiency are everything. Our platform works
              for retailers, wellness shops, and other regulated retailers.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-3 sm:top-6 left-3 sm:left-6">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200 opacity-50" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8 justify-center">
                <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <UsersIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold">Real Results, Real People</h3>
              </div>
              <blockquote className="text-base sm:text-2xl font-medium mb-4 sm:mb-8 leading-relaxed">
                "Bleaum helped us cut inventory time in half and made compliance a breeze. Their support team actually
                listens and solves problems fast."
              </blockquote>
              <cite className="text-blue-200 text-base sm:text-lg">— Dominique, Green Releaf </cite>
              <p className="mt-4 sm:mt-8 text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
                Our customers tell us they love how easy Bleaum is to use, and how much time it saves their staff. We're
                proud to be a partner, not just a vendor.
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-white/10 rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-32 sm:w-60 h-32 sm:h-60 bg-white/5 rounded-full blur-2xl sm:blur-3xl"></div>
          </div>
        </div>

        {/* Future & Growth Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                <BriefcaseBusinessIcon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Looking Ahead</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3 sm:mb-6 text-sm sm:text-base">
              We're constantly improving, adding new features, and listening to feedback. Our roadmap is shaped by the
              needs of real operators. If you have an idea or a pain point, we want to hear from you.
            </p>
            <div className="flex items-center gap-1 sm:gap-2 text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-base">
              <span>Continuous Innovation</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                <ScaleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Let's Grow Together</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3 sm:mb-6 text-sm sm:text-base">
              Bleaum is more than software—it's a community of builders, operators, and dreamers. If you're ready to
              simplify your operations and grow your business, let's talk.
            </p>
            <div className="flex items-center gap-1 sm:gap-2 text-teal-600 dark:text-teal-400 font-medium text-xs sm:text-base">
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-4">Ready to Get Started?</h3>
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 mb-4 sm:mb-8 max-w-2xl mx-auto">
              Join over 300+ retailers who trust Bleaum to streamline their operations and grow their business.
            </p>
            <Link href="/demo">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg">
                <span className="flex items-center gap-2 sm:gap-3">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
