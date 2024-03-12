import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid'; // Importing the TrashIcon

const EmployeesExit = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoveredExitId, setHoveredExitId] = useState(null);
  const navigate = useNavigate();

  const maxSize = 5 * 1024 * 1024; // 5MB in bytes

  const handleExitTypeClick = () => {
    navigate('/employees/exit-type');
  };
  
  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleMouseEnter = (exitId) => {
    setHoveredExitId(exitId);
  };

  const handleMouseLeave = () => {
    setHoveredExitId(null);
  };

  const handleDeleteClick = (exitId) => {

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > maxSize) {
      alert('File is too large. Max size is 5MB.');
      event.target.value = ''; // Clear the file input for new selection
    } else {
      // Handle the file upload process
    }
  };

  return (
    <>
      <div className="my-5 mx-5">
        {showAddForm && (
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full lg:w-2/3 px-3 lg:mb-0">
              <div className="bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-700">Add New Employee Exit</h2>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={() => setShowAddForm(false)}>Hide</button>
                </div>
                {/* Form fields */}
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-2 mt-3 ml-3">
                    <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employee-to-exit">
                        Employee to Exit *
                      </label>
                      <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="employee-to-exit" type="text" placeholder="Employee Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-type" onClick={handleExitTypeClick}>
                        Exit Type *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-type">
                          <option>Type of Exit</option>
                          {/* ... other options */}
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 py-2 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-date">
                        Exit Date *
                      </label>
                      <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-date" type="date" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 py-2">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-interview">
                        Exit Interview *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-interview">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 py-2">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="disable-account">
                        Disable Account *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="disable-account">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3 py-2">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                        Description
                      </label>
                      <textarea className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" placeholder="Description" rows="3"></textarea>
                    </div>
                  </div>
                </form>
                <div className="border-t border-gray-300 mx-3 my-4"></div>
                <div className="pb-5 pr-4 flex justify-end">
                    <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2" type="reset" onClick={() => setShowAddForm(false)}>Reset</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 lg:mb-0">
              <div className="bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-700">Exit Contract</h2>
                </div>
                <div className="p-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachment">
                    Attachment
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1" id="attachment" type="file" accept=".gif,.png,.jpg,.jpeg" onChange={handleFileChange} />
                  <span className="block text-xs text-gray-500 mt-2">(Upload files only: gif,png,jpg,jpeg)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5">
        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">List All Employee Exit</h2>
          <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2" onClick={handleExitTypeClick}>
              Exit Type
            </button>
            <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddNewClick}>
              Add New
            </button>
          </div>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EMPLOYEE TO EXIT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXIT TYPE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXIT DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXIT INTERVIEW
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DISABLE ACCOUNT
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: 1, employeeName: 'Arfara Yema', exitType: 'Habis Kontrak', exitDate: '28-04-2023', exitInterview: 'Yes', disableAccount: 'Yes' },
                  { id: 2, employeeName: 'Fakhrity Hikmawan', exitType: 'Resign', exitDate: '23-09-2023', exitInterview: 'No', disableAccount: 'Yes' }
                ].map((exit) => (
                  <tr key={exit.id} onMouseEnter={() => handleMouseEnter(exit.id)} onMouseLeave={handleMouseLeave} className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900 flex justify-between items-center">
                      <span>{exit.employeeName}</span>
                      {hoveredExitId === exit.id && (
                        <button onClick={() => handleDeleteClick(exit.id)} className="text-red-600 hover:text-red-900 ml-4 mr-2">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exit.exitType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exit.exitDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exit.exitInterview}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exit.disableAccount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
      </div>
    </>
  );
};

export default EmployeesExit;
