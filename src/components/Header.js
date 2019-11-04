import React from 'react';
import logo from '../assets/image/logo.jpg';
import search from '../assets/image/search-icon.jpg';
import banner from '../assets/image/banner.jpg';

export default function Header() {
  return (
    <React.Fragment>
      <div className="main-header">
        <img src={logo} className="logo" alt="logo" />
        <ul>
          <li className="active">
            <span>HOME</span>
          </li>
          <li>
            <span>OUR STORY</span>
          </li>
          <li>
            <span>PROJECTS</span>
          </li>
          <li>
            <span>SHOP</span>
          </li>
          <li>
            <span>CSA</span>
          </li>
          <li>
            <span>DONATE</span>
          </li>
          <li>
            <span>CONTACT</span>
          </li>
          <li>
            <img src={search} alt="search-icon" />
          </li>
        </ul>
      </div>
      <img src={banner} alt="banner" className="banner" />
    </React.Fragment>
  );
}
