import { useContext } from "react";
import FilterAllButton from "./FilterAllButton";
import FilterButton from "./FilterButton";
import ItemsContext from "../context/ItemsContext";
import FilterContext from "../context/FilterContext";

export default function TodoListStatus() {
  const { itemsLeft, clearAll } = useContext(ItemsContext);
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
      <FilterAllButton clearAll={clearAll}></FilterAllButton>
    </ul>
  );
}
