import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "../../styles/dashboard_style.module.css";
import AddTask from '../task_crud/AddTask';
import ToDoTask from '../task_crud/ToDoTask';

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <h3><b>My Team Name</b></h3>
          </div>
          <div className="col-lg-3">
            <nav class="nav">
              <Link className="nav-link text-dark" aria-current="page" href="#">Active</Link>
              <Link className="nav-link text-dark" to="/profile">Profile</Link>
              <Link className="nav-link text-dark" href="#">Link</Link>
            </nav>
          </div>
        </div>
        <div className={`row mb-3 g-0 ${Styles.tabs_row}`}>
          <div className="col-12">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <Link class="nav-link text-dark" to={'/'}>
                  <b>Summary</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" href="#">
                  <b>Taks</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" to="#">
                  <b>Team</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`row ${Styles.task_category_row}`}>
          <div className="col-lg-4 ">
            <AddTask />
          </div>
          <div className="col-lg-4">
            <ToDoTask />
          </div>
          <div className="col-lg-4">
            <div className="card p-3 bg-dark h-75 text-white">
              <div className={`d-flex justify-content-between`}>
                <p className='w-75'>IN PROGRESS</p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </p>
              </div>
              <h3>Tasks</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 bg-dark h-75 text-white">
              <div className={`d-flex justify-content-between`}>
                <p className='w-75'>TESTING</p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </p>
              </div>
              <h3>Tasks</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 bg-dark h-75 text-white">
              <div className={`d-flex justify-content-between`}>
                <p className='w-75'>DONE</p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </p>
              </div>
              <h3>Tasks</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard