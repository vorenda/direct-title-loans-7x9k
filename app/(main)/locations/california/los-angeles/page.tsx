import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

// Import city data
import cityData from "@/city-pages/los-angeles-ca.json";

export const metadata: Metadata = {
  title: cityData.seo.title,
  description: cityData.seo.metaDescription,
  keywords: cityData.seo.keywords,
};

export default function LosAngelesPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Locations", url: "/locations" },
    { label: "California", url: "/locations/california" },
    { label: "Los Angeles" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityData.schema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <article className="city-page">
        <div className="container">
          {/* HERO */}
          <header className="hero">
            <h1>{cityData.hero.h1}</h1>
            <p className="hero-subheadline">{cityData.hero.subheadline}</p>
            <div className="hero-ctas">
              <Link href={cityData.hero.ctaUrl} className="btn btn-accent btn-lg">
                {cityData.hero.ctaText}
              </Link>
              <a href={cityData.hero.secondaryCta.url} className="btn btn-outline btn-lg">
                {cityData.hero.secondaryCta.text}
              </a>
            </div>
          </header>

          {/* DESCRIPTION */}
          <section className="description-section">
            {cityData.description.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

          {/* NAP CARD */}
          <section className="nap-section">
            <div className="nap-card">
              <h2 className="nap-heading">{cityData.nap.name}</h2>
              <div className="nap-details">
                <div className="nap-item">
                  <strong>Address:</strong>
                  <p>{cityData.nap.formattedAddress}</p>
                  <a href={cityData.nap.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="nap-link">
                    Get Directions →
                  </a>
                </div>
                <div className="nap-item">
                  <strong>Phone:</strong>
                  <p><a href={`tel:${cityData.nap.formattedPhone}`} className="phone-link">{cityData.nap.phone}</a></p>
                </div>
                <div className="nap-item">
                  <strong>Hours:</strong>
                  <ul className="hours-list">
                    <li><strong>Monday:</strong> {cityData.localProof.hours.monday}</li>
                    <li><strong>Tuesday:</strong> {cityData.localProof.hours.tuesday}</li>
                    <li><strong>Wednesday:</strong> {cityData.localProof.hours.wednesday}</li>
                    <li><strong>Thursday:</strong> {cityData.localProof.hours.thursday}</li>
                    <li><strong>Friday:</strong> {cityData.localProof.hours.friday}</li>
                    <li><strong>Saturday:</strong> {cityData.localProof.hours.saturday}</li>
                    <li><strong>Sunday:</strong> {cityData.localProof.hours.sunday}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL PROOF - DIRECTIONS & MAP */}
          <section className="local-proof-section">
            <h2>{cityData.localProof.headline}</h2>
            <p className="directions-text">{cityData.localProof.directions}</p>
            <div className="map-container">
              <iframe
                src={cityData.localProof.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Direct Title Loans Los Angeles Location"
              ></iframe>
            </div>
          </section>

          {/* PRODUCT LINKS - ANTI-DOORWAY */}
          <section className="product-links-section">
            <h2>{cityData.productLinks.headline}</h2>
            <p className="product-intro">{cityData.productLinks.intro}</p>
            <div className="services-grid">
              {cityData.productLinks.services.map((service, idx) => (
                <Link key={idx} href={service.url} className="service-card">
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <span className="service-link-text">{service.anchorText} →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* STATE COMPLIANCE */}
          <section className="compliance-section">
            <h2>{cityData.stateCompliance.headline}</h2>
            <p className="compliance-intro">{cityData.stateCompliance.content}</p>
            <div className="compliance-details">
              <h3>Key Consumer Protections:</h3>
              <ul className="compliance-list">
                {cityData.stateCompliance.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="regulatory-info">
                <p>
                  <strong>Regulatory Body:</strong>{' '}
                  <a href={cityData.stateCompliance.regulatoryUrl} target="_blank" rel="noopener noreferrer">
                    {cityData.stateCompliance.regulatoryBody}
                  </a>
                </p>
                <p>
                  <strong>Verify License:</strong>{' '}
                  <a href={cityData.stateCompliance.verificationUrl} target="_blank" rel="noopener noreferrer">
                    dfpi.ca.gov/verify-a-license
                  </a>
                </p>
                <p><strong>Contact DFPI:</strong> {cityData.stateCompliance.contactPhone}</p>
              </div>
              <p className="compliance-disclaimer">{cityData.stateCompliance.disclaimer}</p>
            </div>
          </section>

          {/* LOCAL REVIEWS */}
          <section className="reviews-section">
            <h2>{cityData.localReviews.headline}</h2>
            <p className="reviews-source">Source: {cityData.localReviews.reviewSource}</p>
            <div className="reviews-grid">
              {cityData.localReviews.reviews.map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-stars">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author">— {review.name}, {review.location}</p>
                  <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {cityData.faq.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NEARBY LOCATIONS */}
          <section className="nearby-section">
            <h2>{cityData.nearbyLocations.headline}</h2>
            <p>{cityData.nearbyLocations.intro}</p>
            <div className="nearby-grid">
              {cityData.nearbyLocations.cities.map((city, idx) => (
                <Link key={idx} href={city.url} className="nearby-card">
                  <h3>{city.name}</h3>
                  <p>{city.distanceMiles} miles away</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="cta-section">
            <h2>{cityData.ctaSection.headline}</h2>
            <p>{cityData.ctaSection.subheadline}</p>
            <p className="cta-address">{cityData.ctaSection.address}</p>
            <div className="cta-buttons">
              <Link href={cityData.ctaSection.primaryCta.url} className="btn btn-accent btn-lg">
                {cityData.ctaSection.primaryCta.text}
              </Link>
              <a href={cityData.ctaSection.secondaryCta.url} className="btn btn-outline btn-lg">
                {cityData.ctaSection.secondaryCta.text}
              </a>
            </div>
          </section>
        </div>
      </article>

      
    </>
  );
}
