import { useEffect, useState } from 'react';
import EventItem from './EventItem';
import HostedEventItem from './HostedEventItem';

const HostedEvents = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/host')
			.then((r) => r.json())
			.then((events) => {
				setFetchedEvents(events);
				setContentLoaded(true);
				console.log('Fetched Again!');
			});
	}, []);

	const handleRefetch = () => {
		fetch('/host')
			.then((r) => r.json())
			.then((events) => {
				console.log(events);
				setFetchedEvents(events);
				setContentLoaded(true);
				console.log('Fetched Again!');
			});
	};

	const handleDelete = (doomedEvent) => {
		console.log(doomedEvent);
		fetch(`/events/${doomedEvent.id}`, {
			method: 'DELETE',
		})
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setFetchedEvents(data);
			});
	};

	console.log(fetchedEvents);
	console.log(contentLoaded);

	const renderEvents = fetchedEvents.map((eventItem) => {
		return (
			<HostedEventItem
				key={eventItem.id}
				eventItem={eventItem}
				handleRefetch={handleRefetch}
				handleDelete={handleDelete}
			/>
		);
	});

	// const renderEvent = (eventsToRender) => {
	// 	return eventsToRender.map((eventItem) => {
	// 		console.log(eventItem);
	// 		return (
	// 			<HostedEventItem
	// 				handleRefetch={handleRefetch}
	// 				key={Math.floor(Math.random() * 10000)}
	// 				eventItem={eventItem}
	// 				currentUser={currentUser}
	// 			/>
	// 		);
	// 	});
	// };

	return <>{contentLoaded ? renderEvents : null}</>;
};

export default HostedEvents;
