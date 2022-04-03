import React from 'react'
import '../Styles/Container1.css'
import BackgroundImage from '../Photos/7.png'
import LeftImage from '../Photos/1.png'
import RightImage from '../Photos/6.png'
import { HiOutlineDownload } from 'react-icons/hi';


function Container1() {
  return (
    <div className="Container1" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="leftImage" style={{ backgroundImage: `url(${LeftImage})` }}></div>
        <div className="center">
          <h1>IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community.<br />
          Where just you and a handful of friends can spend time together. A place that makes it easy<br />
          to talk everyday and hang out often more.
          </p>
          <div className="buttonDiv">
          <button className='btnDownload'><HiOutlineDownload className='logo'/>Download for Windows</button>
          <button className='btnBrowser'>Open Discord in your browser</button>
          </div>
        </div>
        <div className="rightImage" style={{ backgroundImage: `url(${RightImage})` }}></div>
    </div>
  )
}

export default Container1