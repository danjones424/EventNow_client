import './App.css';
// import {Link} from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Users from './components/Users';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NewLogin from './components/NewLogin';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';




function App() {
	const [loggedIn, setLoggedIn] = useState(false);
  const [newData, setData] = useState([])


	function handleLogin() {
		setLoggedIn(true);
	}
  // useEffect(() => {
    axios.get("/me")
    .then(resp => {
      console.log(resp.data)
      setData(resp.data);
    })
    .catch(error => {
      console.log("error", error);
    })
    const name = newData.username
    console.log(name)

	if (!loggedIn) return <NewLogin handleLogin={handleLogin} />;

  
    
	return (
		<div className="App">
      <Navbar />;
			<h1 className="company_name">Welcome to EventsNow, {name}</h1>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				{/* <Route path="login" element={<NewLogin />} /> */}
				<Route path="usernames" element={<Users />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
