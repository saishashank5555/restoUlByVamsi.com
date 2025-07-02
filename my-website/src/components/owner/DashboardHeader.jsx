import React from 'react';
import OwnerNavbar from './components/OwnerNavbar';
import Sidebar from './components/Sidebar';
import './styles/ownerLayout.css';

const OwnerDashboard = () => {
  return (
    <div className="owner-dashboard">
      <OwnerNavbar />
      <div className="owner-body">
        <Sidebar />
        <div className="owner-content">
          <h1>Welcome to Your Dashboard</h1>
          <p>Manage your listings, bookings, and more here.</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;