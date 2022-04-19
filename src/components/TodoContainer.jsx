import { useState } from "react"
import TodoItems from "./TodoItems";
import TodoListCounter from "./TodoListCounter";

export default function TodoContainer({todo, deleteItems, markAsCompleted, itemsLeft}){
    const styles = {
      textAlign: "center",
      color: "hsl(235, 21%, 11%)",
      fontWeight: "500",
      fontSize: "1rem",
    };

    return (
      <section className="todo-container">
        <ul className="todo-list">
          {todo.length === 0 ? (
            <li>
              <p style={styles}>No items</p>
            </li>
          ) : (
            todo.map((el) => (
              <TodoItems
                key={el.id}
                el={el}
                deleteItems={deleteItems}
                markAsCompleted={markAsCompleted}
                itemsLeft={itemsLeft}
              />
            ))
          )}
          <TodoListCounter itemsLeft={itemsLeft}/>
        </ul>
        <ul className="todo-status"></ul>
      </section>
    );
}