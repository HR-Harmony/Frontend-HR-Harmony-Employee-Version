import React from 'react';
import './PayrollList.css';

const PayrollList = () => {
  return (
    <div>
      <h2>Payroll List</h2>
      <div className='payroll-list-card'>
        <div className='payroll-form-group'>
          <label htmlFor='employee'>Employee</label>
          <select id='employee' className='form-control'>
            <option value=''>-- Select Employee --</option>
            {/*list of employees option*/}
          </select>
        </div>
        <div className='payroll-form-group'>
          <label htmlFor='monthSelect'>Select Month</label>
          <input type='month' id='monthSelect' className='form-control' defaultValue={'2024-01'}/>
        </div>
        <button type='submit' className='search-button'>Search</button>
      </div>

      <div className='payroll-table'>
        <div className='payroll-table-label'>
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
        <table>
          <thead>
            <tr>
              <th>EMPLOYEE</th>
              <th>EMPLOYEE ID</th>
              <th>PAYSLIP TYPE</th>
              <th>BASIC SALARY</th>
              <th>NET SALARY</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Employee rows will go here */}
            <tr>
              <td colSpan="7">No records available</td>
            </tr>
          </tbody>
        </table>
        <div className="payroll-table-pagination">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PayrollList;