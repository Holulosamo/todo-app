import { useContext } from "react";
import { useState } from "react";
import ItemsContext from "../context/ItemsContext";

export default function Checkbox({ el, dataID, done }) {
  const { markAsCompleted, itemsLeft } = useContext(ItemsContext);

  const [checked, setChecked] = useState(done);

  const handleClick = () => {
    markAsCompleted(dataID);
    itemsLeft();
  };

  return (
    <>
      <input
        id={el.id}
        type="checkbox"
        disabled={done}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="todo-checkbox"
        onClick={handleClick}
      />
    </>
  );
}
