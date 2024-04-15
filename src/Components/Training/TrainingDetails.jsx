import React from "react";
import ReactQuill from 'react-quill';

const TrainingDetails = () => {
    const TrainingOverview = {
        'Training Skill'  : '',
        'Trainer'     : '',
        'Training Cost'       : '',
        'Start Date'        : '',
        'End Date'      : '',
        'Status'    : '',
        'Created at'      : '',
        'Associated Goals'       : '',
    };

    const TrainingName = {
        'Null' : '',
    }
    
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-10">
            <div className="lg:w-1/4 bg-white p-6 rounded-md shadow-lg h-auto ">
                <h2 className="text-xl font-bold mb-4">Update Status</h2>
                <div className="mb-4 md:col-span-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="performance">
                    Performance
                    </label>
                    <div className="relative">
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="performance">
                        <option>Not Concluded</option>
                    </select>
                    </div>
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
                <div className="mb-4 md:col-span-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
                    Remarks
                    </label>
                    <ReactQuill theme="snow" />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-auto">Update Status</button>
            </div>
            <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 mr-auto">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <div className="bg-white p-6 rounded shadow">
                    <div>
                        <ul>
                            {Object.entries(TrainingOverview).map(([key, value]) => (
                            <li key={key} className="mb-2 border-b">
                                <span className="font-bold">{key} </span>{value}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4 mt-4">Training Details</h2>
                <div className="bg-white p-6 rounded shadow">
                    <div>
                        <ul>
                            {Object.entries(TrainingName).map(([key, value]) => (
                            <li key={key} className="mb-2 border-b">
                                <span className="font-bold">{key} </span>{value}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingDetails