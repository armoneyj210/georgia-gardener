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
  updatePage = () => {
    axios.get("/api/disease").then(res => {
      this.setState({ disease: res.data });
      console.log(this.state.disease);
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  render() {
    return <div></div>;
  }
}
