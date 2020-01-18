import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/chemical">Chemical</Link>
          </div>
          <div>
            <Link to="/plant">Plants</Link>
          </div>
          <div>
            <Link to="/disease">Diseases</Link>
          </div>
        </Router>
      </div>
    );
  }
}
