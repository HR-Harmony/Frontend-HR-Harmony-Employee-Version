import React from 'react';
import './Interviews.css';

const Interviews = () => {
  return (
    <div className='interviews-list-container'>
      <div className='interviews-list-header'>
        <h2>List All Interviews</h2>
      </div>
      <div className='interviews-list-label'>
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

      <div className='interviews-list-table'>
        <table>
              <thead>
                <tr>
                  <th>JOB TITLE</th>
                  <th>SELECTED CANDIDATE</th>
                  <th>PLACE OF ITERVIEW</th>
                  <th>INTERVIEWER</th>
                  <th>STATUS</th>
                  <th>CREATED AT</th>
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

export default Interviews