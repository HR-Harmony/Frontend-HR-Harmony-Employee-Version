import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { ArrowCircleRightIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts';

const Helpdesk = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [ticketStatusData, setTicketStatusData] = useState({});
  const [ticketPriorityData, setTicketPriorityData] = useState({});

  const handleAddTicketClick = () => {
    setShowAddForm(true);
  };

  const handleCancelClick = () => {
    setShowAddForm(false);
  };

  const handleViewDetailsClick = (ticketId) => {
    navigate(`/helpdesk/ticket-details/${ticketId}`);
  };

  
  const handleEditTicketClick = (ticketId) => {
    setSelectedTicketId(ticketId);
    setShowEditPopup(true);
  };

  const handleCancelEditClick = () => {
    setSelectedTicketId(null);
    setShowEditPopup(false);
  };

  const handleUpdateTicketClick = () => {
    console.log('Updating ticket with ID:', selectedTicketId);
    handleCancelEditClick();
  };
  
  //Chart logics
  useEffect(() => {
    const calculateChartData = () => {
      // Menghitung jumlah tiket berdasarkan status
      const statusData = {};
      ticketlist.forEach(ticket => {
        statusData[ticket.status] = statusData[ticket.status] ? statusData[ticket.status] + 1 : 1;
      });
      setTicketStatusData(statusData);

      // Menghitung jumlah tiket berdasarkan prioritas
      const priorityData = {};
      ticketlist.forEach(ticket => {
        priorityData[ticket.priority] = priorityData[ticket.priority] ? priorityData[ticket.priority] + 1 : 1;
      });
      setTicketPriorityData(priorityData);
    };
    
    calculateChartData();
  }, []);

  const statusChartOptions = {
    labels: Object.keys(ticketStatusData),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    legend: {
      show: true,
      position: 'right',
    },
  };

  const priorityChartOptions = {
    labels: Object.keys(ticketPriorityData),
    colors: ['#FF4560', '#FEB019', '#00E396', '#008FFB'],
    legend: {
      show: true,
      position: 'right',
    },
  };

  const ticketlist = [
    { id: '1', subject: 'Account lock', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Open' },
    { id: '2', subject: 'Reset Password', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Closed' },
    { id: '3', subject: 'Change Profile', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Open' },
    { id: '4', subject: 'Attendances Error', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "Low",  status: 'Open' },
    { id: '5', subject: 'I love you admin', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Closed' },
    { id: '6', subject: 'Cannot access account', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Open' },
  ];

  return (
    <div>
      <Header/>
      <div className='w-full mx-auto p-5 bg-white'>
        <div className='shadow-md rounded-md p-5 flex justify-between items-center bg-white mb-7'>
          <h2 className='text-2xl'>Ticket List</h2>
          <button className='text-white bg-blue-600 border-blue-600 py-2 px-4 rounded text-lg leading-6 cursor-pointer hover:bg-blue-700 hover:border-blue-700' onClick={handleAddTicketClick}>+ Create Ticket</button>
        </div>

        {/* Add New Ticket */}
        {showAddForm && (
          <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-700">Create Ticket</h2>
            </div>

            <form className="px-4 py-2">
              {/* Input fields for ticket creation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Subject*
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                  Priority *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="priority"
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  >
                  <option value="" disabled>Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  Department *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="department"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                  <option value="" disabled>Department</option>
                  <option value="HR">HR</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Sales">Sales</option>
                  <option value="Finance">Finance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee">
                  Employee *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employee"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  >
                  <option value="" disabled>Select Employee</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <ReactQuill theme="snow" />
              </div>

              {/* Reset and Save Button */}
              <div className="flex justify-end bg-gray-200 px-4 py-3">
                <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleCancelClick}>Cancel</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Create</button>
              </div>
            </form>
          </div>
        )}

        {/* Edit Ticket Popup */}
        {showEditPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md">
              <h2 className="text-xl font-bold mb-4">Edit Ticket Information</h2>
              <p className="mb-4">We need below required information to update this record.</p>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter subject" />
              </div>
              <div className="mb-4">
                <label htmlFor="priority" className="block text-gray-700 font-bold mb-2">Priority</label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="priority"
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  >
                  <option value="" disabled>Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                  </select>
              </div>
              <div className="flex justify-end">
                <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleCancelEditClick}>Cancel</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleUpdateTicketClick}>Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Ticket list cards and charts */}
        <div className='flex flex-col-reverse md:flex-row justify-between'>
            <div className='w-full md:w-3/4 mb-4 md:mb-0 md:ml-4'>
                <div className=''>
                    {ticketlist.map((ticket) => (
                    <div key={ticket.id} className='relative bg-white rounded-lg shadow-lg p-4 mb-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-lg font-bold text-gray-700'>#{ticket.id}. {ticket.subject}</h3>
                        <span className='text-sm text-gray-500'>{ticket.dateCreated}</span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-sm font-bold text-gray-700'>Assigned to : </span>
                        <span className='text-sm text-gray-500'>{ticket.assignedTo}</span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-sm font-bold text-gray-700'>Priority : </span>
                        <span className={`text-sm font-bold ${ticket.priority ? 'text-green-500' : 'text-red-500'}`}>{ticket.priority}</span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-sm font-bold text-gray-700'>Status: </span>
                        <span className={`text-sm font-bold ${ticket.status ? 'text-green-500' : 'text-red-500'}`}>{ticket.status}</span>
                    </div>
                    <div className='absolute bottom-2 right-2 flex items-center space-x-2'>
                        <button className='text-blue-600 hover:text-blue-700' onClick={() => handleViewDetailsClick(ticket.id)}>
                        <ArrowCircleRightIcon className='h-5 w-5' />
                        </button>
                        <button className='text-blue-600 hover:text-blue-700' onClick={() => handleEditTicketClick(ticket.id)}>
                        <PencilAltIcon className='h-5 w-5' />
                        </button>
                        <button className='text-blue-600 hover:text-blue-700'>
                        <TrashIcon className='h-5 w-5' />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Circular Charts */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0 md:ml-4">
                {/* Ticket Status Chart */}
                <div className="bg-white rounded-md shadow-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-4">Ticket Status</h3>
                    <Chart options={statusChartOptions} series={Object.values(ticketStatusData)} type="donut" width="100%" />
                </div>
            
                {/* Ticket Priority Chart */}
                <div className="bg-white rounded-md shadow-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-4">Ticket Priority</h3>
                    <Chart options={priorityChartOptions} series={Object.values(ticketPriorityData)} type="donut" width="100%" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Helpdesk;
