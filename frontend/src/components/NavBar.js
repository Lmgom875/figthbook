import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fight Book
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <Link className= 'nav-link' to= '/login'>Log In</Link>
                
              </li>
              <li class="nav-item">
              <Link className= 'nav-link' to= '/signup'>Sign Up</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
