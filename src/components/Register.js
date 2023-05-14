import React from 'react'
import Nav from './Nav'
import '../styles/Register.css';
import {useState, useEffect} from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('Register Here')

    // add User
    const registerUser = process.env.REACT_APP_REGISTERUSER_API

    const registerHandler =  (e) => {
        e.preventDefault()
        fetch( registerUser , {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                email,
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

    <div className='register-wrapper'>
    <Nav />
    <div className='register-main'>

    <div className='message'>
        <h3>{message}</h3>
    </div>

        <form onSubmit={registerHandler}>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Your Email' required />
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Username' required />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Your password' required />
            <button type="submit">Register</button>
        </form>

        </div>
    </div>
  )
}

export default Register