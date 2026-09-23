import { NavLink } from "react-router";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useForm, useFormContext } from "react-hook-form";
import usePost from "../hooks/usePost.jsx";

export default function Login(){
    const { handleSubmit, reset, register} = useForm();
    const {postData} = usePost();

    const onSubmit = async (data) => {
        await postData('http://localhost:3001/api/auth/login', data);
        console.log(data);
        reset();
    }

    return(
        <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-(--txt-color) text-3xl">Login</h2>
            <Input type="email" text="Email" name="login-email" register={register}/>
            <Input type="password" text="Password" name="login-password" register={register}/>
            <div className="buttons-wrapper">
                <Button text="Login" customStyle="button button-style" form="login-form"/>
                <NavLink to="../register" className="text-(--bright-blue) hover:text-(--txt-color)">Create an account</NavLink>
            </div>
        </form>
    )
}