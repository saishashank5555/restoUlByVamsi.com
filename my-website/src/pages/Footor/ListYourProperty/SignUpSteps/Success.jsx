import React from 'react';
import './formStyles.css';

const Success = ({ values }) => {
  return (
    <div className="form-container">
      <h2>Property Listed Successfully 🎉</h2>
      <p><strong>Property Name:</strong> {values.name}</p>
      <p><strong>Type:</strong> {values.type}</p>
      <p><strong>Address:</strong> {values.address}, {values.city}, {values.state}, {values.country}</p>
      <p>Thank you for listing your property with us!</p>
    </div>
  );
};

export default Success;
