import React from 'react';
import './TrainingRouter.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import TrainingSessions from './TrainingSessions';
import TrainingDetails from './TrainingDetails';
import { IoBookSharp } from "react-icons/io5";


const TrainingRouter = () => {
    const navigate = useNavigate();
        return (
            <div>
                <Header/>
                <div className='training-navigation'>
                    <div className='feature' onClick={() => navigate ('/training/training-sessions')}>
                        <IoBookSharp className='icon'/>
                        <span>Training Sessions</span>
                    </div>
                </div>
                <Routes>
                    <Route path = 'training-sessions' element = { <TrainingSessions/> }/>
                    <Route path = 'training-details/:id' element = {<TrainingDetails/>}/>
                </Routes>
            </div>
        )
}

export default TrainingRouter