export default function Checkbox({id, done, markAsCompleted, itemsLeft}){
    const handleClick = () => {
        markAsCompleted(id);
        itemsLeft();
    }

    return(
    <>
        <input type="checkbox" disabled={done} checked={done} id="checkbox" className="todo-checkbox" onClick={handleClick}/>
    </>
    )
}
