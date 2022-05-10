import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItems from "./TodoItems";
import TodoListStatus from "./TodoListStatus";

export default function TodoContainer({
  FILTER_MAP,
  FILTER_NAMES,
  filter,
  setFilter,
  setTodo,
  todo, 
  deleteItems, 
  markAsCompleted, 
  itemsLeft,
  theme,
  clearAll
}){
    const styles = {
      textAlign: "center",
      color: theme === "light" ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
      fontWeight: "500",
      fontSize: "1rem",
    };

    const reorder = (list, startIndex, endIndex) => {
      const result = [...list];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    }

    return (
      <DragDropContext onDragEnd={(result) => {      
        const { source, destination } = result;
        if (!destination) return;
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        )return;
        setTodo((prevState) => reorder(prevState, source.index, destination.index));
      }}>
        <article className="todo-container">
          <Droppable droppableId="tasks">
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="todo-list"
              >
                {todo.filter(FILTER_MAP[filter]).map((el, index) => (
                  <TodoItems
                    key={el.id}
                    index={index}
                    el={el}
                    deleteItems={deleteItems}
                    markAsCompleted={markAsCompleted}
                    itemsLeft={itemsLeft}
                    theme={theme}
                  />
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
          <TodoListStatus
            FILTER_NAMES={FILTER_NAMES}
            filter={filter}
            setFilter={setFilter}
            itemsLeft={itemsLeft}
            clearAll={clearAll}
          />
        </article>
        <span className="info-text">Drag and drop to reorder list</span>
      </DragDropContext>
    );
}