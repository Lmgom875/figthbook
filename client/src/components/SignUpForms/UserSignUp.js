import React from "react";

export default function UserSignUp (props){


    return (
      <div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName4">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="inputFirstName4"
              onChange={props.onChangeInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName4">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="inputLastName4"
              onChange={props.onChangeInput}
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
              onChange={props.onChangeInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="inputPassword4"
              onChange={props.onChangeInput}
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
              onChange={props.onChangeInput}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputemail4">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="inputemail4"
              onChange={props.onChangeInput}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputRole">Role</label>
            <select
              id="inputRole"
              className="form-control"
              name="role"
              onChange={props.onChangeInput}
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
            name="address"
            onChange={props.onChangeInput}
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
              onChange={props.onChangeInput}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              name="state"
              onChange={props.onChangeInput}
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
              onChange={props.onChangeInput}
            />
          </div>
        </div>
      </div>
    );

    }