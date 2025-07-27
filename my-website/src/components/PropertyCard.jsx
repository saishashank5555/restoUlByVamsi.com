import React, { useState } from "react";
import BookButton from "./BookButton";
import BookingModal from "./BookingModal";

function PropertyCard({ property }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="property-card" style={cardStyle}>
      <h3>{property.name}</h3>
      <p>{property.location}</p>

      <BookButton onClick={() => setShowModal(true)} />
      
      <BookingModal
        open={showModal}
        onClose={() => setShowModal(false)}
        property={property}
      />
    </div>
  );
}

const cardStyle = {
  border: "1px solid #eee",
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

export default PropertyCard;
