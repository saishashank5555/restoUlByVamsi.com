import React, { useState } from "react";
import BookButton from "../../components/BookButton";
import BookingModal from "../../components/BookingModal";
import Footer from "../../Sections/Home/Footer.jsx";

const GuestHouses = () => {
  const [showAll, setShowAll] = useState({
    family: false,
    budget: false,
    luxury: false,
    hill: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const sections = [
    {
      key: "family",
      title: "Family Guest Houses",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Family Haven ${i + 1}`,
        location: "Shimla",
        price: 1800 + i * 10,
        rating: 4 + (i % 2),
        imgSeed: 100 + i,
      })),
    },
    {
      key: "budget",
      title: "Budget Guest Houses",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 13,
        name: `Budget Nest ${i + 1}`,
        location: "Delhi",
        price: 950 + i * 5,
        rating: 3 + (i % 2),
        imgSeed: 200 + i,
      })),
    },
    {
      key: "luxury",
      title: "Luxury Guest Houses",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 25,
        name: `Luxury Stay ${i + 1}`,
        location: "Mumbai",
        price: 3000 + i * 50,
        rating: 5,
        imgSeed: 300 + i,
      })),
    },
    {
      key: "hill",
      title: "Hill View Guest Houses",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 37,
        name: `Hill View Retreat ${i + 1}`,
        location: "Manali",
        price: 2000 + i * 20,
        rating: 4 + (i % 2),
        imgSeed: 400 + i,
      })),
    },
  ];

  return (
    <>
      <style>
        {`
          .guest-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .guest-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .guest-image {
            transition: transform 0.4s ease;
          }
          .guest-card:hover .guest-image {
            transform: scale(1.1);
          }
          .book-btn {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }
          .guest-card:hover .book-btn {
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
                {displayed.map((house) => (
                  <div key={house.id} style={styles.card} className="guest-card">
                    <div style={styles.imageWrapper}>
                      <img
                        src={`https://picsum.photos/400/300?random=${house.imgSeed}`}
                        alt={house.name}
                        style={styles.image}
                        className="guest-image"
                        onError={(e) =>
                          (e.target.src = "https://via.placeholder.com/400x180?text=Guest+House")
                        }
                      />
                    </div>
                    <h3 style={styles.name}>{house.name}</h3>
                    <p style={styles.location}>{house.location}</p>
                    <p style={styles.price}>₹{house.price} / stay</p>
                    <div style={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: i < house.rating ? "#f5a623" : "#ccc" }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <BookButton
                      house={house}
                      onClick={() => {
                        setSelectedProperty(house);
                        setModalOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>
              {sec.data.length > 8 && (
                <div style={{ textAlign: "right", marginTop: "20px" }}>
                  <button
                    style={styles.toggleButton}
                    onClick={() =>
                      setShowAll((prev) => ({ ...prev, [sec.key]: !prev[sec.key] }))
                    }
                  >
                    {showAll[sec.key] ? "Show Less" : "Explore More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}

        <BookingModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          property={selectedProperty}
        />
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
  stars: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  bookNow: {
    marginTop: "auto",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GuestHouses;
