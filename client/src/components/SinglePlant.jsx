import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class SinglePlant extends Component {
  state = {
    plants: {
      name: "",
      image: "",
      description: "",
      disease: ""
    },
    editForm: false,
    returnHome: false
  };
  componentDidMount() {
    this.updatePage();
  }
  updatePage = () => {
    axios.get(`/api/gardener/${this.props.match.params.plantId}`).then(res => {
      this.setState({ plants: res.data });
    });
  };
  toggleEditForm = () => {
    this.setState(state => {
      return { editForm: !state.editForm };
    });
  };
  editFormChange = evt => {
    const newPlant = { ...this.state.plants };
    newPlant[evt.target.name] = evt.target.value;
    this.setState({ plants: newPlant });
  };
  submitButtonAction = evt => {
    evt.preventDefault();
    axios
      .put(
        `/api/gardener/${this.props.match.params.plantId}`,
        this.state.plants
      )
      .then(res => {
        this.setState({ plants: res.data, editForm: false });
        this.updatePage();
      });
  };
  deleteButtonAction = () => {
    axios
      .delete(
        `/api/gardener/${this.props.match.params.plantId}`,
        this.state.plants
      )
      .then(() => {
        this.setState({ returnHome: true });
      });
    this.updatePage();
  };
  render() {
    return (
      <div>
        {this.state.returnHome === true ? <Redirect to="/plant" /> : null}
        <div>
          <h1 className="plant-header">Plant</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <br />
            <div>
              <label className="plant-header" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                onChange={this.editFormChange}
                value={this.state.plants.name}
              />
            </div>
            <br />
            <div>
              <label className="plant-header" htmlFor="description">
                Description:
              </label>
              <input
                type="text"
                name="description"
                onChange={this.editFormChange}
                value={this.state.plants.description}
              />
            </div>
            <br />
            <div>
              <label className="plant-header" htmlFor="image">
                Image:
              </label>
              <input
                type="text"
                name="image"
                value={this.state.plants.image}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div>
              <label className="plant-header" htmlFor="diseases">
                Diseases:
              </label>
              <input
                type="text"
                name="disease"
                value={this.state.plants.disease}
                onChange={this.editFormChange}
              />
            </div>
            <input className="add-submit" type="submit" value="Save Plant" />
          </form>
        ) : (
          <div>
            <h1 className="plant-header">{this.state.plants.name}</h1>

            <img
              className="plant-header"
              src={this.state.plants.image}
              alt="plant"
            />
            <br />
            <p className="plant-header">{this.state.plants.description}</p>
            <br />
            <h2 className="plant-header">Common Disease</h2>
            <h3 className="plant-header">{this.state.plants.disease} </h3>
          </div>
        )}
        <br />
        <div>
          <button onClick={this.toggleEditForm}>Edit Plant</button>
          <br />
          <button onClick={this.deleteButtonAction}>Delete Plant</button>
        </div>
      </div>
    );
  }
}
