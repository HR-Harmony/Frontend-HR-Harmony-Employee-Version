// ShiftScheduling.jsx
import React from 'react';
import './ShiftScheduling.css';

const ShiftScheduling = () => {
  return (
    <div className="employees-card">
      <div className="employees-card-header">
        <h2>List All Office Shifts</h2>
        <button className="btn-add-new">Add New</button>
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
              <th>SHIFT</th>
              <th>MONDAY</th>
              <th>TUESDAY</th>
              <th>WEDNESDAY</th>
              <th>THURSDAY</th>
              <th>FRIDAY</th>
              <th>SATURDAY</th>
              <th>SUNDAY</th>
            </tr>
          </thead>
          <tbody>
            {/* Shift rows will go here */}
            <tr>
              <td>Normal Weekdays</td>
              {/* ... other days */}
              <td>Holiday</td>
            </tr>
            {/* Add more rows as needed */}
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

export default ShiftScheduling;
