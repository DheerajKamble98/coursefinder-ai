'use client';

import Image from 'next/image';

export default function AlliedServicesBanner() {
  // TODO: Make this configurable via props once get actual api endpoints data
  return (
    <div className="figma-allied-services-banner">
      {/* Main Banner Container */}
      <div className="figma-banner-container">
        {/* Text Content */}
        <div className="figma-banner-content">
          <div className="figma-banner-title">Allied Services</div>
          <h2 className="figma-banner-heading">Overseas Education Loans</h2>
          <p className="figma-banner-description">
            Provide end to end overseas education loan assistance to your
            students to help them achieve their goal
          </p>
          <button className="figma-get-started-btn">
            <span className="figma-btn-text">Get Started</span>
          </button>
        </div>

        {/* Banner Illustration */}
        <div className="figma-banner-illustration">
          <div className="figma-illustration-container">
            <Image
              src="/boy.png"
              alt="Student illustration for Allied Services"
              width={200}
              height={200}
              className="figma-person-illustration"
              priority
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots - future scope */}
      <div className="figma-banner-pagination">
        <div className="figma-dot figma-dot-active"></div>
        <div className="figma-dot"></div>
        <div className="figma-dot"></div>
      </div>
    </div>
  );
}
