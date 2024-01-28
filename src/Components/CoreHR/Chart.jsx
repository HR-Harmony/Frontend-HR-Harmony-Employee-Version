import React from 'react';
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart-container">
      <h1>Organization Chart</h1>
      <div className="chart-box">
        <div className="chart-node">
          <div className="chart-title">Super Admin</div>
          <div className="chart-subtitle">Fotokopi Group</div>
          <img src="path-to-your-image.jpg" alt="Super Admin" className="chart-image"/>
        </div>
      </div>
      <button className="chart-export-button">Export</button>
    </div>
  );
};

export default Chart;
