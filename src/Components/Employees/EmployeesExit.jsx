import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeesExit = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoveredExitId, setHoveredExitId] = useState(null);
  const navigate = useNavigate();

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

  return (
    <>
      <div className="my-5 mx-5">
        {showAddForm && (
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full lg:w-2/3 px-3 mb-6 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-700">Add New Employee Exit</h2>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowAddForm(false)}>Hide</button>
                </div>
                {/* Form fields */}
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employee-to-exit">
                        Employee to Exit *
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="employee-to-exit" type="text" placeholder="Employee Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-type" onClick={handleExitTypeClick}>
                        Exit Type *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-type">
                          <option>Type of Exit</option>
                          {/* ... other options */}
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-date">
                        Exit Date *
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-date" type="date" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exit-interview">
                        Exit Interview *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exit-interview">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="disable-account">
                        Disable Account *
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="disable-account">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                        Description
                      </label>
                      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" placeholder="Description" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <div className="inline-flex">
                      <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2" type="reset" onClick={() => setShowAddForm(false)}>Reset</button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Exit Contract</h2>
                {/* Attachment field */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachment">
                    Attachment
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="attachment" type="file" accept=".gif,.png,.jpg,.jpeg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="my-5 mx-5">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">List All Employee Exit</h2>
            <div>
              <button className="text-sm bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2" onClick={handleExitTypeClick}>Exit Type</button>
              <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded cursor-pointer" onClick={handleAddNewClick}>Add New</button>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <label className="flex items-center">
                  Show
                  <select className="mx-2 rounded border border-gray-300 text-sm">
                    <option value="10">10</option>
                    {/* ... other options */}
                  </select>
                  entries
                </label>
              </div>
              <div>
                <input type="search" placeholder="Search" className="text-sm rounded border border-gray-300 p-2" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
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
                <tr onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-between items-center">
                    <span>User removed</span>
                    {hoveredExitId === 1 && (
                      <button onClick={() => handleDeleteClick(1)} className="text-red-600 hover:text-red-900 ml-4">
                        Delete
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Habis Kontrak</td>
                  <td className="px-6 py-4 whitespace-nowrap">28-04-2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Yes</td>
                  <td className="px-6 py-4 whitespace-nowrap">Yes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <span className="sr-only">Actions</span>
                  </td>
                </tr>
                <tr onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-between items-center">
                    <span>User removed</span>
                    {hoveredExitId === 2 && (
                      <button onClick={() => handleDeleteClick(2)} className="text-red-600 hover:text-red-900 ml-4">
                        Delete
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Habis Kontrak</td>
                  <td className="px-6 py-4 whitespace-nowrap">23-09-2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">No</td>
                  <td className="px-6 py-4 whitespace-nowrap">Yes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <span className="sr-only">Actions</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="text-sm text-gray-700">
              Showing 1 to 2 of 2 records
            </div>
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded focus:outline-none">
                Previous
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded focus:outline-none ml-2">
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