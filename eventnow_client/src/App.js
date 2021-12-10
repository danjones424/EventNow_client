import './App.css';
// import {Link} from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import { useState } from 'react';
import Navbar from './components/Navbar';
import NewLogin from './components/NewLogin';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

// import axios from 'axios';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	
	function handleLogin() {
		setLoggedIn(true);
	}
	function setLoggedOut() {
		setLoggedIn(false);
	}

	// useEffect(() => {
	// 	fetch('/me')
	// 		.then((r) => r.json())
	// 		.then((user) => {
	// 			if (user.errors) {
	// 				setLoggedOut();
	// 			} else {
	// 				console.log(user)
	// 				setLoggedIn(true);
	// 				setCurrentUser(user);
	// 			}
	// 		});
	// }, []);

	const handleLogOut = () => {
		fetch('/logout', { method: 'DELETE' })
			.then((r) => r.json())
			.then(setLoggedOut()) 
			.catch((error) => console.log(error));
	};

	return (
		<div className="App">
			<Navbar loggedIn={loggedIn} handleLogOut={handleLogOut} />
			{!loggedIn ? 
				<Routes>
				<Route path="/" element={<NewLogin handleLogin={handleLogin}/>} />
				<Route path="login" element={<NewLogin handleLogin={handleLogin}/>} />
				<Route path="signup" element={<Signup handleLogin={handleLogin} />} />
				</Routes>
			: <Routes>
				<Route path="/" element={<Home  />} />
				<Route
					path="home"
					element={<Home />}
				/>
				{/* <Route path="login" element={<NewLogin />} /> */}
			</Routes>}
		</div>
	);
}

export default App;
