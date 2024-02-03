import React from 'react';
import './Helpdesk.css';
import Header from '../Header/Header';
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Helpdesk = () => {
  return (
    <div>
        <Header/>
        <div className='helpdesk-list-container'>
            <div className='helpdesk-label'>
                <h2>Ticket List</h2>
                <button>+ Create Ticket</button>
            </div>
            <div className='helpdesk-list-card-container'>
                <div className='helpdesk-list-card'>
                    <div className='helpdesk-list-card-header'>
                        <h2>Arfara Yema Samgusdian</h2>
                    </div>
                    <div className='helpdesk-list-card-body'>
                        <p>Akun saya terkunci tolong diperbaiki secepatnya</p>
                    </div>
                    <div className='helpdesk-list-card-status'>
                        <p>Id no : 11456</p>
                        <p>Assigned to admin</p>
                        <p>25-11-2023</p>
                        <p>Medium</p>
                        <p>Open</p>
                    </div>
                    <div className='helpdesk-list-card-footer'>
                        <FaEdit className='helpdesk-list-card-icon'/>
                        <GrView className='helpdesk-list-card-icon'/>
                        <MdDeleteOutline className='helpdesk-list-card-icon'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Helpdesk