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
  handleToggleNewForm = () => {
    this.setState(state => {
      return { plantForm: !state.plantForm };
    });
  };
  render() {
    let plants = this.state.plant.map(plant => {
      return (
        <div>
          <h3>{plant.name}</h3>
          <div>
            <img src={plant.image} alt={plant.name} />
          </div>
          <p>{plant.description}</p>
          <h3>Common Disease</h3>
          <ul>
            <li>{plant.commonDisease}</li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <h1>Plants</h1>
        <div></div>
      </div>
    );
  }
}
