import React from 'react';
import './Department.css'; // Import your custom styles if needed

const Department = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name *
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department-head">
                Department Head
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="department-head">
                <option>Select a head</option>
                {/* Options should be populated here */}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                Search
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search" />
            </div>
            <div className="mb-4">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Department Name</th>
                    <th className="px-4 py-2 text-left">Department Head</th>
                    <th className="px-4 py-2 text-left">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Rows will be populated here */}
                </tbody>
              </table>
            </div>
            {/* Pagination would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
