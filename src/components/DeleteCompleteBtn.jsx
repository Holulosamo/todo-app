export default function({deleteCompletedTasks}){
    return (
      <button className="clear-btn" onClick={() => deleteCompletedTasks()}>
        Clear Completed
      </button>
    );
}