'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function RightSidebar() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const newsItems = [
    {
      headline: 'Indian student tops harward!',
      description:
        'Indian student tops harward university and makes history. Its the first time for an Indian student to do this.',
    },
    {
      headline: 'New scholarship program!',
      description:
        'Universities across the globe announce new scholarship opportunities for international students this year.',
    },
    {
      headline: 'Tech innovation in education!',
      description:
        'Latest AI-powered learning platforms are revolutionizing the way students learn and engage with coursework.',
    },
  ];

  const quickLinks = [
    'Learning Resources',
    'Learning Resources',
    'Learning Resources',
    'Learning Resources',
    'Learning Resources',
  ];

  const contacts = [
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'ssharmal123@kcoverseas.com',
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'ssharmal123@kcoverseas.com',
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'ssharmal123@kcoverseas.com',
    },
  ];

  const handleRefreshDashboard = () => {
    window.location.reload();
  };

  const handleRegisterStudent = () => {
    // Add your registration logic here
    alert('Opening student registration form...');
  };

  const handleDotClick = (index: number) => {
    setActiveNewsIndex(index);
  };

  const handleSelect = (selectedIndex: number) => {
    setActiveNewsIndex(selectedIndex);
  };

  const handleEventNavigation = (direction: 'prev' | 'next') => {
    // Add your event navigation logic here
    console.log(`Navigate to ${direction} event`);
  };

  const handleEventRegistration = () => {
    // Add your event registration logic here
    alert('Opening event registration...');
  };

  return (
    <aside
      className="right-content-area"
      aria-label="Sidebar with quick actions and information"
    >
      {/* Action Buttons */}
      <div
        className="d-flex gap-3 mb-4"
        role="group"
        aria-label="Quick action buttons"
      >
        <button
          className="btn btn-outline-primary refresh-dashboard-btn"
          onClick={handleRefreshDashboard}
          type="button"
          aria-describedby="refresh-desc"
        >
          Refresh Dashboard
          <span id="refresh-desc" className="visually-hidden">
            Reload dashboard data
          </span>
        </button>
        <button
          className="btn btn-primary register-student-btn"
          onClick={handleRegisterStudent}
          type="button"
          aria-describedby="register-desc"
        >
          Register Student
          <span id="register-desc" className="visually-hidden">
            Add a new student registration
          </span>
        </button>
      </div>

      {/* News Bulletin Card */}
      <div className="card news-bulletin-card mb-4">
        <div className="card-body">
          <h5 className="card-title">News Bulletin</h5>
          <div className="d-flex align-items-start mb-3">
            <div className="news-icon-circle me-3">
              <i className="bi bi-newspaper"></i>
            </div>
            <div className="flex-grow-1">
              <Carousel
                indicators={false}
                controls={false}
                interval={5000}
                activeIndex={activeNewsIndex}
                onSelect={handleSelect}
                className="news-content-carousel"
              >
                {newsItems.map((news, index) => (
                  <Carousel.Item key={index}>
                    <h6 className="news-headline">{news.headline}</h6>
                    <p className="news-body-text">
                      {news.description}{' '}
                      <Link href="/news" className="news-read-more">
                        Read More
                      </Link>
                    </p>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          {/* Custom Indicators */}
          <div className="text-center">
            {newsItems.map((_, index) => (
              <span
                key={index}
                className={`news-dot ${
                  activeNewsIndex === index ? 'active' : ''
                } me-2`}
                onClick={() => handleDotClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDotClick(index);
                  }
                }}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`Go to news item ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Card */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="upcoming-events-title">Upcoming Events</h5>
            <div className="d-flex">
              <button
                className="btn event-nav-btn rounded-circle me-2"
                aria-label="Previous event"
                onClick={() => handleEventNavigation('prev')}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn event-nav-btn rounded-circle"
                aria-label="Next event"
                onClick={() => handleEventNavigation('next')}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="position-relative mb-3">
            <Image
              src="/graduation-event.png"
              alt="Graduation ceremony with students throwing caps in the air"
              width={288}
              height={158}
              className="event-image w-100"
            />
          </div>

          <div className="d-flex justify-content-between align-items-start mb-1">
            <div>
              <h6 className="event-name">Event Name Goes here</h6>
              <div className="event-date">7 Jan 2023</div>
            </div>
            <div className="float-end event-time-container rounded">
              <div className="event-time">4:30</div>
              <div className="event-time-period">PM</div>
            </div>
          </div>

          <ul className="list-unstyled mb-3">
            <li className="d-flex align-items-center mb-2">
              <i className="bi bi-geo-alt me-2 text-muted"></i>
              <span className="event-location">University of New York</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-person me-2 text-muted"></i>
              <span className="event-author">By Kishori Gupta</span>
            </li>
          </ul>

          <button
            className="btn btn-primary w-100 event-register-btn"
            onClick={handleEventRegistration}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Quick Links Card */}
      <div className="mb-4">
        <h5 className="quick-links-title mb-3">Quick Links</h5>
        <div className="d-flex flex-column gap-2 w-100">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="quick-link-item d-flex justify-content-between align-items-center mx-auto mx-md-0"
            >
              <span className="quick-link-text">{link}</span>
              <i className="bi bi-box-arrow-up-right text-muted"></i>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Regional Manager */}
      <h5 className="contact-manager-title mb-3">Contact Regional Manager</h5>
      <div className="gap-2 d-flex flex-column">
        {contacts.map((contact, index) => (
          <div key={index} className="card">
            <div className="contact-card d-flex align-items-start">
              <div>
                <Image
                  src="/boy-2.png"
                  alt={`${contact.name} avatar`}
                  width={50}
                  height={50}
                  className="rounded-circle me-3 flex-shrink-0"
                />
              </div>
              <div className="contact-details flex-grow-1">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-phone-location d-flex align-items-center">
                  <span className="contact-phone">{contact.phone}</span>
                  <span className="contact-separator mx-2">|</span>
                  <span className="contact-location">{contact.location}</span>
                </div>
              </div>
            </div>
            <div className="contact-email-wrapper">
              <div className="contact-email">{contact.email}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
