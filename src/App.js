import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import React, { useEffect, useState } from "react";

//Importar Component
//import MiComponente from './components/MiComponente';

function App() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "yellow" }}>Posts from JSON Placeholder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {users &&
          users.map((user) => (
            <div className="item-container">
              Id: {user.id} <div className="title">Title: {user.title}</div>
              <hr />
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
