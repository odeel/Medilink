// src/components/Common/UserSettings.jsx
import React, { useState } from 'react';
import { Modal } from '../Common/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Moon,
  Sun,
  Save,
  Camera,
} from 'lucide-react';
import '../../styles/UserSettings.css';

export const UserSettings = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');

  // form fields
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Medical Plaza, City, State 12345',
    bio: 'Experienced healthcare administrator with over 10 years in clinic management.',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weeklyReports: true,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const toggleNotification = key => {
    setNotifications(n => ({ ...n, [key]: !n[key] }));
  };

  const handleSave = () => {
    console.log('Saving settings:', { formData, notifications });
    onClose();
  };

  const tabs = [
    { id: 'profile',    label: 'Profile',       icon: User },
    { id: 'preferences',label: 'Preferences',  icon: isDarkMode ? Sun : Moon },
    { id: 'notifications', label: 'Notifications', icon: Mail },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings" size="xl">
      <div className="us-container">
        <aside className="us-sidebar">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? 'us-tab us-tab--active'
                    : 'us-tab'
                }>
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        <section className="us-content">
          {activeTab === 'profile' && (
            <div className="us-section">
              <div className="us-profile-header">
                <div className="us-avatar-wrapper">
                  <div className="us-avatar">
                    {user?.name?.charAt(0) || 'A'}
                  </div>
                  <button className="us-avatar-btn">
                    <Camera size={12} />
                  </button>
                </div>
                <div>
                  <h3>{user?.name}</h3>
                  <p>{user?.role}</p>
                </div>
              </div>

              <div className="us-form-grid">
                <div>
                  <label>Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Role</label>
                  <div className="us-role-display">
                    <Shield size={16}/>
                    <span>{user?.role}</span>
                  </div>
                </div>
              </div>

              <div>
                <label>Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Bio</label>
                <textarea
                  name="bio"
                  rows="3"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="us-section">
              <h3>Appearance</h3>
              <div className="us-toggle-row">
                {isDarkMode ? <Moon /> : <Sun />}
                <span>Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className={isDarkMode ? 'us-toggle us-toggle--on' : 'us-toggle'}
                >
                  <span className="us-toggle-thumb" />
                </button>
              </div>

              <h3>Language & Region</h3>
              <div className="us-form-grid">
                <div>
                  <label>Language</label>
                  <select>
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label>Timezone</label>
                  <select>
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="us-section">
              <h3>Notification Preferences</h3>
              {Object.entries(notifications).map(([key, val]) => (
                <div key={key} className="us-toggle-row">
                  <span>
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())}
                  </span>
                  <button
                    onClick={() => toggleNotification(key)}
                    className={val ? 'us-toggle us-toggle--on' : 'us-toggle'}
                  >
                    <span className="us-toggle-thumb" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <footer className="us-footer">
        <button className="us-btn" onClick={onClose}>Cancel</button>
        <button className="us-btn us-btn--primary" onClick={handleSave}>
          <Save size={16}/> Save Changes
        </button>
      </footer>
    </Modal>
  );
};
