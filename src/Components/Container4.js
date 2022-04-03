import React from 'react'
import '../Styles/Container4.css';
import Photo from '../Photos/5.png';

function Container4() {
  return (
    <div className="Container4">
      <div className="leftPhoto">
        <img src={Photo} alt="Image" className='photo3' />
      </div>
      <div className="rightText">
        <h1>
          From few to a<br />
          fandom
        </h1>
        <p>
        Get any community running with moderation<br />
         tools and custom member access. Give<br />
          members special powers, set up private<br />
           channels, and more.
        </p>
      </div>
    </div>
  )
}

export default Container4