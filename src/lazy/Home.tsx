import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import List from "./List"
import { usersType, todosType, postsType, albumsType } from './app.Types'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  //const [setSelectedUser] = useState("");
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState([]);
  
  const ListItems = [
    {
      userId: 3,
      title: "☕ Coffee",
      total: 12,
    },
    {
      userId: 3,
      title: "🌮 Tacos",
      total: 10,
    },
    {
      userId: 3,
      title: "💻 Code",
      total: 9,
    },
    {
      userId: 3,
      title: "⛵ Sailboat",
      total: 6,
    },
    {
      userId: 3,
      title: "✈ Plane",
      total: 3,
    }
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUsers(result));

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result));

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setPosts(result));

      fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((result) => setAlbums(result));
  }, []);

  const selectUser = (id: number) => {
     const filterTodos = todos.filter((u: todosType) => u.userId === id);
     const filterPosts = posts.filter((u: postsType) => u.userId === id);
     const filterAlbums = albums.filter((u: albumsType) => u.userId === id);

    //setSelectedUser(id.toString());
    setSelectedTodos(filterTodos);
    setSelectedPosts(filterPosts);
    setSelectedAlbums(filterAlbums);
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

  return (
    <>
      <h3>
        <Link style={linkStyle} to="/admin">Go to Admin</Link>
      </h3>
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
      <List items={selectedPosts} />
      <List items={selectedAlbums} />
      <List items={ListItems} />
    </>
  )
}
export default Home
