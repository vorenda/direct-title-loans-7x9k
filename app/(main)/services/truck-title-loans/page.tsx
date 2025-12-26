import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Title Loans | Personal & Commercial Truck Financing | Direct Title Loans",
  description: "Get cash using your truck title as collateral. Personal pickups, commercial trucks, and semi-trucks accepted. Fast approval, bad credit OK. Apply today!",
  keywords: ["truck title loan", "pickup truck title loan", "commercial truck title loan", "semi truck title loan", "truck financing"],
};

export default function TruckTitleLoansPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "Truck Title Loans" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I get a title loan on a commercial truck?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, commercial trucks including semi-trucks, box trucks, and work vehicles can qualify for title loans. Commercial truck title loans often have higher limits due to the greater vehicle values involved."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I borrow on my truck?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loan amounts depend on your truck's value. Personal pickups may qualify for $5,000 to $25,000+, while commercial trucks and semi-trucks can access $10,000 to $100,000 or more depending on the vehicle's condition and value."
        }
      },
      {
        "@type": "Question",
        "name": "Can I continue working with my commercial truck during the loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You keep full possession and use of your truck throughout the loan term. This allows owner-operators and commercial drivers to continue working and earning income while repaying the loan."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - Truck Title Loans",
    "serviceType": "Truck Title Loan",
    "description": "Get cash using your truck title as collateral. Personal pickups, commercial trucks, and semi-trucks accepted.",
    "areaServed": ["California", "Florida"],
    "provider": {
      "@type": "FinancialService",
      "name": "Direct Title Loans"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumbs items={breadcrumbs} />

      <article className="service-page">
        <div className="container">
          <header className="service-hero">
            <h1>Truck Title Loans</h1>
            <p className="hero-subheadline">
              Leverage Your Truck's Equity for Fast Cash - Personal & Commercial Trucks Welcome
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </header>

          <section className="content-section">
            <h2>What Is a Truck Title Loan?</h2>
            <p>
              A truck title loan allows you to borrow money using your truck's title as collateral. Whether you own
              a personal pickup, a commercial work truck, or a semi-truck, you can unlock the equity in your vehicle
              to access fast cash when you need it.
            </p>
            <p>
              Truck title loans work similarly to car title loans - you use your vehicle's value to secure the loan,
              keep driving your truck while you repay, and receive your title back once the loan is paid in full. For
              commercial truck owners, this can be an especially valuable option for covering business expenses,
              equipment repairs, or cash flow gaps without selling your primary source of income.
            </p>
          </section>

          <section className="content-section">
            <h2>Types of Trucks We Accept</h2>
            <ul className="content-list">
              <li>Personal pickup trucks (Ford F-150, Chevy Silverado, RAM 1500, etc.)</li>
              <li>Heavy-duty pickups (F-250, F-350, 2500, 3500 series)</li>
              <li>Commercial box trucks and delivery vehicles</li>
              <li>Semi-trucks and tractor-trailers</li>
              <li>Flatbed trucks</li>
              <li>Dump trucks and construction vehicles</li>
            </ul>
          </section>

          <section className="content-section benefits-section">
            <h2>Benefits of Truck Title Loans</h2>
            <div className="benefits-grid">
              <div className="benefit-item"><div className="benefit-icon">💰</div><div>Higher loan amounts due to greater vehicle values</div></div>
              <div className="benefit-item"><div className="benefit-icon">🚛</div><div>Keep operating your truck during the loan term</div></div>
              <div className="benefit-item"><div className="benefit-icon">✅</div><div>Commercial and personal trucks accepted</div></div>
              <div className="benefit-item"><div className="benefit-icon">⚡</div><div>Fast approval - often same day for personal trucks</div></div>
              <div className="benefit-item"><div className="benefit-icon">📝</div><div>Flexible terms for commercial vehicle owners</div></div>
              <div className="benefit-item"><div className="benefit-icon">🔓</div><div>Bad credit accepted - vehicle value is the key factor</div></div>
            </div>
          </section>

          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">Can I get a title loan on a commercial truck?</h3>
                <p className="faq-answer">
                  Yes, commercial trucks including semi-trucks, box trucks, and work vehicles can qualify for title loans.
                  Commercial truck title loans often have higher limits due to the greater vehicle values involved.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How much can I borrow on my truck?</h3>
                <p className="faq-answer">
                  Loan amounts depend on your truck's value. Personal pickups may qualify for $5,000 to $25,000+, while
                  commercial trucks and semi-trucks can access $10,000 to $100,000 or more depending on the vehicle's
                  condition and value.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I continue working with my commercial truck during the loan?</h3>
                <p className="faq-answer">
                  Absolutely. You keep full possession and use of your truck throughout the loan term. This allows
                  owner-operators and commercial drivers to continue working and earning income while repaying the loan.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Related Services</h2>
            <div className="related-services">
              <Link href="/services/car-title-loans" className="related-service-card">
                <h3>Car Title Loans</h3>
                <p>Use your car as collateral for fast cash</p>
              </Link>
              <Link href="/services/emergency-title-loans" className="related-service-card">
                <h3>Emergency Title Loans</h3>
                <p>Same-day funding for urgent needs</p>
              </Link>
              <Link href="/services/title-loan-refinancing" className="related-service-card">
                <h3>Title Loan Refinancing</h3>
                <p>Lower your monthly payment</p>
              </Link>
            </div>
          </section>

          <section className="cta-section">
            <h2>Unlock Your Truck's Value Today</h2>
            <p>Apply now to see how much cash you can access with your truck.</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
