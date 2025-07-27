import React, { useState } from "react";

const modalStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const contentStyle = {
  background: "#fff",
  borderRadius: "8px",
  padding: "2rem",
  maxWidth: "400px",
  width: "90%",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const getNights = (checkIn, checkOut) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end - start;
  return diffTime > 0 ? diffTime / (1000 * 60 * 60 * 24) : 0;
};

function BookingModal({ open, onClose, property }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nights = getNights(formData.checkIn, formData.checkOut);
    const total = property.pricePerNight * nights;
    alert(
      `Booking confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nGuests: ${formData.guests}\nStay: ${nights} nights\nTotal: ₹${total}`
    );
    onClose();
  };

  const nights = getNights(formData.checkIn, formData.checkOut);
  const price = property?.pricePerNight || 0;

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={e => e.stopPropagation()}>
        <h2>Book {property?.name}</h2>
        <p>Location: {property?.location}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Guests"
            required
          />
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {nights > 0 && price > 0 && (
            <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
              ₹{price} × {nights} night{nights > 1 ? "s" : ""} = ₹{price * nights}
            </p>
          )}

          <button
            type="submit"
            style={{
              marginTop: "1.5rem",
              background: "#0071f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "0.7rem 2rem",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Confirm Booking
          </button>
        </form>
        <button
          style={{
            marginTop: "1rem",
            background: "none",
            color: "#0071f3",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BookingModal;
