import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-lg-12 bg-dark">
            <nav class="navbar navbar-expand-lg bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">
                  Project Management Tool
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        Link
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-white" href="#"
                      >
                        Disabled
                      </a>
                    </li>
                    <li class="nav-item ms-2 me-3">
                        <a className="nav-link text-white" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-brightness-high"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                      </svg> </a>
                    </li>
                    <li class="nav-item">
                      <Link to={"/login"}>
                        <button class="btn btn-primary">Get Started</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto text-center">
            <div className="text-white mt-5">
              <h1>Welcome to Project Management Tool</h1>
              <p>
                Manage your projects efficiently and effectively with your team.
              </p>
              <Link to={"/login"}>
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 text-white mt-5">
            <h2>Features</h2>
            <p>
              Our tool offers a variety of features to help you manage your
              projects:
            </p>
            <ul className="list-unstyled">
              <li>Task Management</li>
              <li>Team Collaboration</li>
              <li>Progress Tracking</li>
              <li>Reporting and Analytics</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 text-white mt-5">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing the best project management
              experience for teams of all sizes. Our mission is to help teams
              collaborate and achieve their goals efficiently.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 text-white mt-5 mb-5">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or would like to learn more about our
              tool, please feel free to reach out to us at-
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center text-white mt-5 mb-3">
              <p>&copy; 2025 Project Management Tool. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
