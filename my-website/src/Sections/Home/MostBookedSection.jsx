import React from 'react';
import './homeSection.css'; // Using same styles as HyderabadHotelsSection

const mostBookedHotels = [
  {
    name: "The Leela Palace New Delhi",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    reviews: 712,
    location: "Chanakyapuri, New Delhi",
    price: 25999,
  },
  {
    name: "The Oberoi Udaivilas",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    reviews: 634,
    location: "Udaipur, Rajasthan",
    price: 29999,
  },
  {
    name: "JW Marriott Mumbai Sahar",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    reviews: 488,
    location: "Andheri East, Mumbai",
    price: 17999,
  },
  {
    name: "The Ritz-Carlton Bangalore",
    image: "https://images.unsplash.com/photo-1600585154032-0c8b1a9ff99d?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    reviews: 523,
    location: "Residency Road, Bangalore",
    price: 21999,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ccc' }}>★</span>
    );
  }
  return <div className="rating-stars">{stars}</div>;
};

const MostBookedHotels = () => {
  return (
    <section className="popular-destinations-section">
      <h2 className="destination-heading">Most Booked Hotels</h2>
      <div className="destinations-list">
        {mostBookedHotels.map((hotel, index) => (
          <div className="destination-card" key={index}>
            <img
              src={hotel.image}
              alt={hotel.name}
              className="destination-img"
              onError={(e) =>
                (e.target.src =
                  'https://placehold.co/600x400?text=Image+Not+Available')
              }
            />
            <div className="destination-info">
              <div className="destination-name">{hotel.name}</div>
              <div className="destination-location">{hotel.location}</div>
              <StarRating rating={hotel.rating} />
              <div className="destination-reviews">{hotel.reviews} reviews</div>
              <div className="destination-price">
                <span className="blue-price">
                  ₹{hotel.price.toLocaleString()} / stay
                </span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostBookedHotels;
