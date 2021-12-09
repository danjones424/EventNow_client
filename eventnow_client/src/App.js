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
// import axios from 'axios';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	function handleLogin() {
		setLoggedIn(true);
	}
	function setLoggedOut() {
		setLoggedIn(false);
	}

	useEffect(() => {
		fetch('/me')
			.then((r) => r.json())
			.then((user) => {
				console.log(user);
				if (user.errors) {
					setLoggedOut();
				} else {
					setLoggedIn(true);
					setCurrentUser(user);
				}
			});
	}, []);

	const handleLogOut = () => {
		fetch('/logout', { method: 'DELETE' })
			.then((r) => r.json())
			.then(setLoggedIn(false))
			.catch((error) => console.log(error));
	};

	if (!loggedIn) return <NewLogin handleLogin={handleLogin} />;
	return (
		<div className="App">
			<Navbar loggedIn={loggedIn} handleLogOut={handleLogOut} />;
			<Routes>
				<Route path="/" element={<Home currentUser={currentUser} />} />
				<Route
					path="home"
					element={<Home currentUser={currentUser} />}
				/>
				{/* <Route path="login" element={<NewLogin />} /> */}
			
			</Routes>
		</div>
	);
}

export default App;
