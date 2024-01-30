import React, { useState, useEffect } from 'react';
import './TasksList.css';
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const TasksList = () => {
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="tasks-container">
      <div className="tasks-overview-container">
        <div className="tasks-overview-item" style={{ backgroundColor: '#8D8D8D', color: 'white' }}>
          <h3>Tasks in Progress</h3>
          <p>4</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#3D66F0', color: 'white' }}>
          <h3>Tasks Completed</h3>
          <p>4</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#5FB549', color: 'white' }}>
          <h3>Tasks On Hold</h3>
          <p>5</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#E9615C', color: 'white' }}>
          <h3>Tasks Not Started</h3>
          <p>2</p>
        </div>
      </div>

    <div className='tasks-list-header'>
      <h2>List All Tasks</h2>
      <button>+ Add New Tasks</button>
    </div>

    <div className='tasks-list-container'>
      <div className='tasks-list-card'>
        <div className='tasks-list-card-header'>
          <h2>1. Buat endpoint fitur absensi</h2>
          <h2>12-05-2024</h2>
        </div>
        <div className='tasks-list-card-body'>
          <p>buat dengan bahasa golang dan database postgree SQL</p>
          <p>Due : 12-06-2024</p>
          <div className="tasks-progress-bar-container">
            <div className="tasks-progress-bar" style={{ width: `${progress}%` }}>
              <div className="tasks-progress-text">{`${progress}%`}</div>
            </div>
          </div>
        </div>
        <div className='tasks-list-card-footer'>
          <button>Completed</button>
          <GrView className='tasks-list-card-icon'/>
          <FaEdit className='tasks-list-card-icon'/>
          <MdDeleteOutline className='tasks-list-card-icon'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TasksList