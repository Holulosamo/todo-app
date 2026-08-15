export default function Button({text, customStyle}){
    return(
        <button className={`cursor-pointer ${customStyle}`}>
            {text}
        </button>
    )
}