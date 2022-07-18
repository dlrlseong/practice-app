import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="sumbit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
