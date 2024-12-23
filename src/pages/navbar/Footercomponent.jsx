import React from 'react';
import './FooterComponent.css'; // Import the footer-specific CSS
import Logo from "./dot.png"; // Assuming you have the Dotsito logo in your assets folder

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-brand">
        <img
            alt="Dotsito Logo"
            src={"https://dotsito.s3.ap-south-1.amazonaws.com/dotspot_v2__white_new-removebg-preview.png"}
            width="170"
            height="50"
            className="d-inline-block align-top"
          />
        </div>
        <div className="footer-text">
          <p className='footer-text-ri'>© {new Date().getFullYear()} Dotsito Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
