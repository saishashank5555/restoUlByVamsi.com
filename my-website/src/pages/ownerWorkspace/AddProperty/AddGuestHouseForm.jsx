import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DROPDOWN_OPTIONS = {
  guestHouseType: ["Entire Place", "Private Room", "Shared Room"],
  guestHouseFurnishing: ["Furnished", "Unfurnished", "Semi-Furnished"],
  guestHouseSafety: ["Yes", "No"],
  guestHouseParking: ["Available", "Not Available"],
  breakfastFree: ["YES", "NO"],
  guestHouseStatus: ["Available", "Unavailable", "Under Maintenance"],
};

const initialState = {
  name: "",
  location: "",
  pricePerNight: "",
  description: "",
  guestHouseType: "",
  guestHouseFurnishing: "",
  guestHouseSafety: "",
  guestHouseParking: "",
  maxGuests: "",
  breakfastFree: "",
  guestHouseStatus: "",
  hotelId: "", // or propertyId if applicable
  // Add other fields as needed
  guestHouseAmenities: [], // Multiple select
};

export default function AddGuestHouseForm() {
  const [guestHouseDetails, setGuestHouseDetails] = useState(initialState);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestHouseDetails((prev) => ({ ...prev, [name]: value }));
  };

  // For multi-select amenities (optional)
  const handleMultiSelectChange = (e) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setGuestHouseDetails((prev) => ({ ...prev, guestHouseAmenities: values }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example
    if (
      !guestHouseDetails.name ||
      !guestHouseDetails.location ||
      !guestHouseDetails.pricePerNight
    ) {
      toast.error("Please fill out Name, Location, and Price per Night.");
      return;
    }

    if (images.length === 0) {
      toast.error("Please upload at least one image (up to 5).");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("guestHouseDetails", JSON.stringify(guestHouseDetails));
      images.forEach((img) => formData.append("images", img));

      // Replace this URL with your actual backend endpoint
      const response = await fetch(
        "http://localhost:8082/guestHouses/addGuestHouse",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Guest House added successfully!");
        setGuestHouseDetails(initialState);
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
      background: "linear-gradient(90deg, #1b263b 10%, #1565d8 90%)",
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
              Guest House Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={guestHouseDetails.name}
              onChange={handleChange}
              placeholder="Guest House Paradise"
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
              value={guestHouseDetails.location}
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
              value={guestHouseDetails.pricePerNight}
              onChange={handleChange}
              placeholder="1500"
              min="0"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={guestHouseDetails.description}
              onChange={handleChange}
              placeholder="Describe the guest house"
              style={styles.textarea}
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="guestHouseType">
              Type
            </label>
            <select
              id="guestHouseType"
              name="guestHouseType"
              value={guestHouseDetails.guestHouseType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Type --</option>
              {DROPDOWN_OPTIONS.guestHouseType.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="guestHouseFurnishing">
              Furnishing
            </label>
            <select
              id="guestHouseFurnishing"
              name="guestHouseFurnishing"
              value={guestHouseDetails.guestHouseFurnishing}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Furnishing --</option>
              {DROPDOWN_OPTIONS.guestHouseFurnishing.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="guestHouseSafety">
              Safety Features
            </label>
            <select
              id="guestHouseSafety"
              name="guestHouseSafety"
              value={guestHouseDetails.guestHouseSafety}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Safety --</option>
              {DROPDOWN_OPTIONS.guestHouseSafety.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="guestHouseParking">
              Parking
            </label>
            <select
              id="guestHouseParking"
              name="guestHouseParking"
              value={guestHouseDetails.guestHouseParking}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Parking --</option>
              {DROPDOWN_OPTIONS.guestHouseParking.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="maxGuests">
              Max Guests
            </label>
            <input
              id="maxGuests"
              type="number"
              min="1"
              name="maxGuests"
              value={guestHouseDetails.maxGuests}
              onChange={handleChange}
              placeholder="4"
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label} htmlFor="breakfastFree">
              Breakfast Free
            </label>
            <select
              id="breakfastFree"
              name="breakfastFree"
              value={guestHouseDetails.breakfastFree}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.breakfastFree.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label} htmlFor="guestHouseStatus">
              Status
            </label>
            <select
              id="guestHouseStatus"
              name="guestHouseStatus"
              value={guestHouseDetails.guestHouseStatus}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Status --</option>
              {DROPDOWN_OPTIONS.guestHouseStatus.map((opt) => (
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
              value={guestHouseDetails.hotelId}
              onChange={handleChange}
              placeholder="UUID or ID"
              style={styles.input}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div style={{ marginTop: 20 }}>
          <label style={styles.label} htmlFor="images">
            Guest House Images (max 5) *
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
                alt={`GuestHouse Preview ${idx + 1}`}
                style={styles.previewImage}
              />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit Guest House
        </button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
