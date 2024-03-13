import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ManualAttendances = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(null);

  const handleEditClick = (attendance) => {
    setCurrentEdit(attendance);
    setIsEditModalOpen(true);
  };

  const handleAddNewClick = () => {
    setIsAddModalOpen(true);
  };

  const attendances = [
    { employee: 'Fakhrity Hikmawan', email: 'fakhrityhikmawan@gmail.com', date: '05-03-2024', inTime: '04:32 pm', outTime: '04:32 pm', duration: '0:0' },
    { employee: 'Arfara Yema Samgusdian', email: 'arfarayemas@gmail.com', date: '06-03-2024', inTime: '09:15 am', outTime: '07:00 am', duration: '00:00' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-1/3 px-3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">Filter Attendance</h5>
            </div>
            <form className="p-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="date" />
              </div>
              <div className="mt-3">
                <label htmlFor="employee" className="block text-sm font-medium text-gray-700">Employee</label>
                <select id="employee" className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>coba saja</option>
                  {/* Tambahkan opsi karyawan lainnya di sini */}
                </select>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 mt-3 mb-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Filter</button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">View Attendance</h5>
              <button
                onClick={handleAddNewClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Add New
              </button>
            </div>
            <div className="flex justify-between px-3 mt-3">
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
            <div className="overflow-x-auto mb-4 px-3">
              <table className="min-w-screen divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">In Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Out Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Total Hours</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendances.map((attendance, index) => (
                    <tr key={index}
                        onMouseEnter={() => setVisibleDelete(attendance.employee)}
                        onMouseLeave={() => setVisibleDelete(null)}
                        className="group hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative flex justify-between">
                        <span>{attendance.employee}</span>
                        {visibleDelete === attendance.employee && (
                          <div className="flex items-center">
                            <button onClick={() => handleEditClick(attendance)} className="text-indigo-600 hover:text-indigo-900 ml-5 mr-2">
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.inTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.outTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                Showing 1 to 2 of 2 records
                <div>
                  <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 mb-4 ml-3 rounded focus:outline-none">
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
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="edit-modal">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Attendance Information</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="editEmployee" className="block text-sm font-medium text-gray-700">Employee *</label>
                <select id="editEmployee" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>{currentEdit.employee}</option>
                  {/* Add more employee options here */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="editDate" className="block text-sm font-medium text-gray-700">Attendance Date *</label>
                <input type="date" id="editDate" value={currentEdit.date} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="editInTime" className="block text-sm font-medium text-gray-700">In Time *</label>
                  <input type="time" id="editInTime" value={currentEdit.inTime} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div>
                  <label htmlFor="editOutTime" className="block text-sm font-medium text-gray-700">Out Time *</label>
                  <input type="time" id="editOutTime" value={currentEdit.outTime} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
              </div>
              <div className="flex items-center justify-end space-x-3 mt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  Close
                </button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Transition appear show={isAddModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsAddModalOpen(false)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="text-lg font-semibold">Add Attendance Information</h4>
                  <button onClick={() => setIsAddModalOpen(false)} className="text-black">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <p className="mb-5">We need below required information to add this record.</p>
                <form>
                  <div className="mb-4">
                    <label htmlFor="attendanceEmployee" className="block text-sm font-medium text-gray-700">Employee</label>
                    <select id="attendanceEmployee" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Select an employee</option>
                      {/* Add employee options here */}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="attendanceDate" className="block text-sm font-medium text-gray-700">Attendance Date</label>
                    <input type="date" id="attendanceDate" placeholder="dd/mm/yyyy" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="inTime" className="block text-sm font-medium text-gray-700">In Time *</label>
                      <input type="time" id="inTime" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div>
                      <label htmlFor="outTime" className="block text-sm font-medium text-gray-700">Out Time *</label>
                      <input type="time" id="outTime" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                  </div>
                  <div className="flex items-center justify-end space-x-3 ">
                    <button type="button" onClick={() => setIsAddModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 mt-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      Close
                    </button>
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 mt-1 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ManualAttendances;
