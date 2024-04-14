import React, { useState } from 'react';
import Header from "../Header/Header";
import { FiBriefcase, FiClock, FiUser, FiEye, FiCalendar } from "react-icons/fi";
import { FaStar } from 'react-icons/fa';

const AppraisalDetails = () => {

    const [technicalRatings, settechnicalRatings] = useState({
        'BDD - Selling Skill': 0,
        'BDD - Handling Objection': 0,
        'BDD - Negotiation Skill': 0,
        'BDD - Proposal Development': 0,
        'BDD - After Sales Management - 1': 0,
        'BDD - Customer Relationship Management': 0,
        'BDD - Hubungan Interpersonal': 0,
        'BDD - Communication Skill': 0,
        'BSD - Product Knowledge': 0,
        'BSD - Project Management': 0,
        'BSD - Delivering Procedures or Process': 0,
        'BSD - Collaborating Process': 0,
        'BSD - Customer Satisfaction': 0,
        'BSD - Self Confidence': 0,
        'BSD - Emphaty': 0,
        'TID - Computer Literacy': 0,
        'TID - System Database Management': 0,
        'TID - Network Management': 0,
        'TID - Program Development': 0,
        'TID - Coding Management': 0,
        'TID - System Analyze': 0,
        'TID - User Experience Management (U/X)': 0
    });
    
    const [orgRatings, setorgRatings] = useState({
        'Creativity': 0,
        'Ultimate Speed': 0,
        'Reliable': 0,
        'Open Minded': 0,
        'Superior Service': 0,
        'Integrity': 0,
        'Agile Entrepreneur': 0,
        'Daya Tahan Stress': 0,
        'Stabilitas Emosi': 0,
        'Motivasi Berprestasi' : 0,
        'Attention to Detail' : 0,
        'Time Management' : 0,
        'Quality Orientation' : 0,
        'Result Orientation' : 0
    });


    const handleTechnicalRatingChange = (criteria, value) => {
        settechnicalRatings(prevtechnicalRatings => ({
          ...prevtechnicalRatings,
          [criteria]: value
        }));
    };
    
    const handleOrgRatingChange = (criteria, value) => {
        setorgRatings(prevorgRatings => ({
            ...prevorgRatings,
            [criteria]: value
        }));
    };
    
    
    const handleSubmit = () => {
        console.log('Nilai yang telah diisi:', technicalRatings);
    };
    
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const appraisalDetail = {
        'Title': 'Admin',
        'Appraisal Date': '2024-04',
        'Employee' : 'Arfara',
        'Added by': 'Admin',
        'Created at': '18-10-2023',
        'Overall Rating' : <FaStar/>
    };

    return(
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-10">
            <div className="lg:w-1/4 bg-white p-6 rounded-md shadow-lg h-auto">
                <h2 className="text-xl font-bold mb-4">Appraisal Details</h2>
                <ul>
                    {Object.entries(appraisalDetail).map(([key, value]) => (
                        <li key={key} className="mb-2">
                            <span className="font-bold">{key}: </span>{value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 mr-auto">
                <div className="bg-white p-6 rounded shadow">
                    <div className="mb-6">
                    {/* Overview option header */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview and Edit Indicator</h2>

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
                    </ul>
                    </div>
                    {activeTab === 'Overview' && (
                    <div>
                    <form>
                        <h1 className='text-xl font-semibold text-gray-800 mb-2 text-center'>Technical Competencies</h1>
                        {Object.keys(technicalRatings).map(criteria => (
                        <div key={criteria} className="flex items-center mb-2 border-b border-gray-300 ml-2">
                            <label className="mr-2">{criteria}</label>
                            <div className="rating-stars flex ml-auto">
                            {[1, 2, 3, 4, 5].map(i => (
                                <FaStar
                                key={i}
                                className={technicalRatings[criteria] >= i ? "star active" : "star"}
                                />
                            ))}
                            </div>
                        </div>
                        ))}
                    </form>
                    <form>
                        <h1 className='text-xl font-semibold text-gray-800 mb-2 mt-5 text-center'>Organizational Competencies</h1>
                        {Object.keys(orgRatings).map(criteria => (
                        <div key={criteria} className="flex items-center mb-2 border-b border-gray-300 ml-2">
                            <label className="mr-2">{criteria}</label>
                            <div className="rating-stars flex ml-auto">
                            {[1, 2, 3, 4, 5].map(i => (
                                <FaStar
                                key={i}
                                className={orgRatings[criteria] >= i ? "star active" : "star"}
                                />
                            ))}
                            </div>
                        </div>
                        ))}
                    </form>
                    </div>
                    )}
                    {activeTab === 'Edit' && (
                    <div>
                        <div className='bg-white shadow-md rounded-lg mb-4 w-full max-w-100 p-5 mt-2 grid grid-cols-3 md:grid-cols-3 gap-4'>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                                </label> 
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employee">
                                Employee
                                </label>
                                <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="employee"
                                >
                                <option value="" disabled>Select Employee</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">
                                Select Month
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="month" type="month" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-xl font-semibold text-gray-800 mb-2 text-center'>Technical Competencies</h1>
                            {Object.keys(technicalRatings).map(criteria => (
                            <div key={criteria} className="flex items-center mb-2 border-b border-gray-300 ml-2">
                                <label className="mr-2">{criteria}</label>
                                <div className="rating-stars flex ml-auto">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <FaStar
                                    key={i}
                                    className={technicalRatings[criteria] >= i ? "star active" : "star"}
                                    onClick={() => handleTechnicalRatingChange(criteria, i)}
                                    style={{ color: technicalRatings[criteria] >= i ? "#ffc107" : "#e4e5e9", cursor: "pointer" }}
                                    />
                                ))}
                                </div>
                            </div>
                            ))}
                        </form>
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-xl font-semibold text-gray-800 mb-2 mt-5 text-center'>Organizational Competencies</h1>
                            {Object.keys(orgRatings).map(criteria => (
                            <div key={criteria} className="flex items-center mb-2 border-b border-gray-300 ml-2">
                                <label className="mr-2">{criteria}</label>
                                <div className="rating-stars flex ml-auto">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <FaStar
                                    key={i}
                                    className={orgRatings[criteria] >= i ? "star active" : "star"}
                                    onClick={() => handleOrgRatingChange(criteria, i)}
                                    style={{ color: orgRatings[criteria] >= i ? "#ffc107" : "#e4e5e9", cursor: "pointer" }}
                                    />
                                ))}
                                </div>
                            </div>
                            ))}
                        </form>
                        <div className='flex mt-5'>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-auto">Update appraisal</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppraisalDetails;
