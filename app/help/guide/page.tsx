import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function HelpGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* Side Settings Panel Section */}
          <section className="mb-16">
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
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Queue Tab</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <Image src="/addtoqueue.jpg" alt="Add to Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Add Customer Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Add Customer</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Upload customer medical ID or driver&apos;s license manually, scan ID, or upload images.</p>
              <Image src="/addcustomer.jpg" alt="Add Customer" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Customer Queue Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Customer Queue</h2>
              <p className="text-gray-300 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <Image src="/customerqueue.jpg" alt="Customer Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Activity Tab Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Activity Tab</h2>
              <p className="text-gray-300 mb-4">Track every action happening in your shop.</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-slate-700 rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-100">What It Shows</th>
                      <th className="px-4 py-2 text-left text-gray-100">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Activity Type</td>
                      <td className="px-4 py-2 text-gray-300">Description of the action taken (e.g., Customer Added, Product Edited).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Date and Time</td>
                      <td className="px-4 py-2 text-gray-300">Precise time of each action.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-300">Every change, addition, deletion, and update in the system is logged for transparency and accountability.</p>
            </div>

            {/* Personalize Tab Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
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

          {/* User Dropdown Menu Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">User Dropdown Menu</h1>
            <p className="text-gray-300 mb-6">When you click on your Username (top right of the screen), a dropdown menu will appear with the following options:</p>

            {/* Clock In/Out Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Clock In / Clock Out</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">PIN-based clocking ensures secure and accurate time tracking.</p>
              <div className="flex justify-center">
                <Image src="/clockin.jpg" alt="Clock In" width={350} height={200} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Profile Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Profile Section</h2>
              <Image src="/profilsection.jpg" alt="Profile Section" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <p className="text-gray-300 mb-4">Inside Profile, there are three tabs:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Personal Details</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Upload your profile picture.</li>
                    <li>Edit your name and phone number.</li>
                    <li>Upload additional documents you want attached to your profile.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">PIN Settings</h3>
                  <Image src="/personalpin.jpg" alt="Personal PIN settings" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Set or change your PIN used for Clock In/Out and order processing.</li>
                    <li>How:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Enter your current password.</li>
                        <li>Create or update your new PIN.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">QR Code</h3>
                  <Image src="/qrcode%20.jpg" alt="QR Code" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Generate a new QR code tied to your profile.</li>
                    <li>Print your QR code if desired.</li>
                    <li>Uses of QR Code:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Quickly sign into the platform without typing your organization key, username, or password.</li>
                        <li>Manager Approvals: Scan your QR code when a manager approval is needed.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Share Mode Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Turn on Share Mode</h2>
              <Image src="/turnonsharemode.jpg" alt="Turn on Share Mode" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Purpose:</h3>
                  <p className="text-gray-300">If multiple teammates share the same tablet or computer, Share Mode allows smooth user transitions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">How it Works:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>When processing an order, you will be asked to input your PIN.</li>
                    <li>The order will be logged under the teammate who entered the PIN.</li>
                    <li>Keeps orders and clocking accurate even when using the same device.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 mt-4">Perfect for busy retail environments or shift-based teams.</p>
            </div>

            {/* Logout Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Logout</h2>
              <Image src="/logout.jpg" alt="Logout option in dropdown" width={300} height={200} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Click Logout to immediately sign out of the platform.</li>
                <li>You will be redirected to the login page.</li>
              </ul>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The User Dropdown Menu empowers team members to securely clock in/out, manage their profile and PIN, quickly log in with QR codes, enable device sharing, and securely log out — all from one easy-to-access spot.</p>
            </div>
          </section>

          {/* Action Icons Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Action Icons</h1>
            <Image src="/bolt.jpg" alt="Lightning bolt, bell, and chat icons" width={400} height={100} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <p className="text-gray-300 mb-6">Directly below the user&apos;s name, you&apos;ll see three action icons. Each one gives quick access to important real-time tools.</p>

            {/* Lightning Bolt Icon Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Lightning Bolt Icon — Activity Center</h2>
              <p className="text-gray-300 mb-4">Purpose: View and track all actions taken across the system.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Click the Lightning Bolt to open the Main Activity Page.</li>
                <li>Features:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>View every action recorded in the system (customer check-ins, edits, sales, updates, etc.).</li>
                    <li>Filter by Date:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>All actions</li>
                        <li>Today</li>
                        <li>Yesterday</li>
                        <li>Custom Date Range</li>
                      </ul>
                    </li>
                    <li>Filter by Activity Type for more detailed searches (e.g., Product Edited, Order Completed).</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">Helps you quickly monitor what&apos;s happening across the platform at any time.</p>
            </div>

            {/* Bell Icon Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Bell Icon — Notifications</h2>
              <p className="text-gray-300 mb-4">Purpose: See real-time alerts for incoming activities.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Click the Bell to view:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>New orders coming into the system.</li>
                    <li>Requests (such as order updates, manager approvals, or inventory alerts).</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">Never miss a customer request, order, or important system update.</p>
            </div>

            {/* Chat Icon Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Chat Icon — Messaging Center</h2>
              <p className="text-gray-300 mb-4">Purpose: Communicate instantly with Customers and Teammates.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Click the Chat Bubble icon to access chat functions.</li>
                <li>Inside the chat center:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Customer Tab:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Send and receive messages directly with customers.</li>
                      </ul>
                    </li>
                    <li>Teammate Tab:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Internal messaging with team members.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">Streamlines communication inside the store — faster responses, better teamwork.</p>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Lightning Bolt, Bell, and Chat icons give you instant access to activity history, new notifications, and direct messaging — all designed to keep you connected, informed, and efficient throughout the day.</p>
            </div>
          </section>

          {/* Dashboard Overview Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Dashboard Overview</h1>
            <p className="text-gray-300 mb-6">The Dashboard gives you a full snapshot of store performance, tasks, sales, and system activity — all in one interactive place.</p>

            {/* Top Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Top Section: Welcome & Quick Overview</h2>
              <Image src="/dashboard.jpg" alt="Dashboard top section with welcome message and summaries" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Welcome Message: A quick greeting with user personalization.</li>
                <li>Due Tasks Summary: View any pending tasks directly on login.</li>
                <li>New Orders Summary: Instantly see if new orders have been placed.</li>
              </ul>
            </div>

            {/* Middle Section: Interactive Graphs */}
            <div className="mb-8">
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
            <div className="mb-8">
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
            <div className="mb-8">
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

          {/* Right Sidebar: Recent Activities Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Right Sidebar: Recent Activities</h1>
            
            <div className="mb-8">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>A real-time feed showing the most recent actions taken across the system.</li>
                <li>Quickly review activities like new customers added, orders processed, updates made, and more.</li>
              </ul>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Dashboard brings together customer flow, product performance, staff tasks, order management, and compliance alerts — helping you run the store smarter, faster, and more effectively, all from one centralized screen.</p>
            </div>
          </section>

          {/* Fulfillment Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Fulfillment Section</h1>
            <p className="text-gray-300 mb-6">The Fulfillment area in the sidebar contains four powerful tools for managing your in-store and online operations:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
              <li>POS (Point of Sale)</li>
              <li>Order Ahead</li>
              <li>Orders</li>
              <li>Returns</li>
            </ul>

            {/* POS (Point of Sale) Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. POS (Point of Sale)</h2>
              <Image src="/processorder.jpg" alt="POS tabs" width={600} height={150} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              <p className="text-gray-300 mb-4">The POS page has four tabs to manage all customer orders and transactions:</p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-100">Tab</th>
                      <th className="px-4 py-2 text-left text-gray-100">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Process Order</td>
                      <td className="px-4 py-2 text-gray-300">Create new orders (In-Store, Pickup, Delivery).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Orders</td>
                      <td className="px-4 py-2 text-gray-300">View order history sorted by the most recent created date. Click any Order Number to open a side panel showing order details and a Print Receipt button.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Returns</td>
                      <td className="px-4 py-2 text-gray-300">Manage returns using the same layout and features as the Orders tab.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Uploads</td>
                      <td className="px-4 py-2 text-gray-300">Store important customer documents like tax exemption forms, driver&apos;s licenses, images, and medical IDs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Add Customers Subsection (within POS) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Add Customers</h3>
                <Image src="/addcustomer1.jpg" alt="Select Customer and Add buttons" width={600} height={100} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                <Image src="/addcustomer2.jpg" alt="Add Customer modal" width={600} height={400} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Add Button (&quot;Add&quot;): Create a new customer profile from scratch.</li>
                  <li>Customer Search Dropdown: Search customers by:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>First Name</li>
                      <li>Last Name</li>
                      <li>Email</li>
                      <li>Phone Number</li>
                    </ul>
                  </li>
                  <li>Anonymous Order Option:
                    Place an order without linking to a customer — ideal for recreational or non-medical sales.
                  </li>
                </ul>
              </div>

              {/* Line Items Section (within POS) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Line Items Section (Product Selection)</h3>
                <Image src="/scanandmanage.jpg" alt="Scan Receipt Barcode and Manage Cart Items buttons" width={600} height={100} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                <p className="text-gray-300 mb-2">Two Ways to Add Products:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Scan the Product Barcode, or</li>
                  <li>Click &quot;Manage Cart Items&quot; to browse the full catalog.</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Inside Manage Cart Items:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Search by:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Product Name</li>
                      <li>Category</li>
                      <li>Brand</li>
                    </ul>
                  </li>
                  <li>Tools Available:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Filters (High-to-Low, Low-to-High, Alphabetical Order)</li>
                      <li>Star Icon: Quickly view Top 25 Products</li>
                      <li>Clear Filters button</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Product Info Displayed:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Stock availability</li>
                  <li>THC/CBD percentages</li>
                  <li>Product Matrix Alert:
                    Products that are matrices have a red badge on the image — clicking opens package selection.
                  </li>
                </ul>
              </div>

              {/* Customer Profile Side Panel (within POS) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Customer Profile Side Panel</h3>
                <p className="text-gray-300 mb-2">On the right-hand side while managing products:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Customer Data:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Name, Customer Type, Customer Groups</li>
                      <li>Top 3 Purchased Items</li>
                      <li>Top 3 Categories</li>
                      <li>Top 3 Brands (All linkable)</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mb-2">At the bottom of this panel:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Product Data (Quantity and Remove button for items added to cart)</li>
                </ul>
              </div>

              {/* Order Summary & Checkout (within POS) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Order Summary & Checkout</h3>
                <Image src="/ordersummaryandcheckout.jpg" alt="Order Summary and Checkout" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Top Summary Actions:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Miscellaneous Charge: Add any extra charge.</li>
                  <li>Miscellaneous Discount: Apply additional discounts.</li>
                  <li>Notes: Add special customer order notes.</li>
                  <li>Custom Date/Time: Backdate or future-date an order manually.</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Cart Details:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Items added + Deals applied</li>
                  <li>Subtotal breakdown</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Loyalty, Coupons, Store Credit:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Loyalty Points: Enter $ amount, click Apply.</li>
                  <li>Available Coupons: Select coupon and Apply.</li>
                  <li>Store Credit: Enter amount, click Apply.</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Tips Section:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Pre-configured percentages (e.g., 10%, 15%, 20%) or Custom Tip entry.</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Payment Method Section:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Choose payment method, input Amount Received, calculate Change, and select Change Method.</li>
                </ul>
              </div>

              {/* Bottom POS Actions Subsection (within POS) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Bottom POS Actions:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-100">Button</th>
                        <th className="px-4 py-2 text-left text-gray-100">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Processing</td>
                        <td className="px-4 py-2 text-gray-300">Sends the order to Order Ahead for packing.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Save as Draft</td>
                        <td className="px-4 py-2 text-gray-300">Saves the order to be completed later.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Clear Cart</td>
                        <td className="px-4 py-2 text-gray-300">Clears all items in the cart.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Checkout</td>
                        <td className="px-4 py-2 text-gray-300">Complete the order and choose to:</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="px-4 py-2 text-gray-300">
                          <ul className="list-disc list-inside ml-6">
                            <li>Print Receipt</li>
                            <li>Start New Order</li>
                            <li>Email Receipt</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Links at the Top of POS Page Subsection (within POS) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Quick Links at the Top of POS Page:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Scan Receipt: Pull up past orders quickly.</li>
                  <li>Add to Queue: Add a customer directly to the queue.</li>
                  <li>Open Queue: View the active customer queue.</li>
                  <li>Switch to Tablet Mode:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Tablet Mode arranges quick-access rectangular buttons:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Select Customer</li>
                          <li>Select Products</li>
                          <li>Select Order Type</li>
                          <li>Select Register</li>
                          <li>Select Drawer</li>
                          <li>Select Customer Group</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Ahead Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Order Ahead</h2>
              <p className="text-gray-300 mb-4">Manage E-commerce and Prepackaged Orders in progress.</p>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Drag and Drop Orders Across Stages:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>New → Processing → Packaged → Ready</li>
              </ul>
              <p className="text-gray-300">Smoothly track and move online and queued orders through the fulfillment process.</p>
            </div>

            {/* Orders Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Orders</h2>
              <p className="text-gray-300 mb-4">A standalone page to view and manage all completed or active Orders.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Same data layout and functionality as the Orders tab inside POS.</li>
              </ul>
            </div>

            {/* Returns Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Returns</h2>
              <p className="text-gray-300 mb-4">Manage and process Returns directly.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Matches the layout and options as the Returns tab inside POS.</li>
                <li>Search, view, and manage return history easily.</li>
              </ul>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Fulfillment Module provides everything you need to create, process, manage, and complete orders — whether they&apos;re in-store, pickup, delivery, or e-commerce — in one organized, fast-moving workflow.</p>
            </div>
          </section>

          {/* Customer Management Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Customer Management Section</h1>
            <p className="text-gray-300 mb-6">The Customer Management module is divided into three main subsections:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
              <li>Customers</li>
              <li>Customer Groups</li>
              <li>Rewards and Types</li>
            </ul>

            {/* Customers Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Customers</h2>
              <p className="text-gray-300 mb-4">Manage your entire customer base easily and efficiently.</p>

              {/* Customer Table Subsection (within Customers) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Customer Table</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Displays all customers in alphabetical order.</li>
                  <li>Search Functionality:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Search by First Name, Last Name, Phone Number, or Email.</li>
                    </ul>
                  </li>
                  <li>Top Buttons:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Upload Driver&apos;s License: Upload a customer&apos;s ID and search for them directly.</li>
                      <li>Scan ID: Scan a customer&apos;s ID to auto-populate information.</li>
                      <li>Add Customer: Manually create a new customer profile from scratch.</li>
                    </ul>
                  </li>
                </ul>

                {/* Table Columns Subsection (within Customers) */}
                <h4 className="text-lg font-semibold text-gray-200 mb-2">➔ Table Columns:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-100">Column</th>
                        <th className="px-4 py-2 text-left text-gray-100">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">First Name</td>
                        <td className="px-4 py-2 text-gray-300">Customer&apos;s first name.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Last Name</td>
                        <td className="px-4 py-2 text-gray-300">Customer&apos;s last name.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Email</td>
                        <td className="px-4 py-2 text-gray-300">Customer&apos;s email address.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">DOB</td>
                        <td className="px-4 py-2 text-gray-300">Customer&apos;s date of birth.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Action</td>
                        <td className="px-4 py-2 text-gray-300">Quick access icons for managing customers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Column Functions Subsection (within Customers) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Action Column Functions:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>First Icon (POS Shortcut):
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Click to immediately take that customer into the POS screen to start a transaction.</li>
                    </ul>
                  </li>
                  <li>Edit Icon:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Edit customer information.</li>
                      <li>View customer active/inactive status.</li>
                    </ul>
                  </li>
                  <li>Name Click (Side Panel Opens):
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Customer Details</li>
                      <li>Medical Info</li>
                      <li>Driver&apos;s License Info</li>
                      <li>Store Credits</li>
                      <li>Loyalty Points</li>
                      <li>Top Products Purchased</li>
                      <li>Order History</li>
                      <li>Return History</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Everything you need to know about a customer, accessible from one panel.</p>
              </div>
            </div>

            {/* Customer Groups Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Customer Groups</h2>
              <p className="text-gray-300 mb-4">Organize customers into specific groups for operational and compliance purposes.</p>

              {/* Default System Groups Subsection (within Customer Groups) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Default System Groups:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Medical Customers</li>
                  <li>Recreational Customers</li>
                </ul>
              </div>

              {/* Group Management Subsection (within Customer Groups) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Group Management:</h3>
                <p className="text-gray-300 mb-2">Each group appears in a table with an Action column.</p>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Settings Icon:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Click Open, then Settings to configure the group.</li>
                  <li>Options Available:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Minimum Age Verification:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Set minimum age requirements for each group.</li>
                        </ul>
                      </li>
                      <li>Purchase Limit Profiles:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Set purchase limits per product category based on state regulations (e.g., flower, concentrates, edibles).</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Perfect for staying compliant with state laws and customizing customer experiences.</p>
              </div>
            </div>

            {/* Rewards and Types Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Rewards and Types</h2>
              <p className="text-gray-300 mb-4">Create Customer Types for loyalty rewards, special discounts, and promotions.</p>

              {/* Examples of Customer Types Subsection (within Rewards and Types) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Examples of Customer Types:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Veterans</li>
                  <li>Owners</li>
                  <li>Employee Discounts</li>
                  <li>Special Promotions</li>
                </ul>
              </div>

              {/* Rewards Table Subsection (within Rewards and Types) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Rewards Table:</h3>
                <p className="text-gray-300 mb-2">Each type appears in a table with an Action column.</p>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Settings Icon:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Click to configure reward settings.</li>
                  <li>Options Available:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Tax Exemption:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Mark the group as tax-exempt if eligible.</li>
                        </ul>
                      </li>
                      <li>Discount Settings:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Set a fixed Dollar Discount or a Percentage Discount applied to every order for that group.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Encourages loyalty and maximizes customer satisfaction with automatic perks!</p>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Customer Management section gives you powerful tools to maintain customer profiles, organize them into functional groups, and reward them intelligently — all while keeping operations compliant and customer-focused.</p>
            </div>
          </section>

          {/* Promotions Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Promotions Section</h1>
            <p className="text-gray-300 mb-6">The Promotions module is divided into three subsections:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
              <li>Coupons</li>
              <li>Deals</li>
              <li>Loyalty Reward Settings</li>
            </ul>

            {/* Coupons Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Coupons</h2>
              <p className="text-gray-300 mb-4">Manage special discount offers that customers can redeem at checkout.</p>

              {/* Coupon Table View Subsection (within Coupons) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Coupon Table View</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-100">Column</th>
                        <th className="px-4 py-2 text-left text-gray-100">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Name</td>
                        <td className="px-4 py-2 text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Coupon Code</td>
                        <td className="px-4 py-2 text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Description</td>
                        <td className="px-4 py-2 text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Created At (Date Created)</td>
                        <td className="px-4 py-2 text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Usage</td>
                        <td className="px-4 py-2 text-gray-300">
                          Clicking opens a Side Panel showing:
                          <ul className="list-disc list-inside ml-6 mt-2">
                            <li>Who redeemed the coupon</li>
                            <li>Time of redemption</li>
                            <li>Associated Order Number</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Action (Edit existing coupon to reflect new changes)</td>
                        <td className="px-4 py-2 text-gray-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Create a New Coupon Subsection (within Coupons) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Create a New Coupon</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Click Add Coupon (top right).</li>
                  <li>Fill out the following fields:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Coupon Name</li>
                      <li>Coupon Code</li>
                      <li>Description</li>
                      <li>Discount Rate (Dollar amount or percentage)</li>
                      <li>Customer Types: Select types like Veteran, Owner, or custom types.</li>
                      <li>Customer Groups: Choose from Recreational, Medical, or any custom group.</li>
                      <li>Sales Sources: Internal, External, or Both.</li>
                      <li>Delivery Methods: POS, In-Store, Pickup.</li>
                      <li>Stacking Policy:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Define if the coupon can stack with Loyalty Rewards, Deals, or Both.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Validity and Expiration Configuration Subsection (within Coupons) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Validity and Expiration Configuration</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Start Date: Choose when the coupon becomes active.</li>
                  <li>No Expiration or set Specific Start/End Dates.</li>
                  <li>Day & Time Controls:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Example: Activate only on Mondays and Tuesdays, 5-7 PM (for a Happy Hour deal).</li>
                    </ul>
                  </li>
                  <li>Multi-Store Support:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Different days, times, and dates per location.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Notification Settings Subsection (within Coupons) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Notification Settings</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Send Notification:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Upload Image, Input Title and Description.</li>
                      <li>System sends out notification automatically when deal activates.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Rules Section Subsection (within Coupons) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Rules Section</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Minimum Order Value: Customer must spend at least $X to redeem.</li>
                  <li>Total Usage Limit: Max number of total redemptions before automatic expiration.</li>
                  <li>Limit Uses Per Customer: Max redemptions per individual user.</li>
                  <li>Maximum Applicable Discount: Cap the deal amount.</li>
                </ul>
              </div>

              {/* Coupon Image Subsection (within Coupons) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Coupon Image</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Upload a visual thumbnail that will appear in the Mobile App and Website listings.</li>
                </ul>
              </div>
            </div>

            {/* Deals Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Deals</h2>
              <p className="text-gray-300 mb-4">Deals are almost identical to Coupons — with a few powerful additions:</p>

              {/* Deal Table View Subsection (within Deals) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Deal Table View</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Same table structure as Coupons:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Name, Description, Code, Usage, Action.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Deal Types Subsection (within Deals) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Deal Types:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-100">Type</th>
                        <th className="px-4 py-2 text-left text-gray-100">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Regular Deal</td>
                        <td className="px-4 py-2 text-gray-300">Standard percentage or dollar-off deals, same as coupons.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">BOGO Deal</td>
                        <td className="px-4 py-2 text-gray-300">Build &quot;Buy One, Get One&quot; promotions: choose specific products or categories and set exceptions for product/package eligibility.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Create a New Deal Subsection (within Deals) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Create a New Deal</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Follow similar steps as Coupons:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Add Deal Name, Code, Description, Discount Rate.</li>
                      <li>Set Validity Dates, Days, Times.</li>
                      <li>Configure Notification Settings.</li>
                      <li>Define Sales Source, Delivery Method, and Stacking Policy.</li>
                      <li>Add Rules for Minimum Spend, Usage Limits, Customer Restrictions.</li>
                      <li>Upload Deal Image for customer-facing promotions.</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Deals allow more complex promotional structures beyond simple discounts.</p>
              </div>
            </div>

            {/* Loyalty Reward Settings Subsection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Loyalty Reward Settings</h2>
              <p className="text-gray-300 mb-4">Customize how your loyalty program works.</p>

              {/* Points-to-Price Ratio Subsection (within Loyalty Reward Settings) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Points-to-Price Ratio</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Define how points convert into dollars.</li>
                  <li>Example: 20 points = $1.</li>
                </ul>
                <p className="text-gray-300 mt-2">This ratio will drive how all loyalty calculations are made across orders.</p>
              </div>

              {/* Registration Loyalty Subsection (within Loyalty Reward Settings) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Registration Loyalty</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>On/Off Toggle.</li>
                  <li>Reward customers with bonus points upon account creation.</li>
                </ul>
              </div>

              {/* First Order Loyalty Subsection (within Loyalty Reward Settings) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ First Order Loyalty</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>On/Off Toggle.</li>
                  <li>Reward customers again after they place their first order.</li>
                </ul>
              </div>

              {/* Reward Policy Subsection (within Loyalty Reward Settings) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Reward Policy</h3>
                <p className="text-gray-300 mb-2">Two approaches to awarding loyalty points:</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-100">Method</th>
                        <th className="px-4 py-2 text-left text-gray-100">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Tiered Rewards</td>
                        <td className="px-4 py-2 text-gray-300">Customers earn points based on basket spend thresholds (e.g., Spend $100, earn 500 points, Spend $200, earn 2000 points and spend $300, earn 5000 points).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Per-Spending Rewards</td>
                        <td className="px-4 py-2 text-gray-300">Customers earn X points for every $1 spent (e.g., Spend $1, get 1 point worth $0.05).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-300 mt-4">Choose between rewarding heavier baskets or rewarding every dollar spent.</p>
              </div>

              {/* Loyalty Restrictions Subsection (within Loyalty Reward Settings) */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ Loyalty Restrictions</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Limit how customers redeem loyalty points by:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Points Limit</li>
                      <li>Dollar Limit</li>
                      <li>Percentage of Order Limit</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Prevents over-redeeming and protects margins.</p>
              </div>

              {/* General Settings Subsection (within Loyalty Reward Settings) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">➔ General Settings</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Stacking Policy:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Define whether loyalty can stack with Coupons, Deals, or Both.</li>
                    </ul>
                  </li>
                  <li>Require Customer Contact:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Toggle if a customer must provide an Email or Phone Number to participate in Loyalty.</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">Control participation and stacking rules for better program management.</p>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Promotions module empowers you to offer strategic discounts, build creative deals, reward loyalty smartly, and manage promotional campaigns — all while maintaining total flexibility on how, when, and who gets rewarded.</p>
            </div>
          </section>
        </Typography>
      </div>
    </div>
  );
} 