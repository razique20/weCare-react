import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import person from "../../image/profile.webp";
import { useNavigate } from "react-router-dom";

const CoachSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    speciality: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    password: "",
    gender: "",
    mobileNumber: "",
    speciality: "",
  });

  const [registered, setRegistered] = useState(false);

  const[coachId,setCoachId] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateName = (name) => {
    if (name.length < 3 || name.length > 50) {
      return "Name must be between 3 and 50 characters";
    }
    return "";
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const validateAge = (dob) => {
    const age = calculateAge(dob);
    if (age < 20 || age > 100) {
      return "Age must be between 20 and 100";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 5 || password.length > 10) {
      return "Password must be between 5 and 10 characters";
    }
    return "";
  };

  const validateGender = (gender) => {
    if (!gender) {
      return "Gender is required";
    }
    return "";
  };

  const validateMobile = (mobile) => {
    if (mobile.length !== 10) {
      return "Mobile number must be 10 digits";
    }
    return "";
  };



  const validateSpeciality = (speciality) => {
    if (speciality.length < 5 || speciality.length > 50) {
      return "Speciality must be between 5 and 50 characters";
    }
    return "";
  };

  const handleCoachLogin = () => {
    navigate('/coachlogin');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const ageError = validateAge(formData.dateOfBirth);
    const passwordError = validatePassword(formData.password);
    const genderError = validateGender(formData.gender);
    const mobileError = validateMobile(formData.mobileNumber);
    const specialityError = validateSpeciality(formData.speciality);

    setErrors({
      name: nameError,
      age: ageError,
      password: passwordError,
      gender: genderError,
      mobileNumber: mobileError,
      speciality: specialityError,
    });

    if (
      !nameError &&
      !ageError &&
      !passwordError &&
      !genderError &&
      !mobileError &&
      !specialityError
    ) {
      // Proceed with form submission
      axios
        .post("http://localhost:8080/coaches", formData)
        .then((response) => {
          const { id } = response.data;
          setCoachId(id);
          
          alert("Coach information added");
          setRegistered(true); // Redirect to the success page or desired route
        })
        .catch((error) => {
          console.error("Error adding coach information", error);
          // Optionally handle errors here
        });
    }
  };

  return (
    <>
      {registered ? (
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <img src={person} alt="" className="h-60" />
            <h1>Your are a Coach now</h1>
            <h2>`Your Coach id is {coachId}</h2>
            <button onClick={handleCoachLogin} className="btn btn-primary">Login Now</button>
          </div>
        </div>
      ) : (
        <div className="container bg-black rounded text-white px-30 py-3 w-60">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img src={person} alt="Profile" className="h-20 px-3" />
            <p className="text-3xl">Life Coach Profile</p>
          </div>

          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    className="form-control"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                  {errors.age && (
                    <div className="text-danger">{errors.age}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div className="d-flex align-items-center">
                    <div className="form-check me-3">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        id="male"
                        value="M"
                        checked={formData.gender === "M"}
                        onChange={handleChange}
                      />
                      <label htmlFor="male" className="form-check-label">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        id="female"
                        value="F"
                        checked={formData.gender === "F"}
                        onChange={handleChange}
                      />
                      <label htmlFor="female" className="form-check-label">
                        Female
                      </label>
                    </div>
                  </div>
                  {errors.gender && (
                    <div className="text-danger">{errors.gender}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="form-control"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                  {errors.mobileNumber && (
                    <div className="text-danger">{errors.mobileNumber}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="speciality" className="form-label">
                    Speciality
                  </label>
                  <input
                    type="text"
                    id="speciality"
                    className="form-control"
                    value={formData.speciality}
                    onChange={handleChange}
                  />
                  {errors.speciality && (
                    <div className="text-danger">{errors.speciality}</div>
                  )}
                </div>
              </div>

              <div className="d-flex justify-center">
                <button
                  type="submit"
                  className="btn btn-success px-5 py-2 me-3 mt-3 mb-3"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachSignup;
