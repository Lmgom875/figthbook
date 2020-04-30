import React, { Component } from "react";
import API from "../../utils/API";

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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {this.state.users.map((user) => (
                <li className="list-group-item list-group-item-action" key= {user._id}>
                  {user.firstName} {user.lastName} <br/>
                  {user.userName} <br />
                  {user.password} <br />
                  {user.phoneNumber} <br />
                  {user.email} <br />
                  {user.role} <br />
                  {user.address} {user.city} {user.state} {user.zip} 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
