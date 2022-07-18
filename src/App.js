import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/AddUser/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users = {[]}/>
    </div>
  );
}

export default App;
