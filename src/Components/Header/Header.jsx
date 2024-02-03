import React from 'react';
import './Header.css';
import headerData from './HeaderData';

const Header = () => {
  return (
    <div className="main-header">
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