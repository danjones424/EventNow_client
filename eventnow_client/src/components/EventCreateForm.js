import { Paper, TextField, Grid, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useState, useEffect } from 'react';

const EventCreateForm = ({ currentUser }) => {
	const [eventForm, setEventForm] = useState({
		event_name: '',
		category: '',
		description: '',
		date: '',
		location_id: 3,
	});

	useEffect(() => {
		fetch('/me')
			.then((r) => r.json())
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	console.log(currentUser);
	const avatarStyle = { backgroundColor: '#CC5A71' };

	// const [newEvent, setNewEvent] = useState({});

	const handleForm = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setEventForm({ ...eventForm, [name]: value });
	};

	const configObj = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventForm),
	};

	// const attendanceObj = {
	// 	user_id: currentUser.id,
	// 	event_id: newEvent.id,
	// 	host: true,
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/events', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(eventForm),
		})
			.then((r) => r.json())
			.then((event) => {
				console.log(event);
				// setNewEvent(event);
			});
	};

	// useEffect(() => {
	// 	fetch('/attendances', {
	// 		method: 'POST',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(attendanceObj),
	// 	})
	// 		.then((r) => r.json())
	// 		.then(console.log);
	// }, [newEvent]);
	const paperStyle = {
		padding: 20,
		height: '40vh',
		width: '50vh',
		margin: '20px auto',
	};
	return (
		<div className="event-form">
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Create Event</h2>
				</Grid>
				<TextField
					placeholder="Event Name"
					fullWidth
					name="event_name"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<TextField
					placeholder="Category"
					fullWidth
					name="category"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>

				<TextField
					placeholder="Description"
					fullWidth
					name="description"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>

				<TextField
					placeholder="Date"
					fullWidth
					name="date"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<button onClick={handleSubmit}>Submit</button>
			</Paper>
		</div>
	);
};
export default EventCreateForm;
