import Button from '../Button/Button.jsx';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';

export default function Header() {
    return(
        <header className="header flex items-center justify-around">
          <h1>TODO</h1>
          <ThemeButton/>
          <div className='flex gap-2'>
            <Button text="Login"/>
            <Button text="Sign Up"/>
          </div>
        </header>
    );
}