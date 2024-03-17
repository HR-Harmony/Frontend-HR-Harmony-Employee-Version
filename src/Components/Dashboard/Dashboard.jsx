import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Chart from 'react-apexcharts';
import { CheckCircleIcon, RefreshIcon, PlayIcon, PauseIcon } from '@heroicons/react/solid';

const Dashboard = () => {
  const invoiceChartOptions = {
    chart: {
      id: 'invoice-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['2024-01', '2023-12', '2023-11', '2023-10', '2023-09', '2023-08']
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#34eb9b', '#eb4034'],
  };

  const invoiceChartSeries = [
    {
      name: 'Paid Invoices',
      data: [1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Unpaid Invoices',
      data: [5, 4, 4, 3, 2, 1]
    }
  ];

  const payrollChartOptions = {
    chart: {
      id: 'payroll-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['Jan 2024', 'Dec 2023', 'Nov 2023', 'Oct 2023', 'Sep 2023', 'Aug 2023', 'Jul 2023', 'Jun 2023', 'May 2023', 'Apr 2023', 'Mar 2023', 'Feb 2023']
    },
    colors: ['#3056d3'],
  };

  const payrollChartSeries = [
    {
      name: 'Payroll',
      data: [69200960, 62280864, 55360768, 48440672, 41520576, 34600480, 27680384, 20760288, 13840192, 6920096, 3460048, 1730024] // Adjust the data to match your real data
    }
  ];

    const radialBarChartOptions = {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      },
      labels: ['Project A', 'Project B', 'Project C', 'Project D'],
    };
  
    const projectsStatusSeries = [44, 55, 67, 83];
    const tasksStatusSeries = [76, 85, 101, 98];
  
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className='max-w-full mx-auto p-5 bg-white'>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-white mr-3" />
                <div>
                  <p className="font-bold text-xl">2</p>
                  <p className="text-sm">Total Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="bg-blue-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <RefreshIcon className="h-8 w-8 text-white mr-3" />
                <div>
                  <p className="font-bold text-xl">3</p>
                  <p className="text-sm">Total In Progress</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="bg-teal-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <PlayIcon className="h-8 w-8 text-white mr-3" />
                <div>
                  <p className="font-bold text-xl">6</p>
                  <p className="text-sm">Total Not Started</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <div className="bg-red-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <PauseIcon className="h-8 w-8 text-white mr-3" />
                <div>
                  <p className="font-bold text-xl">1</p>
                  <p className="text-sm">Total On Hold</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="main-content">
          <div className="charts-column">
            {/* Invoice Payments Chart */}
            <div className="chart-container">
              <div className="chart-title">Invoice Payments</div>
              <Chart
                options={invoiceChartOptions}
                series={invoiceChartSeries}
                type="bar"
                height="350"
              />
            </div>

            {/* Payroll Monthly Report Chart */}
            <div className="chart-container">
              <div className="chart-title">Payroll Monthly Report</div>
              <Chart
                options={payrollChartOptions}
                series={payrollChartSeries}
                type="bar"
                height="350"
              />
            </div>
          </div>

          <div className="widgets-column">
            {/* Department wise staff */}
            <div className="widget-container">
              <div className="widget-title">Department Wise Staff</div>
              <ul className="widget-list">
                <li>Engineering: 10</li>
                <li>Marketing: 8</li>
                <li>Sales: 15</li>
              </ul>
            </div>

            {/* Designation wise staff */}
            <div className="widget-container">
              <div className="widget-title">Designation Wise Staff</div>
              <ul className="widget-list">
                <li>Manager: 4</li>
                <li>Developer: 7</li>
                <li>Designer: 3</li>
              </ul>
            </div>

            {/* Staff attendance */}
            <div className="widget-container">
              <div className="widget-title">Staff Attendance</div>
              <div className="widget-content">
                <p>Total Staff: 30</p>
                <p>Present: 28</p>
                <p>Absent: 2</p>
                {/* ... additional widget content ... */}
              </div>
            </div>

            {/* Projects Status */}
            <div className="widget-container">
              <div className="widget-title">Projects Status</div>
              <Chart
                options={radialBarChartOptions}
                series={projectsStatusSeries}
                type="radialBar"
                height="350"
              />
            </div>

            {/* Tasks Status */}
            <div className="widget-container">
              <div className="widget-title">Tasks Status</div>
              <Chart
                options={radialBarChartOptions}
                series={tasksStatusSeries}
                type="radialBar"
                height="350"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;

