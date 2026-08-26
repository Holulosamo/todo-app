import { NavLink } from "react-router";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useFormContext } from "react-hook-form";

export default function Login(){
    const { register, handleSubmit, control, formState: {errors}, setValue } = useFormContext();

    return(
        <form className="form">
            <h2 className="text-(--txt-color) text-3xl">Login</h2>
            <Input type="email" text="Email"/>
            <Input type="password" text="Password"/>
            <div className="buttons-wrapper">
                <Button text="Login" customStyle="button button-style"/>
                <NavLink to="/register" className="text-(--bright-blue) hover:text-(--txt-color)">Create an account</NavLink>
            </div>
        </form>
    )
}