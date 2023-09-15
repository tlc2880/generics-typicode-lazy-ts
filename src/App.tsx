import { useState, useEffect } from 'react'
import './App.css'
import List from "./List"

import { usersType, todosType } from './app.Types'

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTodos, setSelectedTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUsers(result));

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result));
  }, []);

  const selectUser = (id: number) => {
     const filterTodos = todos.filter((u: todosType) => u.userId === id);

    setSelectedUser(id.toString());
    setSelectedTodos(filterTodos);

  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: usersType) => (
            <tr key={user?.id} onClick={() => selectUser(user?.id)}>
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <List items={selectedTodos} />

    </>
  )
}

export default App
