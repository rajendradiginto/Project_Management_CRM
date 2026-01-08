import React from 'react'

const ToDoTask = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card p-3 bg-dark h-100 text-white">
            <div className={`d-flex justify-content-between`}>
              <p className='w-75'>TO DO</p>
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
    </>
  )
}

export default ToDoTask