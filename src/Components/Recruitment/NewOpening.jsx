import React from 'react';
import './NewOpening.css';
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const NewOpening = () => {
  return (
    <div className='new-opening-container'>
        <div className='job-listing-header'>
            <h2>Job Listing</h2>
            <button>+ Add New Job</button>
        </div>

        <div className='job-listing-container'>
            <div className='job-listing-card'>
                <div className='job-listing-card-header'>
                    <h2>Front-End Develoer</h2>
                    <button>Published</button>
                </div>
                <div className='job-listing-card-body'>
                    <h2>Job Type : Full Time</h2>
                    <h2>Posted on : 01-01-2024</h2>
                    <h2>Position : 2</h2>
                    <h2>Gender : Male</h2>
                </div>
                <div className='job-listing-card-footer'>
                    <h2>Closing Date: 31-01-2024</h2>
                    <GrView className='job-listing-card-icon'/>
                    <FaEdit className='job-listing-card-icon'/>
                    <MdDeleteOutline className='job-listing-card-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewOpening