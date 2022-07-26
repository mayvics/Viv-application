import './Tips.css';
import tip from '../../../assets/tips.png';
import tiptop from '../../../assets/tip-topic.png';

const Tips = () => {
    return (
        <>
            <div className='Tip-container'>
                <div className='tip-text-container'>
                    <img src={tiptop} /> 
                    <h3>Tips of the day</h3>
                </div>
                <div className='tip-data-container'>
                    <div className='tip-img-container'>
                        <img src={tip} /> 
                        {/* for mock up */}
                    </div>
                    <div className='tip-result-container'>
                        <h6>The Definitive Guide to Healthy Eating in Real Life</h6>
                        <p>Depending on whom you ask, “healthy eating” may take any number of forms. It seems that everyone</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Tips;