import React, { useState } from 'react';
import './Solutions.css';
import FooterComponent from "./navbar/FooterComponent";
import Navbar from "../components/Navbar";
import AttendanceTrackingImg from "../images/Attnce.jpg"; // Banner Image

const Solutions = ({ solution }) => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('features');

  const solutionsData = {
    "object-detection": {
      title: "Object Detection and Classification",
      description: "Our object detection system leverages advanced machine learning algorithms to identify and classify objects in real-time.",
      features: [
        "Real-time object detection",
        "High accuracy",
        "Customizable detection parameters",
        "Supports multiple object types"
      ],
      image: "../images/Attnce.jpg",
      summary: "Enhance your analytics and monitoring capabilities with our cutting-edge object detection technology, specifically for Vehicle Entry/Exit, People Counting, and Employee Access Control.",
      useCases: [
        "Retail theft prevention",
        "Traffic monitoring",
        "Industrial automation",
        "Healthcare diagnostics"
      ]
    },
    "security": {
      title: "Security and Surveillance",
      description: "Our security solutions help organizations monitor and safeguard their premises with advanced technology.",
      features: [
        "24/7 video surveillance",
        "Intrusion detection",
        "Facial recognition",
        "Cloud-based storage and monitoring"
      ],
      image: "../images/Attnce.jpg",
      heading: "Comprehensive Security Solutions",
      summary: "Protect your assets and ensure safety with our top-of-the-line security and surveillance systems.",
      useCases: [
        "Public area surveillance",
        "Access control",
        "Building security",
        "Critical infrastructure monitoring"
      ]
    },
    "workforce": {
      title: "Works Monitoring and Attendance",
      description: "Track employee attendance and monitor their work efficiently with our AI-powered system.",
      features: [
        "Automated attendance tracking",
        "Real-time productivity monitoring",
        "Safety compliance checks",
        "Shift-based worker analytics"
      ],
      image: "../images/Attnce.jpg",
      heading: "Streamline Workforce Management",
      summary: "Optimize productivity and compliance with our workforce monitoring and attendance solutions.",
      useCases: [
        "Remote workforce management",
        "Employee safety compliance",
        "Productivity analysis",
        "Shift-based analytics"
      ]
    },
    "vehicle": {
      title: "Vehicle Detection and Monitoring",
      description: "Robust monitoring for parking lots, highways, and gated premises.",
      features: [
        "Automated vehicle entry/exit detection",
        "License plate recognition (LPR)",
        "Traffic flow management",
        "Smart parking solutions"
      ],
      image: "../images/Attnce.jpg",
      heading: "Intelligent Vehicle Monitoring",
      summary: "Achieve enhanced security and efficiency with our vehicle detection and monitoring services.",
      useCases: [
        "Smart parking solutions",
        "Highway monitoring",
        "Residential area security",
        "Public transit system management"
      ]
    }
  };

  const content = solutionsData[solution];

  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <section 
        className="product-banner-page" 
        style={{ backgroundImage: `url(${AttendanceTrackingImg})` }}
      >
        <div className="overlay">
          <h1>{content.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="solution-details">
        <h2>{content.title}</h2>
        <h3>{content.heading}</h3>
        <p>{content.summary}</p>
        <p>{content.description}</p>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <span
            className={`tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => handleTabClick('features')}
          >
            Features
          </span>
          <span
            className={`tab ${activeTab === 'useCases' ? 'active' : ''}`}
            onClick={() => handleTabClick('useCases')}
          >
            Use Cases
          </span>
        </div>

        {/* Tab Content */}
        <section className="tab-content">
          {activeTab === 'features' && (
            <div>
              {content.features.map((feature, index) => (
                <p key={index} className="feature-item">{feature}</p>
              ))}
            </div>
          )}
          {activeTab === 'useCases' && (
            <div>
              {content.useCases.map((useCase, index) => (
                <p key={index} className="use-case-item">{useCase}</p>
              ))}
            </div>
          )}
        </section>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Solutions;
