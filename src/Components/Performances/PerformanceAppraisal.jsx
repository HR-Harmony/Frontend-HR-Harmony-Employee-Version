import React from 'react';
import './PerformanceAppraisal.css';

const PerformanceAppraisal = () => {
  return (
    <div className="PerformanceAppraisal-card">
      <div className="PerformanceAppraisal-header">
        <h1 className="PerformanceAppraisal-title">List All Performance Appraisal</h1>
        <div className="PerformanceAppraisal-headerRight">
          <button className="PerformanceAppraisal-btn PerformanceAppraisal-btn-primary">Add New</button>
        </div>
      </div>
      <hr className="PerformanceAppraisal-divider" />
      <div className="PerformanceAppraisal-controls">
        <div className="PerformanceAppraisal-entries">
          Show
          <select name="entries" className="PerformanceAppraisal-entries-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </div>
        <div className="PerformanceAppraisal-search-container">
          <input type="text" className="PerformanceAppraisal-search-input" placeholder="Search" />
        </div>
      </div>
      <div className="PerformanceAppraisal-body">
        <table className="PerformanceAppraisal-table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>EMPLOYEE</th>
              <th>APPRAISAL DATE</th>
              <th>ADDED BY</th>
              <th>OVERALL RATING</th>
              <th>CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Sample Title</td>
              <td>--</td>
              <td>mm-yyyy</td>
              <td>Super Admin</td>
              <td>⭐⭐⭐⭐ 4.0</td>
              <td>dd-mm-yyyy</td>
            </tr>
            {/* More dummy rows */}
          </tbody>
        </table>
      </div>
      <div className="PerformanceAppraisal-footer">
        <div className="PerformanceAppraisal-showing">Showing 1 to X of X records</div>
        <div className="PerformanceAppraisal-pagination">
          <button className="PerformanceAppraisal-btn-pagination">Previous</button>
          <button className="PerformanceAppraisal-btn-pagination PerformanceAppraisal-active">1</button>
          <button className="PerformanceAppraisal-btn-pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAppraisal;
