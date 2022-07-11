import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState();

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={changeUsernameHandler}/>
        <label htmlFor="username">Age (Years)</label>
        <input id="username" type="number" onChange={changeAgeHandler}/>
        <Button type="sumbit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
