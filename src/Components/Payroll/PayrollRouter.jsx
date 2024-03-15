import React from 'react';
import './PayrollRouter.css';
import Header from '../Header/Header';
import PayrollList from './PayrollList';
import AdvanceSalary from './AdvanceSalary';
import PayslipHistory from './PayslipHistory';
import RequestLoan from './RequestLoan';
import PayrollView from './PayrollView';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FaHistory ,FaClipboardList } from 'react-icons/fa';
import { MdReadMore, MdRequestPage } from "react-icons/md";

const PayrollRouter = () => {
  const navigate = useNavigate();
    return (
    <div>
        <Header />
        <div className="payroll-container">
          <div className="feature" onClick={() => navigate('/payroll/payroll-list')}>
              <FaClipboardList className="icon" />
              <span>Payroll</span>
            </div>
          
            <div className="feature" onClick={() => navigate('/payroll/payslip-history')}>
              <FaHistory className="icon" />
              <span>Payslip History</span>
            </div>
            
            <div className="feature" onClick={() => navigate('/payroll/advance-salary')}>
              <MdReadMore className="icon" />
              <span>Advance Salary</span>
            </div>
          
            <div className="feature" onClick={() => navigate('/payroll/request-loan')}>
              <MdRequestPage className="icon" />
              <span>Request Loan</span>
            </div>
          </div>

          <Routes>
              <Route path="payroll-list" element={< PayrollList />} />
              <Route path="advance-salary" element={< AdvanceSalary />} />
              <Route path="payslip-history" element={< PayslipHistory />} />
              <Route path="request-loan" element={< RequestLoan />} />
              <Route path="payroll-view/:id" element={< PayrollView />} />
          </Routes>
    </div>
    );
  };
  
export default PayrollRouter;





