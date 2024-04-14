import React, { useState, useEffect } from 'react';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';

const GoalType = () => {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="flex justify-between mx-20 my-10">
      <div className="w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-blue-500 text-lg font-semibold mb-6">Add New Goal Type</h2>
          <form>
            <label className="block mb-4 text-gray-700">
              Goal Type *
              <input type="text" name="goalType" placeholder="Goal Type" className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md" />
            </label>
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md">Save</button>
          </form>
        </div>
      </div>
      <div className="w-2/3 ml-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-blue-500 text-lg font-semibold mb-6">List All Goal Types</h2>
          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <span>Show</span>
              <select name="entries" className="mx-2 px-2 py-1 border border-gray-300 rounded-md">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search" className="py-2 px-4 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="group hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex justify-between">
                          <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleEditClick()}>
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-800 focus:outline-none" >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span>Showing 1 to 2 of 2 records</span>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Previous</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">Next</button>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="edit-goals-modal">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Goal Type Information</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="mb-3">
                <label className="block mb-4 text-gray-700">
                Goal Type *
                  <input type="text" name="goalType" placeholder="Boost Company Culture" className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md" />
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-700">Close</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalType;
