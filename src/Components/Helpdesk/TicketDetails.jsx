import React, { useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';
import 'rc-slider/assets/index.css';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../Header/Header';

const TicketDetails = () => {
  const [activeTab, setActiveTab] = useState('postReply');

  const navigate = useNavigate();

  const handleAddTicketClick = () => {
    navigate('/helpdesk');
  };

  const PostReplyTab = () => {
    const [ReplyText, setReplyText] = useState('');

    const handleReplyChange = (value) => {
      setReplyText(value);
    };

    const handleAddReply = () => {
      console.log(ReplyText);
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Ticket Reply</h3>
        </div>
        <div className="mb-4">
          <ReactQuill theme="snow" value={ReplyText} onChange={handleReplyChange} />
        </div>
        <button
          onClick={handleAddReply}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reply
        </button>
      </div>
    );
  };

  const PostANoteTab = () => {
    const [notes, setNotes] = useState([
      { id: 1, author: 'Super Admin', content: 'Bismillah', timestamp: '4 months ago' },
      { id: 2, author: 'Super Admin', content: 'GO GO GO', timestamp: 'a month ago' }
    ]);
    const [newNote, setNewNote] = useState('');

    const handlePostNote = () => {
      const newNoteToAdd = {
        id: notes.length + 1,
        author: 'Current User',
        content: newNote,
        timestamp: 'Just now'
      };
      setNotes([...notes, newNoteToAdd]);
      setNewNote('');
    };

    const handleDeleteNote = (noteId) => {
      setNotes(notes.filter(note => note.id !== noteId));
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Post a Note</h3>
        </div>
        {notes.map(note => (
          <div key={note.id} className="flex items-center mb-4">
            <img src="/path-to-avatar-image.jpg" alt="Avatar" className="rounded-full w-8 h-8 mr-3" />
            <div className="flex-1">
              <div className="font-semibold">{note.author}</div>
              <div className="text-sm text-gray-500">{note.timestamp}</div>
              <div>{note.content}</div>
            </div>
            <button onClick={() => handleDeleteNote(note.id)} className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </div>
        ))}
        <div className="flex items-center">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Post a Note..."
            className="flex-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          <button
            onClick={handlePostNote}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const TicketFilesTab = () => {
    const [files, setFiles] = useState([
      { id: 1, title: 'File 1', author: 'Super Admin', timestamp: '6 months ago' }
    ]);

    const handleFileChange = (event) => {
      // Handle file selection
    };

    const handleAddFile = () => {
      // Handle adding file
    };

    const handleDeleteFile = (fileId) => {
      setFiles(files.filter(file => file.id !== fileId));
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Attach Additional Ticket Files</h3>
        {files.map(file => (
          <div key={file.id} className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <img src="/path-to-avatar-image.jpg" alt="Avatar" className="rounded-full w-8 h-8 mr-3" />
              <div>
                <div className="text-sm text-gray-500">{file.timestamp}</div>
                <div className="font-semibold">{file.author}</div>
              </div>
            </div>
            <div>
              <button className="text-blue-500 hover:text-blue-700 mr-2">Download</button>
              <button onClick={() => handleDeleteFile(file.id)} className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input type="text" placeholder="Title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Attachment *</label>
          <input type="file" onChange={handleFileChange} className="mt-1 block w-full" accept=".gif,.png,.jpg,.jpeg" />
          <p className="text-xs text-gray-500 mt-1">Upload files only: gif, png, jpg, jpeg</p>
        </div>
        <button onClick={handleAddFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add File
        </button>
      </div>
    );
  };

  const ticketlist = [
    { id: '1', subject: 'Account lock', assignedTo: 'Super Admin', dateCreated: '10-03-2023', priority: "High",  status: 'Open' },
  ];

  const ticketElements = ticketlist.map(ticket => (
    <div key={ticket.id} className="mb-4">
      <h4>Subject: {ticket.subject}</h4>
      <p>Assigned To: {ticket.assignedTo}</p>
      <p>Date Created: {ticket.dateCreated}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
    </div>
  ));

  return (
    <div className="container mx-auto">
      <Header/>
      <div className="flex flex-wrap -mx-3 my-10">
        <div className="w-full lg:w-1/3 px-3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">Ticket Details</h5>
              <button
                onClick={handleAddTicketClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded inline-flex items-center"
              >
                <span>Add New Ticket</span>
              </button>
            </div>
            <div className="p-4">
            <div className="bg-gradient-to-r from-blue-500 to-transparent text-white rounded-lg px-4 py-2 mb-4">Ticket #{ticketlist[0].id}</div>
              <div className="max-w-4xl mx-auto">
                {ticketlist.map(ticket => (
                  <div key={ticket.id} className="border rounded-lg p-4 bg-white mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-semibold text-blue-600">Subject</div>
                      <div>{ticket.subject}</div>
                      <div className="font-semibold">Assigned To</div>
                      <div>{ticket.assignedTo}</div>
                      <div className="font-semibold">Date Created</div>
                      <div>{ticket.dateCreated}</div>
                      <div className="font-semibold">Priority</div>
                      <div>{ticket.priority}</div>
                      <div className="font-semibold">Status</div>
                      <div>{ticket.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <div className="border rounded-lg p-4 bg-white mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Remarks
                  </label>
                  <ReactQuill theme="snow"/>
                </div>
                <div className='mb-4 flex flex-col items-center'>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">Update Status</button>
                </div>
              </div>  
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <div className="flex space-x-2 mb-4">
                <button onClick={() => setActiveTab('postReply')} className={`px-4 py-2 ${activeTab === 'postReply' ? 'bg-gray-200 rounded' : ''}`}>POST A REPLY</button>
                <button onClick={() => setActiveTab('postANote')} className={`px-4 py-2 ${activeTab === 'postANote' ? 'bg-gray-200 rounded' : ''}`}>POST A NOTE</button>
                <button onClick={() => setActiveTab('ticketFiles')} className={`px-4 py-2 ${activeTab === 'ticketFiles' ? 'bg-gray-200 rounded' : ''}`}>ATTACH FILES</button>
              </div>
            </div>
            <div className="p-4">
              {activeTab === 'postReply' && <PostReplyTab />}
              {activeTab === 'postANote' && <PostANoteTab />}
              {activeTab === 'ticketFiles' && <TicketFilesTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails