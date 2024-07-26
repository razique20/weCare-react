import React, { useState } from 'react';
import person from '../../image/profile.webp';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CoachLogin = () => {
  const [coachId, setCoachId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.get(`http://localhost:8080/coaches`, {
        params: {
          id: coachId,
          password: password
        }
      });

      if (response.data.length > 0) {
        alert('Login Successfully');
        navigate(`/coachhome/${coachId}`); // Redirect to CoachHome with coachId
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <div className='bg-black container px-3 py-4 w-50'>
        <div className='flex justify-center items-center text-white pb-2'>
          <img src={person} alt="" className='h-20 max-w-30' />
          <p className='text-xl'>Login As Life Coach</p>
        </div>

        <div>
          <form onSubmit={handleLogin} className='p-3 '>
            <input type="text" required placeholder='Coach Id' className='form-control mb-2' value={coachId} onChange={(e) => setCoachId(e.target.value)} />
            <input type="password" required minLength="5" maxLength="10" placeholder='password' className='form-control p-2' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type='submit' className='btn btn-info form-control'>Login</button>
          </form>

          {error && <p className='text-danger'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CoachLogin;
