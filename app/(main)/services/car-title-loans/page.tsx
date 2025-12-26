import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Title Loans | Fast Cash Using Your Vehicle | Direct Title Loans",
  description: "Get fast cash with a car title loan. Use your vehicle as collateral, keep driving while you repay. Bad credit OK. Same-day funding available. Apply now!",
  keywords: ["car title loan", "auto title loan", "vehicle title loan", "title loan near me", "fast cash car loan", "bad credit car loan"],
};

export default function CarTitleLoansPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "Car Title Loans" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I borrow with a car title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The amount you can borrow depends on your vehicle's value and your state's regulations. Typically, you can borrow up to 50% of your car's fair market value. Loan amounts commonly range from $1,000 to $50,000 or more for high-value vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can I get my money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many title loans are approved and funded the same day you apply. Once you complete the application and provide the required documents, you could have cash in your hands within hours. Some applications fund within 24 business hours."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose my car if I get a title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you keep driving your car throughout the entire loan term. The lender only holds the title as collateral. As long as you make your payments according to the agreement, you maintain full use of your vehicle."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need good credit to get a car title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Car title loans are designed for people of all credit backgrounds. Your vehicle's value and your ability to repay are the primary factors - not your credit score. Many people with bad credit, no credit, or past bankruptcies qualify."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - Car Title Loans",
    "serviceType": "Car Title Loan",
    "description": "Fast car title loans using your vehicle as collateral. Bad credit OK. Same-day funding available.",
    "areaServed": ["California", "Florida"],
    "provider": {
      "@type": "FinancialService",
      "name": "Direct Title Loans"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <article className="service-page">
        <div className="container">
          {/* HERO */}
          <header className="service-hero">
            <h1>Car Title Loans</h1>
            <p className="hero-subheadline">
              Get Cash Fast Using Your Vehicle's Equity - Keep Driving While You Repay
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">
                Apply Now
              </Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">
                Call Us
              </a>
            </div>
          </header>

          {/* WHAT IS */}
          <section className="content-section">
            <h2>What Is a Car Title Loan?</h2>
            <p>
              A car title loan is a secured loan that allows you to borrow money using your vehicle's
              title as collateral. Unlike traditional bank loans that focus heavily on credit scores,
              title loans primarily consider the value of your vehicle and your ability to repay. This
              makes them an accessible option for people who need fast cash but may not qualify for
              conventional financing.
            </p>
            <p>
              With a car title loan, you can access funds quickly - often the same day you apply -
              while continuing to drive your vehicle throughout the loan term. The lender places a lien
              on your title until the loan is repaid, but you maintain possession and use of your car.
            </p>
            <p>
              Car title loans are designed for short-term financial needs such as emergency expenses,
              medical bills, home repairs, or unexpected costs that can't wait for traditional loan
              approval timelines.
            </p>
          </section>

          {/* HOW IT WORKS */}
          <section className="content-section">
            <h2>How Car Title Loans Work</h2>
            <p>
              The car title loan process is straightforward and designed for speed. First, you apply
              online or by phone, providing basic information about yourself and your vehicle. Next,
              we evaluate your car's value based on its make, model, year, mileage, and condition.
              You'll receive a loan offer with clear terms including the amount you qualify for, the
              interest rate, and the repayment schedule.
            </p>
            <p>
              If you accept the offer, you sign the loan agreement and the lender places a lien on your
              vehicle's title. You receive your funds - often the same day or within 24 hours - and
              continue driving your car as normal. You make regular payments according to your agreement,
              and once the loan is fully repaid, the lien is removed and you receive your title back.
            </p>
          </section>

          {/* WHO QUALIFIES */}
          <section className="content-section">
            <h2>Who Qualifies for a Car Title Loan?</h2>
            <ul className="content-list">
              <li>Vehicle owners with a clear title (no liens)</li>
              <li>Adults 18 years or older (19 in some states)</li>
              <li>Those with regular income or ability to repay</li>
              <li>People with bad credit, no credit, or good credit</li>
              <li>Self-employed individuals</li>
              <li>Recipients of Social Security, disability, or retirement income</li>
            </ul>
          </section>

          {/* BENEFITS */}
          <section className="content-section benefits-section">
            <h2>Benefits of Car Title Loans</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div>Fast approval and funding - often same day</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🚗</div>
                <div>Keep driving your vehicle during the loan term</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div>Bad credit or no credit history accepted</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📝</div>
                <div>Simple application with minimal paperwork</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div>No prepayment penalties - pay off early and save</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <div>Transparent pricing with no hidden fees</div>
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="content-section">
            <h2>What You Need to Apply</h2>
            <ul className="content-list">
              <li>Clear vehicle title in your name</li>
              <li>Valid government-issued photo ID</li>
              <li>Proof of income (pay stubs, bank statements, benefits letter)</li>
              <li>Proof of residence (utility bill, lease agreement)</li>
              <li>Your vehicle for evaluation (often photos are sufficient)</li>
              <li>Vehicle insurance (required in some states)</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How much can I borrow with a car title loan?</h3>
                <p className="faq-answer">
                  The amount you can borrow depends on your vehicle's value and your state's regulations.
                  Typically, you can borrow up to 50% of your car's fair market value. Loan amounts
                  commonly range from $1,000 to $50,000 or more for high-value vehicles.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How fast can I get my money?</h3>
                <p className="faq-answer">
                  Many title loans are approved and funded the same day you apply. Once you complete the
                  application and provide the required documents, you could have cash in your hands within
                  hours. Some applications fund within 24 business hours.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Will I lose my car if I get a title loan?</h3>
                <p className="faq-answer">
                  No, you keep driving your car throughout the entire loan term. The lender only holds the
                  title as collateral. As long as you make your payments according to the agreement, you
                  maintain full use of your vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do I need good credit to get a car title loan?</h3>
                <p className="faq-answer">
                  No. Car title loans are designed for people of all credit backgrounds. Your vehicle's
                  value and your ability to repay are the primary factors - not your credit score. Many
                  people with bad credit, no credit, or past bankruptcies qualify.
                </p>
              </div>
            </div>
          </section>

          {/* RELATED SERVICES */}
          <section className="content-section">
            <h2>Related Services</h2>
            <div className="related-services">
              <Link href="/services/truck-title-loans" className="related-service-card">
                <h3>Truck Title Loans</h3>
                <p>Personal and commercial trucks accepted</p>
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

          {/* CTA */}
          <section className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Apply now and see how much cash you can access with your vehicle's equity.</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn-accent btn-lg">
                Apply Now
              </Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">
                Call Us
              </a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
