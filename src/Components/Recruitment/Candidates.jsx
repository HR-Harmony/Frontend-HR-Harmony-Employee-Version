import React from 'react';
import { TrashIcon, DownloadIcon } from '@heroicons/react/solid';

const Candidates = () => {
  return (
    <div className="border border-gray-200 rounded overflow-hidden mb-4 max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Job Candidates</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover Letter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apply Date</th>
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
                          <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none">
                            <DownloadIcon className="h-5 w-5" />
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
    </div>
  )
}

export default Candidates;
