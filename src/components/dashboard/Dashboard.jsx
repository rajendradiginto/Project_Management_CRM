import React from 'react'
import { Link } from 'react-router-dom'

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
              <Link className="nav-link text-dark" href="#">Link</Link>
              <Link className="nav-link text-dark" href="#">Link</Link>
            </nav>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card p-3 bg-dark text-white">
              <h3>Tasks</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 bg-dark text-white">
              <h3>Tasks</h3>
              <p>Coming Soon......</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 bg-dark text-white">
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