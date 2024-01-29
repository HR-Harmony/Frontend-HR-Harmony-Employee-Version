import React from 'react';
import './TasksList.css';
import { FaCheckDouble } from "react-icons/fa";

const TasksList = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-overview-container">
        <div className="tasks-overview-item" style={{ backgroundColor: '#8D8D8D', color: 'white' }}>
          <h3>Tasks in Progress</h3>
          <p>4</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#3D66F0', color: 'white' }}>
          <h3>Tasks in Progress</h3>
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
    </div>
  )
}

export default TasksList