import React, { Component } from "react";
import Logo from "../images/facebook_cover_photo_1.png";
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="home-logo">
          <a href="/">
            <img className="home-logo" src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="navbar">
          <li className="navbar-item">
            <a href="/disease">Diseases</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/plant">Plants</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/chemical">Chemicals</a>
          </li>
        </ul>
      </div>
    );
  }
}
