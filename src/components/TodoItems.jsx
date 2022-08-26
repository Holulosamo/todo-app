import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import iconCross from "../assets/images/icon-cross.svg";
import ThemeContext from "../context/ThemeContext";
import ItemsContext from "../context/ItemsContext";
import Checkbox from "./Checkbox";

export default function TodoItems({ el, index }) {
  const {deleteItems} = useContext(ItemsContext);
  const { theme } = useContext(ThemeContext);

  const checkedStyle = {
    textDecoration: "line-through",
    color: theme === "light" ? "hsl(234, 39%, 85%)" : "hsl(233, 14%, 35%)",
  };

  return (
    <Draggable key={el.id} draggableId={el.id} index={index}>
      {(draggableProvided) => (
        <li
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="todo-list-item"
        >
          <Checkbox
            el={el}
            dataID={el.id}
            done={el.done}
          ></Checkbox>
          <label className="todo-list-label" htmlFor={el.id}>
            <span className="todo-task" style={el.done ? checkedStyle : {}}>
              {el.task}
            </span>
          </label>
          <button className="btn-delete" onClick={() => deleteItems(el.id)}>
            <img src={iconCross} alt="delete-cross"/>
          </button>
        </li>
      )}
    </Draggable>
    
  );
}
