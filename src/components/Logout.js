import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';



const Logout = () => {
    const [error, setError] = useState(null);
    const [userToken, setUserToken] = useState(null)
    const [msg, setMsg] = useState('')
    const [isLoggedOut, setIsLoggedOut] = useState(true)

    const navigate = useNavigate()

   

    const logoutAPI = process.env.REACT_APP_LOGOUT
  
    const logoutAP = () => {
      try{
      fetch( logoutAPI , {
        method: "POST",
        mode: "cors",
        "credentials": "include"
      })
        .then((res) => {
          if(res){
          navigate("/logoutresponse")
          }
          setError("error logging out")
        })
      }
      catch(err){
        console.log(err)
        setError("Error logging out")
      }
        
    }
         
        
  return (
    <div className='logout'>
    
    <button onClick={logoutAP}>Logout</button>
    
    </div>
  )
}

export default Logout


