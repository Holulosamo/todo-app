import { useEffect, useState } from 'react'
import './App.css'
import ThemeButton from './components/ThemeButton'
import TodoForm from './components/TodoForm'
import TodoContainer from './components/TodoContainer'

function App() {
  const [todo, setTodo] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedTodo'));
    return savedItems ? savedItems : []
  });

  useEffect(() => {
    localStorage.setItem("savedTodo", JSON.stringify(todo));
  }, [todo]);

  const createTodo = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    setTodo([...todo, data]);
  }

  const deleteItems = (id) => {
    const dataDeleted = todo.filter(todo => todo.id !== id);
    setTodo(dataDeleted);
  }

  const markAsCompleted = (id) => {
    setTodo(prevState => prevState.map(el => el.id === id ? {
      ...el,
      done: true
    } : el))
  }

  const itemsLeft = () => {
    const initialValue = todo.length;
    const taskCompleted = todo.reduce((acc, item) => item.done ? acc - 1 : acc, initialValue); 
    return taskCompleted;
  }

  return (
    <section className="section">
      <article className="article">
        <div className="container">
          <h1>TODO</h1>
          <ThemeButton></ThemeButton>
        </div>
        <TodoForm createTodo={createTodo}/>
        <TodoContainer todo={todo} deleteItems={deleteItems} markAsCompleted={markAsCompleted} itemsLeft={itemsLeft}/>
      </article>
    </section>
  );
}

export default App
