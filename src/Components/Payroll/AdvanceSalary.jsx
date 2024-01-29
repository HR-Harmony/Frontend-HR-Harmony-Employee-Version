import React from 'react';
import './AdvanceSalary.css';

const AdvanceSalary = () => {
  return (
    <div className='advance-salary-container'>
      <div className='advance-salary-label'>
      Show
          <label>
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              </select>
          </label>
        entries  
        <button>+ Add new</button>
      </div>
      <div className='advance-salary-table'>
      <table>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>AMOUNT</th>
              <th>MONTH & YEAR</th>
              <th>ONE TIME DEDUCT</th>
              <th>CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {/* Employee rows will go here */}
            <tr>
              <td colSpan="7">No records available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdvanceSalary;