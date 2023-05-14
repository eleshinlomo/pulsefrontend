import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Nav.css';
import {useEffect, useState} from 'react'
import Logout from './Logout';

const Nav = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('Please wait till May 16 to add a Project.')
    const [user, setUser] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)

     

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