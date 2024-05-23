import React, { useState, useEffect, useRef } from 'react';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { APIAttendance } from '@/Apis/APIAttendance';
import { APIEmployees } from '@/Apis/APIEmployees';
import { toast } from 'react-toastify';

const OvertimeRequest = () => {
  const [visibleDelete, setVisibleDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [overtimeRequests, setOvertimeRequests] = useState([]);
  const formRef = useRef(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteRequestId, setDeleteRequestId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOvertimeRequests = async () => {
    setIsLoading(true);
    try {
      const response = await APIAttendance.getAllOvertimeRequests();
      setOvertimeRequests(response.data || []);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load overtime requests.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true);
      try {
        const response = await APIEmployees.getAllEmployees();
        if (response.employees) {
          setEmployees(response.employees || []);
          setIsLoading(false);
        } else {
          toast.error("Failed to load employees.");
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchEmployees();
    fetchOvertimeRequests();
  }, []);

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    formRef.current.reset();
  };

  const handleEditClick = (requestId) => {
    const requestToEdit = overtimeRequests.find(request => request.id === requestId);
    if (requestToEdit) {
      setSelectedRequest(requestToEdit);
      setShowEditModal(true);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleDeleteClick = (requestId) => {
    setDeleteRequestId(requestId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    if (deleteRequestId) {
      try {
        await APIAttendance.deleteOvertimeRequest(deleteRequestId);
        toast.success("Overtime request deleted successfully.");
        setShowDeleteConfirmation(false);
        fetchOvertimeRequests();
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to delete overtime request.");
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await APIAttendance.createOvertimeRequest({
        ...data,
        employee_id: parseInt(data.employee_id, 10)
      });
      setShowModal(false);
      fetchOvertimeRequests();
      toast.success("Overtime request added successfully.");
    } catch (error) {
      toast.error("Failed to add overtime request.");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (selectedRequest) {
      setIsLoading(true);
      try {
        await APIAttendance.updateOvertimeRequest(selectedRequest.id, {
          ...selectedRequest,
          employee_id: parseInt(selectedRequest.employee_id, 10)
        });
        toast.success("Overtime request updated successfully.");
        setShowEditModal(false);
        fetchOvertimeRequests();
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to update overtime request.");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">My Overtime Request</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Out Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-sm text-gray-500">Loading overtimes data...</td>
                </tr>
              ) : overtimeRequests.length > 0 ? (
                overtimeRequests.map((request) => {
                  return (
                    <tr key={request.id}
                        onMouseEnter={() => setVisibleDelete(request.id)}
                        onMouseLeave={() => setVisibleDelete(null)}
                        className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative">
                        {request ? `${request.full_name_employee}` : 'Employee Not Found'}
                        {visibleDelete === request.id && (
                          <>
                            <button className="absolute right-0 top-0 bottom-0 mr-10" onClick={() => handleEditClick(request.id)}>
                              <PencilAltIcon className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                            </button>
                            <button className="absolute right-0 top-0 bottom-0 mr-4" onClick={() => handleDeleteClick(request.id)}>
                              <TrashIcon className="h-5 w-5 text-red-600 hover:text-red-800" />
                            </button>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.in_time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.out_time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.total_work}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${request.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : request.status === 'Accepted' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-sm text-gray-500">No overtimes data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
            Showing 1 to {overtimeRequests.length} of {overtimeRequests.length} records
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

    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleCloseModal}>
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
                Add Overtime Request Information
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  We need below required information to add this record.
                </p>
                {/* Form fields */}
                <form className="mt-4" onSubmit={handleSubmit} ref={formRef}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                      Date *
                    </label>
                    <input name="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inTime">
                        In Time *
                      </label>
                      <input name="in_time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inTime" type="time" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outTime">
                        Out Time *
                      </label>
                      <input name="out_time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="outTime" type="time" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-4 text-sm text-gray-700">
                      Reason *
                      <textarea
                        name="reason"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Reason for overtime"
                        rows="3"
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>

    {showEditModal && (
      <Transition appear show={showEditModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleCloseEditModal}>
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
                  Edit Overtime Request Information
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Update the required information for this record.
                  </p>
                  {/* Form fields */}
                  <form className="mt-4" onSubmit={handleUpdateSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                          Date *
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" value={selectedRequest ? selectedRequest.date : ''} onChange={(e) => setSelectedRequest({ ...selectedRequest, date: e.target.value })} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inTime">
                          In Time *
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inTime" type="time" value={selectedRequest ? selectedRequest.in_time : ''} onChange={(e) => setSelectedRequest({ ...selectedRequest, in_time: e.target.value })} required />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outTime">
                          Out Time *
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="outTime" type="time" value={selectedRequest ? selectedRequest.out_time : ''} onChange={(e) => setSelectedRequest({ ...selectedRequest, out_time: e.target.value })} required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-4 text-sm text-gray-700">
                        Reason *
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Reason for overtime"
                          rows="3"
                          value={selectedRequest ? selectedRequest.reason : ''}
                          onChange={(e) => setSelectedRequest({ ...selectedRequest, reason: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      <button
                        onClick={handleCloseEditModal}
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    )}

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
  </div>
  );
};

export default OvertimeRequest;