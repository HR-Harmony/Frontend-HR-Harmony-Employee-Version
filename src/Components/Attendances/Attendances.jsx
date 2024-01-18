import React from 'react';
import { FaCalendar, FaUserClock, FaClipboardList, FaClock } from 'react-icons/fa';
import './Attendances.css';
import Header from '../Header/Header';

const Attendances = () => {

  const tableData = [
    { name: 'Fakhrity', absentStatus: 'Present', clockIn: '09:00 AM', clockOut: '05:00 PM', late: '0 minutes', earlyLeaving: '0 minutes', totalWorkHours: '8 hours' },
  ];

  return (
    <div>
      <Header />
      <div className="attendances-container">
        <div className="feature">
          <FaCalendar className="icon" />
          <span>Attendances</span>
        </div>
      
        <div className="feature">
          <FaUserClock className="icon" />
          <span>Manual Attendances</span>
        </div>
        
        <div className="feature">
          <FaClipboardList className="icon" />
          <span>Monthly Report</span>
        </div>
      
        <div className="feature">
          <FaClock className="icon" />
          <span>Overtime Request</span>
        </div>
      </div>
      <div>
          <h1>Daily Attendances Report</h1>
        </div>
      <div className="table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Absent Status</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Late</th>
              <th>Early Leaving</th>
              <th>Total Work Hours</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.absentStatus}</td>
                <td>{entry.clockIn}</td>
                <td>{entry.clockOut}</td>
                <td>{entry.late}</td>
                <td>{entry.earlyLeaving}</td>
                <td>{entry.totalWorkHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendances;
