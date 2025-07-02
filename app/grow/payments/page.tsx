import Link from "next/link";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  UserIcon,
  BarChart2Icon,
  ZapIcon,
  WalletIcon,
  LockIcon,
  DollarSignIcon,
  SmileIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShoppingCartIcon,
  HeartIcon,
  CalendarIcon,
  SettingsIcon,
  LinkIcon,
  LeafIcon,
  TruckIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  BanknoteIcon,
  QrCodeIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
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
        
        {description && (
          <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
        )}
        
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3 text-slate-300">
              <div className="mt-0.5 sm:mt-1">
                <CheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
              </div>
              <span className="text-sm sm:text-base group-hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: feature }}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#020917] text-white">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-10 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-6">
            <div className="p-2 sm:p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl shadow-lg">
              <CreditCardIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-6 text-white leading-tight px-2">Bleaum Pay</h1>
          <div className="max-w-3xl mx-auto mb-4 sm:mb-8 px-2 sm:px-4">
            <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-cyan-300">One Payment Platform. Every Business. Fully Covered</h2>
            <div className="max-w-2xl mx-auto mb-6 p-3 sm:p-6 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50">
              <p className="text-white italic text-sm sm:text-lg mb-2 sm:mb-3">"From high-compliance verticals like cannabis and hemp to everyday retail, wellness, and service industries — Bleaum Pay delivers a complete suite of payment solutions that adapt to your business model, risk profile, and customer expectations."</p>
              <p className="text-xs sm:text-sm text-slate-400">— Collin, Park Social</p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <FeatureCard
            icon={<WalletIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="No Cash, No Problem"
            description="Let your customers pay how they want—right from their bank, online or in-store. No more fumbling for cash, no more awkward 'cash only' signs."
            features={[
              "100% secure",
              "Fully compliant", 
              "Ready to use—no extra hardware, no downloads"
            ]}
            gradient="from-purple-500 to-pink-500"
          />

          <FeatureCard
            icon={<TrendingUpIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Bigger Orders, Happier Customers"
            features={[
              "Stores using cashless payments see 25–30% higher order values",
              "Repeat customers come back faster with easy checkout",
              "More loyalty, less friction—at the counter and online"
            ]}
            gradient="from-green-500 to-emerald-500"
          />

          <FeatureCard
            icon={<ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Ditch the Cash Drawer"
            features={[
              "Protect your team and your store—less cash means less risk",
              "Cut costs on cash pickups, storage, and mistakes",
              "Automate your reporting—no more manual entry or late-night reconciliations"
            ]}
            gradient="from-orange-500 to-red-500"
          />

          <FeatureCard
            icon={<ZapIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="One-Tap Setup for Shoppers"
            description="After a quick one-time setup, your customers can pay with a single tap—online or in-store. No cards, no PINs, no confusion."
            features={[
              "Quick one-time customer setup",
              "Single tap payments in-store and online",
              "No cards, no PINs, no confusion"
            ]}
            gradient="from-indigo-500 to-purple-500"
          />
        </div>

        {/* Security & Integration Section */}
        <div className="mb-8 sm:mb-16">
          <FeatureCard
            icon={<LockIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Safe, Streamlined & Smart"
            features={[
              "<b>Security First:</b> End-to-end encrypted payments, built for cannabis regulations",
              "<b>Efficiency Built-In:</b> Linked directly to your POS and Bleaum Ecommerce—no data entry, no syncing headaches",
              "<b>Completely Integrated:</b> Manage everything in one place: inventory, orders, payments, and customers"
            ]}
            gradient="from-cyan-500 to-blue-500"
          />
        </div>

        {/* Industries We Serve Section */}
        <div className="mb-8 sm:mb-16">
          <div className="p-6 sm:p-10 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center">
            <h2 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8 text-white flex items-center justify-center gap-2">
              <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" /> Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 max-w-4xl mx-auto mb-6 sm:mb-8">
              <div className="bg-slate-900/40 rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-md border border-slate-700/40">
                <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-1 sm:mb-2" />
                <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2 sm:mb-3">Regulated Verticals</h3>
                <ul className="list-none text-slate-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li className="flex items-center gap-1.5 sm:gap-2"><UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Cannabis Retailers</li>
                  <li className="flex items-center gap-1.5 sm:gap-2"><LeafIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Hemp & CBD Retailers</li>
                  <li className="flex items-center gap-1.5 sm:gap-2"><ZapIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Vape / Smoke Shops</li>
                </ul>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-md border border-slate-700/40">
                <ShoppingCartIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-1 sm:mb-2" />
                <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2 sm:mb-3">Non-Regulated Verticals</h3>
                <ul className="list-none text-slate-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  {/* <li className="flex items-center gap-1.5 sm:gap-2"><ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Retail (Apparel,Electronics, etc.)</li> */}
                  {/* <li className="flex items-center gap-1.5 sm:gap-2"><HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Wellness & Fitness Studios</li> */}
                  {/* <li className="flex items-center gap-1.5 sm:gap-2"><UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Beauty Salons, Barbershops, Spas</li> */}
                  {/* <li className="flex items-center gap-1.5 sm:gap-2"><SmileIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Food & Beverage</li> */}
                  <li className="flex items-center gap-1.5 sm:gap-2"><CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Event Services</li>
                  <li className="flex items-center gap-1.5 sm:gap-2"><BarChart2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />Digital & Professional Services</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Whether you're navigating compliance or scaling fast in a low-risk category, Bleaum Pay has the tech, rails, and experience to support you.
            </p>
          </div>
        </div>

        {/* Why Businesses Choose Bleaum Pay Section */}
        <div className="mb-8 sm:mb-16">
          <div className="p-6 sm:p-10 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center">
            <h2 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8 text-white flex items-center justify-center gap-2">
              <LockIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" /> Why Businesses Choose Bleaum Pay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-2">
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <SettingsIcon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Modular Setup</div>
                <div className="text-slate-300 text-sm">Choose the solutions that match your business model</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <ShieldCheckIcon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Compliance-Ready</div>
                <div className="text-slate-300 text-sm">Built for complex industries, but flexible for all</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <LinkIcon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Integrated Platform</div>
                <div className="text-slate-300 text-sm">Syncs with Bleaum POS & eCommerce — no double entry</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <DollarSignIcon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">No Hidden Fees</div>
                <div className="text-slate-300 text-sm">Transparent pricing, no long-term contracts</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <BarChart2Icon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Real-Time Reporting</div>
                <div className="text-slate-300 text-sm">Live sales, funding, and performance insights</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 flex flex-col items-center border border-slate-700/40 shadow-sm">
                <UserIcon className="w-7 h-7 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Customer-Centric UX</div>
                <div className="text-slate-300 text-sm">ACH, Wallet, Cards — however they want to pay</div>
              </div>
            </div>
          </div>
        </div>

        {/* A Payment Solution for Every Type of Business Section */}
        <div className="mb-8 sm:mb-16">
          <div className="p-6 sm:p-10 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center flex flex-col items-center">
            <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8 text-white">A Payment Solution for Every Type of Business</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full">
              {/* Credit Card Terminals */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCardIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">Credit Card Terminals</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">In-store swipe, chip, tap payments</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">Accept all 4 card types via secure hardware</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Retail, Wellness, Cannabis (where allowed)</div>
              </div>
              {/* Cashless ATM (POB) */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSignIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">Cashless ATM (POB)</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">PIN debit workaround for restricted industries</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">Customer enters PIN to "withdraw" exact amount</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Cannabis retailers</div>
              </div>
              {/* Virtual ACH / Pay-by-Bank */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BanknoteIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">Virtual ACH / Pay-by-Bank</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">Cardless, cashless, direct-from-bank transactions</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">One-time setup, QR or link-based checkout, same-day funds</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Delivery, Subscriptions, eComm, Repeat Buyers</div>
              </div>
              {/* QR Code Wallet */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <QrCodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">QR Code Wallet</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">App-based, tap-to-pay solution</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">Customer scans QR code, confirms bank-linked payment</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Cannabis, Retail, Loyalty Programs</div>
              </div>
              {/* eComm + POS Integration */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">eComm + POS Integration</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">Unified payments across online and in-store</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">Orders, payments, and inventory synced in real time</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Businesses using Bleaum POS or eComm</div>
              </div>
              {/* Standard Payment Processing */}
              <div className="group relative p-4 sm:p-8 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <WalletIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">Standard Payment Processing</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">Use Case</div>
                <div className="text-slate-300 text-xs sm:text-sm mb-2">Traditional payments for non-regulated businesses</div>
                <div className="text-blue-200 text-xs sm:text-sm mb-1 font-semibold">How It Works</div>
                <div className="text-slate-400 text-xs mb-2">Swipe, tap, and online checkout through standard rails</div>
                <div className="text-cyan-300 text-xs font-semibold">Best for: Retail, Beauty, Health, Events, Food & Bev</div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Workflows Section */}
        <div className="mb-8 sm:mb-16">
          <div className="p-6 sm:p-10 bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center flex flex-col items-center">
            <SettingsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8 text-white">Workflows</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {/* retail shop (Retail) */}
              <div className="bg-slate-800/60 rounded-xl p-6 flex flex-col items-center border border-slate-700/40 shadow-md">
                <ShoppingCartIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Retail Shop</div>
                <div className="text-slate-300 text-sm text-center">Credit Terminal + Virtual ACH + Cashless ATM</div>
              </div>
              {/* Delivery-Only Cannabis */}
              <div className="bg-slate-800/60 rounded-xl p-6 flex flex-col items-center border border-slate-700/40 shadow-md">
                <TruckIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Delivery-Only Cannabis</div>
                <div className="text-slate-300 text-sm text-center">Virtual ACH + QR Wallet</div>
              </div>
              {/* Wellness Studio */}
              <div className="bg-slate-800/60 rounded-xl p-6 flex flex-col items-center border border-slate-700/40 shadow-md">
                <HeartIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Wellness Studio</div>
                <div className="text-slate-300 text-sm text-center">Credit Terminal + eCommerce</div>
              </div>
              {/* Retail Boutique */}
              <div className="bg-slate-800/60 rounded-xl p-6 flex flex-col items-center border border-slate-700/40 shadow-md">
                <ShoppingBagIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">Retail Boutique</div>
                <div className="text-slate-300 text-sm text-center">Credit Terminal + Standard Processing</div>
              </div>
              {/* High-Ticket B2B */}
              <div className="bg-slate-800/60 rounded-xl p-6 flex flex-col items-center border border-slate-700/40 shadow-md">
                <BriefcaseIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-1">High-Ticket B2B</div>
                <div className="text-slate-300 text-sm text-center">Virtual ACH + Card Processing</div>
              </div>
            </div>
          </div>
        </div>

        {/* One Platform. All Payments. Section */}
        <div className="mb-8 sm:mb-16">
          <div className="p-6 sm:p-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl sm:rounded-3xl shadow-xl text-center flex flex-col items-center">
            <BarChart2Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">One Platform. All Payments.</h3>
            <p className="text-base sm:text-lg text-blue-100 mb-2 max-w-2xl mx-auto">No matter your vertical, Bleaum Pay offers a frictionless, secure, and fully scalable way to get paid.</p>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">From POS and eCommerce to loyalty and reporting — it's all in one platform, built for you.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="p-6 sm:p-12 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-slate-700/50">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="p-2 sm:p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl">
                <CreditCardIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-2">Ready to Simplify your Payments?</h2>
            <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-8 max-w-2xl mx-auto px-2">Want to see how Bleaum Pay could work in your retail shop? Let's set up a quick demo and show you the difference.</p>
            <Link href="/demo">
              <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl transition-all duration-300 transform hover:scale-105 touch-manipulation">
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  <span className="hidden sm:inline">Get a Demo of Bleaum Pay</span>
                  <span className="sm:hidden">Get Demo</span>
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