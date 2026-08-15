import { useContext } from "react";
import ClearBtn from "../ClearBtn/ClearBtn.jsx";
import FilterButton from "../FilterButton/FilterButton.jsx";
import {ItemsContext} from "../../context/ItemsContext.jsx";
import FilterContext from "../../context/FilterContext.jsx";

export default function ListStatus() {
  const { itemsLeft, deleteCompletedTasks } = useContext(ItemsContext);
  const { FILTER_NAMES, filter, setFilter } = useContext(FilterContext)

  return (
    <ul className="todo-list-status">
      <li>{itemsLeft()} items left</li>
      <ul className="todo-status">
        {FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </ul>
      <ClearBtn deleteCompletedTasks={deleteCompletedTasks} />
    </ul>
  );
}
