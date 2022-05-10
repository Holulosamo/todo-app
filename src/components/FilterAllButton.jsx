export default function({clearAll}){
    return (
      <button className="clear-btn" onClick={() => clearAll()}>
        Clear Completed
      </button>
    );
}