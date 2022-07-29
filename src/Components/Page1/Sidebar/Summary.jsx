import './Summary.css'
import summaryLogo from './images/png-transparent-chart-computer-icons-statistics-report-elevator-repair-miscellaneous-angle-text.png'

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