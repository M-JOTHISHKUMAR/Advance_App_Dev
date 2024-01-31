// ApplyForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyForm.css"
const ApplyForm = () => {
  const { title } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    percentage10: "",
    percentage12: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);
    // You can redirect the user to a confirmation page or perform other actions here
    alert("Your Application is successfully submitted");

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      percentage10: "",
      percentage12: "",
    });
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
            name="percentage10"
            value={formData.percentage10}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          12th %:
          <input
            type="text"
            name="percentage12"
            value={formData.percentage12}
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