import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import LandingPage from './Components/LandingPage/LandingPage';
import SideBar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TasksRouter from './Components/Tasks/TasksRouter';
import AttendancesRouter from './Components/Attendances/AttendancesRouter';
import Helpdesk from './Components/Helpdesk/Helpdesk';
import TicketDetails from './Components/Helpdesk/TicketDetails';

// eslint-disable-next-line
function App() {
    return ( 
        <Router>
            <Routes >
            <Route path = "/" element = { < LandingPage / > }/>  
            <Route path = "/loginsignup" element = { < LoginSignup / > }/>  
            <Route path = "/*" element = { < DashboardLayout / > }/>  
            </Routes > 
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
            <Route path = "/tasks/*" element = { < TasksRouter / > }/>    
            <Route path = "/helpdesk" element = { < Helpdesk/> } />
            <Route path="/helpdesk/ticket-details/:ticketId" element={<TicketDetails />} />
            </Routes > 
        </div>
    );
}
export default App;