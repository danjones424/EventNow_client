import { useEffect, useState } from 'react';
import EventItem from './EventItem';

const AllEventsContainer = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState({});
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/events')
			.then((r) => r.json())
			.then((events) => {
				// FILTER EVENTS WHERE currentUser.id !== attendances.user_id
				setFetchedEvents(events);
				setContentLoaded(true);
			});
	}, []);

	const renderEvent = (eventsToRender) => {
		return eventsToRender.map((eventItem) => {
			return <EventItem key={eventItem.id} eventItem={eventItem} />;
		});
	};

	return <>{contentLoaded ? renderEvent(fetchedEvents) : null}</>;
};

export default AllEventsContainer;
