import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "CCPA Privacy Rights | Direct Title Loans",
  description: "California and Virginia residents: Exercise your privacy rights under CCPA and VCDPA.",
};

export default function CCPAPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "CCPA Privacy Rights" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="legal-page">
        <div className="container">
          <header className="legal-header">
            <h1>Your Privacy Rights</h1>
            <p className="subtitle">California Consumer Privacy Act (CCPA) &amp; Virginia Consumer Data Protection Act (VCDPA)</p>
          </header>

          <div className="legal-content">
            <section className="legal-section intro">
              <p className="lead">
                If you are a resident of California or Virginia, you have specific privacy rights under state law. This page
                explains your rights and how to exercise them.
              </p>
            </section>

            <section className="legal-section">
              <h2>1. Your Privacy Rights</h2>

              <h3>1.1 Right to Know</h3>
              <p>You have the right to know:</p>
              <ul>
                <li>What personal information we collect about you</li>
                <li>The categories of sources from which we collect information</li>
                <li>Our business purposes for collecting information</li>
                <li>The categories of third parties with whom we share information</li>
                <li>The specific pieces of personal information we have about you</li>
              </ul>

              <h3>1.2 Right to Delete</h3>
              <p>
                You have the right to request that we delete the personal information we have collected from you, subject to
                certain exceptions (such as legal obligations to retain data).
              </p>

              <h3>1.3 Right to Correct (Virginia Only)</h3>
              <p>
                Virginia residents have the right to request correction of inaccurate personal information.
              </p>

              <h3>1.4 Right to Opt Out</h3>
              <p>You have the right to opt out of:</p>
              <ul>
                <li>Sale of your personal information (we do not sell personal information)</li>
                <li>Sharing for targeted advertising purposes</li>
                <li>Profiling in furtherance of decisions that produce legal or similarly significant effects</li>
              </ul>

              <h3>1.5 Right to Data Portability</h3>
              <p>
                You have the right to request a copy of your personal information in a portable, machine-readable format.
              </p>

              <h3>1.6 Right to Non-Discrimination</h3>
              <p>
                We will not discriminate against you for exercising any of your privacy rights. You have the right to equal
                service and pricing regardless of whether you exercise your privacy rights.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Categories of Personal Information We Collect</h2>
              <p>We collect the following categories of personal information:</p>

              <table className="info-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Identifiers</td>
                    <td>Name, address, email, phone number, SSN, driver's license</td>
                  </tr>
                  <tr>
                    <td>Financial Information</td>
                    <td>Bank account, income, employment, credit history</td>
                  </tr>
                  <tr>
                    <td>Vehicle Information</td>
                    <td>Make, model, year, VIN, title, photos</td>
                  </tr>
                  <tr>
                    <td>Internet Activity</td>
                    <td>IP address, browsing history, pages visited</td>
                  </tr>
                  <tr>
                    <td>Geolocation</td>
                    <td>Approximate location based on IP address</td>
                  </tr>
                  <tr>
                    <td>Professional Information</td>
                    <td>Employment status, employer, job title, income</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use personal information for the following business purposes:</p>
              <ul>
                <li>Processing and servicing loan applications</li>
                <li>Verifying identity and preventing fraud</li>
                <li>Providing customer service and support</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Improving our services and website</li>
                <li>Marketing our services (with your consent)</li>
                <li>Internal analytics and research</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. How We Share Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Companies that perform services on our behalf (credit bureaus, IT providers, marketing platforms)</li>
                <li><strong>Legal Authorities:</strong> Government agencies when required by law</li>
                <li><strong>Business Partners:</strong> With your consent for specific purposes</li>
                <li><strong>Affiliated Companies:</strong> Within our corporate family</li>
              </ul>
              <p className="emphasis">
                We do NOT sell your personal information to third parties.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. How to Exercise Your Rights</h2>
              <p>
                To exercise any of your privacy rights, please submit a request using the form below or contact us at:
              </p>
              <ul>
                <li><strong>Phone:</strong> <a href="tel:+18005551234">1-800-555-1234</a></li>
                <li><strong>Email:</strong> <a href="mailto:privacy@directtitleloans.com">privacy@directtitleloans.com</a></li>
              </ul>

              <h3>5.1 Verification Process</h3>
              <p>
                To protect your privacy, we must verify your identity before processing your request. We will ask you to provide:
              </p>
              <ul>
                <li>Your full name</li>
                <li>Email address or phone number on file</li>
                <li>Last 4 digits of your Social Security Number (for certain requests)</li>
                <li>Additional information to confirm your identity</li>
              </ul>

              <h3>5.2 Authorized Agents</h3>
              <p>
                You may designate an authorized agent to submit requests on your behalf. The agent must provide:
              </p>
              <ul>
                <li>Written authorization signed by you</li>
                <li>Proof of the agent's identity</li>
                <li>Verification of your identity</li>
              </ul>

              <h3>5.3 Response Timeframe</h3>
              <p>
                We will respond to your request within 45 days. If we need additional time, we will notify you and may extend
                the response period by an additional 45 days.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Submit a Privacy Request</h2>
              <div className="form-container">
                <form className="privacy-form">
                  <div className="form-section">
                    <h3>Your Information</h3>
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State of Residence *</label>
                      <select id="state" name="state" required>
                        <option value="">Select state...</option>
                        <option value="CA">California</option>
                        <option value="VA">Virginia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Request Type</h3>
                    <p className="section-description">Select all that apply:</p>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="know" />
                        <span><strong>Right to Know:</strong> Request information about what personal data we collect</span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="access" />
                        <span><strong>Right to Access:</strong> Request a copy of my personal data</span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="delete" />
                        <span><strong>Right to Delete:</strong> Request deletion of my personal data</span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="correct" />
                        <span><strong>Right to Correct:</strong> Request correction of inaccurate data (VA only)</span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="optout" />
                        <span><strong>Opt Out:</strong> Opt out of targeted advertising/profiling</span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="requestType" value="portability" />
                        <span><strong>Data Portability:</strong> Request portable copy of my data</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Additional Details</h3>
                    <div className="form-group">
                      <label htmlFor="details">Please provide any additional details about your request:</label>
                      <textarea id="details" name="details" rows={4}></textarea>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Verification</h3>
                    <div className="form-group">
                      <label htmlFor="lastFour">Last 4 Digits of SSN (for verification) *</label>
                      <input type="text" id="lastFour" name="lastFour" maxLength={4} pattern="[0-9]{4}" required />
                      <small>We will use this to verify your identity</small>
                    </div>
                  </div>

                  <div className="consent-section">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>I certify that I am the individual whose personal information is the subject of this request or I am authorized to act on their behalf</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-accent btn-lg submit-btn">
                    Submit Privacy Request
                  </button>

                  <p className="form-disclaimer">
                    We will verify your identity before processing your request. You will receive a confirmation email within
                    10 business days. We will respond to your request within 45 days.
                  </p>
                </form>
              </div>
            </section>

            <section className="legal-section">
              <h2>7. Contact Information</h2>
              <p>For questions about your privacy rights or this page, contact us:</p>
              <div className="contact-info">
                <p><strong>Direct Title Loans - Privacy Department</strong></p>
                <p>Email: <a href="mailto:privacy@directtitleloans.com">privacy@directtitleloans.com</a></p>
                <p>Phone: <a href="tel:+18005551234">1-800-555-1234</a></p>
                <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
              </div>
            </section>

            <section className="legal-section">
              <h2>8. California Disclosure</h2>
              <p>
                <strong>Notice of Financial Incentive:</strong> We do not offer any financial incentives or price differences
                based on the collection, sale, or deletion of personal information.
              </p>
              <p>
                <strong>Shine the Light Law:</strong> California residents may request information about our disclosure of
                personal information to third parties for their direct marketing purposes. We do not share personal information
                with third parties for their direct marketing purposes.
              </p>
              <p>
                <strong>Do Not Sell My Personal Information:</strong> We do not sell personal information. If our practices
                change, we will update this page and provide you with the right to opt out.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Last Updated</h2>
              <p>
                This CCPA Privacy Rights page was last updated on December 26, 2025. We may update this page from time to time
                to reflect changes in our practices or legal requirements.
              </p>
            </section>
          </div>
        </div>
      </article>

      
    </>
  );
}
