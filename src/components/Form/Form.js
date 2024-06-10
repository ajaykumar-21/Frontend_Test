import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("http://34.225.132.160:8002/api", {
        email,
      });
      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Email ends with @ez.works is not allowed");
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button type="submit">Contact Me</button>
        </div>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </form>
    </>
  );
};

export default Form;
