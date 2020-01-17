import React, { Component } from "react";
import axios from "axios";
export default class SinglePlant extends Component {
  state = {
    plants: {
      name: "",
      image: "",
      description: "",
      commonDisease: ""
    },
    editForm: false
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
  render() {
    return (
      <div>
        <div>
          <h1>Plant</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <br />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                onChange={this.editFormChange}
                value={this.state.plants.name}
              />
            </div>
            <br />
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                onChange={this.editFormChange}
                value={this.state.plants.description}
              />
            </div>
            <br />
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.plants.image}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <input type="submit" value="Save Plant" />
          </form>
        ) : (
          <div>
            <h1>{this.state.plants.name}</h1>
            <br />
            <img src={this.state.plants.image} alt="plant" />
            <br />
            <p>{this.state.plants.description}</p>
          </div>
        )}
        <br />
        <div>
          <button onClick={this.toggleEditForm}>Edit Plant</button>
        </div>
      </div>
    );
  }
}
