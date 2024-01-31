import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ArtsCourses from "./ArtsCourses";

import Admin from "./Admin";
import ApplyForm from "./ApplyForm";
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import HomePage from './HomePage';
import About from './About';
import ContactUs from './ContactUs';
import './App.css'; // Import your global CSS file for styling
import './About.css';
import Engineering from "./Engineering";

const App = () => {
  // State for courses
  const [artsCourses, setArtsCourses] = useState(JSON.parse(localStorage.getItem("artsCourses")) || []);
  const [engineeringCourses, setEngineeringCourses] = useState(
    JSON.parse(localStorage.getItem("engineeringCourses")) || []
  );

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("artsCourses", JSON.stringify(artsCourses));
    localStorage.setItem("engineeringCourses", JSON.stringify(engineeringCourses));
  }, [artsCourses, engineeringCourses]);

  // Function to add a course
  const addCourse = (course) => {
    const newCourses = [...(course.type === "arts" ? artsCourses : engineeringCourses), course];
    if (course.type === "arts") {
      setArtsCourses(newCourses);
    } else {
      setEngineeringCourses(newCourses);
    }
  };

  // Function to apply for a course
  const applyForCourse = (course) => {
    // Add logic to handle applying for a course
    console.log(`Applying for course: ${course.title}`);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
         
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/eng" element={<Engineering courses={engineeringCourses} applyForCourse={applyForCourse} />}  />
          <Route path="/arts" element={<ArtsCourses courses={artsCourses} applyForCourse={applyForCourse} />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/admin" element={<Admin addCourse={addCourse} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
