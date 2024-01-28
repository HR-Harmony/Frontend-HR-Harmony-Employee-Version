import React from 'react';
import './OvertimeRequest.css';

const OvertimeRequest = () => {
  return (
    <div className="OvertimeRequest-card">
      <div className="card-header">
        <button className="btn btn-primary">Add New</button>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
      <div className="card-body">
        <div className="table-options">
          <div className="show-entries">
            Show
            <select name="entries" className="entries-select">
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
            entries
          </div>
          <div className="table-pagination">
            Showing 1 to 7
            <button className="btn-pagination">Previous</button>
            <button className="btn-pagination active">1</button>
            <button className="btn-pagination">Next</button>
          </div>
        </div>
        <table className="table">
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
            {/* Add your dummy data here */}
            <tr>
              <td>User removed</td>
              <td>28-06-2023</td>
              <td>06:32 am</td>
              <td>09:32 am</td>
              <td>3:0</td>
              <td>Accepted</td>
            </tr>
            <tr>
              <td>User removed</td>
              <td>29-06-2023</td>
              <td>06:00 am</td>
              <td>07:00 am</td>
              <td>1:0</td>
              <td>Accepted</td>
            </tr>
            {/* ... more rows ... */}
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <button className="btn-save">Save</button>
      </div>
    </div>
  );
};

export default OvertimeRequest;
