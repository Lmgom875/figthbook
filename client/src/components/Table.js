import React from "react";

function MainTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Division</th>
          <th scope="col">Wins</th>
          <th scope="col">Loses</th>
          <th scope="col">Resisdence</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => (
          <tr key= {user._id}>
            <td>
              <img alt="pic" src={user.thumbnail} />
            </td>
            <td>
              {user.firstName} {user.lastName}
            </td>
            <td>
                {user.division}
            </td>
            <td>
                {user.boxerWins}
            </td>
            <td>
                {user.boxerLoses}
            </td>
            <td>
                {user.city} {user.state}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MainTable;
