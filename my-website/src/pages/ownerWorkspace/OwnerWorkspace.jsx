import React, { useState } from "react";
import OwnerNavbar from "../../components/owner/OwnerNavbar";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";

const OwnerWorkspace = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <OwnerNavbar onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto bg-gray-100 p-4"
          style={{
            marginLeft: isSidebarOpen ? 240 : 0, // match sidebar width
            transition: "margin-left 0.3s",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerWorkspace;
