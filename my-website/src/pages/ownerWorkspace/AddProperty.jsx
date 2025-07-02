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

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 mt-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Add a New Place
      </h2>

      <p className="text-center text-gray-600 mb-6 italic">
        “Make your space someone’s next stay. Add your place today.”
      </p>

      {/* Dropdown Selector */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2 text-center">
          Select your type of place
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full max-w-sm mx-auto block border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 text-center"
        >
          <option value="">-- Choose an option --</option>
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
