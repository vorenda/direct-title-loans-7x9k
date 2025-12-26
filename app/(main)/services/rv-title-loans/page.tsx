import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Title Loans | Motorhome & Camper Financing | Direct Title Loans",
  description: "Get cash using your RV or motorhome title as collateral. Class A, B, C RVs accepted. Fast approval, keep your RV while you repay. Apply now!",
  keywords: ["RV title loan", "motorhome title loan", "camper title loan", "recreational vehicle loan"],
};

export default function RVTitleLoansPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "RV Title Loans" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I borrow on my RV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RV title loan amounts vary widely based on your vehicle's value. Smaller Class B vans might qualify for $5,000-$20,000, while luxury Class A coaches can access $50,000-$150,000 or more."
        }
      },
      {
        "@type": "Question",
        "name": "Do I keep my RV during the loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most lenders allow you to keep and use your RV during the loan term. However, some lenders may hold the RV as collateral, especially for higher-value loans. Ask about this before signing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a title loan on a travel trailer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some lenders offer title loans on travel trailers and fifth-wheels, though requirements vary. Motorized RVs (Class A, B, C) are more commonly accepted for title loans."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - RV Title Loans",
    "serviceType": "RV Title Loan",
    "description": "Get cash using your RV or motorhome title as collateral. Class A, B, C RVs accepted.",
    "areaServed": ["California", "Florida"],
    "provider": { "@type": "FinancialService", "name": "Direct Title Loans" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Breadcrumbs items={breadcrumbs} />

      <article className="service-page">
        <div className="container">
          <header className="service-hero">
            <h1>RV Title Loans</h1>
            <p className="hero-subheadline">Unlock the Equity in Your Recreational Vehicle - Fast Cash, Flexible Terms</p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </header>

          <section className="content-section">
            <h2>What Is an RV Title Loan?</h2>
            <p>
              An RV title loan, also known as a motorhome title loan, allows you to borrow against the value of your
              recreational vehicle. RVs often have significant equity, making them excellent collateral for larger loans.
            </p>
            <p>
              Whether you own a Class A diesel pusher, a Class B camper van, or a Class C motorhome, you can access cash
              based on your RV's value. This type of loan is particularly useful for RV owners facing unexpected expenses
              or needing funds for maintenance, repairs, or other financial needs.
            </p>
          </section>

          <section className="content-section">
            <h2>RV Types We Accept</h2>
            <ul className="content-list">
              <li>Class A motorhomes (diesel and gas)</li>
              <li>Class B camper vans</li>
              <li>Class C motorhomes</li>
              <li>Travel trailers (with motor)</li>
              <li>Fifth-wheel trailers (select lenders)</li>
              <li>Luxury coaches and bus conversions</li>
            </ul>
          </section>

          <section className="content-section benefits-section">
            <h2>Benefits of RV Title Loans</h2>
            <div className="benefits-grid">
              <div className="benefit-item"><div className="benefit-icon">💰</div><div>Higher loan amounts due to RV values</div></div>
              <div className="benefit-item"><div className="benefit-icon">🚐</div><div>Keep your RV during the loan term (most lenders)</div></div>
              <div className="benefit-item"><div className="benefit-icon">⚡</div><div>Fast funding for emergencies</div></div>
              <div className="benefit-item"><div className="benefit-icon">✅</div><div>Bad credit accepted</div></div>
              <div className="benefit-item"><div className="benefit-icon">📝</div><div>Flexible repayment options</div></div>
              <div className="benefit-item"><div className="benefit-icon">🔓</div><div>Access equity without selling your RV</div></div>
            </div>
          </section>

          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How much can I borrow on my RV?</h3>
                <p className="faq-answer">
                  RV title loan amounts vary widely based on your vehicle's value. Smaller Class B vans might qualify for
                  $5,000-$20,000, while luxury Class A coaches can access $50,000-$150,000 or more.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do I keep my RV during the loan?</h3>
                <p className="faq-answer">
                  Most lenders allow you to keep and use your RV during the loan term. However, some lenders may hold the RV
                  as collateral, especially for higher-value loans. Ask about this before signing.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I get a title loan on a travel trailer?</h3>
                <p className="faq-answer">
                  Some lenders offer title loans on travel trailers and fifth-wheels, though requirements vary. Motorized RVs
                  (Class A, B, C) are more commonly accepted for title loans.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Related Services</h2>
            <div className="related-services">
              <Link href="/services/car-title-loans" className="related-service-card">
                <h3>Car Title Loans</h3>
                <p>Use your car as collateral</p>
              </Link>
              <Link href="/services/truck-title-loans" className="related-service-card">
                <h3>Truck Title Loans</h3>
                <p>Personal and commercial trucks</p>
              </Link>
              <Link href="/services/emergency-title-loans" className="related-service-card">
                <h3>Emergency Title Loans</h3>
                <p>Same-day funding available</p>
              </Link>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Apply now and see how much cash you can access with your RV.</p>
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
