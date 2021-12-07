import './App.css';
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [newData, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then(resp => {
      console.log(resp.data)
      setData(resp.data);
    })
    .catch(error => {
      console.log("error", error);
    })},[])


  return (
    <div className="App">
      <h1>EventNow</h1>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/users" newData={newData}>Users</Link>
    </div>
  );
}

export default App;
