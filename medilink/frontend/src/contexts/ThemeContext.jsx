import React, { createContext, useContext, useState, useEffect } from 'react';

// 1) Create the context
const ThemeContext = createContext();

// 2) Hook to consume it
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

// 3) Provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved));
    }
  }, []);

  // Whenever it changes, persist + toggle <html> class
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Exposed toggle function
  function toggleDarkMode() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
