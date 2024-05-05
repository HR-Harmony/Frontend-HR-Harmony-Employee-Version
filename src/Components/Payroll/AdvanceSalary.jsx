import React, { useState, useEffect } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/solid';
import { APIPayroll } from '@/Apis/APIPayroll';
import { APIEmployees } from '@/Apis/APIEmployees';
import { toast } from 'react-toastify';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const AdvanceSalary = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [hoveredShiftId, setHoveredShiftId] = useState(null);
  const [editingShift, setEditingShift] = useState(null);
  const [advanceSalaries, setAdvanceSalaries] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteAdvanceSalaryId, setDeleteAdvanceSalaryId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchAdvanceSalaries = async () => {
    setIsLoading(true);
    toast.info("Loading advance salary data...");
    try {
      const response = await APIPayroll.getAllAdvanceSalaries();
      setAdvanceSalaries(response.data || []);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load advance salaries.");
      setIsLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await APIEmployees.getAllEmployees();
      setEmployees(response.employees || []);
    } catch (error) {
      toast.error("Failed to load employees.");
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchAdvanceSalaries();
  }, []);

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

  const handleDeleteClick = (id) => {
    setShowDeleteConfirmation(true);
    setDeleteAdvanceSalaryId(id);
  };

  const handleEditClick = (id) => {
    const salaryToEdit = advanceSalaries.find(salary => salary.id === id);
    setEditData(salaryToEdit);
    setShowEditPopup(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await APIPayroll.deleteAdvanceSalaryById(deleteAdvanceSalaryId);
      toast.success("Advance salary deleted successfully");
      fetchAdvanceSalaries();
    } catch (error) {
      toast.error("Failed to delete advance salary.");
    }
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      employee_id: parseInt(formData.get('employeeName')),
      month_and_year: formData.get('monthYear'),
      amount: parseInt(formData.get('amount')),
      one_time_deduct: formData.get('oneTimeDeduct'),
      monthly_installment_amount: parseInt(formData.get('monthlyInstallment')),
      reason: formData.get('reason')
    };

    try {
      await APIPayroll.createAdvanceSalary(data);
      toast.success("Advance salary created successfully");
      setShowAddForm(false);
      event.target.reset();
      fetchAdvanceSalaries();
    } catch (error) {
      toast.error("Failed to create advance salary.");
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = {
      employee_id: parseInt(formData.get('employeeName')),
      month_and_year: formData.get('monthYear'),
      amount: parseInt(formData.get('amount')),
      one_time_deduct: formData.get('oneTimeDeduct'),
      monthly_installment_amount: parseInt(formData.get('monthlyInstallmentEdit')),
      reason: formData.get('reason'),
      status: formData.get('status')
    };

    try {
      await APIPayroll.updateAdvanceSalaryById(editData.id, updatedData);
      toast.success("Advance salary updated successfully");
      setShowEditPopup(false);
      fetchAdvanceSalaries();
    } catch (error) {
      toast.error("Failed to update advance salary.");
    }
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Request Advance Salary</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthYear">
                  Month & Year *
                </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="monthYear" 
                  name="monthYear"
                  type="month" 
                  placeholder="Month & Year" 
                />
                <p className="text-gray-600 text-xs italic">Format: MONTH YEAR</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Amount *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount" type="text" placeholder="IDR Amount" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oneTimeDeduct">
                  One Time Deduct *
                </label>
                <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oneTimeDeduct" name="oneTimeDeduct">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthlyInstallment">
                  Monthly Installment Amount *
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monthlyInstallment" name="monthlyInstallment" type="number" placeholder="IDR" />
              </div>
              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                  Reason *
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" name="reason" placeholder="Reason"></textarea>
              </div>
            </div>
            <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
              <button type="button" className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </form>
        </div>
      )}
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">My Advance Salary Request</h2>
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
          <div className="flex justify-end">
              <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
          </div>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMPLOYEE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MONTH/YEAR</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ONE TIME DEDUCT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CREATED AT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-sm text-gray-500">Loading advance salary data...</td>
                </tr>
              ) : advanceSalaries.length > 0 ? (
                advanceSalaries.map((record) => (
                  <tr key={record.id}
                      onMouseEnter={() => handleMouseEnter(record.id)}
                      onMouseLeave={handleMouseLeave}
                      className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative flex items-center">
                      {record.fullname_employee}
                      <button
                        className="ml-6 text-blue-600 hover:text-blue-900 focus:outline-none"
                        style={{ visibility: hoveredShiftId === record.id ? 'visible' : 'hidden' }}
                        onClick={() => handleEditClick(record.id)}
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        className="ml-2 text-red-600 hover:text-red-900 focus:outline-none"
                        style={{ visibility: hoveredShiftId === record.id ? 'visible' : 'hidden' }}
                        onClick={() => handleDeleteClick(record.id)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.month_and_year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.one_time_deduct}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.monthly_installment_amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(record.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        record.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-sm text-gray-500">No advance salary data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
              Showing 1 to {advanceSalaries.length} of {advanceSalaries.length} records
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
      {showDeleteConfirmation && (
        <Transition appear show={showDeleteConfirmation} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setShowDeleteConfirmation(false)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Confirm Delete
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this overtime request? This action cannot be undone.
                  </p>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => setShowDeleteConfirmation(false)}
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      )}
      {showEditPopup && (
        <Transition appear show={showEditPopup} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setShowEditPopup(false)}>
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              </Transition.Child>

              <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Edit Advance Salary
                  </Dialog.Title>
                  <form onSubmit={handleEditSubmit}>
                    <div className="mt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="mb-2 md:col-span-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="employeeName">
                            Employee *
                          </label>
                          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employeeName" name="employeeName" defaultValue={editData?.employee_id}>
                            {employees.map((employee) => (
                              <option key={employee.id} value={employee.id}>{employee.first_name} {employee.last_name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthYear">
                            Month & Year *
                          </label>
                          <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="monthYear" 
                            name="monthYear"
                            type="month" 
                            defaultValue={editData?.month_and_year}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            Amount *
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount" type="number" defaultValue={editData?.amount} />
                        </div>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oneTimeDeduct">
                            One Time Deduct *
                          </label>
                          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oneTimeDeduct" name="oneTimeDeduct" defaultValue={editData?.one_time_deduct}>
                            <option>No</option>
                            <option>Yes</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthlyInstallmentEdit">
                            Monthly Installment Amount *
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="monthlyInstallmentEdit" name="monthlyInstallmentEdit" type="number" defaultValue={editData?.monthly_installment_amount} />
                        </div>
                        <div className="mb-4 md:col-span-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                            Reason *
                          </label>
                          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" name="reason" defaultValue={editData?.reason}></textarea>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Status *
                          </label>
                          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" name="status" defaultValue={editData?.status}>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      <button
                        onClick={() => setShowEditPopup(false)}
                        type="button"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default AdvanceSalary;

