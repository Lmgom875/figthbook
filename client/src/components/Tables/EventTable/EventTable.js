import React from "react";
import "../style.css";

function EventTable(props) {
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table table-hover table-resposive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.events.map((event) => (
            <tr 
            key={event._id}
            onClick={ ()=> props.onClickEvent(event._id)}
            >
              <td>{event.eventName}</td>
              <td> {event.eventDate} </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
