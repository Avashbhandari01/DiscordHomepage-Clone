import React from 'react'
import Logo from '../Photos/8.png';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarLeft">
            <img src={Logo} alt="Discord Logo" />
        </div>
        <div className="navbarCenter">
            <a href="">Download</a>
            <a href="">Nitro</a>
            <a href="">Safety</a>
            <a href="">Support</a>
            <a href="">Blog</a>
            <a href="">Carrers</a>
        </div>
        <div className="navbarRight">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar