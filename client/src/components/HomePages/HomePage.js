import React, { Component } from "react";
import API from "../../utils/API";

import MainTable from "../Table";

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
      <div className="container p-4">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MainTable users= {this.state.users}/>
          </div>
        </div>
      </div>
    );
  }
}
