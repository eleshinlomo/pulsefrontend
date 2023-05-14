import React from 'react'
import Nav from '../components/Nav';
import '../styles/Home.css'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    const [showProjectForm, setShowprojectForm] = useState(false)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


     // Login
    

     const loginHandler =  (e) => {
        e.preventDefault()
        fetch('http://localhost:4100/api/login', {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                
                username,
                password,
               
                
            })
        })
       .then((data)=>{
        if(!data){
            setMessage("No data found")
        }
        return data.json()
       })
       .then((response)=>{
        if(response.success){

        console.log(response)
        setMessage(response.message)
        }
        setMessage(response.message)
        
       });
       
      
        
    }

  return (
    <div className='home-wrapper'>
    <Nav />

<header>
<h1>Welcome to Pulse AI</h1>

<marquee> <span>BREAKING: PULSECHAIN NOW LAUNCHED</span></marquee>

<h2>If you are here, we assume you know what you are doing</h2>
<h3>Crypto is high-risk investment and you could lose all that you have in 1 day.</h3>
<h3>All the projects on this website are posted by users like you and have not been vetted</h3>
<h3>If you understand this and willing to lose your money, come right in.</h3>
</header>

<div className='home-main'>

<div className='home-main-left'>
<h2><Link onClick={()=>setShowprojectForm(true)}>GOT A PROJECT? CLICK HERE!</Link></h2>

{showProjectForm ?
<div>
<h2>SHARE YOUR PROJECT <Link onClick={()=>setShowprojectForm(false)} className='home-left-close-x'>X</Link></h2>
    <form>
        <input placeholder='Project name' />
        <input placeholder='Contract Address' />
        <input placeholder='Status' />
        <input placeholder='Project Website' />
        <input placeholder='Telegram Link Address' />
        <textarea placeholder='Project Description' /><br/>
        <button>Submit</button>
    </form>

    </div>:null

}
</div>


<div className='home-main-center'>
    <h2>PROJECTS</h2>

    <div className='home-message'>
        <h2>{message}</h2>
    </div>

    <h3>NO PROJECT TO SHOW NOW. DEVELOPERS CAN START ADDING 
    PROJECTS FROM MONDAY MAY 15, 2023</h3>
</div>

<div className='home-main-right'>

<h2>
<Link to="/register">REGISTER</Link>
</h2>
 <h3>OR</h3>
<h2>
<Link>LOGIN</Link>
</h2>



<form>
<form onSubmit={loginHandler}>
            
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Username' required />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Your password' required />
            <button type="submit">Login</button>
        </form>
    </form>
</div>

</div>
</div>
  )
}

export default Home