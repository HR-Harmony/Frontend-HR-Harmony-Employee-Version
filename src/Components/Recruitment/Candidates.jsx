import React from 'react';
import './Candidates.css';

const Candidates = () => {
  return (
    <div className='candidates-list-container'>
      <div className='candidates-list-header'>
        <h2>List All Candidates</h2>
      </div>
      <div className='candidates-list-label'>
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

      <div className='candidates-list-table'>
        <table>
            <thead>
              <tr>
                <th>JOB TITLE</th>
                <th>CANDIDATE NAME</th>
                <th>EMAIL</th>
                <th>STATUS</th>
                <th>CV</th>
                <th>APPLY DATE</th>
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

export default Candidates