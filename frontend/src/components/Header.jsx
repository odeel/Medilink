// src/components/Header/Header.jsx
import React from "react";
import { useTheme } from "@mui/material/styles"; // only using theme hook
import { tokens } from "../../theme";
import "./Header.css";

const Header = ({ title, subtitle }) => {
  // read MUI theme and tokens
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // expose theme colors to CSS via variables (keeps CSS in charge of appearance)
  const cssVars = {
    "--header-title-color": colors.grey[100],
    "--header-subtitle-color": colors.greenAccent[400],
    "--header-margin-bottom": "30px",
  };

  return (
    <div className="header" style={cssVars}>
      <h2 className="header__title">{title}</h2>
      <p className="header__subtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
