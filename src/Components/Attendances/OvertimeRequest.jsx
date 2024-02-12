import React, { useState } from 'react';

const OvertimeRequest = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="border border-gray-300 rounded p-4 m-4 shadow-md font-sans">
      <div className="flex justify-between items-center">
        <h1 className="m-0">Overtime Request</h1>
        <div className="flex items-center">
          <button className="bg-indigo-700 text-white p-2 rounded text-sm" onClick={openModal}>
            + Add New
          </button>
        </div>
      </div>
      <hr className="border-0 h-1 bg-gray-300 my-4" />
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          Show
          <select name="entries" className="ml-2 p-2 border border-gray-300 rounded">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          entries
        </div>
        <div className="flex">
          <input type="text" className="p-2 border border-gray-300 rounded" placeholder="Search" />
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">EMPLOYEE</th>
              <th className="border border-gray-300 p-2">DATE</th>
              <th className="border border-gray-300 p-2">IN TIME</th>
              <th className="border border-gray-300 p-2">OUT TIME</th>
              <th className="border border-gray-300 p-2">TOTAL HOURS</th>
              <th className="border border-gray-300 p-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data row 1 */}
            <tr className="border border-gray-300">
              <td className="border border-gray-300 p-2">User removed</td>
              <td className="border border-gray-300 p-2">28-06-2023</td>
              <td className="border border-gray-300 p-2">06:32 am</td>
              <td className="border border-gray-300 p-2">09:32 am</td>
              <td className="border border-gray-300 p-2">3:0</td>
              <td className="border border-gray-300 p-2">Accepted</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 p-2">User removed</td>
              <td className="border border-gray-300 p-2">29-06-2023</td>
              <td className="border border-gray-300 p-2">06:00 am</td>
              <td className="border border-gray-300 p-2">07:00 am</td>
              <td className="border border-gray-300 p-2">1:0</td>
              <td className="border border-gray-300 p-2">Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="mr-auto">Showing 1 to 2 of 10 records</div>
        <div className="flex">
          <button className="bg-gray-300 border border-gray-300 py-2 px-4">Previous</button>
          <button className="bg-blue-500 text-white border border-blue-500 py-2 px-4 ml-2">1</button>
          <button className="bg-gray-300 border border-gray-300 py-2 px-4 ml-2">Next</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add Overtime Request Informations</h2>
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
                Date
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
              <label className="block mb-4 text-sm text-gray-700">
                Reason
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  name="reason"
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

export default OvertimeRequest;
