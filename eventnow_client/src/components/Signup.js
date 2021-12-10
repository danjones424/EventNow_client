import React, { useState } from 'react';
import axios from 'axios';
import {
	Grid,
	Paper,
	Button,
	Avatar,
	TextField
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

const Signup = ({handleLogin}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirmation, setPasswordcon] = useState('');
	const [email, setEmail] = useState('');
	const [alert, setAlert] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/signup', null, {
				params: {
					username,
					password,
					email,
					password_confirmation,
				},
			})
			.then((resp) => {
				handleLogin()
	
			})
			.catch((error) => {
				console.log('error', error);
				setAlert(true)
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
		<Grid onSubmit={handleSubmit}>
			{alert ? (
				<Alert severity="error">
					Invalid Login. Check Username and/or Password
				</Alert>
			) : null}
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockOutlinedIcon />
					</Avatar>
					<h2>Sign Up</h2>
				</Grid>
				<TextField
					label="Username"
					placeholder="Enter username"
					onChange={(e) => setUsername(e.target.value)}
					fullWidth
					required
				/>
				<TextField
					label="Email"
					placeholder="Enter Email"
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
					required
				/>
				<TextField
					label="Password"
					placeholder="Enter Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					fullWidth
					required
				/>
				<TextField
					label="Confirm Password"
					placeholder="Password"
					type="password"
					onChange={(e) => setPasswordcon(e.target.value)}
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
					Sign up
				</Button>
			</Paper>
		</Grid>
	);
};

export default Signup;
