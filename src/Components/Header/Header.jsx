import React, { useState } from 'react';
import './Header.css';
import headerData from './HeaderData';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icon library, misalnya react-icons
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State untuk menampilkan atau menyembunyikan dropdown
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle state dropdown
  };
  

  const handleLogout = () => {
    // Logika logout disini
    // Contoh: menghapus token dari local storage atau melakukan proses logout lainnya
    // Setelah logout, arahkan pengguna kembali ke halaman landing
    navigate('/');
  };

  return (
    <div className="main-header">
      <div className="nav-buttons">
        {headerData.map((item) => (
          <button key={item.id} className="nav-button">
            {item.icon}
          </button>
        ))}
      </div>
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={30} color="#fff" />
        {showDropdown && (
          <div className="dropdown">
            <ul>
              <li>
                <FaCog className="dropdown-icon" />
                Profile
              </li>
              <li onClick={handleLogout}> {/* Menambahkan event handler untuk logout */}
                <FaSignOutAlt className="dropdown-icon" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
