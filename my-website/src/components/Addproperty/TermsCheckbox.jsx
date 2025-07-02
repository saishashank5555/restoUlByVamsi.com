import React from "react";

const TermsCheckbox = ({ agreed, onToggle }) => {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        id="terms"
        checked={agreed}
        onChange={onToggle}
        className="mt-1"
      />
      <label htmlFor="terms">
        I agree to the{" "}
        <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
          Terms and Conditions
        </span>{" "}
        for listing my property.
      </label>
    </div>
  );
};

export default TermsCheckbox;
