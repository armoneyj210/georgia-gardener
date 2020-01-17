import React, { Component } from "react";

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
      this.setState({ chemical: res.data });
      console.log(this.state.chemical);
    });
  };
  componentDidMount() {
    this.updatePage();
  }

  render() {
    let diseases = this.state.disease.map(disease => {
      return (
        <div>
          {disease.image}
          <br />
          <h3>{disease.name}</h3>
          <br />
          <p>{disease.description}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Diseases</h1>
        <div>
          <button>Add New Disease</button>
        </div>
        <br />
        {this.state.diseaseForm ? (
          <form>
            <div>
              <label htmlFor="disease-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newDisease.name}
              />
            </div>
            <br />
            <div>
              <label htmlFor="disease-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newDisease.description}
              />
            </div>
            <br />
            <div>
              <label htmlFor="disease-image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.newDisease.image}
              />
            </div>
            <br />
            <input type="submit" value="Create Disease" />
          </form>
        ) : (
          diseases
        )}
      </div>
    );
  }
}
