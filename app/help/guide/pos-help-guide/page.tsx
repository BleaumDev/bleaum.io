'use client';

import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function PosHelpGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* POS Help Guide Section */}
          <section id="pos-help-guide" className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">POS Help Guide</h1>
            {/* <Image src="/poshelpguide.jpg" alt="POS Help Guide" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" /> */}
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Side Settings Panel (Spinning Gear Icon)</h2>
              <p className="text-gray-300 mb-4">The Side Settings panel has three main tabs:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Queue</li>
                <li>Activity</li>
                <li>Personalize</li>
              </ul>
              <p className="text-gray-300">Each tab helps you manage the flow of your shop, your customers, and your POS experience.</p>
            </div>

            {/* Queue Tab Section */}
            <div id="queue-tab" className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Queue Tab</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <div className="flex justify-center">
                <Image src="/addtoqueue.jpg" alt="Add to Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Add Customer Section */}
            <div id="add-customer" className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Add Customer</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Upload customer medical ID or driver&apos;s license manually, scan ID, or upload images.</p>
              <div className="flex justify-center">
                <Image src="/addcustomer.jpg" alt="Add Customer" width={600} height={300} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Customer Queue Section */}
            <div id="customer-queue" className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Customer Queue</h2>
              <p className="text-gray-300 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <div className="flex justify-center">
                <Image src="/customerqueue.jpg" alt="Customer Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Personalize Tab Section */}
            <div id="personalize-tab" className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Personalize Tab</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Customize your POS interface to suit your style and workflow:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Appearance Settings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Light or Dark Mode: Choose your preferred theme.</li>
                    <li>Color Options: In Light Mode, select different color themes for accents.</li>
                    <li>Navigation Style: Adjust navigation layout according to preference.</li>
                    <li>Layout Options: Fit different screen sizes and devices.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Queue Settings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Yellow Border Timer:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Set a time (in minutes) after which a customer rectangle turns yellow in the queue — warning wait time.</li>
                      </ul>
                    </li>
                    <li>Red Border Timer:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Set a time (in minutes) after which a customer rectangle turns red — critical wait time.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-2">This helps your team quickly identify customers who have been waiting too long.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Default POS Screen</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Choose your default view:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Tablet Mode: Optimized for compact touchscreen devices.</li>
                        <li>Computer Mode: Full-size POS view for desktops or large screens.</li>
                      </ul>
                    </li>
                    <li>Switch at any time using the top right corner button on the POS screen.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Default Print Type</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Choose how you print:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Browser Print: Print directly from the browser.</li>
                        <li>Hardware Print: Use a specified printer device.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <Image src="/appearancesetting.jpg" alt="Appearance Settings" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Side Settings Panel gives you powerful tools to manage customer flow, track shop activity, and personalize the POS experience for smooth daily operations.</p>
            </div>
          </section>
        </Typography>
      </div>
    </div>
  );
}