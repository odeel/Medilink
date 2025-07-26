// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Building2,
  Stethoscope,
  Pill,
  UserCog,
  UserCheck,
  Ticket,
  HelpCircle,
  Package,
  MessageCircle,
  BarChart3,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/Sidebar.css'
const navigation = [
  { name: 'Dashboard',   href: '/dashboard',  icon: BarChart3 },
  { name: 'Clinics',     href: '/clinics',    icon: Building2 },
  { name: 'Specialties', href: '/specialties',icon: Stethoscope },
  { name: 'Medicines',   href: '/medicines',  icon: Pill },
  { name: 'Nurses',      href: '/nurses',     icon: UserCog },
  { name: 'Doctors',     href: '/doctors',    icon: UserCheck },
  { name: 'Coupons',     href: '/coupons',    icon: Ticket },
  { name: 'FAQs',        href: '/faqs',       icon: HelpCircle },
  { name: 'Products',    href: '/products',   icon: Package },
  { name: 'Chat',        href: '/chat',       icon: MessageCircle },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout }          = useAuth();
  const { isDarkMode }            = useTheme();
  const location                  = useLocation();

  const handleLogout = () => logout();

  return (
    <>
      {/* Mobile toggle */}
      <div className="sidebar__mobile-toggle">
        <button onClick={() => setIsOpen(!isOpen)} className="sidebar__toggle-btn">
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Sidebar panel */}
      <div className={`sidebar__container ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}>
        <div className="sidebar__content">
          {/* Logo */}
          <div className="sidebar__logo">
            <div className="sidebar__logo-icon"><Building2 size={20}/></div>
            <span className="sidebar__logo-text">ClinicHub</span>
          </div>

          {/* Nav */}
          <nav className="sidebar__nav">
            {navigation.map(item => {
              const Icon = item.icon;
              const active = location.pathname === item.href;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`sidebar__nav-item ${active ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20}/>
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* User menu */}
          <div className="sidebar__user-menu">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="sidebar__user-button"
            >
              <div className="sidebar__avatar">{user?.name?.charAt(0) || 'A'}</div>
              <div className="sidebar__user-info">
                <p className="sidebar__user-name">{user?.name}</p>
                <p className="sidebar__user-role">{user?.role}</p>
              </div>
              <ChevronDown size={16} className={userMenuOpen ? 'rotated' : ''}/>
            </button>

            {userMenuOpen && (
              <div className="sidebar__user-dropdown">
                <button onClick={handleLogout} className="sidebar__logout-btn">
                  <LogOut size={16}/>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && <div className="sidebar__overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};
