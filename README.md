# CourseFinder Dashboard

Dashboard for the CourseFinder educational platform. Built with Next.js 15 and Bootstrap because that's what they wanted to use.

## Features

- Dashboard interface based on the Figma designs (mostly matches, close enough)
- Responsive design - works on mobile, tablet, desktop
- Bootstrap 5 for styling (easier than writing custom CSS from scratch)
- Interactive components - filtering, search, pagination etc.
- Mock statistics cards
- Student application management
- News section and events
- Sidebar navigation

## Prerequisites

- Node.js 18+ (should work with 16+ but haven't tested)
- npm or yarn

## Setup

Clone this repo and install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # All the styles, mostly Bootstrap
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main dashboard page
├── components/              # React components
│   ├── Sidebar.tsx          # Left nav
│   ├── Header.tsx           # Top header with search
│   ├── DashboardMain.tsx    # Main content (was huge, broke it down)
│   ├── FiltersSection.tsx   # Filter controls
│   ├── StatisticsCards.tsx  # Stats display
│   ├── ApplicationsTable.tsx # Applications table with tabs
│   └── RightSidebar.tsx     # Right sidebar
├── hooks/                   # Custom hooks
│   └── useDebounce.ts       # Search debouncing
├── lib/
│   └── constants.ts         # App constants
└── public/                  # Images and stuff
```

## What's Inside

**Left Sidebar:** Navigation menu with dashboard, students, applications, etc. Standard stuff.

**Main Area:**

- Greeting message (says "Hey, Good Morning Diksha!")
- Filter controls for year, date, intake, countries
- Statistics cards showing counts
- Applications table with pending/review/submitted tabs
- Pagination (limited to 3 pages for now)
- Allied Services banner at bottom

**Right Sidebar:**

- News bulletin with carousel
- Upcoming events
- Quick links
- Regional manager contact cards

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Bootstrap 5.3 + React Bootstrap
- Bootstrap Icons

## Key Features

The stats cards show application counts (conditional, unconditional, payment, visa). Data is mock for now but the layout is there.

Applications table has tabs for different statuses - pending, review, submitted. You can filter by year, date, intake, country. Search works with debouncing (300ms delay).

Responsive design - sidebar collapses on mobile, right sidebar hides on tablet. Took a while to get the mobile header right.

## Responsive Layout

- Desktop: Both sidebars visible
- Tablet (< 1200px): Right sidebar hidden
- Mobile (< 768px): Left sidebar collapses, search goes below header

## Building

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - dev server
- `npm run build` - production build
- `npm start` - start prod server
- `npm run lint` - ESLint
- `npm test` - placeholder (no tests yet)

## Notes

Colors are mostly Bootstrap defaults. Custom colors in `globals.css` if you need to change them.

Uses system fonts (Apple system font on Mac, Segoe UI on Windows, etc.).

## License

Based on Figma design. Educational/demo purposes.

---

## Dev Notes

### Current State

- Using mock data (520+ records) for now - generates random applications
- Filters work client-side
- Pagination limited to 3 pages (easier for demo)
- Added search debouncing (300ms) - was getting laggy without it

### TODO

- [ ] Connect to real API when endpoints are ready
- [ ] Write some tests eventually
- [ ] Maybe optimize bundle size later

### Issues Fixed

- Tab counts were regenerating on every click (fixed with useMemo)
- Mobile header was messed up - search bar wouldn't go to second row
- Filter dropdowns weren't showing selected values
- Long email addresses were overlapping table columns (added word-break)

### Performance Stuff

- Search debounces at 300ms to avoid filtering on every keystroke
- Mock data is memoized so it doesn't regenerate on re-renders
- Tab counts only recalculate when filters change
- Made a custom useSearchDebounce hook (removed the generic one, wasn't using it)
