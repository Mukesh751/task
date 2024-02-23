import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Expert from './expert/Expert';
import Accordion from './accordion/Accordion';
import Footer from './footer/Footer';
import Navbar from './components/Navbar';
import LoanSection from './components/LoanSection';
import HomePage from './components/HomePage';
import OurPartners from './components/OurPartners.jsx';
import Mobile from './components/Mobile.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
    <OurPartners/>
    <Mobile/>
    <Expert/>
    <Accordion/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
