import React, { useState, useEffect } from 'react';

const Employees = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState(null);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };  

  const handleHideClick = () => {
    setShowAddForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
  }; 

  const handleMouseEnter = (employeeId) => {
    setHoveredEmployeeId(employeeId);
  };

  const handleMouseLeave = () => {
    setHoveredEmployeeId(null);
  };

  const handleDelete = (employeeId) => {

  };

  const handleEditClick = (employee) => {

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
            {/* Form fields */}
            <div className="mb-4 md:col-span-1 lg:col-span-1"> {/* First Name */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                First Name *
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="First Name" />
            </div>
            <div className="mb-4 md:col-span-1 lg:col-span-1"> {/* Last Name */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
                Last Name *
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Last Name" />
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Employee ID and Contact Number */}
              <div className="grid grid-cols-2 gap-4">
                <div> {/* Employee ID */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee_id">
                    Employee ID *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employee_id" type="text" placeholder="Employee ID" />
                </div>
                <div> {/* Contact Number */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact_number">
                    Contact Number *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact_number" type="text" placeholder="Contact Number" />
                </div>
              </div>
            </div>
            <div className="mb-4 md:col-span-1 lg:col-span-1"> {/* Gender */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Email and Username */}
              <div className="grid grid-cols-2 gap-4">
                <div> {/* Email */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div> {/* Username */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
              </div>
            </div>
            <div className="mb-4 md:col-span-1 lg:col-span-1"> {/* Password */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password *
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Office Shift and Role */}
              <div className="grid grid-cols-2 gap-4">
                <div> {/* Office Shift */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="office_shift">
                    Office Shift *
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="office_shift">
                    {/* Opsi shift kantor */}
                  </select>
                </div>
                <div> {/* Role */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                    Role *
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role">
                    {/* Opsi role */}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Department and Designation */}
              <div className="grid grid-cols-2 gap-4">
                <div> {/* Department */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                    Department *
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="department">
                    {/* Opsi departemen */}
                  </select>
                </div>
                <div> {/* Designation */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                    Designation *
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="designation">
                    {/* Opsi jabatan */}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Basic Salary, Hourly Rate, and Payslip Type */}
              <div className="grid grid-cols-3 gap-4">
                <div> {/* Basic Salary */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="basic_salary">
                    Basic Salary *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="basic_salary" type="text" placeholder="Basic Salary" />
                </div>
                <div> {/* Hourly Rate */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hourly_rate">
                    Hourly Rate
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hourly_rate" type="text" placeholder="Hourly Rate" />
                </div>
                <div> {/* Payslip Type */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payslip_type">
                    Payslip Type
                  </label>
                  <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="payslip_type">
                    <option>Monthly</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-4 md:col-span-2 lg:col-span-2"> {/* Profile Picture */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile_picture">
                Profile Picture
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile_picture" type="file" />
            </div>
          </div>
          <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}
      <div className="bg-white shadow-md rounded-lg w-full max-w-5xl"> {/* Sesuaikan ukuran card List All Employees */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 font-bold">
          <h2 className="text-xl font-bold text-gray-700">List All Employees</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleAddNewClick}>Add New</button>
        </div>
        <div className="px-4 py-2">
          <div className="flex justify-between mb-4">
            <div className="flex">
              <label htmlFor="entries" className="mr-2 self-center">Show</label>
              <select id="entries" className="rounded border-gray-300">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <span className="ml-2 self-center">entries</span>
            </div>
            <div>
              <input type="text" placeholder="Search" className="rounded border border-gray-300 p-2" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Dummy data for demonstration */}
                {[{ id: 1, name: 'Fakhrity', designation: 'Software Engineer', contactNumber: '123-456-7890', gender: 'Female', country: 'Indonesia', role: 'Engineering', status: 'Active' },
                  { id: 2, name: 'Random Name', designation: 'Product Manager', contactNumber: '987-654-3210', gender: 'Male', country: 'Indonesia', role: 'Management', status: 'Active' }].map((employee) => (
                  <tr key={employee.id}
                      onMouseEnter={() => handleMouseEnter(employee.id)}
                      onMouseLeave={handleMouseLeave}
                      className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-900">{employee.name}</span>
                        {hoveredEmployeeId === employee.id && (
                          <div className="flex-shrink-0">
                            <button className="text-blue-600 hover:text-blue-900 focus:outline-none mr-2 ml-6" onClick={() => handleEditClick(employee)}>Edit</button>
                            <button className="text-red-600 hover:text-red-900 focus:outline-none ml-2" onClick={() => handleDelete(employee.id)}>Delete</button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.designation}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.contactNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* Actions like Edit and Delete buttons */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
              Showing 1 to 2 of 2 records
              <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none">
                  Previous
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none ml-2">
                  Next
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;