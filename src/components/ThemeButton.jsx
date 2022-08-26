import { useContext } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import ThemeContext from "../context/ThemeContext";

export default function ThemeButton(){
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-btn" onClick={handleTheme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt="theme-image"/>
    </button>
  );
}