import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const Designation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  const designations = [
    { designation: 'Apoteker', department: 'Admin' },
    { designation: 'Interior', department: 'Produksi (Interior)' },
    { designation: 'Kord engineer', department: 'Engineer' },
    { designation: 'Pendaftaran', department: 'Customer Service' },
    { designation: 'Recruitment', department: 'HRD' },
  ];

  const handleEditClick = (designation) => {
    setCurrentEdit(designation);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (designation) => {
    console.log('Delete:', designation);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">Add New Designation</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="designationDepartment" className="block text-sm font-medium text-gray-700">Department *</label>
                <select id="designationDepartment" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  {/* Options should be populated here */}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="designationName" className="block text-sm font-medium text-gray-700">Designation Name *</label>
                <input type="text" id="designationName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Designation Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="designationDescription" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="designationDescription" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Description"></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Save</button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-2/3 px-2">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">List All Designations</h5>
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
                    <th className="px-4 py-2 text-left">DESIGNATION</th>
                    <th className="px-4 py-2 text-left">DEPARTMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {designations.map((designation, index) => (
                    <tr 
                      key={index} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`relative ${hoveredRow === index ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      <td className="border px-4 py-2 flex justify-between items-center">
                        {designation.designation}
                        <div className={`flex items-center transition-opacity duration-300 ${hoveredRow === index ? 'opacity-100' : 'opacity-0'}`}>
                          <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(designation)}>
                            <PencilAltIcon className="h-5 w-5" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800" onClick={() => handleDeleteClick(designation)}>
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">{designation.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center">
                <span>Showing 1 to {designations.length} of {designations.length} records</span>
                <div className="flex">
                  <a className="text-indigo-600 hover:text-indigo-800 mr-2 cursor-pointer">Previous</a>
                  <a className="text-indigo-600 hover:text-indigo-800 ml-2 cursor-pointer">Next</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="edit-designation-modal">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Designation</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="editDesignationDepartment" className="block text-sm font-medium text-gray-700">Department *</label>
                <select id="editDesignationDepartment" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  {/* Options should be populated here based on existing departments */}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="editDesignationName" className="block text-sm font-medium text-gray-700">Designation Name *</label>
                <input type="text" id="editDesignationName" value={currentEdit.designation} onChange={(e) => setCurrentEdit({ ...currentEdit, designation: e.target.value })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div className="mb-3">
                <label htmlFor="editDesignationDescription" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="editDesignationDescription" value={currentEdit.description} onChange={(e) => setCurrentEdit({ ...currentEdit, description: e.target.value })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Update</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designation;
