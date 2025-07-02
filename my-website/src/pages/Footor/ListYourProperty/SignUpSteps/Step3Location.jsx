import React from 'react';
import './formStyles.css';

const Step3Location = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="form-container" onSubmit={continueStep}>
      <h2>Location Information</h2>

      <label>Address</label>
      <input type="text" value={values.address} onChange={handleChange('address')} required />

      <label>City</label>
      <input type="text" value={values.city} onChange={handleChange('city')} required />

      <label>State</label>
      <input type="text" value={values.state} onChange={handleChange('state')} required />

      <label>Country</label>
      <input type="text" value={values.country} onChange={handleChange('country')} required />

      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Step3Location;
