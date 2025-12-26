import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direct Title Loans | Fast Cash Using Your Vehicle | Same-Day Funding",
  description: "Get fast cash using your vehicle as collateral. Car, truck, motorcycle, and RV title loans. Bad credit OK. Same-day funding available in California and Florida. Licensed and compliant.",
  keywords: ["title loans", "car title loans", "fast cash", "bad credit loans", "same day funding", "vehicle title loans"],
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I get my money with a title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many title loans are approved and funded the same day you apply. Once you complete the application and provide the required documents, you could have cash in your hands within hours. Some applications fund within 24 business hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need good credit to get a title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Title loans are designed for people of all credit backgrounds. Your vehicle's value and your ability to repay are the primary factors - not your credit score. Many people with bad credit, no credit, or past bankruptcies qualify."
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
        "name": "How much can I borrow with a title loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The amount you can borrow depends on your vehicle's value and your state's regulations. Typically, you can borrow up to 50% of your vehicle's fair market value. Loan amounts commonly range from $1,000 to $50,000 or more for high-value vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pay off my title loan early?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! There are no prepayment penalties in California or Florida. You can pay off your loan at any time before the due date. Paying early can reduce the total interest you pay over the life of the loan."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <h1>Get Fast Cash Using Your Vehicle</h1>
          <p className="hero-subheadline">
            Same-day title loans with your car, truck, motorcycle, or RV as collateral.
            Bad credit OK. Licensed in California and Florida.
          </p>
          <div className="hero-ctas">
            <Link href="/apply" className="btn btn-accent btn-lg">
              Apply Now
            </Link>
            <a href="tel:+18005551234" className="btn btn-outline btn-lg">
              Call 1-800-555-1234
            </a>
          </div>
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>Licensed Lender</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>Same-Day Funding</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>Bad Credit OK</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>Keep Your Vehicle</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-heading">Our Title Loan Services</h2>
          <p className="section-subheading">
            We offer title loans for all types of vehicles. Choose the service that fits your needs.
          </p>
          <div className="services-grid">
            <Link href="/services/car-title-loans" className="service-card">
              <h3 className="service-title">Car Title Loans</h3>
              <p className="service-description">
                Use your car as collateral for fast cash. Keep driving while you repay.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
            <Link href="/services/truck-title-loans" className="service-card">
              <h3 className="service-title">Truck Title Loans</h3>
              <p className="service-description">
                Personal pickups and commercial trucks welcome. Higher loan amounts available.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
            <Link href="/services/motorcycle-title-loans" className="service-card">
              <h3 className="service-title">Motorcycle Title Loans</h3>
              <p className="service-description">
                Turn your motorcycle's value into cash. Quick approval process.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
            <Link href="/services/rv-title-loans" className="service-card">
              <h3 className="service-title">RV Title Loans</h3>
              <p className="service-description">
                Unlock the equity in your RV or motorhome. Class A, B, and C accepted.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
            <Link href="/services/emergency-title-loans" className="service-card">
              <h3 className="service-title">Emergency Title Loans</h3>
              <p className="service-description">
                Same-day funding when you need cash urgently. Fast approval process.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
            <Link href="/services/title-loan-refinancing" className="service-card">
              <h3 className="service-title">Title Loan Refinancing</h3>
              <p className="service-description">
                Lower your monthly payment by refinancing your existing title loan.
              </p>
              <span className="service-link-text">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Getting a title loan is simple and fast. Here's our process:
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Apply Online or By Phone</h3>
              <p className="step-description">
                Complete our simple application form online or call to speak with a loan specialist.
                Provide basic information about yourself and your vehicle.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Vehicle Evaluation</h3>
              <p className="step-description">
                We evaluate your vehicle's value based on make, model, year, mileage, and condition.
                Many applications can be processed with photos - no in-person inspection required.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Your Quote</h3>
              <p className="step-description">
                Receive a loan offer with transparent terms including the loan amount, interest rate,
                and repayment schedule. No obligation to proceed.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Sign and Get Funded</h3>
              <p className="step-description">
                Review and sign your loan agreement. Once approved, funds can be deposited in as little
                as one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="locations-section">
        <div className="container">
          <h2 className="section-heading">Where We Serve</h2>
          <p className="section-subheading">
            Direct Title Loans is proud to serve customers in California and Florida
          </p>
          <div className="locations-grid">
            <Link href="/locations/california" className="location-card">
              <h3 className="location-title">California</h3>
              <p className="location-description">
                Serving Los Angeles, San Diego, and surrounding areas. California's 30% APR cap protects you.
              </p>
              <ul className="location-cities">
                <li><Link href="/locations/california/los-angeles">Los Angeles</Link></li>
                <li><Link href="/locations/california/san-diego">San Diego</Link></li>
              </ul>
              <span className="service-link-text">View All California Locations →</span>
            </Link>
            <Link href="/locations/florida" className="location-card">
              <h3 className="location-title">Florida</h3>
              <p className="location-description">
                Serving Miami, Tampa, and surrounding areas. Florida's tiered rate structure keeps costs fair.
              </p>
              <ul className="location-cities">
                <li><Link href="/locations/florida/miami">Miami</Link></li>
                <li><Link href="/locations/florida/tampa">Tampa</Link></li>
              </ul>
              <span className="service-link-text">View All Florida Locations →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-heading">Why Choose Direct Title Loans?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚗</div>
              <h3 className="benefit-title">Keep Your Vehicle</h3>
              <p className="benefit-description">
                You keep driving your car, truck, or motorcycle while you repay the loan.
                We only hold the title as collateral.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">Fast Approval</h3>
              <p className="benefit-description">
                Get approved in as little as 30 minutes. Many customers receive same-day funding
                for urgent financial needs.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h3 className="benefit-title">Bad Credit OK</h3>
              <p className="benefit-description">
                Your credit score isn't the primary factor. We focus on your vehicle's value
                and your ability to repay.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3 className="benefit-title">Licensed & Compliant</h3>
              <p className="benefit-description">
                We're fully licensed by the California DFPI and Florida OFR. All loans comply
                with state consumer protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I needed emergency cash for a medical bill and Direct Title Loans came through.
                Got approved in under an hour and kept driving my truck the whole time."
              </p>
              <p className="testimonial-author">- Carlos M., Los Angeles, CA</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "After my AC broke in August, I was desperate. The team explained everything clearly,
                including California's 30% rate cap. No hidden fees, no surprises!"
              </p>
              <p className="testimonial-author">- Jennifer L., San Diego, CA</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Bad credit made it impossible to get a bank loan. Direct Title Loans approved me
                based on my car's value. Fast, professional service."
              </p>
              <p className="testimonial-author">- David R., Miami, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">How fast can I get my money with a title loan?</h3>
              <p className="faq-answer">
                Many title loans are approved and funded the same day you apply. Once you complete
                the application and provide the required documents, you could have cash in your hands
                within hours. Some applications fund within 24 business hours.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I need good credit to get a title loan?</h3>
              <p className="faq-answer">
                No. Title loans are designed for people of all credit backgrounds. Your vehicle's value
                and your ability to repay are the primary factors - not your credit score. Many people
                with bad credit, no credit, or past bankruptcies qualify.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Will I lose my car if I get a title loan?</h3>
              <p className="faq-answer">
                No, you keep driving your car throughout the entire loan term. The lender only holds
                the title as collateral. As long as you make your payments according to the agreement,
                you maintain full use of your vehicle.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much can I borrow with a title loan?</h3>
              <p className="faq-answer">
                The amount you can borrow depends on your vehicle's value and your state's regulations.
                Typically, you can borrow up to 50% of your vehicle's fair market value. Loan amounts
                commonly range from $1,000 to $50,000 or more for high-value vehicles.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I pay off my title loan early?</h3>
              <p className="faq-answer">
                Yes! There are no prepayment penalties in California or Florida. You can pay off your
                loan at any time before the due date. Paying early can reduce the total interest you
                pay over the life of the loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 className="cta-heading">Ready to Get Started?</h2>
          <p className="cta-subheading">
            Apply now and see how much cash you can access with your vehicle's equity.
          </p>
          <div className="cta-buttons">
            <Link href="/apply" className="btn btn-accent btn-lg">
              Apply Now
            </Link>
            <a href="tel:+18005551234" className="btn btn-outline btn-lg">
              Call 1-800-555-1234
            </a>
          </div>
        </div>
      </section>

      
    </>
  );
}
