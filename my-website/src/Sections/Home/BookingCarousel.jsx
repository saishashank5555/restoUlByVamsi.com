import React, { useState, useEffect, useRef } from "react";
import hyderabadImg from "../../assets/hyderabad.jpg";

const slides = [
  {
    title: "Luxury Hotels",
    description: "Book luxury stays with infinity pools, spas, and stunning city views.",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Guest Houses",
    description: "Affordable and peaceful homes away from home in prime city areas.",
    img: hyderabadImg,
  },
  {
    title: "Service Apartments",
    description: "Spacious, equipped apartments for long-term comfortable stays.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Banquet Halls",
    description: "Host weddings, birthdays, and events in premium locations.",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Exclusive 20% Off",
    description: "Use code WELCOME20 to get flat 20% off on your first booking.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Festive Deals",
    description: "Book during festivals and get free upgrades and cashback.",
    img: "https://images.unsplash.com/photo-1632166613977-26db9e4d41fd?auto=format&fit=crop&w=1400&q=80",
  },
];

const BookingCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide interval
  useEffect(() => {
    // Clear any previous interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: "32px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          background: "linear-gradient(90deg, #f7f7f9 60%, #e3f0ff 100%)",
          padding: 32,
          gap: 24,
          flexWrap: isMobile ? "wrap" : "nowrap",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            textAlign: isMobile ? "center" : "left",
          }}
          aria-live="polite"
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: 10,
              color: "#232526",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {slides[current].title}
          </h2>
          <p
            style={{
              fontSize: "1.13rem",
              color: "#555",
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            {slides[current].description}
          </p>

          {/* Arrows (Desktop only) */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  background: hovered === "prev" ? "#0071c2" : "#fff",
                  color: hovered === "prev" ? "#fff" : "#0071c2",
                  border: "1.5px solid #0071c2",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
                onMouseEnter={() => setHovered("prev")}
                onMouseLeave={() => setHovered(null)}
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                style={{
                  background: hovered === "next" ? "#0071c2" : "#fff",
                  color: hovered === "next" ? "#fff" : "#0071c2",
                  border: "1.5px solid #0071c2",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
                onMouseEnter={() => setHovered("next")}
                onMouseLeave={() => setHovered(null)}
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: 1,
            width: "100%",
            maxWidth: isMobile ? "100%" : 400,
            height: isMobile ? 200 : 220,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
              transition: "all 0.4s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: current === index ? "#0071c2" : "#ccc",
              border:
                current === index
                  ? "2px solid #0071c2"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "background 0.2s",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BookingCarousel;
