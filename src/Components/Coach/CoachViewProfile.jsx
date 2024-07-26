import React from 'react'
import { useOutletContext } from 'react-router-dom'
import person from '../../image/profile.webp'

const CoachViewProfile = () => {

  const {coachDetails} = useOutletContext();
  return (
    <div className='flex justify-between items-center bg-black text-white p-5'>
      <div>
        <img src={person} alt=""  className='h-40'/>
      </div>

      {
        coachDetails ? (
          <div className='bg-grey'>
            <p>Coach Id : {coachDetails.id}</p>
            <p>Date of Birth : {coachDetails.dateOfBirth} </p>
            <p>Mobile No : {coachDetails.mobileNumber}</p>
            <p>Speciality : {coachDetails.speciality}</p>
            </div>
        ):(
          <div>
            Loading coach details
            </div>

        )
      }
    </div>
  )
}

export default CoachViewProfile