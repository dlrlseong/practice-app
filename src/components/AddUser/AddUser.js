import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="username">Age (Years)</label>
        <input id="username" type="number" />
        <button type="sumbit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
