import React, { useState } from 'react';

const ManualAttendances = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <div className="flex justify-between items-center mb-4 border-b-2 border-gray-300">
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
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-200">EMPLOYEE</th>
              <th className="text-left p-4 bg-gray-200">DATE</th>
              <th className="text-left p-4 bg-gray-200">IN TIME</th>
              <th className="text-left p-4 bg-gray-200">OUT TIME</th>
              <th className="text-left p-4 bg-gray-200">TOTAL WORK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fakhrity Hikmawan</td>
              <td>2024-01-30</td>
              <td>08:00</td>
              <td>17:00</td>
              <td>9h</td>
            </tr>
            <tr>
              <td>Arfara Yema</td>
              <td>2024-01-30</td>
              <td>09:00</td>
              <td>18:00</td>
              <td>8h</td>
            </tr>
          </tbody>
        </table>
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
    </div>
  );
};

export default ManualAttendances;


