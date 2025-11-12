import { useState, useEffect } from 'react';

/**
 * Custom hook for search debouncing
 * Includes optimizations for empty strings and better UX
 * Note: Removed generic useDebounce since only search-specific logic is needed
 */
export function useSearchDebounce(
  searchTerm: string,
  delay: number = 300
): string {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    // Immediately update if search term is empty (for better UX)
    if (!searchTerm.trim()) {
      setDebouncedSearchTerm('');
      return;
    }

    // Set up timer for non-empty search terms
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    // Cleanup timer on dependency change
    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  return debouncedSearchTerm;
}
