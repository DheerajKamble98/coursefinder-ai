'use client';

import { FILTER_OPTIONS } from '@/lib/constants';

type Filters = {
  year: string;
  dateCreated: string;
  intake: string;
  country: string;
};

type Props = {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
};

export default function FiltersSection({
  filters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
}: Props) {
  const {
    years: yearOptions,
    intakes: intakeOptions,
    countries: countryOptions,
  } = FILTER_OPTIONS;

  // Consider adding loading state for filters in future

  return (
    <section className="figma-filter-section" aria-labelledby="filter-heading">
      <h2 id="filter-heading" className="visually-hidden">
        Filter Applications
      </h2>
      <div className="figma-filter-row-1">
        {/* Year Filter */}
        <div
          className={`figma-filter-dropdown ${filters.year ? 'has-value' : ''}`}
          style={{ width: '158px' }}
        >
          <div className="figma-filter-content">
            <div className="figma-filter-label-group">
              <i
                className="bi bi-calendar3 figma-filter-icon"
                aria-hidden="true"
              ></i>
              <span className="figma-filter-label">
                {filters.year || 'Year'}
              </span>
            </div>
            <i
              className="bi bi-chevron-down figma-filter-arrow"
              aria-hidden="true"
            ></i>
          </div>
          <label htmlFor="year-filter" className="visually-hidden">
            Filter by year
          </label>
          <select
            id="year-filter"
            className="figma-filter-select"
            value={filters.year}
            onChange={(e) => onFilterChange('year', e.target.value)}
            aria-label="Filter applications by year"
          >
            <option value="">All years</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Date Created Filter */}
        <div
          className={`figma-filter-dropdown ${
            filters.dateCreated ? 'has-value' : ''
          }`}
          style={{ width: '253px' }}
        >
          <div className="figma-filter-content">
            <div className="figma-filter-label-group">
              <i
                className="bi bi-calendar3 figma-filter-icon"
                aria-hidden="true"
              ></i>
              <span className="figma-filter-label">
                {filters.dateCreated
                  ? new Date(filters.dateCreated).toLocaleDateString()
                  : 'Date Created'}
              </span>
            </div>
            <i
              className="bi bi-chevron-down figma-filter-arrow"
              aria-hidden="true"
            ></i>
          </div>
          <label htmlFor="date-filter" className="visually-hidden">
            Filter by date created
          </label>
          <input
            id="date-filter"
            type="date"
            className="figma-filter-select"
            value={filters.dateCreated}
            onChange={(e) => onFilterChange('dateCreated', e.target.value)}
            aria-label="Filter applications by creation date"
          />
        </div>

        {/* Select Intake Filter */}
        <div
          className={`figma-filter-dropdown ${
            filters.intake ? 'has-value' : ''
          }`}
          style={{ width: '241px' }}
        >
          <div className="figma-filter-content">
            <div className="figma-filter-label-group">
              <i
                className="bi bi-calendar3 figma-filter-icon"
                aria-hidden="true"
              ></i>
              <span className="figma-filter-label">
                {filters.intake || 'Select intake'}
              </span>
            </div>
            <i
              className="bi bi-chevron-down figma-filter-arrow"
              aria-hidden="true"
            ></i>
          </div>
          <label htmlFor="intake-filter" className="visually-hidden">
            Filter by intake period
          </label>
          <select
            id="intake-filter"
            className="figma-filter-select"
            value={filters.intake}
            onChange={(e) => onFilterChange('intake', e.target.value)}
            aria-label="Filter applications by intake period"
          >
            <option value="">All intakes</option>
            {intakeOptions.map((intake) => (
              <option key={intake} value={intake}>
                {intake}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="figma-filter-row-2">
        {/* Countries Filter */}
        <div
          className={`figma-filter-dropdown ${
            filters.country ? 'has-value' : ''
          }`}
          style={{ width: '332px' }}
        >
          <div className="figma-filter-content">
            <div className="figma-filter-label-group">
              <svg
                className="figma-countries-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.18 0.8L13.82 0.8C14.46 0.8 15 1.34 15 2L15 14C15 14.66 14.46 15.2 13.82 15.2L2.18 15.2C1.54 15.2 1 14.66 1 14L1 2C1 1.34 1.54 0.8 2.18 0.8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="8" cy="3" r="1" fill="currentColor" />
                <rect
                  x="4"
                  y="8"
                  width="8"
                  height="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="figma-filter-label">
                {filters.country || 'Countries'}
              </span>
            </div>
            <i
              className="bi bi-chevron-down figma-filter-arrow"
              aria-hidden="true"
            ></i>
          </div>
          <label htmlFor="country-filter" className="visually-hidden">
            Filter by country
          </label>
          <select
            id="country-filter"
            className="figma-filter-select"
            value={filters.country}
            onChange={(e) => onFilterChange('country', e.target.value)}
            aria-label="Filter applications by country"
          >
            <option value="">All countries</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Apply Filters Button */}
        <button
          className="figma-apply-filters-btn"
          onClick={onApplyFilters}
          type="button"
          aria-describedby="apply-filters-desc"
        >
          Apply Filters
          <span id="apply-filters-desc" className="visually-hidden">
            Apply selected filters to the applications list
          </span>
        </button>

        {/* Clear Filters Button */}
        {(filters.year ||
          filters.dateCreated ||
          filters.intake ||
          filters.country) && (
          <button
            className="figma-clear-filters-btn"
            onClick={onClearFilters}
            type="button"
            aria-label="Clear all active filters"
            title="Clear all filters"
          >
            Clear
          </button>
        )}
      </div>
    </section>
  );
}
