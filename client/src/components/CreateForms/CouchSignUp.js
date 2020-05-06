import React from "react";

export default function CouchSignUp(props) {
  return (
    <div>
      <div className="form-row">
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
          <label htmlFor="inputLicNum">License Number</label>
          <input
            type="text"
            className="form-control"
            name="licNum"
            id="inputLicNum"
            onChange={props.onChangeInput}
          />
        </div>
      </div>
    </div>
  );
}
