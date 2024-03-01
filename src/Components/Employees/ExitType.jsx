import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const ExitType = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  const handleEditClick = (exitType) => {
    setCurrentEdit(exitType);
    setIsEditModalOpen(true);
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-wrap -mx-2">
        {/* Card untuk menambahkan tipe exit baru */}
        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">Add New Exit Type</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="exitType" className="block text-sm font-medium text-gray-700">Exit Type *</label>
                <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="exitType" placeholder="Exit Type" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Save</button>
            </form>
          </div>
        </div>

        {/* Card untuk menampilkan semua tipe exit */}
        <div className="w-full lg:w-2/3 px-2">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">List All Exit Types</h5>
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <span>Show</span> 
                <select className="ml-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>10</option>
                </select> 
                <span>entries</span>
              </div>
              <div>
                <input 
                  type="text" 
                  className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  placeholder="Search" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <table className="table-auto w-full mb-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">EXIT TYPE</th>
                    <th className="px-4 py-2 text-left">CREATED AT</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contoh data */}
                  {['Habis Kontrak', 'Out'].map((exitType, index) => (
                    <tr 
                      key={exitType} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className="relative"
                    >
                      <td className="border px-4 py-2 relative">
                        {exitType}
                        {hoveredRow === index && (
                          <div className="absolute right-0 top-0 mr-4 mt-3 flex items-center">
                            <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(exitType)}>
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-800">
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="border px-4 py-2">20-02-2023</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center">
                <span>Showing 1 to 2 of 2 records</span>
                <div className="flex">
                  <a className="text-indigo-600 hover:text-indigo-800 mr-2" href="#">Previous</a>
                  <ul className="flex list-style-none">
                    <li className="mx-1 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-sm"><a className="text-indigo-600 hover:text-indigo-800" href="#">1</a></li>
                  </ul>
                  <a className="text-indigo-600 hover:text-indigo-800 ml-2" href="#">Next</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Exit Type Information</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="mb-5">We need below required information to update this record.</p>
            <form>
              <div className="mb-5">
                <label htmlFor="editExitType" className="block text-sm font-medium text-gray-700 mb-2">Exit Type *</label>
                <input type="text" value={currentEdit} onChange={(e) => setCurrentEdit(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="editExitType" />
              </div>
              <div className="flex items-center justify-end space-x-3">
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
    </div>
  );
};

export default ExitType;
