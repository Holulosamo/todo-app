import { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoItems from "./TodoItems";
import TodoListStatus from "./TodoListStatus";
import ItemsContext from "../context/ItemsContext";
import FilterContext from "../context/FilterContext";

export default function TodoContainer() {
  const { setTodo, todo } = useContext(ItemsContext);
  const { FILTER_MAP, filter } = useContext(FilterContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        )
          return;
        setTodo((prevState) =>
          reorder(prevState, source.index, destination.index)
        );
      }}
    >
      <article className="todo-container">
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="todo-list"
            >
              {todo.filter(FILTER_MAP[filter]).map((el, index) => (
                <TodoItems key={el.id} index={index} el={el} />
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        <TodoListStatus/>
      </article>
      <span className="info-text">Drag and drop to reorder list</span>
    </DragDropContext>
  );
}
