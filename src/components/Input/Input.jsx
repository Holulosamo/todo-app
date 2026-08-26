import { useFormContext } from "react-hook-form"

export default function Input({type, text, useFormRegister}){
    const {register} = useFormContext();
    
    return(
        <label  htmlFor={type} 
                className="form-label flex items-center custom-width">
            {text}:
            <input type={type}
            className="reset form-input"
            {...useFormRegister ? {...register(useFormRegister)} : null}
            />
        </label>
    )
}