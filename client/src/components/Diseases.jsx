import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Diseases extends Component {
  state = {
    disease: [],
    newDisease: {
      name: "",
      image: "",
      description: ""
    },
    diseaseForm: false
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
      return { diseaseForm: !state.diseaseForm };
    });
  };
  handleNewFormChange = evt => {
    const newDisease = { ...this.state.newDisease };
    newDisease[evt.target.name] = evt.target.value;
    this.setState({ newDisease });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/disease", this.state.newDisease).then(() => {
      this.setState({
        diseaseForm: false,
        newDisease: {
          name: "",
          image: "",
          description: ""
        }
      });
      this.updatePage();
    });
  };
  render() {
    let diseases = this.state.disease.map(disease => {
      return (
        <div className="disease-header">
          <div className="disease-item">
            <div className="disease-list">
              <h3>{disease.name}</h3>
            </div>

            <Link to={`/disease/${disease._id}`}>
              <img
                className="disease-item"
                src={disease.image}
                alt={disease.name}
              />
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="disease-header">Diseases</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Disease</button>
        </div>
        <br />
        {this.state.diseaseForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="disease-header">
              <label htmlFor="disease-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newDisease.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="disease-header">
              <label htmlFor="disease-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newDisease.description}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="disease-header">
              <label htmlFor="disease-image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.newDisease.image}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <input
              className="add-submit"
              type="submit"
              value="Create Disease"
            />
          </form>
        ) : (
          diseases
        )}
      </div>
    );
  }
}
