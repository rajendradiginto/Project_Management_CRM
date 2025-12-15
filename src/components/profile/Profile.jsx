import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center bg-dark py-3">
            <h1 className="text-white">Profile Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-dark text-white mt-5 p-3">
              <h3>User Profile</h3>
              <img src="#" alt="Profile" />
              <p>John Doe</p>
              <p>johndoe</p>
              <p>Developer</p>
              <p>
                Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis repellendus, omnis facilis sunt quos totam.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card bg-dark text-white mt-5 p-3">
              <h3>Activity Feed</h3>
              <p>Coming Soon......</p>
              <h3>Activity Feed</h3>
              <p>Coming Soon......</p>
              <h3>Activity Feed</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
