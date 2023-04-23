import React from "react";
import ThemeContext from "../utils/themeContext";


function ThemeContextProvider({ children }) {
    const [darkMode, setDarkMode] = React.useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  
  export default ThemeContextProvider;