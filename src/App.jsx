import { useEffect, useState } from 'react'
import './App.css'
import ThemeButton from './components/ThemeButton'
import TodoForm from './components/TodoForm'
import TodoContainer from './components/TodoContainer'

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.done,
  Completed: (task) => task.done,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);



function App() {
  const savedItems = JSON.parse(localStorage.getItem("savedTodo"));
  const [todo, setTodo] = useState(() => {
    return savedItems ? savedItems : []
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("savedTodo", JSON.stringify(todo));
  }, [todo]);

  const createTodo = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    const todos = [...todo, data]
    setTodo(todos);
  }

  const deleteItems = (id) => {
    const dataDeleted = todo.filter((todo) => todo.id !== id);
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
        <TodoContainer 
          FILTER_MAP={FILTER_MAP}
          FILTER_NAMES={FILTER_NAMES}
          filter={filter}
          setFilter={setFilter}
          todo={todo} 
          deleteItems={deleteItems} 
          markAsCompleted={markAsCompleted} 
          itemsLeft={itemsLeft}
        />
      </article>
    </section>
  );
}

export default App
