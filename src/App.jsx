import { useEffect, useState } from 'react';
import './App.css';
import ThemeButton from './components/ThemeButton';
import TodoForm from './components/TodoForm';
import TodoContainer from './components/TodoContainer';

const defaultValues = [
  {
    id: "1",
    task: "Complete online JavaScript course",
    done: true,
  },
  {
    id: "2",
    task: "Jag around the park 3x",
    done: false,
  },
  {
    id: "3",
    task: "10 minutes meditation",
    done: false,
  },
  {
    id: "4",
    task: "Read for 1 hour",
    done: false,
  },
  {
    id: "5",
    task: "Pick up groceries",
    done: false,
  },
  {
    id: "6",
    task: "Complete Todo App on Frontend Mentor",
    done: false,
  }
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.done,
  Completed: (task) => task.done,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [todo, setTodo] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedTodo"));
    return savedItems ? savedItems : defaultValues;
  });
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("savedTheme");
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem("savedTodo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
      localStorage.setItem("savedTheme", theme);
  }, [theme])
  

  const createTodo = (data) => {
    data.id = `${Math.floor(Math.random() * 1000)}`;
    data.id.toString();
    const todos = [...todo, data]
    setTodo(todos);
  }

  const deleteItems = (id) => {
    const dataDeleted = todo.filter((todo) => todo.id !== id);
    setTodo(dataDeleted);
  }

  const clearAll = () => {
    setTodo([]);
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
    <section className='section' data-theme={theme}>
      <article className="article">
        <div className="container">
          <h1>TODO</h1>
          <ThemeButton theme={theme} setTheme={setTheme}></ThemeButton>
        </div>
        <TodoForm createTodo={createTodo} theme={theme}/>
        <TodoContainer 
          FILTER_MAP={FILTER_MAP}
          FILTER_NAMES={FILTER_NAMES}
          filter={filter}
          setFilter={setFilter}
          setTodo={setTodo}
          todo={todo} 
          deleteItems={deleteItems} 
          markAsCompleted={markAsCompleted} 
          itemsLeft={itemsLeft}
          theme={theme}
          clearAll={clearAll}
        />
      </article>
    </section>
  );
}

export default App
