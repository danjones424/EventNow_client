import { useEffect, useState } from 'react';
import AttendingEventItem from './AttendingEventItem';
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
				<AttendingEventItem
					handleBail={handleBail}
					key={Math.floor(Math.random() * 10000)}
					eventItem={eventItem}
					currentUser={currentUser}
				/>
			);
		});
	};

	const handleBail = (e = {}) => {
		console.log(e.id);
		fetch(`/attendances/${e.id}`, {
			method: 'DELETE',
		});
	};

	return <>{contentLoaded ? renderEvent(fetchedEvents) : null}</>;
};

export default MyEventsContainer;
