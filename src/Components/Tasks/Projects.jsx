import React, { useState, useEffect} from 'react';
import './Projects.css';
import { GrView } from 'react-icons/gr';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Projects = () => {
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
    <div className='projects-container'>
      <div className='projects-overview-container'>
        <div className='projects-overview-item' style={{backgroundColor:'#8763E9', color:'white'}}>
          <h3>Projects in Progress</h3>
          <p>4</p>
        </div>
        <div className='projects-overview-item' style={{backgroundColor:'#8763E9', color:'white'}}>
          <h3>Projects Completed</h3>
          <p>2</p>
        </div>
        <div className='projects-overview-item' style={{backgroundColor:'#8763E9', color:'white'}}>
          <h3>Projects On Hold</h3>
          <p>1</p>
        </div>
        <div className='projects-overview-item' style={{backgroundColor:'#8763E9', color:'white'}}>
          <h3>Projects Not Started</h3>
          <p>3</p>
        </div>
      </div>

      <div className='project-list-header'>
        <h2>List All Projects</h2>
        <button>+ Add New Project</button>
      </div>

      <div className='project-list-container'>
        <div className='project-list-card'>
          <div className='project-list-card-header'>
            <h2>1. HR Harmony Project</h2>
            <h2>12-12-2023</h2>
          </div>

          <div className='prject-list-card-body'>
            <p>AYO KELARIN CUK</p>
            <p>Due : 12-06-2024</p>
            <div className="project-progress-bar-container">
                <div className="project-progress-bar" style={{ width: `${progress}%` }}>
                <div className="project-progress-text">{`${progress}%`}</div>
              </div>
            </div> 
          </div>

          <div className='project-list-card-footer'>
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

export default Projects