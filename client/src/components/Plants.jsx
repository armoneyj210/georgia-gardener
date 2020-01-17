import React, { Component } from "react";
import axios from "axios";
export default class Plants extends Component {
  state = {
    plant: [],
    newPlant: {
      name: "",
      image: "",
      description: "",
      commonDisease: ""
    },
    plantForm: false
  };

  render() {
    return <div></div>;
  }
}
