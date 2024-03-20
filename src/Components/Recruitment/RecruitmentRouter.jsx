import React from 'react';
import "./RecruitmentRouter.css";
import Header from '../Header/Header';
import NewOpening from './NewOpening';
import Candidates from './Candidates';
import Interviews from './Interviews';
import Promotions from './Promotions';
import EditJobs from './EditJobs';
import JobDetails from './JobDetails';
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { VscRunAbove } from "react-icons/vsc";
import { Route, Routes, useNavigate } from 'react-router-dom';

const RecruitmentRouter = () => {
const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div className='recruitment-navigation'>
                <div className='feature' onClick={() => navigate('/recruitment/new-opening')}>
                    <FaEnvelopeOpenText className='icon'/>
                    <span>New Opening</span>
                </div>

                <div className='feature' onClick={() => navigate('/recruitment/candidates')}>
                    <IoIosPeople className='icon'/>
                    <span>Candidates</span>
                </div>

                <div className='feature' onClick={() => navigate('/recruitment/interviews')}>
                    <BiConversation className='icon'/>
                    <span>Interviews</span>
                </div>

                <div className='feature' onClick={() => navigate('/recruitment/promotions')}>
                    <VscRunAbove className='icon'/>
                    <span>Promotions</span>
                </div>
            </div>
            <Routes>
                <Route path="new-opening" element = {< NewOpening />}/>
                <Route path="candidates" element = {< Candidates />}/>
                <Route path="interviews" element = {< Interviews />}/>
                <Route path="promotions" element = {< Promotions />}/>
                <Route path="edit-job/:id" element = {<EditJobs/>}/>
                <Route path="job-details/:id" element = {<JobDetails/>}/>
            </Routes>
        </div>
        )
}

export default RecruitmentRouter