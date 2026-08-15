export default function Input({type, value, text}){
    return(
        <label  htmlFor={type} 
                className="form-label flex items-center custom-width">
            {text}:
            <input type={type}
            value={value}
            className="reset form-input"/>
        </label>
    )
}