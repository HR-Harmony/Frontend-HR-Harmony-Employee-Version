import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const OvertimeRequest = () => {
  const [visibleDelete, setVisibleDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (employeeId) => {

  };

  const overtimeRequests = [
    {
      id: 1,
      employee: 'Fakhrity Hikmawan',
      date: '2023-07-01',
      inTime: '09:00',
      outTime: '17:00',
      totalHours: '8',
      status: 'Approved'
    },
    {
      id: 2,
      employee: 'Arfara Yema Samgusdian',
      date: '2023-07-02',
      inTime: '10:00',
      outTime: '18:00',
      totalHours: '8',
      status: 'Pending'
    }
  ];

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Overtime Request</h2>
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
              {overtimeRequests.map((request) => (
                <tr key={request.id}
                    onMouseEnter={() => setVisibleDelete(request.id)}
                    onMouseLeave={() => setVisibleDelete(null)}
                    className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative">
                    <span>{request.employee}</span>
                    {visibleDelete === request.id && (
                      <button className="absolute right-0 top-0 bottom-0 mr-4">
                        <TrashIcon className="h-5 w-5 text-red-600 hover:text-red-800" />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.inTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.outTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.totalHours}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {request.status}
                    </span>
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

    {/* Modal untuk Add New Overtime Request */}
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
                <form className="mt-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee">
                      Employee *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employee" type="text" placeholder="Employee name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                      Date *
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inTime">
                        In Time *
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inTime" type="time" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outTime">
                        Out Time *
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="outTime" type="time" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-4 text-sm text-gray-700">
                      Reason *
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Reason for overtime"
                        rows="3"
                      />
                    </label>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={handleCloseModal}
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
  </div>
  );
};

export default OvertimeRequest;