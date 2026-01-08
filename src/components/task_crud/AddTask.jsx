import React from 'react';
import Styles from "../../styles/dashboard_style.module.css";

const AddTask = ({ taskType }) => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className={`card p-3 bg-dark h-100 text-white ${Styles.addTasksCard}`}>
                        <div className={`d-flex justify-content-between ${Styles.task_title_line}`}>
                            <p className='w-75 px-2 rounded-1'>IDEA</p>
                            <p className={Styles.task_setting_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </p>
                        </div>
                        <button className={`${Styles.addTaskBtn}`}>+ Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTask