import React from 'react';
import './TrainingSkills.css';

const TrainingSkills = () => {
  return (
    <div className='training-skills-container'>
      <div className='training-skills-add-new'>
        <div className='training-skills-add-new-header'>
          <h2>Add New Training Skills</h2>
        </div>
        <div className='training-skills-add-new-body'>
          <h2>Training skill</h2>
          <input placeholder='Training Skill'/>
        </div>
        <div className='training-skills-add-new-footer'>
          <button>Save</button>
        </div>
      </div>

      <div className='training-skills-list'>
        <div className='training-skills-list-header'>
          <h2>List All Training Skills</h2>
        </div>

        <div className='training-skills-list-label'>
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
        
        <div className='training-skills-table'>
          <table>
              <thead>
                <tr>
                  <th>TRAINING SKILL</th>
                  <th>CREATED AT</th>
                </tr>
              </thead>
              <tbody>
                {/* Training list rows will go here */}
                <tr>
                  <td colSpan="7">No records available</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TrainingSkills