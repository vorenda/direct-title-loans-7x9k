import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | Direct Title Loans",
  description: "Read our terms and conditions for using Direct Title Loans services.",
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Terms and Conditions" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="legal-page">
        <div className="container">
          <header className="legal-header">
            <h1>Terms and Conditions</h1>
            <p className="effective-date">Effective Date: December 26, 2025</p>
            <p className="last-updated">Last Updated: December 26, 2025</p>
          </header>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Borrower," "you," "your")
                and Direct Title Loans ("Lender," "we," "us," "our"). By accessing our website, submitting a loan application, or
                using our services, you agree to be bound by these Terms.
              </p>
              <p>
                IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR WEBSITE OR SERVICES.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Eligibility Requirements</h2>
              <p>To be eligible for a title loan, you must meet the following requirements:</p>
              <ul>
                <li>Be at least 18 years of age</li>
                <li>Be a U.S. citizen or permanent resident</li>
                <li>Own a qualifying vehicle with a clear title in your name</li>
                <li>Have a valid government-issued photo ID</li>
                <li>Provide proof of income</li>
                <li>Provide proof of residence</li>
                <li>Have verifiable contact information</li>
                <li>Reside in a state where we are licensed to operate (California or Florida)</li>
              </ul>
              <p>
                We reserve the right to verify all information provided and may request additional documentation.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Loan Application Process</h2>

              <h3>3.1 Application Submission</h3>
              <p>
                You may apply for a title loan by submitting an online application, calling us, or visiting a branch location.
                All information provided must be accurate, complete, and truthful.
              </p>

              <h3>3.2 Vehicle Inspection</h3>
              <p>
                We require a physical or photographic inspection of your vehicle to determine its value and condition. The loan
                amount will be based on the vehicle's assessed value and your ability to repay.
              </p>

              <h3>3.3 Approval and Funding</h3>
              <p>
                Loan approval is subject to verification of your information and vehicle. If approved, you will receive a loan
                agreement detailing all terms, including the loan amount, interest rate, fees, and repayment schedule. You must
                review and sign the agreement before funds are disbursed.
              </p>
              <p>
                Funding may be available as soon as the same business day upon completion of all requirements.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Loan Terms and Conditions</h2>

              <h3>4.1 Loan Amounts</h3>
              <p>
                Loan amounts range from $2,500 to $50,000, depending on your vehicle's value and your ability to repay. The actual
                loan amount will be determined during the application process.
              </p>

              <h3>4.2 Interest Rates and Fees</h3>
              <p><strong>California:</strong></p>
              <ul>
                <li>Maximum APR: 30% for loans of $2,500 or more</li>
                <li>No prepayment penalties</li>
                <li>Fees disclosed in your loan agreement</li>
              </ul>
              <p><strong>Florida:</strong></p>
              <ul>
                <li>Tiered interest rates: 30% on first $2,000; 24% on $2,000-$3,000; 18% on amounts over $3,000</li>
                <li>30-day minimum initial term</li>
                <li>Maximum $25 credit investigation fee</li>
                <li>No prepayment penalties</li>
              </ul>

              <h3>4.3 Repayment Terms</h3>
              <p>
                Repayment terms vary by state and loan amount. Your loan agreement will specify your payment schedule, due dates,
                and payment methods. Typical repayment terms range from 12 to 36 months.
              </p>

              <h3>4.4 Prepayment</h3>
              <p>
                You may prepay your loan in full or in part at any time without penalty. Prepayment may reduce the total interest
                you pay over the life of the loan.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Collateral and Title</h2>

              <h3>5.1 Vehicle as Collateral</h3>
              <p>
                Your vehicle serves as collateral for the loan. While the loan is outstanding, we hold a lien on your vehicle's
                title. You retain possession and use of your vehicle during the loan term.
              </p>

              <h3>5.2 Title Requirements</h3>
              <p>
                The vehicle title must be in your name and free of other liens (except in certain refinancing situations). You must
                provide the original title or proof of ownership.
              </p>

              <h3>5.3 Insurance Requirements</h3>
              <p>
                You must maintain comprehensive and collision insurance on the vehicle for the duration of the loan. We must be
                listed as a lienholder on your insurance policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Default and Repossession</h2>

              <h3>6.1 Events of Default</h3>
              <p>You will be in default if you:</p>
              <ul>
                <li>Fail to make a payment when due</li>
                <li>Fail to maintain required insurance</li>
                <li>Provide false or misleading information</li>
                <li>File for bankruptcy</li>
                <li>Sell or transfer the vehicle without our consent</li>
                <li>Use the vehicle for illegal purposes</li>
              </ul>

              <h3>6.2 Remedies Upon Default</h3>
              <p>
                If you default, we may take the following actions:
              </p>
              <ul>
                <li>Accelerate the entire balance due</li>
                <li>Charge late fees as permitted by state law</li>
                <li>Report the default to credit bureaus</li>
                <li>Repossess the vehicle</li>
                <li>Pursue legal action to recover the debt</li>
              </ul>

              <h3>6.3 Right to Cure</h3>
              <p>
                Before repossession, we will provide you with notice and an opportunity to cure the default as required by state law.
                The notice period and cure requirements vary by state.
              </p>

              <h3>6.4 Repossession Process</h3>
              <p>
                If repossession occurs, we will sell the vehicle and apply the proceeds to your outstanding balance. If the sale
                proceeds exceed your balance, we will return the surplus to you. If the proceeds are insufficient, you remain
                responsible for the deficiency balance.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Privacy and Data Protection</h2>
              <p>
                We collect, use, and protect your personal information as described in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>. By using our services, you consent to our privacy practices.
              </p>
              <p>
                We may share your information with credit bureaus, service providers, and as required by law. You have rights
                regarding your personal information as detailed in our Privacy Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Electronic Communications and Signatures</h2>
              <p>
                You consent to receive electronic communications from us, including loan documents, notices, and disclosures.
                Electronic signatures have the same legal effect as handwritten signatures.
              </p>
              <p>
                For more information, please review our <a href="/e-consent">E-Consent Agreement</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Credit Reporting</h2>
              <p>
                We may report your loan and payment history to credit bureaus. Timely payments can help build your credit, while
                late or missed payments may negatively impact your credit score.
              </p>
              <p>
                We may also obtain your credit report to evaluate your application and monitor your creditworthiness during the
                loan term.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Prohibited Uses</h2>
              <p>You agree NOT to:</p>
              <ul>
                <li>Provide false, inaccurate, or misleading information</li>
                <li>Use our services for fraudulent or illegal purposes</li>
                <li>Impersonate another person or entity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the operation of our website or services</li>
                <li>Use automated tools to access or scrape our website</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>11. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is our property or the property
                of our licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our content without our express written
                permission.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Disclaimers and Limitation of Liability</h2>

              <h3>12.1 Website Disclaimer</h3>
              <p className="caps-warning">
                OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
                WARRANT THAT OUR WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>

              <h3>12.2 No Guarantee of Approval</h3>
              <p>
                Submitting a loan application does not guarantee approval. We reserve the right to deny any application for any
                reason permitted by law.
              </p>

              <h3>12.3 Limitation of Liability</h3>
              <p className="caps-warning">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="caps-warning">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN FEES DURING THE 12 MONTHS
                PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Direct Title Loans and its officers, directors, employees, and
                agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of:
              </p>
              <ul>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable laws</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>14. Dispute Resolution and Arbitration</h2>

              <h3>14.1 Mandatory Arbitration</h3>
              <p className="caps-warning">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or our services shall be resolved by
                binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims
                qualify.
              </p>

              <h3>14.2 Arbitration Procedure</h3>
              <p>
                Arbitration will be conducted by the American Arbitration Association (AAA) under its Consumer Arbitration Rules.
                The arbitration will take place in the county where you reside or at another mutually agreed location.
              </p>

              <h3>14.3 Class Action Waiver</h3>
              <p className="caps-warning">
                YOU AND DIRECT TITLE LOANS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
                CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
              </p>

              <h3>14.4 Exceptions to Arbitration</h3>
              <p>
                Either party may seek injunctive or other equitable relief in court to protect intellectual property rights or
                confidential information.
              </p>

              <h3>14.5 Opt-Out Right</h3>
              <p>
                You have the right to opt out of arbitration by sending written notice to us within 30 days of accepting these Terms.
                Your notice must include your name, address, and a clear statement that you wish to opt out of arbitration.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the state where you reside
                (California or Florida), without regard to conflict of law principles.
              </p>
              <p>
                Any arbitration or court proceeding shall take place in the county where you reside.
              </p>
            </section>

            <section className="legal-section">
              <h2>16. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue
                in full force and effect.
              </p>
            </section>

            <section className="legal-section">
              <h2>17. Entire Agreement</h2>
              <p>
                These Terms, together with your loan agreement, Privacy Policy, and E-Consent Agreement, constitute the entire
                agreement between you and Direct Title Loans regarding our services and supersede all prior agreements.
              </p>
            </section>

            <section className="legal-section">
              <h2>18. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul>
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notification (if you have an active loan)</li>
              </ul>
              <p>
                Your continued use of our services after changes become effective constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>19. Assignment</h2>
              <p>
                You may not assign or transfer your rights or obligations under these Terms without our written consent. We may
                assign or transfer our rights and obligations to any third party without restriction.
              </p>
            </section>

            <section className="legal-section">
              <h2>20. Waiver</h2>
              <p>
                Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other
                provision. No waiver shall be effective unless in writing and signed by us.
              </p>
            </section>

            <section className="legal-section">
              <h2>21. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <div className="contact-info">
                <p><strong>Direct Title Loans</strong></p>
                <p>Email: <a href="mailto:legal@directtitleloans.com">legal@directtitleloans.com</a></p>
                <p>Phone: <a href="tel:+18005551234">1-800-555-1234</a></p>
                <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
              </div>
            </section>

            <section className="legal-section state-specific">
              <h2>22. State-Specific Provisions</h2>

              <h3>22.1 California</h3>
              <p>
                We are licensed by the California Department of Financial Protection and Innovation (DFPI). License verification:
                <a href="https://dfpi.ca.gov" target="_blank" rel="noopener noreferrer"> dfpi.ca.gov</a>
              </p>
              <p>
                California residents have the right to request information about how we share certain categories of personal
                information with third parties. See our <a href="/privacy-policy">Privacy Policy</a> for details.
              </p>

              <h3>22.2 Florida</h3>
              <p>
                We are licensed by the Florida Office of Financial Regulation (OFR). License verification:
                <a href="https://flofr.gov" target="_blank" rel="noopener noreferrer"> flofr.gov</a>
              </p>
              <p>
                Florida law provides that title loan contracts may not contain provisions for add-on interest. All interest is
                calculated on a simple interest basis.
              </p>
            </section>

            <section className="legal-section important">
              <h2>ACKNOWLEDGMENT</h2>
              <p className="caps-warning">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND
                CONDITIONS. IF YOU DO NOT AGREE, DO NOT USE OUR SERVICES.
              </p>
            </section>
          </div>
        </div>
      </article>

      
    </>
  );
}
