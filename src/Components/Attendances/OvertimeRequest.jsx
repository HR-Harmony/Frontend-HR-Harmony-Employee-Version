import React from 'react';
import './OvertimeRequest.css';

const OvertimeRequest = () => {
  return (
    <div className="OvertimeRequest-card">
      <div className="OvertimeRequest-header">
        <h1 className="OvertimeRequest-title">Overtime Request</h1>
        <div className="OvertimeRequest-headerRight">
          <button className="OvertimeRequest-btn OvertimeRequest-btn-primary">Add New</button>
        </div>
      </div>
      <hr className="OvertimeRequest-divider" />
      <div className="OvertimeRequest-controls">
        <div className="OvertimeRequest-entries">
          Show
          <select name="entries" className="OvertimeRequest-entries-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </div>
        <div className="OvertimeRequest-search-container">
          <input type="text" className="OvertimeRequest-search-input" placeholder="Search" />
        </div>
      </div>
      <div className="OvertimeRequest-body">
        <table className="OvertimeRequest-table">
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
            {/* Dummy data row 1 */}
            <tr>
              <td>User removed</td>
              <td>28-06-2023</td>
              <td>06:32 am</td>
              <td>09:32 am</td>
              <td>3:0</td>
              <td>Accepted</td>
            </tr>
            {/* Dummy data row 2 */}
            <tr>
              <td>User removed</td>
              <td>29-06-2023</td>
              <td>06:00 am</td>
              <td>07:00 am</td>
              <td>1:0</td>
              <td>Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="OvertimeRequest-footer">
        <div className="OvertimeRequest-showing">Showing 1 to 2 of 10 records</div>
        <div className="OvertimeRequest-pagination">
          <button className="OvertimeRequest-btn-pagination">Previous</button>
          <button className="OvertimeRequest-btn-pagination OvertimeRequest-active">1</button>
          <button className="OvertimeRequest-btn-pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OvertimeRequest;