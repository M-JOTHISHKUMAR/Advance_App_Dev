// ApplyForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyForm.css"
import axios from "axios";
const ApplyForm = () => {
  const { title } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    tenthpercentage: "",
    twelvethpercentage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/adddetails', formData);
      console.log("Server response:", response.data);
      alert("Your Application is successfully submitted");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        state: "",
        tenthpercentage: "",
        twelvethpercentage: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your application. Please try again later.");
    }
  };
  return (
    <div className="apply1">
    <div className="apply">
    <div>
      <h2>Application Form for {title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        <label>
          10th %:
          <input
            type="text"
            name="tenthpercentage"
            value={formData.tenthpercentage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          12th %:
          <input
            type="text"
            name="twelvethpercentage"
            value={formData.twelvethpercentagepercentage}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ApplyForm;