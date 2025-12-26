import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title Loans in Florida | Direct Title Loans | Licensed OFR Lender",
  description: "Get title loans in Florida. Serving Miami, Tampa, and surrounding areas. Florida's tiered rate structure keeps costs fair. OFR licensed and compliant.",
  keywords: ["title loans florida", "florida title loans", "OFR licensed lender", "car title loans fl"],
};

export default function FloridaPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Locations", url: "/locations" },
    { label: "Florida" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="state-page">
        <div className="container">
          <header className="state-hero">
            <h1>Title Loans in Florida</h1>
            <p className="hero-subheadline">
              Licensed by the Florida OFR - Tiered Rate Structure with Strong Consumer Protections
            </p>
          </header>

          <section className="content-section">
            <h2>Serving Florida Communities</h2>
            <p>
              Direct Title Loans is proud to serve Florida residents with fast, reliable title loan services. We're fully
              licensed by the Florida Office of Financial Regulation (OFR) and comply with all state consumer protection laws
              under the Florida Title Loan Act (Chapter 537).
            </p>
            <p>
              Florida's comprehensive Title Loan Act provides strong consumer protections, including tiered interest rate caps
              (30% on the first $2,000; 24% on $2,000-$3,000; 18% on amounts over $3,000) and clear disclosure requirements.
            </p>
          </section>

          <section className="cities-section">
            <h2>Florida Locations</h2>
            <div className="cities-grid">
              <Link href="/locations/florida/miami" className="city-card">
                <h3>Miami</h3>
                <p className="city-county">Miami-Dade County</p>
                <p className="city-description">
                  Serving Downtown Miami, Brickell, Wynwood, Miami Beach, Coral Gables, Hialeah, and all of Miami-Dade County.
                </p>
                <div className="city-details">
                  <span>Phone: (305) 555-0172</span>
                  <span>Area Code: 305</span>
                </div>
                <span className="city-link">View Location Details →</span>
              </Link>

              <Link href="/locations/florida/tampa" className="city-card">
                <h3>Tampa</h3>
                <p className="city-county">Hillsborough County</p>
                <p className="city-description">
                  Serving Downtown Tampa, Ybor City, Westshore, St. Petersburg, Clearwater, and all of the Tampa Bay area.
                </p>
                <div className="city-details">
                  <span>Phone: (813) 555-0185</span>
                  <span>Area Code: 813</span>
                </div>
                <span className="city-link">View Location Details →</span>
              </Link>
            </div>
          </section>

          <section className="compliance-section">
            <h2>Florida Title Loan Regulations</h2>
            <div className="compliance-card">
              <h3>Key Consumer Protections:</h3>
              <ul className="protection-list">
                <li>
                  <strong>Tiered Interest Rates:</strong> 30% on first $2,000; 24% on $2,000-$3,000; 18% on amounts over $3,000
                </li>
                <li>
                  <strong>30-Day Initial Term:</strong> All title loans must have a minimum 30-day initial term
                </li>
                <li>
                  <strong>No Prepayment Penalties:</strong> Borrowers may prepay at any time without penalty
                </li>
                <li>
                  <strong>Maximum Credit Investigation Fee:</strong> $25 fee cap
                </li>
                <li>
                  <strong>OFR Licensing:</strong> All lenders must be licensed by the Florida Office of Financial Regulation
                </li>
                <li>
                  <strong>Simple Interest Only:</strong> Add-on interest is prohibited - only simple interest allowed
                </li>
              </ul>

              <div className="regulatory-box">
                <h4>Regulatory Body</h4>
                <p>
                  <strong>Florida Office of Financial Regulation (OFR)</strong>
                </p>
                <p>
                  <a href="https://flofr.gov" target="_blank" rel="noopener noreferrer">flofr.gov</a>
                </p>
                <p>Phone: (850) 487-9687</p>
              </div>

              <p className="disclaimer">
                <strong>Disclaimer:</strong> This information is for general educational purposes only and may not reflect the
                most current legal developments. Laws and regulations change frequently. Always consult with a licensed attorney
                or contact the Florida OFR for the most accurate and up-to-date information before making any financial decisions.
              </p>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started in Florida?</h2>
            <p>Choose your location or apply online now</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Online</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call 1-800-555-1234</a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
