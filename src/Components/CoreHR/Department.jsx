import React from 'react';
import './Department.css';

const Department = () => {
  return (
    <div className="department-container">
      <div className="department-card add-department-card">
        <h2>Add New Department</h2>
        <form>
          <label>
            Name *
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label>
            Department Head
            <select name="departmentHead">
              <option value="">Department Head</option>
              {/* Add department head options here */}
            </select>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="department-card list-department-card">
        <h2>List All Departments</h2>
        <div className="list-controls">
          <div className="entries-showing">
            Show
            <select>
              <option value="10">10</option>
              {/* Add more options if needed */}
            </select>
            entries
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>DEPARTMENT NAME</th>
              <th>DEPARTMENT HEAD</th>
              <th>CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Marketing</td>
              <td>Jane Doe</td>
              <td>09-01-2024</td>
            </tr>
            <tr>
              <td>Finance</td>
              <td>John Smith</td>
              <td>09-01-2024</td>
            </tr>
          </tbody>
        </table>
        <div className="table-navigation">
          <span>Showing 1 to 2 of 2 records</span>
          <div className="navigation-buttons">
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
