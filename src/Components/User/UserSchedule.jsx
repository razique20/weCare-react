import React from 'react'
import { useOutletContext } from 'react-router-dom'

const UserSchedule = () => {
  const{bookingDetails} = useOutletContext()
  return (
    <div className=' grid grid-cols-2  text-center m-4' >
     {bookingDetails && bookingDetails.length > 0 ? (
      bookingDetails.map(booking => (
        <div className='bg-black text-white rounded p-3 m-2'key={booking.id}>
          <h1 className='text-xl'>Appointment Date :</h1>
          <h2 className='text-lg'>{booking.appointmentDate}</h2>
          <p className='text-xs'>Slot : {booking.slot}</p>
          <p className='text-xs'>Booking id : {booking.id}</p>
          <p className='text-xs'>User Id : {booking.userId}</p>
          <p className='text-xs'>Coach Id : {booking.coachId}</p>
          <div className='flex flex-col p-3 mb-2 gap-3'>
          <button className='w-full btn btn-primary '>Reschedule Appointment</button>
          <button className='w-full btn btn-danger'>Cancel Appointment</button>

          </div>

          </div>
      ) )
     ):(
      <div>
        No Booking Found
        </div>
     )}
    </div>
  )
}

export default UserSchedule