import React from "react";

const SignUp = () => {
  return (
    <div style={{ maxWidth: 400, margin: "4rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>User Sign Up</h2>
      {/* Add your signup form fields here */}
      <form>
        <input type="text" placeholder="Full Name" style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ccc" }} />
        <input type="email" placeholder="Email Address" style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ccc" }} />
        <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ccc" }} />
        <button type="submit" style={{ width: "100%", padding: 12, background: "#0071e3", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;