import React from "react";

export default function PartnersPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
      <p className="mb-8 text-lg text-white">
        We collaborate with industry leaders and innovative companies to deliver the best solutions for our clients. Interested in partnering with us? Reach out below!
      </p>
      <div className="p-4 border rounded-lg bg-gray-50 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Become a Partner</h2>
        <p className="mb-2 text-gray-700">
          We're always looking for new opportunities to grow together. Email us at <a href="mailto:partners@bleaum.com" className="text-blue-600 underline">partners@bleaum.com</a> to start the conversation.
        </p>
      </div>
      <div className="p-4 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Our Current Partners</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Partner .. </li>
          <li>Partner ..</li>
          <li>Partner ..</li>
        </ul>
      </div>
    </main>
  );
} 