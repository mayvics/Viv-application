import './Summary.css'
import summaryLogo from './images/summaryicon.png'

const Summary = () => {
    return(
        <div className='Summary'>
            
           <button>
            <img src={summaryLogo}></img>
            <strong>Summary</strong>
            </button>
        </div>
    )
}

export default Summary;