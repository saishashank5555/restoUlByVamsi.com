// src/pages/ownerWorkspace/DashboardLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OwnerNavbar from "../../components/owner/OwnerNavbar";
import Sidebar from "../../components/owner/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const layout = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  };

  const main = {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  };

  const content = {
    flex: 1,
    padding: "1rem",
    overflowY: "auto",
    backgroundColor: "#f4f4f4",
  };

  return (
    <div style={layout}>
      <OwnerNavbar onMenuClick={() => setSidebarOpen((open) => !open)} />
      <div style={main}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div style={content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
