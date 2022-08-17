import "./ActivityList.css";
import ActivityListCard from "./ActivityListCard";
import AddActivity from "./AddActivity";

import axios from "axios";
import { useState, useEffect } from "react";


const ActivityList = () => {


  return (
    <div className="act-container">
        <div className="head-content">
                <h1> Activity List</h1>
        </div>
        <ActivityListCard data={activity} />
        <AddActivity />
    </div>
  );
};

export default ActivityList;
