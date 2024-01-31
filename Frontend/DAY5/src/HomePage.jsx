import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import NavigationBar from './Navigation';



// HomePage component with NavigationBar
const HomePage = () => {
  return (
    <div className='background'>
    <div className='bod'>
      <NavigationBar/>
      <div className="home-container">
        <h2>Welcome to the Home Page!</h2>
      </div>
    </div>
    </div>
  );
};

export default HomePage;