import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBarData from "./SidebarData";
import comp_logo from '../Assets/comp_logo.png';
import './SideBar.css';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = (index) => setSubnav(subnav !== index ? index : false);

  return (
    <div className="sidebar-container">
        <div className="company-logo">
            <img src={comp_logo} alt="Company Logo" />
        </div>
      <ul className="nav-list">
        {SideBarData.map((item, index) => (
          <React.Fragment key={index}>
            <li className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => ["nav-link", isActive ? "active" : null].join(" ")}
                onClick={item.subNav && (() => showSubnav(index))}
                on
              >
                <div className="nav-link-icon">{item.icon}</div>
                <span>{item.title}</span>
                <div>
                  {item.subNav && subnav === index
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
              </NavLink>
              {subnav === index && item.subNav?.map((subItem, subIndex) => (
                <NavLink
                  to={subItem.path}
                  key={subIndex}
                  className={({ isActive }) => ["subnav-link", isActive ? "sub-active" : null].join(" ")}
                >
                  {subItem.title}
                </NavLink>
              ))}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
