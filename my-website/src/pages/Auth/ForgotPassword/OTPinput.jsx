import React from "react";

const OTPInput = ({ value, onChange }) => {
  const inputs = React.useRef([]);

  const handleChange = (e, i) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    let newValue = value.substring(0, i) + val + value.substring(i + 1);
    onChange(newValue);

    if (val && i < 5) {
      inputs.current[i + 1].focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      inputs.current[i - 1].focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          ref={el => (inputs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[i] || ""}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          style={{
            width: 38,
            height: 48,
            fontSize: "1.5rem",
            textAlign: "center",
            border: "1.5px solid #0071e3",
            borderRadius: 8,
            background: "#f7faff",
            outline: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;