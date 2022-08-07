import { Link } from "react-router-dom";
import "./AddActivity.css";


const AddActivity = () => {
  return (
    <div className="AddAct">
      <Link to="/create">
      <button>
        <h1>Add Activity</h1>
      </button>
      </Link>
    </div>
  );
};

export default AddActivity;