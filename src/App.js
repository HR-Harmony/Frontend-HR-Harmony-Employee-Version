import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import LandingPage from './Components/LandingPage/LandingPage';
import SideBar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Employees from "./Components/Employees/Employees";
import Payroll from "./Components/Payroll/Payroll";
import Tasks from './Components/Tasks/Tasks';
import Performances from './Components/Performances/Performances';
import AttendancesRouter from './Components/Attendances/AttendancesRouter';
import CoreHRRouter from './Components/CoreHR/CoreHRRouter';

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
            <Route path = "/employees" element = { < Employees / > }/>   
            <Route path = "/payroll" element = { < Payroll / > }/>  
            <Route path = "/attendances/*" element = { < AttendancesRouter / > }/>  
            <Route path = "/tasks" element = { < Tasks / > }/>   
            <Route path = "/performances" element = { < Performances / > }/> 
            <Route path = "/corehr/*" element = { < CoreHRRouter /> }/>  
            </Routes > 
        </div>
    );
}
export default App;