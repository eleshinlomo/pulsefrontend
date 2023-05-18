import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Nav.css';
import {useEffect, useState} from 'react'
import Logout from './Logout';
import {FaAlignJustify} from 'react-icons/fa'

const Nav = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('Almost done. Please wait till we complete this feature.')
    const [user, setUser] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

     

  return (
    <div className='nav-wrapper'>

    <div className='nav-main'>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <a href="https://app.pulsex.com/swap">Pulse DEX</a>
    <Link to="/rpcsetup">RPC Setup</Link>
    <Link to="/contracts">Contracts</Link>
    <a href="https://twitter.com/RichardHeartWin">RH Twitter</a>
  
    </div>

    {/* mobile */}
    <div className='ismobile-nav-wrapper'>
    <div className='ismobile-nav-main'>

    <div className='ismobile-nav-menu'>
        <button onClick={()=>setIsMobile(true)}><FaAlignJustify /></button>
        
    </div>

    {isMobile ?

    <div className='ismobile-menu-btns'>

    <div>
    <Link to="/"><button>Home</button></Link>
    <Link to="/"><button>About</button></Link>
    <a href="https://app.pulsex.com/swap"><button>Pulse DEX</button></a>
    <Link to="/rpcsetup"><button>RPC Setup</button></Link>
    <Link to="/contracts"><button>Contracts</button></Link>
    <a href="https://twitter.com/RichardHeartWin"><button>RH Twitter</button></a>
    <button onClick={()=>setIsMobile(false)} >X</button>
    </div>

    <div className='ismobile-btns-img-div'>
  
    </div>

    </div>:null

    }




    </div>

    </div>

    </div>
  )
}

export default Nav