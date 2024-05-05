// AttendancesRouter.jsx
import React from 'react';
import './AttendancesRouter.css';
import { FaCalendar, FaUserClock, FaClipboardList, FaClock } from 'react-icons/fa';
import './AttendanceList';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AttendanceList from './AttendanceList';
import OvertimeRequest from './OvertimeRequest';
import Header from '../Header/Header';

const AttendancesRouter = () => {
  const navigate = useNavigate();
    return (
      <div>
        <Header />
        <div className="attendances-container">
          <div className="feature" onClick={() => navigate('/attendances/attendance-list')}>
              <FaCalendar className="icon" />
              <span>Attendances</span>
            </div>
          
            <div className="feature" onClick={() => navigate('/attendances/overtime-request')}>
              <FaClock className="icon" />
              <span>Overtime Request</span>
            </div>
          </div>

          <Routes>
              <Route path="attendance-list" element={< AttendanceList />} />
              <Route path="overtime-request" element={< OvertimeRequest />} />
          </Routes>

        </div>
    );
  };
  
export default AttendancesRouter;
