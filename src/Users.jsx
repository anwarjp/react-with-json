import { useEffect, useState } from "react";
import User from "./User";
import './User.css'
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="box">
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
