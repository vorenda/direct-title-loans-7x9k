import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '120px',
          fontWeight: 800,
          color: 'var(--color-primary-500)',
          lineHeight: 1,
          marginBottom: '1rem'
        }}>404</h1>
        <h2 style={{
          fontSize: '1.875rem',
          marginBottom: '1rem'
        }}>Page Not Found</h2>
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem'
        }}>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link href="/apply" className="btn btn-outline">
            Apply for a Loan
          </Link>
        </div>
      </div>
    </div>
  );
}
