import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";



const CoachNavbar = () => {
  return (

    
    <nav className='bg-black p-6 text-white flex justify-between'>
      <div>
      <Link to="/" className='text-3xl text-decoration-none text-white'>WeCare</Link>
      </div>

      <div>

<Link to="/coachhome"className='text-white text-decoration-none mx-3' >Home</Link>
      <Link to="/coachhome/coachschedules" className='text-white text-decoration-none mx-3'>My Schedules</Link>
      <Link to="/coachhome/coachviewprofile" className='text-white text-decoration-none mx-3'>View Profile</Link>
      </div>
    </nav>
  )
}

export default CoachNavbar