import React,{ useState, useEffect } from 'react';
import ActivityListCard from '../ActivityListCard/ActivityListCard';
import './App.css'

function App() {

  const [activity, setActivity] = useState([])

  //Fetch data from database to show at card
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json()
    .then(data => {
      setActivity(data)
    })
    )
  },[])

  return (
    <div className='App'>
      <ActivityListCard data= {activity}/>
    </div>
  )
}

export default App;
