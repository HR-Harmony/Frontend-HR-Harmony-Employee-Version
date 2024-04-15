import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { TrashIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const TrackGoals = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleReset = () => {
    setShowAddForm(false)
  };

  const handleViewDetailsClick = () => {
    navigate(`../goals-details`);
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Track Goals</h2>
        <div className="flex items-center">
          <button className='text-white bg-blue-500 border-blue-600 py-2 px-4 rounded text-lg leading-6 cursor-pointer hover:bg-blue-700 hover:border-blue-700' onClick={handleAddNewClick}>+ Add New</button>
        </div>
      </div>
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Goal</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setShowAddForm(false)}>Hide</button>
          </div>
          <div className="px-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goalType">
                  Goal Type
                </label>
                <div className="relative">
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="goalType">
                    <option>Select Goal Type</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" name="subject" type="text" placeholder="Subject"/>
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetAchievement">
                  Target Achievement
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="targetAchievement" name="targetAchievement" type="text" placeholder="Target Achievement"/>
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" name="start_date" type="date" />
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" name="end_date" type="date" />
              </div>
              <div className="mb-4 md:col-span-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <ReactQuill theme="snow" />
              </div>
            </div>
            <div className="flex justify-end bg-gray-200 px-4 py-3">
              <button type="button" onClick={handleReset} className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none">Reset</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-5 p-5">
        <div className="flex items-center">
          <span>Show</span>
          <select name="entries" className="mx-2 px-2 py-1 border border-gray-300 rounded-md">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="flex">
          <input type="text" className="px-2 py-1 border border-gray-300 rounded-md" placeholder="Search" />
        </div>
      </div>
      <div className="overflow-x-auto mb-4 p-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="group hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex justify-between">
                        <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleViewDetailsClick()}>
                            <ArrowCircleRightIcon className="h-5 w-5" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800 focus:outline-none" /*onClick={() => handleShowDeleteConfirmation(employee.id)}*/>
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
            </tbody>
          </table>
        </div>
      <div className="flex justify-between items-center mt-5 p-5">
        <div className="text-sm">Showing 1 to 3 of 3 records</div>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TrackGoals;