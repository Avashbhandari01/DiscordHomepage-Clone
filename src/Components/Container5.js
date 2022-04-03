import React from 'react'
import '../Styles/Container5.css';
import Photo from '../Photos/3.png';
import { HiOutlineDownload } from 'react-icons/hi';

function Container5() {
  return (
    <div className="Container5">
        <div className="topText">
            <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
            <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their<br />
                 games, or gather up and have a drawing session with screen share.</p>
        </div>
        <div className="middlePhoto">
            <img src={Photo} alt="Image" className='photo4'/>
        </div>
        <div className="bottomText">
            <h1>Ready to start your journey?</h1>
            <br/>
            <button><HiOutlineDownload className='logo'/>Download for Windows</button>
        </div>
    </div>
  )
}

export default Container5