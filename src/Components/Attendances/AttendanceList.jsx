import React from 'react';
import './AttendanceList.css';

const AttendanceList = () => {
  return (
    <div className="AttendanceList-card">
      <h2>Daily Attendance Report</h2>
      <div className="AttendanceList-controls">
        <div className="AttendanceList-entries">
          Show <select><option value="10">10</option></select> entries
        </div>
        <div className="AttendanceList-search">
          Search <input type="text" />
        </div>
      </div>
      <table className="AttendanceList-table">
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>CLOCK IN</th>
            <th>CLOCK OUT</th>
            <th>LATE</th>
            <th>EARLY LEAVING</th>
            <th>TOTAL WORK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fakhrity H</td>
            <td>2024-01-29</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>No</td>
            <td>No</td>
            <td>8h</td>
          </tr>
          <tr>
            <td>Arfara Y</td>
            <td>2024-01-29</td>
            <td>Present</td>
            <td>09:15 AM</td>
            <td>05:15 PM</td>
            <td>Yes</td>
            <td>No</td>
            <td>8h</td>
          </tr>
        </tbody>
      </table>
      <div className="AttendanceList-footer">
        <div className="AttendanceList-showing">
          Showing 1 to 2 of 2 entries
        </div>
        <div className="AttendanceList-pagination">
          <button>Previous</button>
          <span>1</span>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
