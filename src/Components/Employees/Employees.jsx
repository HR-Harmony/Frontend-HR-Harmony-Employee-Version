// Employees.jsx
import React from 'react';
import './Employees.css';

const Employees = () => {
  return (
    <div className="employees-card">
      <div className="employees-card-header">
        <h2>List All Employees</h2>
        <button className="btn-add-new">Add New</button>
      </div>
      <div className="employees-card-body">
        <div className="table-controls">
          <label>
            Show
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
          <input type="search" placeholder="Search" />
        </div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESIGNATION</th>
              <th>CONTACT NUMBER</th>
              <th>GENDER</th>
              <th>COUNTRY</th>
              <th>ROLE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Employee rows will go here */}
            <tr>
              <td colSpan="7">No records available</td>
            </tr>
          </tbody>
        </table>
        <div className="table-pagination">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Employees;
