import './App.css';
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {


  return (
    <div className="App">
      <h1>EventNow</h1>
      <nav>
      <Link to="/users">Login</Link>
      <br></br>
      <Link to="/usernames">Users</Link>
      <br></br>
      <Link to="signup">Sign Up</Link>
      </nav>
    </div>
  );
}

export default App;
