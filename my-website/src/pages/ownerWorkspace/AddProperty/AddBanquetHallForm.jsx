import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DROPDOWN_OPTIONS = {
  banquetType: ["Indoor", "Outdoor", "Semi-Outdoor"],
  banquetCapacity: ["50", "100", "150", "200", "250+", "500+"],
  banquetAmenities: [
    "Stage",
    "Sound System",
    "Lighting",
    "Catering",
    "Parking",
    "Decoration",
    "Projector",
    "WiFi",
  ],
  banquetStatus: ["Available", "Booked", "Under Maintenance"],
  banquetParking: ["Available", "Not Available"],
  banquetSmokingAllowed: ["YES", "NO"],
  banquetPetsAllowed: ["YES", "NO"],
};

const initialState = {
  name: "",
  location: "",
  price: "",
  description: "",
  banquetType: "",
  banquetCapacity: "",
  banquetAmenities: [], // multiple select
  banquetStatus: "",
  banquetParking: "",
  banquetSmokingAllowed: "",
  banquetPetsAllowed: "",
  banquetFlooring: "",
  banquetCancellationPolicy: "",
  banquetDescription: "",
  hotelId: "",
};

export default function AddBanquetHallForm() {
  const [banquetHallDetails, setBanquetHallDetails] = useState(initialState);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanquetHallDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (e) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) values.push(options[i].value);
    }
    setBanquetHallDetails((prev) => ({ ...prev, banquetAmenities: values }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!banquetHallDetails.name || !banquetHallDetails.location || !banquetHallDetails.price) {
      toast.error("Please fill required fields: Name, Location, and Price");
      return;
    }
    if (images.length === 0) {
      toast.error("Please upload at least one image (max 5)");
      return;
    }

    console.log("Submitting Banquet Hall Details:", banquetHallDetails);
    console.log("Number of images:", images.length);

    try {
      const formData = new FormData();
      formData.append("banquetHallDetails", JSON.stringify(banquetHallDetails));
      images.forEach((img) => formData.append("images", img));

      // Replace URL with your backend endpoint
      const response = await fetch("http://localhost:8082/banquetHalls/addBanquetHall", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Banquet Hall added successfully!");
        setBanquetHallDetails(initialState);
        setImages([]);
        setImagePreviews([]);
      } else {
        const text = await response.text();
        toast.error(`Error: ${text}`);
      }
    } catch (error) {
      toast.error("Network or server error while submitting form.");
      console.error(error);
    }
  };

  const styles = {
    form: {
      maxWidth: 750,
      margin: "2rem auto",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 24px rgba(44, 62, 80, 0.08)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1b263b",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1rem",
      alignItems: "start",
    },
    label: {
      fontWeight: 600,
      marginBottom: 6,
      display: "block",
      color: "#1565d8",
    },
    input: {
      width: "100%",
      padding: "0.4rem 0.6rem",
      fontSize: "1rem",
      borderRadius: 6,
      border: "1.5px solid #bbb",
      backgroundColor: "#f9fafd",
      color: "#181a22",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      minHeight: 60,
      padding: "0.4rem 0.6rem",
      fontSize: "1rem",
      borderRadius: 6,
      border: "1.5px solid #bbb",
      backgroundColor: "#f9fafd",
      color: "#181a22",
      resize: "vertical",
      boxSizing: "border-box",
    },
    fileInput: {
      marginTop: "0.4rem",
    },
    previewContainer: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 8,
    },
    previewImage: {
      width: 80,
      height: 60,
      objectFit: "cover",
      borderRadius: 6,
      border: "1.5px solid #1565d8",
      boxShadow: "0 1px 6px rgba(21,101,216,0.4)",
      backgroundColor: "#ddefff",
    },
    button: {
      marginTop: 20,
      width: "100%",
      padding: "0.75rem",
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#fff",
      background:
        "linear-gradient(90deg, #1b263b 10%, #1565d8 90%)",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <div style={styles.grid}>
          {/* Name */}
          <div>
            <label style={styles.label} htmlFor="name">
              Banquet Hall Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={banquetHallDetails.name}
              onChange={handleChange}
              placeholder="Banquet XYZ"
              style={styles.input}
              required
              autoComplete="off"
            />
          </div>

          {/* Location */}
          <div>
            <label style={styles.label} htmlFor="location">
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={banquetHallDetails.location}
              onChange={handleChange}
              placeholder="City, State"
              style={styles.input}
              required
              autoComplete="off"
            />
          </div>

          {/* Price */}
          <div>
            <label style={styles.label} htmlFor="price">
              Price (₹) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={banquetHallDetails.price}
              onChange={handleChange}
              placeholder="e.g., 50000"
              min="0"
              style={styles.input}
              required
            />
          </div>

          {/* Banquet Type */}
          <div>
            <label style={styles.label} htmlFor="banquetType">
              Banquet Type
            </label>
            <select
              id="banquetType"
              name="banquetType"
              value={banquetHallDetails.banquetType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Type --</option>
              {DROPDOWN_OPTIONS.banquetType.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Banquet Capacity */}
          <div>
            <label style={styles.label} htmlFor="banquetCapacity">
              Capacity (Number of Guests)
            </label>
            <select
              id="banquetCapacity"
              name="banquetCapacity"
              value={banquetHallDetails.banquetCapacity}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Capacity --</option>
              {DROPDOWN_OPTIONS.banquetCapacity.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Banquet Amenities (multiple select) */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={styles.label} htmlFor="banquetAmenities">
              Amenities (select multiple)
            </label>
            <select
              id="banquetAmenities"
              name="banquetAmenities"
              value={banquetHallDetails.banquetAmenities}
              onChange={handleMultiSelectChange}
              multiple
              size={6}
              style={{ ...styles.input, height: "auto" }}
            >
              {DROPDOWN_OPTIONS.banquetAmenities.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Banquet Status */}
          <div>
            <label style={styles.label} htmlFor="banquetStatus">
              Status
            </label>
            <select
              id="banquetStatus"
              name="banquetStatus"
              value={banquetHallDetails.banquetStatus}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Status --</option>
              {DROPDOWN_OPTIONS.banquetStatus.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Parking */}
          <div>
            <label style={styles.label} htmlFor="banquetParking">
              Parking
            </label>
            <select
              id="banquetParking"
              name="banquetParking"
              value={banquetHallDetails.banquetParking}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Parking --</option>
              {DROPDOWN_OPTIONS.banquetParking.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Smoking Allowed */}
          <div>
            <label style={styles.label} htmlFor="banquetSmokingAllowed">
              Smoking Allowed
            </label>
            <select
              id="banquetSmokingAllowed"
              name="banquetSmokingAllowed"
              value={banquetHallDetails.banquetSmokingAllowed}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.banquetSmokingAllowed.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Pets Allowed */}
          <div>
            <label style={styles.label} htmlFor="banquetPetsAllowed">
              Pets Allowed
            </label>
            <select
              id="banquetPetsAllowed"
              name="banquetPetsAllowed"
              value={banquetHallDetails.banquetPetsAllowed}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.banquetPetsAllowed.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Flooring */}
          <div>
            <label style={styles.label} htmlFor="banquetFlooring">
              Flooring
            </label>
            <input
              id="banquetFlooring"
              type="text"
              name="banquetFlooring"
              value={banquetHallDetails.banquetFlooring}
              onChange={handleChange}
              placeholder="e.g., Marble, Tile"
              style={styles.input}
            />
          </div>

          {/* Cancellation Policy */}
          <div>
            <label style={styles.label} htmlFor="banquetCancellationPolicy">
              Cancellation Policy
            </label>
            <input
              id="banquetCancellationPolicy"
              type="text"
              name="banquetCancellationPolicy"
              value={banquetHallDetails.banquetCancellationPolicy}
              onChange={handleChange}
              placeholder="e.g., Non-Refundable"
              style={styles.input}
            />
          </div>

          {/* Description */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={styles.label} htmlFor="banquetDescription">
              Description
            </label>
            <textarea
              id="banquetDescription"
              name="banquetDescription"
              value={banquetHallDetails.banquetDescription}
              onChange={handleChange}
              placeholder="Describe the banquet hall"
              style={styles.textarea}
            />
          </div>

          {/* Hotel ID */}
          <div>
            <label style={styles.label} htmlFor="hotelId">
              Hotel / Property ID (if applicable)
            </label>
            <input
              id="hotelId"
              type="text"
              name="hotelId"
              value={banquetHallDetails.hotelId}
              onChange={handleChange}
              placeholder="UUID or Property ID"
              style={styles.input}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div style={{ marginTop: 20 }}>
          <label style={styles.label} htmlFor="images">
            Banquet Hall Images (max 5) *
          </label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            style={styles.fileInput}
          />
          <div style={styles.previewContainer}>
            {imagePreviews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Banquet Hall Preview ${idx + 1}`}
                style={styles.previewImage}
              />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit Banquet Hall
        </button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
