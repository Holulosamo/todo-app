export default function Input({type, text, name, register}){
    return(
        <label  htmlFor={name} 
                className="form-label flex items-center custom-width">
            {text}:
            <input 
            id={name}
            type={type}
            className="reset form-input"
            {...register ? {...register(name)} : {}}
            />
        </label>
    )
}