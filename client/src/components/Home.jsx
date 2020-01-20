import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div>
            <h1 className="home-header">Need help with your plants?</h1>
          </div>
          <div>
            <h2 className="home-header2">Let us help you figure it out!</h2>
          </div>
          <div>
            <a href="/plant">
              <button className="home-cta">Get Started</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
