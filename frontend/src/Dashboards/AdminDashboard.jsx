// src/pages/AdminDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../Theme";
import Sidebar from "../global/SideBar";
import TopBar from "../global/TopBar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <main className="admin-dashboard__main" style={{ background: colors.primary[500] }}>
        <TopBar />

        <div className="admin-dashboard__content">
          {/* The child page (Overlook, Clinics, etc.) will render here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
