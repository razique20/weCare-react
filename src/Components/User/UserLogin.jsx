import React, { useState } from 'react';
import person from '../../image/profile.webp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:8080/users?userId=${userId}`)
      .then(response => {
        const user = response.data[0];
        console.log("data fetched",response.data);
        if (user && user.password === password) {
          alert("Login successful");
          navigate(`/userhome/${user.id}`);
        } else {
          setError("Invalid credentials");
        }
      })
      .catch(() => setError("Login failed"));
  };

  return (
    <div>
      <div className='bg-black container px-3 py-4 w-50'>
        <div className='flex justify-center items-center text-white pb-2'>
          <img src={person} alt="" className='h-20 max-w-30' />
          <p className='text-xl'>Login As User</p>
        </div>

        <div>
          <form onSubmit={handleLogin} className='p-3'>
            <input 
              type="text" 
              required 
              placeholder='User Id' 
              className='form-control mb-2' 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
            />
            <input 
              type="password" 
              minLength="5" 
              maxLength="10" 
              placeholder='Password' 
              className='form-control p-2' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <br />
            <button className='btn btn-info form-control'>Login</button>
          </form>

          {error && <p className='text-danger'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
