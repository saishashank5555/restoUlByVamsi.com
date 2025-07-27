import React, { useEffect } from "react";

const BookButton = ({ onClick, children = "Book Now" }) => {
  useEffect(() => {
    const styleId = "book-button-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .book-btn {
          background: linear-gradient(90deg, #0071f3 0%, #005bb5 100%);
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.2s, transform 0.1s;
          margin: 0.5rem 0;
          width: 100%;
          max-width: 320px;
          display: block;
        }
        .book-btn:hover, .book-btn:focus {
          background: linear-gradient(90deg, #005bb5 0%, #0071f3 100%);
          transform: translateY(-2px) scale(1.03);
        }
        @media (max-width: 600px) {
          .book-btn {
            font-size: 1rem;
            padding: 0.6rem 1.2rem;
            max-width: 100%;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <button className="book-btn" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default BookButton;
