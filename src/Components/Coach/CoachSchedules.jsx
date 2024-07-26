import React from 'react';
import { useOutletContext } from 'react-router-dom';

const CoachSchedules = () => {
  const { appointments } = useOutletContext();

  console.log('Appointments:', appointments);

  return (
    <div className='flex flex-col justify-between items-center bg-black text-white p-5 m-8 w-90'>
      {appointments && appointments.length > 0 ? (
        appointments.map(appointment => (
          <div key={appointment.id} className='flex flex-col justify-center items-center '>
            <p className='text-2xl'>Appointment Date: </p>
            <p>{appointment.appointmentDate}</p>
            <p className='text-xl'>Slot: {appointment.slot}</p>
            <p className='text-xs'>Booking id: {appointment.id}</p>
            <p className='text-xs'>User Id: {appointment.userId}</p>
          </div>
        ))
      ) : (
        <div>No planned schedules yet</div>
      )}
    </div>
  );
}; 

export default CoachSchedules;
