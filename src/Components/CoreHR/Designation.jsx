import React from 'react';
import './Designation.css';

const Designation = () => {
  return (
    <div className="designation-container">
      <div className="designation-card add-designation-card">
        <h2>Add New Designation</h2>
        <form>
          <label>
            Department *
            <select name="department">
              <option value="">Department</option>
              {/* Add department options here */}
            </select>
          </label>
          <label>
            Designation Name *
            <input type="text" name="designationName" placeholder="Designation Name" />
          </label>
          <label>
            Description
            <textarea name="description" placeholder="Description"></textarea>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="designation-card list-designation-card">
        <h2>List All Designations</h2>
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
              <th>DESIGNATION</th>
              <th>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Junior Developer</td>
              <td>IT</td>
            </tr>
            <tr>
              <td>Senior Designer</td>
              <td>Creative</td>
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

export default Designation;

