import React from "react";
import { useNavigate } from "react-router-dom";
import StepBox from "./StepBox";

const StepSuccess = () => {
  const navigate = useNavigate();
  return (
    <StepBox>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #00c6ff, #0071e3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24">
            <path d="M20.285 6.709l-11.025 11.025-5.285-5.284 1.414-1.414 3.871 3.871 9.611-9.611z" />
          </svg>
        </div>
        <div style={{ color: "#0071e3", fontWeight: 700, fontSize: "1.15rem", marginBottom: 10 }}>
          Password reset successfully!
        </div>
        <button
          style={{
            padding: "0.75rem 2rem",
            background: "linear-gradient(90deg, #0071e3, #00c6ff)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            marginTop: 8,
          }}
          onClick={() => navigate("/list-your-property/signin")}
        >
          Click here to login
        </button>
      </div>
    </StepBox>
  );
};

export default StepSuccess;