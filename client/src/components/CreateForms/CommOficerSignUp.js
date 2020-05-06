import React from "react";

export default function ComOfiSignUp(props) {
  return (
    <div className= "form-row">
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
  );
}
