import React from 'react';
import './Contact.css';
import contact from '../images/contact.png';
import FooterComponent from "./navbar/FooterComponent";

const Contactpage = () => {  
  return (
    <div className="Contact-page">
      {/* Banner Section */}
      <section className="contact-banner" style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', height: '300px' }}>
        <div className="overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%' }}>
          <h1 className="contact" style={{ color: 'white', fontSize: '2.5em', fontWeight: 'bold' }}>Contact Us</h1>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="contact-content" style={{ display: 'flex', padding: '20px', gap: '20px' }}>
        {/* Contact Information */}
        <div className="contact-info" style={{ flex: 1, backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px' }}>
          <h2 className='contactinfo'>Contact Information</h2>
          <p><strong>Address:</strong> No.115, Old Court Street, Akilandapuram, Kangeyam, Tiruppur District, Tamil Nadu - 638701, India</p>
          <br></br>
          <p><strong>Phone:</strong> +91 4257 299473, +91 4257 358130</p>
          <br></br>
          <p><strong>Email:</strong> operations@dotsito.com</p>
          

        </div>

        {/* Contact Form */}
        <div className="contact-form" style={{ flex: 1, backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px' }}>
          <h2>Get in Touch</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your Name" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            
            <label>Email</label>
            <input type="email" placeholder="Your Email" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone Number" style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            
            <label>Message</label>
            <textarea placeholder="Your Message" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
            
            <button type="submit" style={{ padding: '10px 20px',width:"250px",borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Submit</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map" style={{ padding: '20px' }}>
        <h2>Our Location</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5904163666546!2d77.56384020891554!3d10.994256389122844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99900755c1513%3A0x6fb5de480a85caca!2sDotsito%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730092211818!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </section>
    <FooterComponent/> </div>
  );
};

export default Contactpage;
