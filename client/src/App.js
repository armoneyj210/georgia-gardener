import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePlant from "./components/SinglePlant";
import Diseases from "./components/Diseases";
import Plants from "./components/Plants";
import Chemical from "./components/Chemical";
import SingleDisease from "./components/SingleDisease";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="navbar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/chemical" component={Chemical} />
            <Route exact path="/disease" component={Diseases} />
            <Route exact path="/plant" component={Plants} />
            <Route exact path="/plant/:plantId" component={SinglePlant} />
            <Route exact path="/disease/:diseaseId" component={SingleDisease} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
