import "./Page1.css";
import ActivityList from "../Page1/Activity-list/ActivityList";
import Sidebar from "../Page1/Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const Page1 = () => {
  return (
    <div className="Page1">
      <div className="body">
        <Sidebar />
        <ActivityList />
      </div>
    </div>
  );
};

export default Page1;
