import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid';

const RequestLoan = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [hoveredShiftId, setHoveredShiftId] = useState(null);
  const [editingShift, setEditingShift] = useState(null);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleHideClick = () => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
  };

  const handleMouseEnter = (shiftId) => {
    setHoveredShiftId(shiftId);
  };

  const handleMouseLeave = () => {
    setHoveredShiftId(null);
  };

  const handleDeleteClick = (shiftId) => {
    // Logika untuk menghapus shift
  };

  const dummyData = [
    { id: 3, employee: 'Fakhrity Hikmawan', amount: 'IDR500,000', monthYear: 'September, 2023', oneTimeDeduct: 'No', emi: 'IDR100,000', createdAt: '14-11-2023', status: 'Accepted' },
    { id: 4, employee: 'Arfara Yema Samgusdian', amount: 'IDR2,500,000', monthYear: 'October, 2023', oneTimeDeduct: 'Yes', emi: 'IDR2,500,000', createdAt: '15-11-2023', status: 'Pending' },
  ];

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Request Loan</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          <form className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeName">
                  Employee *
                </label>
                <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="">
                  <option>Fakhrity Hikmawan</option>
                  <option>Arfara Yema Samgusdian</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthYear">
                  Month & Year *
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="monthYear" 
                  type="month" 
                  placeholder="Month & Year" 
                />
                <p className="text-gray-600 text-xs italic">Format: MONTH YEAR</p> {/* Teks bantuan untuk format */}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Amount *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="IDR Amount" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oneTimeDeduct">
                  One Time Deduct *
                </label>
                <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oneTimeDeduct">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emi">
                  Monthly Installment Amount *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emi" type="number" placeholder="IDR" />
              </div>
              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                  Reason *
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" placeholder="Reason"></textarea>
              </div>
            </div>
            <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
              <button type="button" className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </form>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Request Loan</h2>
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
          <div className="flex justify-end">
              <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
          </div>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMPLOYEE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MONTH/YEAR</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ONE TIME DEDUCT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CREATED AT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyData.map((record) => (
                <tr key={record.id}
                    onMouseEnter={() => handleMouseEnter(record.id)}
                    onMouseLeave={handleMouseLeave}
                    className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative flex items-center">
                    {record.employee}
                    <button
                      className="ml-2 text-red-600 hover:text-red-900 focus:outline-none"
                      style={{ visibility: hoveredShiftId === record.id ? 'visible' : 'hidden' }}
                      onClick={() => handleDeleteClick(record.id)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.monthYear}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.oneTimeDeduct}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.emi}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.status}</td>
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

export default RequestLoan;
