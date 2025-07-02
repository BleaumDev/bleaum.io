'use client';

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Privacy Policy</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Last updated June 5, 2025</p>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Notice at Collection:</h2>
          <p>
            Bleaum collects the categories of personal information listed in the Privacy Policy below, including any information you provide in a fillable field referencing this Privacy Policy. We collect this information to fulfill the purpose for which you are providing the personal information, to provide our services, to communicate with you (including about products or services that may be relevant to you), or as otherwise necessary or appropriate for our legitimate business purposes. By submitting your personal information, you agree to its processing in this manner. To learn more, including how to exercise any rights that may be available to you, please review the Privacy Policy below.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Welcome to Bleaum!</h2>
        <p className="mb-6">
          This Privacy Policy explains how Bleaum Inc. and its affiliates ("Bleaum", "we", "us", or "our") collect, use, and disclose your Personal Information when you access or use our products and services. These include our point-of-sale systems, mobile apps, eCommerce tools, payment processing services, hardware, APIs, customer accounts, and our websites (collectively, the "Services").
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">This Privacy Policy applies to the following categories of individuals:</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Retailers:</strong> Businesses that contract with Bleaum for the use of our Services.</li>
          <li><strong>Retail Employees:</strong> Employees of businesses using our Services.</li>
          <li><strong>Customers:</strong> Individuals making purchases or interacting with Retailers via Bleaum-powered Services.</li>
          <li><strong>Website Visitors:</strong> Individuals visiting any Bleaum website or application.</li>
          <li><strong>Business Partners:</strong> Third-party integration and service partners of Bleaum.</li>
        </ul>

        <p className="mb-6">
          Unless a data subject interacts directly with Bleaum (e.g., requesting a demo or contacting us directly), we process personal information solely on behalf of our Retailer customers. Retailers are responsible for managing privacy requests from their own customers or users. If you are a Customer of a Retailer, please refer to the Retailer's privacy policy and contact them for questions or concerns.
        </p>

        <p className="mb-6">
          This Privacy Policy may include additional location-specific information depending on applicable laws. Please refer to the appropriate schedule at the end of this document if you reside in California, Virginia, Colorado, Connecticut, or Canada.
        </p>

        <p className="mb-6">
          By using our Services, you agree to the collection, use, and disclosure of your information as outlined in this Privacy Policy. If you do not agree with our policies, do not use our Services or submit your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Personal Information We Collect</h2>
        <p className="mb-6">
          We may collect and combine information that identifies, relates to, describes, or could be reasonably linked to you ("Personal Information") in the following ways:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Information You Provide</h3>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Identification Details:</strong> Name, email, phone number, address, date of birth, and government-issued ID documents.</li>
          <li><strong>Service-Specific Data:</strong> For example, business ownership and identification information required for underwriting or payment services.</li>
          <li><strong>Financial Information:</strong> Payment details submitted during subscription or checkout, which are tokenized and handled via third-party processors.</li>
          <li><strong>Communication Data:</strong> Information you provide when contacting us, completing surveys, or participating in market research.</li>
          <li><strong>Location Data:</strong> IP address or entered location to find Retailers or enable deliveries.</li>
          <li><strong>Transaction History:</strong> Products viewed or purchased through the Services.</li>
          <li><strong>Health Information:</strong> Medical ID or cannabis medical card information, where applicable and legally permissible.</li>
          <li><strong>Social Media Data:</strong> Interactions with Bleaum on Instagram, Twitter, Facebook, or other platforms.</li>
          <li><strong>Internet Activity Data:</strong> Browser info, device type, usage patterns, cookies, and pixels for analytics and marketing.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Personal Information</h2>
        <p className="mb-4">We use your Personal Information for the following purposes:</p>
        <ul className="list-disc list-inside mb-6">
          <li>To operate, improve, and deliver our Services</li>
          <li>To evaluate eligibility to use certain features (e.g., payment processing)</li>
          <li>To respond to inquiries, support requests, or demo submissions</li>
          <li>To send you administrative, promotional, or product-related communications</li>
          <li>To analyze usage patterns and develop new features</li>
          <li>To prevent fraud, enforce security, and comply with legal obligations</li>
          <li>For research, analytics, and internal development</li>
          <li>For personalized advertising and marketing, where permitted</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Sharing and Disclosure of Personal Information</h2>
        <p className="mb-4">We may share your Personal Information with:</p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Retailers:</strong> To deliver Services and help them serve their customers.</li>
          <li><strong>Service Providers:</strong> For hosting, analytics, payment processing, compliance, etc.</li>
          <li><strong>Business Partners:</strong> For integration and enhancement of our platform.</li>
          <li><strong>Legal Authorities:</strong> Where required to comply with the law or to protect rights.</li>
          <li><strong>Affiliates and Successors:</strong> In the event of a business transaction like a merger or acquisition.</li>
        </ul>
        <p className="mb-6">We do not sell your Personal Information.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Children</h2>
        <p className="mb-6">Our Services are not directed to individuals under the age of 18 (or the equivalent age of majority in your jurisdiction). We do not knowingly collect Personal Information from children.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
        <p className="mb-6">We use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
        <p className="mb-6">You may opt out of marketing emails or texts by using the unsubscribe link or replying "STOP" where applicable. For questions about your data or to exercise rights under local law, please contact comms@bleaum.io.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">We may update this policy from time to time. When we do, we will revise the "Last Updated" date. We encourage you to review the Privacy Policy regularly.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">If you have any questions about this Privacy Policy or your personal information, you may contact us at:</p>
        <div className="mb-6">
          <p>Bleaum Inc.</p>
          <p>Email: comms@bleaum.io</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Location-Specific Schedules</h2>
        <p className="mb-4">Refer to the following schedules if you are located in:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Schedule A – California Residents</li>
          <li>Schedule B – Virginia Residents</li>
          <li>Schedule C – Colorado Residents</li>
          <li>Schedule D – Connecticut Residents</li>
          <li>Schedule E – Canada Residents</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Schedule A: For California Residents (CCPA Compliance)</h2>
        <p className="mb-6">This section applies to California residents and outlines rights under the California Consumer Privacy Act (CCPA), as amended by the CPRA.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Personal Information Collected</h3>
        <p className="mb-4">Below are the types of personal information Bleaum may collect, how we use it, and who we may share it with:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Collected</th>
                <th className="text-left p-2">Sources</th>
                <th className="text-left p-2">Purpose</th>
                <th className="text-left p-2">Disclosed To</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Identifiers (e.g., name, email)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">You, service providers, retailers</td>
                <td className="p-2">Service delivery, personalization, legal/compliance, communication</td>
                <td className="p-2">Retailers, partners, providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Customer Records (e.g., address, phone)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Same as above</td>
                <td className="p-2">Same as above</td>
                <td className="p-2">Same as above</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Protected Class Data</td>
                <td className="p-2">No</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Commercial Information (e.g., order history)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Same as above</td>
                <td className="p-2">Personalization, support, analytics, compliance</td>
                <td className="p-2">Same as above</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Biometric Data</td>
                <td className="p-2">No</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Internet/Network Activity</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Automatically or by providers</td>
                <td className="p-2">Improve and support services, personalization, marketing</td>
                <td className="p-2">Retailers, providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Geolocation Data</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Automatically or directly</td>
                <td className="p-2">Location-based services, personalization, legal/compliance</td>
                <td className="p-2">Service providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Sensory Data (e.g., support call recordings)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">You or support providers</td>
                <td className="p-2">Customer service, compliance</td>
                <td className="p-2">Service providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Employment Info (for retailer staff)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Retailers, their employees</td>
                <td className="p-2">Service functionality, recordkeeping</td>
                <td className="p-2">Retailers, providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Education Records</td>
                <td className="p-2">No</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Inferences (e.g., preferences)</td>
                <td className="p-2">Yes</td>
                <td className="p-2">You, partners, usage patterns</td>
                <td className="p-2">Personalization, analytics, service delivery</td>
                <td className="p-2">Retailers, providers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Sensitive Personal Information</h3>
        <p className="mb-4">Bleaum may process sensitive data as needed to deliver services—especially around payments. We do not sell or share this data for advertising.</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Sensitive Category</th>
                <th className="text-left p-2">Purpose</th>
                <th className="text-left p-2">Sold?</th>
                <th className="text-left p-2">Shared With</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">SSN, driver's license, passport, or similar ID</td>
                <td className="p-2">Payment underwriting</td>
                <td className="p-2">No</td>
                <td className="p-2">Providers, partners</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Account/financial info with access credentials</td>
                <td className="p-2">Payment processing</td>
                <td className="p-2">No</td>
                <td className="p-2">Service providers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Precise Geolocation</td>
                <td className="p-2">Service delivery (e.g., delivery tracking)</td>
                <td className="p-2">No</td>
                <td className="p-2">No</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Race, religion, union status, genetic/biometric/health data, etc.</td>
                <td className="p-2">Not collected</td>
                <td className="p-2">N/A</td>
                <td className="p-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. No Selling of Personal Information</h3>
        <p className="mb-6">Bleaum does not sell your personal information.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Your Rights Under the CCPA</h3>
        <p className="mb-4">As a California resident, you have the right to:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Know what data Bleaum collects and how it's used</li>
          <li>Access or delete your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Limit use of sensitive information</li>
          <li>Opt out of data sharing (though Bleaum does not currently share for advertising)</li>
          <li>Not face discrimination for exercising your rights</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Schedule B — Virginia Residents</h2>
        <p className="mb-6">This Schedule supplements our Privacy Policy and applies to residents of Virginia covered under the Virginia Consumer Data Protection Act (VCDPA). All references to "Personal Information" mean "personal data" as defined by the VCDPA.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Your rights under the VCDPA include:</h3>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Right of Access:</strong> Confirm whether Bleaum is processing your Personal Information and access it.</li>
          <li><strong>Right of Correction:</strong> Correct inaccuracies in your Personal Information.</li>
          <li><strong>Right of Deletion:</strong> Request deletion of your Personal Information.</li>
          <li><strong>Right of Portability:</strong> Obtain a copy of your Personal Information in a portable, readily usable format.</li>
          <li><strong>Right to Opt Out:</strong> Opt out of targeted advertising, sale of Personal Information, and profiling for decisions with legal or similarly significant effects.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Schedule C — Colorado Residents</h2>
        <p className="mb-4">Under the Colorado Privacy Act (CPA), Colorado residents have similar rights:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Right of Access</li>
          <li>Right of Correction</li>
          <li>Right of Deletion</li>
          <li>Right of Portability</li>
          <li>Right to Opt Out of targeted advertising, sale of Personal Information, and profiling.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Schedule D — Connecticut Residents</h2>
        <p className="mb-4">Connecticut residents under the Connecticut Data Privacy Act (CTDPA) have the right to:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Access</li>
          <li>Correct</li>
          <li>Delete</li>
          <li>Port their Personal Information</li>
          <li>Opt Out of targeted advertising, sale of Personal Information, and profiling.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Schedule E — Canadian Residents</h2>
        <p className="mb-6">This Schedule applies to individuals in Canada under applicable Canadian privacy laws including PIPEDA.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Consent</h3>
        <p className="mb-6">By using Bleaum's services, you consent to the collection and use of your Personal Information as described. You may withdraw consent at any time, though this may impact our ability to provide services.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Access and Correction</h3>
        <p className="mb-6">You may request access to, or correction of, your Personal Information. To do so, email comms@bleaum.io. We will respond within applicable legal timeframes.</p>
      </div>
    </div>
  );
} 