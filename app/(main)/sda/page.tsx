import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Data Authorization | Direct Title Loans",
  description: "Authorize us to share your information with our lending network.",
};

export default function SDAPage() {
  return (
    <div className="sda-page">
      <div className="container">
        <header className="sda-header">
          <h1>Simple Data Authorization (SDA)</h1>
          <p className="subtitle">
            By completing this form, you authorize us to share your information with our network of lenders and partners
            to find you the best title loan options.
          </p>
        </header>

        <div className="sda-content">
          <div className="form-card">
            <form className="sda-form">
              <div className="form-section">
                <h2>Personal Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
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
                  <label htmlFor="ssn">Social Security Number *</label>
                  <input type="text" id="ssn" name="ssn" placeholder="XXX-XX-XXXX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input type="date" id="dob" name="dob" required />
                </div>
              </div>

              <div className="form-section">
                <h2>Address</h2>
                <div className="form-group">
                  <label htmlFor="street">Street Address *</label>
                  <input type="text" id="street" name="street" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input type="text" id="city" name="city" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <select id="state" name="state" required>
                      <option value="">Select state...</option>
                      <option value="CA">California</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zip">ZIP Code *</label>
                    <input type="text" id="zip" name="zip" pattern="[0-9]{5}" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="residenceYears">Years at Address *</label>
                    <input type="number" id="residenceYears" name="residenceYears" min="0" required />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Employment Information</h2>
                <div className="form-group">
                  <label htmlFor="employer">Employer Name *</label>
                  <input type="text" id="employer" name="employer" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title *</label>
                    <input type="text" id="jobTitle" name="jobTitle" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="employmentYears">Years Employed *</label>
                    <input type="number" id="employmentYears" name="employmentYears" min="0" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="monthlyIncome">Gross Monthly Income *</label>
                    <input type="number" id="monthlyIncome" name="monthlyIncome" min="0" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="payFrequency">Pay Frequency *</label>
                    <select id="payFrequency" name="payFrequency" required>
                      <option value="">Select frequency...</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="semimonthly">Semi-Monthly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Bank Information</h2>
                <div className="form-group">
                  <label htmlFor="bankName">Bank Name *</label>
                  <input type="text" id="bankName" name="bankName" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="accountType">Account Type *</label>
                    <select id="accountType" name="accountType" required>
                      <option value="">Select type...</option>
                      <option value="checking">Checking</option>
                      <option value="savings">Savings</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="accountYears">Years with Bank *</label>
                    <input type="number" id="accountYears" name="accountYears" min="0" required />
                  </div>
                </div>
              </div>

              <div className="authorization-section">
                <h2>Authorization and Consent</h2>
                <div className="auth-content">
                  <p>
                    By submitting this form, you authorize Direct Title Loans and its network of lenders and partners to:
                  </p>
                  <ul>
                    <li>Obtain your credit report from one or more consumer reporting agencies</li>
                    <li>Verify your employment and income information</li>
                    <li>Contact you via phone, email, and text message regarding your application</li>
                    <li>Share your information with licensed lenders in our network</li>
                    <li>Use automated calling technology and pre-recorded messages</li>
                  </ul>

                  <div className="consent-checkboxes">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I authorize a credit check and verify that all information provided is accurate and truthful
                      </span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I consent to receive electronic communications, including marketing messages, from Direct Title Loans
                        and its lending partners. I understand I can opt out at any time.
                      </span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I agree to the <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>,
                        <a href="/privacy-policy" target="_blank"> Privacy Policy</a>, and
                        <a href="/e-consent" target="_blank"> E-Consent Agreement</a>
                      </span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I understand that this is not a loan application, but an authorization to share my information
                        with lenders who may contact me with loan offers
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-accent btn-lg submit-btn">
                Authorize and Submit
              </button>

              <p className="form-disclaimer">
                <strong>Important:</strong> Submitting this authorization does not guarantee loan approval. Lenders in our
                network will review your information and contact you if you qualify. You are under no obligation to accept
                any loan offer. All loan terms, including interest rates and fees, are determined by the individual lender.
              </p>
            </form>
          </div>

          <aside className="info-sidebar">
            <div className="info-card">
              <h3>What is SDA?</h3>
              <p>
                Simple Data Authorization (SDA) allows us to share your information with our network of trusted lenders.
                This increases your chances of finding the best title loan offer.
              </p>
            </div>

            <div className="info-card">
              <h3>How It Works</h3>
              <ol className="process-list">
                <li>You complete and submit this authorization form</li>
                <li>We share your information with lenders in our network</li>
                <li>Qualified lenders will contact you with loan offers</li>
                <li>You compare offers and choose the best one for you</li>
                <li>Complete the application directly with your chosen lender</li>
              </ol>
            </div>

            <div className="info-card security-card">
              <h3>Your Information is Secure</h3>
              <p>
                We use bank-level encryption to protect your personal and financial information. We only share your
                information with licensed, vetted lenders in our network.
              </p>
            </div>

            <div className="info-card help-card">
              <h3>Questions?</h3>
              <p>Call us at <a href="tel:+18005551234">1-800-555-1234</a></p>
              <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
            </div>
          </aside>
        </div>
      </div>

      
    </div>
  );
}
