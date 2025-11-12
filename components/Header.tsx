'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchDebounce } from '@/hooks/useDebounce';
import { APP_CONFIG } from '@/lib/constants';

type Props = {
  onToggleSidebar?: () => void;
  onSearch?: (query: string) => void;
};

export default function Header({ onToggleSidebar, onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useSearchDebounce(
    searchTerm,
    APP_CONFIG.searchDebounceMs
  );

  // Track if search is being debounced (for potential loading indicator)
  const isSearching =
    searchTerm !== debouncedSearchTerm && searchTerm.length > 0;

  // Call onSearch when debounced search term changes
  useEffect(() => {
    onSearch?.(debouncedSearchTerm);
    // console.log('Search executed:', debouncedSearchTerm) // debug
  }, [debouncedSearchTerm, onSearch]);

  return (
    <header className="top-header" role="banner">
      <div className="brand-wrap">
        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-controls="sidebar"
          aria-expanded="false"
          onClick={onToggleSidebar}
        >
          <i className="bi bi-list" aria-hidden="true"></i>
        </button>
        <Link href="/" className="brand" aria-label="CourseFinder.ai Home">
          coursefinder.ai
        </Link>
      </div>

      <form
        className="header-search"
        role="search"
        aria-label="Site search"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search-input" className="visually-hidden">
          Search by student name or acknowledgment number
        </label>
        <i
          className={`bi ${isSearching ? 'bi-hourglass-split' : 'bi-search'}`}
          aria-hidden="true"
        ></i>
        <input
          id="search-input"
          type="search"
          placeholder="Search by student name, ack no..."
          className="form-control"
          value={searchTerm}
          aria-label="Search by student name or acknowledgment number"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="header-right" role="navigation" aria-label="User actions">
        <Link
          href="/whats-new"
          className="header-link"
          aria-describedby="whats-new-desc"
        >
          <i className="bi bi-house-door" aria-hidden="true"></i>
          <span>What's New?</span>
          <span id="whats-new-desc" className="visually-hidden">
            View latest updates and announcements
          </span>
        </Link>
        <button
          type="button"
          className="btn btn-link p-0 text-white position-relative"
          aria-label="Notifications (3 unread)"
          aria-describedby="notification-desc"
        >
          <i
            className="bi bi-bell"
            style={{ fontSize: '20px' }}
            aria-hidden="true"
          ></i>
          <span
            className="notification-badge"
            aria-live="polite"
            aria-atomic="true"
          >
            3
          </span>
          <span id="notification-desc" className="visually-hidden">
            You have 3 unread notifications
          </span>
        </button>
        <button
          type="button"
          className="user-profile"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="User menu for Dikha Goel"
        >
          <Image
            src="/user-profile.png"
            alt=""
            width={44}
            height={44}
            className="user-avatar-img"
            priority
          />
          <span>Dikha Goel</span>
          <i className="bi bi-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
}
