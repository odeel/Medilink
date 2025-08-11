// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme"; // adjust path if your theme is elsewhere

// icons (MUI) — allowed
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

import "./Sidebar.css"; // external CSS file

// Small presentational wrapper used for each item (still uses MenuItem from pro-sidebar)
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <div className="sidebar__item-text">{title}</div>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // 1) theme + color tokens (we only use these to set CSS variables)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // 2) component state
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // 3) Set CSS variables on the wrapper div so CSS file can use them.
  //    React allows custom properties in style object (must be strings like '--name').
  const cssVars = {
    "--sidebar-bg": colors.primary[400],
    "--sidebar-text": colors.grey[100],
    "--sidebar-hover": colors.blueAccent ? colors.blueAccent[400] : colors.greenAccent[400],
    "--sidebar-active": colors.greenAccent[500],
  };

  return (
    // wrapper passes theme values into CSS via custom properties
    <div className="sidebar" style={cssVars}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Header / Toggle row */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "var(--sidebar-text)",
            }}
          >
            {!isCollapsed && (
              <div className="sidebar__header">
                <div className="sidebar__header-title">ADMINIS</div>
                <button
                  className="sidebar__toggle-btn"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label="Toggle sidebar"
                >
                  <MenuOutlinedIcon fontSize="small" />
                </button>
              </div>
            )}
          </MenuItem>

          {/* Profile block (only show when expanded) */}
          {!isCollapsed && (
            <div className="sidebar__profile">
              <div className="sidebar__profile-avatar-wrap">
                {/* path relative to build — adjust if your assets live elsewhere */}
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

          {/* Menu items */}
          <div className="sidebar__menu-block" style={{ paddingLeft: isCollapsed ? undefined : "10%" }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="sidebar__section-title">Data</div>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="sidebar__section-title">Pages</div>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="sidebar__section-title">Charts</div>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
