'use client';

import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function ActionIconsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* Action Icons Section */}
          <section id="action-icons" className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">Action Icons</h1>
            <Image src="/bolt.jpg" alt="Lightning bolt, bell, and chat icons" width={400} height={100} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <p className="text-gray-300 mb-6">Directly below the user&apos;s name, you&apos;ll see three action icons. Each one gives quick access to important real-time tools.</p>

            {/* Lightning Bolt Icon Section */}
            <div id="lightning-bolt" className="mb-8">
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
            <div id="bell-icon" className="mb-8">
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
            <div id="chat-icon" className="mb-8">
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
        </Typography>
      </div>
    </div>
  );
} 