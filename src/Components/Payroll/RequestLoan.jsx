import React from 'react';
import './RequestLoan.css';

const RequestLoan = () => {
  return (
    <div className='request-loan-container'>
      <div className='request-loan-label'>
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

      <div className='request-loan-table'>
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

export default RequestLoan;