export default function({name, filter, setFilter}){
    const handleChange = (e) => {
      setFilter(e.target.name);
    };  

    return(
    <li className="todo-status-item">
      <input
        className="radio-btn"
        type="radio"
        id={name}
        name={name}
        checked={name === filter}
        onChange={handleChange}
      />
      <label className="label-text" htmlFor={name}>
        {name}
      </label>
    </li>
    );
}