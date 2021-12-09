import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

import axios from 'axios';

const NewLogin = ({ handleLogin }) => {
	const [alert, setAlert] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/login', null, {
				params: {
					username,
					password,
				},
			})
			.then((resp) => {
				console.log(resp);
				setAlert(false);
				handleLogin();
			})
			.catch((error) => {
				console.log('error', error);
				setAlert(true);
			});
	};

	const paperStyle = {
		padding: 20,
		height: '70vh',
		width: '50vh',
		margin: '20px auto',
	};
	const avatarStyle = { backgroundColor: '#CC5A71' };
	const btnstyle = { margin: '8px 0', backgroundColor: '#F0F757' };

	return (
		<Grid>
			{alert ? (
				<Alert severity="error">
					Invalid Login. Check Username and/or Password
				</Alert>
			) : (
				<></>
			)}
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockOutlinedIcon />
					</Avatar>
					<h2>Sign In</h2>
				</Grid>
				<TextField
					label="Username"
					placeholder="Enter username"
					onChange={(e) => setUsername(e.target.value)}
					fullWidth
					required
				/>
				<TextField
					label="Password"
					placeholder="Enter password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					fullWidth
					required
				/>
				<Button
					type="submit"
					onClick={handleSubmit}
					variant="contained"
					style={btnstyle}
					fullWidth
				>
					Sign in
				</Button>
				<Typography className="typo">
					Do you have an account?
					<Link to="/signup"> Sign Up </Link>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default NewLogin;
