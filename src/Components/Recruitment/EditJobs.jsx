import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';

const EditJobs = () => {

    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('');
    const [selectedDesignation, setSelectedDesignation] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');

    const handleResetClick = () => {
        navigate(`/recruitment/new-opening`);
      };

    return(
    <div className='w-full mx-auto p-5 bg-white'>
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
              <button className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none" onClick={handleResetClick}>Reset</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
            </div>
          </form>
        </div>
    </div>
    )
}
export default EditJobs;