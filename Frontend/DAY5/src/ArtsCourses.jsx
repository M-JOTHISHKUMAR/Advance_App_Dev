// ArtsCourses.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtsCourses.css";

const ArtsCourses = ({ courses, applyForCourse }) => {
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
      <div className="arts-container">
        <h2 className="arts-header">Arts College Courses</h2>
        <table className="arts-table">
          <thead>
            <tr>
              <th className="arts-degree">Degree</th>
              <th className="arts-courses">Courses</th>
              <th className="arts-seats">Available Seats</th>
              <th className="arts-apply">Apply</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="arts-degree">{course.degree}</td>
                <td className="arts-courses">{course.courses}</td>
                <td className="arts-seats">{course.seats}</td>
                <td className="arts-apply">
                  {course.seats > 0 ? (
                    <Link to="/apply">
                      <button
                        onClick={() => handleApply(course)}
                        disabled={selectedCourse === course}
                        className="arts-button"
                      >
                        Apply
                      </button>
                    </Link>
                  ) : (
                    <span className="no-seats">No seats available</span>
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

export default ArtsCourses;
