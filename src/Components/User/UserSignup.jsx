import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import person from "../../image/profile.webp";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    gender: "",
    age: "",
    email: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const [registered, setRegistered] = useState(false);
  const [userId, setUserId] = useState(null);

  const Navigate = useNavigate();

  const handleUserLogin = () => {
    Navigate("/userlogin");
  };

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    console.log(e.target);
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

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }
    return "";
  };

  const validatePincode = (pincode) => {
    if (pincode.length !== 6) {
      return "Pincode must have 6 digit";
    }
    return "";
  };

  const validateCity = (city) => {
    if (city.length < 6 || city.length > 20) {
      return "City should have 6 to 20 character";
    }
    return "";
  };

  const validateState = (state) => {
    if (state.length < 6 || state.lenght > 20) {
      return "State must have between 6 and 20 characters";
    }
    return "";
  };

  const validateCountry = (country) => {
    if (country.length < 6 || country.lenght > 20) {
      return "State must have between 6 and 20 characters";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const passwordError = validatePassword(formData.password);
    const mobileError = validateMobile(formData.mobileNumber);
    const emailError = validateEmail(formData.email);
    const ageError = validateAge(formData.dateOfBirth);
    const genderError = validateGender(formData.gender);
    const pincodeError = validatePincode(formData.pincode);
    const cityError = validateCity(formData.city);
    const stateError = validateState(formData.state);
    const countryError = validateCountry(formData.country);

    setErrors({
      name: nameError,
      password: passwordError,
      mobileNumber: mobileError,
      email: emailError,
      age: ageError,
      gender: genderError,
      pincode: pincodeError,
      city: cityError,
      state: stateError,
      country: countryError,
    });

    if (
      !nameError &&
      !passwordError &&
      !mobileError &&
      !emailError &&
      !ageError &&
      !genderError &&
      !pincodeError &&
      !cityError &&
      !stateError &&
      !countryError
    ) {
      axios
        .post("http://localhost:8080/users", formData)
        .then((response) => {
          const { id } = response.data;
          setUserId(id);
          alert("New User added");

          console.log(userId);

          setRegistered(true);
        })

        .catch((error) => {
          console.error("error adding user");
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
            <h2>Your User id is {userId}</h2>
            <button onClick={handleUserLogin} className="btn btn-primary">
              Login Now
            </button>
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
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.speciality}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
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
                  <label htmlFor="pincode" className="form-label">
                    Pincode
                  </label>
                  <input
                    type="Number"
                    id="pincode"
                    className="form-control"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                  {errors.pincode && (
                    <div className="text-danger">{errors.pincode}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <div className="text-danger">{errors.city}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="State" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && (
                    <div className="text-danger">{errors.state}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="speciality" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && (
                    <div className="text-danger">{errors.country}</div>
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

export default UserSignup;
