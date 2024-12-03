import React from "react";
import UserList from "./UserList"; 
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1> Management App</h1>
      <UserList />
    </div>
  );
};

export default App;
