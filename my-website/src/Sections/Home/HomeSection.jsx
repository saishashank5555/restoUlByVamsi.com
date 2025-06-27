import React from "react";
import "./homeSection.css";

const features = [
  {
    title: "Verified Listings",
    description: "Every property is quality-checked and verified for your peace of mind.",
    icon: "✅",
  },
  {
    title: "24/7 Customer Support",
    description: "Get round-the-clock assistance from our dedicated support team.",
    icon: "🕑",
  },
  {
    title: "Best Price Guarantee",
    description: "We ensure you get the best deals at competitive prices.",
    icon: "💰",
  },
];

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <h2 className="home-title">Why Choose EasyStay?</h2>
        <p className="home-subtitle">
          Enjoy unbeatable deals, verified listings, and 24/7 support tailored to your stay preferences.
        </p>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="cta-button">Start Exploring →</button>
      </div>
    </section>
  );
};

export default HomeSection;
