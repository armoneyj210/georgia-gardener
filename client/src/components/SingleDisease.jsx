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

  toggleEditForm = () => {
    this.setState(state => {
      return { editForm: !state.editForm };
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
          <form>
            <br />
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={this.state.diseases.name} />
            </div>
            <br />
            <div>
              <label htmlFor="description">Descriptionk:</label>
              <input
                type="text"
                name="description"
                value={this.state.diseases.description}
              />
            </div>
            <br />
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.diseases.image}
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
          <button>Delete Disease</button>
        </div>
      </div>
    );
  }
}
