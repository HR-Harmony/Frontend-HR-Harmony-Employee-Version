import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProjectDetails = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Not Started');
  const [activeTab, setActiveTab] = useState('overview');
  const [priority, setPriority] = useState('Medium');

  const navigate = useNavigate();

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const handleAddProjectClick = () => {
    navigate('/projects/project');
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const OverviewTab = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Project : Rangka</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">Rangka</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">11-05-2023</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">12-05-2023</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Estimated Hour</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">24</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Project</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">BBC</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Team</label>
          <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700"></div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Associated Goals</label>
        <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700"></div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700">asdasdasd...</div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <div className="mt-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700"></div>
      </div>
    </div>
  );

  const EditTab = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input type="text" value="Rangka" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Start Date *</label>
          <input type="date" value="2023-05-11" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">End Date *</label>
          <input type="date" value="2023-05-12" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Estimated Hour</label>
          <input type="number" value="24" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Project *</label>
          <input type="text" value="BBC" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Team</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Associated Goals</label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Summary *</label>
        <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Update Project
      </button>
    </div>
  );

  const ProjectDiscussionTab = () => {
    const [discussionText, setDiscussionText] = useState('');

    const handleDiscussionChange = (value) => {
      setDiscussionText(value);
    };

    const handleAddDiscussion = () => {
      console.log(discussionText);
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Project Discussion</h3>
        </div>
        <div className="mb-4">
          <ReactQuill theme="snow" value={discussionText} onChange={handleDiscussionChange} />
        </div>
        <button
          onClick={handleAddDiscussion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
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
          <h3 className="text-lg font-semibold text-gray-700">Post A Note</h3>
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

  const ProjectFilesTab = () => {
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
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Project Files</h3>
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

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-1/3 px-3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">Project Details</h5>
              <button
                onClick={handleAddProjectClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded inline-flex items-center"
              >
                <span>Add Project</span>
              </button>
            </div>
            <div className="p-4">
              <div className="mb-1">
                <label htmlFor="progress" className="block text-sm font-medium text-gray-700">Progress</label>
                <Slider
                  min={0}
                  max={100}
                  value={progress}
                  onChange={setProgress}
                  handle={({ style, ...props }) => (
                    <div
                      {...props}
                      style={{
                        ...style,
                        borderColor: '#f87171',
                        height: '14px',
                        width: '14px',
                        marginLeft: '-7px',
                        marginTop: '-5px',
                        backgroundColor: '#f87171',
                        boxShadow: 'none'
                      }}
                    />
                  )}
                  dotStyle={{
                    borderColor: '#f87171',
                    borderWidth: 2,
                    bottom: -2,
                  }}
                  activeDotStyle={{
                    borderColor: '#f87171',
                    backgroundColor: '#f87171',
                  }}
                />
                <div className="text-center text-sm mt-2">{progress}%</div>
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status *</label>
                <div className="flex items-center mt-1 h-4">
                  <div className="h-6 w-16 border-r cursor-pointer" style={{ backgroundColor: '#FBBF24', borderColor: '#ffffff' }} onClick={() => updateStatus('Not Started')}></div>
                  <div className="h-6 w-16 border-r cursor-pointer" style={{ backgroundColor: '#818CF8', borderColor: '#ffffff' }} onClick={() => updateStatus('In Progress')}></div>
                  <div className="h-6 w-16 border-r cursor-pointer" style={{ backgroundColor: '#F87171', borderColor: '#ffffff' }} onClick={() => updateStatus('Cancelled')}></div>
                  <div className="h-6 w-16 border-r cursor-pointer" style={{ backgroundColor: '#E5E7EB', borderColor: '#ffffff' }} onClick={() => updateStatus('On Hold')}></div>
                  <div className="h-6 w-16 cursor-pointer" style={{ backgroundColor: '#10B981', borderColor: '#ffffff' }} onClick={() => updateStatus('Completed')}></div>
                </div>
                <div className="text-center mt-2">{status}</div>
              </div>
              <div className="mb-4">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority *</label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={handlePriorityChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <button type="button" className="bg-indigo-600 text-white mb-4 px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
                Update Status
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <div className="flex space-x-2 mb-4">
                <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-gray-200' : ''}`}>OVERVIEW</button>
                <button onClick={() => setActiveTab('edit')} className={`px-4 py-2 ${activeTab === 'edit' ? 'bg-gray-200' : ''}`}>EDIT</button>
                <button onClick={() => setActiveTab('projectDiscussion')} className={`px-4 py-2 ${activeTab === 'projectDiscussion' ? 'bg-gray-200' : ''}`}>PROJECT DISCUSSION</button>
                <button onClick={() => setActiveTab('postANote')} className={`px-4 py-2 ${activeTab === 'postANote' ? 'bg-gray-200' : ''}`}>POST A NOTE</button>
                <button onClick={() => setActiveTab('projectFiles')} className={`px-4 py-2 ${activeTab === 'projectFiles' ? 'bg-gray-200' : ''}`}>PROJECT FILES</button>
              </div>
            </div>
            <div className="p-4">
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'edit' && <EditTab />}
              {activeTab === 'projectDiscussion' && <ProjectDiscussionTab />}
              {activeTab === 'postANote' && <PostANoteTab />}
              {activeTab === 'projectFiles' && <ProjectFilesTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
