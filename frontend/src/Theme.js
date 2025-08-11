// theme.js

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// ✅ 1. Define your color palette tokens
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        grey: {
          100: "#f5f5f5",
          200: "#e0e0e0",
          300: "#cfcfcf",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#7e7e7e",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        primary: {
          100: "#e6f4ea", // ✅ very light green for background
          200: "#ccead6",
          300: "#b3dfc3",
          400: "#99d5af",
          500: "#80ca9c", // ✅ main soft green for buttons/active
          600: "#66b088",
          700: "#4d9675",
          800: "#337c61",
          900: "#1a624e",
        },
        background: {
          default: "#fcfcfc",
        },
      }
    : {
        // dark mode colors (optional later)
      }),
});

// ✅ 2. Theme Settings using MUI
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500], // Set main theme color (green)
      },
      background: {
        default: colors.background.default,
      },
      text: {
        primary: colors.grey[900],
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};

// ✅ 3. Context to toggle theme mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// ✅ 4. Hook to use in main App
export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
  }), []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
