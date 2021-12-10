import { Paper, TextField, Grid, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useState, useEffect } from 'react';

const EventCreateForm = ({ currentUser, eventCreatedFunction }) => {
	const [eventForm, setEventForm] = useState({
		event_name: '',
		category: '',
		description: '',
		date: '',
		location_id: 3,
		address: '',
		city: '',
		state: '',
		zipcode: '',
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
				eventCreatedFunction();
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
		height: 'auto',
		width: '70vh',
		margin: '20px auto',
	};

	const [value, onChange] = useState(new Date());

	return (
		<div className="event-form">
			<div></div>
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
					placeholder="Date: YYYY/MM/DD"
					fullWidth
					name="date"
					type="text"
					onChange={handleForm}
					required
				></TextField>

				<br></br>
				<TextField
					placeholder="Address"
					fullWidth
					name="address"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<TextField
					placeholder="City"
					fullWidth
					name="city"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<TextField
					placeholder="State"
					fullWidth
					name="state"
					type="text"
					onChange={handleForm}
					required
				></TextField>
				<br></br>
				<TextField
					placeholder="Zipcode"
					fullWidth
					name="zipcode"
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
