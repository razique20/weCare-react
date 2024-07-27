import React from 'react';
import { useOutletContext } from 'react-router-dom';
import person from '../../image/profile.webp';

const UserViewProfile = () => {
  const { userDetails } = useOutletContext();

  return (
    <div className='flex justify-between items-center bg-black text-white p-5 m-5'>
      <div>
        <img src={person} alt="" className='h-40' />
      </div>

      {userDetails? (
        <div className='bg-grey' key={userDetails.id}>
          <p>User Id: {userDetails.name}</p>
          <p>Date of Birth: {userDetails.email}</p>
          <p>Mobile No: {userDetails.mobileNumber}</p>
          <p>Speciality: {userDetails.address}</p>
          <p>Pincode : {userDetails.pincode}</p>
        </div>
      ) : (
        <div>Loading user details...</div>

        
      )}
    </div>
  );
};

export default UserViewProfile;
