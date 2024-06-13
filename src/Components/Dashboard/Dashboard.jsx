import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { FaClock } from 'react-icons/fa';
import ReactApexChart from 'react-apexcharts';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { APIDashboard } from '@/Apis/APIDashboard';

const Dashboard = () => {
  Chart.register(ArcElement, Tooltip);

  const [dashboardData, setDashboardData] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await APIDashboard.getDashboard();
        setDashboardData(data);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await APIDashboard.getProfile();
      setProfileData(data.profile || {});
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleClockIn = async () => {
    try {
      await APIDashboard.clickInDashboard();
    } catch (error) {
    }
  };

  const handleClockOut = async () => {
    try {
      await APIDashboard.clickOutDashboard();
    } catch (error) {
    }
  };

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="text-center">
          <img src={require('../Assets/comp_logo.png')} alt="Loading" className="h-48 w-48 mx-auto animate-bounce" />
          <p className="mt-4 text-lg text-gray-700">{loadingMessage}</p>
        </div>
      </div>
    );
  }

  const user = {
    name: profileData.full_name || "User",
    position: profileData.role || "User"
  };

  const monthlyPayrollData = {
    series: [
      {
        name: 'Payroll',
        data: dashboardData.payroll_summary.map(item => item.amount)
      }
    ],
    options: {
      xaxis: {
        categories: dashboardData.payroll_summary.map(item => item.month)
      }
    }
  };

  const tasksStatus = {
    completed: dashboardData.task_summaries.filter(task => task.progress_bar === 100).length,
    pending: dashboardData.task_summaries.filter(task => task.progress_bar < 100 && task.progress_bar > 0).length,
    onProgress: dashboardData.task_summaries.filter(task => task.progress_bar > 0 && task.progress_bar < 100).length,
    notStarted: dashboardData.task_summaries.filter(task => task.progress_bar === 0).length
  };

  const tasksTooltip = dashboardData.task_summaries.map(task => task.title);

  const TasksdoughnutData = {
    labels: ['Completed', 'Pending', 'On Progress', 'Not Started'],
    datasets: [{
      data: [tasksStatus.completed, tasksStatus.pending, tasksStatus.onProgress, tasksStatus.notStarted],
      backgroundColor: ['#68D391', '#F6E05E', '#63B3ED', '#FC8181']
    }]
  };

  const projectStatus = {
    completed: dashboardData.project_summaries.filter(project => project.project_bar === 100).length,
    pending: dashboardData.project_summaries.filter(project => project.project_bar < 100 && project.project_bar > 0).length,
    onProgress: dashboardData.project_summaries.filter(project => project.project_bar > 0 && project.project_bar < 100).length,
    notStarted: dashboardData.project_summaries.filter(project => project.project_bar === 0).length
  };

  const projectsTooltip = dashboardData.project_summaries.map(project => project.project_name);

  const ProjectsdoughnutData = {
    labels: ['Completed', 'Pending', 'On Progress', 'Not Started'],
    datasets: [{
      data: [projectStatus.completed, projectStatus.pending, projectStatus.onProgress, projectStatus.notStarted],
      backgroundColor: ['#68D391', '#F6E05E', '#63B3ED', '#FC8181']
    }]
  };

  const trainingData = {
    monthly: dashboardData.training_summary.map(item => item.total_training),
    yearly: dashboardData.training_summary.reduce((acc, item) => acc + item.total_training, 0)
  };

  const monthlyTrainingOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    xaxis: {
      categories: dashboardData.training_summary.map(item => item.month),
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

  const doughnutOptions = (tooltips) => ({
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const index = tooltipItem.dataIndex;
            return `${tooltipItem.label}: ${tooltips[index]}`;
          }
        }
      }
    }
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <div className="flex items-center mb-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">Hello, {user.name}!</h2>
                  <p className="text-sm text-gray-500">{user.position}</p>
                </div>
              </div>
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <h3 className="text-lg font-semibold mb-4">Record Your Attendances</h3>
                <div className="mb-4 flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleClockIn}>
                    <FaClock className="mr-2" /> Clock In
                  </button>
                  <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleClockOut}>
                    <FaClock className="mr-2" /> Clock Out
                  </button>
                </div>
              </div>
              <div>
                <Link to="/attendances/attendance-list">
                  <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full">
                    View My Attendances
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <h1 className="text-lg font-semibold mb-2">Overtime Request</h1>
              <p className="text-2xl">{dashboardData.total_overtime}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-lg font-semibold mb-2">My Leave</h1>
              <p className="text-2xl">{dashboardData.total_leave}</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">My Monthly Payroll Report</h2>
                <ReactApexChart options={monthlyPayrollData.options} series={monthlyPayrollData.series} type="line" />
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">My Training Report</h2>
                <ReactApexChart options={monthlyTrainingOptions} series={[{ data: trainingData.monthly }]} type="bar" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Tasks Status</h2>
                <div className="w-2/3 mx-auto">
                  <Doughnut data={TasksdoughnutData} options={doughnutOptions(tasksTooltip)} />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Project Status</h2>
                <div className="w-2/3 mx-auto">
                  <Doughnut data={ProjectsdoughnutData} options={doughnutOptions(projectsTooltip)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

