import { useState } from "react";

export default function Checkbox({el, dataID, done, markAsCompleted, itemsLeft}){
    const [checked, setChecked] = useState(done)

    const handleClick = () => {
        markAsCompleted(dataID);
        itemsLeft();
    }

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
