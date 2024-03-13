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
      <div className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-1/3 px-3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">Add New Designation</h5>
            </div>            
            <form className="p-4">
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

        <div className="w-full lg:w-2/3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">List All Departments</h5>
            </div>
            <div className="flex justify-between px-3 mt-3">
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
            <div className="overflow-x-auto mb-4 px-3">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESIGNATION</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DEPARTMENT</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {designations.map((designation, index) => (
                    <tr 
                      key={index} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`relative ${hoveredRow === index ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      <td className="border px-4 py-2 relative text-sm text-gray-900">
                        {designation.designation}
                        {hoveredRow === index && (
                          <div className="absolute right-0 top-0 mr-3 mt-1 flex items-center">
                            <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(designation)}>
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-800" onClick={() => handleDeleteClick(designation)}>
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="border px-4 py-2 text-sm text-gray-900">{designation.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-gray-500 text-sm p-3 flex justify-between items-center">
              <span>Showing 1 to {designations.length} of {designations.length} records</span>
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
