import React, { Component } from "react";

import './style.css';

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className='titleH1'>Fight Book!</h1>
          <p className='m-4 bodyP'>
            Fight Book is a web application to keep records of amateur boxers in
            a digital way. Giving these boxers a tool to follow their career
            progress and expose themselves to a boxing community, where they can
            find fans or boxing promoters looking for talent. For their trainer,
            it provides functions to help them manage the careers of their
            boxers. All this within a social environment where boxers can
            exchange messages with their trainers and fans.
          </p>
          <hr className="my-4" />
          <p className='m-4 bodyP'>
            To be able to use this application you must create a profile with
            one of the following role.
          </p>
          <ul className='m-4'>
            <li className='listLine'>
              <b>User</b> = A boxing fan who wants to follow his favorite boxers.
            </li>
            <li className='listLine'>
              <b>Boxer</b> = A boxer who wants to keep his records, and find fans to
              follow him.
            </li>
            <li className='listLine'>
              <b>Couch</b> = A coach who wants tools to manage the careers of his
              boxers.
            </li>
            <li className='listLine'>
              <b>Commission Officer</b> = An official authorized to create events and
              update boxers records.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
