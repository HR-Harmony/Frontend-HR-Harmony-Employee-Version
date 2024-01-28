import React from 'react';
import './RolesPrivileges.css';

const RolesPrivileges = () => {
  return (
    <div className="employees-card">
      <div className="employees-card-header">
        <h2>List All Roles</h2>
        <button className="btn-add-new">Add New</button>
      </div>
      <div className="employees-card-body">
        <div className="table-controls">
          <label>
            Show
            <select>
              <option value="10">10</option>
              {/* other options */}
            </select>
            entries
          </label>
          <input type="search" placeholder="Search" />
        </div>
        <table>
          <thead>
            <tr>
              <th>ROLE NAME</th>
              <th>MENU PERMISSION</th>
              <th>ADDED DATE</th>
            </tr>
          </thead>
          <tbody>
            {/* Roles rows will go here */}
            {/* Example row */}
            <tr>
              <td>Admin & Log</td>
              <td>All Menu Access</td>
              <td>07-08-2023</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div className="table-pagination">
          {/* Pagination controls */}
          <button>Previous</button>
          {/* Page numbers */}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default RolesPrivileges;
