import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {

  

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" className="navbar-logo" />
        <ul className="navbar-menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className="icons" />
        <p className="navbar-children">Children</p>
        <img src={bell_icon} alt="Notification Bell" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile-img" />
          <img src={caret_icon} alt="Dropdown Icon" className="caret-icon" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
