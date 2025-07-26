import React, { useState } from "react";
import AddHotelForm from "./AddProperty/AddHotelForm";
import AddGuestHouseForm from "./AddProperty/AddGuestHouseForm";
import AddServiceApartmentForm from "./AddProperty/AddServiceApartmentForm";
import AddBanquetHallForm from "./AddProperty/AddBanquetHallForm";

const AddProperty = () => {
  const [selectedType, setSelectedType] = useState("");

  const renderForm = () => {
    switch (selectedType) {
      case "Hotel":
        return <AddHotelForm />;
      case "Guest House":
        return <AddGuestHouseForm />;
      case "Service Apartment":
        return <AddServiceApartmentForm />;
      case "Banquet Hall":
        return <AddBanquetHallForm />;
      default:
        return null;
    }
  };

  // Internal styles object
  const styles = {
    container: {
      maxWidth: "55rem", // roughly max-w-4xl = 1024px but prettier scaled a little
      margin: "1.5rem auto",
      padding: "2.5rem",
      backgroundColor: "#ffffff", // white
      borderRadius: "1.25rem",
      boxShadow: "0 4px 24px rgba(44, 62, 80, 0.1)",
      color: "#1b263b",
      fontFamily:
        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: "2.25rem", // text-3xl
      fontWeight: "700",
      color: "#1565d8", // blue-700
      marginBottom: "1rem",
      textAlign: "center",
    },
    subtitle: {
      textAlign: "center",
      color: "#4b5563", // gray-600
      fontStyle: "italic",
      marginBottom: "1.5rem",
      fontSize: "1rem",
    },
    label: {
      display: "block",
      fontSize: "1.125rem", // text-lg
      fontWeight: "600",
      color: "#374151", // gray-700
      marginBottom: "0.5rem",
      textAlign: "center",
    },
    select: {
      width: "100%",
      maxWidth: "10rem", // max-w-sm
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0.5rem 1rem",
      fontSize: "0.8rem",
      fontWeight: "500",
      color: "#1b263b",
      backgroundColor: "white",
      border: "1.5px solid #d1d5db", // gray-300
      borderRadius: "0.5rem",
      textAlignLast: "center",
      cursor: "pointer",
      transition: "box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out",
    },
    selectFocus: {
      outline: "none",
      borderColor: "#1565d8",
      boxShadow: "0 0 4px 2px rgba(21,101,216,0.4)",
    },
  };

  // Optional: you can handle focus styles with state or skip for now

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add a New Place</h2>

      <p style={styles.subtitle}>
        “Make your space someone’s next stay. Add your place today.”
      </p>

      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="propertyTypeSelect" style={styles.label}>
          Select your type of place
        </label>
        <select
          id="propertyTypeSelect"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={styles.select}
        >
          <option value="">- Choose option -</option>
          <option value="Hotel">Hotel</option>
          <option value="Guest House">Guest House</option>
          <option value="Service Apartment">Service Apartment</option>
          <option value="Banquet Hall">Banquet Hall</option>
        </select>
      </div>

      {renderForm()}
    </div>
  );
};

export default AddProperty;
