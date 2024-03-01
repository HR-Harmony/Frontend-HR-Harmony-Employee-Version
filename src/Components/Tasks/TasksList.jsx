import React, { useState, useEffect } from 'react';
import './TasksList.css';
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const TasksList = () => {
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
        setProgress(progress);
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

  return (
    <div className="tasks-container">
      <div className="tasks-overview-container">
        <div className="tasks-overview-item" style={{ backgroundColor: '#8D8D8D', color: 'white' }}>
          <h3>Tasks in Progress</h3>
          <p>4</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#3D66F0', color: 'white' }}>
          <h3>Tasks Completed</h3>
          <p>4</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#5FB549', color: 'white' }}>
          <h3>Tasks On Hold</h3>
          <p>5</p>
        </div>
        <div className="tasks-overview-item" style={{ backgroundColor: '#E9615C', color: 'white' }}>
          <h3>Tasks Not Started</h3>
          <p>2</p>
        </div>
      </div>

      <div className='tasks-list-header'>
        <h2>List All Tasks</h2>
        <button onClick={handleAddNewClick}>+ Add New Tasks</button>
      </div>

      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-5xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Add New Employee</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleHideClick}>Hide</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-2">
            <div className="mb-4 md:col-span-2 lg:col-span-3"> 
              <div className="grid grid-cols-3 gap-4">
                <div> {/* Title */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Title*
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Title" />
                </div>
                <div> {/* Start Date */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date*
                  </label>
                  <label className="block mb-4 text-sm text-gray-700">
                  <input className="w-full p-2 border border-gray-300 rounded" type="date" name="date" />
                  </label>
                </div>
                <div> {/* End Date */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  End Date*
                  </label>
                  <label className="block mb-4 text-sm text-gray-700">
                    <input className="w-full p-2 border border-gray-300 rounded" type="date" name="date" />
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4 md:col-span-2 lg:col-span-3"> 
              <div className="grid grid-cols-3 gap-4">
                <div> {/* Estimated Hour */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Estimated Hour*
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="EstimatedHour" type="text" placeholder="Estimated Hour" />
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1">{/* Select Project */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="choose_project">
                  Choose Project *
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="project"
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                  >
                    <option value="" disabled>Select Project</option>
                    <option value="HR Harmony">HR Harmony</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                  </select>
                </div>
                <div> {/* Summary */}
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Summary*
                  </label> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Summary" type="text" placeholder="Summary" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 md:col-span-1 lg:col-span-1"> 
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Description*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="installment" type="text" placeholder="Description" />
            </div>
          </div>

          {/* Reset and Save Button */}
          <div className="flex justify-end bg-gray-200 px-4 py-3 rounded-b">
            <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleReset}>Reset</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
          </div>
        </div>
      )}

      <div className='tasks-list-container'>
        <div className='tasks-list-card'>
          <div className='tasks-list-card-header'>
            <h2>1. Buat endpoint fitur absensi</h2>
            <h2>12-05-2024</h2>
          </div>
          <div className='tasks-list-card-body'>
            <p>buat dengan bahasa golang dan database postgree SQL</p>
            <p>Due : 12-06-2024</p>
            <div className="tasks-progress-bar-container">
              <div className="tasks-progress-bar" style={{ width: `${progress}%` }}>
                <div className="tasks-progress-text" style={{ left: `calc(${progress}% - 20px)` }}> {`${progress}%`}
                </div>
              </div>
            </div>
          </div>
        <div className='tasks-list-card-footer'>
          <button>Completed</button>
          <GrView className='tasks-list-card-icon'/>
          <FaEdit className='tasks-list-card-icon' onClick={setModalOpen}/>
          <MdDeleteOutline className='tasks-list-card-icon'/>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Edit Tasks Detail</h2>
            <form>
              <label className="block mb-4 text-sm text-gray-700">
                Title
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="input"
                  name="tasksTitle"/>
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Start Date
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="startDate"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                End Date
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="endDate"
                />
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Estimated Hours
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="input"
                  name="estimatedHour"/>
              </label>
              <label className='block mb-4 text-sm text-gray-700'>
                Select Project
                <select
                  className='w-full p-2 border border-gray-300 rounded'
                  id="project"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}>
                  <option value="" disabled>Select Project</option>
                  <option value="HR Harmony">HR Harmony</option>
                  <option value="Project 1">Project 1</option>
                  <option value="Project 2">Project 2</option>
                </select>
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Summary
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="input"
                  name="summary"/>
              </label>
              <label className="block mb-4 text-sm text-gray-700">
                Description
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="description"
                  name="description"/>
              </label>
              
              <label className="block mb-4 text-sm text-gray-700">
                Progress
                <div className="relative pt-1">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-teal-600 bg-teal-200">
                      {progress}% Complete
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      className="w-full rounded overflow appearance-none h-2"
                      style={{
                        background: `linear-gradient(to right, #4299e1 ${progress}%, #cbd5e0 ${progress}%)`
                      }}
                      value={progress}
                      onChange={(e) => updateProgress(parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </label>


              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-700 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default TasksList