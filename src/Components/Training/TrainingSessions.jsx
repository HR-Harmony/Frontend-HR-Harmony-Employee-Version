import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { PencilAltIcon, ArrowCircleRightIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const TrainingSessions = () => {

    const navigate = useNavigate();
    const [showAddForm, setShowAddForm] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditClick = () => {
    setIsEditModalOpen(true);
    };

    const handleAddNewClick = () => {
    setShowAddForm(true);
     };

    const handleReset = () => {
    setShowAddForm(false)
     };
     
    const handleViewDetailsClick = () => {
    navigate(`../training-details`);
    };

  return (
    <div className="border border-gray-200 rounded overflow-hidden mb-4 max-w-6xl ml-auto mr-auto">
        {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Training Sessions</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setShowAddForm(false)}>Hide</button>
          </div>
          <div className="px-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainer">
                    Trainer
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainer">
                        <option>Trainer</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainingSkill">
                    Trining Skill
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainingSkill">
                        <option>Training Skill</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainingCost">
                    Training Cost
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainingCost" name="trainingCost" type="text" placeholder="Training Cost"/>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee">
                    Employee
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employee">
                        <option>Employee</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                    Start Date
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" name="end_date" type="date" />
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
        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Training Sessions</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"onClick={handleAddNewClick}>Add New</button>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Skill</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trainer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
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
                          <button className="p-1 text-blue-600 hover:text-red-800 focus:outline-none"onClick={() => handleEditClick()}>
                            <PencilAltIcon className="h-5 w-5" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800 focus:outline-none">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
            Showing 1 to of 3 records
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
        {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="edit-training-session-modal">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Training Information</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form className="grid grid-cols-3 gap-4">
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainingSkill">
                    Training Skill
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainingSkill">
                        <option>Training Skill</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainer">
                    Trainer
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainer">
                        <option>Trainer</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainingCost">
                    Training Cost
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainingCost" name="trainingCost" type="text" placeholder="Training Cost"/>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee">
                    Employee
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employee">
                        <option>Employee</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                    Start Date
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" name="end_date" type="date" />
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                    End Date
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" name="end_date" type="date" />
                </div>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="associatedGoals">
                    Associated Goals
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="associatedGoals">
                        <option>Associated Goals</option>
                    </select>
                    </div>
                </div>
                <div className="mb-4 md:col-span-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                    </label>
                    <ReactQuill theme="snow" />
                </div>
            </form>
            <div className="flex justify-end mt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-700">Close</button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Update</button>
              </div>
          </div>
        </div>
        )}    
    </div>
  )
}

export default TrainingSessions