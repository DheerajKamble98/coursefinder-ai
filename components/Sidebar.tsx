'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardIcon from './icons/DashboardIcon';
import StudentsIcon from './icons/StudentsIcon';
import ApplicationsIcon from './icons/ApplicationsIcon';
import SearchCoursesIcon from './icons/SearchCoursesIcon';
import WalletIcon from './icons/WalletIcon';
import CommissionIcon from './icons/CommissionIcon';
import AlliedServicesIcon from './icons/AlliedServicesIcon';
import LearningResourcesIcon from './icons/LearningResourcesIcon';
import QuickLinksIcon from './icons/QuickLinksIcon';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ isOpen }: Props) {
  const pathname = usePathname();

  const menuItems = [
    {
      iconComp: <DashboardIcon className="menu-icon" />,
      label: 'Dashboard',
      href: '/',
      hasDropdown: false,
    },
    {
      iconComp: <StudentsIcon className="menu-icon" />,
      label: 'Students',
      href: '/students',
      hasDropdown: false,
    },
    {
      iconComp: <ApplicationsIcon className="menu-icon" />,
      label: 'Applications',
      href: '/applications',
      hasDropdown: false,
    },
    {
      iconComp: <SearchCoursesIcon className="menu-icon" />,
      label: 'Search Courses',
      href: '/search-courses',
      hasDropdown: false,
    },
    {
      iconComp: <WalletIcon className="menu-icon" />,
      label: 'Wallet',
      href: '/wallet',
      hasDropdown: false,
    },
    {
      iconComp: <CommissionIcon className="menu-icon" />,
      label: 'Commission Payments',
      href: '/commission',
      hasDropdown: false,
    },
    {
      iconComp: <AlliedServicesIcon className="menu-icon" />,
      label: 'Allied Services',
      href: '/allied-services',
      hasDropdown: true,
    },
    {
      iconComp: <LearningResourcesIcon className="menu-icon" />,
      label: 'Learning Resources',
      href: '/learning-resources',
      hasDropdown: false,
    },
    {
      iconComp: <QuickLinksIcon className="menu-icon" />,
      label: 'Quick Links',
      href: '/quick-links',
      hasDropdown: true,
    },
  ];

  return (
    <nav
      id="sidebar"
      aria-label="Primary navigation"
      className={`sidebar ${isOpen ? 'open' : ''}`}
      role="navigation"
    >
      <ul className="nav flex-column" role="menubar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className={`nav-link d-flex align-items-center gap-2 px-3 py-2 ${
                  isActive ? 'active' : ''
                }`}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                aria-expanded={item.hasDropdown ? 'false' : undefined}
                aria-describedby={`${item.label
                  .toLowerCase()
                  .replace(/\s+/g, '-')}-desc`}
              >
                {item.iconComp}
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <i
                    className="bi bi-chevron-down ms-auto"
                    style={{ fontSize: '12px' }}
                    aria-hidden="true"
                  ></i>
                )}
                <span
                  id={`${item.label.toLowerCase().replace(/\s+/g, '-')}-desc`}
                  className="visually-hidden"
                >
                  Navigate to {item.label} section
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="mt-auto px-3 position-absolute bottom-0 start-0 end-0 mb-3"
        role="complementary"
        aria-label="Secondary actions"
      >
        <Link
          href="/feedback"
          className="nav-link d-flex align-items-center gap-2 px-3 py-2"
          aria-describedby="feedback-desc"
        >
          <i className="bi bi-chat-left-text" aria-hidden="true"></i>
          <span>Submit feedback</span>
          <span id="feedback-desc" className="visually-hidden">
            Provide feedback about your experience
          </span>
        </Link>
      </div>
    </nav>
  );
}
