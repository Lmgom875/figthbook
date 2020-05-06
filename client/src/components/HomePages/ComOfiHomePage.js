import React, { Component } from "react";
import API from "../../utils/API";

import EventTable from "../Tables/EventTable/EventTable";
import CreateFight from "../CreateForms/CreateFight";
import TonightFightLayout from '../TonightFightLayout';

export default class ComOfiHomePage extends Component {
  state = {
    events: [],
    users: [],
    fights: [],
    showCreateFight: false,
    clickedEvent: "",
    selectUsers: "",
    fighter1: "",
    fighter2: "",
  };

  onClickEvent = (e) => {
    const currentEvent = this.state.events;
    const clickedEvent = currentEvent.filter(function (elem) {
      return elem._id === e;
    });
    this.setState({ clickedEvent });
    const currentState = this.state.showCreateFight;
    this.setState({ showCreateFight: !currentState });
    this.createFightRendering();
  };

  createFightRendering = () => {
    const currentState = this.state.showCreateFight;
    if (currentState === true) {  
      return (
        <CreateFight
          clickedEvent={this.state.clickedEvent}
          onChangeDivition={this.onChangeDivition}
          selectUsers={this.state.selectUsers}
          onChangeInput={this.onChangeInput}
          onSubmit={this.onSubmit}
        />
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>Choice a Event</h5>
          </div>
        </div>
      );
    }
  };

  onChangeDivition = (e) => {
    const selectDivision = e.target.value;
    const allUsers = this.state.users;
    const selectUsers = allUsers.filter(function (elem) {
      return elem.division === selectDivision;
    });
    this.setState({ selectUsers });
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getTonightFightInfo = () => {
       const figther1Info = "";
       const fighther2Info = "";


  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newFight = {
      eventID: this.state.clickedEvent[0]._id,
      fighter1ID: this.state.fighter1,
      fighter2ID: this.state.fighter2  
    };
    const res = await API.postFight(newFight);
    console.log(res);
    const fightsResp = await API.getFights();
    this.setState({ fights: fightsResp.data });
    //this.handleFormReset();
    //todo cambiar a /login
   // this.props.history.push('/');
  };

  async componentDidMount() {
    const eventsResp = await API.getEvents();
    this.setState({ events: eventsResp.data });
    const usersResp = await API.getUsers();
    this.setState({ users: usersResp.data });
    const fightsResp = await API.getFights();
    this.setState({ fights: fightsResp.data });
    const initDivision = "Heavyweight";
    const allUsers = this.state.users;
    const selectUsers = allUsers.filter(function (elem) {
      return elem.division === initDivision;
    });
    this.setState({ selectUsers });
  }

  render() {
    return (
      <div>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-12 p-4">
              <div className="row">
                <div className="col-md-4">
                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                      <h2>Events</h2>
                    </div>
                  </div>
                  <EventTable
                    events={this.state.events}
                    onClickEvent={this.onClickEvent}
                  />
                </div>
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                      <h2>Create a Fight</h2>
                    </div>
                  </div> 
                  {this.createFightRendering()}
                </div>
              </div>
            </div>

            <div className="col-md-12 p-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>Tonight Fights</h2>
                  <TonightFightLayout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
