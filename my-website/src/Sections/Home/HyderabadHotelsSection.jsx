import React, { useState } from 'react';
import './homeSection.css';
import BookButton from "../../components/BookButton";
import BookingModal from "../../components/BookingModal";

const hyderabadHotels = [
  {
    name: "Taj Falaknuma Palace",
    image: "http://res.cloudinary.com/drabmyepc/image/upload/v1751115738/kctzqpos0g7nizkpaa3v.jpg",
    rating: 5,
    reviews: 524,
    location: "Falaknuma, Hyderabad",
    price: 22999,
  },
  {
    name: "ITC Kohenur",
    image: "http://res.cloudinary.com/drabmyepc/image/upload/v1751115738/kctzqpos0g7nizkpaa3v.jpg",
    rating: 5,
    reviews: 437,
    location: "HITEC City, Hyderabad",
    price: 18499,
  },
  {
    name: "Park Hyatt Hyderabad",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    reviews: 312,
    location: "Banjara Hills, Hyderabad",
    price: 16999,
  },
  {
    name: "Trident Hyderabad",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    reviews: 289,
    location: "Madhapur, Hyderabad",
    price: 13999,
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

const HyderabadHotelsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <section className="popular-destinations-section no-bg">
      <h2 className="destination-heading">Top Places in Hyderabad</h2>
      <div className="destinations-list">
        {hyderabadHotels.map((hotel, index) => (
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
                ₹{hotel.price.toLocaleString()} <span>/ stay</span>
              </div>
              <BookButton onClick={() => { setSelectedHotel(hotel); setModalOpen(true); }} />
            </div>
          </div>
        ))}
      </div>
      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        property={selectedHotel}
      />
    </section>
  );
};

export default HyderabadHotelsSection;
