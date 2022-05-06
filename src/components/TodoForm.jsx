import { useState } from "react";

const initialText = 'Create a new todo...';
const initialTodo = {
  id: null,
  task: '',
  done: false
}

export default function TodoForm({createTodo, theme}){
  const [text, setText] = useState(initialText);
  const [focus, setFocus] = useState(false);
  const [todoList, setTodoList] = useState(initialTodo);
  const styles = {
    color: theme === 'light' ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
    fontWeight: '500',
    fontSize: '1rem'
  };

  const handleFocus = () => {
    setText('Currently typing');
    setFocus(true);
  }

  const handleBlur = () => {
    setText(initialText);
    setFocus(false); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todoList.task) return;
    createTodo(todoList);
    setTodoList(initialTodo);
  }

  const handleChange = (e) => {
    setTodoList({
      ...todoList,
      task: e.target.value,
    });
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="todo-label">
        <div className="form-circle"></div>
        <span style={focus ? styles : {}} className="form-span">{text}</span>
        <input type="text" value={todoList.task} className="form-input-text" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}/>
      </label>
    </form>
  );    
}