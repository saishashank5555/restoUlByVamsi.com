import React from "react";

const StepBox = ({ children }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      padding: "2.5rem 2rem",
      maxWidth: 400,
      margin: "3rem auto",
      transition: "box-shadow 0.3s",
      position: "relative",
    }}
  >
    {children}
  </div>
);

export default StepBox;