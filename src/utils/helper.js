import React from "react";
import ThemeContext from "./themeContext";

export function useTheme() {
    const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
    return { darkMode, toggleDarkMode };
  }