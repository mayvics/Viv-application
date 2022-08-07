import "./App.css";
import Page1 from "../Page1/Page1";
import EditAct from "../EditActivity/EditActivity";
import CreateAct from "../CreateActivity/CreateActivity";
import SummaryItem from "../summaryItem_week/summaryItem";
import Navbar from "../Page1/Navbar/Navbar";
import {  Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<CreateAct />} />
        <Route path="/edit" element={<EditAct />} /> 
        </Routes>
        </div>
    
  );
}

export default App;
