import React from "react";
import Styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import loginHelper from "../../helper/login-helper";

const Login = () => {
  const { formData, handleFormChange, handleFormSubmit } = loginHelper();

  return (
    <>
      <div className="container mt-5 ">
        <div className="row justify-content-center text-center text-white">
          <div className={`col-lg-5 bg-dark ${Styles.login_header}`}>
            <h2>Sign In</h2>
          </div>
        </div>
        <div className="row justify-content-center text-white">
          <div className={`col-lg-5 bg-dark py-2 ${Styles.login_form}`}>
            <form onSubmit={handleFormSubmit}>
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
                Don't have an account?{" "}
                <span>
                  <Link to={"/registration"}>Registration </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
