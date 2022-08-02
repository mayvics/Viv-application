import React, { useState, useCallback } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import events from './events';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import PopupForm from './popupForm';



const MyCalendar = () => {
  const [myEvents, setEvents] = useState(events)


  const date = new Date();
  let currentDate = date.toISOString().slice(0,10);
  let currentTime = date.getHours() + ':' + date.getMinutes();

  const [title, setTitle] = useState('')
  const [addDate, setAddDate] = useState(currentDate)
  const [addTime, setAddTime] = useState(currentTime)

  const inputTitle = (t) => {
    setTitle(t)
  }

  const inputDate = (d) => {
    setAddDate(d)
  }
  
  const inputTime = (ti) => {
    setAddTime(ti)
  }


  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )


  return (
    <div>
        <PopupForm 
        addTitle={inputTitle}
        addDate={inputDate}
        addTime={inputTime}
        />
        <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }}>
          <Calendar
            localizer={momentLocalizer(moment)}
            defaultDate={new Date()}
            defaultView="month"
            events={myEvents}
            style={{ height: "50vh", width: "50vw" }}
            onSelectEvent={handleSelectEvent}

            selectable
          />
        </div>
    </div>
  )
}


export default MyCalendar