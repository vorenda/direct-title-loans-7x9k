import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorcycle Title Loans | Fast Cash Using Your Bike | Direct Title Loans",
  description: "Get cash fast with a motorcycle title loan. Use your bike as collateral, keep riding while you repay. Quick approval, bad credit OK. Apply online now!",
  keywords: ["motorcycle title loan", "bike title loan", "motorcycle pawn loan", "fast cash motorcycle"],
};

export default function MotorcycleTitleLoansPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "Motorcycle Title Loans" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I borrow on my motorcycle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loan amounts depend on your motorcycle's make, model, year, and condition. You can typically borrow between $1,000 and $15,000+ depending on your bike's value."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to bring my motorcycle in for inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, you can submit photos of your motorcycle online for evaluation. Some lenders may request an in-person inspection for higher-value bikes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a title loan on a vintage motorcycle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, vintage and classic motorcycles can qualify if they have value and you own the title free and clear. Collector bikes may even qualify for higher loan amounts."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - Motorcycle Title Loans",
    "serviceType": "Motorcycle Title Loan",
    "description": "Fast motorcycle title loans using your bike as collateral. Bad credit OK. Keep riding while you repay.",
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
            <h1>Motorcycle Title Loans</h1>
            <p className="hero-subheadline">Turn Your Motorcycle's Value Into Fast Cash - Keep Riding While You Repay</p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </header>

          <section className="content-section">
            <h2>What Is a Motorcycle Title Loan?</h2>
            <p>
              A motorcycle title loan allows you to borrow money using your motorcycle's title as collateral. If you own
              your bike outright, you can access fast cash based on its value while continuing to ride throughout the loan term.
            </p>
            <p>
              Motorcycle title loans are ideal for riders who need emergency funds but don't want to sell their bike. Whether
              you own a cruiser, sport bike, touring motorcycle, or adventure bike, you may be able to tap into its equity
              for financial flexibility.
            </p>
          </section>

          <section className="content-section">
            <h2>Motorcycles We Accept</h2>
            <ul className="content-list">
              <li>Cruisers (Harley-Davidson, Indian, Victory)</li>
              <li>Sport bikes (Yamaha, Honda, Kawasaki, Suzuki)</li>
              <li>Touring motorcycles (Gold Wing, Road King)</li>
              <li>Adventure bikes (BMW GS, KTM Adventure)</li>
              <li>Standard and naked bikes</li>
              <li>Classic and vintage motorcycles</li>
            </ul>
          </section>

          <section className="content-section benefits-section">
            <h2>Benefits of Motorcycle Title Loans</h2>
            <div className="benefits-grid">
              <div className="benefit-item"><div className="benefit-icon">🏍️</div><div>Keep riding your motorcycle during the loan</div></div>
              <div className="benefit-item"><div className="benefit-icon">⚡</div><div>Fast approval process</div></div>
              <div className="benefit-item"><div className="benefit-icon">✅</div><div>Bad credit or no credit accepted</div></div>
              <div className="benefit-item"><div className="benefit-icon">📱</div><div>Simple online application</div></div>
              <div className="benefit-item"><div className="benefit-icon">💰</div><div>No prepayment penalties</div></div>
              <div className="benefit-item"><div className="benefit-icon">🔒</div><div>Competitive rates on qualifying bikes</div></div>
            </div>
          </section>

          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How much can I borrow on my motorcycle?</h3>
                <p className="faq-answer">
                  Loan amounts depend on your motorcycle's make, model, year, and condition. You can typically borrow between
                  $1,000 and $15,000+ depending on your bike's value.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do I need to bring my motorcycle in for inspection?</h3>
                <p className="faq-answer">
                  In many cases, you can submit photos of your motorcycle online for evaluation. Some lenders may request an
                  in-person inspection for higher-value bikes.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I get a title loan on a vintage motorcycle?</h3>
                <p className="faq-answer">
                  Yes, vintage and classic motorcycles can qualify if they have value and you own the title free and clear.
                  Collector bikes may even qualify for higher loan amounts.
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
              <Link href="/services/emergency-title-loans" className="related-service-card">
                <h3>Emergency Title Loans</h3>
                <p>Same-day funding for urgent needs</p>
              </Link>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Apply now and see how much cash you can access with your motorcycle.</p>
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
