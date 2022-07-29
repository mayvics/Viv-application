import "./ActivityList.css";
import ActivityListCard from "./ActivityListCard";
import AddActivity from "./AddActivity";

import clickNext from './images/next.png';
import clickPrev from './images/prev.png';

const ActivityList = () => {
  return (
    <div className="act-container">
        <div className="head-content">
                <h1> Activity List</h1>
                <div className="head-btn">
                    <a className="btn-left" href="#"><img src= { clickPrev } alt="" /></a>
                    <a className="btn-right" href="#"><img src= { clickNext } alt="" /></a>
                </div>
            </div>
        <ActivityListCard />
        <AddActivity />
    </div>
  );
};

export default ActivityList;
