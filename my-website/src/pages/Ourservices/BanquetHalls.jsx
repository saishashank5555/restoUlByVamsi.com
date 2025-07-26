import React, { useState } from "react";
import BookButton from "../../components/BookButton";
import BookingModal from "../../components/BookingModal";
import Footer from "../../Sections/Home/Footer.jsx";

const BanquetHalls = () => {
  const [showAll, setShowAll] = useState({
    wedding: false,
    corporate: false,
    birthday: false,
    luxury: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const sections = [
    {
      key: "wedding",
      title: "Wedding Banquet Halls",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Royal Wedding Hall ${i + 1}`,
        location: "Jaipur",
        price: 12000 + i * 200,
        rating: 5 - (i % 2),
        imgSeed: 500 + i,
      })),
    },
    {
      key: "corporate",
      title: "Corporate Event Halls",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 13,
        name: `Executive Hall ${i + 1}`,
        location: "Bengaluru",
        price: 8000 + i * 150,
        rating: 4 + (i % 2),
        imgSeed: 600 + i,
      })),
    },
    {
      key: "birthday",
      title: "Birthday Party Halls",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 25,
        name: `Birthday Bash Hall ${i + 1}`,
        location: "Hyderabad",
        price: 5000 + i * 100,
        rating: 3 + (i % 2),
        imgSeed: 700 + i,
      })),
    },
    {
      key: "luxury",
      title: "Luxury Banquet Halls",
      data: Array.from({ length: 12 }, (_, i) => ({
        id: i + 37,
        name: `Luxury Banquet ${i + 1}`,
        location: "Delhi",
        price: 20000 + i * 500,
        rating: 5,
        imgSeed: 800 + i,
      })),
    },
  ];

  return (
    <>
      <style>
        {`
          .banquet-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .banquet-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .banquet-image {
            transition: transform 0.4s ease;
          }
          .banquet-card:hover .banquet-image {
            transform: scale(1.1);
          }
          .book-btn {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }
          .banquet-card:hover .book-btn {
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
                {displayed.map((hall) => (
                  <div key={hall.id} style={styles.card} className="banquet-card">
                    <div style={styles.imageWrapper}>
                      <img
                        src={`https://picsum.photos/400/300?random=${hall.imgSeed}`}
                        alt={hall.name}
                        style={styles.image}
                        className="banquet-image"
                        onError={(e) =>
                          (e.target.src = "https://via.placeholder.com/400x180?text=Banquet+Hall")
                        }
                      />
                    </div>
                    <h3 style={styles.name}>{hall.name}</h3>
                    <p style={styles.location}>{hall.location}</p>
                    <p style={styles.price}>₹{hall.price} / stay</p>
                    <div style={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: i < hall.rating ? "#f5a623" : "#ccc" }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <BookButton hall={hall} onClick={() => { setSelectedProperty(hall); setModalOpen(true); }} />
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
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BanquetHalls;
