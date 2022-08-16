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
    .get(`http://localhost:8080/activities`)
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
          <h1 className="actList"> Activity List</h1>
          <AddActivity />
        </div>
        <ActivityListCard data= {activity}/>
    </div>
  );
};

export default ActivityList;
