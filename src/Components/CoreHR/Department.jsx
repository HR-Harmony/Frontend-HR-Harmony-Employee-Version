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
      <div className="flex flex-wrap -mx-2">
        {/* Card untuk menambahkan department baru */}
        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">Add New Department</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="departmentName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="departmentHead" className="block text-sm font-medium text-gray-700">Department Head</label>
                <select id="departmentHead" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select head</option>
                  {/* Options should be populated here */}
                </select>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Save</button>
            </form>
          </div>
        </div>

        {/* Card untuk menampilkan semua departments */}
        <div className="w-full lg:w-2/3 px-2">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h5 className="text-lg font-semibold mb-4">List All Departments</h5>
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
                    <th className="px-4 py-2 text-left">DEPARTMENT NAME</th>
                    <th className="px-4 py-2 text-left">DEPARTMENT HEAD</th>
                    <th className="px-4 py-2 text-left">CREATED AT</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((department, index) => (
                    <tr 
                      key={index} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`relative ${hoveredRow === index ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      <td className="border px-4 py-2 flex justify-between items-center">
                        {department.name}
                        {hoveredRow === index && (
                          <div className="flex items-center">
                            <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(department)}>
                              <PencilAltIcon className="h-5 w-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-800" onClick={() => handleDeleteClick(department)}>
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="border px-4 py-2">{department.head}</td>
                      <td className="border px-4 py-2">{department.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center">
                <span>Showing 1 to {departments.length} of {departments.length} records</span>
                <div className="flex">
                  <a className="text-indigo-600 hover:text-indigo-800 mr-2 cursor-pointer">Previous</a>
                  {/* Pagination links should be dynamically generated based on data */}
                  <a className="text-indigo-600 hover:text-indigo-800 ml-2 cursor-pointer">Next</a>
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
