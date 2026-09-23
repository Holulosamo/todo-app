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
        reValidateMode: "onChange"
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
        <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="text-(--txt-color) text-3xl">Create account</h2>
            <Input type="text" text="Username" name={"registerUsername"} register={register}/>
            {errors?.registerUsername && <ErrorMessage message={errors?.registerUsername.message}/>}
            <Input type="email" text="Email" name="registerEmail" register={register}/>
            {errors?.registerEmail && <ErrorMessage message={errors?.registerEmail.message}/>}
            <Input type="password" text="Password" name="registerPassword" register={register}/>
            {errors?.registerPassword && <ErrorMessage message={errors?.registerPassword.message}/>}
            <div className="buttons-wrapper">
                <Button text="Register" customStyle="button button-style"/>
                <NavLink to="../login" className="text-(--bright-blue) hover:text-(--txt-color)">Already signed up?</NavLink>
            </div>
        </form>
    )
}
