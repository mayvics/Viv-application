import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popupForm.css'




const PopupForm = (props) => {
    const date = new Date();
    let currentDate = date.toISOString().slice(0,10);
    let currentTime = date.getHours() + ':' + date.getMinutes();


    const handleText = (e) => {
        props.addTitle(e.target.value)
    }

    const handleDate = (e) => {
        props.addDate(e.target.value)
    }

    const handleTime = (e) => {
        props.addTime(e.target.value)
    }

    return (
        <div style={{ display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
        <div className='header-schedule'>
          <h1 className='calendar-title' style={{ textAlign:"center" }}>SCHEDULE</h1>
          <Popup 
            trigger={<button className='addEvent-btn' style={{margin:"20px"}}>+ NEW REMINDER</button>}
            modal
            nested>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="remind-header"> NEW REMINDER</div>
                    <div className="content">
                        {' '}
                        <h5>What do you want to do?</h5>
                        <input className='input-text' type="text" placeholder='e.g: Running, Jogging' defaultValue={''} onChange={handleText} />
                        <h5>Time Start ?</h5>
                        <input className='input-date' type="date" defaultValue={currentDate} onChange={handleDate} />
                        <input className='input-time' type="time" defaultValue={currentTime} onChange={handleTime} />
                        <h5>Time End ?</h5>
                        <input className='input-date' type="date" defaultValue={currentDate} />
                        <input className='input-time' type="time" defaultValue={currentTime} />
                        <div style={{ display:"flex", justifyContent:'flex-end'}}>
                            <button  className='confirm-btn'>CONFIRM</button>
                        </div>
                    </div>
                </div>
              )}
          </Popup>
        </div>
        </div>
    )
}

export default PopupForm;