// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import TopBar from "./global/TopBar"; // kept (not removed) per your request

// --- ADDED: admin layout + pages (no changes to your existing login route) ---
import AdminDashboard from "./Dashboards/AdminDashboard";
import Overlook from "./pages/Overlook";
import Clinics from "./pages/Clinics";
import Medicines from "./pages/Medicines";
import Doctors from "./pages/Doctors";
import Nurses from "./pages/Nurses";
import FAQs from "./pages/FAQs";
import Coupons from "./pages/Coupons";
import Specialties from "./pages/Specialties";
// -------------------------------------------------------------------------

function App() {
  const [theme, colorMode] = useMode(); // ✅ use your custom theme

  return (
    // ✅ Wrap the ENTIRE app with the context and theme providers
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            {/* keep your login route exactly the same */}
            <Route path="/" element={<Login />} />

            {/* Admin layout route (mounts Sidebar + TopBar once)
                * path = /app
                * index -> Overlook (default page inside dashboard)
                * child routes: clinics, medicines, doctors, nurses, faqs, coupons, specialties
            */}
            <Route path="/app" element={<AdminDashboard />}>
              <Route index element={<Overlook />} />
              <Route path="clinics" element={<Clinics />} />
              <Route path="medicines" element={<Medicines />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="nurses" element={<Nurses />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="coupons" element={<Coupons />} />
              <Route path="specialties" element={<Specialties />} />

              {/* optional placeholders you can remove or replace later */}
              <Route path="analytics" element={<div style={{ padding: 20 }}>Analytics (coming soon)</div>} />
              <Route path="geography" element={<div style={{ padding: 20 }}>Geography (coming soon)</div>} />
            </Route>

            {/* fallback: any unknown route -> send user to login (preserves current behaviour) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
