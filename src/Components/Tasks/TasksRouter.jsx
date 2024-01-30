import React from 'react';
import './TasksRouter.css';
import Header from '../Header/Header';
import TasksList from './TasksList';
import TasksCalendar from './TasksCalendar';
import Projects from './Projects';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { GrTasks } from 'react-icons/gr';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";

const TasksRouter = () => {
  const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div className='tasks-navigation'>
                <div className='feature' onClick={() => navigate('/tasks/tasks-list')}>
                    <GrTasks className='icon'/>
                    <span>Tasks</span>
                </div>

                <div className='feature' onClick={() => navigate('/tasks/project')}>
                    <AiOutlineFundProjectionScreen className='icon'/>
                    <span>Projects</span>
                </div>

                <div className='feature' onClick={() => navigate('/tasks/calendar')}>
                    <FaCalendarCheck className='icon'/>
                    <span>Calendar</span>
                </div>
            </div>

            <Routes>
                <Route path='tasks-list' element = {<TasksList/>}/>
                <Route path='project' element = {<Projects/>}/>
                <Route path='calendar' element = {<TasksCalendar/>}/>
            </Routes>
        </div>
  )
}

export default TasksRouter