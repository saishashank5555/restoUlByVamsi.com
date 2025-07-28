import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Sections/Home/Footer.jsx";

const sections = [
  {
    key: "wedding",
    title: "Wedding Banquet Halls",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Wedding Hall ${i + 1}`,
      location: "Hyderabad",
      price: 25000 + i * 2000,
      rating: 4 + (i % 2),
      imgSeed: 1500 + i,
    })),
  },
  {
    key: "corporate",
    title: "Corporate Banquet Halls",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 13,
      name: `Corporate Hall ${i + 1}`,
      location: "Bangalore",
      price: 18000 + i * 1500,
      rating: 4 + (i % 2),
      imgSeed: 1600 + i,
    })),
  },
  {
    key: "party",
    title: "Party Banquet Halls",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 25,
      name: `Party Hall ${i + 1}`,
      location: "Chennai",
      price: 12000 + i * 1000,
      rating: 3 + (i % 2),
      imgSeed: 1700 + i,
    })),
  },
  {
    key: "luxury",
    title: "Luxury Banquet Halls",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 37,
      name: `Luxury Hall ${i + 1}`,
      location: "Mumbai",
      price: 40000 + i * 3000,
      rating: 5,
      imgSeed: 1800 + i,
    })),
  },
];

const BanquetHalls = () => {
  const [showAll, setShowAll] = useState({
    wedding: false,
    corporate: false,
    party: false,
    luxury: false,
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
        `}
      </style>
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>Banquet Halls</h1>
        {sections.map((sec) => {
          const displayed = showAll[sec.key] ? sec.data : sec.data.slice(0, 8);
          return (
            <div key={sec.key} style={{ marginBottom: "3rem" }}>
              <h2 style={styles.heading}>{sec.title}</h2>
              <div style={styles.grid}>
                {displayed.map((hall) => (
                  <div key={hall.id} style={styles.card} className="apt-card">
                    <div style={styles.imageWrapper}>
                      <img
                        src={`https://picsum.photos/400/300?random=${hall.imgSeed}`}
                        alt={hall.name}
                        style={styles.image}
                        className="apt-image"
                        onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/400x300?text=Banquet+Hall")
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
                        {hall.name}
                      </h3>
                      <p
                        style={{
                          ...styles.location,
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        {hall.location}
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
                              color: i < hall.rating ? "#f5a623" : "#ccc",
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
                        ₹{hall.price} / stay
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
                        navigate(`/book/${hall.id}`, {
                          state: {
                            hotel: {
                              ...hall,
                              images: [
                                `https://picsum.photos/400/300?random=${hall.imgSeed}`,
                                `https://picsum.photos/400/300?random=${hall.imgSeed + 1}`,
                                `https://picsum.photos/400/300?random=${hall.imgSeed + 2}`,
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
  pageTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "2rem",
    color: "#1e293b",
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

export default BanquetHalls;
