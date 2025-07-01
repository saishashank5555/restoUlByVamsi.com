import React from "react";

const StepBox = ({ children }) => (
  <div
    style={{
      width: "100%",
      maxWidth: 400,
      margin: "3rem auto",
      padding: "2rem",
      borderRadius: "12px",
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      position: "relative",
    }}
  >
    {children}
  </div>
);

export default StepBox;
