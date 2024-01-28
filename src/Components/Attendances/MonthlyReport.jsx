import React from 'react';
import './MonthlyReport.css';

const MonthlyReport = () => {
  return (
    <div className="MonthlyReport-card">
      <div className="form-group">
        <label htmlFor="employee">Employee</label>
        <select id="employee" className="form-control">
          <option value="">-- Select Employee --</option>
          {/* Add employee options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="monthSelect">Select Month</label>
        <input type="month" id="monthSelect" className="form-control" defaultValue="2024-01" />
      </div>
      <button type="submit" className="search-button">Search</button>
    </div>
  );
};

export default MonthlyReport;
