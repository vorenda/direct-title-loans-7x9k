import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title Loan Locations | California & Florida | Direct Title Loans",
  description: "Find a Direct Title Loans location near you. Serving California and Florida with fast title loan services. Licensed and compliant.",
  keywords: ["title loan locations", "title loans near me", "california title loans", "florida title loans"],
};

export default function LocationsPage() {
  return (
    <div className="locations-page">
      <div className="container">
        <header className="locations-header">
          <h1>Our Locations</h1>
          <p className="subtitle">
            Find a Direct Title Loans location near you. We serve customers throughout California and Florida.
          </p>
        </header>

        <div className="states-grid">
          <Link href="/locations/california" className="state-card">
            <div className="state-card-content">
              <h2>California</h2>
              <p className="state-info">Licensed by the California DFPI • 30% APR Cap</p>
              <ul className="cities-list">
                <li><Link href="/locations/california/los-angeles">Los Angeles</Link></li>
                <li><Link href="/locations/california/san-diego">San Diego</Link></li>
              </ul>
              <span className="state-link">View All California Locations →</span>
            </div>
          </Link>

          <Link href="/locations/florida" className="state-card">
            <div className="state-card-content">
              <h2>Florida</h2>
              <p className="state-info">Licensed by the Florida OFR • Tiered Rate Structure</p>
              <ul className="cities-list">
                <li><Link href="/locations/florida/miami">Miami</Link></li>
                <li><Link href="/locations/florida/tampa">Tampa</Link></li>
              </ul>
              <span className="state-link">View All Florida Locations →</span>
            </div>
          </Link>
        </div>

        <section className="apply-section">
          <h2>Not Sure Which Location?</h2>
          <p>Apply online and we'll connect you with the nearest location</p>
          <Link href="/apply" className="btn btn-accent btn-lg">Apply Online Now</Link>
        </section>
      </div>

      
    </div>
  );
}
