import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ReactQuill from 'react-quill';

const GoalsDetails = () => {

    const [activeTab, setActiveTab] = useState('Overview');
    const [progress, setProgress] = useState(0);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const GoalsDetail = {
        'Goal Type': '',
        'Progress': '%'
    };

    const GoalsOverview = {
        'Goal Details'  : '',
        'Goal Type'     : '',
        'Subject'       : '',
        'Target'        : '',
        'Progress'      : '',
        'Start Date'    : '',
        'End Date'      : '',
        'Project'       : '',
        'Task'          : '',
        'Award'         : '',
        'Training Sessions': '',
        'Travel'        : '',
        'Description'   : '',
    };
    
    const [goalsRatings, setgoalsRatings] = useState({
        'Goal Rating': 0,
    });
      
    const handleGoalsRatingChange = (criteria, value) => {
        setgoalsRatings(prevgoalsRatings => ({
          ...prevgoalsRatings,
          [criteria]: value
        }));
    };

    return(
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-10">
            <div className="lg:w-1/4 bg-white p-6 rounded-md shadow-lg h-64 ">
                <h2 className="text-xl font-bold mb-4">Goals Details</h2>
                <ul>
                    {Object.entries(GoalsDetail).map(([key, value]) => (
                        <li key={key} className="mb-2 border-b">
                            <span className="font-bold">{key}: </span>{value}
                        </li>
                    ))}
                </ul>
                <form>
                    {Object.keys(goalsRatings).map(criteria => (
                    <div key={criteria} className="flex items-center mb-2 border-b font-bold">
                        <label className="mr-2">{criteria}</label>
                        <div className="rating-stars flex ml-auto">
                        {[1, 2, 3, 4, 5].map(i => (
                            <FaStar
                            key={i}
                            className={goalsRatings[criteria] >= i ? "star active" : "star"}
                            onClick={() => handleGoalsRatingChange(criteria, i)}
                            style={{ color: goalsRatings[criteria] >= i ? "#ffc107" : "#e4e5e9", cursor: "pointer" }}
                            />
                        ))}
                        </div>
                    </div>
                    ))}
                </form>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Update Rating</button>
                </div>
            </div>
            <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 mr-auto">
                <div className="bg-white p-6 rounded shadow">
                    <div className="mb-6">
                    {/* Overview option header */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview and Edit Goals</h2>

                    {/* Tabs */}
                    <ul className="flex border-b">
                        <li className="-mb-px mr-1">
                        <a
                            className={`inline-block py-2 px-4 font-semibold ${activeTab === 'Overview' ? 'text-blue-500 border-b-2 border-blue-500 cursor-pointer' : 'text-gray-500 hover:text-gray-800 cursor-pointer'}`}
                            onClick={() => handleTabClick('Overview')}
                        >
                            Overview
                        </a>
                        </li>
                        <li className="mr-1">
                        <a
                            className={`inline-block py-2 px-4 font-semibold ${activeTab === 'Edit' ? 'text-blue-500 border-b-2 border-blue-500 cursor-pointer' : 'text-gray-500 hover:text-gray-800 cursor-pointer'}`}
                            onClick={() => handleTabClick('Edit')}
                        >
                            Edit
                        </a>
                        </li>
                        <li className="mr-1">
                        <a
                            className={`inline-block py-2 px-4 font-semibold ${activeTab === 'Addwork' ? 'text-blue-500 border-b-2 border-blue-500 cursor-pointer' : 'text-gray-500 hover:text-gray-800 cursor-pointer'}`}
                            onClick={() => handleTabClick('Addwork')}
                        >
                            Add Work
                        </a>
                        </li>
                    </ul>
                    </div>
                    {activeTab === 'Overview' && (
                    <div>
                        <ul>
                            {Object.entries(GoalsOverview).map(([key, value]) => (
                            <li key={key} className="mb-2 border-b">
                                <span className="font-bold">{key}: </span>{value}
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                    {activeTab === 'Edit' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goalType">
                                Goal Type
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="goalType">
                                    <option>Select Goal Type</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" name="subject" type="text" placeholder="Subject"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetAchievement">
                                Target Achievement
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="targetAchievement" name="targetAchievement" type="text" placeholder="Target Achievement"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                Start Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" name="start_date" type="date" />
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                End Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" name="end_date" type="date" />
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                Status
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status">
                                    <option>Started</option>
                                    <option>Not Started</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="progress">
                                    Progress
                                </label>
                                <input
                                    className="w-full"
                                    type="range"
                                    id="progress"
                                    name="progress"
                                    min="0"
                                    max="100"
                                    value={progress}
                                    onChange={(e) => setProgress(parseInt(e.target.value))}
                                />
                                <output htmlFor="progress">{progress}%</output>
                            </div>
                            <div className="mb-4 md:col-span-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                                </label>
                                <ReactQuill theme="snow" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-auto">Update Goal</button>
                    </div>
                    )}
                    {activeTab === 'Addwork' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">
                                Project
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="project">
                                    <option>Select Projects</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
                                Task
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task">
                                    <option>Select Taks</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="award">
                                Award
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="award">
                                    <option>Select Award</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trainingSession">
                                Training Session
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="trainingSession">
                                    <option>Select Training</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="travel">
                                Travel
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="travel">
                                    <option>Select Travel</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-auto">Add Work</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GoalsDetails;
