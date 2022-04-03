import React from 'react'
import '../Styles/Container3.css';
import Photo from '../Photos/4.png';

function Container3() {
  return (
    <div className="Container3">
        <div className="leftText">
          <h1>
            Where hanging<br />
            out is easy
          </h1>
          <p>
          Grab a seat in a voice channel when you're<br />
           free. Friends in your server can see you're<br />
            around and instantly pop in to talk without<br />
            having to call.
          </p>
        </div>
        <div className="rightPhoto">
          <img src={Photo} alt="Image" className='photo2'/>
        </div>
    </div>
  )
}

export default Container3