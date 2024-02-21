import React, { useState, useEffect } from 'react';

const AdvanceSalary = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };  

  const handleHideClick = () => {
    setShowAddForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
    setSelectedEmployee('');
  }; 

  return (
    <div className="flex flex-col items-center w-full">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Employee</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-2">
            <div className="mb-4 md:col-span-1 lg:col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee_name">
                Employee Name *
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employee_name"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                <option value="" disabled>Select Employee</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="Bob Smith">Bob Smith</option>
              </select>
            </div>

            {/* Month & Year */}
            <div className="mb-4 md:col-span-1 lg:col-span-1"> {/* Last Name */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthSelect">
                Month & Year*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monthSelect" type="month" defaultValue={'2024-01'} />
            </div>
            
            {/* Amount and One Time Deduct */}
            <div className="mb-4 md:col-span-2 lg:col-span-2"> 
              <div className="grid grid-cols-2 gap-4">
                <div> {/* Amount */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount (IDR) *
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Amount" />
                </div>
                <div> {/* One Time Deduct */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  One Time Deduct *
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                      <option>Yes</option>
                      <option>No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Monthly Installment Amount */}
            <div className="mb-4 md:col-span-1 lg:col-span-1"> 
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Monthly Installment Amount (IDR)
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="installment" type="text" placeholder="0" />
            </div>
          </div>

          {/* Reason */}
          <div className="mb-4 md:col-span-1 lg:col-span-1 p-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Reason*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Reason" type="text" placeholder="Reason" />
          </div>

          <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}
      <div className='shadow-md rounded-md p-5 bg-white'>
        <div className='flex'>
          Show
          <label>
            <select className='ml-2'>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          entries
          <button className='text-white bg-blue-500 border border-blue-500 p-2 rounded-md text-base cursor-pointer ml-auto hover:bg-blue-600 hover:border-blue-600' onClick={handleAddNewClick} >+ Add new</button>
        </div>
        <div className='mt-4'>
          <table className='w-full'>
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
    </div>
  )
}

export default AdvanceSalary;
