import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

const CoachHome = () => {
  const [appointments, setAppointments] = useState([]);
  const [coachDetails, setCoachDetails] = useState(null);
  const { coachId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/bookings`)
      .then(response => {
        console.log('Bookings fetched:', response.data);
        setAppointments(response.data);
      })
      .catch(error => console.error("Error Fetching bookings:", error));

    axios.get(`http://localhost:8080/coaches/${coachId}`)
      .then(response => {
        console.log('Coach details fetched:', response.data);
        setCoachDetails(response.data);
      })
      .catch(error => console.error("Error Fetching coach details:", error));
  }, [coachId]);

  return (
    <div>
      
      <Outlet context={{ appointments, coachDetails }} />
    </div>
  );
};

export default CoachHome;
