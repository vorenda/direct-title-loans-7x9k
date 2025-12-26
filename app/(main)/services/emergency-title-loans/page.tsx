import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Title Loans | Same-Day Funding Available | Direct Title Loans",
  description: "Need emergency cash fast? Get same-day title loan funding. Use your vehicle as collateral. Quick approval, bad credit OK. Apply now for immediate help!",
  keywords: ["emergency title loan", "same day title loan", "fast title loan", "urgent cash loan", "quick title loan"],
};

export default function EmergencyTitleLoansPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "Emergency Title Loans" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I get emergency title loan funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many emergency title loans are funded the same day you apply. The entire process - application, vehicle evaluation, approval, and funding - can take just a few hours in many cases."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply for an emergency title loan online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can complete the entire application process online. Submit your documents electronically, receive your offer, and get funded without visiting a physical location in many cases."
        }
      },
      {
        "@type": "Question",
        "name": "What if I have bad credit and need emergency cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emergency title loans focus on your vehicle's value, not your credit score. Many people with bad credit, no credit, or past bankruptcies qualify for emergency title loans."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a minimum or maximum for emergency loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loan amounts typically range from $1,000 to $50,000+ depending on your vehicle's value. There's no emergency-specific limit - the amount is based on your car, truck, motorcycle, or RV's equity."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - Emergency Title Loans",
    "serviceType": "Emergency Title Loan",
    "description": "Same-day emergency title loan funding. Use your vehicle as collateral. Bad credit OK.",
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
            <h1>Emergency Title Loans</h1>
            <p className="hero-subheadline">Same-Day Funding When You Need It Most - Fast, Simple, Secure</p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call for Immediate Help</a>
            </div>
          </header>

          <section className="content-section">
            <h2>What Is an Emergency Title Loan?</h2>
            <p>
              An emergency title loan provides rapid access to cash when you're facing an urgent financial situation. Whether
              it's an unexpected medical bill, car repair, home emergency, or any other pressing expense, emergency title loans
              are designed to get money in your hands as quickly as possible.
            </p>
            <p>
              The application process is streamlined for speed. Many emergency title loans are approved and funded the same day
              you apply, with some borrowers receiving cash within hours of completing their application.
            </p>
          </section>

          <section className="content-section">
            <h2>Common Uses for Emergency Title Loans</h2>
            <ul className="content-list">
              <li>Medical bills and healthcare expenses</li>
              <li>Emergency car or truck repairs</li>
              <li>Urgent home repairs (plumbing, HVAC, roof)</li>
              <li>Unexpected travel expenses</li>
              <li>Avoiding eviction or utility shutoff</li>
              <li>Emergency veterinary care</li>
              <li>Covering payroll for small business owners</li>
              <li>Legal fees and court costs</li>
            </ul>
          </section>

          <section className="content-section benefits-section">
            <h2>Why Choose Emergency Title Loans?</h2>
            <div className="benefits-grid">
              <div className="benefit-item"><div className="benefit-icon">⚡</div><div>Same-day funding available</div></div>
              <div className="benefit-item"><div className="benefit-icon">⏱️</div><div>15-30 minute application process</div></div>
              <div className="benefit-item"><div className="benefit-icon">✅</div><div>No credit check needed for many loans</div></div>
              <div className="benefit-item"><div className="benefit-icon">🚗</div><div>All types of vehicles accepted</div></div>
              <div className="benefit-item"><div className="benefit-icon">🔑</div><div>Keep driving while you repay</div></div>
              <div className="benefit-item"><div className="benefit-icon">💰</div><div>Funds available for any emergency need</div></div>
            </div>
          </section>

          <section className="content-section">
            <h2>How Fast Can You Get Emergency Funds?</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Quick Application</h3>
                <p>Apply online in 15 minutes or less. Provide basic info about yourself and your vehicle.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Rapid Evaluation</h3>
                <p>Submit photos of your vehicle. We evaluate your car's value quickly to determine your loan amount.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Instant Quote</h3>
                <p>Receive your loan offer within minutes. Review transparent terms with no obligation.</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Same-Day Funding</h3>
                <p>Accept your offer and receive funds the same day. Many borrowers have cash within hours.</p>
              </div>
            </div>
          </section>

          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How fast can I get emergency title loan funds?</h3>
                <p className="faq-answer">
                  Many emergency title loans are funded the same day you apply. The entire process - application, vehicle
                  evaluation, approval, and funding - can take just a few hours in many cases.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I apply for an emergency title loan online?</h3>
                <p className="faq-answer">
                  Yes, you can complete the entire application process online. Submit your documents electronically, receive
                  your offer, and get funded without visiting a physical location in many cases.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What if I have bad credit and need emergency cash?</h3>
                <p className="faq-answer">
                  Emergency title loans focus on your vehicle's value, not your credit score. Many people with bad credit, no
                  credit, or past bankruptcies qualify for emergency title loans.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Is there a minimum or maximum for emergency loans?</h3>
                <p className="faq-answer">
                  Loan amounts typically range from $1,000 to $50,000+ depending on your vehicle's value. There's no
                  emergency-specific limit - the amount is based on your car, truck, motorcycle, or RV's equity.
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
              <Link href="/services/motorcycle-title-loans" className="related-service-card">
                <h3>Motorcycle Title Loans</h3>
                <p>Fast cash with your bike</p>
              </Link>
            </div>
          </section>

          <section className="cta-section">
            <h2>Need Emergency Cash Now?</h2>
            <p>Don't wait. Apply now and get funded as soon as today.</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn-accent btn-lg">Apply Now</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call for Immediate Help</a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
