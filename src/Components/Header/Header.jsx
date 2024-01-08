import React from 'react';
import { FaAppStore, FaCog, FaCalendar, FaFile } from 'react-icons/fa';
import './Header.css';
import headerData from './HeaderData';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-buttons">
        {headerData.map((item) => (
          <button key={item.id} className="nav-button">
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;