// src/global/SideBar.js
import React, { useState } from "react";

// v0.x API exports (ProSidebar + parts)
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";

// v0.x requires the library CSS
import "react-pro-sidebar/dist/css/styles.css";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
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
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors?.grey?.[100] || "#fff" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <div className="sidebar__item-text">{title}</div>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overlook");

  return (
    <div
      className="sidebar-wrapper"
      // pass theme colors as CSS variables for SideBar.css usage
      style={{
        "--sidebar-bg": colors?.primary?.[400] || "#1f2937",
        "--sidebar-text": colors?.grey?.[100] || "#f8fafc",
        "--sidebar-hover": colors?.blueAccent?.[400] || "#86f",
        "--sidebar-active": colors?.greenAccent?.[500] || "#4cceac",
      }}
    >
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
            {/* Overlook = default */}
            <Item title="Overlook" to="/app" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <div className="sidebar__section-title">Data</div>
            <Item title="Clinics" to="/app/clinics" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Medicines" to="/app/medicines" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Doctors" to="/app/doctors" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Nurses" to="/app/nurses" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Coupons" to="/app/coupons" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <div className="sidebar__section-title">Pages</div>
            <Item title="FAQs" to="/app/faqs" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Specialties" to="/app/specialties" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <div className="sidebar__section-title">Charts</div>
            <Item title="Analytics" to="/app/analytics" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Geography" to="/app/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
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
