export default function TodoListCounter({itemsLeft}){
    return (
      <li className="todo-list-counter">
        <span>{itemsLeft()} items left</span>
        <span>Clear Completed</span>
      </li>
    );
}