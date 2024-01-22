import React from 'react';
import { FaCalendar, FaUserClock, FaClipboardList, FaClock } from 'react-icons/fa';
import './Attendances.css';
import Header from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ManualAttendances from './ManualAttendances';
import MonthlyReport from './MonthlyReport';
import OvertimeRequest from './OvertimeRequest';
import Attendances from './Attendances';

const AttendancesRouter = () => {
  const navigate = useNavigate();
    return (
      <div>
        
        <Header />

        <div className="attendances-container">
        <div className="feature" onClick={() => navigate('/attendances')}>
            <FaCalendar className="icon" />
            <span>Attendances</span>
          </div>
        
          <div className="feature" onClick={() => navigate('/attendances/manual-attendances')}>
            <FaUserClock className="icon" />
            <span>Manual Attendances</span>
          </div>
          
          <div className="feature" onClick={() => navigate('/attendances/monthly-report')}>
            <FaClipboardList className="icon" />
            <span>Monthly Report</span>
          </div>
        
          <div className="feature" onClick={() => navigate('/attendances/overtime-request')}>
            <FaClock className="icon" />
            <span>Overtime Request</span>
          </div>
        </div>

        <Routes>
            <Route path="attendances" element={<Attendances />} />
            <Route path="manual-attendances" element={<ManualAttendances />} />
            <Route path="monthly-report" element={<MonthlyReport />} />
            <Route path="overtime-request" element={<OvertimeRequest />} />
        </Routes>

      </div>
    );
  };
  
  export default AttendancesRouter;
  