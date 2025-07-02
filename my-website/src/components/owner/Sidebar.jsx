import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const sidebarStyle = {
    width: open ? "240px" : "0",
    minWidth: open ? "240px" : "0",
    height: "100vh",
    backgroundColor: "#ffffff",
    borderRight: open ? "1px solid #ddd" : "none",
    padding: open ? "20px 10px" : "0",
    overflowY: "auto",
    boxShadow: open ? "2px 0 5px rgba(0, 0, 0, 0.05)" : "none",
    display: "flex",
    flexDirection: "column",
    gap: open ? "12px" : "0",
    transition: "all 0.3s",
    position: "relative",
    zIndex: 1001, // Make sure it's above the main content
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: "6px",
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.2s",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#0071f3",
    color: "#fff",
    fontWeight: "600",
  };

  const menuItems = [
    { label: "Dashboard", path: "/owner/dashboard" },
    { label: "Add Property", path: "/owner/add-property" },
    { label: "My Properties", path: "/owner/my-properties" },
    { label: "Bookings", path: "/owner/bookings" },
    { label: "Earnings", path: "/owner/earnings" },
    { label: "Contact Us", path: "/owner/contact-us" },
    { label: "Settings", path: "/owner/settings" },
  ];

  return (
    <nav style={sidebarStyle}>
      {open && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "#fff",
            border: "1px solid #0071f3",
            borderRadius: "50%",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#0071f3",
            zIndex: 1100, // Higher than sidebar
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          aria-label="Close sidebar"
        >
          ←
        </button>
      )}
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
