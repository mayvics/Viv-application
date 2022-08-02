import './App.css'
import Page1 from '../Page1/Page1'
import EditAct from '../EditActivity/EditActivity';
import CreateAct from '../CreateActivity/CreateActivity';
import SummaryItem from '../summaryItem_week/summaryItem'
import MyCalendar from '../Calendar/Calendar';
import DisplayPie from '../Piechart/Piechart'

function App() {
  return (
    <div className='App'>
        <Page1 />
        <MyCalendar />
        <DisplayPie />

    </div>
  )
}

export default App;
