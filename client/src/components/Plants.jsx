import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Plants extends Component {
  state = {
    plant: [],
    disease: {
      name: "",
      image: "",
      description: ""
    },
    newPlant: {
      name: "",
      image: "",
      description: "",
      disease: ""
    },
    plantForm: false
  };

  updatePage = () => {
    axios.get("/api/gardener").then(res => {
      this.setState({ plant: res.data });
    });
    axios.get("/api/disease").then(res => {
      this.setState({ disease: res.data });
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
          name: "",
          image: "",
          description: "",
          disease: ""
        }
      });
    });
    this.updatePage();
  };

  render() {
    let plants = this.state.plant.map(plant => {
      return (
        <div className="plant-header ">
          <div className="plant-list">
            <div className="plant-item">
              <div>
                <h3>{plant.name}</h3>
              </div>
              <Link to={`/plant/${plant._id}`}>
                <img src={plant.image} alt={plant.name} />
              </Link>
            </div>
          </div>
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
              {/* <select name="disease" onChange={this.handleNewFormChange}>
                {this.state.disease.map(disease => (
                  <option value={disease.name}>{disease.name}</option>
                ))}
              </select> */}
            </div>
            <br />
            <input className="add-submit" type="submit" value="Create Plant" />
          </form>
        ) : (
          plants
        )}
      </div>
    );
  }
}
