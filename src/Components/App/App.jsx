import React from 'react';
import ActivityList from '../Page1/Activity-list/ActivityList';
import Navbar from '../Page1/Navbar/Navbar';
import {  Route,  Routes } from "react-router-dom";
import Page1 from '../Page1/Page1'
import EditAct from "../EditActivity/EditActivity";
import CreateAct from "../CreateActivity/CreateActivity";
import './App.css'
import MyCalendar from '../Calendar/Calendar';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<CreateAct />} />
        <Route path="/edit" element={<EditAct />} /> 
        <Route path="/schedule" element={<MyCalendar />} /> 
        </Routes>
        </div>
    
  );

}

export default App;
