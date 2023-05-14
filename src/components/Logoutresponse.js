import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Logoutresponse.css'

const Logoutresponse = () => {
  return (
    <div className='logoutresponse-wrapper'>

    <div className='logoutresponse-main'>
        <h3>You have successfully logged out.</h3> <Link to="/"><button>Back to Home</button></Link>
         <div>
          <p>This platform is working hard to be all-in-one hub for everything
          PulseChain. Make sure you visit this website everyday so you don't miss out on 
          new projects that are happening on Pulsechain</p>
         </div>
         </div>
        
    
    </div>

  )
}

export default Logoutresponse