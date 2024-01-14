import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Chart from 'react-apexcharts';

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
        <div className="overview-container">
          <div className="overview-item" style={{ backgroundColor: '#8D8D8D', color: 'white' }}>
            <h3>Total Employees</h3>
            <p>15</p>
          </div>
          <div className="overview-item" style={{ backgroundColor: '#3D66F0', color: 'white' }}>
            <h3>Total Projects</h3>
            <p>14</p>
          </div>
          <div className="overview-item" style={{ backgroundColor: '#5FB549', color: 'white' }}>
            <h3>Total Deposit</h3>
            <p>IDR666,000,000</p>
          </div>
          <div className="overview-item" style={{ backgroundColor: '#E9615C', color: 'white' }}>
            <h3>Total Expenses</h3>
            <p>IDR566,000,000</p>
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
  );
};

export default Dashboard;