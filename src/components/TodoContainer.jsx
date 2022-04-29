import { useState } from "react"
import TodoItems from "./TodoItems";
import TodoListCounter from "./TodoListCounter";

export default function TodoContainer({
  FILTER_MAP,
  FILTER_NAMES,
  filter,
  setFilter,
  todo, 
  deleteItems, 
  markAsCompleted, 
  itemsLeft
}){
    const styles = {
      textAlign: "center",
      color: "hsl(235, 21%, 11%)",
      fontWeight: "500",
      fontSize: "1rem",
    };

    return (
      <article className="todo-container">
        <ul className="todo-list">
          {todo.length === 0 ? (
            <li>
              <p style={styles}>No items</p>
            </li>
          ) : (
            todo
              .filter(FILTER_MAP[filter])
              .map((el) => (
                <TodoItems
                  key={el.id}
                  el={el}
                  deleteItems={deleteItems}
                  markAsCompleted={markAsCompleted}
                  itemsLeft={itemsLeft}
                />
              ))
          )}
          <TodoListCounter
            FILTER_NAMES={FILTER_NAMES}
            filter={filter}
            setFilter={setFilter}
            itemsLeft={itemsLeft}
          />
        </ul>
      </article>
    );
}