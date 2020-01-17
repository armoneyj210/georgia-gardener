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
    newChemical[evt.targer.name] = evt.target.value;
    this.setState({ newChemical });
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
        <div>
          <h3>{chemical.name}</h3>
          <br />
          <p>{chemical.description}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Chemicals</h1>
        <div>
          <button onClick={this.handleToggleNewForm}>Add New Chemical</button>
        </div>
        {this.state.chemicalForm ? (
          <form>
            <div>
              <label htmlFor="chemical-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newChemical.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <div>
              <label htmlFor="chemical-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newChemical.description}
                onChange={this.handleNewFormChange}
              />
            </div>
          </form>
        ) : (
          chemicals
        )}
      </div>
    );
  }
}
