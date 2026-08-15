import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function Login(){

    return(
        <form className="form">
            <h2 className="text-(--txt-color) text-3xl">Login</h2>
            <Input type="email" text="Email"/>
            <Input type="password" text="Password"/>
            <div className="w-4/5 pt-3.5">
                <Button text="Login" customStyle="button button-style"/>
                <Button text="Register" customStyle="button button-style ml-6"/>
            </div>
        </form>
    )
}