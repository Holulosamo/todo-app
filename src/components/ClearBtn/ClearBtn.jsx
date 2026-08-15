export default function ClearBtn({deleteCompletedTasks}){
    return (
      <button className="clear-btn" onClick={() => deleteCompletedTasks()}>
        Clear Completed
      </button>
    );
}