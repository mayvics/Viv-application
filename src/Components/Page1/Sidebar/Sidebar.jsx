import "./Sidebar.css";
import Profile from './Profile'
import Summary from "./Summary";

 const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <Summary />
    </div>
  );
};

export default Sidebar;
