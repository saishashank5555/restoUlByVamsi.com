import React, { useEffect } from "react";
import StepBox from "./StepBox";
import OTPInput from "./OTPinput";

const StepEnterOtp = ({
  email,
  enteredOtp,
  setEnteredOtp,
  onNext,
  error,
  setError,
  timer,
  setTimer,
  canResend,
  setCanResend,
  resendOtp,
  goBack,
}) => {
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, setTimer, setCanResend]);

  return (
    <StepBox>
      {/* Back Arrow */}
      <button
        type="button"
        onClick={goBack}
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#0071e3",
        }}
        aria-label="Back"
      >
        ←
      </button>
      <div style={{ marginBottom: 18, textAlign: "center" }}>
        <div style={{ marginTop: 10, color: "#444", fontSize: "1.08rem" }}>
          We have sent an OTP to your email: <b>{email}</b>
        </div>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setError("");
          onNext();
        }}
      >
        <OTPInput value={enteredOtp} onChange={setEnteredOtp} />
        {error && (
          <div style={{ color: "red", marginBottom: 12, textAlign: "center" }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.85rem",
            background: "linear-gradient(90deg, #0071e3, #00c6ff)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.08rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          Verify OTP
        </button>
      </form>
      <div style={{ marginTop: 18, textAlign: "center" }}>
        <span
          style={{
            color: "#0071e3",
            cursor: "pointer",
            fontSize: "0.98rem",
            marginRight: 16,
          }}
          onClick={goBack}
        >
          Change email
        </span>
        <span style={{ color: "#888", fontSize: "0.98rem" }}>
          {canResend ? (
            <span
              style={{ color: "#0071e3", cursor: "pointer", marginLeft: 8 }}
              onClick={() => {
                resendOtp();
                setTimer(30);
                setCanResend(false);
                setEnteredOtp("");
                setError("");
              }}
            >
              Resend OTP
            </span>
          ) : (
            <>Resend OTP in {timer}s</>
          )}
        </span>
      </div>
    </StepBox>
  );
};

export default StepEnterOtp;