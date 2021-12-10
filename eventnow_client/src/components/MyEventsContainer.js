import { useEffect, useState } from 'react';
import EventItem from './EventItem';

const MyEventsContainer = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/attending_not_host')
			.then((r) => r.json())
			.then((events) => {
				// FILTER EVENTS WHERE currentUser.id !== attendances.user_id
				console.log(events);
				setFetchedEvents(events);
				setContentLoaded(true);
				console.log('Fetched Again!');
			});
	}, []);

	console.log(fetchedEvents);

	const renderEvent = (eventsToRender) => {
		return eventsToRender.map((eventItem) => {
			console.log(eventItem);
			return (
				<EventItem
					handleBail={handleBail}
					key={Math.floor(Math.random() * 10000)}
					eventItem={eventItem}
					currentUser={currentUser}
				/>
			);
		});
	};

	const handleBail = (e) => {
		console.log(e);
		fetch(`/attendances/${e.id}`, {
			method: 'DELETE',
		}).then((r) => r.json());

		// })
		// .then((r) => r.json())
		// .then(console.log('Attendance created!'))
		// .catch((error) => {
		// 	console.error('Error:', error);
		// });
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

export default MyEventsContainer;
