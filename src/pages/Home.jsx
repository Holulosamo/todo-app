import TodoContainer from "../components/TodoContainer/TodoContainer"
import TodoForm from "../components/TodoForm/TodoForm"

export default function Home(){
    return(
        <article className="article">
            <TodoForm />
            <TodoContainer/>
        </article> 
    )
}
