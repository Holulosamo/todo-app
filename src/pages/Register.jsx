import { useFormContext, useForm } from 'react-hook-form';
import Button from '../components/Button/Button.jsx'
import Input from '../components/Input/Input.jsx'
import { NavLink } from "react-router"
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import usePost from '../hooks/usePost.jsx';

export default function Register() {
    const { handleSubmit, reset, control, formState: {errors}} = useFormContext();

    const {postData} = usePost();

    const onSubmit = async (data) => {
       await postData('/', data);
       reset();
    }

    const onError = (err, event) => {

    }

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="text-(--txt-color) text-3xl">Create account</h2>
            <Input type="text" text="Username" useFormRegister="username"/>
            {errors?.username && <ErrorMessage message={errors?.username.message}/>}
            <Input type="email" text="Email" useFormRegister="email"/>
            {errors?.email && <ErrorMessage message={errors?.email.message}/>}
            <Input type="password" text="Password" useFormRegister="password" />
            {errors?.password && <ErrorMessage message={errors?.password.message}/>}
            <div className="buttons-wrapper">
                <Button text="Register" customStyle="button button-style"/>
                <NavLink to="../login" className="text-(--bright-blue) hover:text-(--txt-color)">Already signed up?</NavLink>
            </div>
        </form>
    )
}
