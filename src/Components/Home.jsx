import React from 'react'
import profile from "../image/profile.webp"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleCoachSignup = () => {

    navigate('/coachsignup')

  }

  const handleCoachLogin = () => {
    navigate('/coachlogin');
  }

  const handleUserSignup = () => {
    navigate('/coachsignup')
  }

  const handleUserLogin = ()=> {
    navigate('/userlogin')
  }



  return (
    <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='text-black text-3xl font-bold   '>We are at the heart of appropriate care</h1>


        <div className='grid grid-cols-1 md:grid-cols-2 mx-20 my-20  '>
            <div className='bg-black rounded h-60 w-60 flex flex-col justify-center items-center'>
            <img src={profile} alt="" className='h-20 p-2'/>
                <button onClick={handleCoachLogin} className='bg-cyan-600 px-2 py-2 rounded mb-3 text-white'>Login as Coach</button> <br />
                <button onClick={handleCoachSignup} className='bg-cyan-600 px-2 py-2 rounded mb-3 text-white'>Join as a Coach</button>

            </div>

            <div className='bg-black rounded h-60 w-60 flex flex-col justify-center items-center ml-3'>
                <img src={profile} alt="" className='h-20 p-2'/>
                <button onClick={handleUserLogin} className='bg-cyan-600 px-2 py-2 rounded mb-3 text-white'>Login as User</button> <br />
                <button onClick={handleUserSignup} className='bg-cyan-600 px-2 py-2 rounded mb-3 text-white'>Join as a User</button>

            </div>
        </div>
        
    </div>
  )
}

export default Home