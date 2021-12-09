import axios from 'axios';
import { useEffect, useState } from 'react';
import EventItem from './EventItem';

const AllEventsContainer = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/others')
			.then((r) => r.json())
			.then((events) => {
				// FILTER EVENTS WHERE currentUser.id !== attendances.user_id

				setFetchedEvents(events);
				setContentLoaded(true);
				console.log('Fetched Again!');
				debugger;
			});
	}, []);

	const renderEvent = (eventsToRender) => {
		return eventsToRender.map((eventItem) => {
			return (
				<EventItem
					handleRSVP={handleRSVP}
					key={eventItem.id}
					eventItem={eventItem.event}
				/>
			);
		});
	};

	const handleRSVP = (e) => {
		const eventID = e.id;
		const userID = currentUser;
		fetch('/attendances', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: userID,
				event_id: eventID,
				host: false,
			}),
		})
			.then((r) => r.json())
			.then(console.log('Attendance created!'))
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	// axios
	// 		.post('/login', null, {
	// 			params: {
	// 				username,
	// 				password,
	// 			},
	// 		})
	// 		.then((resp) => {
	// 			console.log(resp);
	// 			setAlert(false);
	// 			handleLogin();
	// 		})
	// 		.catch((error) => {
	// 			console.log('error', error);
	// 			setAlert(true);
	// 		});

	return <>{contentLoaded ? renderEvent(fetchedEvents) : null}</>;
};

export default AllEventsContainer;
