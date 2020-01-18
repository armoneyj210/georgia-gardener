import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleDisease extends Component {
  state = {
    diseases: {
      name: "",
      image: "",
      disease: ""
    },
    editForm: false,
    returnHome: false
  };
  updatePage = () => {
    axios.get(`/api/disease/${this.props.match.params.diseaseId}`).then(res => {
      this.setState({ creature: res.data });
    });
  };
  render() {
    return <div></div>;
  }
}
