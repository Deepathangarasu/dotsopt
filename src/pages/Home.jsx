import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import video from "../assets/video/conv.mp4";
import FooterComponent from "./navbar/FooterComponent";

Modal.setAppElement("#root");

const Home = () => {
  const [activeTab, setActiveTab] = useState("object-detection");
  const [cardData, setCardData] = useState({});
  const [achievements, setAchievements] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);  // New state for Back to Top button visibility
  const navigate = useNavigate();

  const tabs = [
    { id: "object-detection", label: "Object detection and classification" },
    { id: "security-surveillance", label: "Security and surveillance" },
    { id: "Worker monitoring and attendance", label: "Worker monitoring and attendance" },
    { id: "vehicle-monitoring", label: "Vehicle detection" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch card data
    const fetchCardData = async () => {
      try {
        const response = await fetch("/home.json");
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    // Fetch achievements data
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/achievements.json");
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements data:", error);
      }
    };

    // Detect scroll to show Back to Top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    fetchCardData();
    fetchAchievements();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderCards = () => {
    return cardData[activeTab]?.map((card, index) => (
      <div className="card" key={index}>
        <img src={card.img} alt={card.title} className="cardimages" />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p className="details">{card.details}</p>
      </div>
    ));
  };

  const renderAchievements = () => {
    return achievements.map((achievement, index) => (
      <div className="card" key={index}>
        <img src={achievement.img} alt={achievement.title} />
        <h1>{achievement.title}</h1>
        <p>{achievement.details}</p>
      </div>
    ));
  };

  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Banner-Content */}
      <div className="content">
        <h1>Transforming Vision with AI for Your Business</h1>
        <p>Dotspot - Transforming Vision with AI Precision</p>
      </div>

      {/* Spacer */}
      <div className="spacer"></div>

      {/* Statistics-Section */}
      <section className="statistics-box">
        <div className="stat-item">
          <h3>200K+</h3>
          <p>Annotations</p>
        </div>
        <div className="stat-item">
          <h3>100K+</h3>
          <p>Alerts Generated Daily</p>
        </div>
        <div className="stat-item">
          <h3>80+</h3>
          <p>Cameras Operational</p>
        </div>
      </section>

      {/* Solution-section */}
      <section className="solution-section">
        <h2>Our Solutions</h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="cards-content">{renderCards()}</div>
      </section>

      <section className="achievements-section">
        <h2>Our Features</h2>
        <div className="cards-container1">{renderAchievements()}</div>
      </section>


      <FooterComponent />
    </div>
  );
};

export default Home;
