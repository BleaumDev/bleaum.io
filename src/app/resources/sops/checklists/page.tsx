import React from "react";

export default function SopsChecklistsPage() {
  return (
    <main className="max-w-2xl mx-auto py-8 sm:py-16 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">SOP Checklists</h1>
      <p className="mb-4 sm:mb-8 text-base sm:text-lg text-gray-700">
        Download our Standard Operating Procedure (SOP) checklists to help streamline your business operations. Click on a checklist below to download.
      </p>
      <div className="space-y-3 sm:space-y-4">
        <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <span className="text-gray-800 font-medium text-sm sm:text-base">General Operations SOP</span>
          <a
            href="/downloads/general-operations-sop.pdf"
            className="px-3 sm:px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-xs sm:text-base"
            download
          >
            Download
          </a>
        </div>
        <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <span className="text-gray-800 font-medium text-sm sm:text-base">Inventory Management SOP</span>
          <a
            href="/downloads/inventory-management-sop.pdf"
            className="px-3 sm:px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-xs sm:text-base"
            download
          >
            Download
          </a>
        </div>
        <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <span className="text-gray-800 font-medium text-sm sm:text-base">Employee Onboarding SOP</span>
          <a
            href="/downloads/employee-onboarding-sop.pdf"
            className="px-3 sm:px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-xs sm:text-base"
            download
          >
            Download
          </a>
        </div>
      </div>
    </main>
  );
} 