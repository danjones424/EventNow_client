import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../styles/Navbar.style';
import AllEventsContainer from './AllEventsContainer';
import EventCreateForm from './EventCreateForm';
import MyEventsContainer from './MyEventsContainer';

const Home = ({ currentUser }) => {
	const [createMode, setCreateMode] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [showMyEvents, setShowMyEvents] = useState(false);

	// const [newData, setData] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get('/me')
	// 		.then((resp) => {
	// 			console.log(resp.data);
	// 			// setData(resp.data);
	// 			name = resp.data.username;
	// 		})
	// 		.catch((error) => {
	// 			console.log('error', error);
	// 		});
	// }, []);

	// const name = newData.username;
	const handleCreateMode = () => {
		setCreateMode(!createMode);
	};

	const eventCreatedFunction = () => {
		setCreateMode(false);
	};
	return (
		<div>
			<h1 className="company_name">
				Welcome to EventsNow, {currentUser.username}!
			</h1>
			{createMode ? (
				<EventCreateForm eventCreatedFunction={eventCreatedFunction} />
			) : null}
			<Button
				onClick={() => {
					setShowEvents(!showEvents);
				}}
			>
				What's happening?
			</Button>
			{showEvents ? (
				<AllEventsContainer currentUser={currentUser} />
			) : null}
			<Button onClick={handleCreateMode}>Create Event?</Button>
			{/* RENDER ALL EVENTS */}
			{/* BUTTON THAT RENDERS MY EVENTS */}

			<Button
				onClick={() => {
					setShowMyEvents(!showMyEvents);
				}}
			>
				My Events
			</Button>
			{showMyEvents ? (
				<MyEventsContainer key={10} currentUser={currentUser} />
			) : null}
			{/* INSIDE OF MYEVENTS COMPONENT, BUTTON TO RENDER EVENT FORM, ENABLING EVENT CREATION */}
		</div>
	);
};

export default Home;
