import Button from '../Button/Button.jsx';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';

export default function Header() {
    return(
        <header className="header flex items-center justify-around">
          <h1>TODO</h1>
          <ThemeButton/>
          <div>
            <Button name="Login"/>
            <Button name="Sign Up"/>
          </div>
        </header>
    );
}