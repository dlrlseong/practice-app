import React from "react";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <card>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="username">Age (Years)</label>
      <input id="username" type="number" />
      <button type="sumbit">Add User</button>
    </form>
    </card>
  );
}

export default AddUser;
