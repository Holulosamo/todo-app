import { useState } from 'react'
import './App.css'
import ThemeButton from './components/ThemeButton'
import TodoForm from './components/TodoForm'
import TodoContainer from './components/TodoContainer'

function App() {
  const [todo, setTodo] = useState([]);

  const createTodo = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    setTodo([...todo, data]);
  }

  return (
    <section className="section">
      <article className="article">
        <div className="container">
          <h1>TODO</h1>
          <ThemeButton></ThemeButton>
        </div>
        <TodoForm createTodo={createTodo}/>
        <TodoContainer todo={todo} />
      </article>
    </section>
  );
}

export default App
