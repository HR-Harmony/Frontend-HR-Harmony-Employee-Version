import React, { useState, useEffect } from 'react';
import { PencilAltIcon, TrashIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };  

  const handleHideClick = () => {
    setShowAddForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
  };

  const handleDelete = (employeeId) => {

  };

  const handleViewDetails = (employee) => {
    navigate(`/employees/employee-details/${employee.identifier}`);
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Add New Employee</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-2">
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
          <div className="flex justify-end bg-gray-200 px-4 py-3">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Employees</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleAddNewClick}>Add New</button>
      </div>
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <label className="flex items-center">
            Show
            <select className="mx-2 rounded border border-gray-300">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            entries
          </label>
          <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
        </div>
        <div className="overflow-x-auto mb-4">
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
              {[{ id: 1, name: 'Fakhrity Hikmawan', designation: 'Software Engineer', contactNumber: '123-456-7890', gender: 'Female', country: 'Indonesia', role: 'Engineering', status: 'Active', identifier: 'emp001' },
                { id: 2, name: 'Arfara Yema Samgusdian', designation: 'Product Manager', contactNumber: '987-654-3210', gender: 'Male', country: 'Indonesia', role: 'Management', status: 'Active', identifier: 'emp002' }].map((employee) => (
                <tr key={employee.id}
                    className="group hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex justify-between">
                      <span>{employee.name}</span>
                      <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleViewDetails(employee)}>
                          <ArrowCircleRightIcon className="h-5 w-5" />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-800 focus:outline-none" onClick={() => handleDelete(employee.id)}>
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.designation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.contactNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.status}</td>
                  <td className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
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
  );
};

export default Employees;