import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySelector = () => {
  const [selectedType, setSelectedType] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedType) return alert("Please select a property type.");
    if (!agreed) return alert("You must agree to the Terms and Conditions.");

    // Navigate to specific form route
    switch (selectedType) {
      case "Hotel":
        navigate("/add-property/hotel");
        break;
      case "Guest House":
        navigate("/add-property/guest-house");
        break;
      case "Service Apartment":
        navigate("/add-property/service-apartment");
        break;
      case "Banquet Hall":
        navigate("/add-property/banquet-hall");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
          Select Your Property Type
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Choose a type of place:
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select --</option>
            <option value="Hotel">Hotel</option>
            <option value="Guest House">Guest House</option>
            <option value="Service Apartment">Service Apartment</option>
            <option value="Banquet Hall">Banquet Hall</option>
          </select>
        </div>

        <div className="flex items-start space-x-2 mb-6">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the <span className="text-blue-600 underline cursor-pointer">terms and conditions</span> for listing my property.
          </label>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropertySelector;
