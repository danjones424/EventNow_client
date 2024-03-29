import { useEffect, useState } from 'react';
import EventItem from './EventItem';

const AllEventsContainer = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/events')
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setFetchedEvents(data);
				setContentLoaded(true);
				console.log('Fetched Again!');
			});
	}, []);

	console.log(fetchedEvents);
	const renderEvent = (eventsToRender) => {
		return eventsToRender.map((eventItem) => {
			return (
				<EventItem
					handleRSVP={handleRSVP}
					key={Math.floor(Math.random() * 10000)}
					eventItem={eventItem}
				/>
			);
		});
	};

	const handleRSVP = (e) => {
		console.log(e.id);
		console.log(currentUser.id);
		const eventID = e.id;
		const userID = currentUser.id;

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
			.then((data) => {
				setFetchedEvents(data);
			})
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
