import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    axios.get("/api/gardener").then(res => {
      this.setState({ plant: res.data });
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
  handleNewFormChange = evt => {
    const newPlant = { ...this.state.newPlant };
    newPlant[evt.target.name] = evt.target.value;
    this.setState({ newPlant });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/gardener", this.state.newPlant).then(() => {
      this.setState({
        plantForm: false,
        newPlant: {
          nmae: "",
          image: "",
          description: "",
          commonDisease: ""
        }
      });
      this.updatePage();
    });
  };
  render() {
    let plants = this.state.plant.map(plant => {
      return (
        <div className="plant-header">
          <h3>{plant.name}</h3>
          <div>
            <Link to={`/plant/${plant._id}`}>
              <img src={plant.image} alt={plant.name} />
            </Link>
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
        <h1 className="plant-header">Plants</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Plant</button>
        </div>
        <br />
        {this.state.plantForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="plant-header">
              <label htmlFor="plant-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newPlant.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="plant-header">
              <label htmlFor="plant-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newPlant.description}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="plant-header">
              <label htmlFor="plant-image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.newPlant.image}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="plant-header">
              <label htmlFor="plant-disease">Common Disease:</label>
              <input
                type="text"
                name="commonDisease"
                value={this.state.newPlant.commonDisease}
                onChange={this.handleNewFormChange}
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
