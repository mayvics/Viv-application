import "./Sidebar.css";
import Profile from "./Profile";
import Summary from "./Summary";
import Tips from "./Tips";
import Weeklystat from "./Weeklystat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <div class="hidden"><Weeklystat /></div>
      <Tips />
      <div class="hidden"><Summary /></div>
    </div>
  );
};

export default Sidebar;
