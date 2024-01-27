import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { FaCalendar, FaUserClock, FaClipboardList, FaClock } from 'react-icons/fa';
import './CoreHRRouter.css';
import Department from './Department';
import Designation from './Designation';
import Policies from './Policies';
import News from './News';
import Chart from './Chart';
import Header from '../Header/Header';

const CoreHRRouter = () => {
  const navigate = useNavigate();
    return (
      <div>
        <Header /> 
        <div className="corehr-container">
          <div className="feature" onClick={() => navigate('/corehr/departments-list')}>
              <FaCalendar className="icon" />
              <span>Department</span>
            </div>
          
            <div className="feature" onClick={() => navigate('/corehr/designation-list')}>
              <FaUserClock className="icon" />
              <span>Designation</span>
            </div>
            
            <div className="feature" onClick={() => navigate('/corehr/policies-list')}>
              <FaClipboardList className="icon" />
              <span>Policies</span>
            </div>
          
            <div className="feature" onClick={() => navigate('/corehr/news-list')}>
              <FaClock className="icon" />
              <span>News & Announcement</span>
            </div>

            <div className="feature" onClick={() => navigate('/corehr/chart')}>
              <FaClock className="icon" />
              <span>Organization Chart</span>
            </div>
          </div>

          <Routes>
              <Route path="departments-list" element={< Department />} />
              <Route path="designation-list" element={< Designation />} />
              <Route path="policies-list" element={< Policies />} />
              <Route path="news-list" element={< News />} />
              <Route path="chart" element={< Chart />} />
          </Routes>

        </div>
    );
  };

export default CoreHRRouter;