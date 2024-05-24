import React from 'react';
import './LeaveRouter.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import ManageLeaves from './ManageLeaves';
import { IoBookSharp } from "react-icons/io5";

const LeaveRouter = () => {
    const navigate = useNavigate();
        return (
            <div>
                <Header/>
                <div className='leave-navigation'>
                    <div className='feature' onClick={() => navigate ('/leave/manage-leave')}>
                        <IoBookSharp className='icon'/>
                        <span>Manage Leaves</span>
                    </div>
                </div>
                <Routes>
                    <Route path = 'manage-leave' element = { <ManageLeaves/> }/>
                </Routes>
            </div>
        )
}

export default LeaveRouter