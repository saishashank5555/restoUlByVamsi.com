// src/pages/ownerWorkspace/components/OwnerNavbar.jsx
import React from "react";

const OwnerNavbar = ({ onMenuClick }) => {
  const styles = {
    navbar: {
      height: "56px",
      background: "#0071f3",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 1rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    button: {
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "1.8rem",
      cursor: "pointer",
    },
    title: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
  };

  return (
    <nav style={styles.navbar}>
      <button onClick={onMenuClick} style={styles.button} aria-label="Toggle Sidebar">
        ☰
      </button>
      <span style={styles.title}>Owner Dashboard</span>
    </nav>
  );
};

export default OwnerNavbar;
