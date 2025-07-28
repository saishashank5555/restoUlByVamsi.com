// src/components/BookingModal.jsx
import React, { useState } from "react";

const BookingModal = ({ property, open, onClose, onConfirm }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!open || !property) return null;

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onConfirm({
        property,
        checkIn,
        checkOut,
        guests,
      });
      onClose();
    }, 1500); // Mock API call
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">{property.name}</h2>
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover rounded"
        />
        <div className="mt-4 space-y-3">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Check-in date"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Check-out date"
          />
          <input
            type="number"
            value={guests}
            min={1}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Guests"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
