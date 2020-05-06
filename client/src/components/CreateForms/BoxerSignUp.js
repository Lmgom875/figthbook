import React from "react";

export default function BoxerSignUp(props) {
  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputDivision">Division</label>
          <select
            id="inputDivision"
            className="form-control"
            name="division"
            onChange={props.onChangeInput}
          >
            <option value="Super heavyweight">Super heavyweight</option>
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
          <label htmlFor="inputBoxerHeight">Height</label>
          <input
            type="text"
            className="form-control"
            name="boxerHeight"
            id="inputbBoxerHeight"
            onChange={props.onChangeInput}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputBoxerReach">Reach</label>
          <input
            type="text"
            className="form-control"
            name="boxerReach"
            id="inputbBoxerReach"
            onChange={props.onChangeInput}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputCouchName">Couch</label>
          <input
            type="text"
            className="form-control"
            name="couchName"
            id="inputCouchName"
            onChange={props.onChangeInput}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputGymName">GYM</label>
          <input
            type="text"
            className="form-control"
            name="gymName"
            id="inputGymName"
            onChange={props.onChangeInput}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputTitles">Titles</label>
          <input
            type="text"
            className="form-control"
            name="titles"
            id="inputTitles"
            onChange={props.onChangeInput}
          />
        </div>
      </div>
    </div>
  );
}
