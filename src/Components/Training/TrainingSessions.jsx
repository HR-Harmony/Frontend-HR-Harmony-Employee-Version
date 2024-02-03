import React from 'react';
import './TrainingSessions.css';

const TrainingSessions = () => {
  return (
    <div className='training-sessions-container'>
        <div className='training-sessions-header'>
            <h2>List All Training Sessions</h2>
            <button>+ Add New</button>
        </div>

        <div className='training-sessions-label'>
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

        <div className='training-sessions-table'>
            <table>
                <thead>
                <tr>
                    <th>TRAINING SKILL</th>
                    <th>TRAINER</th>
                    <th>START DATE</th>
                    <th>END DATE</th>
                    <th>EMPLOYEES</th>
                    <th>TRAINING COST</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                {/* Training rows will go here */}
                <tr>
                    <td colSpan="7">No records available</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TrainingSessions