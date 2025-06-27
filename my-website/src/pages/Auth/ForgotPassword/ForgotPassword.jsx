import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import StepEnterEmail from "./StepEnterEmail";
import StepEnterOtp from "./StepEnterOtp";
import StepResetPassword from "./StepResetPassword";
import StepSuccess from "./StepSuccess";

const ForgotPassword = () => {
  // Shared state for all steps
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("123456"); // Simulated OTP
  const [enteredOtp, setEnteredOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Handlers for navigation
  const goToOtp = () => navigate("/forgot-password/otp");
  const goToReset = () => navigate("/forgot-password/reset");
  const goToSuccess = () => navigate("/forgot-password/success");
  const goToEmail = () => navigate("/forgot-password/email");

  // Simulate sending OTP
  const handleSendOtp = () => {
    setOtp("123456");
    setTimer(30);
    setCanResend(false);
    setEnteredOtp("");
    setError("");
    goToOtp();
  };

  // Simulate verifying OTP
  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      setError("");
      goToReset();
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  // Simulate resetting password
  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill both password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    goToSuccess();
  };

  // Default route: redirect to email step
  React.useEffect(() => {
    if (
      location.pathname === "/forgot-password" ||
      location.pathname === "/forgot-password/"
    ) {
      goToEmail();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="email"
        element={
          <StepEnterEmail
            email={email}
            setEmail={setEmail}
            onNext={handleSendOtp}
            error={error}
            setError={setError}
            onBack={() => navigate("/list-your-property/signin")}
          />
        }
      />
      <Route
        path="otp"
        element={
          <StepEnterOtp
            email={email}
            enteredOtp={enteredOtp}
            setEnteredOtp={setEnteredOtp}
            onNext={handleVerifyOtp}
            error={error}
            setError={setError}
            timer={timer}
            setTimer={setTimer}
            canResend={canResend}
            setCanResend={setCanResend}
            resendOtp={handleSendOtp}
            goBack={goToEmail}
          />
        }
      />
      <Route
        path="reset"
        element={
          <StepResetPassword
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onNext={handleResetPassword}
            error={error}
            setError={setError}
            onBack={() => navigate("/forgot-password/otp")}
          />
        }
      />
      <Route path="success" element={<StepSuccess />} />
    </Routes>
  );
};

export default ForgotPassword;