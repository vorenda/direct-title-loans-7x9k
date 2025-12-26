import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title Loan Refinancing | Lower Your Payment Today | Direct Title Loans",
  description: "Refinance your existing title loan for better rates and lower monthly payments. Consolidate multiple loans, reduce interest. Apply for title loan refinancing now!",
  keywords: ["title loan refinancing", "refinance title loan", "lower title loan payment", "title loan consolidation"],
};

export default function TitleLoanRefinancingPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services/car-title-loans" },
    { label: "Title Loan Refinancing" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I refinance a title loan from another lender?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can refinance a title loan from any lender. We'll pay off your existing loan and create a new agreement with better terms. Many borrowers save money by switching to a lender with lower rates."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save by refinancing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Savings depend on your current rate, loan amount, and the new terms you qualify for. Some borrowers reduce their monthly payment by 20-40% or more by refinancing to a lower rate or longer term."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get extra cash when I refinance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if your vehicle has equity beyond what you owe, you may be able to do a cash-out refinance. This allows you to access additional funds while refinancing your existing loan."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a fee to refinance my title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fees vary by lender and state. We provide transparent pricing upfront so you know exactly what refinancing will cost before you commit. In many cases, the savings outweigh any fees."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Direct Title Loans - Title Loan Refinancing",
    "serviceType": "Title Loan Refinancing",
    "description": "Refinance your existing title loan for better rates and lower monthly payments.",
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
            <h1>Title Loan Refinancing</h1>
            <p className="hero-subheadline">Lower Your Monthly Payment - Get Better Rates on Your Existing Title Loan</p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-accent btn-lg">Check Your Rate</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </header>

          <section className="content-section">
            <h2>What Is Title Loan Refinancing?</h2>
            <p>
              Title loan refinancing allows you to replace your current title loan with a new one that has better terms. If
              you're struggling with high payments, unfavorable interest rates, or simply want to consolidate multiple loans,
              refinancing can provide relief.
            </p>
            <p>
              By refinancing, you may be able to lower your monthly payment, reduce your interest rate, extend your repayment
              term, or access additional cash if your vehicle has increased in value since your original loan.
            </p>
          </section>

          <section className="content-section benefits-section">
            <h2>Benefits of Refinancing Your Title Loan</h2>
            <div className="benefits-grid">
              <div className="benefit-item"><div className="benefit-icon">💰</div><div>Lower monthly payments</div></div>
              <div className="benefit-item"><div className="benefit-icon">📉</div><div>Reduced interest rate</div></div>
              <div className="benefit-item"><div className="benefit-icon">📅</div><div>Extended repayment terms</div></div>
              <div className="benefit-item"><div className="benefit-icon">🔄</div><div>Consolidate multiple title loans</div></div>
              <div className="benefit-item"><div className="benefit-icon">💵</div><div>Access additional cash (cash-out refinance)</div></div>
              <div className="benefit-item"><div className="benefit-icon">✅</div><div>Better customer service and terms</div></div>
            </div>
          </section>

          <section className="content-section">
            <h2>When Should You Refinance?</h2>
            <ul className="content-list">
              <li>Your current interest rate is higher than market rates</li>
              <li>Your monthly payment is difficult to manage</li>
              <li>Your vehicle has increased in value</li>
              <li>You've improved your financial situation</li>
              <li>You want to consolidate multiple loans</li>
              <li>You're unhappy with your current lender's service</li>
              <li>You need additional cash but don't want a new loan</li>
            </ul>
          </section>

          <section className="content-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">Can I refinance a title loan from another lender?</h3>
                <p className="faq-answer">
                  Yes, you can refinance a title loan from any lender. We'll pay off your existing loan and create a new
                  agreement with better terms. Many borrowers save money by switching to a lender with lower rates.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How much can I save by refinancing?</h3>
                <p className="faq-answer">
                  Savings depend on your current rate, loan amount, and the new terms you qualify for. Some borrowers reduce
                  their monthly payment by 20-40% or more by refinancing to a lower rate or longer term.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I get extra cash when I refinance?</h3>
                <p className="faq-answer">
                  Yes, if your vehicle has equity beyond what you owe, you may be able to do a cash-out refinance. This allows
                  you to access additional funds while refinancing your existing loan.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Is there a fee to refinance my title loan?</h3>
                <p className="faq-answer">
                  Fees vary by lender and state. We provide transparent pricing upfront so you know exactly what refinancing
                  will cost before you commit. In many cases, the savings outweigh any fees.
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
            <h2>Ready to Lower Your Payment?</h2>
            <p>Apply now to see how much you can save by refinancing your title loan.</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn-accent btn-lg">Check Your Rate</Link>
              <a href="tel:+18005551234" className="btn btn-outline btn-lg">Call Us</a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
