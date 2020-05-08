import React, { Component } from "react";
import API from "../utils/API";





export default class LogIn extends Component {

state = {
  email: "",
  password: ""
}



  onChangeInput = (e) => {
    console.log("change: ", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }



    onSubmit = async (e) => {
      e.preventDefault();
      const newLogin = {
        password: this.state.password,
        email: this.state.email,
      };
      console.log(newLogin);
      const res = await API.postLogin(newLogin);
      console.log(res);
     // this.handleFormReset();
      //todo cambiar a /login
      //this.props.history.push('/');
    };

  render() {
    return (
      <div className="container p-4">
        <div className="form-row justify-content-center p-2">
          <div className="col-md-5">
            <h2>Log In</h2>
          </div>
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-5">
            <label htmlFor="inputFirstName4">User Name</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="inputFirstName4"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-5">
            <label htmlFor="inputLastName4">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="inputLastName4"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-2">
            <button 
            type="button" 
            className="btn btn-primary btn-lg btn-block"
            onClick={this.onSubmit}
            >
              Log In
            </button>
          </div>
          <div className="form-group col-md-1 d-flex align-items-center justify-content-center">
            <h5>or</h5>
          </div>
          <div className="form-group col-md-2">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
