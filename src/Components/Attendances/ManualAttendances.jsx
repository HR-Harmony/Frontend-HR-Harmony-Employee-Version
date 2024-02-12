import React, { useState } from 'react';

const ManualAttendances = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState(null);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeEditModal = () => {
    setModalEditOpen(false);
  }

  const handleMouseEnter = (employeeId) => {
    setHoveredEmployeeId(employeeId);
  };

  const handleMouseLeave = () => {
    setHoveredEmployeeId(null);
  };

  const handleDelete = (employeeId) => {
  };

  const handleEditClick = (employee) => {
    setModalEditOpen(true);
  };


  return (
    <div className="flex flex-col lg:flex-row justify-between items-start m-20">
      <div className="lg:w-30 lg:mr-5 bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Filter Attendance</h2>
        <form>
          <label className="block mb-4 text-sm text-gray-700">
            Date
            <input className="w-full p-2 border border-gray-300 rounded" type="date" name="date" />
          </label>
          <label className="block mb-4 text-sm text-gray-700">
            Employee
            <select className="w-full p-2 border border-gray-300 rounded" name="employee"></select>
          </label>
          <button
            className="bg-indigo-700 text-white p-4 border-none rounded cursor-pointer w-full"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>
      <div className="lg:w-65 relative bg-white p-4 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-indigo-700 pb-2">View Attendance</h2>
          <button className="bg-indigo-700 text-white p-2 rounded text-sm" onClick={openModal}>
            + Add New
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-sm text-gray-700">
            Show
            <select className="h-8 ml-2 border border-gray-300 rounded">
              <option value="10">10</option>
            </select>
            entries
          </div>
          <div className="search-box">
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Out Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Work</th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[{ id: 1, name: 'Fakhrity', date: '10-02-2024', inTime: '07.30', outTime: '15.30', totalWork: '8 Hours' },
                  { id: 1, name: 'Arfara', date: '10-02-2024', inTime: '07.30', outTime: '15.30', totalWork: '8 Hours' }].map((employee) => (
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
                    <td className="px-6 py-4 whitespace-nowrap">{employee.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.inTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.outTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{employee.totalWork}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
          <span>No records available</span>
          <div className="flex">
            <button className="bg-indigo-700 text-white p-2 rounded mr-2">Previous</button>
            <button className="bg-indigo-700 text-white p-2 rounded">Next</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add New Attendance</h2>
            <form>
            <label className="block mb-4 text-sm text-gray-700">
                Employee Name
                <div className="relative">
                  <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Search Employee"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Attendances Date
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="attendancesDate"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                In Time
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="time"
                  name="inTime"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Out Time
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="time"
                  name="outTime"
                />
              </label>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-700 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isModalEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Edit Attendance Data</h2>
            <form>
              <label className="block mb-4 text-sm text-gray-700">
                Attendances Date
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="attendancesDate"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                In Time
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="time"
                  name="inTime"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Out Time
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="time"
                  name="outTime"
                />
              </label>
              <div className="flex justify-end">
                <button
                  onClick={closeEditModal}
                  className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-700 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManualAttendances;


