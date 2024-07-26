import React from 'react';
import { useOutletContext } from 'react-router-dom';
import person from '../../image/profile.webp';

const UserViewProfile = () => {
  const { userDetails } = useOutletContext();

  return (
    <div className='flex justify-between items-center bg-black text-white p-5'>
      <div>
        <img src={person} alt="" className='h-40' />
      </div>

      {userDetails ? (
        <div className='bg-grey'>
          <p>User Id: {userDetails.id}</p>
          <p>Date of Birth: {userDetails.dateOfBirth}</p>
          <p>Mobile No: {userDetails.mobileNumber}</p>
          <p>Speciality: {userDetails.speciality}</p>
        </div>
      ) : (
        <div>Loading user details...</div>

        
      )}
    </div>
  );
};

export default UserViewProfile;
