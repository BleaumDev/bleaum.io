'use client';

import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function DashboardOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* Dashboard Overview Section */}
          <section id="dashboard-overview" className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Dashboard Overview</h1>
            <p className="text-gray-300 mb-6">The Dashboard gives you a full snapshot of store performance, tasks, sales, and system activity — all in one interactive place.</p>

            {/* Top Section */}
            <div id="top-section" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Top Section: Welcome & Quick Overview</h2>
              <Image src="/dashboard.jpg" alt="Dashboard top section with welcome message and summaries" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Welcome Message: A quick greeting with user personalization.</li>
                <li>Due Tasks Summary: View any pending tasks directly on login.</li>
                <li>New Orders Summary: Instantly see if new orders have been placed.</li>
              </ul>
            </div>

            {/* Middle Section: Interactive Graphs */}
            <div id="interactive-graphs" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Middle Section: Interactive Graphs</h2>
              <Image src="/dashboardmidsection.jpg" alt="Dashboard middle section with charts and quick links" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-100">Chart</th>
                      <th className="px-4 py-2 text-left text-gray-100">Purpose</th>
                      <th className="px-4 py-2 text-left text-gray-100">Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Top Products / Categories / Brands</td>
                      <td className="px-4 py-2 text-gray-300">Visualizes top-selling products, categories, or brands.</td>
                      <td className="px-4 py-2 text-gray-300">Dropdown to switch view. Select different timelines for broader or narrower insights.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Conversion Chart</td>
                      <td className="px-4 py-2 text-gray-300">Tracks customer flow: how many were added to the queue vs. how many completed a purchase.</td>
                      <td className="px-4 py-2 text-gray-300">Dropdown to switch between timelines (Past 7, 14, 30 days, 3 months, 6 months).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Popular Times</td>
                      <td className="px-4 py-2 text-gray-300">Shows busiest times based on historical order data.</td>
                      <td className="px-4 py-2 text-gray-300">Hover over bars to see exact numbers. Great for staffing and scheduling insights.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Total Revenue Chart</td>
                      <td className="px-4 py-2 text-gray-300">Displays total revenue performance over time.</td>
                      <td className="px-4 py-2 text-gray-300">Dropdown to adjust timeline (similar to Conversion Chart).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-300 mt-4">All charts are interactive. Hover over points to see detailed data.</p>
            </div>

            {/* Quick Links Section */}
            <div id="quick-links" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Middle Section: Key Quick Links</h2>
              <p className="text-gray-300 mb-4">Below the charts, you&apos;ll find six quick links:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Products</li>
                <li>Tasks</li>
                <li>Employees</li>
                <li>Orders</li>
                <li>Customers</li>
                <li>Deals</li>
              </ul>
              <p className="text-gray-300 mt-4">Clicking any link takes you directly to that section for deeper management.</p>
            </div>

            {/* Shortcuts Section */}
            <div id="shortcuts" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Shortcuts Section</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-100">Shortcut</th>
                      <th className="px-4 py-2 text-left text-gray-100">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Customer Queue</td>
                      <td className="px-4 py-2 text-gray-300">Quickly jump to view and manage the customer queue.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Task List</td>
                      <td className="px-4 py-2 text-gray-300">Add new tasks, track pending/completed tasks, view priority, assigned user, creation and due dates.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Registers</td>
                      <td className="px-4 py-2 text-gray-300">View and manage registers. Toggle status ON/OFF. Under &quot;Action&quot;, see associated drawers, open/close a drawer, create deposits or withdrawals.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Metrc Alerts</td>
                      <td className="px-4 py-2 text-gray-300">Monitor all sales, transfer, and communication issues with Metrc. Each event has a &quot;+&quot; button to expand and view detailed information, including links to resolve the issue.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Typography>
      </div>
    </div>
  );
} 