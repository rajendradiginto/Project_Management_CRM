import React from "react";
import loginHelper from "../../helper/login-helper";

const Login = () => {
  const { formData, handleFormChange, handleFormSubmit } = loginHelper();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 ">
            <div className="card p-3">
              <form onSubmit={handleFormSubmit}>
                <h1>Login Page</h1>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input
                      onChange={handleFormChange}
                      name="email"
                      value={formData.email}
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input
                      onChange={handleFormChange}
                      name="password"
                      value={formData.password}
                      type="password"
                      className="form-control"
                      placeholder="enter password"
                    />
                  </div>
                </div>
                <button className="btn btn-primary">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
