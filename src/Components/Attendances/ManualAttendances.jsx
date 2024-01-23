import React from 'react';
import './ManualAttendances.css';

const ManualAttendances = () => {
  const tableData = [
    { name: 'Fakhrity', date: '2024-01-24', clockIn: '09:00 AM', clockOut: '05:00 PM', totalWork: '8 hours' },
  ];

  return (
    <div>
      <div className="filter-section">
        <h2>Filter Attendance</h2>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="employee">Employee</label>
        <select id="employee" name="employee">

        </select>
        <button>Filter</button>
      </div>
      <div className="attendance-table">
        <h2>View Attendance</h2>
        <table>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>DATE</th>
              <th>IN TIME</th>
              <th>OUT TIME</th>
              <th>TOTAL WORK</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.clockIn}</td>
                <td>{data.clockOut}</td>
                <td>{data.totalWork}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-new-button">+ Add New</button>
    </div>
  );
};

export default ManualAttendances;
