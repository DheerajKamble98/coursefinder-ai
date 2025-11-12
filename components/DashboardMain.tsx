'use client';

import { useMemo, useState } from 'react';
import FiltersSection from './FiltersSection';
import StatisticsCards from './StatisticsCards';
import ApplicationsTable from './ApplicationsTable';
import AlliedServicesBanner from './AlliedServicesBanner';

type Props = {
  searchQuery?: string;
};

type Filters = {
  year: string;
  dateCreated: string;
  intake: string;
  country: string;
};

export default function DashboardMain({ searchQuery = '' }: Props) {
  const [activeTab, setActiveTab] = useState('pending');
  const [filters, setFilters] = useState<Filters>({
    year: '',
    dateCreated: '',
    intake: '',
    country: '',
  });

  const stats = [
    {
      number: '18',
      label: 'Conditional',
      badge: 'In Review',
      color: 'conditional',
    },
    {
      number: '78',
      label: 'Unconditional',
      badge: 'In Review',
      color: 'unconditional',
    },
    {
      number: '52',
      label: 'Payment',
      badge: 'Pending',
      color: 'payment',
    },
    {
      number: '200',
      label: 'Payment',
      badge: 'Declined',
      color: 'payment-red',
    },
    {
      number: '18',
      label: 'Visa',
      badge: 'In Review',
      color: 'visa',
    },
  ];

  // Generate mock data - replace with actual API call later
  const generateMockApplications = () => {
    const countries = [
      'United Kingdom',
      'Canada',
      'United States',
      'Australia',
      'Germany',
      'Netherlands',
    ];
    const universities: Record<string, string[]> = {
      'United Kingdom': [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'London School of Economics',
        'University College London',
        "King's College London",
      ],
      Canada: [
        'University of Toronto',
        'McGill University',
        'University of British Columbia',
        'University of Alberta',
        'McMaster University',
        'University of Waterloo',
      ],
      'United States': [
        'Harvard University',
        'Stanford University',
        'Massachusetts Institute of Technology',
        'California Institute of Technology',
        'Princeton University',
        'Yale University',
      ],
      Australia: [
        'University of Melbourne',
        'Australian National University',
        'University of Sydney',
        'University of Queensland',
        'Monash University',
        'University of New South Wales',
      ],
      Germany: [
        'Technical University of Munich',
        'Ludwig Maximilian University',
        'Heidelberg University',
        'Humboldt University Berlin',
        'University of Freiburg',
        'RWTH Aachen University',
      ],
      Netherlands: [
        'University of Amsterdam',
        'Delft University of Technology',
        'Utrecht University',
        'Leiden University',
        'Eindhoven University of Technology',
        'VU Amsterdam',
      ],
    };

    const programs = [
      'Computer Science',
      'Business Administration',
      'Engineering',
      'Medicine',
      'Psychology',
      'Economics',
      'Physics',
      'Chemistry',
      'Biology',
      'Mathematics',
      'Law',
      'Architecture',
      'Marketing',
      'Finance',
      'Data Science',
      'Mechanical Engineering',
      'Civil Engineering',
    ];

    const names = [
      'Aarav Sharma',
      'Vivaan Gupta',
      'Aditya Kumar',
      'Vihaan Singh',
      'Arjun Patel',
      'Sai Reddy',
      'Reyansh Verma',
      'Ayaan Khan',
      'Krishna Yadav',
      'Ishaan Jain',
      'Ananya Agarwal',
      'Diya Mehta',
      'Aadhya Nair',
      'Kavya Iyer',
      'Arya Mishra',
      'Navya Pillai',
      'Pari Bansal',
      'Myra Kapoor',
      'Sara Ali',
      'Zara Sinha',
      'John Smith',
      'Emma Wilson',
      'David Chen',
      'Sophie Taylor',
      'Michael Brown',
      'Lisa Zhang',
      'James Miller',
      'Priya Singh',
      'Alex Johnson',
      'Maria Garcia',
    ];

    const emailDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'student.ac.uk',
      'edu.au',
    ];
    const years = ['2022', '2023', '2024'];
    const intakes = [
      'Fall 2023',
      'Spring 2023',
      'Summer 2023',
      'Fall 2024',
      'Spring 2024',
    ];
    const statuses = ['pending', 'review', 'submitted'];
    const pendingTimes = [
      '1 Day',
      '2 Days',
      '3 Days',
      '4 Days',
      '5 Days',
      '1 Week',
      '2 Weeks',
      '3 Weeks',
      '1 Month',
    ];

    const applications = [];

    // Generate applications - started with 100, increased for demo
    // TODO: Replace with actual API call
    for (let i = 0; i < 520; i++) {
      const country = countries[Math.floor(Math.random() * countries.length)];
      const university =
        universities[country][
          Math.floor(Math.random() * universities[country].length)
        ];
      const name = names[Math.floor(Math.random() * names.length)];
      const program = programs[Math.floor(Math.random() * programs.length)];
      const year = years[Math.floor(Math.random() * years.length)];
      const intake = intakes[Math.floor(Math.random() * intakes.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const pendingSince =
        pendingTimes[Math.floor(Math.random() * pendingTimes.length)];

      // Generate realistic dates based on year
      const getRandomDate = (year: string): Date => {
        const startDate = new Date(`${year}-01-01`);
        const endDate = new Date(`${year}-12-31`);
        const randomTime =
          startDate.getTime() +
          Math.random() * (endDate.getTime() - startDate.getTime());
        return new Date(randomTime);
      };

      const createdDate = getRandomDate(year);
      const formattedDate = createdDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });

      // Generate email
      const emailName = name.toLowerCase().replace(/\s+/g, '');
      const emailDomain =
        emailDomains[Math.floor(Math.random() * emailDomains.length)];
      const email = `${emailName}${Math.floor(
        Math.random() * 999
      )}@${emailDomain}`;

      // Generate acknowledgment number
      const ackNo = `${17000 + i}/${year.slice(-2)}-${(parseInt(year) + 1)
        .toString()
        .slice(-2)}`;

      applications.push({
        ackNo,
        name,
        email,
        university:
          university.length > 20
            ? university.substring(0, 17) + '...'
            : university,
        program:
          program.length > 15 ? program.substring(0, 12) + '...' : program,
        pendingSince,
        date: formattedDate,
        year,
        dateCreated: createdDate.toISOString().split('T')[0],
        intake,
        country,
        status,
      });
    }

    return applications;
  };

  // Generate applications only once when component mounts
  const applications = useMemo(() => generateMockApplications(), []);

  // Apply global filters to applications (tab filtering handled by ApplicationsTable)
  const filteredApplications = useMemo(() => {
    let filtered = applications;

    // Apply search filter
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((a) => {
        return (
          a.ackNo.toLowerCase().includes(q) ||
          a.name.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          a.university.toLowerCase().includes(q) ||
          a.program.toLowerCase().includes(q)
        );
      });
    }

    // Apply filters
    if (filters.year) {
      filtered = filtered.filter((a) => a.year === filters.year);
    }
    if (filters.dateCreated) {
      filtered = filtered.filter((a) => a.dateCreated >= filters.dateCreated);
    }
    if (filters.intake) {
      filtered = filtered.filter((a) => a.intake === filters.intake);
    }
    if (filters.country) {
      filtered = filtered.filter((a) => a.country === filters.country);
    }

    return filtered;
  }, [applications, searchQuery, filters]);

  // Calculate actual counts based on filtered data
  const { pendingCount, reviewCount, submittedCount } = useMemo(() => {
    const pendingCount = filteredApplications.filter(
      (a) => a.status === 'pending'
    ).length;
    const reviewCount = filteredApplications.filter(
      (a) => a.status === 'review'
    ).length;
    const submittedCount = filteredApplications.filter(
      (a) => a.status === 'submitted'
    ).length;
    return { pendingCount, reviewCount, submittedCount };
  }, [filteredApplications]);

  const tabs = [
    { id: 'pending', label: 'Pending On Me', count: pendingCount },
    { id: 'review', label: 'Under Review', count: reviewCount },
    { id: 'submitted', label: 'Submitted', count: submittedCount },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    // TODO: Add analytics tracking for filter usage
    console.log('Applied filters:', filters);
    // Maybe add toast notification here later
  };

  const clearFilters = () => {
    setFilters({
      year: '',
      dateCreated: '',
      intake: '',
      country: '',
    });
  };

  return (
    <div className="dashboard-main">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-greeting">
          Hey, Good Morning <strong>Diksha!</strong>
        </h1>
      </header>

      {/* Filters Section */}
      <FiltersSection
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
        onClearFilters={clearFilters}
      />

      {/* Statistics Cards */}
      <StatisticsCards stats={stats} />

      {/* Applications Table */}
      <ApplicationsTable
        applications={filteredApplications}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Allied Services Banner */}
      <AlliedServicesBanner />
    </div>
  );
}
