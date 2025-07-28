import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BookingSuccess from "../../components/SeeAvailability/BookingSuccess";
import Carousel from "../../components/Carousel";

const BookingPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = state?.hotel;

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (!checkIn || !checkOut || !guests || !roomType) {
      return setError("Please fill all fields.");
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      return setError("Check-out date must be after check-in.");
    }
    setError("");
    setConfirmed(true);
  };

  // Example suggested hotels array (replace with your own logic/data)
  const suggestedHotels = [
    {
      image: "https://picsum.photos/400/300?random=101",
      name: "Cozy Retreat",
      location: "Downtown",
      price: 1200,
    },
    {
      image: "https://picsum.photos/400/300?random=102",
      name: "Urban Oasis",
      location: "City Center",
      price: 1500,
    },
    {
      image: "https://picsum.photos/400/300?random=103",
      name: "Seaside Escape",
      location: "Beachside",
      price: 1800,
    },
  ];

  if (!hotel) {
    return (
      <div className="booking-bg">
        <div className="booking-center">
          <p style={{ color: "#e53e3e", fontSize: "1.2rem" }}>
            Hotel not found. Please return to hotel list.
          </p>
          <button onClick={() => navigate("/hotels")} className="booking-link">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return confirmed ? (
    <BookingSuccess booking={{ property: hotel, checkIn, checkOut, guests }} />
  ) : (
    <>
      <style>
        {`
        .booking-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 8px;
        }
        .booking-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.08);
          max-width: 1100px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 32px;
        }
        @media (min-width: 900px) {
          .booking-card {
            flex-direction: row;
            gap: 48px;
            padding: 40px;
          }
          .booking-left-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 18px;
            min-width: 0;
          }
          .booking-form-wrap {
            flex: 1;
          }
        }
        @media (max-width: 899px) {
          .booking-left-col {
            width: 100%;
          }
        }
        .booking-img-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 260px;
          min-width: 0;
        }
        .booking-img {
          width: 100%;
          max-width: 400px;
          height: 260px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          border: 1px solid #e5e7eb;
        }
        .booking-form-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .booking-title {
          font-size: 2.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }
        .booking-location {
          color: #64748b;
          margin-bottom: 4px;
        }
        .booking-price {
          font-size: 1.1rem;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .booking-desc {
          color: #475569;
          margin-bottom: 18px;
          font-size: 1rem;
        }
        .booking-form-group {
          margin-bottom: 32px;
        }
        .booking-label {
          display: block;
          font-size: 0.97rem;
          font-weight: 500;
          color: #334155;
          margin-bottom: 5px;
        }
        .booking-input {
          width: 100%;
          padding: 9px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          transition: border 0.2s;
          z-index: 2;
          position: relative;
        }
        .booking-input:focus {
          border: 1.5px solid #2563eb;
        }
        .booking-error {
          color: #e53e3e;
          font-size: 0.97rem;
          margin-bottom: 8px;
        }
        .booking-btn {
          width: 100%;
          background: linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%);
          color: #fff;
          padding: 12px 0;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
        }
        .booking-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 100%);
        }
        .booking-link {
          color: #2563eb;
          background: none;
          border: none;
          font-size: 1rem;
          text-decoration: underline;
          cursor: pointer;
          margin-top: 12px;
        }
        .booking-back-btn {
          width: 100%;
          background: linear-gradient(90deg, #f472b6 0%, #6366f1 100%);
          color: #fff;
          padding: 10px 0;
          border: none;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 14px;
          box-shadow: 0 2px 8px rgba(99,102,241,0.08);
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .booking-back-btn:hover {
          background: linear-gradient(90deg, #6366f1 0%, #f472b6 100%);
          transform: translateY(-2px) scale(1.03);
        }
        .booking-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .booking-amenities {
          margin-top: 18px;
        }
        .booking-amenities-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #334155;
        }
        .booking-amenities-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 16px;
          font-size: 0.97rem;
          color: #64748b;
          padding-left: 0;
          margin: 0;
          list-style: none;
        }
        @media (min-width: 600px) {
          .booking-amenities-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .booking-map-section {
          margin: 28px 0 0 0;
        }
        .booking-map-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #334155;
        }
        .booking-map-embed {
          width: 100%;
          height: 260px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
        }
        .booking-map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        `}
      </style>
      <div className="booking-bg">
        <div className="booking-card">
          {/* LEFT COLUMN: Image + Map */}
          <div className="booking-left-col">
            <div className="booking-img-wrap" style={{ height: "260px", minWidth: 0 }}>
              {hotel.images?.length > 1 ? (
                <Carousel images={hotel.images} />
              ) : (
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="booking-img"
                />
              )}
            </div>
            <div className="booking-map-section" style={{ width: "100%", margin: "18px 0" }}>
              <div className="booking-map-title">Location</div>
              <div className="booking-map-embed">
                <iframe
                  title="Hotel Location"
                  className="booking-map-iframe"
                  frameBorder="0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    hotel.location
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Hotel Details & Booking Form */}
          <div className="booking-form-wrap">
            <h2 className="booking-title">{hotel.name}</h2>
            <p className="booking-location">{hotel.location}</p>
            <p className="booking-price">₹{hotel.price} per stay</p>
            <p className="booking-desc">
              This beautiful stay offers comfort, convenience, and elegance — perfect for a weekend getaway or business trip. Fully furnished, centrally located, and highly rated by guests.
            </p>
            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", margin: "8px 0 16px 0" }}>
              <span style={{ color: "#fbbf24", fontSize: "1.2rem" }}>★★★★☆</span>
              <span style={{ fontSize: "0.95rem", marginLeft: 8, color: "#64748b" }}>(4.2 - 120 reviews)</span>
            </div>
            {/* Amenities */}
            <div className="booking-amenities">
              <div className="booking-amenities-title">Amenities</div>
              <ul className="booking-amenities-list">
                {(hotel.amenities || []).map((amenity, idx) => (
                  <li key={idx}>✔ {amenity}</li>
                ))}
              </ul>
            </div>
            {/* Booking Form */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleConfirm();
              }}
              style={{ marginTop: 18 }}
            >
              <div className="booking-form-group">
                <label className="booking-label">Check-in Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="booking-input"
                />
              </div>
              <div className="booking-form-group">
                <label className="booking-label">Check-out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="booking-input"
                />
              </div>
              <div className="booking-form-group">
                <label className="booking-label">Number of Guests</label>
                <input
                  type="number"
                  min={1}
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  className="booking-input"
                />
              </div>
              <div className="booking-form-group" style={{ marginBottom: 20 }}>
                <label className="booking-label">Room Type</label>
                <select
                  className="booking-input"
                  value={roomType}
                  onChange={e => setRoomType(e.target.value)}
                >
                  <option value="">Select Room Type</option>
                  <option value="AC Room">AC Room</option>
                  <option value="Non-AC Room">Non-AC Room</option>
                  <option value="Suite">Suite</option>
                  <option value="Deluxe">Deluxe</option>
                </select>
              </div>
              {error && <div className="booking-error">{error}</div>}
              <button type="submit" className="booking-btn">
                Confirm Booking
              </button>
              <button
                type="button"
                className="booking-back-btn"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
