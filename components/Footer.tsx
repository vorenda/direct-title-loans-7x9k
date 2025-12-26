"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Direct Title Loans</h3>
            <p className="footer-text">
              Fast cash using your vehicle as collateral. Licensed in California and Florida.
              Same-day funding available.
            </p>
            <div className="footer-contact">
              <a href="tel:+18005551234" className="footer-link">1-800-555-1234</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/car-title-loans" className="footer-link">Car Title Loans</Link></li>
              <li><Link href="/services/truck-title-loans" className="footer-link">Truck Title Loans</Link></li>
              <li><Link href="/services/motorcycle-title-loans" className="footer-link">Motorcycle Title Loans</Link></li>
              <li><Link href="/services/rv-title-loans" className="footer-link">RV Title Loans</Link></li>
              <li><Link href="/services/emergency-title-loans" className="footer-link">Emergency Title Loans</Link></li>
              <li><Link href="/services/title-loan-refinancing" className="footer-link">Refinancing</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="footer-column">
            <h4 className="footer-heading">Locations</h4>
            <ul className="footer-links">
              <li><Link href="/locations/california" className="footer-link">California</Link></li>
              <li><Link href="/locations/florida" className="footer-link">Florida</Link></li>
              <li><Link href="/locations/california/los-angeles" className="footer-link">Los Angeles, CA</Link></li>
              <li><Link href="/locations/california/san-diego" className="footer-link">San Diego, CA</Link></li>
              <li><Link href="/locations/florida/miami" className="footer-link">Miami, FL</Link></li>
              <li><Link href="/locations/florida/tampa" className="footer-link">Tampa, FL</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="footer-link">Terms & Conditions</Link></li>
              <li><Link href="/e-consent" className="footer-link">E-Consent</Link></li>
              <li><Link href="/ccpa" className="footer-link">CCPA Privacy Rights</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="footer-disclaimers">
          <p className="disclaimer-text">
            <strong>Important Disclosures:</strong> Title loans are high-cost short-term loans. Please borrow responsibly and consider all alternatives before applying.
            Failure to repay your title loan according to the terms of your agreement may result in repossession of your vehicle.
            Loan approval, amounts, terms, and rates vary by state, vehicle value, and applicant qualifications.
          </p>
          <p className="disclaimer-text">
            <strong>California Residents:</strong> Direct Title Loans is licensed by the California Department of Financial Protection and Innovation (DFPI).
            California law caps title loan APR at 30% for loans of $2,500 or more. No prepayment penalties.
            Verify our license at <a href="https://dfpi.ca.gov/verify-a-license/" target="_blank" rel="noopener noreferrer" className="footer-link">dfpi.ca.gov/verify-a-license</a>.
          </p>
          <p className="disclaimer-text">
            <strong>Florida Residents:</strong> Direct Title Loans is licensed by the Florida Office of Financial Regulation (OFR).
            Florida law establishes tiered interest rate caps: 30% on first $2,000; 24% on $2,000-$3,000; 18% on amounts over $3,000.
          </p>
          <p className="disclaimer-text">
            This is not an offer or solicitation for a loan. Actual terms and availability vary by state and applicant.
            Equal Opportunity Lender. Subject to credit approval and state regulations.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Direct Title Loans. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-bg-dark);
          color: var(--color-text-inverse);
          padding: var(--space-16) 0 var(--space-8);
        }

        .footer-container {
          max-width: var(--container-xl);
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer-heading {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-inverse);
          margin-bottom: var(--space-2);
        }

        .footer-text {
          font-size: var(--font-size-sm);
          line-height: var(--line-height-relaxed);
          color: var(--color-neutral-300);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer-link {
          color: var(--color-neutral-300);
          font-size: var(--font-size-sm);
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--color-primary-300);
          text-decoration: underline;
        }

        .footer-contact {
          margin-top: var(--space-2);
        }

        .footer-disclaimers {
          padding: var(--space-8) 0;
          border-top: 1px solid var(--color-neutral-700);
          border-bottom: 1px solid var(--color-neutral-700);
          margin-bottom: var(--space-6);
        }

        .disclaimer-text {
          font-size: var(--font-size-xs);
          line-height: var(--line-height-relaxed);
          color: var(--color-neutral-400);
          margin-bottom: var(--space-4);
        }

        .disclaimer-text:last-child {
          margin-bottom: 0;
        }

        .footer-bottom {
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-500);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
