import React from 'react';
import './Trainers.css';

const Trainers = () => {
  return (
    <div className='trainers-container'>
      <div className='trainers-header'>
        <h2>List All Trainers</h2>
        <button>+ Add New</button>
      </div>

      <div className='trainers-label'>
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
        <input type = 'search' placeholder='Search'/>
      </div>

      <div className='trainers-table'>
        <table>
              <thead>
                <tr>
                  <th>TRAINER</th>
                  <th>CONTACT NUMBER</th>
                  <th>EMAIL</th>
                  <th>EXPERTISE</th>
                  <th>ADDED BY</th>
                </tr>
              </thead>
              <tbody>
                {/* Trainers rows will go here */}
                <tr>
                  <td colSpan="7">No records available</td>
                </tr>
              </tbody>
        </table>
      </div>
    
    </div>
  )
}

export default Trainers