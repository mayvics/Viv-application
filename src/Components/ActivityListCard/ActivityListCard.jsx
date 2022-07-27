import React from "react";
import './ActivityListCard.css';
import clickNext from './images/next.png';
import clickPrev from './images/prev.png';
import logoRun from './images/run.png';
import edit from './images/edit.png';
import remove from './images/remove.png';

const ActivityListCard = () => {
    return(
        <div className="container-activity">
            <div className="head-content">
                <h1> Activity List</h1>
                <div className="head-btn">
                    <a href="#"><img src= { clickPrev } alt="" /></a>
                    <a href="#"><img src= { clickNext } alt="" /></a>
                </div>
            </div>

            <div className="container-listcard">

                    {/*        card 1          */}

                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { logoRun } alt="" />
                            <div>
                                <p>Activity type :</p>
                                <p>Duration :</p>
                                <p>Date :</p>
                                <p>Description :</p>
                            </div>
                        </div>
                        <div className="card-btn">
                            <a href="#"><img src= { edit } alt="" /></a>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>

                {/*             card2            */}

                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { logoRun } alt="" />
                            <div>
                                <p>Activity type :</p>
                                <p>Duration :</p>
                                <p>Date :</p>
                                <p>Description :</p>
                            </div>
                        </div>
                        <div className="card-btn">
                            <a href="#"><img src= { edit } alt="" /></a>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>

                {/*                 card3                */}

                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { logoRun } alt="" />
                            <div>
                                <p>Activity type :</p>
                                <p>Duration :</p>
                                <p>Date :</p>
                                <p>Description :</p>
                            </div>
                        </div>
                        <div className="card-btn">
                            <a href="#"><img src= { edit } alt="" /></a>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>

                {/*             card4            */}
                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { logoRun } alt="" />
                            <div>
                                <p>Activity type :</p>
                                <p>Duration :</p>
                                <p>Date :</p>
                                <p>Description :</p>
                            </div>
                        </div>
                        <div className="card-btn">
                            <a href="#"><img src= { edit } alt="" /></a>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}


export default ActivityListCard

