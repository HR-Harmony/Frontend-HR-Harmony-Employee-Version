import React, { useState } from 'react';

const RolesPrivileges = () => {
  const [showAddRole, setShowAddRole] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [selectedRoleData, setSelectedRoleData] = useState(null);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [hoveredRoleId, setHoveredRoleId] = useState(null);

  const handleAddNewRoleClick = () => {
    setShowAddRole(true);
  };

  const handleHideNewRoleCard = () => {
    setShowAddRole(false);
  };

  const handleReset = () => {
    handleHideNewRoleCard();
  };

  const handleEditClick = (roleData) => {
    setSelectedRoleData(roleData);
    setIsEditPopupVisible(true);
  };

  const handleCloseEditPopup = () => {
    setIsEditPopupVisible(false);
  };

  const handleDelete = (roleId) => {

  };

  const toggleMoreOptions = () => {
    setIsMoreOptionsOpen(!isMoreOptionsOpen);
  };

  const handleMouseEnter = (roleId) => {
    setHoveredRoleId(roleId);
  };

  const handleMouseLeave = () => {
    setHoveredRoleId(null);
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      {showAddRole && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Role</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleHideNewRoleCard}>Hide</button>
          </div>
          <div className="px-6 py-4">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="md:col-span-1">
                  <div className="form-row mb-4">
                    <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">Role Name *</label>
                    <input id="roleName" type="text" placeholder="Role Name" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="selectAccess" className="block text-sm font-medium text-gray-700">Select Access *</label>
                    <select id="selectAccess" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="">Select Access</option>
                      <option value="full">Full Access</option>
                      <option value="restricted">Restricted Access</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="permissions-section pl-4">
                    <h3 className="text-lg font-medium text-gray-700">Staff Apps</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {/* Checkbox items for Staff Apps */}
                      <label><input type="checkbox" /> Attendance</label>
                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center">
                          <input type="checkbox" className="form-checkbox text-gray-600 mr-2" /> {/* Checkbox baru di samping kiri tulisan Projects */}
                          <span className="mr-1 rotate-[-90deg] group-open:rotate-0 transition-transform duration-200">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"> {/* Menggunakan SVG untuk arrow yang lebih baik */}
                              <path d="M5.5 7l4.5 4.5L14.5 7z"></path>
                            </svg>
                          </span> {/* Icon dropdown */}
                          <span>Projects</span>
                        </summary>
                        <div className="pl-4 mt-1 flex flex-col"> {/* Menambahkan flex dan flex-col untuk layout vertikal */}
                          {/* Sub-checkbox items for Projects */}
                          <details className="group">
                            <summary className="cursor-pointer list-none flex items-center" onClick={toggleMoreOptions}>
                              <span className={`mr-1 ${isMoreOptionsOpen ? 'rotate-0' : 'rotate-[-90deg]'} transition-transform duration-200`}>
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                  <path d="M5.5 7l4.5 4.5L14.5 7z"></path>
                                </svg>
                              </span>
                              <span>More Options</span>
                            </summary>
                            <div className="pl-4 mt-1 flex flex-col">
                              {/* Sub-sub-checkbox items */}
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Enable Module</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Add</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Edit</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Delete</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Update Status</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Discussion</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Bugs</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Tasks</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Attach files</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Note</label>
                              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Time Logs</label>
                            </div>
                          </details>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Projects Calendar</label>
                          <label className="flex items-center"><input type="checkbox" className="mr-2" /> Projects Kanban Board</label>
                        </div>
                      </details>
                      <label><input type="checkbox" /> Tasks</label>
                      <label><input type="checkbox" /> Payroll</label>
                      <label><input type="checkbox" /> Helpdesk</label>
                      <label><input type="checkbox" /> Training Sessions</label>
                      <label><input type="checkbox" /> Leave Request</label>
                      <label><input type="checkbox" /> Overtime Request</label>
                      <label><input type="checkbox" /> Complaints</label>
                      <label><input type="checkbox" /> Resignations</label>
                      <label><input type="checkbox" /> Disciplinary Cases</label>
                      <label><input type="checkbox" /> Settings</label>
                      {/* ... (tambahkan checkbox lainnya sesuai gambar) */}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="permissions-section">
                    <h3 className="text-lg font-medium text-gray-700">Company Apps</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {/* Checkbox items for Company Apps */}
                      <label><input type="checkbox" /> Employees</label>
                      <label><input type="checkbox" /> Recruitment (ATS)</label>
                      <label><input type="checkbox" /> Core HR</label>
                      <label><input type="checkbox" /> Attendance</label>
                      <label><input type="checkbox" /> Finance</label>
                      <label><input type="checkbox" /> Performance (PMS)</label>
                      <label><input type="checkbox" /> Manage Clients</label>
                      <label><input type="checkbox" /> Events</label>
                      <label><input type="checkbox" /> Todo List</label>
                      <label><input type="checkbox" /> System Calendar</label>
                      <label><input type="checkbox" /> System Reports</label>
                      {/* ... (tambahkan checkbox lainnya sesuai gambar) */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}
      {isEditPopupVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Staff Role Information</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  We need below required information to update this record.
                </p>
                <form className="w-full max-w-xl pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleName">
                      Role Name *
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="roleName"
                      type="text"
                      placeholder="Role Name"
                      value={selectedRoleData?.roleName || ''}
                      onChange={(e) => setSelectedRoleData({ ...selectedRoleData, roleName: e.target.value })}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectAccess">
                      Select Access *
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="selectAccess"
                        value={selectedRoleData?.access || ''}
                        onChange={(e) => setSelectedRoleData({ ...selectedRoleData, access: e.target.value })}
                      >
                        <option value="">Select Access</option>
                        <option value="full">Full Access</option>
                        <option value="restricted">Restricted Access</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-end px-4 py-3 border-t border-gray-300">
                <button
                  id="cancel-btn"
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-l focus:outline-none hover:bg-gray-700 mr-2"
                  onClick={handleCloseEditPopup}
                >
                  Close
                </button>
                <button
                  id="ok-btn"
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded-r focus:outline-none hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Roles</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleAddNewRoleClick}>Add New</button>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between mb-4">
          <div className="flex">
            <label htmlFor="entries" className="mr-2 self-center">Show</label>
            <select id="entries" className="rounded border-gray-300">
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span className="ml-2 self-center">entries</span>
          </div>
          <div>
            <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROLE NAME</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MENU PERMISSION</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ADDED DATE</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Dummy data for demonstration */}
              {[{ id: 1, name: 'Admin & Log', access: 'All Menu Access', addedDate: '07-08-2023' },
                { id: 2, name: 'Dummy Role', access: 'Custom Menu Access', addedDate: '08-08-2023' }].map((role) => (
                <tr key={role.id}
                    onMouseEnter={() => handleMouseEnter(role.id)}
                    onMouseLeave={handleMouseLeave}
                    className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900">{role.name}</span>
                      {hoveredRoleId === role.id && (
                        <div className="flex-shrink-0">
                          <button className="text-blue-600 hover:text-blue-900 focus:outline-none mr-3" onClick={() => handleEditClick(role)}>Edit</button>
                          <button className="text-red-600 hover:text-red-900 focus:outline-none" onClick={() => handleDelete(role.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{role.access}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{role.addedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
          <div>
            Showing 1 to 2 of 2 records
          </div>
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
  );
};

export default RolesPrivileges;