// App constants - work in progress

export const FILTER_OPTIONS = {
  years: ['2022', '2023', '2024'],
  // TODO: Add more years dynamically based on current year
  intakes: [
    'Fall 2023',
    'Spring 2023',
    'Summer 2023',
    'Fall 2024',
    'Spring 2024',
  ],
  countries: [
    'United Kingdom',
    'Canada',
    'United States',
    'Australia',
    'Germany',
    'Netherlands',
  ],
};

// Pagination settings
export const PAGINATION = {
  itemsPerPage: 15, // changed from 10 after testing
  maxVisiblePages: 3,
};

export const APP_CONFIG = {
  searchDebounceMs: 300, // implemented in Header component
  autoRefreshInterval: 30000, // for future use
};

// Mock data settings
export const MOCK_DATA_SIZE = 520; // increased for demo
