import FilterButton from "./FilterButton";

export default function TodoListCounter({
  FILTER_NAMES,
  filter,
  setFilter,
  itemsLeft,
}) {
  return (
    <ul className="todo-list-counter">
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
      <li className="clear-btn">Clear Completed</li>
    </ul>
  );
}