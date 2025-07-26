import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  const mockUsers = [
    { 
      id: '1', 
      email: 'admin@clinic.com', 
      password: 'admin123', 
      role: 'Super Admin', 
      name: 'Dr. Sarah Johnson' 
    },
    { 
      id: '2', 
      email: 'nurse@clinic.com', 
      password: 'nurse123', 
      role: 'Nurse', 
      name: 'Maria Rodriguez' 
    },
    { 
      id: '3', 
      email: 'doctor@clinic.com', 
      password: 'doctor123', 
      role: 'Doctor',
      name: 'Dr. Michael Chen' 
    }
  ];

  const login = async (email, password) => {
    setIsLoading(true);
    await new Promise(res => setTimeout(res, 300));

    const found = mockUsers.find(u => u.email === email && u.password === password);
    if (!found) {
      setIsLoading(false);
      return false;
    }

    const safeUser = {
      id: found.id,
      email: found.email,
      role: found.role,
      name: found.name
    };

    setUser(safeUser);
    localStorage.setItem('user', JSON.stringify(safeUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};