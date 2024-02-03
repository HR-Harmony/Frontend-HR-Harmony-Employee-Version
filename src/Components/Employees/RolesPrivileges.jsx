import React, { useState } from 'react';
import './RolesPrivileges.css';

const RolesPrivileges = () => {
  const [showAddRole, setShowAddRole] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [selectedRoleData, setSelectedRoleData] = useState(null);

  const handleAddNewRoleClick = () => {
    setShowAddRole(true);
  };

  const handleHideNewRoleCard = () => {
    setShowAddRole(false);
  };

  const handleReset = () => {
    handleHideNewRoleCard();
  };

  const handleCheckboxChange = (e, parentIndex, index) => {

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

  return (
    <div className="roles-container">
      {showAddRole && (
        <div className="add-role-card">
          <div className="add-role-header">
            <h2>Add New Role</h2>
            <button className="btn-hide" onClick={handleHideNewRoleCard}>Hide</button>
          </div>
          <div className="add-role-body">
            <form>
              <div className="form-row">
                <label htmlFor="roleName">Role Name *</label>
                <input id="roleName" type="text" placeholder="Role Name" />
              </div>
              <div className="form-row">
                <label htmlFor="selectAccess">Select Access *</label>
                <select id="selectAccess">
                  <option value="">Select Access</option>
                  <option value="full">Full Access</option>
                  <option value="restricted">Restricted Access</option>
                </select>
              </div>
              <div className="permissions-section">
                <h3>Staff Apps</h3>
                <ul className="permission-list">
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Attendance
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Projects
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Tasks
                    </label>
                    <ul className="permission-list nested">
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0, 0)} /> Enable Module
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0, 1)} /> Add
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0, 2)} /> Edit
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0, 3)} /> Delete
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Payroll
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Helpdesk
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Training Sessions
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Leave Request
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Overtime Request
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Complaints
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Resignations
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Disciplinary Cases
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 0)} /> Settings
                    </label>
                  </li>
                </ul>
              </div>
              <div className="permissions-section">
                <h3>Company Apps</h3>
                <ul className="permission-list">
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Employees
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Recruitment (ATS)
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Core HR
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Attendance
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Finance
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Performance (PMS)
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Manage Clients
                    </label>
                    <ul className="permission-list nested">
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1, 0)} /> Enable Module
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1, 1)} /> Add
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1, 2)} /> Edit
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1, 3)} /> Delete
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> Events
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 1)} /> System
                    </label>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div className="add-role-footer">
            <button className="btn-reset" onClick={handleReset}>Reset</button>
            <button className="btn-save">Save</button>
          </div>
        </div>
      )}
      {isEditPopupVisible && (
        <>
          <div className="overlay" onClick={handleCloseEditPopup}></div>
          <div className="edit-role-card">
            <div className="edit-role-header">
              <h2>Edit Staff Role Information</h2>
              <button className="btn-hide" onClick={handleCloseEditPopup}>Close</button>
            </div>
            <div className="edit-role-body">
              <div className="form-row">
                <label htmlFor="editRoleName">Role Name *</label>
                <input id="editRoleName" type="text" placeholder="Role Name" value={selectedRoleData?.roleName || ''} />
              </div>
              <div className="form-row">
                <label htmlFor="editSelectAccess">Select Access *</label>
                <select id="editSelectAccess" value={selectedRoleData?.access || ''}>
                  <option value="">Select Access</option>
                  <option value="full">Full Access</option>
                  <option value="restricted">Restricted Access</option>
                </select>
              </div>
            </div>
            <div className="edit-role-footer">
              <button className="btn-save">Update</button>
            </div>
          </div>
        </>
      )}
      <div className="roles-card">
        <div className="roles-card-header">
          <h2>List All Roles</h2>
          <button className="btn-add-new" onClick={handleAddNewRoleClick}>Add New</button>
        </div>
        <div className="roles-card-body">
          <div className="table-controls">
            <label>
              Show 
              <select>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              entries
            </label>
            <input type="search" placeholder="Search" />
          </div>
          <table>
            <thead>
              <tr>
                <th>ROLE NAME</th>
                <th>MENU PERMISSION</th>
                <th>ADDED DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin & Log</td>
                <td>All Menu Access</td>
                <td>07-08-2023</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEditClick({/* role data */})}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(/* role id */)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolesPrivileges;