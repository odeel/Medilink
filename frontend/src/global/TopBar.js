import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  LightModeOutlined as LightIcon,
  DarkModeOutlined as DarkIcon,
  NotificationsOutlined as NotificationsIcon,
  SettingsOutlined as SettingsIcon,
  PersonOutlined as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { ColorModeContext, tokens } from "../Theme";
import "../styles/Topbar.css"; // 

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="topbar">
      {/* SEARCH BAR */}
      <div
        className="topbar__search-container"
        style={{ backgroundColor: colors.primary[400] }}
      >
        <input
          type="text"
          className="topbar__search-input"
          placeholder="Search..."
        />
        <button className="topbar__icon-btn" aria-label="search">
          <SearchIcon fontSize="small" />
        </button>
      </div>

      {/* ACTION ICONS */}
      <div className="topbar__icons">
        <button
          className="topbar__icon-btn"
          onClick={colorMode.toggleColorMode}
          aria-label="toggle theme"
        >
          {theme.palette.mode === "dark" ? (
            <DarkIcon fontSize="small" />
          ) : (
            <LightIcon fontSize="small" />
          )}
        </button>

        <button className="topbar__icon-btn" aria-label="notifications">
          <NotificationsIcon fontSize="small" />
        </button>

        <button className="topbar__icon-btn" aria-label="settings">
          <SettingsIcon fontSize="small" />
        </button>

        <button className="topbar__icon-btn" aria-label="profile">
          <PersonIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
