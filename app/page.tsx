'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardMain from '@/components/DashboardMain';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="main-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <Header
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
          onSearch={(q) => setSearchQuery(q)}
        />
        <div
          className="dashboard-container"
          role="main"
          aria-label="Main dashboard content"
        >
          <main
            id="main"
            style={{ flex: 1 }}
            aria-label="Primary dashboard content"
          >
            <DashboardMain searchQuery={searchQuery} />
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
