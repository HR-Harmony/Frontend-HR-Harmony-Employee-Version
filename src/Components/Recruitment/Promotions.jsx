import React from 'react';
import './Promotions.css';

const Promotions = () => {
  return (
    <div className='promotions-list-container'>
      <div className='promotions-list-header'>
        <h2>List All Promoted Employees</h2>
      </div>
      <div className='promotions-list-label'>
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
          <input type='search' placeholder='Search'/>
      </div>

      <div className='promotions-list-table'>
        <table>
              <thead>
                <tr>
                  <th>EMPLOYEE</th>
                  <th>PROMOTION TITLE</th>
                  <th>INTERVIEWER</th>
                  <th>PROMOTION DATE</th>
                  <th>REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {/* Candidates rows will go here */}
                <tr>
                  <td colSpan="7">No records available</td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Promotions