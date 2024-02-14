// Engineering.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Engineering.css";

const Engineering = ({ courses, applyForCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleApply = (course) => {
    if (course.seats > 0) {
      const updatedCourse = { ...course, seats: course.seats - 1 };
      setSelectedCourse(updatedCourse);
      applyForCourse(updatedCourse);
    }
  };

  return (
    <div className="names">
    <div className="engineering-container">
    <h2 className="engineering-header">Engineering College Courses </h2>

      <table className="engineering-table">
        <thead>
          <tr>
            <th className="engineering-degree">Degree</th>
            <th className="engineering-courses">Courses</th>
            <th className="engineering-seats">Available Seats</th>
            <th className="engineering-apply">Apply</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="engineering-degree">{course.degree}</td>
              <td className="engineering-courses">{course.courses}</td>
              <td className="engineering-seats">{course.seats}</td>
              <td className="engineering-apply">
                {course.seats > 0 ? (
                  <Link to="/apply">
                    <button
                      onClick={() => handleApply(course)}
                      disabled={selectedCourse === course}
                      className="engineering-button"
                    >
                      Apply
                    </button>
                  </Link>
                ) : (
                  <span>No seats available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Engineering;
