import React from "react";
import Sidebar from "./Sidebar";

const OwnerLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-md">
        <Sidebar open={true} />
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default OwnerLayout;