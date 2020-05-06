import React from "react";

export default function CreateFight(props) {
  return (
    <div>
      <div className="row justify-content-center p-4">
        <div className="col-md-4">
          <h4>Event Name</h4>
          {props.clickedEvent[0].eventName}
        </div>
        <div className="col-md-4">
          <h4>Event Date</h4>
          {props.clickedEvent[0].eventDate}
        </div>
        <div className="col-md-4">
          <h4>Event Address</h4>
          {props.clickedEvent[0].address}
          <br />
          {props.clickedEvent[0].city + " " + props.clickedEvent[0].state}
        </div>
      </div>
      <div className="form-row justify-content-around p-2">
        <div className="form-group col-md-4">
          <label htmlFor="inputDivision">Division</label>
          <select
            id="inputDivision"
            className="form-control"
            name="division"
            onChange={props.onChangeDivition}
          >
            <option value="Heavyweight">Heavyweight</option>
            <option value="Light heavyweight">Light heavyweight</option>
            <option value="Middleweight">Middleweight</option>
            <option value="Light middleweight">Light middleweight</option>
            <option value="Welterweight">Welterweight</option>
            <option value="Light welterweight">Light welterweight</option>
            <option value="Lightweight">Lightweight</option>
            <option value="Featherweight">Featherweight</option>
            <option value="Bantamweight">Bantamweight</option>
            <option value="Light bantamweight">Light bantamweight</option>
            <option value="Flyweight">Flyweight</option>
            <option value="Light flyweight">Light flyweight</option>
            <option value="Pinweight">Pinweight</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputRedCornerName">Red Corner</label>
          <select
            id="inputRedCornerName"
            className="form-control"
            name="fighter1"
            onChange={props.onChangeInput}
          >
            <option value=""></option>

            {props.selectUsers.map((selectUser) => (
              <option 
              value={selectUser._id}
              key= {selectUser._id}
              >
                {selectUser.firstName + " " + selectUser.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputBlueCornerName">Blue Corner</label>
          <select
            id="inputBlueCornerName"
            className="form-control"
            name="fighter2"
            onChange={props.onChangeInput}
          >
            <option value=""></option>
            {props.selectUsers.map((selectUser) => (
              <option 
              value={selectUser._id}
              key= {selectUser._id}
              >
                {selectUser.firstName + " " + selectUser.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={props.onSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
