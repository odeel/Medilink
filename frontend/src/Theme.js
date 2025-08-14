// src/Theme.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

/**
 * tokens(mode)
 * Returns a full set of color groups used across the app.
 * Each group has shades 100..900 so components can read colors[group][300], [400], [600], etc.
 */
export const tokens = (mode) => {
  if (mode === "dark") {
    return {
      // dark mode tokens
      grey: {
        100: "#d6d6d6",
        200: "#bfbfbf",
        300: "#9f9f9f",
        400: "#7f7f7f",
        500: "#606060",
        600: "#4a4a4a",
        700: "#373737",
        800: "#252525",
        900: "#121212",
      },
      primary: {
        100: "#d8e8de",
        200: "#b1d1bd",
        300: "#89b99c",
        400: "#628f75",
        500: "#3b654e",
        600: "#2f4f3f",
        700: "#223a30",
        800: "#16261f",
        900: "#0b130f",
      },
      greenAccent: {
        100: "#eaf6ed",
        200: "#d5efe1",
        300: "#bfe7d3",
        400: "#a9dfc6",
        500: "#93d7b8",
        600: "#75b995",
        700: "#578a71",
        800: "#39574d",
        900: "#1b2b28",
      },
      blueAccent: {
        100: "#e8f1ff",
        200: "#d1e3ff",
        300: "#b9d5ff",
        400: "#9fbfff",
        500: "#87a8ff",
        600: "#6b86cc",
        700: "#4d6099",
        800: "#313a66",
        900: "#161c33",
      },
      redAccent: {
        100: "#ffeaea",
        200: "#ffd5d5",
        300: "#ffbfbf",
        400: "#ff9f9f",
        500: "#ff7f7f",
        600: "#cc6161",
        700: "#994949",
        800: "#663030",
        900: "#331818",
      },
      background: {
        default: "#0f1614",
      },
    };
  } else {
    // light mode tokens (nacre white + soft sage / light-eye-resting greens)
    return {
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
        100: "#FBFAF6", // nacre / very light warm white
        200: "#F5F4EE",
        300: "#EFEDE6",
        400: "#E8E7DE",
        500: "#A8D3A1", // main soft sage / light green (used as primary)
        600: "#8FC08A",
        700: "#74A96F",
        800: "#5C8556",
        900: "#3C5D3B",
      },
      greenAccent: {
        100: "#F7FBF7",
        200: "#EEF7EE",
        300: "#E6F0E6",
        400: "#DCE9DC",
        500: "#CFE0CF",
        600: "#A8D3A1",
        700: "#8FC08A",
        800: "#6F9A6D",
        900: "#476044",
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
      background: {
        default: "#FBFAF6", // nacre white background
      },
    };
  }
};

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
