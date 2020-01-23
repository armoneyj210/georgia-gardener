import React, { Component } from "react";
import axios from "axios";

export default class Chemical extends Component {
  state = {
    chemical: [],
    newChemical: {
      name: "",
      description: ""
    },
    chemicalForm: false
  };

  /* Step 4
   * Use componentDidMount to retrieve any data to display
   *   Here you can make calls to your local express server
   *   or to an external API
   *   setState can be run here as well
   *   -REMINDER remember `setState` it is an async function
   */
  updatePage = () => {
    axios.get("/api/chemical").then(res => {
      this.setState({ chemical: res.data });
      console.log(this.state.chemical);
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState(state => {
      return { chemicalForm: !state.chemicalForm };
    });
  };
  handleNewFormChange = evt => {
    const newChemical = { ...this.state.newChemical };
    newChemical[evt.target.name] = evt.target.value;
    this.setState({ newChemical });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/chemical", this.state.newChemical).then(() => {
      this.setState({
        chemicalForm: false,
        newChemical: { name: "", description: "" }
      });
      this.updatePage();
    });
  };
  /* Step 5
   *  The render function manages what is shown in the browser
   *  TODO: delete the jsx returned
   *   and replace it with your own custom jsx template
   *
   */
  render() {
    let chemicals = this.state.chemical.map(chemical => {
      return (
        <div className="chemical-header">
          <div className="chem-item">
            <div className="chemical-list">
              <h3>{chemical.name}</h3>
            </div>
            <div>{chemical.description}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="chemical-header">Chemicals</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Chemical</button>
        </div>
        <br />
        {this.state.chemicalForm ? (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label className="chemical-header" htmlFor="chemical-name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={this.state.newChemical.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div>
              <label className="chemical-header" htmlFor="chemical-description">
                Description:
              </label>
              <input
                type="text"
                name="description"
                value={this.state.newChemical.description}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <input
              className="add-submit "
              type="submit"
              value="Create Chemical"
            />
          </form>
        ) : (
          chemicals
        )}
      </div>
    );
  }
}
