import React, { Component } from "react";
import API from "../../utils/API";

import UserSignUp from "./UserSignUp";
import BoxerSignUp from "./BoxerSignUp";
import CouchSignUp from "./CouchSignUp";
import ComOfiSignUp from "./CommOficerSignUp";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    phoneNumber: "",
    email: "",
    role: "user",
    address: "",
    city: "",
    state: "",
    zip: "",
    division: "",
    boxerHeight: "",
    boxerReach: "",
    couchName: "",
    gymName: "",
    titles: "",
    licNum: "",
  };

  onChangeInput = (e) => {
    console.log("change: ", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      role: this.state.role,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      division: this.state.division,
      boxerHeight: this.state.boxerHeight,
      boxerReach: this.state.boxerReach,
      couchName: this.state.couchName,
      gymName: this.state.gymName,
      titles: this.state.titles,
      licNum: this.state.licNum,
    };
    console.log(newUser);
    const res = await API.postUser(newUser);
    console.log(res);
  };

  renderSwitch(param) {
    switch (param) {
      case "Boxer":
        return <BoxerSignUp onChangeInput={this.onChangeInput} />;
      //break;
      case "Couch":
        return <CouchSignUp onChangeInput={this.onChangeInput} />;
      //break;
      case "ComOfi":
        return <ComOfiSignUp onChangeInput={this.onChangeInput} />;
      //break;
      default:
        return "";
    }
  }

  render() {
    return (
      <div className="container p-4">
        <form className="mt-4" onSubmit={this.onSubmit}>
          <UserSignUp onChangeInput={this.onChangeInput} />
          {this.renderSwitch(this.state.role)}
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
