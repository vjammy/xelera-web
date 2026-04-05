import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Xelera.ai.",
};

export default function PrivacyPage() {
  return (
    <div className="section-shell pt-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">Privacy Policy</h1>
        <p className="mt-3 text-slate-500">Last Updated: December 15, 2025</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <p>
              Xelera.ai (&quot;Xelera,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard information when you visit our website or use our
              services.
            </p>
            <p className="mt-3">
              By accessing or using our website and services, you agree to the practices described
              in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">1. Scope of This Policy</h2>
            <p className="mt-3">This Privacy Policy applies to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Visitors to www.xelera.ai</li>
              <li>Prospective customers and business contacts</li>
              <li>Clients using our AI services and consulting offerings</li>
            </ul>
            <p className="mt-3">This policy does not apply to third-party websites or services linked from our site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">2. Information We Collect</h2>
            <h3 className="mt-4 text-xl font-medium text-slate-950">2.1 Personal Data You Provide</h3>
            <p className="mt-2">We may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Phone number</li>
              <li>Messages or inquiries submitted via forms</li>
              <li>Contractual and billing details (business-related)</li>
            </ul>
            <h3 className="mt-4 text-xl font-medium text-slate-950">2.2 Automatically Collected Data</h3>
            <p className="mt-2">When you access our website, we may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Operating system</li>
              <li>Pages visited, timestamps, and referring URLs</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            <h3 className="mt-4 text-xl font-medium text-slate-950">2.3 Client Data Processed via Services</h3>
            <p className="mt-2">
              When providing AI services, we may process data supplied by clients (&quot;Client
              Data&quot;). This may include business documents, operational data, or customer
              information provided by the client.
            </p>
            <p className="mt-3">Xelera acts as a data processor for such Client Data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">3. How We Use Your Information</h2>
            <p className="mt-3">We use information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, operate, and improve our services</li>
              <li>Respond to inquiries and business requests</li>
              <li>Deliver AI-powered automations and solutions</li>
              <li>Communicate service updates and administrative messages</li>
              <li>Conduct analytics and improve website performance</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3 font-medium">We do not sell personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">4. Legal Basis for Processing (GDPR)</h2>
            <p className="mt-3">For individuals located in the European Economic Area (EEA), we process personal data based on consent, contractual necessity, legitimate interests, and legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">5. Cookies &amp; Tracking Technologies</h2>
            <p className="mt-3">We use cookies and similar technologies to improve website functionality, analyze traffic and usage patterns, and enhance user experience.</p>
            <p className="mt-3">You may control cookie settings through your browser preferences. Disabling cookies may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">6. Data Sharing &amp; Disclosure</h2>
            <p className="mt-3">We may share information with cloud hosting providers, analytics and monitoring tools, payment processors, professional advisors, and law enforcement or regulators when legally required.</p>
            <p className="mt-3">All third parties are contractually obligated to protect your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">7. AI &amp; Automated Processing</h2>
            <p className="mt-3">Our services may involve AI models and automated systems that process data to generate outputs.</p>
            <p className="mt-3 font-medium">Important notes:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>AI outputs are probabilistic and may require human review.</li>
              <li>Client data is processed solely for service delivery.</li>
              <li>Client data is not used to train public or shared AI models unless explicitly agreed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">8. International Data Transfers</h2>
            <p className="mt-3">Your data may be transferred to and processed in countries outside your jurisdiction, including the United States and India.</p>
            <p className="mt-3">When transferring data from the EEA, we rely on Standard Contractual Clauses (SCCs) and appropriate technical and organizational safeguards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">9. Data Retention</h2>
            <p className="mt-3">We retain personal data only as long as necessary for business and contractual purposes, to comply with legal obligations, and to resolve disputes and enforce agreements.</p>
            <p className="mt-3">Client data is retained according to contractual terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">10. Data Security</h2>
            <p className="mt-3">We implement reasonable administrative, technical, and organizational measures to protect data, including access controls, encryption where appropriate, and secure cloud infrastructure.</p>
            <p className="mt-3">However, no system is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">11. Your Privacy Rights</h2>
            <h3 className="mt-4 text-xl font-medium text-slate-950">11.1 GDPR Rights (EEA Residents)</h3>
            <p className="mt-2">You have the right to access your personal data, rectify inaccurate data, request erasure, restrict or object to processing, request data portability, and withdraw consent at any time.</p>
            <h3 className="mt-4 text-xl font-medium text-slate-950">11.2 US Privacy Rights (CCPA/CPRA)</h3>
            <p className="mt-2">For California residents, you may have the right to know what personal data is collected, request deletion, opt out of sale, and avoid discrimination. We do not sell data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">12. Children&apos;s Privacy</h2>
            <p className="mt-3">Our website and services are not intended for children under 13. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">13. Third-Party Links</h2>
            <p className="mt-3">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">14. Contact Us &amp; Data Requests</h2>
            <p className="mt-3">For privacy inquiries or to exercise your rights, contact:</p>
            <div className="mt-4">
              <p className="font-medium text-slate-950">Xelera.ai</p>
              <p>Email: <a href="mailto:privacy@xelera.ai" className="text-[var(--color-accent-strong)] hover:underline">privacy@xelera.ai</a></p>
              <p>Website: <a href="https://www.xelera.ai" target="_blank" rel="noreferrer" className="text-[var(--color-accent-strong)] hover:underline">https://www.xelera.ai</a></p>
            </div>
            <p className="mt-3">We will respond to requests in accordance with applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">15. Changes to This Privacy Policy</h2>
            <p className="mt-3">We may update this Privacy Policy periodically. Updates will be posted on this page with a revised &quot;Last Updated&quot; date.</p>
            <p className="mt-3">Continued use of our website or services constitutes acceptance of the updated policy.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
