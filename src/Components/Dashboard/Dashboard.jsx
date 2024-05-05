import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { FaClock } from 'react-icons/fa';
import ReactApexChart from 'react-apexcharts';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

const Dashboard = () => {
  Chart.register(ArcElement);

  const user = {
    name: "John Doe",
    position: "Software Developer"
  };

  const monthlyPayrollData = {
    series: [
      {
        name: 'Payroll',
        data: [4000, 6000, 3500, 5000, 7000, 4500, 8000, 6500, 7500, 9000, 5500, 8500]
      }
    ],
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  };

  const [tasksStatus, setTasksStatus] = useState({
    completed: 20,
    pending: 30,
    onProgress: 40,
    notStarted: 10
  });

  const TasksdoughnutData = {
    labels: ['Completed', 'Pending', 'On Progress', 'Not Started'],
    datasets: [{
      data: [tasksStatus.completed, tasksStatus.pending, tasksStatus.onProgress, tasksStatus.notStarted],
      backgroundColor: ['#68D391', '#F6E05E', '#63B3ED', '#FC8181']
    }]
  };

  const [projectStatus, setProjectStatus] = useState({
    completed: 50,
    pending: 10,
    onProgress: 30,
    notStarted: 10
  });

  const ProjectsdoughnutData = {
    labels: ['Completed', 'Pending', 'On Progress', 'Not Started'],
    datasets: [{
      data: [projectStatus.completed, projectStatus.pending, projectStatus.onProgress, projectStatus.notStarted],
      backgroundColor: ['#68D391', '#F6E05E', '#63B3ED', '#FC8181']
    }]
  };

  const [trainingData, setTrainingData] = useState({
    monthly: [5, 8, 3, 6, 7, 9, 4, 5, 6, 8, 7, 10], // contoh data bulanan
    yearly: 80 // contoh data tahunan
  });

  const monthlyTrainingOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Number of Trainings'
      }
    }
  };


  return (
    <div>
      <Header />
      <div className='px-10 py-5 flex flex-col lg:flex-row gap-4'>
        <div className="lg:w-1/2 px-4 mt-8">
          {/* Kontainer kiri */}
          <div className="w-full border border-white-400 shadow-md rounded-lg p-6 mb-4">
            <div className="flex items-center mb-4">
                <div className="rounded-full overflow-hidden mr-4">
                    <img src={user.profilePicture} alt={user.name} className="w-12 h-12" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Hello {user.name}</h2>
                    <p className="text-sm text-gray-600">{user.position}</p>
                </div>
            </div>
            <div className="border-t border-b border-gray-400 py-6 mb-4">
                <h3 className="text-lg font-semibold mb-4">Record Your Attendances</h3>
                <div className="mb-4 flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FaClock className="mr-2" /> Clock In
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FaClock className="mr-2" /> Clock Out
                    </button>
                </div>
            </div>
            <div>
                <Link to="/attendances/attendance-list">
                    <button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full">
                        View My Attendances
                    </button>
                </Link>
            </div>
        </div>

          {/* Overtime Request & My leave */}
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-1/2 border border-white-400 shadow-md rounded-lg p-6 mb-4'>
              <h1>Overtime Request</h1>
              <h1>2</h1>
            </div>
            <div className='lg:w-1/2 border border-white-400 shadow-md rounded-lg p-6 mb-4'>
              <h1>My leave</h1>
              <h1>1</h1>
            </div>
          </div>
          {/* Tasks Status & Project Status */}
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-1/2 border border-white-400 shadow-md rounded-lg p-6 mb-4'>
              <h2 className="text-xl font-semibold mb-4">Tasks Status</h2>
              <Doughnut data={TasksdoughnutData}/>
            </div>
            <div className='lg:w-1/2 border border-white-400 shadow-md rounded-lg p-6 mb-4'>
              <h2 className="text-xl font-semibold mb-4">Project Status</h2>
              <Doughnut data={ProjectsdoughnutData}/>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2'>
          {/* Kontainer kanan */}
          <div className="border border-white-400 shadow-md rounded-lg p-6 mt-8 h-200">
            <h2 className="text-xl font-semibold mb-4">My Monthly Payroll Report</h2>
            <ReactApexChart options={monthlyPayrollData.options} series={monthlyPayrollData.series} type="line" />
          </div>
          <div className="border border-white-400 shadow-md rounded-lg p-6 mt-8 h-200">
            <h2 className="text-xl font-semibold mb-4">My Training Report</h2>
            <ReactApexChart options={monthlyTrainingOptions} series={[{ data: trainingData.monthly }]} type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
