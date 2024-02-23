import React from 'react';
import logo from '../assets/logo.png'; // Update the path based on the actual location of your logo file
import './Footer.css';
import AppStore from './AppStore';

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className='column'>
        <div className='column1'>
            <img src={logo} alt="Logo" />
            <div className='subcolumn1'>
            <div className='large-font'>
            <p>CREDITSEA</p>
            </div>
            <div className='small-font subsubcolumn1'>
            <p className='small-font'>TRUST. COMFORT. PROSPER</p>
            </div>
            </div>
        </div>
      </div>
      <div className='column'>
        <h3>Services</h3>
        <ul>
          <li>Lorem ipsum</li>
          <li> <br></br></li>
          <li>Lorem ipsum</li>
          <li> <br></br></li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
      <div className='column'>
        <h3>Other Links</h3>
        <ul>
          <li>About US</li>
          <li><br></br></li>
          <li>Case Study</li>
          <li><br></br></li>
          <li>Career</li>
        </ul>
      </div>
      <div className='column'>
        <h3>Contact Us</h3>
        <ul>
          <li>Creditsea Technologies
4th Floor, D-39, Sector 2, Rohini
New Delhi - 201301</li>
          <li><br></br></li>
          <li>Customercare@creditsea.com</li>
          <li><br></br></li>
          <li>01140848286</li>
        </ul>
      </div>
      <div className='column'>
        <h3>App Store Links</h3>
        <AppStore/>
      </div>
    </div>
    </>
  );
};

export default Footer;
