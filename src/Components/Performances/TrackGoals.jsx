import React from 'react';
import './TrackGoals.css';

const TrackGoals = () => {
  return (
    <div className="TrackGoals-card">
      <div className="TrackGoals-header">
        <h1 className="TrackGoals-title">List All Track Goals (OKRs)</h1>
        <div className="TrackGoals-headerRight">
          <button className="TrackGoals-btn TrackGoals-btn-primary">Add New</button>
        </div>
      </div>
      <hr className="TrackGoals-divider" />
      <div className="TrackGoals-controls">
        <div className="TrackGoals-entries">
          Show
          <select name="entries" className="TrackGoals-entries-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </div>
        <div className="TrackGoals-search-container">
          <input type="text" className="TrackGoals-search-input" placeholder="Search" />
        </div>
      </div>
      <div className="TrackGoals-body">
        <table className="TrackGoals-table">
          <thead>
            <tr>
              <th>GOAL TYPE</th>
              <th>SUBJECT</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>GOAL RATING</th>
              <th>PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>Talent Acquisition</td>
              <td>Gas Poll</td>
              <td>03-01-2023</td>
              <td>31-01-2023</td>
              <td>⭐⭐⭐⭐⭐ 5</td>
              <td>
                <div className="TrackGoals-progressBar">
                  <div className="TrackGoals-progress" style={{ width: '100%' }}></div>
                </div>
              </td>
            </tr>
            {/* More dummy rows */}
          </tbody>
        </table>
      </div>
      <div className="TrackGoals-footer">
        <div className="TrackGoals-showing">Showing 1 to X of X records</div>
        <div className="TrackGoals-pagination">
          <button className="TrackGoals-btn-pagination">Previous</button>
          <button className="TrackGoals-btn-pagination TrackGoals-active">1</button>
          <button className="TrackGoals-btn-pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TrackGoals;