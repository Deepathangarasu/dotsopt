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
      description: "Our object detection system utilizes advanced AI algorithms to identify and categorize objects in real-time from images or video streams. It offers high precision for detecting various objects like vehicles, people, and more.",
      features: "Our object detection system provides real-time detection with customizable parameters for different object types. It is highly flexible and suitable for a range of use cases, including security monitoring, traffic analysis, people counting, and access control.",
      image: "../images/Attnce.jpg",
      summary: "Enhance your operational efficiency, security, and analytics with our state-of-the-art object detection technology, specifically designed for Vehicle Entry/Exit, People Counting, and Employee Access Control.",
      useCases: "Our object detection technology is applied across industries such as security, retail, healthcare, traffic management, and workplace access control, offering tailored solutions for diverse needs.",
      additionalContent: [
        {
          heading: "People Counting",
          content: "People counting systems leverage object detection and classification to accurately identify and count individuals in real-time. Using advanced AI algorithms and camera systems, these technologies can handle crowded spaces and dynamic movements effectively. They are widely used in retail stores, airports, and public venues to monitor foot traffic and optimize resource allocation. The data collected helps improve operational efficiency, enhance safety measures, and deliver better customer experiences."
        },
        {
          heading: "Employee Access Control",
          content: "Employee access control systems use object detection and classification to identify authorized personnel through facial recognition, ID badges, or uniforms. These systems ensure secure access to restricted areas and prevent unauthorized entry. Real-time monitoring enhances workplace security, reduces risks of breaches, and ensures compliance with safety protocols. Integration with smart access systems further streamlines entry and exit processes."
        },
        {
          heading: "Vehicle Entry/Exit",
          content: "Object detection and classification technologies are essential for managing vehicle entry and exit in facilities like parking lots, toll booths, and secure zones. Cameras equipped with AI can detect vehicle types, recognize license plates, and monitor traffic flow. These systems reduce waiting times, prevent unauthorized vehicle access, and improve overall operational efficiency. Real-time data collection supports better traffic management and enhanced security measuresReal-time detection helps prevent unauthorized access, streamline vehicle movement, and improve overall security and operational efficiency."
        }
      ]
    },
      "security": {
        title: "Security and Surveillance",
        description: "Our security solutions help organizations monitor and safeguard their premises with advanced technology.The integration of mobile apps allows you to receive instant alerts and view live feeds on your phone or tablet, giving you constant control. Additionally, our systems come equipped with night vision and infrared technology, ensuring clear visuals even in low-light conditions.",
        features: "Our security systems provide 24/7 video surveillance, real-time intrusion detection, and facial recognition. Cloud-based storage and monitoring ensure constant security with remote access.",
        image: "../images/Attnce.jpg",
        heading: "",
        summary: "Protect your assets and ensure safety with our top-of-the-line security and surveillance systems.",
        useCases: "Use our security solutions for public area surveillance, access control, building security, and critical infrastructure monitoring, helping organizations maintain constant vigilance.",
        additionalContent: [
          {
            heading: "Facial Recognition",
            content: "Facial recognition uses object detection and classification to identify individuals by analyzing facial features in real-time. It is widely deployed in airports, corporate buildings, and public areas for secure access control and threat detection. The technology helps match faces against authorized databases, preventing unauthorized entry. Its accuracy and speed make it a crucial tool in modern surveillance systems."
          },
          {
            heading: "Intrusion Detection",
            content: "Intrusion detection systems leverage object detection to identify unauthorized access or suspicious movements in secured zones. AI-powered cameras can differentiate between humans, animals, and other objects, minimizing false alarms. These systems trigger real-time alerts for security personnel to take immediate action. They are commonly used in homes, offices, and critical infrastructure for enhanced protection."
          },
          {
            heading: "Real-time Video Surveillance",
            content: "Real-time video surveillance utilizes object detection and classification to monitor live video feeds for unusual activities. AI systems can detect suspicious behavior, track individuals across cameras, and identify objects like weapons or abandoned bags. Security teams receive instant alerts, enabling quick intervention. This technology ensures safety in high-risk areas such as airports, stadiums, and smart cities."
          }
        ]
      }, 
        "workforce": {
          title: "Workforce Monitoring and Attendance",
          description: "Work monitoring involves overseeing the tasks, projects, and performance of employees to ensure they meet deadlines and company expectations. This can include tracking work progress, evaluating productivity, and identifying areas for improvement.",
          features: "Automate attendance tracking with real-time monitoring. Our system helps with safety compliance checks and provides shift-based analytics to improve workforce management.",
          image: "../images/Attnce.jpg",
          heading: "",
          summary: "Optimize productivity and compliance with our workforce monitoring and attendance solutions.",
          useCases: "This system is ideal for remote workforce management, employee safety compliance, productivity analysis, and shift-based analytics, helping businesses optimize their workforce.",
          additionalContent: [
            {
              heading: "Real-time Safety Monitoring",
              content: "Real-time safety monitoring uses object detection and classification to track employee activities and ensure compliance with safety protocols. AI-powered cameras detect unsafe behavior, identify hazards, and send instant alerts to supervisors. This technology helps prevent workplace accidents and maintain a secure working environment. It is widely used in construction sites, manufacturing plants, and hazardous work zones."
            },
            {
              heading: "Emergency Response",
              content: "Emergency response systems utilize object detection to quickly identify incidents such as fires, accidents, or unauthorized access. Cameras equipped with AI can pinpoint affected areas and track individuals in need of assistance. Real-time alerts enable faster coordination with emergency services, minimizing damage and ensuring quick evacuations. These systems are crucial in large facilities, factories, and public spaces."
            },
            {
              heading: "Automated Attendance Tracking",
              content: "Automated attendance tracking systems use facial recognition and object classification to record employee presence accurately. Cameras identify and log employees as they enter or exit designated areas, eliminating the need for manual attendance systems. This ensures accurate payroll processing, reduces errors, and prevents time fraud. The technology is widely adopted in offices, schools, and industrial workplaces."
            }
          ]
        },

          "vehicle": {
            title: "Vehicle Detection and Monitoring",
            description: "Robust monitoring for parking lots, highways, and gated premises.",
            features: "Our vehicle detection system includes automated vehicle entry/exit detection, license plate recognition (LPR), traffic flow management, and smart parking solutions for improved efficiency.",
            image: "../images/Attnce.jpg",
            heading: "",
            summary: "Achieve enhanced security and efficiency with our vehicle detection and monitoring services.",
            useCases: "Ideal use cases for vehicle monitoring include smart parking solutions, highway monitoring, residential area security, and managing public transit systems.",
            additionalContent: [
              {
                heading: "License Plate Recognition",
                content: "License plate recognition uses object detection and classification to identify and read vehicle license plates in real-time. AI-powered cameras capture plate numbers, process them, and match them against databases for authentication or tracking. This technology is widely used in toll booths, parking facilities, and restricted zones. It enhances security, automates access control, and prevents unauthorized vehicle entry."
              },
              {
                heading: "Vehicle Monitoring",
                content: "Vehicle monitoring systems leverage object detection to track vehicle movements, identify types, and analyze traffic patterns. AI cameras can detect speed violations, unusual driving behavior, or stationary vehicles in restricted areas. These systems are essential for traffic management, law enforcement, and fleet tracking. They improve road safety and ensure smooth vehicle flow in high-traffic zones."
              },
              {
                heading: "Parking Space Detection",
                content: "Parking space detection systems use object detection to identify vacant and occupied parking spots in real-time. AI algorithms analyze camera feeds to guide drivers to available spaces, reducing congestion and saving time. These systems are widely implemented in smart parking solutions and commercial facilities. They enhance parking efficiency and optimize space utilization."
              }
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
        {content.additionalContent && content.additionalContent.map((section, index) => (
    <div key={index} className="additional-content-section">
      <h4>{section.heading}</h4>
      <p>{section.content}</p>
    </div>
  ))}

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
              <p className="features-paragraph">
                {content.features}
              </p>
            </div>
          )}
          {activeTab === 'useCases' && (
            <div>
              <p className="use-cases-paragraph">
                {content.useCases}
              </p>
            </div>
          )}
        </section>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Solutions;
