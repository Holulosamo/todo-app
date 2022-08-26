import { createContext, useState, useEffect } from "react";

const ItemsContext = createContext();

const defaultValues = [
  {
    id: "1",
    task: "Complete online JavaScript course",
    done: true,
  },
  {
    id: "2",
    task: "Jag around the park 3x",
    done: false,
  },
  {
    id: "3",
    task: "10 minutes meditation",
    done: false,
  },
  {
    id: "4",
    task: "Read for 1 hour",
    done: false,
  },
  {
    id: "5",
    task: "Pick up groceries",
    done: false,
  },
  {
    id: "6",
    task: "Complete Todo App on Frontend Mentor",
    done: false,
  },
];

const ItemsProvider = ({children}) => {
    const [todo, setTodo] = useState(() => {
      const savedItems = JSON.parse(localStorage.getItem("savedTodo"));
      return savedItems ? savedItems : defaultValues;
    });

    useEffect(() => {
      localStorage.setItem("savedTodo", JSON.stringify(todo));
    }, [todo]);

    const createTodo = (data) => {
      data.id = `${Math.floor(Math.random() * 1000)}`;
      data.id.toString();
      const todos = [...todo, data];
      setTodo(todos);
    };

    const deleteItems = (id) => {
      const dataDeleted = todo.filter((todo) => todo.id !== id);
      setTodo(dataDeleted);
    };

    const clearAll = () => {
      setTodo([]);
    };

    const markAsCompleted = (id) => {
      setTodo((prevState) =>
        prevState.map((el) =>
          el.id === id
            ? {
                ...el,
                done: true,
              }
            : el
        )
      );
    };

    const itemsLeft = () => {
      const initialValue = todo.length;
      const taskCompleted = todo.reduce(
        (acc, item) => (item.done ? acc - 1 : acc),
        initialValue
      );
      return taskCompleted;
    };

    const ItemsData = {
        setTodo,
        todo,
        createTodo,
        deleteItems,
        clearAll,
        markAsCompleted,
        itemsLeft
    }

    return (
      <ItemsContext.Provider value={ItemsData}>
        {children}
      </ItemsContext.Provider>
    );
}

export { ItemsProvider };
export default ItemsContext;