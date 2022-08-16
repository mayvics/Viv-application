import "./ActivityList.css";
import ActivityListCard from "./ActivityListCard";
import AddActivity from "./AddActivity";
import { useState, useEffect } from "react";
import axios from "axios";


const ActivityList = () => {
  const [activity, setActivity] = useState([]);

  //Fetch data from database to show at card
  const fetchData = () => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      setActivity(res.data)
    })
    .catch((err) => {
      alert(err)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="act-container">
        <div className="head-content">
          <h1> Activity List</h1>
        </div>
        <ActivityListCard data= {activity}/>
        <AddActivity />
    </div>
  );
};

export default ActivityList;
