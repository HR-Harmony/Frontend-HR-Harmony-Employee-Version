import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { TrashIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const PerformanceAppraisal = () => {

  const navigate = useNavigate();

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddNewClick = () => {
    setShowAddForm(true);
  };

  const handleCancelClick = () => {
    setShowAddForm(false);
  };

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

  const handleViewDetailsClick = () => {
    navigate(`../appraisal-details`);
  };

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">List All Performance Appraisal</h2>
        <div className="flex items-center">
          <button className='text-white bg-blue-500 border-blue-600 py-2 px-4 rounded text-lg leading-6 cursor-pointer hover:bg-blue-700 hover:border-blue-700' onClick={handleAddNewClick}>+ Add New</button>
        </div>
      </div>

      {showAddForm && (
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
        <div className="bg-white shadow-md rounded-lg mb-4 w-full max-w-100 p-5 mt-2 grid grid-cols-2 md:grid-cols-2 gap-4">
          <form onSubmit={handleSubmit}>
            <h1 className='text-xl font-semibold text-gray-800 mb-5 text-center'>Technical Competencies</h1>
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
            <h1 className='text-xl font-semibold text-gray-800 mb-5 text-center'>Organizational Competencies</h1>
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
        </div>
        <div className='flex mt-5'>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-auto">Submit</button>
            <button type="cancel" className="bg-gray-500 text-white px-4 py-2 rounded-md ml-5"onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
      )}

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
          <div className="flex">
            <input type="text" className="px-2 py-1 border border-gray-300 rounded-md" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-4 p-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appraisal Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added by</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="group hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex justify-between">
                        <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleViewDetailsClick()}>
                            <ArrowCircleRightIcon className="h-5 w-5" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800 focus:outline-none" /*onClick={() => handleShowDeleteConfirmation(employee.id)}*/>
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
            </tbody>
          </table>
        </div>
      <div className="flex justify-between items-center mt-5 p-5">
        <div className="text-sm">Showing 1 to 3 of 3 records</div>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAppraisal;
