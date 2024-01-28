import React from 'react';
import './ManualAttendances.css';

const ManualAttendances = () => {
  return (
    <div className="ManualAttendances-container">
      <div className="ManualAttendances-card ManualAttendances-filter-card">
        <h2>Filter Attendance</h2>
        <form>
          <label>
            Date
            <input type="date" name="date" />
          </label>
          <label>
            Employee
            <select name="employee">
              {/* Option elements for employees */}
            </select>
          </label>
          <button type="submit">Filter</button>
        </form>
      </div>
      <div className="ManualAttendances-card ManualAttendances-view-card">
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
              <th>EMPLOYEE</th>
              <th>DATE</th>
              <th>IN TIME</th>
              <th>OUT TIME</th>
              <th>TOTAL WORK</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Fakhrity H</td>
              <td>2024-01-28</td>
              <td>08:00</td>
              <td>17:00</td>
              <td>9h</td>
            </tr>
            <tr>
              <td>Arfara Y</td>
              <td>2024-01-28</td>
              <td>09:00</td>
              <td>18:00</td>
              <td>8h</td>
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

export default ManualAttendances;
