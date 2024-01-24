import React from 'react';
import './OvertimeRequest.css';

const OvertimeRequest = () => {
    const tableData = [
      { name: 'Fakhrity', date: '2024-01-24', clockIn: '09:00 AM', clockOut: '05:00 PM', totalHours: '8 hours', status:'Accepted' },
    ];
  return (
    <div>
      <div className="overtime-request">
        <div className="overtime-request-header">
          <h2>Overtime Request</h2>
          <button className="add-new-button">+ Add New</button>
        </div>

        <div className='search-bar'>
          <input type="text" placeholder="Search Employee" />
        </div>
        
        <div className="overtime-request-table">
        <table>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>DATE</th>
              <th>IN TIME</th>
              <th>OUT TIME</th>
              <th>TOTAL HOURS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.clockIn}</td>
                <td>{data.clockOut}</td>
                <td>{data.totalHours}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    );
};

export default OvertimeRequest;
