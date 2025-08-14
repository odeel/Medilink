import React, { useState } from "react";

// v0.x API exports (ProSidebar + parts)
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { tokens } from "../Theme"; // adjust if your Theme file path differs

// MUI icons (allowed)
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import "../styles/Sidebar.css"; // custom styles live here

// Small wrapper for a menu item (keeps our code DRY)
// Note: We no longer render a nested <Link/> — we call navigate() to keep routing consistent.
const Item = ({ title, to, icon, isActive, onSelect, navigate }) => {
  return (
    <MenuItem
      className={`sidebar__item ${isActive ? "sidebar__item--active" : ""}`}
      active={isActive}
      style={{ cursor: "pointer" }}
      onClick={() => {
        onSelect(title);
        // navigate() will perform client-side navigation with react-router
        navigate(to);
      }}
      icon={icon}
    >
      <div className="sidebar__item-text">{title}</div>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overlook");

  // CSS variables for Sidebar.css to pick up
  const cssVars = {
    "--sidebar-bg": colors?.primary?.[400] || "#1f2937",
    "--sidebar-text": colors?.grey?.[100] || "#f8fafc",
    "--sidebar-hover": colors?.blueAccent?.[400] || "#86f",
    "--sidebar-active": colors?.greenAccent?.[500] || "#4cceac",
  };

  // Map of routes to determine isActive from pathname (handles refresh / deep link)
  const PATHS = {
    Overlook: "/app",
    Clinics: "/app/clinics",
    Medicines: "/app/medicines",
    Doctors: "/app/doctors",
    Nurses: "/app/nurses",
    Coupons: "/app/coupons",
    FAQs: "/app/faqs",
    Specialties: "/app/specialties",
    Analytics: "/app/analytics",
    Geography: "/app/geography",
  };

  const isPathActive = (absPath) => {
    // exact match or nested under the path (e.g. /app/clinics/123)
    if (absPath === "/app") {
      return pathname === "/app" || pathname === "/app/";
    }
    return pathname === absPath || pathname.startsWith(absPath + "/");
  };

  return (
    <div className="sidebar-wrapper" style={cssVars}>
      <ProSidebar collapsed={isCollapsed}>
        <SidebarHeader>
          <div className="sidebar-header-inner">
            {!isCollapsed && <div className="sidebar-brand">ADMINIS</div>}
            <button
              className="sidebar-toggle-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle sidebar"
            >
              <MenuOutlinedIcon />
            </button>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {!isCollapsed && (
            <div className="sidebar__profile">
              <div className="sidebar__profile-avatar-wrap">
                <img
                  alt="profile-user"
                  className="sidebar__profile-avatar"
                  src={`../../assets/user.png`}
                />
              </div>
              <div className="sidebar__profile-info">
                <div className="sidebar__profile-name">Ed Roh</div>
                <div className="sidebar__profile-role">VP Fancy Admin</div>
              </div>
            </div>
          )}

          <Menu iconShape="square">
            {/* Overlook = default (note: absolute path used) */}
            <Item
              title="Overlook"
              to="/app"
              icon={<HomeOutlinedIcon />}
              isActive={isPathActive(PATHS.Overlook)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />

            <div className="sidebar__section-title">Data</div>
            <Item
              title="Clinics"
              to="/app/clinics"
              icon={<PeopleOutlinedIcon />}
              isActive={isPathActive(PATHS.Clinics)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Medicines"
              to="/app/medicines"
              icon={<ReceiptOutlinedIcon />}
              isActive={isPathActive(PATHS.Medicines)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Doctors"
              to="/app/doctors"
              icon={<PersonOutlinedIcon />}
              isActive={isPathActive(PATHS.Doctors)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Nurses"
              to="/app/nurses"
              icon={<ContactsOutlinedIcon />}
              isActive={isPathActive(PATHS.Nurses)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Coupons"
              to="/app/coupons"
              icon={<PieChartOutlineOutlinedIcon />}
              isActive={isPathActive(PATHS.Coupons)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />

            <div className="sidebar__section-title">Pages</div>
            <Item
              title="FAQs"
              to="/app/faqs"
              icon={<HelpOutlineOutlinedIcon />}
              isActive={isPathActive(PATHS.FAQs)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Specialties"
              to="/app/specialties"
              icon={<TimelineOutlinedIcon />}
              isActive={isPathActive(PATHS.Specialties)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />

            <div className="sidebar__section-title">Charts</div>
            <Item
              title="Analytics"
              to="/app/analytics"
              icon={<BarChartOutlinedIcon />}
              isActive={isPathActive(PATHS.Analytics)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
            <Item
              title="Geography"
              to="/app/geography"
              icon={<MapOutlinedIcon />}
              isActive={isPathActive(PATHS.Geography)}
              onSelect={(t) => setSelected(t)}
              navigate={navigate}
            />
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <div className="sidebar-footer">
            {!isCollapsed && <small>© {new Date().getFullYear()} Medilink</small>}
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SideBar;
