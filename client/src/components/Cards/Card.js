import React from "react";
import './style.css';

function Card(props) {
  return (
    <div>
      <div className="card card-all">
        <img
          className="card-img-top"
          src='https://randomuser.me/api/portraits/med/men/69.jpg'
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Julian Vidal</h5>
          <p className="card-text">
            Division: Heavyweight
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Wins: 34</li>
          <li className="list-group-item">Lose: 5</li>
          <li className="list-group-item">KO: 30</li>
          <li className="list-group-item">Total: 39</li>
        </ul>
        {/* <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div> */}
      </div>
    </div>
  );
}

export default Card;
