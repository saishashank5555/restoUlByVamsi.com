import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DROPDOWN_OPTIONS = {
  apartmentType: ["Studio", "1 BHK", "2 BHK", "3 BHK", "Penthouse"],
  furnishing: ["Furnished", "Unfurnished", "Semi-Furnished"],
  parkingAvailable: ["Yes", "No"],
  petsAllowed: ["Yes", "No"],
  smokingAllowed: ["Yes", "No"],
  breakfastIncluded: ["Yes", "No"],
  apartmentStatus: ["Available", "Unavailable", "Under Maintenance"],
};

const initialState = {
  name: "",
  location: "",
  pricePerNight: "",
  description: "",
  apartmentType: "",
  furnishing: "",
  parkingAvailable: "",
  petsAllowed: "",
  smokingAllowed: "",
  maxOccupancy: "",
  numberOfRooms: "",
  breakfastIncluded: "",
  apartmentStatus: "",
  hotelId: "", // or propertyId if applicable
};

export default function AddServiceApartmentForm() {
  const [serviceApartmentDetails, setServiceApartmentDetails] = useState(initialState);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceApartmentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (
      !serviceApartmentDetails.name ||
      !serviceApartmentDetails.location ||
      !serviceApartmentDetails.pricePerNight
    ) {
      toast.error("Please fill out Name, Location, and Price per Night.");
      return;
    }
    if (images.length === 0) {
      toast.error("Please upload at least one image (max 5).");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("serviceApartmentDetails", JSON.stringify(serviceApartmentDetails));
      images.forEach((img) => formData.append("images", img));

      // Replace with your backend endpoint
      const response = await fetch(
        "http://localhost:8082/serviceApartments/addServiceApartment",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Service Apartment added successfully!");
        setServiceApartmentDetails(initialState);
        setImages([]);
        setImagePreviews([]);
      } else {
        const text = await response.text();
        toast.error("Error: " + text);
      }
    } catch (err) {
      toast.error("Network or server error while submitting form.");
      console.error(err);
    }
  };

  const styles = {
    form: {
      maxWidth: 720,
      margin: "1.5rem auto",
      padding: "1.5rem",
      borderRadius: 12,
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1b263b",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1rem",
    },
    label: {
      fontWeight: "600",
      marginBottom: "0.4rem",
      display: "block",
      color: "#1565d8",
    },
    input: {
      width: "100%",
      padding: "0.4rem 0.6rem",
      fontSize: "1rem",
      border: "1.5px solid #bbb",
      borderRadius: 6,
      backgroundColor: "#f9fafd",
      color: "#181a22",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      minHeight: 60,
      padding: "0.4rem 0.6rem",
      fontSize: "1rem",
      border: "1.5px solid #bbb",
      borderRadius: 6,
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
          <div>
            <label style={styles.label} htmlFor="name">
              Service Apartment Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={serviceApartmentDetails.name}
              onChange={handleChange}
              placeholder="Apartment Paradise"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="location">
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={serviceApartmentDetails.location}
              onChange={handleChange}
              placeholder="City, State"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="pricePerNight">
              Price per Night (₹) *
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="pricePerNight"
              value={serviceApartmentDetails.pricePerNight}
              onChange={handleChange}
              placeholder="2000"
              min="0"
              style={styles.input}
              required
            />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label style={styles.label} htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={serviceApartmentDetails.description}
              onChange={handleChange}
              placeholder="Describe the apartment"
              style={styles.textarea}
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="apartmentType">
              Apartment Type
            </label>
            <select
              id="apartmentType"
              name="apartmentType"
              value={serviceApartmentDetails.apartmentType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Type --</option>
              {DROPDOWN_OPTIONS.apartmentType.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="furnishing">
              Furnishing
            </label>
            <select
              id="furnishing"
              name="furnishing"
              value={serviceApartmentDetails.furnishing}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Furnishing --</option>
              {DROPDOWN_OPTIONS.furnishing.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="parkingAvailable">
              Parking Available
            </label>
            <select
              id="parkingAvailable"
              name="parkingAvailable"
              value={serviceApartmentDetails.parkingAvailable}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.parkingAvailable.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="petsAllowed">
              Pets Allowed
            </label>
            <select
              id="petsAllowed"
              name="petsAllowed"
              value={serviceApartmentDetails.petsAllowed}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.petsAllowed.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="smokingAllowed">
              Smoking Allowed
            </label>
            <select
              id="smokingAllowed"
              name="smokingAllowed"
              value={serviceApartmentDetails.smokingAllowed}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.smokingAllowed.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="maxOccupancy">
              Max Occupancy
            </label>
            <input
              id="maxOccupancy"
              type="number"
              min="1"
              name="maxOccupancy"
              value={serviceApartmentDetails.maxOccupancy}
              onChange={handleChange}
              placeholder="e.g., 4"
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="numberOfRooms">
              Number of Rooms
            </label>
            <input
              id="numberOfRooms"
              type="number"
              min="1"
              name="numberOfRooms"
              value={serviceApartmentDetails.numberOfRooms}
              onChange={handleChange}
              placeholder="e.g., 3"
              style={styles.input}
            />
          </div>


          <div>
            <label style={styles.label} htmlFor="apartmentStatus">
              Apartment Status
            </label>
            <select
              id="apartmentStatus"
              name="apartmentStatus"
              value={serviceApartmentDetails.apartmentStatus}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.apartmentStatus.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="hotelId">
              Property/Hotel ID (if applicable)
            </label>
            <input
              id="hotelId"
              type="text"
              name="hotelId"
              value={serviceApartmentDetails.hotelId}
              onChange={handleChange}
              placeholder="UUID or Property ID"
              style={styles.input}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div style={{ marginTop: 20 }}>
          <label style={styles.label} htmlFor="images">
            Service Apartment Images (max 5) *
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
                alt={`Service Apartment Preview ${idx + 1}`}
                style={styles.previewImage}
              />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit Service Apartment
        </button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
