import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PencilAltIcon, TrashIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const [newsData, setNewsData] = useState([
    { id: 1, title: 'Gathering', department: 'HR', startDate: '18-08-2023', endDate: '19-08-2023', identifier: 'xwkREfuzKd1pBHlntLIcRrjhzEagCSgGTmY4HmBTN08' },
    { id: 2, title: 'Libur 2 Minggu', department: 'Marketing', startDate: '07-04-2023', endDate: '29-04-2023', identifier: 'ywkREfuzKd1pBHlntLIcRrjhzEagCSgGTmY4HmBTN09' },
    { id: 4, title: 'Surat Edaran', department: 'Finance', startDate: '06-02-2024', endDate: '30-06-2024', identifier: 'zwkREfuzKd1pBHlntLIcRrjhzEagCSgGTmY4HmBTN10' }
  ]);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleHideClick = () => {
    setShowAddForm(false);
  };

  const handleViewDetails = (item) => {
    navigate(`/corehr/announcement-view/${item.identifier}`);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (item) => {
    // Logika untuk "Delete"
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditData(null);
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Announcement</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setShowAddForm(false)}>Hide</button>
          </div>
          <div className="px-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" />
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" />
              </div>
              <div className="mb-4 md:col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  Department
                </label>
                <div className="relative">
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="department">
                    {/* Options */}
                  </select>
                </div>
              </div>
              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                  Summary *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="summary" type="text" placeholder="Summary" />
              </div>
              <div className="mb-4 md:col-span-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <ReactQuill theme="snow" />
              </div>
            </div>
            <div className="flex justify-end bg-gray-200 px-4 py-3">
              <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleHideClick}>Reset</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Announcements</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleAddNewClick}>Add New</button>
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
          <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {newsData.map((item, index) => (
                <tr key={item.id} 
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`relative ${hoveredRow === index ? 'bg-gray-100' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-between items-center">
                    {item.title}
                    <div className={`flex items-center transition-opacity duration-300 ${hoveredRow === index ? 'opacity-100' : 'opacity-0'}`}>
                      <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleViewDetails(item)}>
                        <ArrowCircleRightIcon className="h-5 w-5" />
                      </button>
                      <button className="p-1 mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEdit(item)}>
                        <PencilAltIcon className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800" onClick={() => handleDelete(item)}>
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
          Showing 1 to {newsData.length} of {newsData.length} entries
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
      {isEditModalOpen && editData && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-lg font-semibold">Edit Announcement Information</h4>
              <button onClick={handleCloseModal} className="text-black">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="mb-5">We need below required information to update this record.</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title *
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" value={editData.title} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                      Start Date *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" value={editData.startDate} />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                      End Date *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" value={editData.endDate} />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  Department
                </label>
                <select 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="department" 
                  value={editData.department} 
                  onChange={(e) => setEditData({ ...editData, department: e.target.value })}
                >
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                  Summary *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="summary" type="text" placeholder="Summary" value={editData.summary} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <ReactQuill theme="snow" value={editData.description} />
              </div>
              <div className="flex items-center justify-end space-x-3 mt-4">
                <button type="button" onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  Close
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
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

export default News;
