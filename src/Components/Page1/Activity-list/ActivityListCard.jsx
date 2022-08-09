import React from "react";
import './ActivityListCard.css';
import barbel from './images/barbel.png'
import swim from './images/swim.png'
import bicycle from './images/bicycle.png'
import logoRun from './images/run.png';
import edit from './images/edit.png';
import remove from './images/remove.png';
import { Link } from "react-router-dom";

const ActivityListCard = () => {
    return(
        <div className="container-activity">
            <div className="head-content">
                <h1> Activity List</h1>
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
                            <Link to="/edit"><img src= { edit } alt="" /></Link>
                            <a href="#"><img src= { remove } alt="" /></a>
                        </div>
                    </div>
                </div>

                {/*             card2            */}

                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { barbel } alt="" />
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
                            <img src= { swim } alt="" />
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
                            <img src= { bicycle } alt="" />
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

                <div className="listCard">
                    <div className="card">
                        <div className="container-content">
                            <img src= { bicycle } alt="" />
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

