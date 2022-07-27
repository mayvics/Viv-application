import React, { Component } from "react";

import "./Navbar.css"

import "./logo.svg";
import "./schedule.svg";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="logo">
                    <img id="logoIcon" src="logo.svg" alt="logo icon" />
                //link Page1
                    <h2>Viv Application</h2>
                </div>
    
                <div className="schedule"> 
                    <img id="scheduleIcon" src="schedule.svg" alt="schedule icon" />
                //link schedule page
                    <h3>Schedule</h3>
                </div>
            </div>
        );
    }
}

export default Navbar;