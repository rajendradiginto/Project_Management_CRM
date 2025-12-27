import { useState } from "react";
import Styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import registrationHelper from "../../helper/Registration-Helper";

const Registration = () => {
  const {formData, handleFormChange, handleFormSubmit}= registrationHelper();

  return (
    <>
      <div className="container mt-5 ">
        <div className="row justify-content-center text-center text-white">
          <div className={`col-lg-5 bg-dark ${Styles.registration_header}`}>
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="row justify-content-center text-white">
          <div className={`col-lg-5 bg-dark py-2 ${Styles.registration_form}`}>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  name="fname"
                  value={formData.fname}
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter First Name"
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  onChange={handleFormChange}
                  name="lname"
                  value={formData.lname}
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  onChange={handleFormChange}
                  name="username"
                  value={formData.username}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profession" className="form-label">
                  Profession
                </label>
                <input
                  onChange={handleFormChange}
                  name="profession"
                  value={formData.profession}
                  type="text"
                  className="form-control"
                  id="profession"
                  placeholder="Enter Profession"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={handleFormChange}
                  name="email"
                  value={formData.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={handleFormChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn btn-primary w-100">Sign Up</button>

              <p>
                Already a user?{" "}
                <span>
                  <Link to={"/"}>Login </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
