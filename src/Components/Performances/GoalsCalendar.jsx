import React from 'react';
import './GoalsCalendar.css';

const GoalsCalendar = () => {
  return (
    <div className="GoalsCalendar-container">
      <div className="GoalsCalendar-header">
        <div className="GoalsCalendar-legend">
          <span className="GoalsCalendar-legend-item GoalsCalendar-not-started">Not Started</span>
          <span className="GoalsCalendar-legend-item GoalsCalendar-in-progress">In Progress</span>
          <span className="GoalsCalendar-legend-item GoalsCalendar-completed">Completed</span>
        </div>
        <div className="GoalsCalendar-navigation">
          <button className="GoalsCalendar-nav-button">{"<"}</button>
          <button className="GoalsCalendar-today-button">Hari Ini</button>
          <button className="GoalsCalendar-nav-button">{">"}</button>
        </div>
      </div>
      <div className="GoalsCalendar-calendar">
        <div className="GoalsCalendar-month-year">JANUARI 2024</div>
        <div className="GoalsCalendar-weekdays">
          <div>Sen</div>
          <div>Sel</div>
          <div>Rab</div>
          <div>Kam</div>
          <div>Jum</div>
          <div>Sab</div>
          <div>Min</div>
        </div>
        <div className="GoalsCalendar-days">
          {/* Generate day squares here */}
          {[...Array(31)].map((_, i) => (
            <div key={i} className="GoalsCalendar-day">{i + 1}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsCalendar;