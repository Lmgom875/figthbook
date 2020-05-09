import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import "./style.css";

import UserSignUp from "../CreateForms/UserSignUp";
import BoxerSignUp from "../CreateForms/BoxerSignUp";
import CouchSignUp from "../CreateForms/CouchSignUp";
import ComOfiSignUp from "../CreateForms/CommOficerSignUp";

class SignUp extends Component {
  initialState = {
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
    boxerWins: 0,
    boxerLoses: 0,
    couchName: "",
    gymName: "",
    titles: "",
    licNum: "",
    redirecTo: null,
  };

  state = this.initialState;

  onChangeInput = (e) => {
    console.log("change: ", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormReset = () => {
    this.setState(() => this.initialState);
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
      boxerWins: this.state.boxerWins,
      boxerLoses: this.state.boxerLoses,
      couchName: this.state.couchName,
      gymName: this.state.gymName,
      titles: this.state.titles,
      licNum: this.state.licNum,
    };
    const res = await API.postSignup(newUser);
    console.log("desde signup react " + res);
    if (res.data._id) {
      console.log("Accound Successfully Created");
    }
    console.log("desde sign react despujes del if");
    this.handleFormReset();
    //todo cambiar a /login
    //this.props.history.push('/');
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
      <div className="container signupContainer p-4">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h1>Sign Up</h1>
          </div>
        </div>
        <form className="mt-4" onSubmit={this.onSubmit}>
          <UserSignUp onChangeInput={this.onChangeInput} />
          {this.renderSwitch(this.state.role)}
          <div className="row m-2 justify-content-center">
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
