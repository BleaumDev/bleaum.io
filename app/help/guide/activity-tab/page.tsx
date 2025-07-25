'use client';

import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function ActivityTabPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* Activity Tab Section */}
          <div id="activity-tab" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Activity Tab</h2>
            <p className="text-gray-300 mb-4">Track every action happening in your shop.</p>
            
            <div className="ml-8 overflow-x-auto mb-6">
              <table className="min-w-full bg-slate-700 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-8 py-4 pl-80 text-left text-gray-100"> 1.What It Shows</th>
                    <th className="px-8 py-4 text-left text-gray-100">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-8 py-4 text-gray-300">Activity Type</td>
                    <td className="px-8 py-4 text-gray-300">Description of the action taken (e.g., Customer Added, Product Edited).</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-4 text-gray-300">Date and Time</td>
                    <td className="px-8 py-4 text-gray-300">Precise time of each action.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300">Every change, addition, deletion, and update in the system is logged for transparency and accountability.</p>
          </div>
        </Typography>
      </div>
    </div>
  );
} 