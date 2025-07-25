'use client';

import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function UserDropdownMenuPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* User Dropdown Menu Section */}
          <section id="user-dropdown-menu" className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">User Dropdown Menu</h1>
            <p className="text-gray-300 mb-6">When you click on your Username (top right of the screen), a dropdown menu will appear with the following options:</p>

            {/* Clock In/Out Section */}
            <div id="clock-in-out" className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Clock In / Clock Out</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">PIN-based clocking ensures secure and accurate time tracking.</p>
              <div className="flex justify-center">
                <Image src="/clockin.jpg" alt="Clock In" width={350} height={200} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Profile Section */}
            <div id="profile-section" className="mb-8">
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
            <div id="share-mode" className="mb-8">
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
            <div id="logout" className="mb-8">
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
        </Typography>
      </div>
    </div>
  );
} 