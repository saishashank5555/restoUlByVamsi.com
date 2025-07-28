import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-root" style={{ position: "relative", width: "100%", height: "100%" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "14px",
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 2 : 1,
            transition: "opacity 0.7s"
          }}
        />
      ))}
      <div style={{
        position: "absolute",
        bottom: 12,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8
      }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: current === index ? "#fff" : "rgba(255,255,255,0.5)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;