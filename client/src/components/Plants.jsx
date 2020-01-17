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
        <div>
          <button>Add New Plant</button>
        </div>
        <br />
        {this.state.plantForm ? (
          <form>
            <div>
              <label htmlFor="plant-name">Name:</label>
              <input type="text" name="name" value={this.state.newPlant.name} />
            </div>
            <br />
            <div>
              <label htmlFor="plant-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newPlant.description}
              />
            </div>
            <br />
            <div>
              <label htmlFor="plant-image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.newPlant.image}
              />
            </div>
            <br />
            <div>
              <label htmlFor="plant-disease">Common Disease:</label>
              <input
                type="text"
                name="commonDisease"
                value={this.state.newPlant.commonDisease}
              />
            </div>
            <br />
            <input type="submit" value="Create Plant" />
          </form>
        ) : (
          plants
        )}
      </div>
    );
  }
}
