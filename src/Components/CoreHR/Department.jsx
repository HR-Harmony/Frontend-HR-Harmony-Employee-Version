import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const Department = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  // Dummy data untuk departments
  const departments = [
    { name: 'Admin', head: 'John Doe', createdAt: '09-01-2024' },
    { name: 'Customer Service', head: 'Jane Smith', createdAt: '09-01-2024' },
    { name: 'Engineer', head: 'Tom Brown', createdAt: '05-02-2024' },
    { name: 'HRD', head: 'Alice Johnson', createdAt: '09-01-2024' },
    { name: 'Produksi (Advertising)', head: 'Michael Davis', createdAt: '09-01-2024' },
    { name: 'Produksi (Interior)', head: 'Chloe Green', createdAt: '09-01-2024' },
  ];

  const handleEditClick = (department) => {
    setCurrentEdit(department);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (department) => {
    // Logika untuk handle delete
    console.log('Delete:', department);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-3">
        {/* Card untuk menambahkan department baru */}
        <div className="w-full lg:w-1/3 px-3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">Add New Department</h5>
            </div>
            <form className="p-4">
              <div>
                <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="departmentName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Name" required />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="departmentHead" className="block text-sm font-medium text-gray-700">Department Head</label>
                <select id="departmentHead" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select head</option>
                  {/* Options should be populated here */}
                </select>
              </div>
              <button type="submit" className="bg-indigo-600 text-white mb-4 px-4 py-2 rounded-md hover:bg-indigo-700">Save</button>
            </form>
          </div>
        </div>

        {/* Card untuk menampilkan semua departments */}
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DEPARTMENT NAME</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DEPARTMENT HEAD</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CREATED AT</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departments.map((department, index) => (
                    <tr 
                      key={index} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`relative ${hoveredRow === index ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      <td className="border px-4 py-2 relative text-sm text-gray-900">
                        {department.name}
                        {hoveredRow === index && (
                          <div className="absolute right-0 top-0 mr-3 mt-1 flex items-center">
                            <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(department)}>
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-800" onClick={() => handleDeleteClick(department)}>
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="border px-4 py-2 text-sm text-gray-900">{department.head}</td>
                      <td className="border px-4 py-2 text-sm text-gray-900">{department.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                <span>Showing 1 to {departments.length} of {departments.length} records</span>
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
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="edit-department-modal">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Department Information</h4>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="mb-5">We need below required information to update this record.</p>
            <form>
              <div className="mb-5">
                <label htmlFor="editDepartmentName" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input type="text" value={currentEdit.name} onChange={(e) => setCurrentEdit({ ...currentEdit, name: e.target.value })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="editDepartmentName" required />
              </div>
              <div className="mb-5">
                <label htmlFor="editDepartmentHead" className="block text-sm font-medium text-gray-700 mb-2">Department Head</label>
                <select value={currentEdit.head} onChange={(e) => setCurrentEdit({ ...currentEdit, head: e.target.value })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="editDepartmentHead">
                  <option>Select head</option>
                  {/* Options should be populated here */}
                </select>
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

export default Department;
