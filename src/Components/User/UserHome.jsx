import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Person from '../../image/profile.webp';
import { useParams, Outlet } from 'react-router-dom';

const UserHome = () => {
  const [coaches, setCoaches] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/coaches')
      .then(response => setCoaches(response.data))
      .catch(error => console.error("error while fetching"));

    axios.get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        setUserDetails(response.data);
        console.log("user detail fetched" , response.data)
      })
      .catch(error => console.error("error while fetching using userId"));
  }, [userId]);

  return (
    <div className="grid grid-cols-2 justify-center items-center gap-4">
      {coaches && coaches.length > 0 ? (
        coaches.map(coach => (
          <div key={coach.id} className="flex flex-col items-center px-3 mx-5 bg-white my-5 rounded p-3 justify-center h-80 w-80 shadow-md">
            <div className="flex items-center w-full">
              <img src={Person} alt="" className="h-20 w-20 mr-5" />
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold">{coach.name}</h2>
                <p className="text-sm">Coach Id: {coach.id}</p>
                <p className="text-xs">Mobile Number: {coach.mobileNumber}</p>
                <p className="text-xs">Speciality: {coach.speciality}</p>
              </div>
            </div>
            <div className="mt-5 w-full">
              <button className="btn btn-info w-full">Book an Appointment</button>
            </div>
          </div>
        ))
      ) : (
        <div>No coaches available</div>
      )}
      <Outlet context={{ userDetails }} />
    </div>
  );
};

export default UserHome;
