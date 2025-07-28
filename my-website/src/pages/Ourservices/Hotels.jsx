import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookButton from "../../components/SeeAvailability/BookButton";
import Footer from "../../Sections/Home/Footer.jsx";

const Hotels = () => {
  const [showAll, setShowAll] = useState({
    luxury: false,
    budget: false,
    family: false,
    business: false,
  });
  const navigate = useNavigate();

  const hotelsData = {
    luxury: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Luxury Hotel ${i + 1}`,
      location: `Location ${i + 1}`,
      price: 500 + i * 50,
      rating: 4 + (i % 2),
      image: `https://picsum.photos/400/300?random=${i + 1}`,
    })),
    budget: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Budget Hotel ${i + 1}`,
      location: `City ${i + 1}`,
      price: 100 + i * 10,
      rating: 3 + (i % 2),
      image: `https://picsum.photos/400/300?random=${i + 13}`,
    })),
    family: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Family Hotel ${i + 1}`,
      location: `Town ${i + 1}`,
      price: 200 + i * 20,
      rating: 4,
      image: `https://picsum.photos/400/300?random=${i + 25}`,
    })),
    business: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Business Hotel ${i + 1}`,
      location: `Metro ${i + 1}`,
      price: 300 + i * 30,
      rating: 5,
      image: `https://picsum.photos/400/300?random=${i + 37}`,
    })),
  };

  const toggleShowAll = (category) => {
    setShowAll((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderCategory = (category, title) => {
    const hotels = hotelsData[category];
    const visibleHotels = showAll[category] ? hotels : hotels.slice(0, 8);

    return (
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#333" }}>{title}</h2>
        <div style={styles.grid}>
          {visibleHotels.map((hotel) => (
            <div key={hotel.id} style={styles.card} className="hotel-card">
              <div style={styles.imageWrapper}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={styles.image}
                  className="hotel-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x180?text=Hotel";
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ ...styles.name, textAlign: "center", margin: 0 }}>{hotel.name}</h3>
                <p style={{ ...styles.location, textAlign: "center", margin: 0 }}>{hotel.location}</p>
                <div style={{ ...styles.stars, textAlign: "center", margin: "0.3rem 0" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: i < hotel.rating ? "#f5a623" : "#ccc",
                        fontSize: "1.1rem"
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p style={{ ...styles.price, textAlign: "center", margin: 0 }}>₹{hotel.price} / stay</p>
              </div>

              <BookButton
                onClick={() => {
                  navigate(`/book/${hotel.id}`, { state: { hotel } });
                }}
              />
            </div>
          ))}
        </div>
        {hotels.length > 8 && (
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button style={styles.toggleButton} onClick={() => toggleShowAll(category)}>
              {showAll[category] ? "Show Less" : "Explore More"}
            </button>
          </div>
        )}
      </div>
    );
  };

  const handleBook = (hotel) => {
    navigate("/booking", { state: { hotel: { ...hotel, images: [hotel.image, "/img2.jpg", "/img3.jpg"] } } });
  };

  return (
    <>
      <style>
        {`
        .hotel-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hotel-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .hotel-image {
          transition: transform 0.4s ease;
        }
        .hotel-card:hover .hotel-image {
          transform: scale(1.1);
        }
      `}
      </style>

      <div style={styles.container}>
        {renderCategory("luxury", "Luxury Hotels")}
        {renderCategory("budget", "Budget Hotels")}
        {renderCategory("family", "Family-Friendly Hotels")}
        {renderCategory("business", "Business Hotels")}
      </div>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    padding: "20px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
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
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: "5px 0",
  },
  location: {
    fontSize: "0.9rem",
    color: "#666",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "8px 0",
    color: "#2c3e50",
  },
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Hotels;
