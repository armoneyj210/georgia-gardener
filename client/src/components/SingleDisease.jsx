import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleDisease extends Component {
  state = {
    diseases: {
      name: "",
      image: "",
      description: ""
    },
    editForm: false,
    returnHome: false
  };
  updatePage = () => {
    axios.get(`/api/disease/${this.props.match.params.diseaseId}`).then(res => {
      this.setState({ diseases: res.data });
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  editFormChange = evt => {
    const newDisease = { ...this.state.diseases };
    newDisease[evt.target.name] = evt.target.value;
    this.setState({ diseases: newDisease });
  };
  toggleEditForm = () => {
    this.setState(state => {
      return { editForm: !state.editForm };
    });
  };
  submitButtonAction = evt => {
    evt.preventDefault();
    axios
      .put(
        `/api/disease/${this.props.match.params.diseaseId}`,
        this.state.diseases
      )
      .then(res => {
        this.setState({ diseases: res.data, editForm: false });
        this.updatePage();
      });
  };
  deleteButtonAction = () => {
    axios
      .delete(`/api/disease/${this.props.match.params.diseaseId}`)
      .then(() => {
        this.setState({ returnHome: true });
      });
  };
  render() {
    return (
      <div>
        {this.state.returnHome === true ? <Redirect to="/disease" /> : null}
        <div>
          <h1>Disease</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <br />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.diseases.name}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.diseases.description}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.diseases.image}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <input type="submit" value="Save Disease" />
          </form>
        ) : (
          <div>
            <h1>{this.state.diseases.name}</h1>
            <br />
            <img src={this.state.diseases.image} alt="disease" />
            <br />
            <p>{this.state.diseases.description}</p>
          </div>
        )}
        <div>
          <button onClick={this.toggleEditForm}>Edit Disease</button>
          <button onClick={this.deleteButtonAction}>Delete Disease</button>
        </div>
      </div>
    );
  }
}
