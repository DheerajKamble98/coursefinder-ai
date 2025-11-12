'use client';

import { useState, useEffect } from 'react';

type Application = {
  ackNo: string;
  name: string;
  email: string;
  university: string;
  program: string;
  pendingSince: string;
  date: string;
  year: string;
  dateCreated: string;
  intake: string;
  country: string;
  status: string;
};

type Tab = {
  id: string;
  label: string;
  count: number;
};

type Props = {
  applications: Application[];
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export default function ApplicationsTable({
  applications,
  tabs,
  activeTab,
  onTabChange,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Filter applications by active tab
  const filteredApplications = applications.filter(
    (app) => app.status === activeTab
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApplications = filteredApplications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Auto-adjust currentPage if it exceeds totalPages after filtering
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (tabId: string) => {
    setCurrentPage(1); // Reset to first page when changing tabs
    onTabChange(tabId);
    // console.log('Tab changed to:', tabId) // debug
  };

  // Old pagination logic (keeping for reference)
  // const getAllPages = () => Array.from({length: totalPages}, (_, i) => i + 1)

  // Generate page numbers (max 3 pages shown)
  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <section
      className="applications-section"
      aria-labelledby="applications-heading"
    >
      {/* Header */}
      <header className="applications-header">
        <h2 id="applications-heading" className="applications-title">
          Applications
        </h2>
        <button
          className="applications-maximize"
          aria-label="Maximize table view"
          type="button"
        >
          <i className="bi bi-arrows-fullscreen" aria-hidden="true"></i>
        </button>
      </header>

      {/* Tabs */}
      <div
        className="applications-tabs"
        role="tablist"
        aria-label="Filter applications by status"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`applications-tab ${
              activeTab === tab.id ? 'active' : ''
            }`}
            onClick={() => handleTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            type="button"
          >
            <span className="applications-tab-text">
              {tab.label} ({tab.count})
            </span>
          </button>
        ))}
      </div>

      {/* Table Header Background */}
      <div className="table-header-bg" aria-hidden="true"></div>

      {/* Table Headers */}
      <div
        className="table-headers"
        role="row"
        aria-label="Table column headers"
      >
        <button
          className="table-header ack-no"
          role="columnheader"
          aria-sort="none"
          type="button"
        >
          <span>Ack. no.</span>
          <i
            className="bi bi-chevron-down table-header-sort"
            aria-hidden="true"
          ></i>
        </button>
        <button
          className="table-header student-name"
          role="columnheader"
          aria-sort="none"
          type="button"
        >
          <span>Student name</span>
          <i
            className="bi bi-chevron-down table-header-sort"
            aria-hidden="true"
          ></i>
        </button>
        <button
          className="table-header university"
          role="columnheader"
          aria-sort="none"
          type="button"
        >
          <span>University</span>
          <i
            className="bi bi-chevron-down table-header-sort"
            aria-hidden="true"
          ></i>
        </button>
        <button
          className="table-header program"
          role="columnheader"
          aria-sort="none"
          type="button"
        >
          <span>Program</span>
          <i
            className="bi bi-chevron-down table-header-sort"
            aria-hidden="true"
          ></i>
        </button>
        <button
          className="table-header pending-since"
          role="columnheader"
          aria-sort="none"
          type="button"
        >
          <span>Pending Since</span>
          <i
            className="bi bi-chevron-down table-header-sort"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      {/* Table Body */}
      <div
        className="table-body"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        aria-label="Applications table data"
      >
        {paginatedApplications.map((app, index) => (
          <div
            key={app.ackNo}
            className="table-row"
            role="row"
            aria-rowindex={index + 1}
          >
            <div
              className="table-cell ack-no"
              role="gridcell"
              aria-label={`Acknowledgment number: ${app.ackNo}`}
            >
              {app.ackNo}
            </div>
            <div className="table-cell student-name" role="gridcell">
              <div
                className="student-name-text"
                aria-label={`Student name: ${app.name}`}
              >
                {app.name}
              </div>
              <div
                className="student-email-text"
                aria-label={`Email: ${app.email}`}
              >
                {app.email}
              </div>
            </div>
            <div
              className="table-cell university"
              role="gridcell"
              aria-label={`University: ${app.university}`}
            >
              {app.university}
            </div>
            <div
              className="table-cell program"
              role="gridcell"
              aria-label={`Program: ${app.program}`}
            >
              {app.program}
            </div>
            <div className="table-cell pending-since" role="gridcell">
              <div
                className="pending-days-text"
                aria-label={`Pending for: ${app.pendingSince}`}
              >
                {app.pendingSince}
              </div>
              <div
                className="pending-date-text"
                aria-label={`Since date: ${app.date}`}
              >
                {app.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="table-pagination">
        <div className="pagination-info">
          <i
            className="bi bi-chevron-down pagination-nav-left"
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            style={{
              cursor: currentPage > 1 ? 'pointer' : 'not-allowed',
              opacity: currentPage > 1 ? 1 : 0.5,
            }}
          ></i>

          <div className="pagination-numbers">
            {getVisiblePages().map((page) => (
              <button
                key={page}
                className={`pagination-number ${
                  currentPage === page ? 'active' : ''
                }`}
                onClick={() => handlePageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
          </div>

          <i
            className="bi bi-chevron-down pagination-nav-right"
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            style={{
              cursor: currentPage < totalPages ? 'pointer' : 'not-allowed',
              opacity: currentPage < totalPages ? 1 : 0.5,
            }}
          ></i>
        </div>
      </div>
    </section>
  );
}
