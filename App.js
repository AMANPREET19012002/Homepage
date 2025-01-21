import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="RegisterKaro Logo" />
            <h1>RegisterKaro</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About us</a></li>
          </ul>
          <div className="nav-right">
            <input type="text" placeholder="Search..." />
            <button>Talk An Expert</button>
          </div>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="google-rating">
              <img src="/star.png" alt="Google Rating Star" />
              <span>Google Rating:</span>
              <span className="rating">4.5</span>
            </div>
            <h2>Your trusted partner for compliance business needs</h2>
            <p>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>
            <div className="stats">
              <div className="stat">
                <img src="/customer-rating.png" alt="Customer Rating Icon" />
                <span>4.5+</span>
                <span>Customer Rating</span>
              </div>
              <div className="stat">
                <img src="/clients.png" alt="Clients Icon" />
                <span>20,000+</span>
                <span>Clients</span>
              </div>
              <div className="stat">
                <img src="/financial-stability.png" alt="Financial Stability Icon" />
                <span>99.8%</span>
                <span>Financial Stability</span>
                </div>
                </div>
    <div className="services-container">
      <h2>Explore Our Services</h2>
      <div className="services-grid">
        <div className="service">
          <img src="company-formation.svg" alt="Company Formation" />
          <h3>Company Formation</h3>
          <p>Build web-based solutions that enhance customer experience.</p>
          <button>Learn more</button>
        </div>
        <div className="service">
          <img src="company-secretarial-services.svg" alt="Company Secretarial Services" />
          <h3>Company Secretarial Services</h3>
          <p>Make data-driven decisions and utilize technology to reach business goals.</p>
          <button>Learn more</button>
        </div>
        <div className="service">
          <img src="virtual-office-address.svg" alt="Virtual Office Address" />
          <h3>Virtual Office Address</h3>
          <p>Foster customer relationships by effectively serving your market.</p>
          <button>Learn more</button>
        </div>
        <div className="service">
          <img src="annual-compliance-services.svg" alt="Annual Compliance Services" />
          <h3>Annual Compliance Services</h3>
          <p>Turn your ideas into modern products with our design experts.</p>
          <button>Learn more</button>
        </div>
        <div className="service">
          <img src="payroll-services.svg" alt="Payroll Services" />
          <h3>Payroll Services</h3>
          <p>Expand your business across the globe with minimal effort.</p>
          <button>Learn more</button>
        </div>
        <div className="service">
          <img src="bookkeeping-services.svg" alt="Bookkeeping Services" />
          <h3>Bookkeeping Services</h3>
          <p>Steering user behaviours with creative design, data insights & technology.</p>
          <button>Learn more</button>
        </div>
      </div>
      <button>See All Services</button>
    </div>
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Trusted By Over 100+ Startups and freelance business</h1>
          <div className="logo-container">
            <img src="/oracle-logo.png" alt="Oracle Logo" />
            <img src="/morpheus-logo.png" alt="Morpheus Logo" />
            <img src="/morpheus-logo.png" alt="Morpheus Logo" />
            <img src="/samsung-logo.png" alt="Samsung Logo" />
            <img src="/monday-logo.png" alt="Monday Logo" />
            <img src="/segment-logo.png" alt="Segment Logo" />
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="welcome-message">
          <h2>WELCOME TO REGISTERKARO.IN</h2>
          <h1>Explore Our Services</h1>
        </div>
        <div className="services-container">
          <div className="service-card">
            <img src="/company-formation-icon.png" alt="Company Formation Icon" />
            <h3>Company Formation</h3>
            <p>Build web-based solutions that enhance customer experience.</p>
            <button>Learn more</button>
          </div>
          <div className="service-card">
            <img src="/company-secretarial-services-icon.png" alt="Company Secretarial Services Icon" />
            <h3>Company Secretarial Services</h3>
            <p>Make data-driven decisions and utilize technology to reach business goals.</p>
            <button>Learn more</button>
          </div>
          <div className="service-card">
            <img src="/virtual-office-address-icon.png" alt="Virtual Office Address Icon" />
            <h3>Virtual Office Address</h3>
            <p>Foster customer relationships by effectively serving your market.</p>
            <button>Learn more</button>
          </div>
          <div className="service-card">
            <img src="/annual-compliance-services-icon.png" alt="Annual Compliance Services Icon"/>
            </div>
  
    <div className="container">
      <h2>Our Happy Clients</h2>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the art
        customer service.
      </p>
      <div className="logos">
        <div>
          <img src="https://i.imgur.com/k41t59N.png" alt="Logo 1" />
        </div>
        <div>
          <img src="https://i.imgur.com/180fC14.png" alt="Logo 2" />
        </div>
        <div>
          <img src="https://i.imgur.com/4Q90y84.png" alt="Logo 3" />
        </div>
        <div>
          <img src="https://i.imgur.com/ZtG9b8L.png" alt="Logo 4" />
        </div>
        <div>
          <img src="https://i.imgur.com/W0Gq6cZ.png" alt="Logo 5" />
        </div>
        <div>
          <img src="https://i.imgur.com/1fK2o87.png" alt="Logo 6" />
        </div>
        <div>
          <img src="https://i.imgur.com/dC7867R.png" alt="Logo 7" />
        </div>
        <div>
          <img src="https://i.imgur.com/D97c68y.png" alt="Logo 8" />
        </div>
        <div>
          <img src="https://i.imgur.com/21G6Qk3.png" alt="Logo 9" />
        </div>
        <div>
          <img src="https://i.imgur.com/6lP79b7.png" alt="Logo 10" />
        </div>
        <div>
          <img src="https://i.imgur.com/6lP79b7.png" alt="Logo 10" /></div>
          
    <div className="container">
      <div className="header">
        <div className="header-item">
          <p className="header-title">1M+</p>
          <p className="header-description">CUSTOMERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">12+</p>
          <p className="header-description">YEARS OF EXCELLENCE</p>
        </div>
        <div className="header-item">
          <p className="header-title">41+</p>
          <p className="header-description">R&D ENGINEERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">78+</p>
          <p className="header-description">COUNTRIES</p>
        </div>
        <div className="header-item">
          <p className="header-title">3287+</p>
          <p className="header-description">PARTNERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">41+</p>
          <p className="header-description">AWARDS RECEIVED</p>
        </div>
      </div>
      <div className="banner">
        <p className="banner-title">1% OF THE INDUSTRY</p>
        <p className="banner-description">Welcome to your new digital reality. Now.</p>
        <div className="input-container">
          <input type="email" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
        <div className="banner-features">
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            <p>Instant results</p>
          </div>
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            <p>User-friendly interface</p>
          </div>
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            </div>
           
    <div className="container">
      <div className="header">
        <div className="header-item">
          <p className="header-title">1M+</p>
          <p className="header-description">CUSTOMERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">12+</p>
          <p className="header-description">YEARS OF EXCELLENCE</p>
        </div>
        <div className="header-item">
          <p className="header-title">41+</p>
          <p className="header-description">R&D ENGINEERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">78+</p>
          <p className="header-description">COUNTRIES</p>
        </div>
        <div className="header-item">
          <p className="header-title">3287+</p>
          <p className="header-description">PARTNERS</p>
        </div>
        <div className="header-item">
          <p className="header-title">41+</p>
          <p className="header-description">AWARDS RECEIVED</p>
        </div>
      </div>
      <div className="banner">
        <p className="banner-title">1% OF THE INDUSTRY</p>
        <p className="banner-description">Welcome to your new digital reality. Now.</p>
        <div className="input-container">
          <input type="email" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
        <div className="banner-features">
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            <p>Instant results</p>
          </div>
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            <p>User-friendly interface</p>
          </div>
          <div className="banner-feature">
            <span className="check-mark">✓</span>
            </div>

export default App;
