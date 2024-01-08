// SideBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import SideBarData from "./SidebarData";
import comp_logo from '../Assets/comp_logo.png';
import './SideBar.css';

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="sidebar-container">
        <div className="company-logo">
            <img src={comp_logo} alt="Company Logo" />
        </div>
      <ul className="nav-list">
        {SideBarData.map((item, index) => (
          <li className="nav-item" key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => ["nav-link", isActive ? "active" : null].join(" ")}
            >
              <div className="nav-link-icon">{item.icon}</div>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;