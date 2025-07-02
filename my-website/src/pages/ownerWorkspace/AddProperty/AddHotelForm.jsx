import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TermsCheckbox from "../../../components/Addproperty/TermsCheckbox";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: null,
    imagePreview: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.price) {
      toast.error("Please fill all required fields");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms");
      return;
    }
    toast.success("Hotel added successfully!");
    setFormData({
      name: "",
      location: "",
      price: "",
      description: "",
      image: null,
      imagePreview: "",
    });
    setAgreed(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Hotel Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Hotel Paradise"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="City, State"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Price per Night (₹) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="2000"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the property"
          />
        </div>

        <div className="col-span-full">
          <label className="block text-gray-700 mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="mt-4 w-40 h-40 object-cover rounded-lg shadow"
            />
          )}
        </div>
      </div>

      <TermsCheckbox agreed={agreed} onToggle={() => setAgreed(!agreed)} />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg mt-4"
      >
        Submit Hotel
      </button>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </form>
  );
};

export default AddHotelForm;
