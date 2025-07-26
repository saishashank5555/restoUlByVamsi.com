import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DROPDOWN_OPTIONS = {
  roomSize: ["Small", "Medium", "Large"],
  roomACNonAC: ["AC", "Non-AC"],
  roomType: ["SINGLE", "DOUBLE", "SUITE"],
  roomBedType: ["Single", "Queen", "King"],
  roomPetsAllowed: ["YES", "NO"],
  roomSmoking: ["YES", "NO"],
  roomBalcony: ["YES", "NO"],
  breakfastFree: ["YES", "NO"],
  roomStatus: ["Available", "Unavailable", "Maintenance"],
  roomView: ["SEA", "CITY", "GARDEN", "MOUNTAIN", "POOL"],
  cancellationPolicy: ["Non-Refundable", "Refundable", "Free Cancellation", "Partial Refund"],
  flooring: ["Tile", "Wood", "Carpet", "Marble", "Laminate"],
  roomAmenities: ["TV", "WiFi", "AC", "Mini Bar", "Safe", "Coffee Maker", "Balcony", "Desk"],
};

const initialState = {
  roomFloor: "",
  roomNumber: "",
  roomSize: "",
  roomOccupancy: "",
  roomACNonAC: "",
  roomType: "",
  roomView: "",
  roomBedType: "",
  roomBedCount: "",
  max_adults: "",
  max_children: "",
  roomAmenities: "",
  roomPetsAllowed: "",
  roomSmoking: "",
  roomCancellationPolicy: "",
  roomBalcony: "",
  roomFlooring: "",
  roomDescription: "",
  roomPrice: "",
  breakfastFree: "",
  roomStatus: "",
  hotelId: "",
};

export default function AddRoomForm() {
  const [roomDetails, setRoomDetails] = useState(initialState);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prev) => ({ ...prev, [name]: value }));
  };

   const handleMultiSelectChange = (e) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setRoomDetails((prev) => ({ ...prev, roomAmenities: values }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations:
    if (!roomDetails.roomNumber || !roomDetails.roomSize || !roomDetails.roomType) {
      toast.error("Please fill required fields: Room Number, Size, and Type");
      return;
    }
    if (images.length === 0) {
      toast.error("Please upload at least one room image (max 5).");
      return;
    }

    const formData = new FormData();
    formData.append("roomDetails", JSON.stringify(roomDetails));
  console.log(roomDetails);
  console.log(images);
  console.log(imagePreviews)

    images.forEach((img) => formData.append("images", img));

    try {
      const response = await fetch("http://localhost:8082/rooms/addRoom", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        toast.success("Room added successfully!");
        setRoomDetails(initialState);
        setImages([]);
        setImagePreviews([]);
      } else {
        const text = await response.text();
        toast.error(`Error: ${text}`);
      }
    } catch (err) {
      toast.error("Network or server error while submitting form.");
      console.error(err);
    }
  };

  // Simple inline styles (you can replace or expand with CSS/your styling solution)
  const styles = {
    form: {
      maxWidth: 820,
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
          {/* Room Floor */}
          <div>
            <label style={styles.label} htmlFor="roomFloor">
              Room Floor
            </label>
            <input
              id="roomFloor"
              type="text"
              name="roomFloor"
              value={roomDetails.roomFloor}
              onChange={handleChange}
              placeholder="e.g., 1"
              style={styles.input}
              autoComplete="off"
            />
          </div>

          {/* Room Number * */}
          <div>
            <label style={styles.label} htmlFor="roomNumber">
              Room Number *
            </label>
            <input
              id="roomNumber"
              type="text"
              name="roomNumber"
              value={roomDetails.roomNumber}
              onChange={handleChange}
              placeholder="e.g., 101"
              style={styles.input}
              autoComplete="off"
              required
            />
          </div>

          {/* Room Size * */}
          <div>
            <label style={styles.label} htmlFor="roomSize">
              Room Size *
            </label>
            <select
              id="roomSize"
              name="roomSize"
              value={roomDetails.roomSize}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">-- Select Size --</option>
              {DROPDOWN_OPTIONS.roomSize.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Room Occupancy */}
          <div>
            <label style={styles.label} htmlFor="roomOccupancy">
              Room Occupancy
            </label>
            <input
              id="roomOccupancy"
              type="number"
              min="1"
              name="roomOccupancy"
              value={roomDetails.roomOccupancy}
              onChange={handleChange}
              placeholder="e.g., 4"
              style={styles.input}
            />
          </div>

          {/* AC/Non-AC */}
          <div>
            <label style={styles.label} htmlFor="roomACNonAC">
              AC / Non-AC
            </label>
            <select
              id="roomACNonAC"
              name="roomACNonAC"
              value={roomDetails.roomACNonAC}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomACNonAC.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Room Type * */}
          <div>
            <label style={styles.label} htmlFor="roomType">
              Room Type *
            </label>
            <select
              id="roomType"
              name="roomType"
              value={roomDetails.roomType}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">-- Select Type --</option>
              {DROPDOWN_OPTIONS.roomType.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Room View */}
          <div>
            <label style={styles.label} htmlFor="roomView">
              Room View
            </label>
            <select
              id="roomView"
              name="roomView"
              value={roomDetails.roomView}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Room View --</option>
              {DROPDOWN_OPTIONS.roomView.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Bed Type */}
          <div>
            <label style={styles.label} htmlFor="roomBedType">
              Bed Type
            </label>
            <select
              id="roomBedType"
              name="roomBedType"
              value={roomDetails.roomBedType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomBedType.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Bed Count */}
          <div>
            <label style={styles.label} htmlFor="roomBedCount">
              Bed Count
            </label>
            <input
              id="roomBedCount"
              type="number"
              min="1"
              name="roomBedCount"
              value={roomDetails.roomBedCount}
              onChange={handleChange}
              placeholder="e.g., 2"
              style={styles.input}
            />
          </div>

          {/* Max Adults */}
          <div>
            <label style={styles.label} htmlFor="max_adults">
              Max Adults
            </label>
            <input
              id="max_adults"
              type="number"
              min="1"
              name="max_adults"
              value={roomDetails.max_adults}
              onChange={handleChange}
              placeholder="e.g., 2"
              style={styles.input}
            />
          </div>

          {/* Max Children */}
          <div>
            <label style={styles.label} htmlFor="max_children">
              Max Children
            </label>
            <input
              id="max_children"
              type="number"
              min="0"
              name="max_children"
              value={roomDetails.max_children}
              onChange={handleChange}
              placeholder="e.g., 2"
              style={styles.input}
            />
          </div>

          {/* Room Amenities */}
          <div>
            <label style={styles.label} htmlFor="roomAmenities">
              Room Amenities
            </label>
            <input
              id="roomAmenities"
              type="text"
              name="roomAmenities"
              value={roomDetails.roomAmenities}
              onChange={handleChange}
              placeholder="e.g., TV, WiFi"
              style={styles.input}
            />
          </div>

          {/* Pets Allowed */}
          <div>
            <label style={styles.label} htmlFor="roomPetsAllowed">
              Pets Allowed
            </label>
            <select
              id="roomPetsAllowed"
              name="roomPetsAllowed"
              value={roomDetails.roomPetsAllowed}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomPetsAllowed.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Smoking Allowed */}
          <div>
            <label style={styles.label} htmlFor="roomSmoking">
              Smoking Allowed
            </label>
            <select
              id="roomSmoking"
              name="roomSmoking"
              value={roomDetails.roomSmoking}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomSmoking.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

         {/* Cancellation Policy */}
          <div>
            <label style={styles.label} htmlFor="roomCancellationPolicy">
              Cancellation Policy
            </label>
            <select
              id="roomCancellationPolicy"
              name="roomCancellationPolicy"
              value={roomDetails.roomCancellationPolicy}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Cancellation Policy --</option>
              {DROPDOWN_OPTIONS.cancellationPolicy.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Flooring */}
          <div>
            <label style={styles.label} htmlFor="roomFlooring">
              Flooring
            </label>
            <select
              id="roomFlooring"
              name="roomFlooring"
              value={roomDetails.roomFlooring}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select Flooring --</option>
              {DROPDOWN_OPTIONS.flooring.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Room Balcony */}
          <div>
            <label style={styles.label} htmlFor="roomBalcony">
              Balcony
            </label>
            <select
              id="roomBalcony"
              name="roomBalcony"
              value={roomDetails.roomBalcony}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomBalcony.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

         

       

          {/* Room Description */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={styles.label} htmlFor="roomDescription">
              Room Description
            </label>
            <textarea
              id="roomDescription"
              name="roomDescription"
              value={roomDetails.roomDescription}
              onChange={handleChange}
              placeholder="Describe the room"
              style={styles.textarea}
            />
          </div>

          {/* Room Price */}
          <div>
            <label style={styles.label} htmlFor="roomPrice">
              Room Price (₹)
            </label>
            <input
              id="roomPrice"
              type="number"
              min="0"
              name="roomPrice"
              value={roomDetails.roomPrice}
              onChange={handleChange}
              placeholder="e.g., 2000"
              style={styles.input}
            />
          </div>

          {/* Breakfast Free */}
          <div>
            <label style={styles.label} htmlFor="breakfastFree">
              Breakfast Free
            </label>
            <select
              id="breakfastFree"
              name="breakfastFree"
              value={roomDetails.breakfastFree}
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

          {/* Room Status */}
          <div>
            <label style={styles.label} htmlFor="roomStatus">
              Room Status
            </label>
            <select
              id="roomStatus"
              name="roomStatus"
              value={roomDetails.roomStatus}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select --</option>
              {DROPDOWN_OPTIONS.roomStatus.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Hotel ID */}
          <div>
            <label style={styles.label} htmlFor="hotelId">
              Hotel ID
            </label>
            <input
              id="hotelId"
              type="text"
              name="hotelId"
              value={roomDetails.hotelId}
              onChange={handleChange}
              placeholder="e.g., UUID of hotel"
              style={styles.input}
            />
          </div>
        </div>

        {/* Images: last */}
        <div style={{ marginTop: 20 }}>
          <label style={styles.label} htmlFor="images">
            Room Images (max 5) *
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
            {imagePreviews.map((src, i) => (
              <img
                src={src}
                alt={`Room Preview ${i + 1}`}
                key={i}
                style={styles.previewImage}
              />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit Room
        </button>
      </form>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
