import React from 'react';
import './PerformanceIndicator.css';

const PerformanceIndicator = () => {
  return (
    <div className="PerformanceIndicator-card">
      <div className="PerformanceIndicator-header">
        <h1 className="PerformanceIndicator-title">List All Performance Indicators</h1>
        <div className="PerformanceIndicator-headerRight">
          <button className="PerformanceIndicator-btn PerformanceIndicator-btn-primary">Add New</button>
        </div>
      </div>
      <hr className="PerformanceIndicator-divider" />
      <div className="PerformanceIndicator-controls">
        <div className="PerformanceIndicator-entries">
          Show
          <select name="entries" className="PerformanceIndicator-entries-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </div>
        <div className="PerformanceIndicator-search-container">
          <input type="text" className="PerformanceIndicator-search-input" placeholder="Search" />
        </div>
      </div>
      <div className="PerformanceIndicator-body">
        <table className="PerformanceIndicator-table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DESIGNATION</th>
              <th>OVERALL RATING</th>
              <th>ADDED BY</th>
              <th>CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data row */}
            <tr>
              <td>Sample Title</td>
              <td>--</td>
              <td>⭐⭐⭐⭐ 4.0</td>
              <td>Super Admin</td>
              <td>dd-mm-yyyy</td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>
      <div className="PerformanceIndicator-footer">
        <div className="PerformanceIndicator-showing">Showing 1 to 3 of 3 records</div>
        <div className="PerformanceIndicator-pagination">
          <button className="PerformanceIndicator-btn-pagination">Previous</button>
          <button className="PerformanceIndicator-btn-pagination PerformanceIndicator-active">1</button>
          <button className="PerformanceIndicator-btn-pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceIndicator;
