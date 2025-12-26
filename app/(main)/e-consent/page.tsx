import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "E-Consent Agreement | Direct Title Loans",
  description: "Electronic consent agreement for receiving loan documents and communications electronically.",
};

export default function EConsentPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "E-Consent Agreement" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="legal-page">
        <div className="container">
          <header className="legal-header">
            <h1>Electronic Consent Agreement</h1>
            <p className="effective-date">Effective Date: December 26, 2025</p>
          </header>

          <div className="legal-content">
            <section className="legal-section intro">
              <p className="lead">
                Before you can receive electronic documents and communications from Direct Title Loans, federal law requires that
                we obtain your consent. This E-Consent Agreement explains your rights and responsibilities when you choose to
                receive information electronically.
              </p>
            </section>

            <section className="legal-section">
              <h2>1. Scope of Consent</h2>
              <p>
                By providing your consent, you agree that we may provide you with the following documents and communications in
                electronic form instead of paper:
              </p>
              <ul>
                <li>Loan applications and pre-qualification forms</li>
                <li>Loan agreements and promissory notes</li>
                <li>Truth in Lending Act (TILA) disclosures</li>
                <li>Privacy policies and notices</li>
                <li>Payment schedules and account statements</li>
                <li>Notices of default or delinquency</li>
                <li>Collection notices</li>
                <li>Promotional and marketing materials</li>
                <li>Any other documents related to your loan or account</li>
              </ul>
              <p>
                Your consent applies to all transactions and communications during your relationship with us, including future loans.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. How You Will Receive Electronic Documents</h2>
              <p>We may deliver electronic documents and communications to you by:</p>
              <ul>
                <li><strong>Email:</strong> We will send documents to the email address you provide</li>
                <li><strong>Text Message (SMS):</strong> We may send notifications and links via text message</li>
                <li><strong>Online Account:</strong> Documents may be available for download in your online account</li>
                <li><strong>Website Posting:</strong> We may post documents on our website and notify you by email</li>
              </ul>
              <p>
                It is your responsibility to check your email regularly and maintain a valid email address with us. You must notify
                us immediately if your email address changes.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. System Requirements</h2>
              <p>
                To access and retain electronic documents, you will need:
              </p>

              <h3>3.1 Hardware</h3>
              <ul>
                <li>A computer, smartphone, or tablet with internet access</li>
                <li>Sufficient storage space to save documents</li>
                <li>A printer if you wish to print documents (optional)</li>
              </ul>

              <h3>3.2 Software</h3>
              <ul>
                <li>A current web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>PDF reader (Adobe Acrobat Reader or equivalent)</li>
                <li>Email account with access to view emails and attachments</li>
              </ul>

              <h3>3.3 Internet Connection</h3>
              <ul>
                <li>Broadband or mobile data connection</li>
                <li>Sufficient speed to access our website and download documents</li>
              </ul>

              <h3>3.4 Skills</h3>
              <ul>
                <li>Ability to access the internet and navigate websites</li>
                <li>Ability to open and read PDF files</li>
                <li>Ability to save or print documents for your records</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Right to Request Paper Copies</h2>
              <p>
                Even if you consent to electronic delivery, you have the right to request paper copies of any electronic document.
                To request a paper copy:
              </p>
              <ul>
                <li>Call us at <a href="tel:+18005551234">1-800-555-1234</a></li>
                <li>Email us at <a href="mailto:documents@directtitleloans.com">documents@directtitleloans.com</a></li>
                <li>Write to us at the address listed on our website</li>
              </ul>
              <p>
                We will provide paper copies free of charge for the first request each month. Additional requests may incur a
                reasonable fee for printing and mailing costs.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Right to Withdraw Consent</h2>

              <h3>5.1 How to Withdraw</h3>
              <p>
                You have the right to withdraw your consent to receive electronic communications at any time. To withdraw consent:
              </p>
              <ul>
                <li>Call us at <a href="tel:+18005551234">1-800-555-1234</a></li>
                <li>Email us at <a href="mailto:econsent@directtitleloans.com">econsent@directtitleloans.com</a></li>
                <li>Log in to your online account and update your communication preferences</li>
              </ul>

              <h3>5.2 Effect of Withdrawal</h3>
              <p>
                If you withdraw consent, we will provide all future documents in paper format by mail. Withdrawal of consent will
                not affect the legal validity of any electronic communications provided before your withdrawal.
              </p>
              <p>
                Please note: Withdrawal of consent may delay loan processing or servicing, as paper documents take longer to
                deliver. We will not charge you any fees for withdrawing consent.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Updating Your Contact Information</h2>
              <p>
                You must keep your contact information current with us. If any of the following changes, you must notify us
                immediately:
              </p>
              <ul>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
              </ul>
              <p>
                To update your information:
              </p>
              <ul>
                <li>Log in to your online account and update your profile</li>
                <li>Call us at <a href="tel:+18005551234">1-800-555-1234</a></li>
                <li>Email us at <a href="mailto:info@directtitleloans.com">info@directtitleloans.com</a></li>
              </ul>
              <p className="warning">
                <strong>Important:</strong> If we cannot reach you via your email address on file, we may need to suspend electronic
                delivery and send documents by mail, which may delay important communications.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Retention of Electronic Records</h2>
              <p>
                You should save or print electronic documents for your records. We recommend:
              </p>
              <ul>
                <li>Downloading and saving all documents to your computer or device</li>
                <li>Organizing documents in a folder for easy access</li>
                <li>Making backup copies on external storage or cloud services</li>
                <li>Printing important documents such as loan agreements</li>
              </ul>
              <p>
                While we maintain electronic copies of documents, it is your responsibility to retain records for your personal use.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Security</h2>
              <p>
                We use industry-standard security measures to protect electronic communications, including:
              </p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers for document storage</li>
                <li>Authentication and access controls</li>
                <li>Regular security monitoring and updates</li>
              </ul>
              <p>
                You are responsible for:
              </p>
              <ul>
                <li>Maintaining the security of your email account</li>
                <li>Using strong passwords and changing them regularly</li>
                <li>Not sharing your account credentials</li>
                <li>Logging out after accessing your online account</li>
                <li>Reporting any unauthorized access immediately</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Federal Law Notice</h2>
              <p>
                This E-Consent Agreement complies with the federal Electronic Signatures in Global and National Commerce Act
                (E-SIGN Act) and the Uniform Electronic Transactions Act (UETA).
              </p>
              <p>
                Under these laws:
              </p>
              <ul>
                <li>Electronic signatures have the same legal effect as handwritten signatures</li>
                <li>Electronic documents have the same legal effect as paper documents</li>
                <li>You have the right to receive paper copies upon request</li>
                <li>You have the right to withdraw consent at any time</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>10. State-Specific Requirements</h2>

              <h3>10.1 California</h3>
              <p>
                California law requires additional disclosures for electronic communications. By consenting, you acknowledge that:
              </p>
              <ul>
                <li>Electronic documents are legally binding</li>
                <li>You have the right to request paper copies</li>
                <li>You may withdraw consent without affecting prior transactions</li>
              </ul>

              <h3>10.2 Florida</h3>
              <p>
                Florida law permits electronic delivery of loan documents and disclosures. You have the same rights and protections
                for electronic documents as for paper documents.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to This Agreement</h2>
              <p>
                We may update this E-Consent Agreement from time to time. If we make material changes, we will notify you by:
              </p>
              <ul>
                <li>Email to your address on file</li>
                <li>Posting the updated agreement on our website</li>
                <li>Requesting your consent to the updated terms</li>
              </ul>
              <p>
                Your continued use of electronic communications after changes become effective constitutes your acceptance of the
                updated E-Consent Agreement.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Questions or Concerns</h2>
              <p>
                If you have questions about this E-Consent Agreement or need assistance accessing electronic documents, please
                contact us:
              </p>
              <div className="contact-info">
                <p><strong>Direct Title Loans</strong></p>
                <p>Email: <a href="mailto:econsent@directtitleloans.com">econsent@directtitleloans.com</a></p>
                <p>Phone: <a href="tel:+18005551234">1-800-555-1234</a></p>
                <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
              </div>
            </section>

            <section className="legal-section consent-confirmation">
              <h2>13. Confirmation of Consent</h2>
              <p>
                By checking the consent box on our application form or clicking "I Agree" during the application process, you
                confirm that:
              </p>
              <ul>
                <li>You have read and understand this E-Consent Agreement</li>
                <li>You have access to the necessary hardware and software to receive electronic documents</li>
                <li>You consent to receive all documents and communications electronically</li>
                <li>You agree to notify us immediately if your email address changes</li>
                <li>You understand your right to request paper copies</li>
                <li>You understand your right to withdraw consent at any time</li>
              </ul>
              <p className="emphasis">
                If you do not consent to electronic delivery, please contact us to arrange for paper delivery of all documents.
              </p>
            </section>

            <section className="legal-section demo-section">
              <h2>14. Demonstration of Access</h2>
              <p>
                If you can read this E-Consent Agreement on your screen, your system meets the minimum requirements to receive
                electronic documents from us.
              </p>
              <p>
                To ensure you can access all document types:
              </p>
              <ol>
                <li>
                  Click this sample PDF link to test your ability to open PDF files:
                  <span className="sample-pdf-link"> [Sample PDF Test]</span>
                </li>
                <li>Verify that you can save the PDF to your device</li>
                <li>If you encounter any issues, please contact us before providing consent</li>
              </ol>
            </section>
          </div>
        </div>
      </article>

      
    </>
  );
}
