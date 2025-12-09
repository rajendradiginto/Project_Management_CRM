import React from "react";

const Registration = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center text-center text-white">
          <div className="col-lg-6 bg-dark">
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="row justify-content-center text-white">
          <div className="col-lg-6 bg-dark py-2">
            <form action="">
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
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
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn btn-primary w-100">Sign Up</button>

               <p>Already a user? <span>Login</span></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
