import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './homeSection.css'; // Using same styles as HyderabadHotelsSection

const sections = [
  {
    key: "mostbooked",
    title: "Most Booked Properties",
    data: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Popular Stay ${i + 1}`,
      location: ["Hyderabad", "Bangalore", "Mumbai", "Delhi"][i % 4],
      price: 2500 + i * 200,
      rating: 4 + (i % 2),
      imgSeed: 3000 + i,
    })),
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ccc' }}>★</span>
    );
  }
  return <div className="rating-stars">{stars}</div>;
};

const MostBookedHotels = () => {
  const [showAll, setShowAll] = useState({ mostbooked: false });
  const navigate = useNavigate();

  return (
    <section className="popular-destinations-section">
      <h2 className="destination-heading">Most Booked Hotels</h2>
      <div className="destinations-list">
        {sections.map((sec) => {
          const displayed = showAll[sec.key] ? sec.data : sec.data.slice(0, 8);
          return (
            <div key={sec.key} style={{ marginBottom: "3rem" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}>
                {displayed.map((hotel) => (
                  <div key={hotel.id} style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }} className="apt-card">
                    <div style={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "75%",
                      overflow: "hidden",
                    }}>
                      <img
                        src={`https://picsum.photos/400/300?random=${hotel.imgSeed}`}
                        alt={hotel.name}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s",
                        }}
                        className="apt-image"
                        onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/400x300?text=Hotel")
                        }
                      />
                    </div>
                    <h3 style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      margin: "0.5rem 0",
                      color: "#1e293b",
                    }}>{hotel.name}</h3>
                    <p style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      marginBottom: "0.5rem",
                    }}>{hotel.location}</p>
                    <p style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#2563eb",
                      marginBottom: "1rem",
                    }}>
                      ₹{hotel.price} / stay
                    </p>
                    <div style={{ marginBottom: "0.5rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color: i < hotel.rating ? "#f5a623" : "#ccc",
                          }}
                        >
                          ★
                        </span>
                      ))}
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
                        navigate(`/book/${hotel.id}`, {
                          state: {
                            hotel: {
                              ...hotel,
                              images: [
                                `https://picsum.photos/400/300?random=${hotel.imgSeed}`,
                                `https://picsum.photos/400/300?random=${hotel.imgSeed + 1}`,
                                `https://picsum.photos/400/300?random=${hotel.imgSeed + 2}`,
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
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#007bff",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      padding: 0,
                      textDecoration: "underline",
                    }}
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
      </div>
    </section>
  );
};

export default MostBookedHotels;
