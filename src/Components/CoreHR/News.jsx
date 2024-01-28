import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="News-card">
      <div className="News-header">
        <span>List All Announcements</span>
        <button className="News-add-button">+ Add New</button>
      </div>
      <div className="News-controls">
        <label>
          Show
          <select className="News-show-entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </label>
        <input className="News-search" type="text" placeholder="Search:" />
      </div>
      <table className="News-table">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>DEPARTMENT</th>
            <th>START DATE</th>
            <th>END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gathering</td>
            <td>HR</td>
            <td>18-08-2023</td>
            <td>19-08-2023</td>
          </tr>
          <tr>
            <td>Hari Minggu kita Party</td>
            <td>Marketing</td>
            <td>07-04-2023</td>
            <td>29-04-2023</td>
          </tr>
          {/* Add your dummy data here */}
        </tbody>
      </table>
      <div className="News-footer">
        <span className="News-status">Showing 1 to 2 of 2 entries</span>
        <div className="News-pagination">
          <button className="News-page-button">Previous</button>
          <span className="News-page-number">1</span>
          <button className="News-page-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default News;
