import { useState } from "react";

const initialText = 'Create a new todo...'

export default function TodoForm(){
  const [text, setText] = useState(initialText);
  const [focus, setFocus] = useState(false);
  const styles = {
    color: "hsl(235, 21%, 11%)",
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

  return (
    <form className="todo-form">
      <label className="todo-label">
        <div className="form-circle"></div>
        <span style={focus ? styles : {}} className="form-span">{text}</span>
        <input type="text" className="form-input-text" onFocus={handleFocus} onBlur={handleBlur} />
      </label>
    </form>
  );    
}