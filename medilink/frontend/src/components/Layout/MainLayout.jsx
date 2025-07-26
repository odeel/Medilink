// src/components/MainLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { UserSettings } from '../Settings/UserSettings';
import '../../styles/MainLayout.css';

export const MainLayout = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = query => {
    setSearchQuery(query);
    // Place your global search logic here
    console.log('Global search:', query);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__content">
        <Header
          onSearchChange={handleSearchChange}
          onSettingsClick={() => setShowSettings(true)}
        />

        <div className="layout__main">
          <Outlet />
        </div>
      </div>

      <UserSettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </div>
  );
};
