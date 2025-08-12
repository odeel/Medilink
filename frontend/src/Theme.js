// src/Theme.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

/**
 * tokens(mode)
 * Returns a full set of color groups used across the app.
 * Each group has shades 100..900 so components can read colors[group][300], [400], [600], etc.
 */
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // dark mode tokens
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#dff5ea",
          200: "#bff0d6",
          300: "#9feac2",
          400: "#7fe3ae",
          500: "#5fdc9a",
          600: "#4fb07d",
          700: "#3f845f",
          800: "#2f5842",
          900: "#1f2c21",
        },
        greenAccent: {
          100: "#e6fbf5",
          200: "#ccf7eb",
          300: "#b2f2e2",
          400: "#98efd8",
          500: "#7feacd",
          600: "#65cfa5",
          700: "#4ba77d",
          800: "#32765b",
          900: "#1a3b2d",
        },
        blueAccent: {
          100: "#e6f0ff",
          200: "#cce1ff",
          300: "#b3d1ff",
          400: "#99c2ff",
          500: "#80b3ff",
          600: "#6690cc",
          700: "#4d6d99",
          800: "#334966",
          900: "#1a2533",
        },
        redAccent: {
          100: "#ffe6e6",
          200: "#ffcfcf",
          300: "#ffb3b3",
          400: "#ff9999",
          500: "#ff7f7f",
          600: "#cc6666",
          700: "#994d4d",
          800: "#663333",
          900: "#331919",
        },
      }
    : {
        // light mode tokens
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a4ab",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#eaf8ef", // very light green background-ish
          200: "#d5f1df",
          300: "#c1e9cf",
          400: "#abe2bf",
          500: "#95dbaf", // main soft green
          600: "#78b88f",
          700: "#5b966f",
          800: "#3e754f",
          900: "#20532f",
        },
        greenAccent: {
          100: "#f0fbf6",
          200: "#e1f7ee",
          300: "#cfefe0",
          400: "#bde7d2",
          500: "#aadfbf",
          600: "#86c89f",
          700: "#62b07f",
          800: "#3e8a5f",
          900: "#1f4d30",
        },
        blueAccent: {
          100: "#f0f4ff",
          200: "#e1e9ff",
          300: "#cfd8ff",
          400: "#bfc7ff",
          500: "#b0b6ff",
          600: "#8b89cc",
          700: "#656699",
          800: "#404266",
          900: "#1a2033",
        },
        redAccent: {
          100: "#fff0f0",
          200: "#ffe1e1",
          300: "#ffd1d1",
          400: "#ffc2c2",
          500: "#ffb3b3",
          600: "#cc8f8f",
          700: "#996b6b",
          800: "#664646",
          900: "#332323",
        },
      }),
});

/**
 * themeSettings(mode)
 * Build MUI theme using our tokens. Components rely on palette.mode and the token groups.
 */
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.background?.default || "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "Segoe UI", "sans-serif"].join(","),
      fontSize: 14,
      h1: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 40 },
      h2: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 32 },
      h3: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 24 },
      h4: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 20 },
      h5: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 16 },
      h6: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","), fontSize: 14 },
    },
  };
};

/**
 * Color mode context + useMode hook
 * Keeps your previous API so nothing else must change.
 */
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
