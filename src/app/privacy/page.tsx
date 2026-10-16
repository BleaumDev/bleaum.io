import type { Metadata } from "next"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import { PolicyToc } from "@/components/views/policy-toc"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bleaum collects, uses and protects your information.",
}

// The policy text is unchanged from the old page, word for word. Legal pages need counsel review before any wording
// changes (website-updates/not-yet-reviewed.md), so the "cannabis medical card" line under Health Information (all-pages #6)
// stays until counsel decides.
const toc: [string, string][] = [
  ["notice-at-collection", "Notice at Collection:"],
  ["welcome-to-bleaum", "Welcome to Bleaum!"],
  ["this-privacy-policy-applies-to", "This Privacy Policy applies to the following categories of individuals:"],
  ["personal-information-we-collect", "Personal Information We Collect"],
  ["how-we-use-personal-information", "How We Use Personal Information"],
  ["sharing-and-disclosure-of-personal", "Sharing and Disclosure of Personal Information"],
  ["children", "Children"],
  ["security", "Security"],
  ["your-choices", "Your Choices"],
  ["changes-to-this-privacy-policy", "Changes to This Privacy Policy"],
  ["contact-us", "Contact Us"],
  ["location-specific-schedules", "Location-Specific Schedules"],
  ["schedule-a", "Schedule A: For California Residents (CCPA Compliance)"],
  ["schedule-b", "Schedule B — Virginia Residents"],
  ["schedule-c", "Schedule C — Colorado Residents"],
  ["schedule-d", "Schedule D — Connecticut Residents"],
  ["schedule-e", "Schedule E — Canadian Residents"],
]

// Table borders follow the theme tokens; headings get a scroll margin so anchor jumps clear the header.
const policy = `${ui.prose} prose-h2:scroll-mt-24 prose-h3:scroll-mt-24 prose-table:text-[.9375rem] [--tw-prose-th-borders:var(--h-line)] [--tw-prose-td-borders:var(--h-line)] prose-th:text-left prose-th:align-bottom prose-td:align-top`

export default function PrivacyPage() {
  return (
    <div data-page="privacy" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="priv-h">
        <Bloom />
        <div className={`${ui.wrap} relative py-pad`}>
          <h1 id="priv-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
            Privacy Policy
          </h1>
          <p className="mt-4 animate-rise text-fog-200 [animation-delay:90ms]">Last updated June 5, 2025</p>
        </div>
      </section>

      {/* Policy */}
      <div className={`${ui.wrap} grid items-start gap-10 py-pad lg:grid-cols-[17rem_1fr] lg:gap-16`}>
        <PolicyToc items={toc} />

        <article className={`${policy} min-w-0`}>
          <div className="mb-10 rounded-card border border-h-line border-l-4 border-l-copper-400 bg-h-surface2 p-6 sm:p-8 [&>h2]:mt-0">
            <h2 id="notice-at-collection">Notice at Collection:</h2>
            <p>
              Bleaum collects the categories of personal information listed in the Privacy Policy below, including any information you provide in a fillable field referencing this Privacy Policy. We collect this information to fulfill the purpose for which you are providing the personal information, to provide our services, to communicate with you (including about products or services that may be relevant to you), or as otherwise necessary or appropriate for our legitimate business purposes. By submitting your personal information, you agree to its processing in this manner. To learn more, including how to exercise any rights that may be available to you, please review the Privacy Policy below.
            </p>
          </div>

          <h2 id="welcome-to-bleaum">Welcome to Bleaum!</h2>
          <p>
            This Privacy Policy explains how Bleaum Inc. and its affiliates (&quot;Bleaum&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collect, use, and disclose your Personal Information when you access or use our products and services. These include our point-of-sale systems, mobile apps, eCommerce tools, payment processing services, hardware, APIs, customer accounts, and our websites (collectively, the &quot;Services&quot;).
          </p>

          <h2 id="this-privacy-policy-applies-to">This Privacy Policy applies to the following categories of individuals:</h2>
          <ul>
            <li><strong>Retailers:</strong> Businesses that contract with Bleaum for the use of our Services.</li>
            <li><strong>Retail Employees:</strong> Employees of businesses using our Services.</li>
            <li><strong>Customers:</strong> Individuals making purchases or interacting with Retailers via Bleaum-powered Services.</li>
            <li><strong>Website Visitors:</strong> Individuals visiting any Bleaum website or application.</li>
            <li><strong>Business Partners:</strong> Third-party integration and service partners of Bleaum.</li>
          </ul>

          <p>
            Unless a data subject interacts directly with Bleaum (e.g., requesting a demo or contacting us directly), we process personal information solely on behalf of our Retailer customers. Retailers are responsible for managing privacy requests from their own customers or users. If you are a Customer of a Retailer, please refer to the Retailer&apos;s privacy policy and contact them for questions or concerns.
          </p>

          <p>
            This Privacy Policy may include additional location-specific information depending on applicable laws. Please refer to the appropriate schedule at the end of this document if you reside in California, Virginia, Colorado, Connecticut, or Canada.
          </p>

          <p>
            By using our Services, you agree to the collection, use, and disclosure of your information as outlined in this Privacy Policy. If you do not agree with our policies, do not use our Services or submit your personal information.
          </p>

          <h2 id="personal-information-we-collect">Personal Information We Collect</h2>
          <p>
            We may collect and combine information that identifies, relates to, describes, or could be reasonably linked to you (&quot;Personal Information&quot;) in the following ways:
          </p>

          <h3>Information You Provide</h3>
          <ul>
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

          <h2 id="how-we-use-personal-information">How We Use Personal Information</h2>
          <p>We use your Personal Information for the following purposes:</p>
          <ul>
            <li>To operate, improve, and deliver our Services</li>
            <li>To evaluate eligibility to use certain features (e.g., payment processing)</li>
            <li>To respond to inquiries, support requests, or demo submissions</li>
            <li>To send you administrative, promotional, or product-related communications</li>
            <li>To analyze usage patterns and develop new features</li>
            <li>To prevent fraud, enforce security, and comply with legal obligations</li>
            <li>For research, analytics, and internal development</li>
            <li>For personalized advertising and marketing, where permitted</li>
          </ul>

          <h2 id="sharing-and-disclosure-of-personal">Sharing and Disclosure of Personal Information</h2>
          <p>We may share your Personal Information with:</p>
          <ul>
            <li><strong>Retailers:</strong> To deliver Services and help them serve their customers.</li>
            <li><strong>Service Providers:</strong> For hosting, analytics, payment processing, compliance, etc.</li>
            <li><strong>Business Partners:</strong> For integration and enhancement of our platform.</li>
            <li><strong>Legal Authorities:</strong> Where required to comply with the law or to protect rights.</li>
            <li><strong>Affiliates and Successors:</strong> In the event of a business transaction like a merger or acquisition.</li>
          </ul>
          <p>We do not sell your Personal Information.</p>

          <h2 id="children">Children</h2>
          <p>Our Services are not directed to individuals under the age of 18 (or the equivalent age of majority in your jurisdiction). We do not knowingly collect Personal Information from children.</p>

          <h2 id="security">Security</h2>
          <p>We use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization.</p>

          <h2 id="your-choices">Your Choices</h2>
          <p>You may opt out of marketing emails or texts by using the unsubscribe link or replying &quot;STOP&quot; where applicable. For questions about your data or to exercise rights under local law, please contact comms@bleaum.io.</p>

          <h2 id="changes-to-this-privacy-policy">Changes to This Privacy Policy</h2>
          <p>We may update this policy from time to time. When we do, we will revise the &quot;Last Updated&quot; date. We encourage you to review the Privacy Policy regularly.</p>

          <h2 id="contact-us">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or your personal information, you may contact us at:</p>
          <div>
            <p>Bleaum Inc.</p>
            <p>Email: comms@bleaum.io</p>
          </div>

          <h2 id="location-specific-schedules">Location-Specific Schedules</h2>
          <p>Refer to the following schedules if you are located in:</p>
          <ul>
            <li>Schedule A - California Residents</li>
            <li>Schedule B - Virginia Residents</li>
            <li>Schedule C - Colorado Residents</li>
            <li>Schedule D - Connecticut Residents</li>
            <li>Schedule E - Canada Residents</li>
          </ul>

          <h2 id="schedule-a">Schedule A: For California Residents (CCPA Compliance)</h2>
          <p>This section applies to California residents and outlines rights under the California Consumer Privacy Act (CCPA), as amended by the CPRA.</p>

          <h3>1. Personal Information Collected</h3>
          <p>Below are the types of personal information Bleaum may collect, how we use it, and who we may share it with:</p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Collected</th>
                  <th>Sources</th>
                  <th>Purpose</th>
                  <th>Disclosed To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Identifiers (e.g., name, email)</td>
                  <td>Yes</td>
                  <td>You, service providers, retailers</td>
                  <td>Service delivery, personalization, legal/compliance, communication</td>
                  <td>Retailers, partners, providers</td>
                </tr>
                <tr>
                  <td>Customer Records (e.g., address, phone)</td>
                  <td>Yes</td>
                  <td>Same as above</td>
                  <td>Same as above</td>
                  <td>Same as above</td>
                </tr>
                <tr>
                  <td>Protected Class Data</td>
                  <td>No</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Commercial Information (e.g., order history)</td>
                  <td>Yes</td>
                  <td>Same as above</td>
                  <td>Personalization, support, analytics, compliance</td>
                  <td>Same as above</td>
                </tr>
                <tr>
                  <td>Biometric Data</td>
                  <td>No</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Internet/Network Activity</td>
                  <td>Yes</td>
                  <td>Automatically or by providers</td>
                  <td>Improve and support services, personalization, marketing</td>
                  <td>Retailers, providers</td>
                </tr>
                <tr>
                  <td>Geolocation Data</td>
                  <td>Yes</td>
                  <td>Automatically or directly</td>
                  <td>Location-based services, personalization, legal/compliance</td>
                  <td>Service providers</td>
                </tr>
                <tr>
                  <td>Sensory Data (e.g., support call recordings)</td>
                  <td>Yes</td>
                  <td>You or support providers</td>
                  <td>Customer service, compliance</td>
                  <td>Service providers</td>
                </tr>
                <tr>
                  <td>Employment Info (for retailer staff)</td>
                  <td>Yes</td>
                  <td>Retailers, their employees</td>
                  <td>Service functionality, recordkeeping</td>
                  <td>Retailers, providers</td>
                </tr>
                <tr>
                  <td>Education Records</td>
                  <td>No</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Inferences (e.g., preferences)</td>
                  <td>Yes</td>
                  <td>You, partners, usage patterns</td>
                  <td>Personalization, analytics, service delivery</td>
                  <td>Retailers, providers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2. Sensitive Personal Information</h3>
          <p>Bleaum may process sensitive data as needed to deliver services—especially around payments. We do not sell or share this data for advertising.</p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Sensitive Category</th>
                  <th>Purpose</th>
                  <th>Sold?</th>
                  <th>Shared With</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SSN, driver&apos;s license, passport, or similar ID</td>
                  <td>Payment underwriting</td>
                  <td>No</td>
                  <td>Providers, partners</td>
                </tr>
                <tr>
                  <td>Account/financial info with access credentials</td>
                  <td>Payment processing</td>
                  <td>No</td>
                  <td>Service providers</td>
                </tr>
                <tr>
                  <td>Precise Geolocation</td>
                  <td>Service delivery (e.g., delivery tracking)</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Race, religion, union status, genetic/biometric/health data, etc.</td>
                  <td>Not collected</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. No Selling of Personal Information</h3>
          <p>Bleaum does not sell your personal information.</p>

          <h3>4. Your Rights Under the CCPA</h3>
          <p>As a California resident, you have the right to:</p>
          <ul>
            <li>Know what data Bleaum collects and how it&apos;s used</li>
            <li>Access or delete your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Limit use of sensitive information</li>
            <li>Opt out of data sharing (though Bleaum does not currently share for advertising)</li>
            <li>Not face discrimination for exercising your rights</li>
          </ul>

          <h2 id="schedule-b">Schedule B — Virginia Residents</h2>
          <p>This Schedule supplements our Privacy Policy and applies to residents of Virginia covered under the Virginia Consumer Data Protection Act (VCDPA). All references to &quot;Personal Information&quot; mean &quot;personal data&quot; as defined by the VCDPA.</p>

          <h3>Your rights under the VCDPA include:</h3>
          <ul>
            <li><strong>Right of Access:</strong> Confirm whether Bleaum is processing your Personal Information and access it.</li>
            <li><strong>Right of Correction:</strong> Correct inaccuracies in your Personal Information.</li>
            <li><strong>Right of Deletion:</strong> Request deletion of your Personal Information.</li>
            <li><strong>Right of Portability:</strong> Obtain a copy of your Personal Information in a portable, readily usable format.</li>
            <li><strong>Right to Opt Out:</strong> Opt out of targeted advertising, sale of Personal Information, and profiling for decisions with legal or similarly significant effects.</li>
          </ul>

          <h2 id="schedule-c">Schedule C — Colorado Residents</h2>
          <p>Under the Colorado Privacy Act (CPA), Colorado residents have similar rights:</p>
          <ul>
            <li>Right of Access</li>
            <li>Right of Correction</li>
            <li>Right of Deletion</li>
            <li>Right of Portability</li>
            <li>Right to Opt Out of targeted advertising, sale of Personal Information, and profiling.</li>
          </ul>

          <h2 id="schedule-d">Schedule D — Connecticut Residents</h2>
          <p>Connecticut residents under the Connecticut Data Privacy Act (CTDPA) have the right to:</p>
          <ul>
            <li>Access</li>
            <li>Correct</li>
            <li>Delete</li>
            <li>Port their Personal Information</li>
            <li>Opt Out of targeted advertising, sale of Personal Information, and profiling.</li>
          </ul>

          <h2 id="schedule-e">Schedule E — Canadian Residents</h2>
          <p>This Schedule applies to individuals in Canada under applicable Canadian privacy laws including PIPEDA.</p>

          <h3>Consent</h3>
          <p>By using Bleaum&apos;s services, you consent to the collection and use of your Personal Information as described. You may withdraw consent at any time, though this may impact our ability to provide services.</p>

          <h3>Access and Correction</h3>
          <p>You may request access to, or correction of, your Personal Information. To do so, email comms@bleaum.io. We will respond within applicable legal timeframes.</p>
        </article>
      </div>
    </div>
  )
}
