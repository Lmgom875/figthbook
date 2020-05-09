import React, { Component } from "react";
import "./HomePage.css";
import API from "../../utils/API";

import Jumbotron from "../Junbotron/Jumbotron";
import MainTable from "../Tables/BoxerTable/BoxerTable";
import Card from "../Cards/Card";

export default class HomePage extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await API.getUsers();
    this.setState({ users: res.data });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="container p-4 homepageContainer">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row equal">
          <div className="col-md-4">
            <Card users={this.state.users} />
          </div>
          <div className="col-md-8">
            <MainTable users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}
