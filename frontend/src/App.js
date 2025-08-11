// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './global/TopBar';




function App() {
  const [theme, colorMode] = useMode(); // ✅ use your custom theme

  return (
    // ✅ Wrap the ENTIRE app with the context and theme providers
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* Add more routes here */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
