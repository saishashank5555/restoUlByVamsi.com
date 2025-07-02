import React from 'react';
import './formStyles.css';

const Step1BasicInfo = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="form-container" onSubmit={continueStep}>
      <h2>Basic Information</h2>

      <label>Property Name</label>
      <input type="text" value={values.name} onChange={handleChange('name')} required />

      <label>Property Type</label>
      <select value={values.type} onChange={handleChange('type')} required>
        <option value="">Select</option>
        <option value="Hotel">Hotel</option>
        <option value="Guest House">Guest House</option>
        <option value="Service Apartment">Service Apartment</option>
        <option value="Banquet Hall">Banquet Hall</option>
      </select>

      <label>Description</label>
      <textarea value={values.description} onChange={handleChange('description')} required />

      <div className="form-navigation">
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default Step1BasicInfo;
