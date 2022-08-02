import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import Navbar from '../Page1/Navbar/Navbar'
import Dropdown from '../Dropdown-button/Dropdown-button'
import DisplayPie from '../Piechart/Piechart'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <DisplayPie />
    </div>
  )
}

export default App
