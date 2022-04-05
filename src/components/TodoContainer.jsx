import { useState } from "react"
import Checkbox from "./Checkbox"
import iconCross from "../assets/images/icon-cross.svg";

export default function TodoContainer({todo}){
    return (
      <section className="todo-container">
        <ul className="todo-list">
          {todo.map((el) => (
            <li key={el.id} classList="todo-list-item">
              <label>
                <Checkbox></Checkbox>
                <span className="todo-task">{el.task}</span>
              </label>
              <button className="btn-delete">
                  <img src={iconCross} />
              </button>
            </li>
          ))}
        </ul>
        <ul className="todo-status"></ul>
      </section>
    );
}