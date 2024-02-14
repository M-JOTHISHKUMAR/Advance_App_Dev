import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li id='a' ><Link to="/" style={{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>Home</Link></li>
        <li className='dropdown' id='a' style={{marginLeft:"3cm",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>
       
          <span className="dropbtn" >Admission</span>
          <div className="dropdown-content">
            <Link to="/eng" style={{textDecoration:"none",color:"red"}}>Engineering Courses</Link>
            <Link to="/arts" style={{textDecoration:"none",color:"red"}}>Arts Courses</Link>
          </div>
        </li>
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
      <li id='a' style={{marginLeft:"7cm"}}><Link to="/about" style = {{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>About</Link></li>
      <li id='a' style={{marginLeft:"1cm"}}><Link to="/Admin"style={{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>Admin</Link></li>
      <li id='a'style={{marginLeft:"15cm"}}><Link to="/login"style={{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>Login</Link></li>
        <li id='a'style={{marginLeft:"0.75cm"}}><Link to="/Contactus" style={{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:"Lucida Calligraphy"}}>ContactUs</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
 
