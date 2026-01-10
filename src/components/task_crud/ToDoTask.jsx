import React, { useEffect, useRef, useState } from 'react';
import Styles from "../../styles/dashboard_style.module.css";
import { FaMoneyBill, FaRegCalendarAlt, FaRegUserCircle, FaRegCheckCircle } from "react-icons/fa";


const ToDoTask = () => {
  const [displayBox, setDisplayBox] = useState(false);
  const inputBoxRef = useRef(null);

  const showInputBox = () => {
    setDisplayBox(!displayBox);
  }

  // Here I am detecting the click event outside of the div box which is for adding task....
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputBoxRef.current && !inputBoxRef.current.contains(event.target)) {
        setDisplayBox(false);
      }
    };

    if (displayBox) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayBox]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className={`card p-3 bg-dark h-100 text-white ${Styles.addTasksCard}`}>
            <div className={`d-flex justify-content-between ${Styles.task_title_line}`}>
              <p className='w-75'>TO DO</p>
              <p className={Styles.task_setting_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </p>
            </div>
            {
              !displayBox &&
              <button className={`${Styles.addTaskBtn}`} onClick={showInputBox}>+ Create</button>
            }
            {!!displayBox &&
              <div className={Styles.inputBoxToAddTask} ref={inputBoxRef}>
                <input type="text" placeholder='What Needs to be Done!' className='form-control' />
                <div className='d-flex align-items-center'>
                  <span className='me-4 ms-2 fs-4'>
                    <FaMoneyBill />
                  </span>
                  <span className='me-4 fs-5'>
                    <FaRegCalendarAlt />
                  </span>
                  <span className='me-auto fs-5'>
                    <FaRegUserCircle />
                  </span>
                  <span className='me-2 fs-5'>
                    <FaRegCheckCircle />
                  </span>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoTask