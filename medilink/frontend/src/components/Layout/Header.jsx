// src/components/Header.jsx
import React, { useState } from 'react';
import { Search, Bell, Settings, Moon, Sun } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/Header.css';

export const Header = ({ onSearchChange, onSettingsClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSearchChange = e => {
    const q = e.target.value;
    setSearchQuery(q);
    onSearchChange(q);
  };

  return (
    <header className="header">
      <div className="header__inner">
        {/* Search */}
        <div className="header__search">
          <Search size={20} className="header__search-icon" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="header__search-input"
          />
        </div>

        {/* Actions */}
        <div className="header__actions">
          <button
            onClick={toggleDarkMode}
            className="header__btn"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="header__btn header__btn--badge">
            <Bell size={20} />
            <span className="header__badge" />
          </button>

          <button
            onClick={onSettingsClick}
            className="header__btn"
            title="Settings"
          >
            <Settings size={20} />
          </button>

          <div className="header__profile">
            <div className="header__avatar">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="header__info">
              <p className="header__name">{user?.name}</p>
              <p className="header__role">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
