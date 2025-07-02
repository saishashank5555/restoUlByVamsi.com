import React, { useState } from 'react';
import Step1BasicInfo from './Step1BasicInfo';
import Step2Images from './Step2Images';
import Step3Location from './Step3Location';
import Success from './Success';
import './formStyles.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    images: [],
    address: '',
    city: '',
    state: '',
    country: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleImageUpload = (files) => {
    setFormData({ ...formData, images: [...files] });
  };

  switch (step) {
    case 1:
      return <Step1BasicInfo nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2Images nextStep={nextStep} prevStep={prevStep} handleImageUpload={handleImageUpload} values={formData} />;
    case 3:
      return <Step3Location nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <Success values={formData} />;
    default:
      return null;
  }
};

export default MultiStepForm;
