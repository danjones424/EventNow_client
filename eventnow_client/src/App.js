import './App.css';
// import {Link} from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NewLogin from './components/NewLogin';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	function handleLogin() {
		setLoggedIn(true);
	}
	if (!loggedIn) return <NewLogin handleLogin={handleLogin} />;
	return (
		<div className="App">
			<h1 className="company_name">EventsNow</h1>
			<Navbar />;
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
