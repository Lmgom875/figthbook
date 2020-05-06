import React from "react";

export default function TonightFightLayout() {
  return (
    <div className="row justify-conter-around align-items-center p-4">
      <div className="col-md-3">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img" alt="Card cap" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Boxer Name</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1 align-self-center">
          <h2>VS</h2>
      </div>
      <div className="col-md-3">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img" alt="Card cap" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Boxer Name</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
          <form>
          <div className="form-row justify-content-around">
              <div className="form-group col-md-6">
              <label htmlFor="inputDivision">Winner</label>

                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  id="inputEventName"
                  //onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="inputDivision">Desicion</label>

                <input
                  type="text"
                  className="form-control"
                  name="eventDate"
                  id="inputEventDate"
                  //onChange={this.onChangeDate}
                />
              </div>
              
              <div className="form-group col-md-6">
              <input class="btn btn-primary btn-block" type="submit" value="Submit"/>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
}
