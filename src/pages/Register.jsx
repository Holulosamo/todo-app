import { useFormContext, useForm } from 'react-hook-form';
import Button from '../components/Button/Button.jsx'
import Input from '../components/Input/Input.jsx'
import { NavLink } from "react-router"
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import usePost from '../hooks/usePost.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/authSchema.jsx';

export default function Register() {
    const { handleSubmit, reset, control, register, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const {postData} = usePost();

    const onSubmit = async (data) => {
       await postData('http://localhost:3001/api/auth/register', data);
       reset();
    }

    const onError = (err, event) => {
        console.log(err)
    }

    return(
        <form className="form register-form" onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="text-(--txt-color) text-3xl">Create account</h2>
            <Input type="text" text="Username" name="register-username" register={register}/>
            {errors?.["register-username"] && <ErrorMessage message={errors?.["register-username"].message}/>}
            <Input type="email" text="Email" name="register-email" register={register}/>
            {errors?.["register-email"] && <ErrorMessage message={errors?.["register-email"].message}/>}
            <Input type="password" text="Password" name="register-password" register={register}/>
            {errors?.["register-password"] && <ErrorMessage message={errors?.["register-password"].message}/>}
            <div className="buttons-wrapper">
                <Button text="Register" customStyle="button button-style" formProperty="register-form"/>
                <NavLink to="../login" className="text-(--bright-blue) hover:text-(--txt-color)">Already signed up?</NavLink>
            </div>
        </form>
    )
}
