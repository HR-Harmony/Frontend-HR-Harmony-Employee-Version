import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { ArrowCircleRightIcon, CheckCircleIcon, RefreshIcon, PlayIcon, PauseIcon, PlusIcon, PencilIcon, PencilAltIcon, TrashIcon, EyeIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleHideClick = () => {
    setShowAddForm(false);
  };

  const handleReset = () => {
    setShowAddForm(false);
    setSelectedProject('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };
  
  const handleViewDetailsClick = (projectId) => {
    navigate(`/tasks/project-details/${projectId}`);
  };

  const handleEditProjectClick = (projectId) => {
    navigate(`/tasks/project-details/${projectId}`);
  };

  const projects = [
    { id: '1', title: 'Website Redesign', description: 'Redesigning the corporate website', dueDate: '12-05-2023', status: 'Cancelled', progress: 30 },
    { id: '2', title: 'Mobile App Dev', description: 'Developing a cross-platform mobile', dueDate: '20-07-2023', status: 'Completed', progress: 100 },
    { id: '3', title: 'Cloud Migration', description: 'Migrating infrastructure to the cloud', dueDate: '13-08-2023', status: 'In Progress', progress: 60 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-500 bg-green-100';
      case 'In Progress':
        return 'text-blue-500 bg-blue-100';
      case 'On Hold':
        return 'text-red-500 bg-red-100';
      case 'Cancelled':
        return 'text-red-500 bg-red-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  const getProgressBarColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'On Hold':
        return 'bg-red-500';
      case 'Cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-300'; // Default color if status is not recognized
    }
  };

  return (
    <div className='max-w-full mx-auto p-5 bg-white'>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-white mr-3" />
              <div>
                <p className="font-bold text-xl">10</p>
                <p className="text-sm">Total Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <RefreshIcon className="h-8 w-8 text-white mr-3" />
              <div>
                <p className="font-bold text-xl">3</p>
                <p className="text-sm">Total In Progress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <div className="bg-teal-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <PlayIcon className="h-8 w-8 text-white mr-3" />
              <div>
                <p className="font-bold text-xl">5</p>
                <p className="text-sm">Total Not Started</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <div className="bg-red-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <PauseIcon className="h-8 w-8 text-white mr-3" />
              <div>
                <p className="font-bold text-xl">1</p>
                <p className="text-sm">Total On Hold</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='shadow-md rounded-md p-5 flex justify-between items-center bg-white mb-7'>
        <h2 className='text-2xl'>Projects</h2>
        <button className='text-white bg-blue-600 border-blue-600 py-2 px-4 rounded text-lg leading-6 cursor-pointer hover:bg-blue-700 hover:border-blue-700' onClick={handleAddNewClick}>+ Add Project</button>
      </div>

      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Project</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          
          <form className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {/* Title */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title*
                </label> 
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
              </div>
              {/* Start Date */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" />
              </div>
              {/* Client */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client">
                  Client*
                </label> 
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="client" type="text" placeholder="Client" />
              </div>
              {/* End Date */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" />
              </div>
              {/* Summary */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                  Summary*
                </label> 
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="summary" type="text" placeholder="Summary" />
              </div>
              {/* Estimated Hour */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimatedHour">
                  Estimated Hour
                </label> 
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="estimatedHour" type="number" placeholder="Estimated Hour" />
              </div>
              {/* Priority */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                  Priority
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="priority">
                  <option>Highest</option>
                  {/* Add other priority options here */}
                </select>
              </div>
            </div>

            {/* Team */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team">
                Team
              </label> 
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team" type="text" placeholder="Team" />
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
              <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleHideClick}>Reset</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </form>
        </div>
      )}

      {/* Card List All Projects */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <div key={project.id} className='bg-white rounded-lg shadow-lg p-4'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-bold text-gray-700'>#{project.id}. {project.title}</h3>
              <span className='text-sm text-gray-500'>{project.dueDate}</span>
            </div>
            <p className='text-gray-600 mb-2'>
              {project.description}
            </p>
            <div className='mb-4'>
              <span className='text-sm font-bold text-gray-700'>Due: </span>
              <span className='text-sm text-gray-500'>{project.dueDate}</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
              <div className={getProgressBarColor(project.status) + ' h-2.5 rounded-full'} style={{ width: `${project.progress}%` }}></div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(project.status).split(' ')[1]}`}></span>
                <span className={`text-xs font-semibold ${getStatusColor(project.status).split(' ')[0]}`}>{project.status}</span>
              </div>
              <div className='flex items-center'>
                <button className='text-blue-600 hover:text-blue-700 mr-2' onClick={() => handleViewDetailsClick(project.id)}>
                  <ArrowCircleRightIcon className='h-5 w-5' />
                </button>
                <button className='text-blue-600 hover:text-blue-700 mr-2' onClick={() => handleEditProjectClick(project.id)}>
                  <PencilAltIcon className='h-5 w-5' />
                </button>
                <button className='text-blue-600 hover:text-blue-700'>
                  <TrashIcon className='h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
