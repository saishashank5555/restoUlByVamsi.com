import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Sections/Home/Footer.jsx";

const sections = [
  {
    
    key: "business",
    title: "Business Apartments",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Metro Stay ${i + 1}`,
      location: "Gurgaon",
      price: 2500 + i * 150,
      rating: 4 + (i % 2),
      imgSeed: 900 + i,
    })),
  },
  {
    key: "family",
    title: "Family Friendly Apartments",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 13,
      name: `Family Suites ${i + 1}`,
      location: "Pune",
      price: 2200 + i * 100,
      rating: 4 + (i % 2),
      imgSeed: 1000 + i,
    })),
  },
  {
    key: "budget",
    title: "Budget Service Apartments",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 25,
      name: `Budget Nest ${i + 1}`,
      location: "Ahmedabad",
      price: 1800 + i * 80,
      rating: 3 + (i % 2),
      imgSeed: 1100 + i,
    })),
  },
  {
    key: "premium",
    title: "Premium Apartments",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 37,
      name: `Elite Suites ${i + 1}`,
      location: "Chennai",
      price: 3500 + i * 200,
      rating: 5,
      imgSeed: 1200 + i,
    })),
  },
];

const ServiceApartments = () => {
  const [showAll, setShowAll] = useState({
    business: false,
    family: false,
    budget: false,
    premium: false,
  });
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .apt-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .apt-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .apt-image {
            transition: transform 0.4s ease;
          }
          .apt-card:hover .apt-image {
            transform: scale(1.1);
          }
          .book-btn {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }
          .apt-card:hover .book-btn {
            background-color: #0056b3;
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={styles.container}>
        {sections.map((sec) => {
          const displayed = showAll[sec.key] ? sec.data : sec.data.slice(0, 8);
          return (
            <div key={sec.key} style={{ marginBottom: "3rem" }}>
              <h2 style={styles.heading}>{sec.title}</h2>
              <div style={styles.grid}>
                {displayed.map((apt) => (
                  <div key={apt.id} style={styles.card} className="apt-card">
                    <div style={styles.imageWrapper}>
                      <img
                        src={`https://picsum.photos/400/300?random=${apt.imgSeed}`}
                        alt={apt.name}
                        style={styles.image}
                        className="apt-image"
                        onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/400x300?text=Apartment")
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <h3
                        style={{
                          ...styles.name,
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        {apt.name}
                      </h3>
                      <p
                        style={{
                          ...styles.location,
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        {apt.location}
                      </p>
                      <div
                        style={{
                          ...styles.stars,
                          textAlign: "center",
                          margin: "0.3rem 0",
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            style={{
                              color: i < apt.rating ? "#f5a623" : "#ccc",
                              fontSize: "1.1rem",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p
                        style={{
                          ...styles.price,
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        ₹{apt.price} / stay
                      </p>
                    </div>
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        border: "none",
                        color: "#fff",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                      onClick={() =>
                        navigate(`/book/${apt.id}`, {
                          state: {
                            hotel: {
                              ...apt,
                              images: [
                                `https://picsum.photos/400/300?random=${apt.imgSeed}`,
                                `https://picsum.photos/400/300?random=${apt.imgSeed + 1}`,
                                `https://picsum.photos/400/300?random=${apt.imgSeed + 2}`,
                              ],
                            },
                          },
                        })
                      }
                    >
                      See Availability
                    </button>
                  </div>
                ))}
              </div>
              {sec.data.length > 8 && (
                <div style={{ textAlign: "right", marginTop: "20px" }}>
                  <button
                    style={styles.toggleButton}
                    onClick={() =>
                      setShowAll((prev) => ({
                        ...prev,
                        [sec.key]: !prev[sec.key],
                      }))
                    }
                  >
                    {showAll[sec.key] ? "Show Less" : "Explore More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    padding: "2rem",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.25s, box-shadow 0.25s",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    paddingTop: "75%",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: "0.5rem 0",
    color: "#1e293b",
  },
  location: {
    fontSize: "0.9rem",
    color: "#64748b",
    marginBottom: "0.5rem",
  },
  price: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#2563eb",
    marginBottom: "1rem",
  },
  stars: {
    marginBottom: "0.5rem",
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    fontSize: "0.9rem",
    padding: 0,
    textDecoration: "underline",
  },
};

export default ServiceApartments;
