import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import vehicleImg from "../images/vehicle.png";
import AttendanceTrackingImg from "../images/Attnce.jpg";
import Achievement3Img from "../images/dashboard.png";
import FooterComponent from "./navbar/FooterComponent";


const productDetails = [
  {
    id: 1,
    title: "Object Detection and Classification",
    image: vehicleImg,
    description: "Our object detection system helps classify and detect multiple objects in real time with high accuracy. It can be used in security, retail, and industrial settings.",
  },
  {
    id: 2,
    title: "Workers Monitoring and Attendance Tracking",
    image: AttendanceTrackingImg,
    description: "Track and monitor workers’ activities, ensure safety compliance, and automate attendance tracking with real-time data to improve productivity.",
  },
  {
    id: 3,
    title: "Role-Based Dashboard",
    image: Achievement3Img,
    description: "Our role-based dashboards provide customized views for each role in your organization, offering insights and analytics specific to their responsibilities.",
  },
];

const ProductPage = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className="product-page">
      {productDetails.map((product) => (
        <section
          key={product.id}
          className="product-banner"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="glass-overlay">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button
              className="read-more-btn"
              onClick={() => handleReadMore(product.id)}
            >
              Read More
            </button>
          </div>
        </section>
      ))}
  <FooterComponent />
    </div>
  );
};

export default ProductPage;
