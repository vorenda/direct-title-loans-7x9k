import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Direct Title Loans",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Privacy Policy" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="legal-page">
        <div className="container">
          <header className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="effective-date">Effective Date: December 26, 2025</p>
            <p className="last-updated">Last Updated: December 26, 2025</p>
          </header>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Direct Title Loans ("we," "us," "our") respects your privacy and is committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
                access the site or use our services.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Collect</h2>

              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Apply for a title loan</li>
                <li>Register on our website</li>
                <li>Contact us for customer service</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>Personal information may include:</p>
              <ul>
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Social Security Number</li>
                <li>Driver's license number</li>
                <li>Contact information (email, phone, address)</li>
                <li>Employment information</li>
                <li>Financial information (bank account details, income)</li>
                <li>Vehicle information (make, model, year, VIN, title)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>Process Applications:</strong> To evaluate and process your title loan application</li>
                <li><strong>Verify Identity:</strong> To verify your identity and prevent fraud</li>
                <li><strong>Provide Services:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Communication:</strong> To send you updates, notifications, and marketing materials (with your consent)</li>
                <li><strong>Compliance:</strong> To comply with legal obligations and regulatory requirements</li>
                <li><strong>Customer Service:</strong> To respond to your inquiries and provide support</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our website</li>
                <li><strong>Security:</strong> To protect against unauthorized access and fraudulent activity</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. How We Share Your Information</h2>
              <p>We may share your information with third parties in the following circumstances:</p>

              <h3>4.1 Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, including:
              </p>
              <ul>
                <li>Credit reporting agencies</li>
                <li>Identity verification services</li>
                <li>Payment processors</li>
                <li>IT service providers</li>
                <li>Marketing platforms</li>
                <li>Legal and compliance advisors</li>
              </ul>

              <h3>4.2 Legal Requirements</h3>
              <p>We may disclose your information when required by law, including:</p>
              <ul>
                <li>To comply with a subpoena, court order, or legal process</li>
                <li>To respond to government requests</li>
                <li>To enforce our terms and conditions</li>
                <li>To protect our rights, property, or safety</li>
                <li>To investigate fraud or security issues</li>
              </ul>

              <h3>4.3 Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that
                transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership.
              </p>

              <h3>4.4 With Your Consent</h3>
              <p>We may share your information for any other purpose with your explicit consent.</p>
            </section>

            <section className="legal-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information.
                Cookies are files with small amounts of data that are stored on your device.
              </p>

              <h3>5.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <h3>5.2 Managing Cookies</h3>
              <p>
                You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. These measures include:
              </p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and monitoring</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                unless a longer retention period is required or permitted by law. Retention periods vary depending on:
              </p>
              <ul>
                <li>The nature of the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Whether you have an active account or loan with us</li>
                <li>Dispute resolution and legal claims</li>
              </ul>
              <p>
                When we no longer need your information, we will securely delete or anonymize it in accordance with applicable laws.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Your Privacy Rights</h2>

              <h3>8.1 General Rights</h3>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                <li><strong>Data Portability:</strong> Request a copy of your information in a portable format</li>
              </ul>

              <h3>8.2 California Residents (CCPA)</h3>
              <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
              <ul>
                <li>Right to know what personal information we collect, use, and disclose</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt out of the sale of your personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p>
                To exercise these rights, please visit our <a href="/ccpa">CCPA Privacy Rights</a> page or contact us at
                <a href="tel:+18005551234"> 1-800-555-1234</a>.
              </p>

              <h3>8.3 Virginia Residents (VCDPA)</h3>
              <p>If you are a Virginia resident, you have rights under the Virginia Consumer Data Protection Act (VCDPA):</p>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to delete your personal data</li>
                <li>Right to obtain a copy of your personal data</li>
                <li>Right to opt out of targeted advertising and profiling</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of
                these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information
                from children. If we become aware that we have collected information from a child without parental consent, we will
                take steps to delete that information.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside of your state, province, or country
                where data protection laws may differ. By using our services, you consent to the transfer of your information to the
                United States and other jurisdictions.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Do Not Track Signals</h2>
              <p>
                We do not currently respond to "Do Not Track" (DNT) signals from web browsers. We may track your browsing activity
                across our website to improve your experience and deliver relevant content.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will
                notify you of any material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on this page</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending you an email notification (if you have provided your email address)</li>
              </ul>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>14. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="contact-info">
                <p><strong>Direct Title Loans</strong></p>
                <p>Email: <a href="mailto:privacy@directtitleloans.com">privacy@directtitleloans.com</a></p>
                <p>Phone: <a href="tel:+18005551234">1-800-555-1234</a></p>
                <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
              </div>
            </section>

            <section className="legal-section state-specific">
              <h2>15. State-Specific Disclosures</h2>

              <h3>15.1 California</h3>
              <p>
                We are licensed by the California Department of Financial Protection and Innovation (DFPI). For questions about our
                licensing or to verify our license status, visit{" "}
                <a href="https://dfpi.ca.gov" target="_blank" rel="noopener noreferrer">dfpi.ca.gov</a> or call (866) 275-2677.
              </p>

              <h3>15.2 Florida</h3>
              <p>
                We are licensed by the Florida Office of Financial Regulation (OFR). For questions about our licensing or to file a
                complaint, visit{" "}
                <a href="https://flofr.gov" target="_blank" rel="noopener noreferrer">flofr.gov</a> or call (850) 487-9687.
              </p>
            </section>

            <section className="legal-section">
              <h2>16. Consent to Electronic Communications</h2>
              <p>
                By using our services, you consent to receive electronic communications from us, including emails, text messages, and
                notifications. These communications may include service-related notices, updates, and marketing materials (which you
                can opt out of at any time).
              </p>
              <p>
                For more information about electronic communications, please review our{" "}
                <a href="/e-consent">E-Consent Agreement</a>.
              </p>
            </section>
          </div>
        </div>
      </article>

      
    </>
  );
}
