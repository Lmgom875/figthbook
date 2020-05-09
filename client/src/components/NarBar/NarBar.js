import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import logo from '../image/fightbook-logo.jpg';
import textLogo from '../image/fightbookText-logo.png';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container nombre">
          <img 
          className="logo-img"
          src={logo}
          alt="logo"/>
          <Link className="navbar-brand m-1" to="/">
            <img 
            className='logoText'
            src={textLogo}
            alt='textLogo'/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/comofi">
                  Comm Officer
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/newevent">
                  Create Event
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
