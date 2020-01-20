import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/chemical">Chemical</Link>

          <Link to="/plant">Plants</Link>

          <Link to="/disease">Diseases</Link>
        </div>
      </div>
    );
  }
}
