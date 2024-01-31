import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = ({ addCourse }) => {
  const [course, setCourse] = useState({
    title: "",
    type: "",
    degree: "",
    courses: "",
    seats: 0,
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(course);
    setCourse({
      title: "",
      type: "",
      degree: "",
      courses: "",
      seats: 0,
    });
  };

  return (
    <div className="ad">
    <br/><br/><br/>
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Course Type:
          <select name="type" value={course.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="arts">Arts</option>
            <option value="engineering">Engineering</option>
          </select>
        </label>
        <label>
          Degree:
          <input type="text" name="degree" value={course.degree} onChange={handleChange} required />
        </label>
        <label>
          Courses:
          <input type="text" name="courses" value={course.courses} onChange={handleChange} required />
        </label>
        <label>
          Seats:
          <input type="number" name="seats" value={course.seats} onChange={handleChange} required />
        </label>
        <button type="submit">Add Course</button>
      </form>
    </div>
    </div>
  );
};

export default Admin;