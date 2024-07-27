import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <nav className="bg-black p-6 text-white flex justify-between">
      <div>
        <Link to="/" className="text-3xl text-decoration-none text-white">
          WeCare
        </Link>
      </div>

      <div className="flex">
        <Link
          to="/userhome/userviewprofile"
          className="text-white text-decoration-none mx-3"
        >
          View Profile
        </Link>
        <Link to="/userhome/userschedules" className="text-white text-decoration-none mx-3">
          My Appointments
        </Link>

        <p>Call us : 0802234565</p>
        <Link className="text-white text-decoration-none mx-3" >Logout</Link>
      </div>
    </nav>
  );
};

export default UserNavbar;
