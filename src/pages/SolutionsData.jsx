// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './Solutions.css';
// import video from "../../public/video/conv.mp4";
// import vehicleImg from "../images/vehicle.png";
// import peopleCountingImg from "../images/people.png";
// import intusioImg from "../images/intusio.png";
// import faceImg from "../images/face.png";
// import LicensePlateImg from "../images/lice.png";
// import RealtimeSurveillanceImg from "../images/cam.png";
// import safetymonitoringImg from "../images/safety3.png";
// import EmergencyResponseImg from "../images/emcr.png";
// import AttendanceTrackingImg from "../images/Attnce.jpg";
// import VehiclemonitoringImg from "../images/vehiclemonitor.png";
// import AchievementImg from "../images/achive.png";
// import Achievement2Img from "../images/suc1.png";
// import Achievement3Img from "../images/dashboard.png";
// const SolutionsDetails = () => {
//   const { id } = useParams(); 
//   const [solution, setSolution] = useState(null);

//   const solutionsData = [
//     {
//       id: 1,
//       title: "Object Detection and Classification",
//       description:
//         "Our object detection system leverages advanced machine learning algorithms to identify and classify objects in real-time.",
//       features: [
//         "Real-time object detection",
//         "High accuracy and performance",
//         "Customizable detection parameters",
//         "Supports multiple object types",
//       ],
//     },
//     {
//       id: 2,
//       title: "Security and Surveillance",
//       description:
//         "Our security and surveillance solutions help organizations monitor and safeguard their premises with cutting-edge technology.",
//       features: [
//         "24/7 video surveillance",
//         "Intrusion detection",
//         "Facial recognition",
//         "Cloud-based storage and monitoring",
//       ],
//     },
//     {
//       id: 3,
//       title: "Works Monitoring and Attendance",
//       description:
//         "Track employee attendance and monitor their work efficiently with our AI-powered system.",
//       features: [
//         "Automated attendance tracking",
//         "Real-time productivity monitoring",
//         "Safety equipment compliance checks",
//         "Shift-based worker analytics",
//       ],
//     },
//     {
//       id: 4,
//       title: "Vehicle Detection and Monitoring",
//       description:
//         "Our vehicle detection solutions offer robust monitoring for parking lots, highways, and gated premises.",
//       features: [
//         "Automated vehicle entry/exit detection",
//         "License plate recognition (LPR)",
//         "Traffic flow management",
//         "Smart parking solutions",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const selectedSolution = solutionsData.find(
//       (item) => item.id === parseInt(id)
//     );
//     setSolution(selectedSolution);
//   }, [id, solutionsData]);

//   if (!solution) {
//     return <div className="solution-loading">Loading...</div>;
//   }

//   return (
//     <div className="solution-details">
//         <div className="solution-images">
//             <img src={solution.image} alt="" />
//         </div>
//       <h1 className="solution-title">{solution.title}</h1>
//       <p className="solution-description">{solution.description}</p>
//       <ul className="solution-features">
//         {solution.features.map((feature, index) => (
//           <li key={index} className="solution-feature-item">{feature}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SolutionsDetails;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Solutions.css';

// Centralized data for dynamic content
const solutionsData = {
  "object-detection": {
    title: "Object Detection and Classification",
    description: "Our object detection system leverages advanced machine learning algorithms to identify and classify objects in real-time.",
    features: [
      "Real-time object detection",
      "High accuracy and performance",
      "Customizable detection parameters",
      "Supports multiple object types"
    ],
  },
  "security": {
    title: "Security and Surveillance",
    description: "Our security and surveillance solutions help organizations monitor and safeguard their premises with cutting-edge technoy.",
    features: [
      
      "Intrusion detection",
      "Facial recognition",
      "Cloud-based storage and monitoring"
    ],
  },
  "workforce": {
    title: "Works Monitoring and Attendance",
    description: "Track employee attendance and monitor their work efficiently with our AI-powered system.",
    features: [
      "Automated attendance tracking",
      "Real-time productivity monitoring",
      "Safety equipment compliance checks",
      "Shift-based worker analytics"
    ],
  },
  "vehicle": {
    title: "Vehicle Detection and Monitoring",
    description: "Our vehicle detection solutions offer robust monitoring for parking lots, highways, and gated premises.",
    features: [
      "Automated vehicle entry/exit detection",
      "License plate recognition (LPR)",
      "Traffic flow management",
      "Smart parking solutions"
    ],
  },
};

const SolutionsDetails = () => {
  const location = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    setContent(solutionsData[type]);
  }, [location]);

  if (!content) {
    return <div className="solution-loading">Please select a solution from the dropdown menu.</div>;
  }

  return (
    <div className="solution-details">
      <h1 className="solution-title">{content.title}</h1>
      {content.heading && <h2 className="solution-heading">{content.heading}</h2>}
      {content.paragraph && <p className="solution-paragraph">{content.paragraph}</p>}
      <p className="solution-description">{content.description}</p>
      <p className="solution-description">{content.description}</p>
      <ul className="solution-features">
        {content.features.map((feature, index) => (
          <li key={index} className="solution-feature-item">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionsDetails;
