export default function Button({text, customStyle, formProperty}){
    return(
        <button className={`cursor-pointer ${customStyle}`} form={formProperty}>
            {text}
        </button>
    )
}