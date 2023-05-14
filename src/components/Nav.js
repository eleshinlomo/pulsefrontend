import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className='nav-wrapper'>

    <div className='nav-main'>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <a href="https://app.pulsex.com/swap">Pulse DEX</a>
    <Link to="/rpcsetup">RPC Setup</Link>
    <a href="https://twitter.com/RichardHeartWin">RH Twitter</a>
    
    
    </div>

    </div>
  )
}

export default Nav