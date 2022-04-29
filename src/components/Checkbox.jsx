import { useState } from "react";

export default function Checkbox({dataID, done, markAsCompleted, itemsLeft}){
    const [checked, setChecked] = useState(done)

    const handleClick = () => {
        markAsCompleted(dataID);
        itemsLeft();
    }

    return (
      <>
        <input
          type="checkbox"
          disabled={done}
          id="task"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="todo-checkbox"
          onClick={handleClick}
        />
      </>
    );
}
