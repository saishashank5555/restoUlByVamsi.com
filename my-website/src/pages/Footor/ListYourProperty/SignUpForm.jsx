import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    placeName: "",
    description: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    image1: null,
    image2: null,
    image3: null,
    address: "",
    zipCode: "",
    state: "",
    country: "",
    mapLink: "",
    instagram: "",
    twitter: "",
    facebook: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...your validation and registration logic...
    // On successful registration:
    navigate("/list-your-property/success");
  };

  const renderInput = (type, name, placeholder, required = true) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
      style={inputStyle}
    />
  );

  const renderFileInput = (label, name) => (
    <label style={labelStyle}>
      {label}
      <input
        type="file"
        name={name}
        accept="image/*"
        onChange={handleChange}
        required
        style={fileInputStyle}
      />
    </label>
  );

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Owner Registration</h2>

        <div style={sectionStyle}>
          <h3>Basic Info</h3>
          {renderInput("text", "ownerName", "Owner Name")}
          {renderInput("text", "placeName", "Place Name")}
          <textarea
            name="description"
            placeholder="Description"
            rows={3}
            onChange={handleChange}
            required
            style={inputStyle}
          ></textarea>
          {renderInput("email", "email", "Email Address")}
          {renderInput("tel", "phone", "Phone Number")}
          {renderInput("password", "password", "Password")}
          {renderInput("password", "confirmPassword", "Confirm Password")}
        </div>

        <div style={sectionStyle}>
          <h3>Images</h3>
          {renderFileInput("Upload Image 1", "image1")}
          {renderFileInput("Upload Image 2", "image2")}
          {renderFileInput("Upload Image 3", "image3")}
        </div>

        <div style={sectionStyle}>
          <h3>Location</h3>
          {renderInput("text", "address", "Address")}
          {renderInput("text", "zipCode", "Zip Code")}
          {renderInput("text", "state", "State")}
          {renderInput("text", "country", "Country")}
          {renderInput("url", "mapLink", "Google Map Link")}
          {renderInput("url", "instagram", "Instagram Link (optional)", false)}
          {renderInput("url", "twitter", "Twitter Link (optional)", false)}
          {renderInput("url", "facebook", "Facebook Link (optional)", false)}
        </div>

        <div style={actionStyle}>
          <button type="submit" style={buttonStyle}>Register</button>
          <a href="/" style={linkStyle}>Back to Homepage</a>
        </div>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/list-your-property/signin")}
          >
            Sign In
          </span>
        </div>
      </form>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f4f4f4",
  padding: "20px",
};

const formStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "30px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const sectionStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const fileInputStyle = {
  marginTop: "5px",
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
};

const actionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default SignUpForm;
