import React from 'react';
import './MonthlyReport.css';

const MonthlyReport = () => {
  return (
    <div>
      <div className="monthly-report-heading">
        <h2>Monthly Reports</h2>
      </div>
      <div className='input-box'>
        <label htmlFor="employee">Employee</label>
        <select id="employee" name="employee">
        </select>  
        <label htmlFor="month">Month</label>
        <input type="month" id="month" name="month" />
        <button>Show</button>
      </div> 
    </div>
    );
};

export default MonthlyReport;
