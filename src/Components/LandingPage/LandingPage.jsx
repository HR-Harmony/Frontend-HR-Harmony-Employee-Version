import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import comp_logo from '../Assets/comp_logo.png';
import ilus1 from '../Assets/ilus1.png';
import payroll from '../Assets/payroll.png';
import absen from '../Assets/absen.png'; 
import training from '../Assets/training.png';
import arfara from '../Assets/arfara.png';
import aimar from '../Assets/aimar.png';
import fakhri from '../Assets/fakhri.png';
import linkedin from '../Assets/linkedin.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="logo-section">
          <img src={comp_logo} className="company-logo" />
          <nav className='header-nav'>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#about-us">About Us</a>
          </nav>
          <div className="sign-in-button">
            <Link to="/LoginSignup" className="sign-in">Sign In</Link>
          </div>
        </div>
      </header>

        <section className='wrapper'>
            <img src={ilus1} alt="illustration" className='img-float-right'/>
            <div className='text-box'>
                <h1>HR Harmony</h1>
                <p>Welcome to HR Harmony, where innovation meets human resources seamlessly.</p>
                <p>It is not just a platform. We are architects of organizational efficiency, 
                weaving a symphony of solutions to elevate your HR experience. 
                Our journey began with a simple vision – to redefine how businesses approach human resource management.</p>
            
                <div className="coba-gratis">
                    <div className="coba-gratis">Coba Gratis</div>
                </div>
            </div>
        </section>

        <section className="featured-products">
        <h1>Featured Products</h1>
          <div className="product-container">
            <div className="product">
              <img src={absen} alt="Manajemen Absensi" />
              <h2>Attendances Management</h2>
            <div className="learn-more-button">
                <div className="learn-more">Learn More</div>
            </div>
            </div>
        
            <div className="product">
              <img src={payroll} alt="Payroll" />
              <h2>Payroll Management</h2>
            <div className="learn-more-button">
                <div className="learn-more">Learn More</div>
            </div> 
            </div>

            <div className="product">
              <img src={training} alt="AI & Pelatihan" />
              <h2>AI & Training</h2>
            <div className="learn-more-button">
                <div className="learn-more">Learn More</div>
            </div> 
            </div>
          </div>
        </section>

        <section className="our-team">
        <h1>Our Team</h1>
          <div className="our-team-container">
            <div className="our-team">
              <img src={arfara} alt="arfara" />
              <h2>Arfara Yema Samgusdian</h2>
              <p>Front-end Developer</p>
            <div className="linkedin-button">
            <a href="https://www.linkedin.com/in/arfara-yema-samgusdian-88496b179/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
            </div>
            </div>

            <div className="our-team">
              <img src={fakhri} alt="fakhri" />
              <h2>Fakhrity Hikmawan</h2>
              <p>Cloud Engineer</p>
            <div className="linkedin-button">
            <a href="https://www.linkedin.com/in/aimrzki/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
            </div> 
            </div>

            <div className="our-team">
              <img src={aimar} alt="aimar" />
              <h2>Aimar Rizki Utama</h2>
              <p>Back-end Developer</p>
            <div className="linkedin-button">
            <a href="https://www.linkedin.com/in/fakhrity-hikmawan/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
            </div>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="footer-container">
            <img src={comp_logo} alt="Company Logo" className="company-logo" />
            <p>© 2023 HR Harmony. All rights reserved.</p>
          </div>
        </footer>

    </div>
  );
};

export default LandingPage;