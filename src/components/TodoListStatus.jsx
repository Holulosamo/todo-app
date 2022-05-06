import FilterButton from "./FilterButton";

export default function TodoListStatus({
  FILTER_NAMES,
  filter,
  setFilter,
  itemsLeft,
}) {
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
      <li className="clear-btn">Clear Completed</li>
    </ul>
  );
}