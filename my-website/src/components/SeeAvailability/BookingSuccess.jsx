// src/components/BookingSuccess.jsx
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const BookingSuccess = ({ booking }) => {
  const [animationClass, setAnimationClass] = useState("pop-in");

  useEffect(() => {
    const animations = ["pop-in", "slide-in", "fade-in"];
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]);
  }, []);

  if (!booking) return null;

  const maskEmail = (email) => {
    if (!email) return "";
    const [user, domain] = email.split("@");
    if (!user || !domain) return email;
    if (user.length <= 2) return email;
    return `${user.slice(0, 2)}${"*".repeat(user.length - 2)}@${domain}`;
  };

  const downloadReceipt = () => {
    const receipt = `
------ Booking Receipt ------
Booking ID: ${booking.bookingId || "RSTO202507276543"}
Hotel: ${booking.property.name}
Check-in: ${booking.checkIn}
Check-out: ${booking.checkOut}
Guests: ${booking.guests}
Email: ${booking.email}
Thank you for booking with Resto.com!
-----------------------------
    `;
    const blob = new Blob([receipt], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Booking_Receipt_${booking.bookingId || "RSTO"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>
        {`
        .success-bg {
          position: fixed;
          inset: 0;
          background: rgba(30, 41, 59, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .success-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13), 0 1.5px 4px rgba(0,0,0,0.10);
          max-width: 430px;
          width: 100%;
          padding: 36px 28px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: pop-in 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes pop-in {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-card.slide-in {
          animation: slide-in 0.6s ease-out;
        }
        .success-card.fade-in {
          animation: fade-in 0.6s ease-in;
        }
        @keyframes slide-in {
          0% { transform: translateY(60px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .success-icon {
          font-size: 3.2rem;
          color: #22c55e;
          margin-bottom: 12px;
        }
        .success-title {
          font-size: 2rem;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 10px;
        }
        .success-hotel {
          font-size: 1.15rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 6px;
        }
        .success-details {
          color: #334155;
          margin-bottom: 2px;
        }
        .success-guests {
          color: #64748b;
          margin-bottom: 10px;
        }
        .success-info {
          font-size: 0.95rem;
          color: #475569;
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .success-id {
          font-size: 0.85rem;
          font-weight: 500;
          color: #1e3a8a;
          background: #e0e7ff;
          padding: 6px 12px;
          border-radius: 6px;
          margin-bottom: 14px;
        }
        .success-btn {
          background: linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%);
          color: #fff;
          padding: 12px 0;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          margin-top: 10px;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
        }
        .success-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 100%);
        }
        .qr-box {
          margin-top: 10px;
          padding: 10px;
          background: #f9fafb;
          border-radius: 8px;
        }
        `}
      </style>

      <div className="success-bg">
        <div className={`success-card ${animationClass}`}>
          <div className="success-icon">✔️</div>
          <div className="success-title">Booking Confirmed!</div>
          <div className="success-hotel">{booking.property.name}</div>
          <div className="success-details">
            {booking.checkIn} → {booking.checkOut}
          </div>
          <div className="success-guests">{booking.guests} Guest(s)</div>

          <div className="success-id">
            Booking ID: #{booking.bookingId || "RSTO202507276543"}
          </div>

          <div className="success-info">
            A confirmation email has been sent to <strong>{maskEmail(booking.email)}</strong>.<br />
            Thank you for booking with <strong>Resto.com</strong>!
          </div>

          <div className="qr-box">
            <QRCodeCanvas
              value={JSON.stringify({
                hotel: booking.property.name,
                id: booking.bookingId,
                checkIn: booking.checkIn,
                checkOut: booking.checkOut,
              })}
              size={120}
            />
          </div>

          <button className="success-btn" onClick={downloadReceipt}>
            Download Receipt
          </button>

          <button className="success-btn" onClick={() => window.location.href = "/"}>
            Go to Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
