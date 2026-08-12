import Button from "../components/Button/Button";

export default function Login(){
    

    return(
        <form className="flex flex-col items-center bg-(--bg-body) gap-3 m-auto size-70 min-[768px]:size-100 shadow-(--box-shadow)">
                <label htmlFor="email" className="form-label flex column justify-center custom-width">Email: <input type="email" className="reset form-input"></input></label>
                <label htmlFor="password" className="form-label flex column custom-width">Password: <input type="password" className="reset form-input"></input></label>
            <Button text="Login"/>
        </form>
    )
}