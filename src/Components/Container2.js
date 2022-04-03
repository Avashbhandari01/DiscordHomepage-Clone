import React from 'react'
import '../Styles/Container2.css';
import Photo from '../Photos/2.png';

function Container2() {
    return (
        <div className="Container2">
            <div className="leftPhoto">
                <img src={Photo} alt="Image" className='photo1' />
            </div>
            <div className="rightText">
                <h1>Create an<br />
                    invite-only<br />
                    place where you<br />
                    belong
                </h1>
                <p>Discord servers are organized into topic-<br />
                    based channels where you can collaborate,<br />
                    share, and just talk about your day without<br />
                    clogging up a group chat.</p>
            </div>
        </div>
    )
}

export default Container2