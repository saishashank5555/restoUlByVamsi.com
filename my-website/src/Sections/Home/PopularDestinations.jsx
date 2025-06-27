import React from "react";
import "./homeSection.css";

const destinations = [
  {
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Delhi",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bangalore",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  },
];

const PopularDestinations = () => (
  <section className="popular-destinations-section no-bg">
    <h2 className="destination-heading">Popular Destinations</h2>
    <div className="destinations-list">
      {destinations.map((dest) => (
        <div className="destination-card" key={dest.name}>
          <img src={dest.image} alt={dest.name} className="destination-img" />
          <div className="destination-name">{dest.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PopularDestinations;
