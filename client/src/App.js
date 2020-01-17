import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Chemical from "./components/Chemical";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/chemical" component={Chemical} />
          </Switch>
        </Router>
      </div>
    );
  }
}
