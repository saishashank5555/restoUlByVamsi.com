// src/components/BookButton.jsx
import React from "react";

const BookButton = ({ onClick }) => (
  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#007bff",
      border: "none",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "10px"
    }}
    onClick={onClick}
  >
    See Availability
  </button>
);

export default BookButton;
