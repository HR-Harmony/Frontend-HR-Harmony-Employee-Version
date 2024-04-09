import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { identifier } = useParams();

  const announcement = {
    title: 'Senam Dadakan',
    startDate: '07-04-2023',
    endDate: '29-04-2023',
    createdAt: '07-04-2023',
    department: '',
    summary: '',
    description: 'adadad pary'
  };

  return (
    <div className="container mx-auto p-4 flex flex-row justify-between">
      <div className="w-full lg:w-1/3 p-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Announcement</h1>
          <p className="mb-2">Start Date: <span className="font-semibold">{announcement.startDate}</span></p>
          <p className="mb-2">End Date: <span className="font-semibold">{announcement.endDate}</span></p>
          <p className="mb-4">Created at: <span className="font-semibold">{announcement.createdAt}</span></p>
          <p className="mb-4">Department: <span className="font-semibold">{announcement.department}</span></p>
        </div>
      </div>

      <div className="w-full lg:w-2/3 p-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{announcement.title}</h1>
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>{announcement.summary}</p>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{announcement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;