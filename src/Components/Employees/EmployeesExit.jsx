// EmployeesExit.jsx
import React from 'react';
import './EmployeesExit.css';

const EmployeesExit = () => {
  return (
    <div className="employees-card">
      <div className="employees-card-header">
        <h2>List All Employee Exit</h2>
        <div>
          <button className="btn-exit-type">Exit Type</button>
          <button className="btn-add-new">Add New</button>
        </div>
      </div>
      <div className="employees-card-body">
        <div className="table-controls">
          <label>
            Show
            <select>
              <option value="10">10</option>
              {/* ... other options */}
            </select>
            entries
          </label>
          <input type="search" placeholder="Search" />
        </div>
        <table>
          <thead>
            <tr>
              <th>EMPLOYEE TO EXIT</th>
              <th>EXIT TYPE</th>
              <th>EXIT DATE</th>
              <th>EXIT INTERVIEW</th>
              <th>DISABLE ACCOUNT</th>
            </tr>
          </thead>
          <tbody>
            {/* Employee exit rows will go here */}
            <tr>
              <td>User removed</td>
              <td>Habis Kontrak</td>
              <td>28-04-2023</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            {/* ... more rows */}
          </tbody>
        </table>
        <div className="table-pagination">
          <button>Previous</button>
          {/* Page numbers */}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeesExit;
