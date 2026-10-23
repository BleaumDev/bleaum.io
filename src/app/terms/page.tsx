import type { Metadata } from "next"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import { PolicyToc } from "@/components/views/policy-toc"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to your use of Bleaum products and services.",
}

// The agreement text is unchanged from the old page, word for word. Legal pages need counsel review before any wording
// changes (website-updates/not-yet-reviewed.md), so the "cannabis" example in 2.2 Compliance (all-pages #6), the missing
// section 9 and the two sections titled "Miscellaneous" (8 and 11) all stay until counsel decides.
const toc: [string, string][] = [
  ["s-1", "1. Services"],
  ["s-2", "2. Use Restrictions & Responsibilities"],
  ["s-3", "3. Third-Party Services"],
  ["s-4", "4. Term & Termination"],
  ["s-5", "5. Fees & Payments"],
  ["s-6", "6. Intellectual Property"],
  ["s-7", "7. Confidentiality"],
  ["s-8", "8. Miscellaneous"],
  ["s-10", "10. Limitation of Liability"],
  ["s-11", "11. Miscellaneous"],
  ["s-12", "12. Definitions"],
]

// Same reading style as the Privacy Policy: theme-token prose, with headings that clear the header on anchor jumps.
const policy = `${ui.prose} prose-h2:scroll-mt-24 prose-h3:scroll-mt-24`

export default function TermsPage() {
  return (
    <div data-page="terms" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="terms-h">
        <Bloom />
        <div className={`${ui.wrap} relative py-pad`}>
          <h1 id="terms-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
            Bleaum Merchant Agreement
          </h1>
          <p className="mt-4 animate-rise text-fog-200 [animation-delay:90ms]">Last Updated: June 3, 2025</p>
        </div>
      </section>

      {/* Agreement */}
      <div className={`${ui.wrap} grid items-start gap-10 py-pad lg:grid-cols-[17rem_1fr] lg:gap-16`}>
        <PolicyToc items={toc} />

        <article className={`${policy} min-w-0`}>
          <div className="mb-10 rounded-card border border-h-line border-l-4 border-l-copper-400 bg-h-surface2 p-6 sm:p-8 [&>p]:m-0">
            <p>
              Welcome to Bleaum! This Merchant Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;Merchant,&quot; &quot;you,&quot; or &quot;your&quot;) and Bleaum, Inc., a Florida corporation headquartered in Miami, Florida (&quot;Bleaum,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), that governs your use of our software, services, hardware, and any other tools we provide. By signing an Order Form or accessing our Services, you&apos;re agreeing to the terms in this Agreement. Please read it carefully.
            </p>
          </div>
          <h2 id="s-1">1. Services</h2>
          <h3>1.1 Access to Services</h3>
          <p>During your subscription term, we grant you a limited, non-exclusive, non-transferable right to access and use the Services you&apos;ve purchased, as outlined in your Order Form.</p>
          <h3>1.2 Setup & Support</h3>
          <p>If you&apos;ve purchased onboarding or support services, we&apos;ll work with you to implement everything smoothly. You agree to provide us with any info or access we need to help you.</p>
          <h3>1.3 Hardware</h3>
          <p>If you purchase hardware from Bleaum, our hardware warranty, return policy, and any specific terms outlined in your Order Form apply.</p>
          <h3>1.4 Users</h3>
          <p>You&apos;re responsible for anyone you allow to use Bleaum tools under your account. That includes keeping logins secure, ensuring your team follows the rules, and letting us know right away if there&apos;s any unauthorized access.</p>
          <h3>1.5 Evolving Products</h3>
          <p>We regularly update our platform to improve your experience. This may include adding, modifying, or removing features as needed.</p>
          <h3>1.6 Additional Terms</h3>
          <p>Some services may come with specific add-on terms. If you use a service that includes such conditions, they apply only to that service.</p>
          <h2 id="s-2">2. Use Restrictions & Responsibilities</h2>
          <h3>2.1 Use It Right</h3>
          <p>You agree to use our platform legally and ethically. You can&apos;t:</p>
          <ul>
            <li>Try to reverse-engineer or hack our software</li>
            <li>Copy or create competing products</li>
            <li>Resell, rent, or license our software to others</li>
            <li>Interfere with our platform&apos;s operations</li>
            <li>Use our platform for fraud or anything shady</li>
          </ul>
          <h3>2.2 Compliance</h3>
          <p>If you&apos;re in a regulated industry (e.g., cannabis), you must keep all relevant licenses up to date. If your legal ability to operate changes, you must notify us and stop using the service. We may request documentation to confirm compliance and may suspend your account if that&apos;s not provided.</p>
          <h2 id="s-3">3. Third-Party Services</h2>
          <p>You may integrate third-party tools with Bleaum. If you do, you authorize us to share data as necessary to enable that connection. Any use of third-party platforms is at your own risk and governed by their terms—not ours. We&apos;re not responsible for issues caused by third-party providers.</p>
          <h2 id="s-4">4. Term & Termination</h2>
          <h3>4.1 Agreement Term</h3>
          <p>This Agreement starts on your Effective Date and remains in effect unless terminated as outlined below.</p>
          <h3>4.2 Renewals</h3>
          <p>Your subscription renews automatically based on the term in your Order Form unless you give us 30 days&apos; notice before the end of the current period.</p>
          <h3>4.3 Suspension</h3>
          <p>We may suspend your account if:</p>
          <ul>
            <li>You violate laws or this Agreement</li>
            <li>You miss a payment and don&apos;t fix it within 7 days of notice</li>
          </ul>
          <p>We won&apos;t suspend if you&apos;re actively and fairly disputing a charge.</p>
          <h3>4.4 Termination</h3>
          <p>Either party can terminate this Agreement if:</p>
          <ul>
            <li>The other party doesn&apos;t fix a material breach within 30 days of written notice</li>
            <li>The other party goes out of business or files for bankruptcy</li>
          </ul>
          <p>We may also terminate without cause by giving written notice.</p>
          <h3>4.5 Post-Termination</h3>
          <p>When this Agreement ends:</p>
          <ul>
            <li>Your access to the platform ends</li>
            <li>We may delete your data unless otherwise required by law</li>
            <li>If we end the agreement for convenience or you end it for cause, you&apos;ll get a refund for any unused, prepaid fees</li>
            <li>If you terminate without cause or we terminate for cause, you&apos;ll owe all remaining fees for the current term</li>
          </ul>
          <h3>4.6 Survival</h3>
          <p>Sections like payment, confidentiality, intellectual property, warranties, limitations of liability, and others that logically should survive termination will survive.</p>
          <h2 id="s-5">5. Fees & Payments</h2>
          <h3>5.1 Pricing</h3>
          <p>You agree to pay the fees listed in your Order Form. Fees are due whether or not you actively use the platform, unless otherwise stated. All payments are non-refundable unless we&apos;ve clearly said otherwise. If you dispute a charge, you must notify us within 20 days.</p>
          <p>We may charge interest (1.5% per month or the highest allowed by law) on overdue, undisputed amounts. Prices stay fixed during your initial term, but we may update fees for renewals with at least 30 days&apos; notice.</p>
          <h3>5.2 Taxes</h3>
          <p>You&apos;re responsible for paying any sales, VAT, or other applicable taxes. If you&apos;re tax-exempt, provide us with valid documentation. If you&apos;re international and required to withhold taxes, you&apos;ll gross up payments so we receive the full amount due.</p>
          <h3>5.3 Automatic Payments</h3>
          <p>If you signed up for automatic billing, you authorize us to charge your card or bank account for fees due. You must keep your payment method updated. We use third-party processors, and your payment info may be shared securely with them.</p>
          <h3>5.4 Manual Billing</h3>
          <p>If you&apos;re invoiced manually, payment is due within 30 days unless otherwise agreed in writing.</p>
          <h2 id="s-6">6. Intellectual Property</h2>
          <h3>6.1 Our IP</h3>
          <p>All rights to the Bleaum platform and any materials we provide are ours or our licensors&apos;. If you give us feedback, we can use it freely to improve our products.</p>
          <h3>6.2 Your Data</h3>
          <p>You own all your business data. You grant us the right to use it only as needed to run and improve our platform. You must ensure you have the legal rights and customer consent to share that data with us.</p>
          <h3>6.3 Usage Data</h3>
          <p>We may aggregate and anonymize your data to help improve the platform, run analytics, or create industry insights. We own these anonymized results and may use them freely.</p>
          <h2 id="s-7">7. Confidentiality</h2>
          <h3>7.1 Mutual Protection</h3>
          <p>Both parties agree to keep each other&apos;s confidential information safe, using at least a reasonable standard of care. We won&apos;t share your info outside of what&apos;s necessary to provide our services, and you agree to do the same.</p>
          <h2 id="s-8">8. Miscellaneous</h2>
          <ul>
            <li><strong>Governing Law:</strong> This Agreement is governed by the laws of the State of Florida.</li>
            <li><strong>Disputes:</strong> Disputes will be handled in Miami-Dade County, Florida.</li>
            <li><strong>Entire Agreement:</strong> This Agreement, plus your Order Form(s), is the full agreement between you and Bleaum.</li>
            <li><strong>Modifications:</strong> We may update this Agreement with notice. Continued use of the Services means you accept the changes.</li>
            <li><strong>No Agency:</strong> This Agreement doesn&apos;t create any agency, partnership, or employment relationship.</li>
          </ul>
          <h2 id="s-10">10. Limitation of Liability</h2>
          <h3>10.1 No Indirect Damages</h3>
          <p>To the extent permitted by applicable law, in no event will either party, its affiliates, or its or their service providers be liable for any indirect, incidental, punitive, or consequential damages, or loss of profits, revenue, data, or business opportunities arising out of or related to this Agreement or the Services, whether an action is in contract, tort, or otherwise, and regardless of the theory of liability.</p>
          <h3>10.2 Limitation of Liability</h3>
          <p>Except for Excluded Claims, if, notwithstanding the other terms of this Agreement, either party or its affiliates or service providers is found liable to the other party or a third party, the aggregate liability will be limited to the total Fees paid or payable for the Services in the twelve (12) months preceding the first event giving rise to the claim.</p>
          <h2 id="s-11">11. Miscellaneous</h2>
          <h3>11.1 Modification</h3>
          <p>Bleaum may modify this Agreement at any time. Updates will be posted to this page, along with the effective date. We may also notify you by email or via the Services. Changes will take effect on the next business day after posting unless required for legal reasons or new features, in which case they may take effect immediately. If you disagree with a modification, you must notify Bleaum via email to comms@bleaum.io within 14 days. Your subscription will remain under the existing terms until the end of your then-current Subscription Term, after which the updated terms will apply. If we can no longer reasonably provide the Services under the pre-modified terms, the Agreement may be terminated with notice, and any prepaid but unused Fees will be refunded.</p>
          <h3>11.2 Governing Law; Jurisdiction</h3>
          <p>This Agreement is governed by the laws of the State of Florida, without regard to conflict of law principles. The parties agree that exclusive jurisdiction and venue for disputes lies in the state and federal courts located in Miami-Dade County, Florida.</p>
          <h3>11.3 Assignment</h3>
          <p>Bleaum may assign this Agreement without notice or your consent. You may only assign this Agreement with our prior written approval, except in the case of a merger, acquisition, or sale of substantially all your assets, provided: (a) you notify us promptly; (b) all outstanding Fees are paid; and (c) the assignee agrees in writing to assume all obligations under this Agreement.</p>
          <h3>11.4 Notices</h3>
          <p>All legal notices must be sent via email to comms@bleaum.io. Operational or service notices may be sent to the email associated with your account or posted within the Services.</p>
          <h3>11.5 Subcontractors</h3>
          <p>Bleaum may use subcontractors to fulfill its obligations, provided it remains responsible for their compliance with this Agreement.</p>
          <h3>11.6 Relationship of the Parties</h3>
          <p>The parties are independent contractors. Nothing in this Agreement creates a joint venture, partnership, employment, or agency relationship.</p>
          <h3>11.7 Force Majeure</h3>
          <p>Neither party is liable for failure to perform due to causes beyond its reasonable control, such as natural disasters, internet or utility failures, strikes, wars, or government actions.</p>
          <h3>11.8 Export Compliance</h3>
          <p>Each party agrees to comply with applicable export control laws and regulations. You represent you are not located in or a national of any embargoed or restricted country or on any restricted party list.</p>
          <h3>11.9 Publicity</h3>
          <p>You agree that Bleaum may reference your business name and logo in marketing materials, presentations, and on our website for the purpose of identifying you as a customer.</p>
          <h3>11.10 Severability</h3>
          <p>If any provision of this Agreement is found unenforceable, that provision will be modified or limited to the extent necessary so the remainder of the Agreement remains in effect.</p>
          <h3>11.11 No Third-Party Beneficiaries</h3>
          <p>This Agreement does not confer any rights or remedies on any third party.</p>
          <h3>11.12 Entire Agreement</h3>
          <p>This Agreement, including your Order Form(s), represents the full and exclusive understanding between the parties regarding the subject matter and supersedes all prior agreements and communications. Failure to enforce any provision shall not be deemed a waiver of that provision.</p>
          <h2 id="s-12">12. Definitions</h2>
          <dl className="not-prose mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Affiliate</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">An entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of more than 50% of voting shares.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Applicable Law</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">All applicable federal, state, and local laws, rules, and regulations relevant to the Services and this Agreement.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Claim</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Any legal demand, suit, proceeding, or action.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Confidential Information</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Non-public information disclosed by either party that a reasonable person would consider confidential. Excludes information that is publicly known, lawfully received from another source, or independently developed.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Current Subscription Term</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The current active period of Service as reflected in your Order Form.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Customer</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">A consumer interacting with your business through your use of the Services.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Effective Date</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The date of execution or acceptance of your initial Order Form.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Excluded Claims</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">(a) Breach of confidentiality; (b) indemnity obligations; (c) your breach of use restrictions; and (d) payment of Fees.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Feedback</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Suggestions or improvements provided by you regarding Bleaum&apos;s Services.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Fees</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Amounts due for the Services as specified in your Order Form.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Initial Subscription Term</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The original committed term for your Services.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Intellectual Property Rights</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">All current and future legal rights associated with intellectual property.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Locations</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Your business locations authorized to use the Services, as defined in your Order Form.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Merchant, you, your</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The entity entering this Agreement and using Bleaum&apos;s Services.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Merchant Agreement or Agreement</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">This set of terms, combined with your Order Form(s).</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Merchant Data</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Information collected or processed on your behalf through your use of Bleaum, including Customer transaction details, contact information, receipts, loyalty activity, and payment data.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Order Form</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">A document prepared by Bleaum specifying your Services, billing, and terms.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Personal Information</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Data relating to an identifiable person, protected under Applicable Law.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Privacy Policy</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Bleaum&apos;s Privacy Policy available at bleaum.io/privacy, as may be updated.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Professional Services</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Implementation, setup, training, or support services specified in your Order Form.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Purchased Hardware</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Devices or equipment you purchase directly from Bleaum.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Renewal Subscription Term</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">A continuation period following the Initial Subscription Term.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Services</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Bleaum&apos;s point of sale system, retail software, mobile apps, payment solutions, delivery coordination, reporting tools, hardware, and any related services provided by Bleaum. This excludes third-party offerings not directly provided by Bleaum.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Specifications</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Any technical documentation or help resources related to the Services.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Subscription Services</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The cloud-based platform and tools provided by Bleaum on a subscription basis.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Subscription Term</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The total duration of your Initial and Renewal Subscription Terms.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Term</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">The full period beginning on your Effective Date and ending when all Order Forms expire or are terminated.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Third-Party Services</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">External services or software integrated or used in connection with Bleaum&apos;s Services, but not operated by Bleaum.</dd>
            </div>
            <div className="rounded-ctl border border-h-line bg-h-surface p-4">
              <dt className="font-display font-medium text-h-text">Users</dt>
              <dd className="mt-1 text-[.9375rem] text-h-muted">Your staff or authorized personnel who access and use the Services on your behalf.</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  )
}
