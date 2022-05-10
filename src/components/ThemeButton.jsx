import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

export default function ThemeButton({theme, setTheme}){
  const handleClick = () => {
    const themeModifier = theme === 'light' ? 'dark' : 'light';
    setTheme(themeModifier)
  }

  return (
    <button className="theme-btn" onClick={handleClick}>
      <img src={theme === 'light' ? moonIcon : sunIcon} />
    </button>
  );
}