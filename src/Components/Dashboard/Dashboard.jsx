import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <div>
      <Header />

      <div className="dashboard-container">
        <div className="overview-container">
          <div className="overview-item">
            <h3>Total Karyawan</h3>
            <p>100</p>
          </div>

          <div className="overview-item">
            <h3>Total Proyek Berjalan</h3>
            <p>20</p>
          </div>

          <div className="overview-item">
            <h3>Total Deposit</h3>
            <p>$100,000</p>
          </div>

          <div className="overview-item">
            <h3>Total Pengeluaran</h3>
            <p>$50,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
