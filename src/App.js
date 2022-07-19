import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/AddUser/UsersList";


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    //<React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
    //</React.Fragment>
  );
}

export default App;
