import React from 'react'
import Nav from '../components/Nav';
import '../styles/Home.css'
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Logout from './Logout';


const Home = () => {
    const [showProjectForm, setShowprojectForm] = useState(false)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('Please wait till May 16 to add a Project.')
    const [user, setUser] = useState(false)
    const [greeting, setGreeting] = useState()
    const [showMsg, setShowMsg] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [notLoggedIn, setNotLoggedIn] = useState(true)
    const [isCookie, setIsCookie] = useState(true)

    const navigate = useNavigate()

// login
const userLogin_API = process.env.REACT_APP_USERLOGIN_API
    const loginHandler = (e) => {
        e.preventDefault();
        try {
          fetch(userLogin_API , {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          })
            .then((data)=>{
                return data.json()
            })
            .then((response) => {
              if (response.success) {
                console.log(response);
                setUsername('');
                setPassword('');
                setMessage(response.message);
                setIsLoggedIn(true);
                setNotLoggedIn(false)
                
              }
              setMessage(response.message)
        })
        }
        catch (err) {
          console.log(err);
        }
      };
      


    // get User details

    const getUser_API = process.env.REACT_APP_USER_API

useEffect(()=>{
    try{
    
    isLoggedIn && fetch(getUser_API , {
        method: "GET",
        mode: "cors",
        "credentials": "include",
        headers: {"Content-Type": "application/json"}
    })
    .then((response)=>{
      return response.json()
    })

    .then((data)=>{
        if(data.success){
            console.log(data)
            setGreeting(data.greeting)
            setUser(true)
        }
    
    })
    .catch((err)=>{
        console.log(err)
    })


}

        catch(err){
            setMessage(err.message)
        }
}, [isLoggedIn, getUser_API])

// handle projects 

const handleProject = (e)=>{
    e.preventDefault()
    setShowMsg(true)
  }



  return (
    <div className='home-wrapper'>
    <div className='nav-btns'>
    <Nav />
    {isLoggedIn ? <div className='logout-btn'><Logout /></div>:null }
    </div>

<header>
<h1>Welcome to Pulse PLS {greeting}</h1>

<marquee> <span>BREAKING: PULSECHAIN NOW LAUNCHED. LIQUIDITY TO BE ADDED SOON!</span></marquee>


<h3>This project primary aim is to track the Pulsechain 
Network and follow up with Projects that are being created on Pulsechain.<p>
 We are keen to showcase top projects on the Pulsechain and further provide better 
platform for notable projects or start-ups emerging on Pulsechain.</p></h3>
<h3>If you are here, we assume you know what you are doing</h3>
<h3>Crypto is high-risk investment and you could lose all that you have in 1 day.</h3>
<h3>All the projects on this website are posted by users like you and have not been vetted</h3>
<h3>We are not in anyway afiliated with Developers of these projects as our keen 
interest is mainly on how blockchain start-ups are solving real-life problems.</h3>

{showMsg ?
    <div className='msg-top'>{msg}</div>:null
    }
</header>

<div className='home-main'>

<div className='home-main-left'>




<h2><Link onClick={()=>setShowprojectForm(true)}>GOT A PROJECT? CLICK HERE!</Link></h2>

{showProjectForm ?
<div>
<h2>SHARE YOUR PROJECT <Link onClick={()=>setShowprojectForm(false)} className='home-left-close-x'>X</Link></h2>
         
    
    <form onClick={handleProject}>
        <input placeholder='Project name' />
        <input placeholder='Contract Address' />
        <input placeholder='Status' />
        <input placeholder='Project Website' />
        <input placeholder='Telegram Link Address' />
        <textarea placeholder='Project Description' /><br/>
        <button type="submit">Submit</button>
    </form>

    </div>:null

}
</div>


<div className='home-main-center'>

    <h2>PROJECTS</h2>

   

    <p>NO PROJECT TO SHOW NOW. DEVELOPERS CAN START ADDING 
    PROJECTS SOON</p>
</div>

<div className='home-main-right'>
<div className='home-message'>
        <p>{message}</p>
    </div>

{notLoggedIn ?
<div>
<h2>
<Link to="/register" className='register-btn'>REGISTER</Link>
</h2>
 <h3>OR</h3>
<h2>
<Link>LOGIN</Link>
</h2>




{/* login form */}
<form onSubmit={loginHandler}>
<input type="text" onChange={(e)=>setUsername(e.target.value)} value={username.toLowerCase()} placeholder='Username' required />
<input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Your password' required />
<button type="submit">Login</button>
</form></div>:

<div>
<h2>Trending project</h2>
<p>Coming soon</p>
</div>
}

    
</div>




</div>

{isCookie ?
<div>

<div className='cookie-wrapper'>
<div className='cookie-main'>
<p>"We use cookies to enhance your browsing experience on our website. 
These cookies are essential for certain functionalities and to analyze site traffic.</p>
 <p>By continuing to use our site, you consent to the use of cookies in accordance with our 
 Privacy Policy. If you prefer to disable cookies, you may adjust your browser settings accordingly.</p> 
 <p>Please note that disabling cookies may affect the functionality of our website. 
Thank you for your understanding and enjoy your visit!"</p>
<button onClick={()=>setIsCookie(false)}>Accept Cookies</button> 
<button onClick={()=>setIsCookie(false)}>Reject Cookies</button>
</div>
</div>

</div>:null
}
</div>
  )
}

export default Home