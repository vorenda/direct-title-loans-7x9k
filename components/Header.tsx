"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <div className="logo-icon">DT</div>
          <span>Direct Title Loans</span>
        </Link>

        <nav className="nav">
          <ul className="nav-links" style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            <li><Link href="/services/car-title-loans" className="nav-link">Services</Link></li>
            <li><Link href="/locations" className="nav-link">Locations</Link></li>
            <li><Link href="/apply" className="nav-link">Apply Now</Link></li>
            <li><a href="tel:+18005551234" className="nav-link">Call Us</a></li>
          </ul>
          <Link href="/apply" className="btn btn-primary">Get Started</Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: var(--z-index-sticky);
          background-color: var(--color-bg-primary);
          border-bottom: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4) var(--space-6);
          max-width: var(--container-xl);
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-family: var(--font-family-heading);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary-500);
          text-decoration: none;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: var(--font-weight-bold);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .nav-link {
          font-weight: var(--font-weight-medium);
          color: var(--color-text-secondary);
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-primary-500);
          text-decoration: none;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: var(--font-size-2xl);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${mobileMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: var(--space-4);
            box-shadow: var(--shadow-md);
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
