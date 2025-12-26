import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title Loans in California | Direct Title Loans | Licensed DFPI Lender",
  description: "Get title loans in California. Serving Los Angeles, San Diego, and surrounding areas. California's 30% APR cap protects you. DFPI licensed and compliant.",
  keywords: ["title loans california", "california title loans", "DFPI licensed lender", "car title loans ca"],
};

export default function CaliforniaPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Locations", url: "/locations" },
    { label: "California" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <article className="state-page">
        <div className="container">
          <header className="state-hero">
            <h1>Title Loans in California</h1>
            <p className="hero-subheadline">
              Licensed by the California DFPI - Strong Consumer Protections with 30% APR Cap
            </p>
          </header>

          <section className="content-section">
            <h2>Serving California Communities</h2>
            <p>
              Direct Title Loans is proud to serve California residents with fast, reliable title loan services. We're fully
              licensed by the California Department of Financial Protection and Innovation (DFPI) and comply with all state
              consumer protection laws.
            </p>
            <p>
              California has some of the strongest consumer protections in the nation for title loans, including a 30% APR cap
              for loans of $2,500 or more and a prohibition on prepayment penalties. This means you can access the cash you
              need with transparency and fairness.
            </p>
          </section>

          <section className="cities-section">
            <h2>California Locations</h2>
            <div className="cities-grid">
              <Link href="/locations/california/los-angeles" className="city-card">
                <h3>Los Angeles</h3>
                <p className="city-county">Los Angeles County</p>
                <p className="city-description">
                  Serving Downtown LA, Hollywood, Santa Monica, Pasadena, Glendale, and all surrounding areas.
                </p>
                <div className="city-details">
                  <span>Phone: (213) 555-0147</span>
                  <span>Area Code: 213</span>
                </div>
                <span className="city-link">View Location Details →</span>
              </Link>

              <Link href="/locations/california/san-diego" className="city-card">
                <h3>San Diego</h3>
                <p className="city-county">San Diego County</p>
                <p className="city-description">
                  Serving Mission Valley, La Jolla, Coronado, Chula Vista, National City, and all of San Diego County.
                </p>
                <div className="city-details">
                  <span>Phone: (619) 555-0198</span>
                  <span>Area Code: 619</span>
                </div>
                <span className="city-link">View Location Details →</span>
              </Link>
            </div>
          </section>

          <section className="compliance-section">
            <h2>California Title Loan Regulations</h2>
            <div className="compliance-card">
              <h3>Key Consumer Protections:</h3>
              <ul className="protection-list">
                <li>
                  <strong>30% APR Cap:</strong> California law caps title loan interest at 30% per year for loans of $2,500 or more
                </li>
                <li>
                  <strong>Minimum Loan Amount:</strong> $2,500 for standard title loans (tiered rates apply to smaller loans)
                </li>
                <li>
                  <strong>No Prepayment Penalties:</strong> You can pay off your loan early at any time without extra fees
                </li>
                <li>
                  <strong>DFPI Licensing:</strong> All lenders must be licensed by the California DFPI
                </li>
                <li>
                  <strong>Transparent Pricing:</strong> All fees and charges must be disclosed upfront
                </li>
              </ul>

              <div className="regulatory-box">
                <h4>Regulatory Body</h4>
                <p>
                  <strong>California Department of Financial Protection and Innovation (DFPI)</strong>
                </p>
                <p>
                  <a href="https://dfpi.ca.gov" target="_blank" rel="noopener noreferrer">dfpi.ca.gov</a>
                </p>
                <p>
                  <a href="https://dfpi.ca.gov/verify-a-license/" target="_blank" rel="noopener noreferrer">
                    Verify Our License
                  </a>
                </p>
                <p>Phone: (866) 275-2677</p>
              </div>

              <p className="disclaimer">
                <strong>Disclaimer:</strong> This information is for general educational purposes only and may not reflect the
                most current legal developments. Laws and regulations change frequently. Always consult with a licensed attorney
                or contact the California DFPI for the most accurate and up-to-date information before making any financial decisions.
              </p>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started in California?</h2>
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
