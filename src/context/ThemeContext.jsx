import { createContext, useState, useEffect } from "react";
import App from "../App";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem("savedTheme");
      return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
      localStorage.setItem("savedTheme", theme);
    }, [theme])

    const handleTheme = () => {
      const themeModifier = theme === "light" ? "dark" : "light";
      setTheme(themeModifier);
    };

    const themeData = {
        theme,
        handleTheme
    }

    return (
      <ThemeContext.Provider value={themeData}>
        {children}
      </ThemeContext.Provider>
    );
}

export { ThemeProvider };
export default ThemeContext;
  
