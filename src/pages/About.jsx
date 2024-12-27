import React from 'react';
import './About.css';
import about from '../images/about2.png';
import aboutImg from '../images/aboutImg.png';
import visionImg from '../images/vision.png';
import FooterComponent from "./navbar/FooterComponent";

const AboutPage = () => {  
  window.scrollTo(0, 0);
  return (
    <div className="About-page">
      <section className="about-banner" style={{ backgroundImage: `url(${about})` }}>
        <div className="overlay">
          <h1 className='about-us'>About us</h1>
          <br></br>
          <p className="about-p">DotSpot — Future-Proof Your Business with Cutting-Edge AI Solutions.</p>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-content">
          <h2 className='mission'>Our Mission</h2>
          <br></br>
          <p>Our goal is to help businesses automate processes and increase operational efficiency by offering cutting-edge AI solutions.</p>
          <br></br>
          <p>Dot Spot firmly empowering businesses with AI-driven solutions, data intelligence, and human ingenuity. Unlocking tomorrow's possibilities today. Transforming industries through innovation.</p>
        </div>
        <div className="mission-image">
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-content">
          <h2 className='vision'>Our Vision</h2>
          <br></br>
          <p>To be a global leader in AI innovation, transforming industries by unlocking the potential of data intelligence and human ingenuity.</p>
          <br></br>
          <p>Dot Spot envisions a future where businesses thrive with seamless automation, enhanced operational efficiency, and sustainable growth, paving the way for a smarter, more connected world.</p>
        </div>
        <div className="vision-image">
          <img src={visionImg} alt="aboutImg" />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <h3>Why <span>choose us</span> for your business.</h3>
        <div className="why-us-cards">
          <div className="why-us-card">
            <span>✓</span>
            <p>On-Camera, On-PC, On-Mobile... Dot Spot delivers accurate, flexible, and scalable AI software solutions.</p>
          </div>
          <div className="why-us-card">
            <span>✓</span>
            <p>Complete data and system control.</p>
          </div>
          <div className="why-us-card">
            <span>✓</span>
            <p>Trained continuously on specific business requirements to operate better each time.</p>
          </div>
          <div className="why-us-card">
            <span>✓</span>
            <p>Client-centric approach.</p>
          </div>
        </div>
      </section>

      
    
      <FooterComponent/>  </div>
    
  );
};

export default AboutPage;
