import React from 'react';
import './GoalType.css';

const GoalType = () => {
  return (
    <div className="goaltype-container">
      <div className="goaltype-card add-goaltype-card">
        <h2>Add New Goal Type</h2>
        <form>
          <label>
            Goal Type *
            <input type="text" name="goalType" placeholder="Goal Type" />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="goaltype-card list-goaltype-card">
        <h2>List All Goal Types</h2>
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
              <th>GOAL TYPE</th>
              <th>CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Boost Company culture</td>
              <td>15-05-2021</td>
            </tr>
            <tr>
              <td>Revamp Employee experience</td>
              <td>15-05-2021</td>
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

export default GoalType;
