import "./App.css";
import Page1 from "../Page1/Page1";
import EditAct from "../EditActivity/EditActivity";
import CreateAct from "../CreateActivity/CreateActivity";
import SummaryItem from "../summaryItem_week/summaryItem";
import Calendar from "../Calendar/Calendar";
import Navbar from "../Page1/Navbar/Navbar";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<CreateAct />} />
        <Route path="/edit/:id" element={<EditAct />} />
        <Route path="/schedule" element={<Calendar />} />
      </Routes>
    </div>
    
  );

}

export default App;
