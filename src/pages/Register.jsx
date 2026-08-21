import Button from '../components/Button/Button.jsx'
import Input from '../components/Input/Input.jsx'
import { NavLink } from "react-router"

export default function Register() {
    return(
        <form className="form">
            <h2 className="text-(--txt-color) text-3xl">Create account</h2>
            <Input type="text" text="Username" />
            <Input type="email" text="Email"/>
            <Input type="password" text="Password"/>
            <div className="buttons-wrapper">
                <Button text="Register" customStyle="button button-style"/>
                <NavLink to="/login" className="text-(--bright-blue) hover:text-(--txt-color)">Already signed up?</NavLink>
            </div>
        </form>
    )
}
