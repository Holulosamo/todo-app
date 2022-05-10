import { Draggable } from "react-beautiful-dnd";
import iconCross from "../assets/images/icon-cross.svg";
import Checkbox from "./Checkbox";

export default function TodoItems({ el, index, deleteItems, markAsCompleted, itemsLeft, theme,  }) {
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
            markAsCompleted={markAsCompleted}
            itemsLeft={itemsLeft}
          ></Checkbox>
          <label className="todo-list-label" htmlFor={el.id}>
            <span className="todo-task" style={el.done ? checkedStyle : {}}>
              {el.task}
            </span>
          </label>
          <button className="btn-delete" onClick={() => deleteItems(el.id)}>
            <img src={iconCross} alt="theme-image"/>
          </button>
        </li>
      )}
    </Draggable>
    
  );
}
