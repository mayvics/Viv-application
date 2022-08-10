import React from "react";
import './ActivityListCard.css';
import barbel from './images/barbel.png'
import swim from './images/swim.png'
import bicycle from './images/bicycle.png'
import run from './images/run.png';
import edit from './images/edit.png';
import remove from './images/remove.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const ActivityListCard = () => {

    const [activity, setActivity] = useState([]);

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

    const pic = (act) => {
        if(act.ActType==="Swimming"){
            return swim
        } else if (act.ActType==="Running"){
            return run
        } else if (act.ActType==="Hiking"){
            return barbel
        } else if (act.ActType==="Riding bicycle") {
            return bicycle
        } else {
            return run
        }
    }

    return(
        <div className="container-activity">
            <div className="container-listcard">
                    {/*        card 1          */}
            {activity.map((act,index) => (
                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= {pic(act)} alt="" />
                                <div key={index}>
                                    <p>Activity type : {act.ActType}</p>
                                    <p>Duration : {act.hour} hour || {act.minute} minutes</p>
                                    <p>Date : {act.date}</p>
                                    <p>Description : {act.aboutYou}</p>
                                </div>
                        </div>
                        <div className="card-btn">
                            <Link to="/edit"><img src= { edit } alt="" /></Link>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default ActivityListCard

