import Link from "next/link";
import {
  TruckIcon,
  ZapIcon,
  MapPinIcon,
  PackageIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  UserIcon,
  BarChart2Icon,
  ShieldCheckIcon,
  SmartphoneIcon,
  MessageSquareIcon,
  SmileIcon,
  LayersIcon,
  DollarSign,
  ArrowRightIcon,
  SparklesIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

function FeatureCard({ icon, title, description, features, gradient }: FeatureCardProps) {
  return (
    <div className="group relative p-6 sm:p-8 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${gradient} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3 text-slate-300">
              <div className="mt-0.5 sm:mt-1">
                <CheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
              </div>
              <span className="text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-[#020917] text-white">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-10 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-6">
            <div className="p-2 sm:p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl shadow-lg">
              <TruckIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-6 text-white leading-tight px-2">Bleaum Last-Mile Delivery</h1>
          <div className="max-w-3xl mx-auto mb-4 sm:mb-8 px-2 sm:px-4">
            <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-cyan-300">Real-time routes. Fewer headaches. Happy customers.</h2>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">We built Bleaum Delivery after too many nights tracking down lost drivers, fixing manifest mistakes, and fielding "where's my order?" calls. Now, your team can see every order, every route, and every delivery—live.</p>
          </div>
          <Link href="/demo">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'Button',
                    event_label: 'Demo'
                  });
                }
              }}
            >
              <span className="flex items-center gap-2 sm:gap-3 justify-center">
                Book a Demo
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <FeatureCard
            icon={<RefreshCwIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="From Order to Door—No Guesswork"
            description="No more switching tabs or copying addresses. Orders flow straight from your POS to the driver app."
            features={[
              "Orders go right from POS to driver app—no manual entry",
              "Inventory updates in real time as you pack and deliver", 
              "Routes, manifests, and compliance—all in one place"
            ]}
            gradient="from-purple-500 to-pink-500"
          />

          <FeatureCard
            icon={<SmartphoneIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="A Driver App Drivers Actually Like"
            description="No more lost drivers or missed stops. Focus on delivering, not troubleshooting."
            features={[
              "Turn-by-turn navigation built in",
              "Route optimization for multiple stops",
              "One-tap status: On Route, Delivered, Delayed",
              "Digital ID check and signature capture"
            ]}
            gradient="from-green-500 to-emerald-500"
          />

          <FeatureCard
            icon={<MapPinIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Zones, GPS, and Full Control"
            description="Set your own rules—by zone, GPS, time, or order value. Deliver where and when you want."
            features={[
              "Zone-based or GPS-based route generation",
              "Dynamic delivery windows based on availability",
              "Scheduled or on-demand delivery—your choice",
              "Adjust pricing, fees, and limits per region"
            ]}
            gradient="from-orange-500 to-red-500"
          />

          <FeatureCard
            icon={<PackageIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Inventory on Wheels—No More Guesswork"
            description="Track every gram, every stop, every time. Compliance is built in."
            features={[
              "Real-time inventory syncing with POS",
              "Vehicle-specific limits and compliance caps",
              "Automated return-to-store workflows",
              "Full traceability from pack to delivery"
            ]}
            gradient="from-indigo-500 to-purple-500"
          />
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <FeatureCard
            icon={<ZapIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Deliver More, Stress Less"
            description="Whether you've got one driver or a fleet, deliver more, faster—with less stress."
            features={[
              "Assign and batch multiple orders per route",
              "Auto-prioritize based on time sensitivity",
              "Customize workflows per driver or store",
              "Review daily performance with built-in analytics"
            ]}
            gradient="from-cyan-500 to-blue-500"
          />

          <FeatureCard
            icon={<SmileIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Customers Know Exactly What's Happening"
            description="No more 'where's my order?' calls. Real-time updates and driver ETAs."
            features={[
              "Real-time order updates via SMS or app",
              "Driver ETAs and delivery tracking",
              "Custom notifications when order is on the way",
              "Reorder in one tap from past delivery history"
            ]}
            gradient="from-yellow-500 to-orange-500"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="p-6 sm:p-12 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl">
                <TruckIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-2">Ready for Delivery That Just Works?</h2>
            <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-8 max-w-2xl mx-auto px-2">Want to see how Bleaum Delivery could work for your team? Let's set up a quick demo and show you the difference.</p>
            <Link href="/demo">
              <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'Button',
                      event_label: 'Demo'
                    });
                  }
                }}
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  <span className="hidden sm:inline">Schedule a Demo to See It in Action</span>
                  <span className="sm:hidden">Schedule a Demo</span>
                  <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}