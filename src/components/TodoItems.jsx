import iconCross from "../assets/images/icon-cross.svg";
import Checkbox from "./Checkbox";

export default function TodoItems({ el, deleteItems, markAsCompleted, itemsLeft }) {
  const checkedStyle = {
    textDecoration: "line-through",
    color: "hsl(233, 11%, 84%)",
  };

  return(
    <li className="todo-list-item">
    <Checkbox
      id={el.id}
      done={el.done}
      markAsCompleted={markAsCompleted}
      itemsLeft={itemsLeft}
    ></Checkbox>
    <label className="todo-list-label" htmlFor="checkbox">
      <span className="todo-task" style={el.done ? checkedStyle : {}}>
        {el.task}
      </span>
    </label>
    <button className="btn-delete" onClick={() => deleteItems(el.id)}>
      <img src={iconCross} />
    </button>
    </li>
  )
}
