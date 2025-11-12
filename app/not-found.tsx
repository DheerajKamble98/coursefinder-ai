import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
      role="main"
    >
      <div className="text-center" role="status" aria-live="polite">
        <div className="mb-4" aria-hidden="true">
          <i className="bi bi-gear display-1 text-muted"></i>
        </div>
        <h1 className="h3 mb-3 text-dark">Currently in Development</h1>
        <p className="text-muted mb-4">
          This page is being worked on and will be available soon.
        </p>
        <Link href="/" className="btn btn-primary" aria-describedby="back-desc">
          <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
          Back to Dashboard
          <span id="back-desc" className="visually-hidden">
            Return to the main dashboard
          </span>
        </Link>
      </div>
    </main>
  );
}
