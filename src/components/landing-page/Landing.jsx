import { Link } from "react-router-dom";
import landingimg from "../../assets/Images/taskmanagementblur.jpg";
import scattered from "../../assets/Images/scattered.png";
import missdeadlines from "../../assets/Images/missdeadlines.png";
import visibility from "../../assets/Images/visibility.png";
import student from "../../assets/Images/student.png";
import developers from "../../assets/Images/developers.png";
import teams from "../../assets/Images/teams.png";
import manager from "../../assets/Images/manager.png";
import productivity from "../../assets/Images/productivity.png";
import deadline from "../../assets/Images/deadline.png";
import collaboration from "../../assets/Images/collaboration.png";
import ease from "../../assets/Images/ease.png";

const Landing = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Project Management App
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-disabled="true">
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 ms-5 justify-content-center d-flex flex-column">
            <h1>Manage Projects. Track Progress. Deliver Faster.</h1>
            <p>A simple project management tool for teams and individuals.</p>
            <Link to={'/login'}>
            <button className="btn btn-primary w-25">Get Started</button>
            </Link>
          </div>
          <div className="col-lg-5 ms-5">
            <img
              src={landingimg}
              alt="Project Management"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-12 text-center">
            <h2>Chaos to Clarity</h2>
            <p>All your tasks, deadlines & team communication in one place.</p>
          </div>
          <div className="row justify-content-center text-center mt-3 mb-5">
            <div className="col-lg-3">
              <img src={scattered} alt="Scattered Tasks" />
              <h3>Scattered Tasks</h3>
              <p>No more messy notes & chats.</p>
            </div>
            <div className="col-lg-3">
              <img src={missdeadlines} alt="Missed Deadlines" />
              <h3>Missed Deadlines</h3>
              <p>Stay on track with ease.</p>
            </div>
            <div className="col-lg-3">
              <img src={visibility} alt="No Visibility" />
              <h3>No Visibility</h3>
              <p>See who's doing what.</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 justify-content-center text-center mx-auto">
            <h2>Core Feature</h2>
          </div>
          <div className="row justify-content-center text-center mt-3">
            <div className="col-lg-3">
              <div className="card">
                <h4>Task Management</h4>
                <p>Organize & prioritize tasks.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h4>Team Collaboration</h4>
                <p>Assign & communicate.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h4>Progress Tracking</h4>
                <p>Monitor project milestones.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h4>Secure Access</h4>
                <p>Safe & reliable login.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 justify-content-center text-center mx-auto">
            <h2>How It Works</h2>
          </div>
          <div className="row justify-content-center text-center mt-3">
            <div className="col-lg-3">
              <div className="card">
                <h5>1. Sign Up/Sign In ></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h5>2. Create a Project ></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h5>3. Add Tasks & Team ></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h5>4. Track Progress ></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 justify-content-center text-center mx-auto">
            <h2>Who Is It For?</h2>
          </div>
          <div className="row justify-content-center text-center mt-3">
            <div className="col-lg-3">
              <img src={student} alt="Student Image" height={150} />
              <p>Students</p>
            </div>
            <div className="col-lg-3">
              <img src={developers} alt="Developers Image" height={150} />
              <p>Developers</p>
            </div>
            <div className="col-lg-3">
              <img src={teams} alt="Teams Image" height={150} />
              <p>Small Teams</p>
            </div>

            <div className="col-lg-3">
              <img src={manager} alt="Managers Image" height={150} />
              <p>Project Managers</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 justify-content-center text-center mx-auto">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="row justify-content-center text-center mt-3">
            <div className="col-lg-3">
              <img src={productivity} alt="Boost Productivity" height={130} />
              <p>Boost Productivity</p>
            </div>
            <div className="col-lg-3">
              <img src={deadline} alt="Never Miss Deadlines" height={130} />
              <p>Never Miss Deadlines</p>
            </div>
            <div className="col-lg-3">
              <img src={collaboration} alt="Better Collaboration" height={130} />
              <p>Better Collaboration</p>
            </div>
            <div className="col-lg-3">
              <img src={ease} alt="Easy to Use" height={130} />
              <p>Easy to Use</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center justify-content-center mx-auto">
            <h3>Ready to Get Started?</h3>
            <p>Sign up today and take control of your projects!</p>
          </div>
          <div className="col-lg-6 text-center justify-content-center mx-auto mb-5">
            <Link to={'/login'}>
            <button className="btn btn-primary btn-lg">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center p-3">
            <p>&copy; 2025 Project Management App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
