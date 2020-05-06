import React, { Component } from "react";
import API from "../../utils/API";


export default class CreateEvent extends Component {
  initialState = {
    eventName: "",
    eventDate: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  state = this.initialState;

  onChangeInput = (e) => {
    console.log("change: ", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (Date) => {
    this.setState({
      eventDate: Date.target.value
    })
  }

  handleFormReset = () => {
    this.setState(() => this.initialState);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    console.log(newEvent);
    const res = await API.postEvent(newEvent);
    console.log(res);
    this.handleFormReset();
    //todo cambiar a /login
   // this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="container p-4">
          <form className= "mt-4" onSubmit={this.onSubmit}>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-3">
                <label htmlFor="inputEventName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  id="inputEventName"
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputEventDate">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="eventDate"
                  id="inputEventDate"
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="address"
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-2">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="state"
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
                  name="zip"
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
              <div className="row justify-content-center">
                  <div className="col-md-1">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
                  </div>
              </div>
          </form>
        </div>
      </div>
    );
  }
}
