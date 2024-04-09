import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const EmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState('Contract');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/4">
          {/* Sidebar with menu */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-6">
              <img
                className="h-16 w-16 rounded-full mr-4"
                src="/path-to-profile-image.jpg"
                alt="Profile"
              />
              <div>
                <p className="text-gray-900 font-semibold">coba saja</p>
                <p className="text-gray-600 text-sm">interior</p>
              </div>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col text-gray-800">
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Email</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Contract</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Basic Information</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Personal Information</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Profile Picture</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Account Information</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Documents</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Timesheet Agenda</a>
              <a href="#" className="py-2 hover:bg-gray-100 rounded">Change Password</a>
            </nav>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="bg-white p-6 rounded shadow">
            <div className="mb-6">
              {/* Contract option header */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Set Contract</h2>
              <p className="text-gray-600 text-sm mb-4">Define salary options with contract start and end date.</p>
              {/* Tabs */}
              <ul className="flex border-b">
                <li className="-mb-px mr-1">
                  <a
                    className={`inline-block py-2 px-4 font-semibold ${activeTab === 'Contract' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800'}`}
                    onClick={() => handleTabClick('Contract')}
                  >
                    Contract
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className={`inline-block py-2 px-4 font-semibold ${activeTab === 'Allowances' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800'}`}
                    onClick={() => handleTabClick('Allowances')}
                  >
                    Allowances
                  </a>
                </li>
                <li className="mr-1">
                  <a className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" href="#">Commissions</a>
                </li>
                <li className="mr-1">
                  <a className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" href="#">Statutory deductions</a>
                </li>
                <li className="mr-1">
                  <a className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" href="#">Reimbursements</a>
                </li>
              </ul>
            </div>
            {activeTab === 'Contract' && (
              <div>
                {/* Contract form fields */}
                <form>
                  {/* Form fields */}
                  <div className="flex flex-wrap -mx-3 mb-6">
                    {/* Contract Date */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contract-date">
                        Contract Date *
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="contract-date" type="date" />
                    </div>
                    {/* Department */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="department">
                        Department *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="department">
                          <option>Produksi (interior)</option>
                          {/* Add other options here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Basic Salary */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="basic-salary">
                        Basic Salary *
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="basic-salary" type="text" placeholder="IDR 2500000.00" />
                    </div>
                    {/* Office Shift */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="office-shift">
                        Office Shift *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="office-shift">
                          <option>SHIFT 1</option>
                          {/* Add other options here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Designation */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                        Designation *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="designation">
                          <option>interior</option>
                          {/* Add other options here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Hourly Rate */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hourly-rate">
                        Hourly Rate
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="hourly-rate" type="text" placeholder="IDR 25000.00" />
                    </div>
                    {/* Contract End */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contract-end">
                        Contract End Date *
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="contract-end" type="date" placeholder="05-03-2025" />
                    </div>
                    {/* Payslip Type */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="payslip-type">
                        Payslip Type *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="payslip-type">
                          <option>Per Month</option>
                          {/* Add other options here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Leave Categories */}
                    <div className="w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="leave-categories">
                        Leave Categories
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="leave-categories" type="text" placeholder="Enter leave categories here." />
                    </div>
                    {/* Role Description */}
                    <div className="w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="role-description">
                        Role Description *
                      </label>
                      <textarea className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="role-description" placeholder="Enter role description here."></textarea>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Update Contract
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeTab === 'Allowances' && (
              <div>
                {/* Allowances content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4">List All Allowances</h3>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div className="w-1/4 pr-4">
                      <label htmlFor="entries" className="block text-gray-700 text-sm font-bold mb-2">Show</label>
                      <div className="relative">
                        <select id="entries" className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                          <option>10</option>
                          <option>20</option>
                          <option>50</option>
                          <option>100</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4">
                      <label htmlFor="search" className="block text-gray-700 text-sm font-bold mb-2">Search</label>
                      <input id="search" type="text" placeholder="Search" className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          TITLE
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          AMOUNT
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          ALLOWANCE OPTION
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          AMOUNT OPTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4" className="py-2 px-4 border-b border-gray-200 text-sm text-center">
                          No records available
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <a href="#" className="text-gray-500 hover:text-gray-900">Previous</a>
                    <a href="#" className="ml-3 text-gray-500 hover:text-gray-900">Next</a>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          Previous
                        </a>
                        {/* Pagination goes here */}
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          Next
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Allowance Option *</h3>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="allowance-option">
                        Non Taxable
                      </label>
                      <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="allowance-option">
                        <option>Fixed</option>
                        {/* Add other options here */}
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                        Title *
                      </label>
                      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="title" type="text" placeholder="Title" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="amount-option">
                        Amount Option *
                      </label>
                      <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="amount-option">
                        <option>Fixed</option>
                        {/* Add other options here */}
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="amount">
                        Amount *
                      </label>
                      <div className="flex items-center">
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="amount" type="text" placeholder="Amount" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* ... other tab contents */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails

