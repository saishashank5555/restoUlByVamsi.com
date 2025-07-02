import React, { useState } from 'react';
import './formStyles.css';

const Step2Images = ({ nextStep, prevStep, handleImageUpload, values }) => {
  const [previews, setPreviews] = useState([]);

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviews(files.map(file => URL.createObjectURL(file)));
    handleImageUpload(files);
  };

  return (
    <div className="form-container">
      <h2>Upload Property Images</h2>

      <input type="file" multiple accept="image/*" onChange={handleFilesChange} />
      <div className="image-preview">
        {previews.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index}`} />
        ))}
      </div>

      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step2Images;
