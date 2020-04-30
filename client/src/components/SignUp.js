import React, { Component } from "react";
import API from "../utils/API";

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
    zip: ""
  };

  onChangeInput = (e) => {
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
      zip: this.state.zip
    };
    console.log(newUser);
    const res = await API.postUser(newUser);
    console.log(res);
  };

  render() {
    return (
      <div className="container p-4">
        <form className="mt-4" onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFirstName4">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="inputFirstName4"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputLastName4">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="inputLastName4"
                onChange={this.onChangeInput}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputUserName4">User Name</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                id="inputuserName4"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="inputPassword4"
                onChange={this.onChangeInput}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputPhoneNumber4">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                id="inputphoneNumber4"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputemail4">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="inputemail4"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputRole">Role</label>
              <select
                id="inputRole"
                className="form-control"
                name="role"
                onChange={this.onChangeInput}
              >
                <option value="User">Fan</option>
                <option value="Boxer">Boxer</option>
                <option value="Couch">Couch</option>
                <option value="ComOfi">Comm Officer</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name= "address"
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input 
              type="text" 
              className="form-control" 
              id="inputCity"
              name="city"
              onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select 
              id="inputState" 
              className="form-control"
              name= "state"
              onChange={this.onChangeInput}
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input 
              type="text" 
              className="form-control" 
              id="inputZip"
              name= "zip" 
              onChange={this.onChangeInput}
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
