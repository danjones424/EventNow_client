import { useEffect, useState } from 'react';
import HostedEventItem from './HostedEventItem';

const HostedEvents = ({ currentUser }) => {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [contentLoaded, setContentLoaded] = useState(false);
	// const [filteredEvents, setFilteredEvents] = useState({});

	useEffect(() => {
		fetch('/host')
			.then((r) => r.json())
			.then((events) => {
				console.log(events);
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
    }

    
	console.log(fetchedEvents);

	const renderEvent = (eventsToRender) => {
		return eventsToRender.map((eventItem) => {
			console.log(eventItem);
			return (
				<HostedEventItem
                    handleRefetch={handleRefetch}
					key={Math.floor(Math.random() * 10000)}
					eventItem={eventItem}
					currentUser={currentUser}
				/>
			);
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

export default HostedEvents;