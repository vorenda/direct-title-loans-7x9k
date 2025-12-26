import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for a Title Loan | Direct Title Loans",
  description: "Apply for a title loan online. Fast approval, same-day funding available. Bad credit OK. Get started now!",
};

export default function ApplyPage() {
  return (
    <div className="apply-page">
      <div className="container">
        <header className="apply-header">
          <h1>Apply for a Title Loan</h1>
          <p className="subtitle">Get fast cash using your vehicle as collateral. Complete the form below to get started.</p>
        </header>

        <div className="apply-content">
          <div className="form-card">
            <form className="apply-form">
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
              </div>

              <div className="form-section">
                <h2>Vehicle Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="year">Year *</label>
                    <input type="number" id="year" name="year" placeholder="2020" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="make">Make *</label>
                    <input type="text" id="make" name="make" placeholder="Ford, Toyota, etc." required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="model">Model *</label>
                    <input type="text" id="model" name="model" placeholder="F-150, Camry, etc." required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mileage">Mileage *</label>
                    <input type="number" id="mileage" name="mileage" placeholder="50000" required />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Loan Information</h2>
                <div className="form-group">
                  <label htmlFor="loanAmount">Desired Loan Amount *</label>
                  <select id="loanAmount" name="loanAmount" required>
                    <option value="">Select amount...</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
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

              <div className="consent-section">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>I agree to the <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a></span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>I consent to receive electronic communications and agree to the <a href="/e-consent" target="_blank">E-Consent Agreement</a></span>
                </label>
              </div>

              <button type="submit" className="btn btn-accent btn-lg submit-btn">
                Submit Application
              </button>

              <p className="form-disclaimer">
                By submitting this form, you authorize Direct Title Loans to contact you regarding your application.
                This is not an offer of credit. Actual loan terms depend on vehicle value and applicant qualifications.
              </p>
            </form>
          </div>

          <aside className="info-sidebar">
            <div className="info-card">
              <h3>What Happens Next?</h3>
              <ol className="process-list">
                <li>We'll review your application within 30 minutes</li>
                <li>We'll contact you to verify vehicle details</li>
                <li>You'll receive a loan offer with transparent terms</li>
                <li>Get funded as soon as the same day!</li>
              </ol>
            </div>

            <div className="info-card">
              <h3>What You'll Need</h3>
              <ul className="requirements-list">
                <li>Vehicle title in your name</li>
                <li>Valid government-issued ID</li>
                <li>Proof of income</li>
                <li>Proof of residence</li>
                <li>Vehicle for inspection (photos OK)</li>
              </ul>
            </div>

            <div className="info-card help-card">
              <h3>Need Help?</h3>
              <p>Call us at <a href="tel:+18005551234">1-800-555-1234</a></p>
              <p>Monday - Friday: 9 AM - 7 PM<br />Saturday: 9 AM - 5 PM</p>
            </div>
          </aside>
        </div>
      </div>

      
    </div>
  );
}
