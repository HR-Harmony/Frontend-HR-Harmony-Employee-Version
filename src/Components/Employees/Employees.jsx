import React from 'react';
import './Employees.css';
import Header from '../Header/Header';

const Employees = () => {
  return (
    <div>
    <Header />
    <div className="employees-container">
      <div className="sub-features">
        <button className="sub-feature-button">Employees</button>
        <button className="sub-feature-button">Roles & Privileges</button>
        <button className="sub-feature-button">Shift & Scheduling</button>
        <button className="sub-feature-button">Employees Exit</button>
      </div>
      <div className="employee-list-container">
        <div className="employee-list-header">
          <h2>List All Employees</h2>
          <button className="add-new-button">+ Add New</button>
        </div>
        {/* Add table or list component here */}
      </div>
    </div>
    </div>
  );
};

export default Employees;