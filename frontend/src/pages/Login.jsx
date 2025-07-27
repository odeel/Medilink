import React from 'react';
import '../styles/Login.css';
import logo from '../Assets/logo.jpg';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon-wrapper">
          <div className="icon-circle">
            <img src={logo} className="icon" alt="logo" />
          </div>
        </div>
        <h2>Welcome to Medilink</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <form className="login-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign in</button>
        </form>

        <div className="credentials">
          <h4>Demo Credentials:</h4>
          <p><strong>Admin:</strong> admin@clinic.com / admin123</p>
          <p><strong>Nurse:</strong> nurse@clinic.com / nurse123</p>
          <p><strong>Doctor:</strong> doctor@clinic.com / doctor123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
