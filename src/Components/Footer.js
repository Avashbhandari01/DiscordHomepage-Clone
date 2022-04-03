import React from 'react'
import '../Styles/Footer.css';
import { BiChevronDown } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import Logo from '../Photos/8.png';

function Footer() {
    return (
        <div className="footer">
            <div className="topFooter">
                <div className="Text1">
                    <h1>IMAGINE A<br />PLACE</h1>
                    {/* <img src={Flag} alt="USA Flag" /> */}
                    <p>English, USA <BiChevronDown /></p>
                    <div className="socialMedia">
                        <BsTwitter className='twitter' />
                        <BsInstagram className='insta' />
                        <FaFacebookSquare className='facebook' />
                        <BsYoutube className='youtube' />
                    </div>
                </div>
                <div className="Text2">
                    <p className='colorP'>Product</p>
                    <p>Download</p>
                    <p>Nitro</p>
                    <p>Stauts</p>
                </div>
                <div className="Text3">
                    <p className='colorP'>Company</p>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>Branding</p>
                    <p>Newsroom</p>
                </div>
                <div className="Text4">
                    <p className='colorP'>Resources</p>
                    <p>College</p>
                    <p>Support</p>
                    <p>Safety</p>
                    <p>Blog</p>
                    <p>Feedback</p>
                    <p>Developers</p>
                    <p>StreamKit</p>
                </div>
                <div className="Text5">
                    <p className='colorP'>Policies</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookie Setting</p>
                    <p>Guidelines</p>
                    <p>Acknowledgements</p>
                    <p>Licenses</p>
                    <p>Moderation</p>
                </div>
            </div>
            <div className="midFooter"></div>
            <div className="bottomFooter">
                <img src={Logo} alt="Discord Logo" />
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Footer