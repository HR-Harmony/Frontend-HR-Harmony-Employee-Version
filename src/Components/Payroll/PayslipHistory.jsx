import React from 'react';
import './PayslipHistory.css';


const PayslipHistory = () => {
  return (
    <div className='payslip-history-container'>
      <div className='payslip-history-label'>
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
      <input type="search" placeholder="Search" />
      </div>

      <div className='payslip-history-table'>
      <table>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>NET PAYABLE</th>
              <th>SALARY MONTH</th>
              <th>PAY DATE</th>
              <th>EVIDENCES</th>
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

export default PayslipHistory;