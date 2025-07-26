// src/pages/Login.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Building2, Lock, Mail, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Login.css';

export const Login = () => {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const { user, login, isLoading } = useAuth();

  // Already authenticated? Redirect to dashboard.
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Trigger the loading state inside context
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* --- Header --- */}
        <div className="login-header">
          <div className="login-logo">
            <Building2 size={32} className="login-logo-icon" />
          </div>
          <h2 className="login-title">Welcome to ClinicHub</h2>
          <p className="login-subtitle">Sign in to your account to continue</p>
        </div>

        {/* --- Card / Form --- */}
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="login-error">
                <AlertCircle size={20} className="login-error-icon" />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  required
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  id="password"
                  type="password"
                  required
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="demo-credentials">
            <p className="demo-title">Demo Credentials:</p>
            <p><strong>Admin:</strong> admin@clinic.com / admin123</p>
            <p><strong>Nurse:</strong> nurse@clinic.com / nurse123</p>
            <p><strong>Doctor:</strong> doctor@clinic.com / doctor123</p>
          </div>
        </div>
      </div>
    </div>
  );
};
