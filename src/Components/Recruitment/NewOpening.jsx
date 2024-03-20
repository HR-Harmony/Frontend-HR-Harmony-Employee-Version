import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { ArrowCircleRightIcon, CheckCircleIcon, RefreshIcon, PlayIcon, PauseIcon, PencilAltIcon, TrashIcon} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const TasksList = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleReset = () => {
    setShowAddForm(false);
  };

  const handleViewDetailsClick = (jobId) => {
    navigate(`/recruitment/job-details/${jobId}`);
  };

  const handleEditJobClick = (jobId) => {
    navigate(`/recruitment/edit-job/${jobId}`);
  };

  const joblist = [
    { id: '1', title: 'UI Engineer', jobType: 'Full-time', datePosted: '10-03-2023', numberOfPositions: 2, gender: 'Any', closingDate: '15-04-2023', status: 'Published' },
    { id: '2', title: 'Front End Engineer', jobType: 'Full-time', datePosted: '10-03-2023', numberOfPositions: 2, gender: 'Any', closingDate: '15-04-2023', status: 'Published' },
    { id: '3', title: 'Cloud Engineer', jobType: 'Part-time', datePosted: '10-03-2023', numberOfPositions: 2, gender: 'Any', closingDate: '15-04-2023', status: 'Published' },
    { id: '4', title: 'Backend Engineer', jobType: 'Internship', datePosted: '10-03-2023', numberOfPositions: 2, gender: 'Any', closingDate: '15-04-2023', status: 'Unublished' },
    { id: '5', title: 'Network Engineer', jobType: 'Part-time', datePosted: '10-03-2023', numberOfPositions: 2, gender: 'Male', closingDate: '15-04-2023', status: 'Published' },
  ];

  return (
    <div className='w-full mx-auto p-5 bg-white'>
      <div className='shadow-md rounded-md p-5 flex justify-between items-center bg-white mb-7'>
        <h2 className='text-2xl'>Job Listing</h2>
        <button className='text-white bg-blue-600 border-blue-600 py-2 px-4 rounded text-lg leading-6 cursor-pointer hover:bg-blue-700 hover:border-blue-700' onClick={handleAddNewClick}>+ Add New Job</button>
      </div>

      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">Add New Job</h2>
        </div>
        
        <form className="px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Title */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title*
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
              </div>
          
              {/* Job Type */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
                  Job Type *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="jobType"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  >
                  <option value="" disabled>Select Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  </select>
              </div>

              {/* Designation */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                  Designation *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="designation"
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                  >
                  <option value="" disabled>Designation</option>
                  <option value="Full Time">Engineer</option>
                  <option value="Part Time">HR</option>
                  <option value="Internship">Finance</option>
                  </select>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              {/* Number of Positions */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPositions">
                  Number of Positions*
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numberOfPositions" type="text" placeholder="Number of Positions" />
              </div>

              {/* Status */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobStatus">
                  Status *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="designation"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                  <option value="" disabled>Status</option>
                  <option value="Published">Published</option>
                  <option value="Unpublished">Unublished</option>
                  </select>
              </div>

              {/* Date of Closing */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  Closing Date*
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="closingDate" type="date" />
              </div>

              {/* Gender */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  Gender *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  >
                  <option value="" disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  </select>
              </div>

              {/* Experiences */}
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                  Experiences *
                  </label>
                  <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="experiences"
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  >
                  <option value="" disabled>Experience</option>
                  <option value="Fresh Graduate">Fresh Graduate</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>
                  <option value="5 Year">5 Year</option>
                  <option value="5 Year +">5 Year +</option>
                  </select>
              </div>
          </div>

          {/* Short Description */}
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
              Short Description*
              </label> 
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numberOfPositions" type="text" placeholder="Short Description" />
          </div>

          {/* Long Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Long Description
            </label>
            <ReactQuill theme="snow" />
          </div>

          {/* Reset and Save Button */}
          <div className="flex justify-end bg-gray-200 px-4 py-3">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </form>
      </div>
      )}

      {/* Card List All Jobs */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {joblist.map((job) => (
            <div key={job.id} className='relative bg-white rounded-lg shadow-lg p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg font-bold text-gray-700'>#{job.id}. {job.title}</h3>
                <span className='text-sm text-gray-500'>{job.datePosted}</span>
            </div>
            <div className='mb-4'>
                <span className='text-sm font-bold text-gray-700'>Job Type: </span>
                <span className='text-sm text-gray-500'>{job.jobType}</span>
            </div>
            <div className='mb-4'>
                <span className='text-sm font-bold text-gray-700'>Number of Positions: </span>
                <span className='text-sm text-gray-500'>{job.numberOfPositions}</span>
            </div>
            <div className='mb-4'>
                <span className='text-sm font-bold text-gray-700'>Gender: </span>
                <span className='text-sm text-gray-500'>{job.gender}</span>
            </div>
            <div className='mb-4'>
                <span className='text-sm font-bold text-gray-700'>Closing Date: </span>
                <span className='text-sm text-gray-500'>{job.closingDate}</span>
            </div>
            <div className='mb-4'>
                <span className='text-sm font-bold text-gray-700'>Status: </span>
                <span className={`text-sm font-bold ${job.status === 'Published' ? 'text-green-500' : 'text-red-500'}`}>{job.status}</span>
            </div>
            <div className='absolute bottom-2 right-2 flex items-center space-x-2'>
                <button className='text-blue-600 hover:text-blue-700' onClick={() => handleViewDetailsClick(job.id)}>
                <ArrowCircleRightIcon className='h-5 w-5' />
                </button>
                <button className='text-blue-600 hover:text-blue-700' onClick={() => handleEditJobClick(job.id)}>
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
  )
}

export default TasksList;