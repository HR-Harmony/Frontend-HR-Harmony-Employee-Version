import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import LandingPage from './Components/LandingPage/LandingPage';
import SideBar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import PayrollRouter from './Components/Payroll/PayrollRouter';
import TasksRouter from './Components/Tasks/TasksRouter';
import AttendancesRouter from './Components/Attendances/AttendancesRouter';
import Helpdesk from './Components/Helpdesk/Helpdesk';
import TicketDetails from './Components/Helpdesk/TicketDetails';
import TrainingRouter from './Components/Training/TrainingRouter';
import LeaveRouter from './Components/LeaveRequest/LeaveRouter';

// eslint-disable-next-line
function App() {
    return ( 
        <Router>
            <Routes >
            <Route path = "/" element = { < LandingPage / > }/>  
            <Route path = "/loginsignup" element = { < LoginSignup / > }/>  
            <Route path = "/reset-password" element = { < ForgetPassword / > }/>  
            <Route path = "/*" element = { < DashboardLayout / > }/>  
            </Routes >
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /> 
        </Router>
    );
}

function DashboardLayout() {
    return (
        <div style = {{ display: "flex" } } >
        <SideBar / >
            <Routes >
            <Route path = "/dashboard" element = { < Dashboard / > }/>   
            <Route path = "/attendances/*" element = { < AttendancesRouter / > }/> 
            <Route path = "/payroll/*" element = { < PayrollRouter / > }/>   
            <Route path = "/tasks/*" element = { < TasksRouter / > }/>    
            <Route path = "/training/*" element = { < TrainingRouter /> } />
            <Route path = "/helpdesk" element = { < Helpdesk/> } />
            <Route path= "/helpdesk/ticket-details/:id" element={< TicketDetails />} />
            <Route path = "/leave/*" element = { < LeaveRouter/> } />
            </Routes > 
        </div>
    );
}
export default App;