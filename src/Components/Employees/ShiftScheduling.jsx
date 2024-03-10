import React, { useState } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const ShiftScheduling = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [hoveredShiftId, setHoveredShiftId] = useState(null);
  const [editingShift, setEditingShift] = useState(null);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleHideClick = () => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
  };

  const handleMouseEnter = (shiftId) => {
    setHoveredShiftId(shiftId);
  };

  const handleMouseLeave = () => {
    setHoveredShiftId(null);
  };

  const handleEditClick = (shift) => {
    setEditingShift(shift);
    setShowEditForm(true);
  };

  const handleDeleteClick = (shiftId) => {
    // Logika untuk menghapus shift
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Add New Shift</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          <form className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shiftName">
                Shift Name *
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shiftName" type="text" placeholder="Shift Name" />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <React.Fragment key={day}>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${day.toLowerCase()}InTime`}>
                      {day} In Time *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${day.toLowerCase()}InTime`} type="time" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${day.toLowerCase()}OutTime`}>
                      {day} Out Time *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${day.toLowerCase()}OutTime`} type="time" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </form>
          <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Office Shifts</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SHIFT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MONDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TUESDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WEDNESDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">THURSDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FRIDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SATURDAY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SUNDAY</th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[{ id: 1, name: 'SHIFT 1', times: { monday: '07:00 am To 03:00 pm', tuesday: '07:00 am To 03:00 pm', wednesday: '07:00 am To 03:00 pm', thursday: '07:00 am To 03:00 pm', friday: '07:00 am To 03:00 pm', saturday: '07:00 am To 03:00 pm', sunday: '07:00 am To 03:00 pm' } },
               { id: 2, name: 'SHIFT 2', times: { monday: '07:00 am To 03:00 pm', tuesday: '07:00 am To 03:00 pm', wednesday: '07:00 am To 03:00 pm', thursday: '07:00 am To 03:00 pm', friday: '07:00 am To 03:00 pm', saturday: '07:00 am To 03:00 pm', sunday: '07:00 am To 03:00 pm' } },
              ].map((shift) => (
                <tr key={shift.id}
                    onMouseEnter={() => handleMouseEnter(shift.id)}
                    onMouseLeave={handleMouseLeave}
                    className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex justify-between">
                      <span style={{ paddingRight: '0px' }}>{shift.name}</span>
                      <div className="flex-shrink-0 flex items-center pl-10">
                        <button
                          className="p-1 text-blue-600 hover:text-blue-800 focus:outline-none"
                          style={{ visibility: hoveredShiftId === shift.id ? 'visible' : 'hidden' }}
                          onClick={() => handleEditClick(shift)}
                        >
                          <PencilAltIcon className="h-5 w-5" />
                        </button>
                        <button
                          className="p-1 text-red-600 hover:text-red-900 focus:outline-none"
                          style={{ visibility: hoveredShiftId === shift.id ? 'visible' : 'hidden' }}
                          onClick={() => handleDeleteClick(shift.id)}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.monday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.tuesday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.wednesday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.thursday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.friday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.saturday}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shift.times.sunday}</td>
                  <td className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
              Showing 1 to 2 of 2 records
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
      {showEditForm && editingShift && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-start">
          <div className="bg-white p-5 rounded-lg w-full max-w-xl mx-3">
            <h2 className="text-xl font-bold text-gray-700 mb-1">Edit Office Shift Information</h2>
            <p className="mb-1">We need below required information to update this record.</p>
            <form className="p-6">
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shiftName">
                  Shift Name *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shiftName" type="text" placeholder="Shift Name" defaultValue={editingShift.name} />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <React.Fragment key={day}>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${day.toLowerCase()}InTime`}>
                        {day} In Time *
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${day.toLowerCase()}InTime`} type="time" defaultValue={editingShift.times[day.toLowerCase()]} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${day.toLowerCase()}OutTime`}>
                        {day} Out Time *
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${day.toLowerCase()}OutTime`} type="time" defaultValue={editingShift.times[day.toLowerCase()]} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none"
                        onClick={handleHideClick}>Close</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftScheduling;